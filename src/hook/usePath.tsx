"use client";
import { usePathname } from "next/navigation";

export const usePath = () => {
  const router = usePathname();
  const routerParts = router.split("/");
  const orgName = routerParts[1];
  const repoName = routerParts[2];

  return { orgName, repoName };
};
