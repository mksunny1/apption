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

[selector.ts:250](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L250)

## Properties

### name

> **name**: `string`

#### Defined in

[selector.ts:249](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L249)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`Selector`](Selector.md).[`treespace`](Selector.md#treespace)

#### Defined in

[selector.ts:46](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L46)

## Methods

### call()

> **call**(`key`, ...`args`): `any`

#### Parameters

• **key**: `any`

• ...**args**: `any`[]

#### Returns

`any`

#### Defined in

[selector.ts:254](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L254)

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

[selector.ts:74](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L74)

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

[selector.ts:50](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L50)

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

[selector.ts:67](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/selector.ts#L67)
