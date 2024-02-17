import AccordionComponent from "@/components/AccordionComponent";
import React from "react";
import "@/styles/pageStyles/home.scss";
import { useSearchParams } from "next/navigation";

const accordionData = [
  {
    title: "Title 1",
    content: "Content 1",
  },
  {
    title: "Title 2",
    content: "Content 2",
  },
  {
    title: "Title 3",
    content: "Content 3",
  },
];
const page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const pageNum = searchParams.page;
  console.log(pageNum);
  return (
    <div className='container'>
      <div>
        <AccordionComponent data={accordionData} />
      </div>
    </div>
  );
};

export default page;
