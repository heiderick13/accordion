import data from "../../data.json";
import AccordionItem from "../AccordionItem/AccordionItem";

function Accordion() {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <AccordionItem item={item} key={index} />
      ))}
    </div>
  );
}

export default Accordion;
