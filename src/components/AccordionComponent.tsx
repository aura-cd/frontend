import "@/styles//accordion.scss";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchHomeInterface } from "@/api/interface/home";
interface AccordionComponentProps {
  data: fetchHomeInterface | undefined;
}
function AccordionComponent(props: AccordionComponentProps) {
  const { data } = props;
  return (
    <div className='container'>
      <Accordion type='single' collapsible>
        {data &&
          data.organizationInfos.map((item, index) => (
            <AccordionItem
              key={index}
              className='itemContainer'
              value={`item-${index}`}
            >
              <AccordionTrigger className='title'>
                {item.organization}
              </AccordionTrigger>
              {item.repositories.map((repository, index) => (
                <AccordionContent key={index}>{repository}</AccordionContent>
              ))}
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
