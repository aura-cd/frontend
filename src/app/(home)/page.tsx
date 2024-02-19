import React from "react";
import "@/styles//appButton.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import { accordionData } from "./components/data";

import Pankuzu from "@/components/path/Pankuzu";
import useSWR from "swr";
const page = () => {
  try {
    const { data } = useSWR("localhost:8080/home");
    console;
    console.log("data", data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
  return (
    <div className='container'>
      <Pankuzu />
      <div>
        <ButtonArea />
        <AccordionComponent data={accordionData} />
      </div>
    </div>
  );
};
export default page;
