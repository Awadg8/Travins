import { useState } from "react";
import "./Faq.css";
import { faq } from "../../data";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index) => {
    if (activeIndex !== index) {
      return setActiveIndex(index);
    }

    setActiveIndex(-1);
  };

  return (
    <section id="faq">
      <h1>
        Frequently <span className="primary">Asked Question</span>
      </h1>

      <p className="text-muted">Your Question, Answered</p>

      <div className="faq-list">
        {faq.map((list, key) => (
          <div
            key={key}
            onClick={()=> handleSelect(key)}
            className={`faq ${activeIndex === key ? "active" : ""}`}
          >
            <div className="flex question">
              {list.title}

              <FaChevronDown
                className={`icon ${activeIndex === key && "rotate"}`}
              />
            </div>

            <div className="answer">
              <div className="answer-wrapper">
                <p className="text-muted">{list.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
