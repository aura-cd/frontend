"use client";

import "@/styles//appButton.scss";
import "@/styles/appButton.scss";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { RiLoaderFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

export default function AuthStatus() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      (session as unknown as { error: string }).error ===
        "RefreshAccessTokenError"
    ) {
      void signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  if (status == "loading") {
    return (
      <div className="loadingIcon">
        <RiLoaderFill className="" />
      </div>
    );
  } else if (session) {
    return (
      <div className="mx-5">
        <Button
          className="installAppButton"
          onClick={() => {
            void keycloakSessionLogOut().then(() =>
              signOut({ callbackUrl: "/" }),
            );
          }}
        >
          Log out
        </Button>
      </div>
    );
  }

  return (
    <div className="my-3">
      <Button
        className="installAppButton"
        onClick={() => void signIn("keycloak")}
      >
        Log in
      </Button>
    </div>
  );
}
