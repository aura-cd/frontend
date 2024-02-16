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

// // const tabContent: TabContentTuple<6> = {
// //   tabValue: [
// //     "Account",
// //     "Personal Information",
// //     "Security",
// //     "Notifications",
// //     "Billing",
// //     "Settings",
// //   ],
// //   content: [
// //     <div>Hello</div>,
// //     <div>World</div>,
// //     "This is a string",
// //     123,
// //     [<div>Nested</div>, <div>Elements</div>],
// //     <div>Extra Node</div>,
// //   ],
// // };

// const page = () => {
//   return (
//     <>
//       <TabComponent
//         tabValue={tabContent.tabValue}
//         content={tabContent.content}
//       />
//     </>
