import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    title: "Is it animated?",
    content: "Yes. animated by default, but you can disable it if you prefer.",
  },
];

function AccordionComponent() {
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
