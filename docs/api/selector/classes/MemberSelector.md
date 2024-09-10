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

[selector.ts:133](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L133)

## Properties

### name

> **name**: `string`

#### Defined in

[selector.ts:132](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L132)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`Selector`](Selector.md).[`treespace`](Selector.md#treespace)

#### Defined in

[selector.ts:46](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L46)

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

[selector.ts:143](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L143)

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

[selector.ts:137](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L137)

***

### proxy()

> **proxy**(): `any`

#### Returns

`any`

#### Inherited from

[`Selector`](Selector.md).[`proxy`](Selector.md#proxy)

#### Defined in

[selector.ts:79](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L79)

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

[selector.ts:140](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L140)
