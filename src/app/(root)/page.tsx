import React, { ReactNode } from "react";
//配列の長さを合わせる
type FixedLengthArray<
  T extends string[] | ReactNode[],
  N extends number
> = N extends T["length"] ? T : never;

type TabContentTuple<N extends number> = {
  tabValue: FixedLengthArray<string[], N>;
  content: FixedLengthArray<ReactNode[], N>;
};

const page = () => {
  return <div>fix</div>;
};
export default page;
