import { Fragment } from "react";
import useStore from "@/store";

export function Counter() {
  const { count, inc, deep, incDeep } = useStore();
  return (
    <Fragment>
      <div
        className="inline-block p-2 border-red-950 border-x-2 border-y-2"
        role="counter"
      >
        {count}
      </div>
      <button onClick={inc} role="increase-btn">
        increase
      </button>

      <div className="inline-block p-2 border-red-950 border-x-2 border-y-2" role="counter-deep">
        {deep.nested.obj.count}
      </div>
      <button onClick={incDeep} role="increase-deep-btn">increase Deep</button>
    </Fragment>
  );
}
