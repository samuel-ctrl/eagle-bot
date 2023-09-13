import Style from "./customButton.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export const GoldenButton = ({
  type,
  buttonName,
  style,
  onClick,
  isLoading,
}) => {
  return (
    <button
      className={`${Style.goldenButton} ${Style.btn_anime}`}
      style={style}
      type={type}
      onClick={onClick}
    >
      {isLoading ? <CircularProgress size={"1.2rem"} /> : buttonName}
    </button>
  );
};
