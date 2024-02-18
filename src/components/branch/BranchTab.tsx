import SheetComponent from "@/components/SheetComponent";
import TabComponent from "@/components/TabComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import LogContents from "./log/LogContents";
import OptionContents from "./option/OptionContents";
import InformationContents from "./information/InformationContents";

const tabData = [
  {
    title: "Information",
    content: <InformationContents />,
  },
  {
    title: "Log",
    content: <LogContents />,
  },
  {
    title: "Option",
    content: <OptionContents />,
  },
];
const BranchTab = () => {
  return (
    <div>
      <SheetComponent
        openButton={<Button>Open Sheet</Button>}
        closeButton='Close Sheet'
        description='This is a sheet component'
        title='Sheet Component'
      >
        <TabComponent
          tabValue={["Branch", "Tag", "Commit"]}
          content={["Branch content", "Tag content", "Commit content"]}
        />
      </SheetComponent>
    </div>
  );
};

export default BranchTab;
