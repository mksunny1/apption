/**
 * Wraps a function that returns a real value to work with when an action is triggered.
 * ALl actions exported by this module ({@link act}, {@link call}, {@link set}, {@link del})
 * recognise instances of this type. This removes the need to hold references to concrete
 * objects before-hand, which may be memory-inneficient.
 *
 * @example
 * import { Lazy, set } from 'apption';
 * const element = document.querySelector('ul');
 * const lazy = new Lazy((value, index) => element.children[index]);
 * set({ className: lazy }, 'color-primary', 0);
 * for (let i = 1; i < element.children.length; i++) set({ className: lazy }, '', i)
 *
 */
class Lazy {
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
 * `act` function to behave like a pipe operator if we require such. This is more limited than
 * passing the same argument list to all the functions, but may perhaps be desired for some reason.
 *
 * @example
 * import { act, Args } from 'apption'
 * let count = 0;
 * act([
 *     (a1, a2) => count += a1,
 *     (a1, a2) => new Args([a2, 0]),
 *     (a1, a2) => count += a2 + 5
 * ], 20, 21);
 * console.log(count);   // 25
 *
 */
class Args {
    constructor(value) {
        this.value = value;
    }
}
/**
 * An abstract function that can combine any set of operations.
 * Can be used in scenarios where the operations are not similar enough for the
 * other more specialised functions: {@link call}, {@link set} or {@link del}.
 *
 * The functions to call may be specified statically or generated dynamically
 * from {@link Lazy} instances. Similar arrays may be nested within the outermost one to
 * any depth.
 *
 * @example
 * import { act } from 'apption'
 * let count = 0;
 * const actions = [
 *     (a1, a2) => count += a1,
 *     (a1, a2) => count += a2,
 *     (a1, a2) => count += a2 + 1
 * ]
 * act(actions, 20, 21);
 * console.log(count);   // 63
 *
 * actions.pop();
 *
 * act(actions, 10, 20);
 * console.log(count);   // 93
 *
 * @param operations
 * @param args
 * @returns
 */
function act(operations, ...args) {
    let result;
    for (let operation of operations) {
        if (operation instanceof Lazy)
            operation = operation.value(...args);
        if (operation instanceof Action)
            result = operation.act(...args);
        else if (operation instanceof Function)
            result = operation(...args);
        else
            result = act(operation, ...args);
        if (result instanceof Args)
            args = result.value;
    }
    return result;
}
/**
 * ActionMap allows us to use iterables (of key-value pairs)  in place of
 * objects in `call`, `set` and `del` functions (and corresponding classes).
 * This can be useful for building virtual objects which are only used with
 * the calls but never held fully in memory at any time, improving memory
 * performance.
 *
 * @example
 * import { call, ActionMap } from 'apption'
 * let arr1 = [1, 2, 3], arr2 = [1, 2, 3], arr3 = [1, 2, 3];
 * const actions = new ActionMap([ 'push', [arr1, arr3]], ['unshift', [arr2]] ]);
 * call(actions, 20, 21);
 * console.log(arr1)   // [1, 2, 3, 20, 21]
 * console.log(arr2)   // [20, 21, 1, 2, 3]
 * console.log(arr3)   // [1, 2, 3, 20, 21]
 *
 */
class ActionMap {
    constructor(entries) {
        this.entries = entries;
    }
}
function entries(map) {
    if (map instanceof ActionMap)
        return map.entries;
    else
        return Object.entries(map);
}
/**
 * Calls specified methods in multiple objects.
 *
 * If any array of objects (value) or object (value item) is of type {@link Lazy},
 * it is first resolved to obtain the object(s) to work with.
 *
 * @example
 * import { call } from 'apption'
 * let arr1 = [1, 2, 3], arr2 = [1, 2, 3], arr3 = [1, 2, 3];
 * const actions = { push: [arr1, arr3], unshift: [arr2] };
 * call(actions, 20, 21);
 * console.log(arr1)   // [1, 2, 3, 20, 21]
 * console.log(arr2)   // [20, 21, 1, 2, 3]
 * console.log(arr3)   // [1, 2, 3, 20, 21]
 *
 * @param map
 * @param args
 */
function call(map, ...args) {
    let result, object;
    for (let [key, objects] of entries(map)) {
        if (objects instanceof Lazy)
            objects = objects.value(key, ...args);
        for (object of objects) {
            if (object instanceof Lazy)
                object = object.value(key, ...args);
            result = object[key](...args);
            if (result instanceof Args)
                args = result.value;
        }
    }
    return result;
}
/**
 * Sets specified properties in different objects.
 *
 * The `map` argument maps propserty keys to arrays of objects on which to set the properties.
 * If any array or object is of type {@link Lazy}, it is first resolved to obtain the
 * array or object to work with.
 *
 * If the value to set is of type {@link Lazy}, its value method is called with the property key
 * and previous value for each object to compute the new value to be set.
 *
 *
 * @example
 * import { set } from 'apption'
 * let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
 * const actions = { a: [obj1], b: [obj2], c: [obj1] };
 * set(actions, 20);
 * console.log(obj1);    // { a: 20, b: 2, c: 20}
 * console.log(obj2);    // { a: 1, b: 20, c: 3}
 *
 * set(actions, new Lazy((key, val) => val * 2));
 * console.log(obj1);    // { a: 40, b: 2, c: 40}
 * console.log(obj2);    // { a: 1, b: 40, c: 3}
 *
 * @param map
 * @param value
 */
function set(map, value) {
    let object;
    for (let [key, objects] of entries(map)) {
        if (objects instanceof Lazy)
            objects = objects.value(key, value);
        for (object of objects) {
            if (object instanceof Lazy)
                object = object.value(key, value);
            if (value instanceof Lazy)
                object[key] = value.value(key, object[key]);
            else
                object[key] = value;
        }
    }
}
/**
 * Deletes specified properties from different objects.
 * If an object or array of objects is {@link Lazy}, it will be called with the key first to obtain the
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
function del(map) {
    if (map instanceof Lazy)
        map = map.value();
    let object;
    for (let [key, objects] of entries(map)) {
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
 * A wrapper around {@link act} to store the operations array. The operartions can be an instance
 * of {@link Lazy} so that it is computed every time {@link Action#act} is called.
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
class Action {
    constructor(operations) {
        this.operations = operations;
    }
    act(...args) {
        return act(this.operations instanceof Lazy ? this.operations.value(...args) : this.operations, ...args);
    }
    /**
     * The function equivalent of this action.
     * @example
     * import { CallAction } from 'apption'
     * let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
     * const action = new CallAction({ push: [arr1], unshift: [arr2] }).actor;
     * action(20, 21);
     * console.log(arr1)   // [1, 2, 3, 20, 21]
     * console.log(arr2)   // [20, 21, 1, 2, 3]
     */
    get actor() {
        return this.act.bind(this);
    }
}
/**
 * Base class for actions on objects
 */
