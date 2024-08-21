/**
 * General app actions.
 */
/**
 * Wraps a function that returns a real list or map of functions or objects to work with.
 * It removes the need to hold references to concrete objects before-hand, which may be
 * memory-inneficient.
 *
 * @example
 * import { Lazy, set } from 'apption';
 * const element = document.querySelector('ul');
 * const lazy = new Lazy((value, index) => element.children[index]);
 * set({ className: lazy }, 'color-primary', 0);
 * for (let i = 1; i < element.children.length; i++) set({ className: lazy }, '', i)
 *
 */
export class Lazy {
    constructor(callable) {
        this.callable = callable;
    }
    value(...args) {
        return this.callable(...args);
    }
}
/**
 * An object returned from a function (or `Action.act` implementation) which specifies our intent to
 * replace the propagated arguments with the new arguments list it is initialized with. This allows the
 * `act` function to behave like a pipe operator if we require such. This is much more limited than
 * passing the same argument list to all the functions, but may perhaps be desired for some reason.
 *
 * @example
 * import { act, Result } from 'apption'
 * let count = 0;
 * act([
 *     (a1, a2) => count += a1,
 *     (a1, a2) => new Result([a2, 0]),
 *     (a1, a2) => count += a2 + 5
 * ], 20, 21);
 * console.log(count);   // 25
 *
 */
export class Result {
    constructor(value) {
        this.value = value;
    }
}
/**
 * An abstract function that can combine any set of operations (actions).
 * Can be used in scenarios where the operations are not similar enough for the
 * other more specialised functions: `call`, `set` and `del`.
 *
 * The functions to call may be specified statically or generated dynamically
 * from `Lazy` instances. Similar arrays may be nested within the outermost one to
 * any depth.
 *
 * @example
 * import { act } from 'apption'
 * let count = 0;
 * act([
 *     (a1, a2) => count += a1,
 *     (a1, a2) => count += a2,
 *     (a1, a2) => count += a2 + 1
 * ], 20, 21);
 * console.log(count);   // 63
 *
 * @param operations
 * @param args
 * @returns
 */
export function act(operations, ...args) {
    let result;
    for (let operation of operations) {
        if (operation instanceof Lazy)
            operation = operation.value(...args);
        if (operation instanceof Array)
            result = act(operation, ...args);
        else if (operation instanceof Action)
            result = operation.act(...args);
        else
            result = operation(...args);
        if (result instanceof Result)
            args = result.value;
    }
    return result;
}
/**
 * Calls specified methods in multiple objects.
 *
 * If any array of objects (value) or object (value item) is of type `Lazy`, it is first resolved to obtain the
 * object(s) to work with.
 *
 * @example
 * import { call } from 'apption'
 * let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
 * call({ push: [arr1], unshift: [arr2] }, 20, 21);
 * console.log(arr1)   // [1, 2, 3, 20, 21]
 * console.log(arr2)   // [20, 21, 1, 2, 3]
 *
 * @param map
 * @param args
 */
export function call(map, ...args) {
    let result, object;
    for (let [key, objects] of Object.entries(map)) {
        if (objects instanceof Lazy)
            objects = objects.value(key, ...args);
        for (object of objects) {
            if (object instanceof Lazy)
                object = object.value(key, ...args);
            result = object[key](...args);
            if (result instanceof Result)
                args = result.value;
        }
    }
    return result;
}
/**
 * Sets specified properties in different objects.
 *
 * If any array of objects (value) or object (value item) is of type `Lazy`, it is first resolved to obtain the
 * object(s) to work with.
 *
 * @example
 * import { set } from 'apption'
 * let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
 * set({ a: [obj1], b: [obj2], c: [obj1] }, 20);
 * console.log(obj1);    // { a: 20, b: 2, c: 20}
 * console.log(obj2);    // { a: 1, b: 20, c: 3}
 *
 * @param map
 * @param value
 */
export function set(map, value) {
    let object;
    for (let [key, objects] of Object.entries(map)) {
        if (objects instanceof Lazy)
            objects = objects.value(key, value);
        for (object of objects) {
            if (object instanceof Lazy)
                object = object.value(key, value);
            object[key] = value;
        }
    }
}
/**
 * Deletes specified properties from different objects.
 * If an object or array of objects is `Lazy`, it will be called with the key first to obtain the
 * real values to work with.
 *
 * @example
 * .import { del } from 'apption'
 * let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
 * del({ a: [obj1], b: [obj2], c: [obj1] });
 * console.log(obj1);    // { b: 2 }
 * console.log(obj2);    // { a: 1, c: 3}
 *
 * @param map
 */
export function del(map) {
    if (map instanceof Lazy)
        map = map.value();
    let object;
    for (let [key, objects] of Object.entries(map)) {
        if (objects instanceof Lazy)
            objects = objects.value(key);
        for (object of objects) {
            if (object instanceof Lazy)
                object = object.value(key);
            delete object[key];
        }
    }
}
/**
 * A wrapper around the `act` function to store the operations array. The operartions can be an instance
 * of `Lazy` so that it is computed every time `act` is called.
 *
 * @example
 * import { Action } from 'apption'
 * let count = 0;
 * const action = new Action([
 *     (a1, a2) => count += a1,
 *     (a1, a2) => count += a2,
 *     (a1, a2) => count += a2 + 1
 * ]);
 * action.act(20, 21);
 * console.log(count);   // 63
 */
export class Action {
    constructor(operations) {
        this.operations = operations;
    }
    act(...args) {
        return act(this.operations instanceof Lazy ? this.operations.value(...args) : this.operations, ...args);
    }
}
/**
 * Base class for actions on objects
 */
export class ObjectAction {
    constructor(map) {
        this.map = map;
    }
}
/**
 * A wrapper around `call` to store the map. The map can be an instance
 * of `Lazy` so that it is computed every time `act` is called.
 *
 * @example
 * import { CallAction } from 'apption'
 * let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
 * const action = new CallAction({ push: [arr1], unshift: [arr2] });
 * action.act(20, 21);
 * console.log(arr1)   // [1, 2, 3, 20, 21]
 * console.log(arr2)   // [20, 21, 1, 2, 3]
 *
 */
export class CallAction extends ObjectAction {
    act(...args) {
        call(this.map instanceof Lazy ? this.map.value(...args) : this.map, ...args);
    }
}
/**
 * A wrapper around `set` to store the map. The map can be an instance
 * of `Lazy` so that it is computed every time `act` is called.
 *
 * @example
 * import { SetAction } from 'apption'
 * let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
 * const action = new SetAction({ a: [obj1], b: [obj2], c: [obj1] });
 * action.act(20);
 * console.log(obj1);    // { a: 20, b: 2, c: 20}
 * console.log(obj2);    // { a: 1, b: 20, c: 3}
 *
 */
export class SetAction extends ObjectAction {
    act(value, ...args) {
        set(this.map instanceof Lazy ? this.map.value(value, ...args) : this.map, value);
    }
}
/**
 * A wrapper around `del` to store the map. The map can be an instance
 * of `Lazy` so that it is computed every time `act` is called.
 *
 * @example
 * .import { DelAction } from 'apption'
 * let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
 * const action = new DelAction({ a: [obj1], b: [obj2], c: [obj1] });
 * action.act();
 * console.log(obj1);    // { b: 2 }
 * console.log(obj2);    // { a: 1, c: 3}
 */
export class DelAction extends ObjectAction {
    act(...args) {
        del(this.map instanceof Lazy ? this.map.value(...args) : this.map);
    }
}
