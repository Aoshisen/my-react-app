import React from "react";
import { useScroll } from "./hooks/scroll";

export default function App() {
  const scroll = useScroll();
  return (
    <React.Fragment>
      <div className="bg-gray-50 p-8 h-[900px]">this is tail wind css</div>
      <div>{scroll}</div>
    </React.Fragment>
  );
}
