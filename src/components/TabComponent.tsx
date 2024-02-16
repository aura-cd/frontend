import React, { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FixedLengthArray<
  T extends string[] | ReactNode[],
  N extends number
> = N extends T["length"] ? T : never;

type TabContentTuple<N extends number> = {
  tabValue: FixedLengthArray<string[], N>;
  content: FixedLengthArray<ReactNode[], N>;
};

const TabComponent = (props: TabContentTuple<2 | 3 | 4 | 5 | 6>) => {
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
