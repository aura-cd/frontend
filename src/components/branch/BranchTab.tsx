import SheetComponent from "@/components/SheetComponent";
import TabComponent from "@/components/TabComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import LogContents from "./log/LogContents";
import OptionContents from "./option/OptionContents";
import InformationContents from "./information/InformationContents";

const title = ["Information", "Log", "Option"];
const tabData = [<InformationContents />, <LogContents />, <OptionContents />];
const BranchTab = () => {
  return (
    <div>
      <SheetComponent
        openButton={<Button>Branch</Button>}
        description='Branch description'
        title='Branch'
      >
        <TabComponent title={title} tabData={tabData} />
      </SheetComponent>
    </div>
  );
};

export default BranchTab;
