import { tap } from "./tap";

describe("tap", () => {
  test("is a function", () => {
    expect(tap).toEqual(expect.any(Function));
  });

  describe("when called", () => {
    const tapValue = {};
    let callback: jest.Mock;
    let retVal: any;

    beforeEach(() => {
      callback = jest.fn();

      retVal = tap(tapValue, callback);
    });

    test("returns the tapped value", () => {
      expect(retVal).toBe(tapValue);
    });

    test("calls callback with tapped value", () => {
      expect(callback).toHaveBeenCalledWith(tapValue);
    });
  });
});
