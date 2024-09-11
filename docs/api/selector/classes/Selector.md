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
<main>
     <p>P in MAIN</p>
</main>
`;
const slct = new Selector(document.body);
console.log(slct.get('article').textContent);  // I am an article
console.log(slct.get('main & p').textContent);  // P in MAIN
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

[selector.ts:48](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/selector.ts#L48)

## Properties

### treespace?

> `optional` **treespace**: `Element`

#### Defined in

[selector.ts:46](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/selector.ts#L46)

## Methods

### delete()

> **delete**(`key`): `void`

#### Parameters

• **key**: `any`

#### Returns

`void`

#### Defined in

[selector.ts:75](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/selector.ts#L75)

***

### get()

> **get**(`key`): `any`

#### Parameters

• **key**: `any`

#### Returns

`any`

#### Defined in

[selector.ts:51](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/selector.ts#L51)

***

### proxy()

> **proxy**(): `any`

#### Returns

`any`

#### Defined in

[selector.ts:79](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/selector.ts#L79)

***

### set()

> **set**(`key`, `value`): `void`

#### Parameters

• **key**: `any`

• **value**: `any`

#### Returns

`void`

#### Defined in

[selector.ts:68](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/selector.ts#L68)
