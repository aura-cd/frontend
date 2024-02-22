import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@/styles/tab.scss";

const TabComponent = (props: { title: string[]; tabData: ReactNode[] }) => {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='list'>
        {props.title &&
          props.title.map((tab: string, index: number) => (
            <TabsTrigger className='trigger' key={index} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
      </TabsList>

      {props.tabData &&
        props.tabData.map((con: ReactNode, index: number) => (
          //@ts-ignore
          <TabsContent key={index} value={title[index]}>
            {con}
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default TabComponent;
