"use client";
import { useEffect } from "react";
export const useShowNavigationMobile = () => {
  useEffect(() => {
    const handleResize = () => {
      const navigationMobile = document.querySelector(
        ".navigation-mobile",
      ) as HTMLElement | null;
      if (navigationMobile && navigationMobile.classList.contains("hidden")) {
        navigationMobile?.classList.remove("hidden");
      } else if (navigationMobile) {
        navigationMobile?.classList.add("hidden");
      }
    };

    document
      .querySelector(".menu-burger")
      ?.addEventListener("click", handleResize);
    handleResize(); // Initial check

    return () => {
      document
        .querySelector(".menu-burger")
        ?.removeEventListener("click", handleResize);
    };
  }, []);
};

export const useCloseNavigationMobile = () => {
  useEffect(() => {
    const handleResize = () => {
      const navigationMobile = document.querySelector(
        ".navigation-mobile",
      ) as HTMLElement;
      if (!navigationMobile.classList.contains("hidden")) {
        navigationMobile?.classList.add("hidden");
      }
    };

    document
      .querySelector(".menu-close")
      ?.addEventListener("click", handleResize);

    return () => {
      document
        .querySelector(".menu-close")
        ?.removeEventListener("click", handleResize);
    };
  }, []);
};
