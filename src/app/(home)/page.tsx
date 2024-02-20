"use client";
import React, { useState, useEffect } from "react";
import "@/styles//appButton.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import { accordionData } from "./components/data";

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
      <div>
        {data?.organizationInfos.map((organizationInfo, index) => {
          return (
            <div key={index}>
              <h2>{organizationInfo.organization}</h2>
              <ul>
                {organizationInfo.repositories.map((repository, index) => {
                  return <li key={index}>{repository}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <Pankuzu />
      <div>
        <ButtonArea />
        <AccordionComponent data={accordionData} />
      </div>
    </div>
  );
};

export default Page;
