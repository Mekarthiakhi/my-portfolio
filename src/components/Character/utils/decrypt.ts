import CryptoJS from 'crypto-js';

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  const response = await fetch(url);
  const encryptedData = await response.arrayBuffer();
  
  const encryptedWordArray = CryptoJS.lib.WordArray.create(encryptedData as any);
  
  // Extract IV (first 16 bytes = 4 words)
  const iv = CryptoJS.lib.WordArray.create(encryptedWordArray.words.slice(0, 4), 16);
  
  // Extract Ciphertext (the rest)
  const ciphertext = CryptoJS.lib.WordArray.create(
    encryptedWordArray.words.slice(4),
    encryptedWordArray.sigBytes - 16
  );
  
  // Generate Key: SHA-256 of the password
  const key = CryptoJS.SHA256(password);
  
  // Decrypt using AES-CBC
  const decrypted = CryptoJS.AES.decrypt(
    { ciphertext: ciphertext } as CryptoJS.lib.CipherParams,
    key,
    { iv: iv }
  );
  
  // Convert decrypted WordArray back to ArrayBuffer
  const decryptedWords = decrypted.words;
  const sigBytes = decrypted.sigBytes;
  const buffer = new ArrayBuffer(sigBytes);
  const view = new Uint8Array(buffer);
  
  for (let i = 0; i < sigBytes; i++) {
    view[i] = (decryptedWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
  }
  
  return buffer;
};
