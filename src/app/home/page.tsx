import Breadcrumb from "@/components/Breadcrumb";
import "@/styles/pageStyles/home.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import { accordionData } from "./components/data";
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
