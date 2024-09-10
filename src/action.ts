import { ICallable } from "./types";

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
export class Lazy<T> {
    callable: ICallable;
    constructor(callable: ICallable) {
        this.callable = callable;
    }
    value(...args: any[]): T {
        return this.callable(...args);
    }
}

/**
 * The action interface which is an object with the `act` method.
 */
export interface IAction<T extends any[], U = any> {
    act(...args: T): U
}

/**
 * Represents a function, Action or array containing these and/or similar arrays.
 * May also be an instance of `Lazy` which resolves to the aforementioned.
 */
export type IConcreteOperation = ICallable | IOperations | Action;

/**
 * An {@link IConcreteOperation} or a {@link Lazy} that returns one.
 */
export type IOperations = Array<IConcreteOperation | Lazy<IConcreteOperation>> 

/**
 * An object mapping member keys to arrays of objects which can can be used as the `map` argument 
 * of `call`, `set` or `del`. It may also be an instance of `Lazy` which resolves to any of these. 
 * The values or the items in them may also be `Lazy` objects that return the expected type of object there.
 * 
 */
export type IActionMapObject = { [key: string | number]: any[] | Lazy<any[]> };

/**
 * An {@link IActionMapObject} or a {@link Lazy} that returns an {@link IActionMapObject}.
 * 
 */
export type IActionMap = IActionMapObject | Lazy<IActionMapObject>;

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
export class Args {
    value: any[];
    constructor(value: any[]) {
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
export function act(operations: IOperations, ...args: any[]) {
    let result: any[] | void;
    for (let operation of operations) {
        if (operation instanceof Lazy) operation = operation.value(...args);

        if (operation instanceof Array) result = act(operation, ...args);
        else if (operation instanceof Action) result = operation.act(...args);
        else result = operation(...args);

        if (result instanceof Args) args = result.value;
    }
    return result;
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
export function call(map: IActionMapObject, ...args: any[]) {
    let result: any[] | undefined, object: any;
    for (let [key, objects] of Object.entries(map)) {
        if (objects instanceof Lazy) objects = objects.value(key, ...args);
        for (object of objects as any[]) {
            if (object instanceof Lazy) object = object.value(key, ...args);
            result = (object as any)[key](...args);
            if (result instanceof Args) args = result.value;
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
 * If the value to set is of type {@link Lazy}, its value method is called with the previous 
 * property values for each object to compute the new values to be set.
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
 * set(actions, new Lazy(x => x * 2));
 * console.log(obj1);    // { a: 40, b: 2, c: 40}
 * console.log(obj2);    // { a: 1, b: 40, c: 3}
 * 
 * @param map 
 * @param value 
 */
export function set(map: IActionMapObject, value: any) {
    let object: any;
    for (let [key, objects] of Object.entries(map)) {
        if (objects instanceof Lazy) objects = objects.value(key, value);
        for (object of objects) {
            if (object instanceof Lazy) object = object.value(key, value);
            if (value instanceof Lazy) (object as any)[key] = value.value((object as any)[key]);
            else (object as any)[key] = value;
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
export function del(map: IActionMapObject) {
    if (map instanceof Lazy) map = map.value();
    let object: any;
    for (let [key, objects] of Object.entries(map)) {
        if (objects instanceof Lazy) objects = objects.value(key);
        for (object of objects) {
            if (object instanceof Lazy) object = object.value(key);
            delete (object as any)[key];
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
export class Action implements IAction<any[], (any[]|void)> {
    operations: IOperations | Lazy<IOperations>;
    constructor(operations: IOperations | Lazy<IOperations>) {
        this.operations = operations;
    }
    act(...args: any[]): any[] | void {
        return act(this.operations instanceof Lazy? this.operations.value(...args): this.operations, ...args);
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
export class ObjectAction<T extends any[] = any[], U extends any = any> {
    map: IActionMap;
    act(...args: T): U {
        return
    }
    constructor(map: { [key: string | number]: any[] }) {
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
export class CallAction extends ObjectAction implements IAction<any[], any>  {
    act(...args: any[]) {
        call(this.map instanceof Lazy? this.map.value(...args): this.map, ...args);
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
export class SetAction extends ObjectAction implements IAction<[any, any[]], any>  {
    act(value: any, ...args: any[]) {
        set(this.map instanceof Lazy? this.map.value(value, ...args): this.map, value);
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
export class DelAction extends ObjectAction implements IAction<any[], any>  {
    act(...args: any[]) {
        del(this.map instanceof Lazy? this.map.value(...args): this.map);
    }
}

