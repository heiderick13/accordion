import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import { useState } from "react";

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="select-none cursor-pointer border-b border-b-light-grayish-blue"
      onClick={open}
    >
      <h2 className="text-center flex items-center justify-between gap-3 text-xl">
        {item.question}
        <BsChevronDown
          className={!isOpen ? "text-soft-red" : "text-soft-red rotate-180"}
        />
      </h2>
      <p className={`w-[80%] + ${!isOpen ? "hidden" : "block"}`}>
        {item.answer}
      </p>
    </div>
  );
}

export default AccordionItem;
