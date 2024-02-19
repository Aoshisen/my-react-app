import { useState } from "react";
import { useEventListener } from "usehooks-ts";
export function useScroll() {
  const [scroll, setScroll] = useState(window.scrollY);
  function scroller() {
    setScroll(window.scrollY);
  }
  useEventListener("scroll", scroller);
  return scroll;
}
