import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, describe, it } from "vitest";
import { Counter } from "@/components";

//关注点只聚焦到组件的功能上面，不用去关注其副作用
describe("counter", () => {
  render(<Counter />);
  it("initState should be 1", () => {
    const counterEl = screen.getByRole("counter");

    expect(counterEl.innerHTML).toBe("1");
  });

  it("when click button text will be 2", async () => {
    const addBtn = screen.getByRole("increase-btn");
    const counterEl = screen.getByRole("counter");
    await userEvent.click(addBtn);
    expect(counterEl.innerHTML).toBe("2");
  });

  it("deep count initState should be 1", () => {
    const counterEl = screen.getByRole("counter-deep");
    expect(counterEl.innerHTML).toBe("1");
  });

  it("when click increase-deep-btn text will be 2", async () => {
    const addBtn = screen.getByRole("increase-deep-btn");
    const counterEl = screen.getByRole("counter-deep");
    await userEvent.click(addBtn);
    expect(counterEl.innerHTML).toBe("2");
  });
});
