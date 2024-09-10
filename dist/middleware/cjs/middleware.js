'use strict';

/**
 * Objects that transform values before they are sent to/from objects they wrap.
 *
 * @module
 */
const transformerTrap = {
    get(transformer, p) {
        return transformer.get(p);
    },
    set(transformer, p, value) {
        transformer.set(p, value);
        return true;
    },
};
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
class Transformer {
    #proxy;
    constructor(object, trans) {
        this.object = object;
        this.trans = trans;
    }
    get(p) {
        const { object, trans } = this;
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
    }
    set(p, value) {
        const { object, trans } = this;
        if (trans && trans.set)
            value = trans.set(p, value);
        object[p] = value;
    }
    proxy() {
        if (!this.#proxy)
            this.#proxy = new Proxy(this, transformerTrap);
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
function transformer(object, trans) {
    return new Transformer(object, trans).proxy();
}
const argTrap = {
    get(arg, p) {
        return arg.get(p);
    },
    set(arg, p, value) {
        arg.set(p, value);
        return true;
    },
    deleteProperty(arg, p) {
        arg.delete(p);
        return true;
    }
};
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
class Arg {
    #proxy;
    constructor(object, fn) {
        this.object = object;
        this.fn = fn;
    }
    get(p) {
        this.fn(this.object);
        return this.object[p];
    }
    set(p, value) {
        this.object[p] = value;
        return this.fn(this.object);
    }
    delete(p) {
        delete this.object[p];
        return this.fn(this.object);
    }
    proxy() {
        if (!this.#proxy)
            this.#proxy = new Proxy(this, argTrap);
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
function arg(object, fn) {
    return new Arg(object, fn).proxy();
}
const redirectTrap = {
    get(red, p) {
        return red.get(p);
    },
    set(red, p, value) {
        red.set(p, value);
        return true;
    },
    deleteProperty(red, p) {
        red.delete(p);
        return true;
    }
};
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
class Redirect {
    #proxy;
    constructor(map, remap) {
        this.map = map;
        if (remap)
            this.remap = remap;
    }
    get(p) {
        const { map, remap } = this;
        let q = (typeof p !== 'symbol') ? remap?.[p] : undefined;
        if (q === undefined)
            q = p;
        const object = map[p];
        const result = object[q];
        if (result instanceof Function) { // method
            return (...args) => result.apply(object, args);
        }
        return result;
    }
    set(p, value) {
        const { map, remap } = this;
        let q = (typeof p !== 'symbol') ? remap?.[p] : undefined;
        if (q === undefined)
            q = p;
        const object = map[p];
        object[q] = value;
    }
    delete(p) {
        const { map, remap } = this;
        let q = (typeof p !== 'symbol') ? remap?.[p] : undefined;
        if (q === undefined)
            q = p;
        const object = map[p];
        delete object[q];
    }
    proxy() {
        if (!this.#proxy)
            this.#proxy = new Proxy(this, redirectTrap);
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
function redirect(map, remap) {
    return new Redirect(map, remap).proxy();
}

exports.Arg = Arg;
exports.Redirect = Redirect;
exports.Transformer = Transformer;
exports.arg = arg;
exports.redirect = redirect;
exports.transformer = transformer;
