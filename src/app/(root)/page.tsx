import React from "react";
import { TableData } from "@/mock/TableData";
import SheetComponent from "@/components/SheetComponent";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <>
      <SheetComponent
        openButton={<Button>Open Sheet</Button>}
        closeButton='Close Sheet'
        description='This is a sheet component'
        title='Sheet Component'
      >
        tesss
      </SheetComponent>
    </>
  );
};

export default page;
