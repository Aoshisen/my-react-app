import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, describe } from "vitest";
import { Counter } from "./counter";
import { STORE_NAME } from "@/const";
import { BoundSlice } from "@/store";
import { StorageValue } from "zustand/middleware";

describe("counter", () => {
  render(<Counter />);
  test("init state should be 1", () => {
    const counterEl = screen.getByRole("counter");
    expect(counterEl.innerHTML).toBe("1");
  });

  test("when click button text will be 2", async () => {
    const addBtn = screen.getByRole("increase-btn");
    const counterEl = screen.getByRole("counter");
    await userEvent.click(addBtn);
    expect(counterEl.innerHTML).toBe("2");
  });
  test("check localStorage", async () => {
    const local_data = JSON.parse(
      localStorage.getItem(STORE_NAME) || ""
    ) as StorageValue<BoundSlice>;
    expect(local_data.state.count).toBe(2);
  });
});
