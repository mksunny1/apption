[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / MemberSelector

# Class: MemberSelector

Returns a selection object that lazily represents a property with the name within the `treespace` element (or document).
Calling [get][MemberSelector#get](MemberSelector.md#get) returns the property in the specified element.  
Calling [MemberSelector#set](MemberSelector.md#set) updates the property and calling [MemberSelector#delete](MemberSelector.md#delete)
deletes it. 

MemberSelector instances are used as the target of the proxy object returned by [member](../functions/member.md)

## Example

```ts
import { MemberSelector } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p>I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = new MemberSelector('textContent', document.body);
console.log(slct.get('div'));  // I am a div
```

## Extends

- [`Selector`](Selector.md)

## Extended by

- [`AttrSelector`](AttrSelector.md)

## Constructors

### new MemberSelector()

> **new MemberSelector**(`name`, `treespace`?): [`MemberSelector`](MemberSelector.md)

#### Parameters

• **name**: `string`

• **treespace?**: `Element`

#### Returns

[`MemberSelector`](MemberSelector.md)

#### Overrides

[`Selector`](Selector.md).[`constructor`](Selector.md#constructors)

#### Defined in

[selector.ts:113](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/selector.ts#L113)

## Properties

### name

> **name**: `string`

#### Defined in

[selector.ts:112](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/selector.ts#L112)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`Selector`](Selector.md).[`treespace`](Selector.md#treespace)

#### Defined in

[selector.ts:42](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/selector.ts#L42)

## Methods

### delete()

> **delete**(`key`): `void`

#### Parameters

• **key**: `any`

#### Returns

`void`

#### Overrides

[`Selector`](Selector.md).[`delete`](Selector.md#delete)

#### Defined in

[selector.ts:123](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/selector.ts#L123)

***

### get()

> **get**(`key`): `any`

#### Parameters

• **key**: `any`

#### Returns

`any`

#### Overrides

[`Selector`](Selector.md).[`get`](Selector.md#get)

#### Defined in

[selector.ts:117](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/selector.ts#L117)

***

### set()

> **set**(`key`, `value`): `void`

#### Parameters

• **key**: `any`

• **value**: `any`

#### Returns

`void`

#### Overrides

[`Selector`](Selector.md).[`set`](Selector.md#set)

#### Defined in

[selector.ts:120](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/selector.ts#L120)
