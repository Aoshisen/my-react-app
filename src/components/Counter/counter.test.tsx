import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, describe } from "vitest";
import { Counter } from "./counter";

//关注点只聚焦到组件的功能上面，不用去关注其副作用
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

  test("deep count initState should be 1", () => {
    const counterEl = screen.getByRole("counter-deep");
    expect(counterEl.innerHTML).toBe("1");
  });

  test("when click increase-deep-btn text will be 2", async () => {
    const addBtn = screen.getByRole("increase-deep-btn");
    const counterEl = screen.getByRole("counter-deep");
    await userEvent.click(addBtn);
    expect(counterEl.innerHTML).toBe("2");
  });

});
