[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / Selector

# Class: Selector

Returns a selection object that lazily represents an element within the `treespace` element (or document).
Calling [get][Selector#get](Selector.md#get) returns the specified element.  
Calling [Selector#set](Selector.md#set) replaces the element and calling [Selector#delete](Selector.md#delete)
removes it. 

Selector instances are used as the target of the proxy object returned by [selector](../functions/selector.md)

## Example

```ts
import { Selector } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p>I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = new Selector(document.body);
console.log(slct.get('article').textContent);  // I am an article
```

## Extended by

- [`MemberSelector`](MemberSelector.md)
- [`MethodSelector`](MethodSelector.md)

## Constructors

### new Selector()

> **new Selector**(`treespace`?): [`Selector`](Selector.md)

#### Parameters

• **treespace?**: `Element`

#### Returns

[`Selector`](Selector.md)

#### Defined in

[selector.ts:43](https://github.com/mksunny1/apption/blob/3d0322baa807496b8ecfb44bd80265a9049ec621/src/selector.ts#L43)

## Properties

### treespace?

> `optional` **treespace**: `Element`

#### Defined in

[selector.ts:42](https://github.com/mksunny1/apption/blob/3d0322baa807496b8ecfb44bd80265a9049ec621/src/selector.ts#L42)

## Methods

### delete()

> **delete**(`key`): `void`

#### Parameters

• **key**: `any`

#### Returns

`void`

#### Defined in

[selector.ts:58](https://github.com/mksunny1/apption/blob/3d0322baa807496b8ecfb44bd80265a9049ec621/src/selector.ts#L58)

***

### get()

> **get**(`key`): `any`

#### Parameters

• **key**: `any`

#### Returns

`any`

#### Defined in

[selector.ts:46](https://github.com/mksunny1/apption/blob/3d0322baa807496b8ecfb44bd80265a9049ec621/src/selector.ts#L46)

***

### set()

> **set**(`key`, `value`): `void`

#### Parameters

• **key**: `any`

• **value**: `any`

#### Returns

`void`

#### Defined in

[selector.ts:51](https://github.com/mksunny1/apption/blob/3d0322baa807496b8ecfb44bd80265a9049ec621/src/selector.ts#L51)
