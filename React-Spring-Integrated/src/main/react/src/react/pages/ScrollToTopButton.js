import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ScrollToTop } from "../styles/Layout"

export const ScrollToTopButton_Full = React.forwardRef(({ mainContentRef }, ref) => {
  const scrollToTop = () => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <ScrollToTop
      onClick={scrollToTop} />
  );
});


const ScrollToTopButton = () => {
  const { mainContentRef } = useOutletContext();

  const scrollToTop = () => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return <ScrollToTop onClick={scrollToTop} />;
};

export default ScrollToTopButton;
