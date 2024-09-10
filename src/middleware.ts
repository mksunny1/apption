/**
 * Objects that transform values before they are sent to/from objects they wrap.
 * 
 * @module
 */

import { IKey, ICallable } from "./types";


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
    get(transformer: Transformer<any>, p: IKey) {
        return transformer.get(p);
    },
    set(transformer: Transformer<any>, p: IKey, value: any) {
        transformer.set(p, value);
        return true;
    },
}

/**
 * An object which wraps another object to 
 * transform values passed to/from it using the transformer object.
 * 
 * @example
 * import { Transformer } from 'apption'
 * const obj = { a: 1, b: 2 };
 * const trans = { get(val) {return val * 5} };
 * const tObj = new Transformer(obj, trans);
 * console.log(tObj.get('a'));    // 5
 * console.log(tObj.get('b'));    // 10
 * console.log(tObj.proxy().a);    
 * // 5. `new Transformer(obj, trans).proxy()` is equivalent to `transformer(obj, trans)`
 * 
 * @param object 
 * @param trans 
 * @returns 
 */
export class Transformer<T> {
    object: T;
    trans: ITransformer;
    #proxy?: T;
    constructor(object: T, trans: ITransformer) {
        this.object = object;
        this.trans = trans;
    }

    get(p: IKey) {
        const { object, trans } = this;
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
    }
    set(p: IKey, value: any) {
        const { object, trans } = this;
        if (trans && trans.set) value = trans.set(p, value);
        object[p] = value;
    }
    proxy(): T {
        if (!this.#proxy) this.#proxy = new Proxy(this, transformerTrap) as unknown as T;
        return this.#proxy;
    }
}

/**
 * Creates a proxy of a `Transformer` instance whcich maps property and method accesses to 
 * `Transformer` methods.
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
    return new Transformer(object, trans).proxy() as T;
}

const argTrap = {
    get(arg: Arg<any>, p: IKey) {
        return arg.get(p);
    },
    set(arg: Arg<any>, p: IKey, value: any) {
        arg.set(p, value);
        return true;
    },
    deleteProperty(arg: Arg<any>, p: IKey) {
        arg.delete(p)
        return true;
    }
}

/**
 * 
 * Returns a wrapper object which always invokes the function with the 
 * wrapped object after a property is set (`Arg.set(p, value)`) on or deleted (`Arg.delete(p)`) 
 * from it. The function will also be called before a property is retrieved (`Arg.get(p)`) 
 * from the object. 
 * 
 * This is useful for more complex transformations/computations that involve 
 * properties from multiple objects instead of a single one.
 * 
 * @example
 * import { arg } from 'apption'
 * const obj = { a: 1, b: 2 };
 * let storedValue;
 * const fn = val => storedValue = val.a + val.b;
 * const arg = new Arg(obj, fn);
 * arg.set('a', 24);
 * console.log(storedValue)     // 24+2 = 26.
 * arg.set('b', 25);
 * console.log(storedValue)     // 24+25 = 49.
 * 
 * @param object 
 * @param fn 
 */
export class Arg<T> {
    object: T;
    fn: ICallable;
    #proxy?: T;
    constructor(object: T, fn: ICallable) {
        this.object = object;
        this.fn = fn;
    }
    get(p: IKey) {
        this.fn(this.object);
        return this.object[p];
    }
    set(p: IKey, value: any) {
        this.object[p] = value;
        return this.fn(this.object);
    }
    delete(p: IKey) {
        delete this.object[p];
        return this.fn(this.object);
    }
    proxy(): T {
        if (!this.#proxy) this.#proxy = new Proxy(this, argTrap) as unknown as T;
        return this.#proxy;
    }
}

/**
 * 
 * Creates a proxy of an `Arg` instance whcich maps property accesses to 
 * corresponding `Arg` methods.
 * 
 * @example
 * import { arg } from 'apption'
 * const obj = { a: 1, b: 2 };
 * let storedValue;
 * const fn = val => storedValue = val.a + val.b;
 * const arg = arg(obj, fn);
 * arg.a = 24;
 * console.log(storedValue)     // 24+2 = 26.
 * arg.b = 25;
 * console.log(storedValue)     // 24+25 = 49.
 * 
 * @param object 
 * @param fn 
 */
export function arg<T>(object: T, fn: ((...args: any[])=> any)): T {
    return new Arg(object, fn).proxy() as T;
}

export type ILike<T, U=any> = {
    [key in keyof T]: U
}

export type IOp<T> = {
    [key in keyof T]?: T[key]
}

const redirectTrap = {
    get(red: Redirect<any>, p: IKey) {
        return red.get(p);
    },
    set(red: Redirect<any>, p: IKey, value: any) {
        red.set(p, value);
        return true;
    },
    deleteProperty(red: Redirect<any>, p: IKey) {
        red.delete(p);
        return true;
    }
}

/**
 * Creates an object which reroutes property accesses (`get`, `set` and `delete`) to 
 * other objects.
 * 
 * The keys in `Redirect.map` are the 'virtual' properties of the Redirect instance and 
 * the values are the source objects containing the real properties.
 * 
 * The optional `Redirect.remap` object may be used to map a virtual property to 
 * a property with a different key in the source object. Any virtual properties not in 
 * `Redirect.remap` will naturally have the same key in the source object.
 * 
 * @example
 * import { redirect } from 'apption'
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { a: 3, b: 4 };
 * const red = new Redirect({ c: obj1, d: obj2 }, {c: 'a', d: 'a'});
 * console.log(red.get('c'))     // 1
 * console.log(red.get('d'))     // 3
 * 
 * @param map 
 * @param remap
 */
export class Redirect<T> {
    map: T;
    remap?: IOp<ILike<T, IKey>>;
    #proxy?: T;
    constructor(map: T, remap?: IOp<ILike<T, IKey>>) {
        this.map = map;
        if (remap) this.remap = remap;
    }
    get(p: IKey) {
        const {map, remap} = this;
        let q: IKey = (typeof p !== 'symbol')? remap?.[p]: undefined;
        if (q === undefined) q = p;
        const object = map[p]
        const result = object[q];
        if (result instanceof Function) {  // method
            return (...args: any[]) =>  result.apply(object, args);
        }
        return result;
    }
    set(p: IKey, value: any) {
        const {map, remap} = this;
        let q: IKey = (typeof p !== 'symbol')? remap?.[p]: undefined;
        if (q === undefined) q = p;
        const object = map[p]
        object[q] = value;
    }
    delete(p: IKey) {
        const {map, remap} = this;
        let q: IKey = (typeof p !== 'symbol')? remap?.[p]: undefined;
        if (q === undefined) q = p;
        const object = map[p]
        delete object[q];
    }
    proxy(): T {
        if (!this.#proxy) this.#proxy = new Proxy(this, redirectTrap) as unknown as T;
        return this.#proxy;
    }
}

/**
 * Creates a proxy of a Redirect instance so that we can use it like a normal object.
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
    return new Redirect(map, remap).proxy() as ILike<T>;
}

