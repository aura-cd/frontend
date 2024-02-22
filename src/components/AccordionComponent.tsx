import "@/styles//accordion.scss";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchOrganizationInterface } from "@/api/interface/organization";

function AccordionComponent(props: { data: fetchOrganizationInterface }) {
  return (
    <div className='container'>
      <Accordion type='single' collapsible>
        {props.data &&
          props.data.organizationInfos.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              className='itemContainer'
              value={`item-${index}`}
            >
              <AccordionTrigger className='title'>
                {item.organization}
              </AccordionTrigger>
              {item.repositories.map((repository: any, index: number) => (
                <AccordionContent key={index}>{repository}</AccordionContent>
              ))}
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
