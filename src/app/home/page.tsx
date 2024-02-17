import Breadcrumb from "@/components/Breadcrumb";
import DataTableComponent from "@/components/DetaTable/DataTableComponent";
import "@/styles/pageStyles/home.scss";
import ButtonArea from "./ButtonArea";
const page = () => {
  return (
    <div className='container'>
      <Breadcrumb />
      <div className='mainContainer'>
        <ButtonArea />
        <DataTableComponent />
      </div>
    </div>
  );
};

export default page;
