import { useEffect } from "react";

export default function useNavHeightGetter() {
  useEffect(() => {
    const navElement = document.querySelector("nav");
    if (navElement) {
      const navHeight = navElement.offsetHeight;
      document.documentElement.style.setProperty(
        "--nav-height",
        `${navHeight}px`
      );
    }
  }, []);
}
