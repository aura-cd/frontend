import Pankuzu from "@/components/path/Pankuzu";
import "@/styles/componentStyles/appButton.scss";
import ButtonArea from "./components/ButtonArea";
import AccordionComponent from "@/components/AccordionComponent";
import { accordionData } from "./components/data";
const page = () => {
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
