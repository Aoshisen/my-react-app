import { describe, expect, test } from "vitest";
import { sum } from "@/utils";

describe("test for testing environment", () => {
  //write a  add test
  test("add", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
