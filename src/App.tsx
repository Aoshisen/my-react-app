import React from "react";
import { useScroll } from "./hooks/scroll";
import { Counter } from "./components";

export default function App() {
  const scroll = useScroll();
  return (
    <React.Fragment>
      {/* <div className="bg-gray-50 p-8 h-11">this is tail wind css</div> */}
      <div>scroll:{scroll}</div>
      <div>
        counter:
        <Counter />
      </div>
    </React.Fragment>
  );
}
