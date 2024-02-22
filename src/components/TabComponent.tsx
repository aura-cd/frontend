import React, { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@/styles/tab.scss";
import InformationContents from "./branch/information/InformationContents";
import LogContents from "./branch/log/LogContents";
import OptionContents from "./branch/option/OptionContents";

const TabComponent = () => {
  const title = ["Information", "Log", "Option"];
const tabData = [<InformationContents />, <LogContents />, <OptionContents />];
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='list'>
        {title &&
          title.map((tab: string, index) => (
            <TabsTrigger className='trigger' key={index} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
      </TabsList>

      {tabData &&
        tabData.map((con: ReactNode, index: number) => (
          //@ts-ignore
          <TabsContent key={index} value={title[index]}>
            {con}
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default TabComponent;
