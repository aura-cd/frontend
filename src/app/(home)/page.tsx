"use client";
import "@/styles/appButton.scss";

import { useEffect, useState } from "react";

import ButtonArea from "@/app/(home)/components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import Pankuzu from "@/components/path/Pankuzu";
import { useOrg } from "@/hook/useOrg";
const Page = () => {
  const { data } = useOrg();

  return (
    <div className="container">
      <Pankuzu />
      <div>
        <ButtonArea />
        {data === undefined ? (
          <div>No Data</div>
        ) : (
          <AccordionComponent data={data} />
        )}
      </div>
    </div>
  );
};

export default Page;
