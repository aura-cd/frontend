"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const router = usePathname();
  // 各パスセグメントを結合するための変数
  let joinedPath = "";

  return (
    <div className='flex items-center text-sm px-4 w-full'>
      {/* ホームアイコンとして "/" へのリンクを表示 */}
      <Link href='/'>root </Link>
      {/* 現在のURLを「/」で分割し、各パスセグメントを処理 */}
      {router.split("/").map((path: any, index: number) => {
        // パスが空でない場合のみ処理
        if (path) {
          joinedPath += path + "/";
          return (
            <Link key={index} href={`/${joinedPath}`}>
              <span className='text-gray-500 mx-1'>/</span> {path}
            </Link>
          );
        } else if (router.split("/").length <= 2) {
          return (
            <Link key={index} href={`/${joinedPath}`}>
              <span className='text-mx-1'>/</span> {path}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumb;
