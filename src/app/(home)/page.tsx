"use client";
import React, { useState, useEffect } from "react";
import "@/styles//appButton.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";

import Pankuzu from "@/components/path/Pankuzu";
import { fetchHomeInterface } from "@/api/interface/home";
import { fetchHome } from "@/api/home";

const Page = () => {
  const [data, setData] = useState<fetchHomeInterface | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHome();
        if (response !== null || undefined) {
          setData(response);
        }
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
        <ButtonArea />
        <AccordionComponent data={data} />
      </div>
    </div>
  );
};

export default Page;
