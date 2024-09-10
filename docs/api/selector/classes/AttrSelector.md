[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / AttrSelector

# Class: AttrSelector

Returns a selection object that lazily represents an attribute with the name within the `treespace` element (or document).
Calling [get][AttrSelector#get](AttrSelector.md#get) returns the attribute in the specified element.  
Calling [AttrSelector#set](AttrSelector.md#set) updates the attribute and calling [AttrSelector#delete](AttrSelector.md#delete)
removes it. 

AttrSelector instances are also used as the target of the proxy object returned by [attr](../functions/attr.md)

## Example

```ts
import { attr } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p class="main">I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = new AttrSelector('class', document.body);
console.log(slct.get('p'));  // main
```

## Extends

- [`MemberSelector`](MemberSelector.md)

## Constructors

### new AttrSelector()

> **new AttrSelector**(`name`, `treespace`?): [`AttrSelector`](AttrSelector.md)

#### Parameters

• **name**: `string`

• **treespace?**: `Element`

#### Returns

[`AttrSelector`](AttrSelector.md)

#### Inherited from

[`MemberSelector`](MemberSelector.md).[`constructor`](MemberSelector.md#constructors)

#### Defined in

[selector.ts:133](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L133)

## Properties

### name

> **name**: `string`

#### Inherited from

[`MemberSelector`](MemberSelector.md).[`name`](MemberSelector.md#name)

#### Defined in

[selector.ts:132](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L132)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`MemberSelector`](MemberSelector.md).[`treespace`](MemberSelector.md#treespace)

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

[`MemberSelector`](MemberSelector.md).[`delete`](MemberSelector.md#delete)

#### Defined in

[selector.ts:200](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L200)

***

### get()

> **get**(`key`): `any`

#### Parameters

• **key**: `any`

#### Returns

`any`

#### Overrides

[`MemberSelector`](MemberSelector.md).[`get`](MemberSelector.md#get)

#### Defined in

[selector.ts:194](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L194)

***

### proxy()

> **proxy**(): `any`

#### Returns

`any`

#### Inherited from

[`MemberSelector`](MemberSelector.md).[`proxy`](MemberSelector.md#proxy)

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

[`MemberSelector`](MemberSelector.md).[`set`](MemberSelector.md#set)

#### Defined in

[selector.ts:197](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/selector.ts#L197)
