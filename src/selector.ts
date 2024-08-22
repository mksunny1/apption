/**
 * Functionality related to selecting elements in the DOM.
 */

const selectorTrap = {
    get<T extends Selector>(target: T, p: string | number | symbol) {
        return target.get(p)
    },
    set<T extends Selector>(target: T, p: string | number | symbol, value: any) {
        target.set(p, value);
        return true;
    },
    deleteProperty<T extends Selector>(target: T, p: string | number | symbol) {
        target.delete(p);
        return true;
    }
}

/**
 * A selection object, normally wrapped with a proxy. Used as the target of 
 * the proxy object returned by `selector`
 * 
 */
export class Selector {
    treespace?: Element;
    constructor(treespace?: Element) {
        if (treespace) this.treespace = treespace;
    }
    get(key: any): any {
        const element = this.treespace || document;
        if (typeof key === 'string') return element.querySelector(key);
        else if (typeof key === 'number') return element.children[key>= 0? key: element.children.length + key];
    }
    set(key: any, value: any) {
        const currentElement: Element | null | undefined = this.get(key);
        if (currentElement) {
            if (value instanceof Array) currentElement.replaceWith(...value);
            else currentElement.replaceWith(value);
        }
    }
    delete(key: any) {
        const currentElement: Element | null | undefined = this.get(key);
        if (currentElement) currentElement.remove();
    }
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
export function selector(treespace?: Element, cls = Selector) {
    return new Proxy(new cls(treespace), selectorTrap);
}

/**
 * A selection object, normally wrapped with a proxy. Used as the target of 
 * the proxy object returned by `member`
 * 
 */
export class MemberSelector extends Selector {
    name: string;
    constructor(name: string, treespace?: Element) {
        super(treespace);
        this.name = name;
    }
    get(key: any) {
        return super.get(key)?.[this.name];
    }
    set(key: any, value: any) {
        super.get(key)[this.name] = value;
    }
    delete(key: any) {
        delete super.get(key)[this.name];
    }
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
export function member(name: string, treespace?: Element, cls = MemberSelector) {
    return new Proxy(new cls(name, treespace), selectorTrap);
}

/**
 * A selection object, normally wrapped with a proxy. Used as the target of 
 * the proxy object returned by `attr`
 * 
 */
export class AttrSelector extends MemberSelector {
    get(key: any) {
        return Selector.prototype.get.call(this, key)?.getAttribute(this.name);
    }
    set(key: any, value: any) {
        Selector.prototype.get.call(this, key)?.setAttribute(this.name, value);
    }
    delete(key: any) {
        Selector.prototype.get.call(this, key)?.removeAttribute(this.name);
    }
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
export function attr(name: string, treespace?: Element, cls = AttrSelector) {
    return member(name, treespace, cls || AttrSelector);
}

/**
 * A selection object, normally wrapped with a proxy. Used as the target of 
 * the proxy object returned by `method`
 * 
 */
export class MethodSelector extends Selector {
    name: string;
    constructor(name: string, treespace?: Element) {
        super(treespace);
        this.name = name;
    }
    call(key: any, ...args: any[]) {
        return super.get(key)?.[this.name](...args);
    }
}
const methodSelectorTrap = {
    get<T extends MethodSelector>(target: T, p: string | number | symbol) {
        return (...args: any) => target.call(p, ...args);
    }
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
export function method(name: string, treespace?: Element, cls = MethodSelector) {
    return new Proxy(new cls(name, treespace), methodSelectorTrap);
}

