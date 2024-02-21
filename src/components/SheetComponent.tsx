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

function SheetComponent({
  openButton,
  children,
  description,
  title,
}: {
  openButton: ReactNode;
  children: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{openButton}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='title'>{title}</SheetTitle>

          <Link href='/branch' passHref>
            <p className='branch-link'>{description}</p>
          </Link>
        </SheetHeader>
        {children}
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent;
