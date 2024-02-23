import "@/styles/tab.scss";

import { ReactNode } from "react";

import InformationContents from "@/components/branch/information/InformationContents";
import LogContents from "@/components/branch/log/LogContents";
import OptionContents from "@/components/branch/option/OptionContents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const TabComponent = () => {
  const title = ["Information", "Log", "Option"];
  const tabData = [
    <InformationContents key="info" />,
    <LogContents key="log" />,
    <OptionContents key="option" />,
  ];

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="list">
        {title &&
          title.map((tab: string, index: number) => (
            <TabsTrigger className="trigger" key={index} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
      </TabsList>

      {tabData &&
        tabData.map((con: ReactNode, index: number) => (
          <TabsContent key={index} value={title[index]}>
            {con}
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default TabComponent;
