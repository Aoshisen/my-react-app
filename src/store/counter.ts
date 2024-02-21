import { create } from "zustand";

interface Counter {
  count: number;
}

interface CounterAction {
  inc: () => void;
}

export const useCounter = create<Counter & CounterAction>((set) => ({
  count: 1,
  inc() {
    return set(({ count }) => ({ count: count + 1 }));
  },
}));

//虽然这种方法 易于代码组织,和便于拆分,但是zustand 还是建议使用上面的方式组织代码,因为这样 store 里面的逻辑就可以放在一起,方便其他组件的使用
// function inc() {
//   return useCounter.setState(({ count }) => ({ count: count + 1 }));
// }

// export const counterAction = {
//   inc,
// };
