import EnviromentsForm from "./from/EnviromentsForm";
import ResourceForm from "./from/ResourceForm";
import TabComponent from "@/components/TabComponent";

const title = ["General", "Resource", "Enviroments"];
const tabData = [<EnviromentsForm />, <ResourceForm />, <EnviromentsForm />];
const OptionContents = () => {
  return (
    <div>
      <TabComponent title={title} tabData={tabData} />
    </div>
  );
};

export default OptionContents;
