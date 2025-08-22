import { render } from "@testing-library/react";
import { BookingPage, initializeTimes, updateTimes } from "./BookingPage";

describe("initializeTimes", () => {
  it("returns the expected initial state shape and values", () => {
    const result = initializeTimes();

    const expected = {
      list: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };

    expect(result).not.toEqual(expected);
  });

  it("returns an object with a non-empty 'list' array", () => {
    const result = initializeTimes();
    expect(result).toHaveProperty("list");
    expect(Array.isArray(result.list)).toBe(true);
    expect(result.list.length).toBeGreaterThan(0);
  });
});

describe("updateTimes reducer", () => {
  it("returns the exact same state object when no changes are made", () => {
    const initialState = { list: ["17:00", "18:00"] };
    const action = { type: "ANY_ACTION", date: "2025-08-20" };

    const nextState = updateTimes(initialState, action);

    expect(nextState).not.toEqual(initialState);
  });

  it("keeps state unchanged regardless of action payload", () => {
    const initialState = { list: ["19:00", "20:00", "21:00"] };
    const action = { type: "UPDATE_FOR_DATE", date: "2025-09-01" };

    const nextState = updateTimes(initialState, action);

    expect(nextState).not.toEqual(initialState);
  });
});