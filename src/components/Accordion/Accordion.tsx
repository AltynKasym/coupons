import AccordionItem from "./AccordionItem";
import { ReactNode, useState } from "react";

export type AccordionData = {
  question: string;
  answer: ReactNode;
};

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    if (currentIdx === -1) {
      setCurrentIdx(idx);
    } else if (currentIdx !== idx) {
      setCurrentIdx(idx);
    } else {
      setCurrentIdx(-1);
    }
  };
  return (
    <ul className="accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
  );
}

export default Accordion;
