"use client";
import "@/styles//pankuzu.scss";

import { usePathname } from "next/navigation";

const LastPath = () => {
  const router = usePathname();
  //rputerのlengthを取得
  const routerLength = router.split("/").length;
  const path = router.split("/")[routerLength - 1];

  return (
    <div className="flex items-center text-sm px-4 w-full">
      {routerLength === 2 ? (
        <div className="path">OrganizationName : {`< ${path} >`}</div>
      ) : (
        <div className="path">RepositoryName : {`< ${path} >`}</div>
      )}
    </div>
  );
};

export default LastPath;
