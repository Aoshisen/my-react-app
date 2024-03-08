import { checkInputNumber } from "@/utils";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

interface QuantityProps {
  initValue?: number;
}

export const Quantity: React.FC<QuantityProps> = ({ initValue = 1 }) => {
  const [count, setCount] = useState(initValue);
  const MIN_VALUE = 1;
  const MAX_VALUE = 100000;
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = count.toString();
    }
  }, [count]);

  const handleBlur: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    const status = checkInputNumber(value);
    if (status) {
      if (+value >= MIN_VALUE && +value <= MAX_VALUE) {
        setCount(Number(value));
      } else if (+value > MAX_VALUE) {
        setCount(MAX_VALUE);
      } else {
        setCount(MIN_VALUE);
      }
    }
    if (inputRef.current) {
      inputRef.current.value = count.toString();
    }
  };
  const handleKeyUp: KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === "Enter" && inputRef.current !== null) {
      inputRef.current.blur();
    }
  };
  function handleDecrease() {
    setCount(Math.max(count - 1, MIN_VALUE));
  }
  function handleIncrease() {
    setCount(Math.min(count + 1, MAX_VALUE));
  }
  return (
    <div role="quantity-container" className="flex w-auto">
      <button role="decrease-btn" onClick={handleDecrease}>
        -
      </button>
      <input onBlur={handleBlur} ref={inputRef} onKeyUp={handleKeyUp} />

      <button role="increase-btn" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};
