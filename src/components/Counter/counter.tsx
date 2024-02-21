import { Fragment } from "react";
import { useCounter } from "@/store";
export function Counter() {
  const { count, inc } = useCounter();
  return (
    <Fragment>
      <div className="inline-block p-2 border-red-950 border-x-2 border-y-2">
        {count}
      </div>
      <button onClick={inc}>increase</button>
    </Fragment>
  );
}
