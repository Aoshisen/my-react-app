import { create } from "zustand";
import { produce } from "immer";
import { Counter, DeepCounter } from "@/models/counter";

interface CounterAction {
  inc: () => void;
  incDeep: () => void;
}

const useCounter = create<Counter & DeepCounter & CounterAction>((set) => ({
  count: 1,
  deep: {
    nested: {
      obj: { count: 1 },
    },
  },
  inc: () => set(({ count }) => ({ count: count + 1 })),
  incDeep: () =>
    //set 函数会默认把第一个参数就是上一个deepCounter 的值添加给produce 的第一参数,而produce 不会使用到所以就可以省略掉不写,而produce 的第二个参数是一个函数,用于生成新的state,其参数是新的一个值和之前一个deep 相同的draft;
    set(
      produce((draft_deep: DeepCounter) => {
        ++draft_deep.deep.nested.obj.count;
      })
    ),
  // incDeep: () => {
  //   const action=(draft_deep:DeepCounter)=>{
  //     ++draft_deep.deep.nested.obj.count;
  //   }
  //   const result = produce(action);
  //   return set(result);
  // },
}));

export default useCounter;
