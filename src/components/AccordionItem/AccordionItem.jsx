import { BsChevronDown } from "react-icons/bs";

function AccordionItem({ item }) {
  return (
    <div className="text-black">
      <h2 className="flex items-center justify-between gap-3 text-2xl">
        {item.question} <BsChevronDown className="text-red-400" />
      </h2>
      <p className="hidden">{item.answer}</p>
    </div>
  );
}

export default AccordionItem;
