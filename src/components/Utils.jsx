import CelebrationIcon from "@mui/icons-material/Celebration";
import ErrorIcon from "@mui/icons-material/Error";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const getIconBySeverity = (severity) => {
  switch (severity) {
    case "error":
      return <ErrorIcon />;
    case "success":
      return (
        <>
          <CelebrationIcon />
          <CelebrationIcon />
        </>
      );
    default:
      return null;
  }
};
