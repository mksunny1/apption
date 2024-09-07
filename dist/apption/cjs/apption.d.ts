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
 * Represents any object with values of type T.
 */
interface IMap<T> {
    [key: IKey]: T;
}
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
declare class Lazy<T> {
    callable: ICallable;
    constructor(callable: ICallable);
    value(...args: any[]): T;
}
/**
 * The action interface which is an object with the `act` method.
 */
interface IAction<T extends any[], U = any> {
    act(...args: T): U;
}
/**
 * Represents a function, Action or array containing these and/or similar arrays.
 * May also be an instance of `Lazy` which resolves to the aforementioned.
 */
type IConcreteOperation = ICallable | IOperations | Action;
/**
 * An {@link IConcreteOperation} or a {@link Lazy} that returns one.
 */
type IOperations = Array<IConcreteOperation | Lazy<IConcreteOperation>>;
/**
 * An object mapping member keys to arrays of objects which can can be used as the `map` argument
 * of `call`, `set` or `del`. It may also be an instance of `Lazy` which resolves to any of these.
 * The values or the items in them may also be `Lazy` objects that return the expected type of object there.
 *
 */
type IActionMapObject = {
    [key: string | number]: any[] | Lazy<any[]>;
};
/**
 * An {@link IActionMapObject} or a {@link Lazy} that returns an {@link IActionMapObject}.
 *
 */
