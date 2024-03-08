import { produce } from "immer";
import { Bear } from "@/models/bear";
import { BearAction } from "@/const";
import { StateCreatorHelper } from "@/helper/type";
export type Action = {
  eatFish: () => void;
};
export type State = Bear;
export type BearSlice = State & Action;

const INIT_STATE: State = {
  name: "",
  age: 0,
};
const createBearSlice: StateCreatorHelper<BearSlice> = (set) => {
  function eatFish() {
    const nextState = produce((draft_bear: BearSlice) => {
      ++draft_bear.age;
    });
    return set(nextState, false, BearAction.EAT_FISH);
  }
  return {
    ...INIT_STATE,
    eatFish,
  };
};

export default createBearSlice;
