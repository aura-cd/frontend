import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { decrypt } from "./encryption";

export async function getAccessToken() {
  const session = await getServerSession(authOptions);
  if (session) {
    const accessTokenDecrypted = decrypt(
      (session as unknown as { access_token: string }).access_token,
    );
    return accessTokenDecrypted;
  }
  return null;
}

export async function getIdToken() {
  const session = await getServerSession(authOptions);
  if (session) {
    const idTokenDecrypted = decrypt(
      (session as unknown as { id_token: string }).id_token,
    );
    return idTokenDecrypted;
  }
  return null;
}
