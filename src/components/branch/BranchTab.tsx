import SheetComponent from "@/components/SheetComponent";
import TabComponent from "@/components/TabComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import LogContents from "./log/LogContents";
import OptionContents from "./option/OptionContents";
import InformationContents from "./information/InformationContents";

const title = ["Log", "Option", "Information"];
const tabData = [<LogContents />, <OptionContents />, <InformationContents />];
const BranchTab = () => {
  return (
    <div>
      <SheetComponent
        openButton={<Button>Branch</Button>}
        description='This is a sheet component'
        title='Branch'
      >
        <TabComponent title={title} tabData={tabData} />
      </SheetComponent>
    </div>
  );
};

export default BranchTab;
