/**
 *
 * This module exports a single function that creates object wrappers which
 * serve to transform values before they are passed to or from the
 * wrapped object.
 *
 * @module
 */
const transformerTrap = {};
/**
 * Creates a transformer object which wraps the given object to
 * transform values passed to/from it.
 *
 * @example
 *
 *
 *
 * @param object
 * @param trans
 * @returns
 */
export function transformer(object, trans) {
    return new Proxy([object, trans], transformerTrap);
}
