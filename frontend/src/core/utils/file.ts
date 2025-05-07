import axios from "axios";
import { encryptMessage, decryptMessage } from "./encryption";

interface UploadFileResult {
  filePath: string | null;
  error?: string;
}

export const dataURLtoFile = (dataurl: string, filename: string): File => {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "application/octet-stream";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const uploadFile = async (
  file: File,
  type: string,
  groupKey: string
): Promise<UploadFileResult> => {
  try {
    const fileReader = new FileReader();
    const base64Promise = new Promise<string>((resolve, reject) => {
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.onerror = () => reject(new Error("Failed to read file"));
      fileReader.readAsDataURL(file);
    });
    const base64Data = await base64Promise;
    const base64Content = base64Data.split(",")[1];

    console.log("Encrypting file content");
    const encryptedContent = await encryptMessage(base64Content, groupKey);

    const encryptedBlob = new Blob([encryptedContent], { type: "application/octet-stream" });
    const encryptedFile = new File([encryptedBlob], file.name, { type: "application/octet-stream" });

    const formData = new FormData();
    formData.append("type", "public");
    formData.append("file", encryptedFile);

    console.log(`Uploading file: ${file.name}, type: ${type}`);
    const response = await axios.post("http://localhost:9990/file/upload", formData, {
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
    const response = await axios.get(`http://localhost:9990/file/download?str_path=${filePath}`, {
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