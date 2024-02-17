import Breadcrumb from "@/components/Breadcrumb";
import "@/styles/componentStyles/appButton.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import { accordionData } from "./components/data";
import ProgressComponent from "@/components/ProgressComponent";
const page = () => {
  return (
    <div className='container'>
      <Breadcrumb />
      <div>
        <ButtonArea />
        <AccordionComponent data={accordionData} />
        <ProgressComponent value={62} />
      </div>
    </div>
  );
};

export default page;
