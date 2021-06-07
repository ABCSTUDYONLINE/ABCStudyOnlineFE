import { IconButton } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";

export function ButtonScrollTop() {
  const [isTop, setisTop] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const setIsScrollOnTop = () => {
      console.log("isTop", isTop);
      if (window?.scrollY > 0) {
        setisTop(false);
      } else {
        setisTop(true);
      }
    };
    window.addEventListener("scroll", setIsScrollOnTop);
    return () => {
      window.removeEventListener("scroll", setIsScrollOnTop);
    };
  }, []);

  return (
    <>
      {isTop ? null : (
        <IconButton
          style={{
            background: "black",
            position: "fixed",
            bottom: 32,
            right: 32,
          }}
          onClick={scrollToTop}
        >
          <ArrowUpward style={{ color: "white" }} />
        </IconButton>
      )}
    </>
  );
}
