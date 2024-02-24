import { StateCreator, create } from "zustand";
import createBearSlice, { BearSlice } from "./bear";
import createCounterSlice, { CounterSlice } from "./counter";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { STORE_NAME } from "@/const";

type BoundSlice = BearSlice & CounterSlice;

export type StateCreatorHelper<T> = StateCreator<
  BoundSlice,
  [["zustand/devtools", never]],
  [],
  T
>;

const combinedSlices: StateCreator<BoundSlice> = (...argument) => ({
  ...createBearSlice.apply(this, argument),
  ...createCounterSlice.apply(this, argument),
});

const enhanceStore = devtools(
  immer(persist(combinedSlices, { name: STORE_NAME }))
);

const useStore = create(enhanceStore);

export default useStore;
