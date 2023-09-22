import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { FAQS } from "../constent/data";
import Style from "./style.module.css";

export const FaqsData = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (key) => {
    setOpenQuestions((prevState) =>
      prevState.includes(key)
        ? prevState.filter((item) => item !== key)
        : [...prevState, key]
    );
  };

  return (
    <>
      {FAQS.map((item, index) => {
        const key = Object.keys(item)[0];
        const { qus, ans } = item[key];
        const isOpen = openQuestions.includes(key);

        return (
          <div
            className={Style.faqs_container}
            key={index}
            onClick={() => toggleQuestion(key)}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontweight: "400",
                lineheight: "24px",
              }}
            >
              {key}. {qus}
              <div style={{ display: "inline", float: "right" }}>
                {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </div>
            </h3>
            {isOpen && (
              <p
                style={{
                  marginTop: "20px",
                  fontFamily: "Inter, sans-serif",
                  fontweight: "400",
                  color: "var(--white-color)db",
                }}
              >
                {ans}
              </p>
            )}
            <div
              style={{
                marginTop: "20px",
                borderBottom: "1px solid var(--light-grey-color)",
              }}
            ></div>
          </div>
        );
      })}
    </>
  );
};

export const GoToUpComp = () => {
  useEffect(() => {
    const goUp = document.getElementById("goUp");
    let isHidden = true;
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 100 && isHidden) {
        goUp.classList.remove("hidden");
        isHidden = false;
      } else if (scrollY <= 100 && !isHidden) {
        goUp.classList.add("hidden");
        isHidden = true;
      }
    });

    return () => {
      let isHidden = true;
    };
  });
  const handleGoup = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="goUp" className={Style.footer_tools} onClick={handleGoup}>
      <ArrowDropUpIcon />
    </div>
  );
};
