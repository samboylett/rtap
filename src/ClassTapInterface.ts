/**
 * Tap interface for an object.
 */
export interface ClassTapInterface {
  tap(callback: (object: this) => void): this;
}
