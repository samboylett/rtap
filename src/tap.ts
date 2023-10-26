/**
 * Tap an object.
 * @param {any} value
 * @param {function} callback
 * @returns {any}
 */
export const tap = <T>(value: T, callback: (arg: T) => void) => {
  callback(value);

  return value;
};
