import { useEffect, useRef } from "react";
import { useBoolean } from "usehooks-ts";

export function useD3ContainerRef<T extends Node>(element: T) {
  const D3Node = useRef<HTMLDivElement>(null);
  const isMounting = useBoolean(true);
  useEffect(() => {
    if (isMounting.value) {
      D3Node.current?.appendChild(element);
      isMounting.setFalse();
    }
  });
  return D3Node;
}
