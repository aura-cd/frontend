import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "@/styles/sheet.scss";
import Link from "next/link";
import { ReactNode } from "react";
import TabComponent from "@/components/TabComponent";

function SheetComponent({
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
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='title'>{title}</SheetTitle>

          <Link href='/branch' passHref>
            <p className='branch-link'>{description}</p>
          </Link>
        </SheetHeader>
        <TabComponent />
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent;
