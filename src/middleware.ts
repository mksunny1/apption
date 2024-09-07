/**
 * 
 * This module exports functions that wrap objects to perform many useful 
 * transformations when their properties are fetched (get), set or deleted.
 * 
 * @module
 */

type ICallable = (...args: any[])=> any;   // already exported elsewhere!
type IKey = string | number | symbol  // already exported elsewhere!

export interface ITransformer {
    /**
     * Transforms the value returned from a property access
     * @param p 
     */
    get?<T, U>(p: string|number|symbol, value: T): U;
    /**
     * Transforms the value assigned to a property
     * 
     * @param p 
     * @param value 
     */
    set?<T, U>(p: string|number|symbol, value: T): U;
    /**
     * Transforms the args passed in a method call
     * @param p 
     * @param args 
     */
    call?<T extends any[], U extends any[]>(p: string|number|symbol, args: T): U;
    /**
     * Transforms the value returned from a method call.
     * 
     * @param p 
     */
    ret?<T, U>(p: string|number|symbol, value: T): U;
}

const transformerTrap = {
    get([object, trans]: [any, ITransformer], p: IKey) {
        const result = object[p];
        if (result instanceof Function) {  // method
            return (...args: any[]) => {
                if (trans && trans.call) args = trans.call(p, args);
                let iResult = result.apply(object, args);
                if (trans && trans.ret) iResult = trans.ret(p, iResult);
                return iResult;
            }
        }
        return (trans && trans.get)? trans.get(p, result): result;
    },
    set([object, trans]: [any, ITransformer], p: IKey, value: any) {
        if (trans && trans.set) value = trans.set(p, value);
        object[p] = value;
        return true;
    },
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
export function transformer<T>(object: T, trans: ITransformer): T {
    return new Proxy([object, trans], transformerTrap) as T;
}

const argTrap = {
    get([object, fn]: [any, ICallable], p: IKey) {
        fn(object);
        return object[p];
    },
    set([object, fn]: [any, ICallable], p: IKey, value: any) {
        object[p] = value;
        fn(object);
        return true;
    },
    deleteProperty([object, fn]: [any, ICallable], p: IKey) {
        delete object[p];
        fn(object);
        return true;
    }
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
export function arg<T>(object: T, fn: ((...args: any[])=> any)): T {
    return new Proxy([object, fn], argTrap) as T;
}

export type ILike<T, U=any> = {
    [key in keyof T]: U
}

export type IOp<T> = {
    [key in keyof T]?: T[key]
}

const redirectTrap = {
    get([map, remap]: [any, ITransformer], p: IKey) {
        let q = remap?.[p];
        if (q === undefined) q = p;
        const object = map[p]
        const result = object[q];
        if (result instanceof Function) {  // method
            return (...args: any[]) =>  result.apply(object, args);
        }
        return result;
    },
    set([map, remap]: [any, ITransformer], p: IKey, value: any) {
        let q = remap?.[p];
        if (q === undefined) q = p;
        const object = map[p]
        object[q] = value;
        return true;
    },
    deleteProperty([map, remap]: [any, ITransformer], p: IKey) {
        let q = remap?.[p];
        if (q === undefined) q = p;
        const object = map[p]
        delete object[q];
        return true;
    }
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
export function redirect<T>(map: T, remap?: IOp<ILike<T, string>>): ILike<T> {
    return new Proxy([map, remap], redirectTrap) as ILike<T>;
}

