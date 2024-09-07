'use strict';

/**
 *
 * This module exports functions that wrap objects to perform many useful
 * transformations when their properties are fetched (get), set or deleted.
 *
 * @module
 */
const transformerTrap = {
    get([object, trans], p) {
        const result = object[p];
        if (result instanceof Function) { // method
            return (...args) => {
                if (trans && trans.call)
                    args = trans.call(p, args);
                let iResult = result.apply(object, args);
                if (trans && trans.ret)
                    iResult = trans.ret(p, iResult);
                return iResult;
            };
        }
        return (trans && trans.get) ? trans.get(p, result) : result;
    },
    set([object, trans], p, value) {
        if (trans && trans.set)
            value = trans.set(p, value);
        object[p] = value;
        return true;
    },
};
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
function transformer(object, trans) {
    return new Proxy([object, trans], transformerTrap);
}
const argTrap = {
    get([object, fn], p) {
        fn(object);
        return object[p];
    },
    set([object, fn], p, value) {
        object[p] = value;
        fn(object);
        return true;
    },
    deleteProperty([object, fn], p) {
        delete object[p];
        fn(object);
        return true;
    }
};
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
function arg(object, fn) {
    return new Proxy([object, fn], argTrap);
}
const redirectTrap = {
    get([map, remap], p) {
        let q = remap?.[p];
        if (q === undefined)
            q = p;
        const object = map[p];
        const result = object[q];
        if (result instanceof Function) { // method
            return (...args) => result.apply(object, args);
        }
        return result;
    },
    set([map, remap], p, value) {
        let q = remap?.[p];
        if (q === undefined)
            q = p;
        const object = map[p];
        object[q] = value;
        return true;
    },
    deleteProperty([map, remap], p) {
        let q = remap?.[p];
        if (q === undefined)
            q = p;
        const object = map[p];
        delete object[q];
        return true;
    }
};
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
function redirect(map, remap) {
    return new Proxy([map, remap], redirectTrap);
}

exports.arg = arg;
exports.redirect = redirect;
exports.transformer = transformer;
