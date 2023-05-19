function AccordionItem({ item }) {
  return (
    <div className="">
      <h2>{item.question}</h2>
      <p className="hidden">{item.answer}</p>
    </div>
  );
}

export default AccordionItem;
