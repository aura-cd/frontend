import Breadcrumb from "@/components/Breadcrumb";
import TableComponent from "@/components/TableComponent";
import React from "react";

const page = () => {
  const header = ["Name", "Deployments"];
  const data = [
    {
      name: "Invoice 001",
      deployments: 10,
    },
    {
      name: "Invoice 002",
      deployments: 20,
    },
    {
      name: "Invoice 003",
      deployments: 30,
    },
  ];
  return (
    <div className='container'>
      <Breadcrumb />
      <div className='mainContainer'>
        <TableComponent data={data} header={header} />
      </div>
    </div>
  );
};

export default page;
