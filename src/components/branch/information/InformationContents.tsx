import "./style/contents.scss";

import InfoCard from "@/components/branch/information/InfoCard";
import InfoParameter from "@/components/branch/information/InfoParameter";
const InformationContents = () => {
  return (
    <div className="container-wrap">
      <InfoCard />
      <InfoParameter />
    </div>
  );
};

export default InformationContents;
