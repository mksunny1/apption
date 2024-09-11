[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / MethodSelector

# Class: MethodSelector

Returns a selection object that lazily represents a method with the name within the `treespace` element (or document).
Invoking [call][AttrSelector#get](AttrSelector.md#get) will call the corresponding method on the 
element selected with the `key` argument.

This is used as the target of the proxy object returned by [method](../functions/method.md)

## Example

```ts
import { MethodSelector } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p>I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = new MethodSelector('remove', document.body);
slct.call('section');
console.log(document.querySelector('section'));  // null
```

## Extends

- [`Selector`](Selector.md)

## Constructors

### new MethodSelector()

> **new MethodSelector**(`name`, `treespace`?): [`MethodSelector`](MethodSelector.md)

#### Parameters

• **name**: `string`

• **treespace?**: `Element`

#### Returns

[`MethodSelector`](MethodSelector.md)

#### Overrides

[`Selector`](Selector.md).[`constructor`](Selector.md#constructors)

#### Defined in

[selector.ts:253](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/selector.ts#L253)

## Properties

### name

> **name**: `string`

#### Defined in

[selector.ts:251](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/selector.ts#L251)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`Selector`](Selector.md).[`treespace`](Selector.md#treespace)

#### Defined in

[selector.ts:46](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/selector.ts#L46)

## Methods

### call()

> **call**(`key`, ...`args`): `any`

#### Parameters

• **key**: `any`

• ...**args**: `any`[]

#### Returns

`any`

#### Defined in

[selector.ts:257](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/selector.ts#L257)

***

### delete()

> **delete**(`key`): `void`

#### Parameters

• **key**: `any`

#### Returns

`void`

#### Inherited from

[`Selector`](Selector.md).[`delete`](Selector.md#delete)

#### Defined in

[selector.ts:75](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/selector.ts#L75)

***

### get()

> **get**(`key`): `any`

#### Parameters

• **key**: `any`

#### Returns

`any`

#### Inherited from

[`Selector`](Selector.md).[`get`](Selector.md#get)

#### Defined in

[selector.ts:51](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/selector.ts#L51)

***

### proxy()

> **proxy**(): `any`

#### Returns

`any`

#### Overrides

[`Selector`](Selector.md).[`proxy`](Selector.md#proxy)

#### Defined in

[selector.ts:260](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/selector.ts#L260)

***

### set()

> **set**(`key`, `value`): `void`

#### Parameters

• **key**: `any`

• **value**: `any`

#### Returns

`void`

#### Inherited from

[`Selector`](Selector.md).[`set`](Selector.md#set)

#### Defined in

[selector.ts:68](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/selector.ts#L68)
