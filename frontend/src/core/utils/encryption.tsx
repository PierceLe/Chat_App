interface AsymmetricKeyPair {
  publicKey: string;
  privateKey: string;
}

function arrayBufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = new Uint8Array(buffer);
  const binary = String.fromCharCode(...bytes);
  return btoa(binary);
}

function base64ToArrayBuffer(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
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
  return arrayBufferToBase64(exportedKey);
}

export async function generateAsymmetricKeyPair(): Promise<AsymmetricKeyPair> {
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
    publicKey: arrayBufferToBase64(publicKey),
    privateKey: arrayBufferToBase64(privateKey),
  };
}

export async function importPublicKey(publicKeyBase64: string): Promise<CryptoKey> {
  const publicKeyBuffer = base64ToArrayBuffer(publicKeyBase64);
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
  const privateKeyBuffer = base64ToArrayBuffer(privateKeyBase64);
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
  const keyBuffer = base64ToArrayBuffer(symmetricKeyBase64);
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
  return arrayBufferToBase64(encryptedKey);
}

export async function decryptSymmetricKey(encryptedKeyBase64: string, privateKeyBase64: string): Promise<string> {
  const encryptedKey = base64ToArrayBuffer(encryptedKeyBase64);
  const privateKey = await importPrivateKey(privateKeyBase64);
  const decryptedKey = await crypto.subtle.decrypt(
    {
      name: 'RSA-OAEP',
    },
    privateKey,
    encryptedKey
  );
  return arrayBufferToBase64(decryptedKey);
}

export async function encryptMessage(message: string, symmetricKeyBase64: string): Promise<string> {
  const symmetricKey = await importSymmetricKey(symmetricKeyBase64);
  const encodedMessage = new TextEncoder().encode(message);
  const iv = crypto.getRandomValues(new Uint8Array(12));
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
  return arrayBufferToBase64(combined);
}

export async function decryptMessage(encryptedMessageBase64: string, symmetricKeyBase64: string): Promise<string> {
  const symmetricKey = await importSymmetricKey(symmetricKeyBase64);
  const combined = base64ToArrayBuffer(encryptedMessageBase64);
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

export async function encryptPrivateKey(privateKeyBase64: string, pin: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const pinKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(pin),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    pinKey,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt']
  );

  const iv = crypto.getRandomValues(new Uint8Array(12)); // IV 12 byte
  const encodedPrivateKey = new TextEncoder().encode(privateKeyBase64);
  const encryptedPrivateKey = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    derivedKey,
    encodedPrivateKey
  );

  const combined = new Uint8Array(salt.length + iv.length + encryptedPrivateKey.byteLength);
  combined.set(salt, 0);
  combined.set(iv, salt.length);
  combined.set(new Uint8Array(encryptedPrivateKey), salt.length + iv.length);
  return arrayBufferToBase64(combined);
}

export async function decryptPrivateKey(encryptedPrivateKeyBase64: string, pin: string): Promise<string> {
  const combined = base64ToArrayBuffer(encryptedPrivateKeyBase64);
  const salt = combined.slice(0, 16);
  const iv = combined.slice(16, 28);
  const ciphertext = combined.slice(28);

  const pinKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(pin),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    pinKey,
    { name: 'AES-GCM', length: 256 },
    true,
    ['decrypt']
  );

  const decryptedPrivateKey = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    derivedKey,
    ciphertext
  );
  return new TextDecoder().decode(decryptedPrivateKey);
}