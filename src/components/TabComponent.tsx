import React, { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabComponentProps {
  tabValue: string[];
  content: ReactNode[];
}

const TabComponent = (props: TabComponentProps) => {
  const { tabValue, content } = props;
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList>
        {tabValue &&
          tabValue.map((tab: string) => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
      </TabsList>

      {content &&
        content.map((con: ReactNode, index: number) => (
          //@ts-ignore
          <TabsContent key={index} value={tabValue[index]}>
            {con}
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default TabComponent;
