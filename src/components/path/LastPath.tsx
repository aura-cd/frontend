"use client";
import { usePathname } from "next/navigation";
import "@/styles/componentStyles/pankuzu.scss";

const LastPath = () => {
  const router = usePathname();
  //rputerのlengthを取得
  const routerLength = router.split("/").length;
  //二個目のパスセグメントを取得
  const secondPath = router.split("/")[routerLength - 1];
  console.log(secondPath);

  return (
    <div className='flex items-center text-sm px-4 w-full'>
      <div className=''>{secondPath}</div>
    </div>
  );
};

export default LastPath;
