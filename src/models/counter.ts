export interface Counter {
  count: number;
}

export interface DeepCounter {
  deep: {
    nested: {
      obj: {
        count: number;
      };
    };
  };
}
