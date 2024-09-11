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
 * A more semantic alias for ArrayActions which is a light array
 * wrapper containing common array modification functions.
 */
declare const ApptionArray: typeof ArrayActions;
/**
 * A more semantic alias for ChildrenActions which is an object
 * providing a similar API to ApptionArray.
 */
declare const ChildrenArray: typeof ChildrenActions;

export { ApptionArray, ArrayActions, ChildrenActions, ChildrenArray };
