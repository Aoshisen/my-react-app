import { StateCreator, create } from "zustand";
import createBearSlice, { BearSlice } from "./bear";
import createCounterSlice, { CounterSlice } from "./counter";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type BoundSlice = BearSlice & CounterSlice;

const createStore = () => {
  const combinedSlices: StateCreator<BoundSlice> = (...argument) => {
    const bearSlice = createBearSlice.apply(this, argument);
    const counterSlice = createCounterSlice.apply(this, argument);
    return {
      ...bearSlice,
      ...counterSlice,
    };
  };

  const enhanceStore = devtools(
    immer(persist(combinedSlices, { name: "bound" }))
  );

  return create(enhanceStore);
};

const useStore = createStore();

export default useStore;
