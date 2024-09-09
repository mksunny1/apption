/**
 * General app actions.
 *
 * @module
 */
type IKey = string | number | symbol;
/**
 * Represents any function
 */
interface ICallable {
    (...args: any[]): any;
}

/**
 * Objects that transform values before they are sent to/from objects they wrap.
 *
 * @module
 */

interface ITransformer {
    /**
     * Transforms the value returned from a property access
     * @param p
     */
    get?<T, U>(p: string | number | symbol, value: T): U;
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
    ret?<T, U>(p: string | number | symbol, value: T): U;
}
declare class Transformer<T> {
    #private;
    object: T;
    trans: ITransformer;
    constructor(object: T, trans: ITransformer);
    get(p: IKey): any;
    set(p: IKey, value: any): void;
    proxy(): T;
}
/**
 * Creates a transformer object which wraps the given object to
 * transform values passed to/from it.
 *
 * @example
 * import { transformer } from 'apption'
 * const obj = { a: 1, b: 2 };
 * const trans = { get(val) {return val * 5} };
 * const tObj = transformer(obj, trans);
 * console.log(tObj.a);    // 5
 * console.log(tObj.b);    // 10
 *
 * @param object
 * @param trans
 * @returns
 */
declare function transformer<T>(object: T, trans: ITransformer): T;
declare class Arg<T> {
    #private;
    object: T;
    fn: ICallable;
    constructor(object: T, fn: ICallable);
    get(p: IKey): any;
    set(p: IKey, value: any): any;
    delete(p: IKey): any;
    proxy(): T;
}
/**
 *
 * Returns a wrapper object which always invokes the function with the
 * input object after a property is set on or deleted from it. The function
 * will also be called before a property is retrieved from the object. This is
 * useful for more complex transformations/computations that involve properties
 * from multiple objects instead of a single one.
 *
 * @example
 * import { arg } from 'apption'
 * const obj = { a: 1, b: 2 };
 * let storedValue;
 * const fn = val => storedValue = val.a + val.b;
 * const arg = (obj, fn);
 * arg.a = 24;
 * console.log(storedValue)     // 24+2 = 26.
 * arg.b = 25;
 * console.log(storedValue)     // 24+25 = 49.
 *
 * @param object
 * @param fn
 */
declare function arg<T>(object: T, fn: ((...args: any[]) => any)): T;
type ILike<T, U = any> = {
    [key in keyof T]: U;
};
type IOp<T> = {
    [key in keyof T]?: T[key];
};
declare class Redirect<T> {
    #private;
    map: T;
    remap?: IOp<ILike<T, IKey>>;
    constructor(map: T, remap?: IOp<ILike<T, IKey>>);
    get(p: IKey): any;
    set(p: IKey, value: any): void;
    delete(p: IKey): void;
    proxy(): T;
}
/**
 * Returns an object whose properties are drawn from multiple objects.
 *
 * The keys in `map` are the 'virtual' properties of the redirect object and
 * the values are the source objects containing the real properties.
 *
 * The optional `remap` object may be used to map virtual properties to
 * another property on the source object. Any virtual properties not in
 * `remap` will naturally have the same name in the source object.
 *
 * @example
 * import { redirect } from 'apption'
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { a: 3, b: 4 };
 * const red = redirect({ c: obj1, d: obj2 }, {c: 'a', d: 'a'});
 * console.log(red.c)     // 1
 * console.log(red.d)     // 3
 *
 * @param map
 * @param remap
 */
declare function redirect<T>(map: T, remap?: IOp<ILike<T, string>>): ILike<T>;

export { Arg, type ILike, type IOp, type ITransformer, Redirect, Transformer, arg, redirect, transformer };
