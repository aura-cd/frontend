import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Children } from "react";

import { ReactNode } from "react";

function SheetComponent({
  openButton,
  closeButton,
  children,
  description,
  title,
}: {
  openButton: ReactNode;
  closeButton: string;
  children: ReactNode;
  description: string;
  title: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{openButton}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>{closeButton}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent;

// <SheetComponent
// openButton={<Button>Open Sheet</Button>}
// closeButton='Close Sheet'
// description='This is a sheet component'
// title='Sheet Component'
// >
// tesss
// </SheetComponent>
