"use client";
import React, { useState, useEffect } from "react";
import "@/styles//appButton.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";

import Pankuzu from "@/components/path/Pankuzu";
import { fetchOrganizationInterface } from "@/api/interface/organization";
import { fetchOrganization } from "@/api/organization";
import { fetchOrganizationApp } from "@/api/repository";

const Page = () => {
  const [data, setData] = useState<fetchOrganizationInterface | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchOrganization();
        const res = await fetchOrganizationApp("test1");
        console.log(res);
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
