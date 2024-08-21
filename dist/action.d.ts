/**
 * General app actions.
 */
export type IKey = string | number | symbol;
/**
 * Represents any function
 */
export interface ICallable {
    (...args: any[]): any;
}
/**
 * Represents any object with values of type T.
 */
export interface IMap<T> {
    [key: IKey]: T;
}
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
export declare class Lazy<T> {
    callable: ICallable;
    constructor(callable: ICallable);
    value(...args: any[]): T;
}
/**
 * The action interface which matches an object with the `act` method.
 */
export interface IAction<T extends any[], U = any> {
    act(...args: T): U;
}
export type IConcreteOperation = ICallable | IOperations | Action;
/**
 * Represents a function, Action or array containing these and/or similar arrays.
 * May also be an instance of `Lazy` which resolves to the aforementioned.
 */
export type IOperations = Array<IConcreteOperation | Lazy<IConcreteOperation>>;
export type IActionMapObject = {
    [key: string | number]: any[] | Lazy<any[]>;
};
/**
 * An object mapping member keys to arrays of objects which can can be used as the `map` argument
 * of `call`, `set` or `del`. It may also be an instance of `Lazy` which resolves to any of these.
 * The values or the items in them may also be `Lazy` objects that return the expected type of object there.
 *
 */
export type IActionMap = IActionMapObject | Lazy<IActionMapObject>;
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
export declare class Result {
    value: any[];
    constructor(value: any[]);
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
export declare function act(operations: IOperations, ...args: any[]): void | any[];
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
export declare function call(map: IActionMapObject, ...args: any[]): any[];
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
export declare function set(map: IActionMapObject, value: any): void;
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
export declare function del(map: IActionMapObject): void;
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
export declare class Action implements IAction<any[], (any[] | void)> {
    operations: IOperations | Lazy<IOperations>;
    constructor(operations: IOperations | Lazy<IOperations>);
    act(...args: any[]): any[] | void;
}
/**
 * Base class for actions on objects
 */
export declare class ObjectAction {
    map: IActionMap;
    constructor(map: {
        [key: string | number]: any[];
    });
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
export declare class CallAction extends ObjectAction implements IAction<any[], any> {
    act(...args: any[]): void;
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
export declare class SetAction extends ObjectAction implements IAction<[any, any[]], any> {
    act(value: any, ...args: any[]): void;
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
export declare class DelAction extends ObjectAction implements IAction<any[], any> {
    act(...args: any[]): void;
}
//# sourceMappingURL=action.d.ts.map