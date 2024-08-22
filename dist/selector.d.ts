/**
 * Functionality related to selecting elements in the DOM.
 */
/**
 * A selection object, normally wrapped with a proxy. Used as the target of
 * the proxy object returned by `selector`
 *
 */
export declare class Selector {
    treespace?: Element;
    constructor(treespace?: Element);
    get(key: any): any;
    set(key: any, value: any): void;
    delete(key: any): void;
}
/**
 * Returns a proxy object that selects an element when a property is requested from it.
 * Setting a property will also replace the selected element and deleting
 * a property will remove the selected element.
 *
 * By default it uses `querySelector` for string keys and `children` for
 * number keys.
 *
 * @example
 * import { selector } from 'apption';
 * document.body.innerHTML = `
 * <div>I am a div</div>
 * <p>I am a paragraph</p>
 * <section>I am a section</section>
 * <article>I am an article</article>
 * `;
 * const slct = selector(document.body);
 * console.log(slct.article.textContent);  // I am an article
 *
 *
 * @param treespace
 * @param cls
 * @returns
 */
export declare function selector(treespace?: Element, cls?: typeof Selector): Selector;
/**
 * A selection object, normally wrapped with a proxy. Used as the target of
 * the proxy object returned by `member`
 *
 */
export declare class MemberSelector extends Selector {
    name: string;
    constructor(name: string, treespace?: Element);
    get(key: any): any;
    set(key: any, value: any): void;
    delete(key: any): void;
}
/**
 * Returns an object that represents a property with the name within the `treespace` (or document).
 * Getting properties returns the property in the specified element and setting or deleting properties
 * updates or deletes the property correspondingly.
 *
 * @example
 * import { member } from 'apption';
 * document.body.innerHTML = `
 * <div>I am a div</div>
 * <p>I am a paragraph</p>
 * <section>I am a section</section>
 * <article>I am an article</article>
 * `;
 * const slct = member('textContent', document.body);
 * console.log(slct.div);  // I am a div
 *
 *
 * @param name
 * @param treespace
 * @param cls
 * @returns
 */
export declare function member(name: string, treespace?: Element, cls?: typeof MemberSelector): Selector;
/**
 * A selection object, normally wrapped with a proxy. Used as the target of
 * the proxy object returned by `attr`
 *
 */
export declare class AttrSelector extends MemberSelector {
    get(key: any): any;
    set(key: any, value: any): void;
    delete(key: any): void;
}
/**
 * Returns an object that represents an attribute with the name within the `treespace` (or document).
 * Getting properties returns the attribute in the specified element and setting or deleting properties
 * updates or removes the attribute correspondingly.
 *
 * @example
 * import { attr } from 'apption';
 * document.body.innerHTML = `
 * <div>I am a div</div>
 * <p class="main">I am a paragraph</p>
 * <section>I am a section</section>
 * <article>I am an article</article>
 * `;
 * const slct = attr('class', document.body);
 * console.log(slct.p);  // main
 *
 *
 * @param name
 * @param treespace
 * @param cls
 * @returns
 */
export declare function attr(name: string, treespace?: Element, cls?: typeof AttrSelector): Selector;
/**
 * A selection object, normally wrapped with a proxy. Used as the target of
 * the proxy object returned by `method`
 *
 */
export declare class MethodSelector extends Selector {
    name: string;
    constructor(name: string, treespace?: Element);
    call(key: any, ...args: any[]): any;
}
/**
 * Returns an object that represents a method with the name within the `treespace` (or document).
 * Calling its methods calls the corresponding method in the specified element.
 *
 * @example
 * import { method } from 'apption';
 * document.body.innerHTML = `
 * <div>I am a div</div>
 * <p>I am a paragraph</p>
 * <section>I am a section</section>
 * <article>I am an article</article>
 * `;
 * const slct = method('remove', document.body);
 * slct.section();
 * console.log(document.querySelector('section'));  // null
 *
 *
 * @param name
 * @param treespace
 * @param cls
 * @returns
 */
export declare function method(name: string, treespace?: Element, cls?: typeof MethodSelector): MethodSelector;
//# sourceMappingURL=selector.d.ts.map