import "@/styles/componentStyles/accordion.scss";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface AccordionComponentProps {
  data: { title: string; content: string }[];
}
function AccordionComponent(props: AccordionComponentProps) {
  const { data } = props;
  return (
    <div className='container'>
      <Accordion type='single' collapsible>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            className='itemContainer'
            value={`item-${index}`}
          >
            <AccordionTrigger className='trigger'>
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
