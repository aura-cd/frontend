"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { Button } from "../ui/button";
import "@/styles/componentStyles/appButton.scss";

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

export default function AuthStatus() {
  const { data: session, status } = useSession();
  console.log(session);
  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      // @ts-ignore
      session.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  if (status == "loading") {
    return <div className='mx-5'>Loading...</div>;
  } else if (session) {
    return (
      <div className='mx-5'>
        <Button
          className='installAppButton'
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}
        >
          Log out
        </Button>
      </div>
    );
  }

  return (
    <div className='my-3'>
      <Button className='installAppButton' onClick={() => signIn("keycloak")}>
        Log in
      </Button>
    </div>
  );
}
