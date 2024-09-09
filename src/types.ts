/**
 * General app actions.
 * 
 * @module
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
