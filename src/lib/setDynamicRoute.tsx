"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function SetDynamicRoute() {
  const router = useRouter();

  useEffect(() => {
    // ルートの変更を検知してリフレッシュ
    router.refresh();
  }, [router]);

  return <></>;
}
