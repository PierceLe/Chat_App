interface AsymmetricKeyPair {
  publicKey: CryptoKey;
  privateKey: CryptoKey;
}

export async function generateSymmetricKey(): Promise<string> {
  const key = await crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );
  const exportedKey = await crypto.subtle.exportKey('raw', key);
  return Buffer.from(exportedKey).toString('base64');
}

export async function generateAsymmetricKeyPair(): Promise<{
  publicKey: string;
  privateKey: string;
}> {
  const keyPair = await crypto.subtle.generateKey(
    {
      name: 'RSA-OAEP',
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]), // 65537
      hash: 'SHA-256',
    },
    true,
    ['encrypt', 'decrypt']
  );
  const publicKey = await crypto.subtle.exportKey('spki', keyPair.publicKey);
  const privateKey = await crypto.subtle.exportKey('pkcs8', keyPair.privateKey);
  return {
    publicKey: Buffer.from(publicKey).toString('base64'),
    privateKey: Buffer.from(privateKey).toString('base64'),
  };
}

export async function importPublicKey(publicKeyBase64: string): Promise<CryptoKey> {
  const publicKeyBuffer = Buffer.from(publicKeyBase64, 'base64');
  return await crypto.subtle.importKey(
    'spki',
    publicKeyBuffer,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256',
    },
    true,
    ['encrypt']
  );
}

export async function importPrivateKey(privateKeyBase64: string): Promise<CryptoKey> {
  const privateKeyBuffer = Buffer.from(privateKeyBase64, 'base64');
  return await crypto.subtle.importKey(
    'pkcs8',
    privateKeyBuffer,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256',
    },
    true,
    ['decrypt']
  );
}

export async function importSymmetricKey(symmetricKeyBase64: string): Promise<CryptoKey> {
  const keyBuffer = Buffer.from(symmetricKeyBase64, 'base64');
  return await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );
}

export async function encryptSymmetricKey(symmetricKeyBase64: string, publicKeyBase64: string): Promise<string> {
  const symmetricKey = await importSymmetricKey(symmetricKeyBase64);
  const publicKey = await importPublicKey(publicKeyBase64);
  const exportedKey = await crypto.subtle.exportKey('raw', symmetricKey);
  const encryptedKey = await crypto.subtle.encrypt(
    {
      name: 'RSA-OAEP',
    },
    publicKey,
    exportedKey
  );
  return Buffer.from(encryptedKey).toString('base64');
}

export async function decryptSymmetricKey(encryptedKeyBase64: string, privateKeyBase64: string): Promise<string> {
  const encryptedKey = Buffer.from(encryptedKeyBase64, 'base64');
  const privateKey = await importPrivateKey(privateKeyBase64);
  const decryptedKey = await crypto.subtle.decrypt(
    {
      name: 'RSA-OAEP',
    },
    privateKey,
    encryptedKey
  );
  return Buffer.from(decryptedKey).toString('base64');
}

export async function encryptMessage(message: string, symmetricKeyBase64: string): Promise<string> {
  const symmetricKey = await importSymmetricKey(symmetricKeyBase64);
  const encodedMessage = new TextEncoder().encode(message);
  const iv = crypto.getRandomValues(new Uint8Array(12)); // IV 12 byte cho AES-GCM
  const encryptedMessage = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    symmetricKey,
    encodedMessage
  );
  const combined = new Uint8Array(iv.length + encryptedMessage.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(encryptedMessage), iv.length);
  return Buffer.from(combined).toString('base64');
}

export async function decryptMessage(encryptedMessageBase64: string, symmetricKeyBase64: string): Promise<string> {
  const symmetricKey = await importSymmetricKey(symmetricKeyBase64);
  const combined = Buffer.from(encryptedMessageBase64, 'base64');
  const iv = combined.slice(0, 12);
  const ciphertext = combined.slice(12);
  const decryptedMessage = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    symmetricKey,
    ciphertext
  );
  return new TextDecoder().decode(decryptedMessage);
}
