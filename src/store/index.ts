import { StateCreator, create } from "zustand";
import createBearSlice, { BearSlice } from "./bear";
import createCounterSlice, { CounterSlice } from "./counter";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { STORE_NAME } from "@/assets/const";

export type BoundSlice = BearSlice & CounterSlice;

const useStore = () => {
  const combinedSlices: StateCreator<BoundSlice> = (...argument) => ({
    ...createBearSlice.apply(this, argument),
    ...createCounterSlice.apply(this, argument),
  });
  return create(devtools(immer(persist(combinedSlices, { name: STORE_NAME }))));
};

export default useStore;
