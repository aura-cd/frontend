import React, { ReactNode } from "react";
import TabComponent from "@/components/TabComponent";
//配列の長さを合わせる
type FixedLengthArray<
  T extends readonly any[],
  N extends number
> = N extends T["length"] ? T : never;

type TabContentTuple<N extends number> = {
  tabValue: FixedLengthArray<string[], N>;
  content: FixedLengthArray<ReactNode[], N>;
};

const tabContent: TabContentTuple<6> = {
  tabValue: [
    "Account",
    "Personal Information",
    "Security",
    "Notifications",
    "Billing",
    "Settings",
  ],
  content: [
    <div>Hello</div>,
    <div>World</div>,
    "This is a string",
    123,
    [<div>Nested</div>, <div>Elements</div>],
    <div>Extra Node</div>,
  ],
};

const page = () => {
  return (
    <>
      <TabComponent
        tabValue={tabContent.tabValue}
        content={tabContent.content}
      />
    </>
  );
};

export default page;
