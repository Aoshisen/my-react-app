import { StateCreator } from "zustand";
import { produce } from "immer";
import { Counter, DeepCounter } from "@/models/counter";
import { BoundSlice } from ".";
import { CounterAction } from "./actions";

interface Action {
  inc: () => void;
  incDeep: () => void;
}

type State = Counter & DeepCounter;
const INIT_STATE: State = {
  count: 1,
  deep: {
    nested: {
      obj: { count: 1 },
    },
  },
};

export type CounterSlice = State & Action;
const createCounterSlice: StateCreator<
  BoundSlice,
  [["zustand/devtools", never]],
  [],
  CounterSlice
> = (set) => {
  function inc() {
    const nextState = produce((draft_count: Counter) => {
      ++draft_count.count;
    });
    return set(nextState, false, CounterAction.INC);
  }
  function incDeep() {
    const nextState = produce((draft_deep: DeepCounter) => {
      ++draft_deep.deep.nested.obj.count;
    });
    return set(nextState, false, CounterAction.INC_DEEP);
  }
  return {
    ...INIT_STATE,
    inc,
    incDeep,
  };
};

export default createCounterSlice;
