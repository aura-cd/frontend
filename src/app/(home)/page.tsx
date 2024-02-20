"use client";
import React, { useState, useEffect } from "react";
import "@/styles//appButton.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import { accordionData } from "./components/data";

import Pankuzu from "@/components/path/Pankuzu";
import { fetchHome } from "@/api/home";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHome();
        setData(response);
        console.log("response", response);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <Pankuzu />
      <div>
        <div>{data}</div> <ButtonArea />
        <AccordionComponent data={accordionData} />
      </div>
    </div>
  );
};

export default Page;
