import { produce } from "immer";
import { Counter, DeepCounter } from "@/models/counter";
import { CounterAction } from "@/const/actions";
import { StateCreatorHelper } from "@/helper/type";
export type Action = {
  inc: () => void;
  incDeep: () => void;
};
export type State = Counter & DeepCounter;
export type CounterSlice = State & Action;

const INIT_STATE: State = {
  count: 1,
  deep: {
    nested: {
      obj: { count: 1 },
    },
  },
};

const createCounterSlice: StateCreatorHelper<CounterSlice> = (set) => {
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
