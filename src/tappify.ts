import { ClassTapInterface } from "./ClassTapInterface";
import { tap } from "./tap";

/**
 * Add the tap function to a super class
 * @param {Object} Klass
 * @returns {Object}
 */
export const tappify = <C extends new (...args: any[]) => {}>(Klass: C) =>
  class extends Klass implements ClassTapInterface {
    tap(callback: (arg: this) => void) {
      return tap(this, callback);
    }
  };