class ObjectAction {
    act(...args) {
        return;
    }
    constructor(map) {
        this.map = map;
    }
    /**
     * The function equivalent of this action.
     */
    get actor() {
        return this.act.bind(this);
    }
}
/**
 * A wrapper around {@link call} to store the map. The map can be an instance
 * of {@link Lazy} so that it is computed every time {@link CallAction#act} is called.
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
class CallAction extends ObjectAction {
    act(...args) {
        call(this.map instanceof Lazy ? this.map.value(...args) : this.map, ...args);
    }
}
/**
 * A wrapper around {@link set} to store the map. The map can be an instance
 * of {@link Lazy} so that it is computed every time {@link SetAction#act} is called.
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
class SetAction extends ObjectAction {
    act(value, ...args) {
        set(this.map instanceof Lazy ? this.map.value(value, ...args) : this.map, value);
    }
}
/**
 * A wrapper around {@link del} to store the map. The map can be an instance
 * of {@link Lazy} so that it is computed every time {@link DelAction#act} is called.
 *
 * @example
 * .import { DelAction } from 'apption'
 * let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
 * const action = new DelAction({ a: [obj1], b: [obj2], c: [obj1] });
 * action.act();
 * console.log(obj1);    // { b: 2 }
 * console.log(obj2);    // { a: 1, c: 3}
 */
class DelAction extends ObjectAction {
    act(...args) {
        del(this.map instanceof Lazy ? this.map.value(...args) : this.map);
    }
}

export { Action, ActionMap, Args, CallAction, DelAction, Lazy, ObjectAction, SetAction, act, call, del, set };
