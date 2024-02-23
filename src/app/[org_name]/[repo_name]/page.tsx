"use client";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import LastPath from "@/components/path/LastPath";
import Pankuzu from "@/components/path/Pankuzu";
import useBranch from "@/hook/useBranch";
import { usePath } from "@/hook/usePath";

import BranchDataTableComponent from "./BranchDataTable/BranchDataTableComponent";
const Page = () => {
  const { orgName, repoName } = usePath();
  const { data } = useBranch(orgName, repoName);
  return (
    <div className="container">
      <Pankuzu />
      <LastPath />
      <div>
        <ButtonArea />
        {data !== undefined ? (
          <BranchDataTableComponent data={data} pageSize={5} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};

export default Page;