type IActionMap = IActionMapObject | Lazy<IActionMapObject>;
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
declare class Args {
    value: any[];
    constructor(value: any[]);
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
declare function act(operations: IOperations, ...args: any[]): void | any[];
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
declare function call(map: IActionMapObject, ...args: any[]): any[];
/**
 * Sets specified properties in different objects.
 *
 * If any array of objects (value) or object (value item) is of type {@link Lazy}, it is first resolved to obtain the
 * object(s) to work with.
 *
 * @example
 * import { set } from 'apption'
 * let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
 * const actions = { a: [obj1], b: [obj2], c: [obj1] };
 * set(actions, 20);
 * console.log(obj1);    // { a: 20, b: 2, c: 20}
 * console.log(obj2);    // { a: 1, b: 20, c: 3}
 *
 * @param map
 * @param value
 */
declare function set(map: IActionMapObject, value: any): void;
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
declare function del(map: IActionMapObject): void;
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
declare class Action implements IAction<any[], (any[] | void)> {
    operations: IOperations | Lazy<IOperations>;
    constructor(operations: IOperations | Lazy<IOperations>);
    act(...args: any[]): any[] | void;
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
    get actor(): any;
}
/**
 * Base class for actions on objects
 */
declare class ObjectAction<T extends any[] = any[], U extends any = any> {
    map: IActionMap;
    act(...args: T): U;
    constructor(map: {
        [key: string | number]: any[];
    });
    /**
     * The function equivalent of this action.
     */
    get actor(): any;
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
declare class CallAction extends ObjectAction implements IAction<any[], any> {
    act(...args: any[]): void;
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
declare class SetAction extends ObjectAction implements IAction<[any, any[]], any> {
    act(value: any, ...args: any[]): void;
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
declare class DelAction extends ObjectAction implements IAction<any[], any> {
    act(...args: any[]): void;
}

/**
 * Array types to work with {link actinn}
 *
 * @module
 */
/**
 * Wraps an array exposing the same mutation API (`push`, `pop`, `unshift`, `shift`, `splice`)
 * and adds a few extra methods namely: `set`, `move`, `swap` and `clear`.
 *
 * @example
 * import { ArrayActions, call, ChildrenActions } from 'apption';
 * const array = [];
 * const actions = new ArrayActions(array);
 * actions.push(1, 2, 3);
 * console.log(array.length);   // 3
 *
 */
declare class ArrayActions<T> {
    array: T[];
    set(index: number, value: T): void;
    push(...items: T[]): number;
    pop(): T;
    unshift(...items: T[]): number;
    shift(): T;
    splice(start: number, deleteCount?: number, ...items: T[]): T[];
    swap(from: number, to: number): [T, T];
    move(from: number, to: number): T[];
    clear(): void;
    constructor(array: T[]);
}
/**
 * Wraps an element exposing the same array mutation API (`push`, `pop`, `unshift`, `shift`, `splice`,
 * `set`, `move`, `swap` and `clear` for working with the element's children. This can be used together
 * with ArrayActions to, for example, keep an array and its DOM representation in sync.
 *
 * @example
 * import { ArrayActions, call, ChildrenActions } from 'apption';
 * const array = [], tbody = document.querySelector('tbody');
 * const AppChildrenActions = class extends ChildrenActions {
 *     render(item) {
 *         return (rowId.firstChild.nodeValue = item.id) && (rowlbl.firstChild.nodeValue = item.lbl) && row.cloneNode(true);
 *     } update(value = ' !!!') {
 *        for (let i = 0; i < array.length; i += 10)
 *            this.element.children[i].querySelector('a').firstChild.nodeValue = array[i].lbl += value;
 *     }
 * }, actions = [new ArrayActions(array), new AppChildrenActions(tbody)];
 * call({ swap: actions }, 1, 998);  // swap item 1 with item 998
 *
 */
declare class ChildrenActions<T> {
    element: Element;
    render(item: T): Element;
    set(index: number, value: T): void;
    push(...items: T[]): void;
    pop(): void;
    unshift(...items: T[]): void;
    shift(): void;
    splice(start: number, deleteCount?: number, ...items: T[]): void;
    swap(from: number, to: number): void;
    move(from: number, to: number): void;
    clear(): void;
    constructor(element: Element);
}

/**
 * Primitives for functionally creating and manipulating objects.
 *
 * @module
 */

/**
 * Combine `keys` with corresponding items in `values` to form and return an object.
 * `values` could be `undefined` may not have items corresponding to some keys but
 * all keys must be provided.
 *
 * @example
 * import { zip } from 'apption'
 * const obj = zip(['a', 'b', 'c'], [1, 2, 3]);
 * console.log(obj)   // { a: 1, b: 2, c: 3 }
 *
 * @param keys
 * @param values
 * @returns
 */
declare function zip(keys: IKey[], values?: any[]): {};
/**
 * Transform the values of the input object using the mapper and return the mapped object.
 * The returned object will be the same as the input if `inPlace` is truthy.
 *
 * @example
 * import { mapValues } from 'apption'
 * const obj = mapValues({ a: 1, b: 2, c: 3 }, (k, v) => v * 3);
 * console.log(obj)   // { a: 3, b: 6, c: 9 }
 *
 * @param object
 * @param mapper
 * @param inPlace
 * @returns
 */
declare function mapValues(object: any, mapper: ICallable, inPlace?: boolean): any;
/**
 * Transform the keys of the input object using the mapper and return the mapped object.
 * The returned object will be the same as the input if `inPlace` is truthy.
 *
 * @example
 * import { mapKeys } from 'apption'
 * const obj = mapKeys({ a: 1, b: 2, c: 3 }, (k, v) => `${k}1`);
 * console.log(obj)   // { a1: 1, b1: 2, c1: 3 }
 *
 * @param object
 * @param mapper
 * @param inPlace
 * @returns
 */
declare function mapKeys(object: any, mapper: ICallable, inPlace?: boolean): any;
/**
 * Transform the keys and values of the input object using the mapper and return the mapped object.
 * The returned object will be the same as the input if `inPlace` is truthy.
 *
 * @example
 * import { map } from 'apption'
 * const obj = map({ a: 1, b: 2, c: 3 }, (k, v) => `${k}1`);
 * console.log(obj)   // { a1: 3, b1: 6, c1: 9 }
 *
 * @param object
 * @param mapper
 * @param inPlace
 * @returns
 */
declare function map(object: any, mapper: ICallable, inPlace?: boolean): any;
/**
 * Reduces the input object using the reducer (and optional initial value)
 * and return the reduced value.
 *
 *
 * @example
 * import { reduce } from 'apption'
 * const r = mapValues({ a: 1, b: 2, c: 3 }, (r, k, v) => r + (v * v), 0);
 * console.log(r)   // 14
 *
 * @param object
 * @param reducer
 * @param result
 * @returns
 */
declare function reduce(object: any, reducer: ICallable, result?: any): any;
/**
 * Performs the specified operation on all pairs of object keys and values (Object.entries()).
 *
 * @example
 * import { foreach } from 'apption'
 * let count = 0;
 * foreach({ a: 1, b: 2, c: 3 }, (k, v) => count += (v * v));
 * console.log(count)    // 14
 *
 * @param object
 * @param callable
 */
declare function foreach(object: any, callable: ICallable): void;

/**
 *
 * This module exports functions that wrap objects to perform many useful
 * transformations when their properties are fetched (get), set or deleted.
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

export { Action, Args, ArrayActions, CallAction, ChildrenActions, DelAction, type IAction, type IActionMap, type IActionMapObject, type ICallable, type IConcreteOperation, type IKey, type ILike, type IMap, type IOp, type IOperations, type ITransformer, Lazy, ObjectAction, SetAction, act, arg, call, del, foreach, map, mapKeys, mapValues, redirect, reduce, set, transformer, zip };
