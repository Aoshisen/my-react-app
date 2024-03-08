import { BearSlice,State as BearState } from "@/store/bear";
import { CounterSlice,State as CounterState } from "@/store/counter";
import { StateCreator } from "zustand";

export type BoundSlice = BearSlice & CounterSlice;

export type BoundState = BearState & CounterState;
export type StateCreatorHelper<T> = StateCreator<
  BoundSlice,
  [["zustand/devtools", never]],
  [],
  T
>;
