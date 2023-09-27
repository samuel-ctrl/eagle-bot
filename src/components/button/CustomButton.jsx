import Style from "./customButton.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export const GoldenButton = ({
  type,
  buttonName,
  onClick,
  isLoading,
  className,
}) => {
  return (
    <button
      className={`${Style.goldenButton} ${Style.btn_anime} ${className}`}
      type={type}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <CircularProgress size={"1.2rem"} /> : buttonName}
    </button>
  );
};
