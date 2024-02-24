import { produce } from "immer";
import { Bear as State } from "@/models/bear";
import { StateCreatorHelper } from ".";
import { BearAction } from "@/const";
interface Action {
  eatFish: () => void;
}
const INIT_STATE: State = {
  name: "",
  age: 0,
};

export type BearSlice = State & Action;

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
