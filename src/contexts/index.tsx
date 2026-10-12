import React, { useState, createContext, useEffect } from "react";
import { IContexGlobal, IProjetos, iChildren } from "../interface";

export const GlobalContext = createContext({} as IContexGlobal);

export const GlobalProvider = ({ children }: iChildren) => {
  const [opemModal, setOpemModal] = useState(false);
  const [cardSelected, setCardSelected] = useState<IProjetos>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".effectScrollMonitoring").forEach((element) => {
        element.classList.add("effectScroll");
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.add("effectScroll");
          observer.unobserve(target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    document.querySelectorAll(".effectScrollMonitoring").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ opemModal, setOpemModal, cardSelected, setCardSelected }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
