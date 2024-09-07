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
class ArrayActions {
    set(index, value) {
        if (index >= this.array.length)
            return;
        this.array[index] = value;
    }
    ;
    push(...items) { return this.array.push(...items); }
    ;
    pop() { return this.array.pop(); }
    ;
    unshift(...items) { return this.array.unshift(...items); }
    ;
    shift() { return this.array.shift(); }
    ;
    splice(start, deleteCount, ...items) {
        if (start + deleteCount - 1 >= this.array.length)
            return;
        return this.array.splice(start, deleteCount, ...items);
    }
    ;
    swap(from, to) {
        if (from >= this.array.length || to >= this.array.length)
            return;
        return [this.array[from], this.array[to]] = [this.array[to], this.array[from]];
    }
    ;
    move(from, to) {
        if (from >= this.array.length || to >= this.array.length)
            return;
        return this.array.splice(to, 0, ...this.array.splice(from, 1));
    }
    ;
    clear() {
        this.array.length = 0;
    }
    ;
    constructor(array) {
        this.array = array;
    }
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
class ChildrenActions {
    render(item) {
        throw new TypeError('You must implement the `render` method to use it.');
    }
    set(index, value) {
        if (index >= this.element.children.length)
            return;
        this.element.children[index].replaceWith(this.render(value));
    }
    ;
    push(...items) {
        this.element.append(...items.map(item => this.render(item)));
    }
    ;
    pop() {
        this.element.lastElementChild?.remove();
    }
    ;
    unshift(...items) {
        const firstChild = this.element.firstChild;
        if (firstChild !== null) {
            for (let item of items)
                this.element.insertBefore(this.render(item), firstChild);
        }
        else
            this.element.append(...items.map(item => this.render(item)));
    }
    ;
    shift() {
        this.element.firstElementChild?.remove();
    }
    ;
    splice(start, deleteCount, ...items) {
        if (start + deleteCount - 1 >= this.element.children.length)
            return;
        for (let i = 0; i < deleteCount; i++)
            this.element.children[start].remove();
        if (this.element.children.length > start) {
            const before = this.element.children[start];
            for (let item of items)
                this.element.insertBefore(this.render(item), before);
        }
        else {
            for (let item of items)
                this.element.appendChild(this.render(item));
        }
    }
    ;
    swap(from, to) {
        const length = this.element.children.length;
        if (from >= length || to >= length)
            return;
        [from, to] = [from, to].sort();
        let e1 = this.element.children[from];
        let e2 = this.element.children[to];
        if (from > to) {
            [e1, e2] = [e2, e1];
        }
        if (e1.nextElementSibling === e2) {
            this.element.insertBefore(e2, e1);
        }
        else {
            const sib = e1.nextElementSibling;
            this.element.insertBefore(e1, e2);
            this.element.insertBefore(e2, sib);
        }
    }
    ;
    move(from, to) {
        const length = this.element.children.length;
        if (from >= length || to >= length)
            return;
        const target = this.element.children[from];
        target.remove();
        if (this.element.children.length > to) {
            this.element.insertBefore(target, this.element.children[to]);
        }
        else
            this.element.appendChild(target);
    }
    ;
    clear() {
        this.element.textContent = '';
    }
    ;
    constructor(element) {
        this.element = element;
    }
}

export { ArrayActions, ChildrenActions };
