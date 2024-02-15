import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/router";
import { decrypt } from "./encryption";

export async function getAccessToken() {
  const session: any = await getServerSession(authOptions);

  if (session) {
    const accessTokenDecrypted = decrypt(session.accessToken);
  }
  return null;
}

export async function getIdToken() {
  const session: any = await getServerSession(authOptions);
  if (session) {
    const idTokenDecrypted = decrypt(session.idToken);
    return idTokenDecrypted;
  }
  return null;
}
