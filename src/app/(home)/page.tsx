import React from "react";
import "@/styles//appButton.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import { accordionData } from "./components/data";

import Pankuzu from "@/components/path/Pankuzu";
import { fetchHome } from "@/api/home";
const page = () => {
  try {
    const response = fetchHome();
    console.log(response);
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
