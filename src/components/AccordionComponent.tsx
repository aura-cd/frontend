import "@/styles//accordion.scss";

import Link from "next/link";

import { fetchOrganizationInterface } from "@/api/interface/organization";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionComponent(props: { data: fetchOrganizationInterface[] }) {
  return (
    <div className="container">
      <Accordion type="single" collapsible>
        {props.data &&
          props.data.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              className="itemContainer"
              value={`item-${index}`}
            >
              <AccordionTrigger className="title">
                <Link href={`${item.organization}`}>{item.organization}</Link>
              </AccordionTrigger>
              {item.repositories.map((repository: any, repoIndex: number) => (
                <Link
                  href={`${item.organization}/${repository}`}
                  key={repoIndex}
                >
                  <AccordionContent>
                    <p className="repo-name">{repository}</p>
                  </AccordionContent>
                </Link>
              ))}
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
