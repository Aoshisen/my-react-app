import { produce } from "immer";
import { Bear as State } from "@/models/bear";
import { StateCreator } from "zustand";
import { BoundSlice } from ".";
import { BearAction } from "./actions";
interface Action {
  eatFish: () => void;
}
const INIT_STATE: State = {
  name: "",
  age: 0,
};

export type BearSlice = State & Action;

const createBearSlice: StateCreator<
  BoundSlice,
  [["zustand/devtools", never]],
  [],
  BearSlice
> = (set) => {
  function eatFish() {
    const nextState = produce((draft_bear: State) => {
      draft_bear.age += 1;
    });
    return set(nextState, false, BearAction.EAT_FISH);
  }
  return {
    ...INIT_STATE,
    eatFish,
  };
};

export default createBearSlice;
