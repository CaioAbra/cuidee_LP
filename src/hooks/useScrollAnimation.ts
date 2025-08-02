"use client";
import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("exit");
          } else {
            entry.target.classList.remove("visible");
            entry.target.classList.add("exit");
          }
        });
      },
      { threshold: 0.2 } // aparece quando 10% entra na tela
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
