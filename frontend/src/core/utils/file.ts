import axios from "axios";
import { encryptMessage, decryptMessage } from "./encryption";
import { BASE_API_URL } from "@/environment";

interface UploadFileResult {
  filePath: string | null;
  error?: string;
}

export const uploadFile = async (
  file: File,
  type: string,
  groupKey: string
): Promise<UploadFileResult> => {
  try {
    const fileReader = new FileReader();
    const arrayBufferPromise = new Promise<ArrayBuffer>((resolve, reject) => {
      fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
      fileReader.onerror = () => reject(new Error("Failed to read file"));
      fileReader.readAsArrayBuffer(file);
    });
    
    const arrayBuffer = await arrayBufferPromise;
    
    const uint8Array = new Uint8Array(arrayBuffer);
    const chunkSize = 1024 * 1024;
    let base64Content = '';
    
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.slice(i, Math.min(i + chunkSize, uint8Array.length));
      const binary = Array.from(chunk).map(b => String.fromCharCode(b)).join('');
      base64Content += btoa(binary);
    }

    console.log(`Encrypting file: ${file.name}, size: ${arrayBuffer.byteLength} bytes`);
    const encryptedContent = await encryptMessage(base64Content, groupKey);

    const formData = new FormData();
    formData.append("type", "private");
    
    const encryptedBlob = new Blob([encryptedContent], { type: "application/octet-stream" });
    const encryptedFile = new File([encryptedBlob], file.name, { type: "application/octet-stream" });
    formData.append("file", encryptedFile);

    console.log(`Uploading file: ${file.name}, type: ${type}`); 
    const response = await axios.post(`${BASE_API_URL}/file/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const filePath = response.data.result;
    console.log("File uploaded successfully, path:", filePath);
    return { filePath };
  } catch (error) {
    console.error("Error uploading file:", {
      message: error.message,
      stack: error.stack,
    });
    return { filePath: null, error: error.message };
  }
};

export const downloadAndDecryptFile = async (
  filePath: string,
  groupKey: string
): Promise<{ downloadUrl: string; filename: string } | null> => {
  try {
    console.log(`Downloading file from: ${filePath}`);
    const response = await axios.get(`${BASE_API_URL}/file/download?str_path=${filePath}`, {
      responseType: "text",
    });

    const encryptedContent = response.data;
    console.log("Decrypting file content");
    
    const decryptedBase64 = await decryptMessage(encryptedContent, groupKey);

    const mimeType = filePath.match(/\.(jpg|jpeg|png|gif)$/i)
      ? `image/${filePath.split(".").pop()}`
      : "application/octet-stream";
    
    const dataUrl = `data:${mimeType};base64,${decryptedBase64}`;
    const filename = filePath.split("/").pop() || "downloaded_file";

    console.log("File decrypted successfully, filename:", filename);
    return { downloadUrl: dataUrl, filename };
  } catch (error) {
    console.error("Error downloading and decrypting file:", {
      message: error.message,
      stack: error.stack,
      filePath,
    });
    return null;
  }
};