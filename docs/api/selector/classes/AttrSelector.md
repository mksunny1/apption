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

[selector.ts:113](https://github.com/mksunny1/apption/blob/b82cc0441c2a3fb855ccc4681a8be2e6e4bd52ea/src/selector.ts#L113)

## Properties

### name

> **name**: `string`

#### Inherited from

[`MemberSelector`](MemberSelector.md).[`name`](MemberSelector.md#name)

#### Defined in

[selector.ts:112](https://github.com/mksunny1/apption/blob/b82cc0441c2a3fb855ccc4681a8be2e6e4bd52ea/src/selector.ts#L112)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`MemberSelector`](MemberSelector.md).[`treespace`](MemberSelector.md#treespace)

#### Defined in

[selector.ts:42](https://github.com/mksunny1/apption/blob/b82cc0441c2a3fb855ccc4681a8be2e6e4bd52ea/src/selector.ts#L42)

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

[selector.ts:181](https://github.com/mksunny1/apption/blob/b82cc0441c2a3fb855ccc4681a8be2e6e4bd52ea/src/selector.ts#L181)

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

[selector.ts:175](https://github.com/mksunny1/apption/blob/b82cc0441c2a3fb855ccc4681a8be2e6e4bd52ea/src/selector.ts#L175)

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

[selector.ts:178](https://github.com/mksunny1/apption/blob/b82cc0441c2a3fb855ccc4681a8be2e6e4bd52ea/src/selector.ts#L178)
