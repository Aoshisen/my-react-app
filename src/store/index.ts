import { StateCreator, create } from "zustand";
import createBearSlice from "./bear";
import createCounterSlice from "./counter";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { STORE_NAME } from "@/const/name";
import * as pkg from "../../package.json";
import { BoundSlice } from "@/helper/type";


const combinedSlices: StateCreator<BoundSlice> = (...argument) => ({
  ...createBearSlice.apply(this, argument),
  ...createCounterSlice.apply(this, argument),
});

const enhanceStore = devtools(
  immer(
    persist(combinedSlices, {
      name: STORE_NAME,
      version: pkg.localStorage_version,
    })
  )
);

const useStore = create(enhanceStore);

export default useStore;
