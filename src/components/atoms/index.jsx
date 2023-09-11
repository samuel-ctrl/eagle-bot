import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FAQS } from "../constent";
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
                  color: "#ffffffdb",
                }}
              >
                {ans}
              </p>
            )}
            <div
              style={{ marginTop: "20px", borderBottom: "1px solid #7c7a7a" }}
            ></div>
          </div>
        );
      })}
    </>
  );
};
