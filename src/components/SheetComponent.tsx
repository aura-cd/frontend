import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "@/styles/sheet.scss";
import Link from "next/link";
import { ReactNode } from "react";
import TabComponent from "./TabComponent";
import InformationContents from "./branch/information/InformationContents";
import LogContents from "./branch/log/LogContents";
import OptionContents from "./branch/option/OptionContents";
import { Button } from "./ui/button";

const tabName = ["Information", "Log", "Option"];
const tabData = [<InformationContents />, <LogContents />, <OptionContents />];
function SheetComponent({
  id,
  description,
  title,
  children,
}: {
  id?: string;
  children: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='title'>{title}</SheetTitle>

          <Link href='/branch' passHref>
            <p className='branch-link'>{description}</p>
          </Link>
        </SheetHeader>
        <TabComponent title={tabName} tabData={tabData} />
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent;
