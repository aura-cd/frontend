import Breadcrumb from "@/components/Breadcrumb";
import DataTableComponent from "@/components/DetaTable/DataTableComponent";
import "@/styles/pageStyles/home.scss";
import ButtonArea from "./ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import { accordionData } from "./data";
const page = () => {
  return (
    <div className='container'>
      <Breadcrumb />
      <div className='mainContainer'>
        <ButtonArea />
        <AccordionComponent data={accordionData} />
      </div>
    </div>
  );
};

export default page;
