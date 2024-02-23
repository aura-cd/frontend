"use client";
import "@/styles//pankuzu.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Pankuzu = () => {
  const router = usePathname();
  // 各パスセグメントを結合するための変数
  let joinedPath = "";

  return (
    <div className="flex items-center text-sm px-4 mt-2 mb-2 w-full">
      {/* 現在のURLを「/」で分割し、各パスセグメントを処理 */}
      <Link href="/">
        <div className="links">home</div>
      </Link>

      {router.split("/").map((path: any, index: number) => {
        if (path) {
          joinedPath += path + "/";
          return (
            <Link key={index} href={`/${joinedPath}`}>
              <div className="links">/{path}</div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Pankuzu;
