import React, { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FixedLengthArray<
  T extends string[] | React.JSX.Element[],
  N extends number
> = N extends T["length"] ? T : never;

type TabContentTuple<N extends number> = {
  title: FixedLengthArray<string[], N>;
  tabData: FixedLengthArray<React.JSX.Element[], N>;
};

const TabComponent = (props: TabContentTuple<2 | 3 | 4 | 5 | 6>) => {
  const { tabData, title } = props;
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList>
        {title &&
          title.map((tab: string) => (
            <TabsTrigger key={tab} value={tab}>
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
