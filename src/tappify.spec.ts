import { tappify } from "./tappify";

describe("tappify", () => {
  test("is a function", () => {
    expect(tappify).toEqual(expect.any(Function));
  });

  describe("when called", () => {
    class BaseClass {
      foo: string | null = null;
    }

    let RetClass: ReturnType<typeof tappify<typeof BaseClass>>;

    beforeEach(() => {
      RetClass = tappify(BaseClass);
    });

    test("returns a new class", () => {
      expect(RetClass).toEqual(expect.any(Function));
    });

    describe("when instantiated", () => {
      let retClass: any;

      beforeEach(() => {
        retClass = new RetClass();
      });

      test("is an instance of the base class", () => {
        expect(retClass).toBeInstanceOf(BaseClass);
      });

      test("has the tap function added", () => {
        expect(retClass).toEqual(expect.objectContaining({
          tap: expect.any(Function),
        }));
      });

      describe("when tapped", () => {
        let callback: jest.Mock;
        let retVal: typeof RetClass;

        beforeEach(() => {
          callback = jest.fn();
          retVal = retClass.tap(callback);
        });

        test("returns the same object", () => {
          expect(retVal).toBe(retClass);
        });

        test("calls callback with tapped value", () => {
          expect(callback).toHaveBeenCalledWith(retClass);
        });
      });
    });
  });
});
