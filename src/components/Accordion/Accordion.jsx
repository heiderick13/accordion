import data from "../../data.json";
import AccordionItem from "../AccordionItem/AccordionItem";

function Accordion() {
  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem item={item} key={index} />
      ))}
    </div>
  );
}

export default Accordion;
