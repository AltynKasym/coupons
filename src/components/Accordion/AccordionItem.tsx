import { AccordionData } from './Accordion';
import { FC, useEffect, useRef, useState } from 'react';

type AccordionItemProps = {
    data: AccordionData;
    isOpen: boolean;
    btnOnClick: () => void;
  }

const AccordionItem: FC<AccordionItemProps> = ({data,isOpen, btnOnClick}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      if (isOpen) {
        const contentEl = contentRef.current as HTMLDivElement;
  
        setHeight(contentEl.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [isOpen]);
    return (
      <li className={`accordion-item ${isOpen ? 'accordion-item--active' : ''}`}>
        <h2 className="accordion-item__title">
          <button className="accordion-item__btn" onClick={btnOnClick}>
            {data.question}
          </button>
        </h2>
        <div className="accordion-item__container" style={{ height }}>
          <div ref={contentRef} className="accordion-item__content content__text">
            {data.answer}
          </div>
        </div>
      </li>
  );
}

export default AccordionItem;
