/**
 *
 * This module exports a single function that creates object wrappers which
 * serve to transform values before they are passed to or from the
 * wrapped object.
 *
 * @module
 */
export interface ITransformer {
    /**
     * Transforms the value returned from a property access
     * @param p
     */
    get?<T>(p: string | number | symbol): T;
    /**
     * Transforms the value assigned to a property
     *
     * @param p
     * @param value
     */
    set?<T, U>(p: string | number | symbol, value: T): U;
    /**
     * Transforms the args passed in a method call
     * @param p
     * @param args
     */
    call?<T extends any[], U extends any[]>(p: string | number | symbol, args: T): U;
    /**
     * Transforms the value returned from a method call.
     *
     * @param p
     */
    ret?<T>(p: string | number | symbol): T;
}
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
export declare function transformer<T>(object: T, trans: ITransformer): T;
//# sourceMappingURL=transformer.d.ts.map