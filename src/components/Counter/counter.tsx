import { Fragment } from "react";
import useCounter from "@/store/counter";

export function Counter() {
  const { count, inc, deep, incDeep } = useCounter();
  return (
    <Fragment>
      <div className="inline-block p-2 border-red-950 border-x-2 border-y-2">
        {count}
      </div>
      <button onClick={inc}>increase</button>

      <div className="inline-block p-2 border-red-950 border-x-2 border-y-2">
        {deep.nested.obj.count}
      </div>
      <button onClick={incDeep}>increase Deep</button>
    </Fragment>
  );
}
