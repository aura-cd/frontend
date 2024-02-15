import Cryptr from "cryptr";
//シークレットキーを暗号化
export function encrypt(text: string): string {
  const secretKey = process.env.NEXTAUTH_SECRET;
  const cryptr = new Cryptr(secretKey!);

  const encryptedString: string = cryptr.encrypt(text);
  return encryptedString;
}
//シークレットキーを復号化
export function decrypt(encryptedString: string): string {
  const secretKey = process.env.NEXTAUTH_SECRET;
  const cryptr = new Cryptr(secretKey!);

  const text: string = cryptr.decrypt(encryptedString);
  return text;
}
