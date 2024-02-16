import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionComponentProps {
  data: [{ title: string; content: string }];
}
function AccordionComponent(props: AccordionComponentProps) {
  const { data } = props;
  return (
    <Accordion type='single' collapsible className='w-full'>
      {data.map((item, index) => (
        <AccordionItem key={index} className='mb-4' value={`item-${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionComponent;
