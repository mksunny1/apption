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

[selector.ts:232](https://github.com/mksunny1/apption/blob/45b0ba573a0535c0a6c3b4df2b60698c89aab92a/src/selector.ts#L232)

## Properties

### name

> **name**: `string`

#### Defined in

[selector.ts:231](https://github.com/mksunny1/apption/blob/45b0ba573a0535c0a6c3b4df2b60698c89aab92a/src/selector.ts#L231)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`Selector`](Selector.md).[`treespace`](Selector.md#treespace)

#### Defined in

[selector.ts:40](https://github.com/mksunny1/apption/blob/45b0ba573a0535c0a6c3b4df2b60698c89aab92a/src/selector.ts#L40)

## Methods

### call()

> **call**(`key`, ...`args`): `any`

#### Parameters

• **key**: `any`

• ...**args**: `any`[]

#### Returns

`any`

#### Defined in

[selector.ts:236](https://github.com/mksunny1/apption/blob/45b0ba573a0535c0a6c3b4df2b60698c89aab92a/src/selector.ts#L236)

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

[selector.ts:56](https://github.com/mksunny1/apption/blob/45b0ba573a0535c0a6c3b4df2b60698c89aab92a/src/selector.ts#L56)

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

[selector.ts:44](https://github.com/mksunny1/apption/blob/45b0ba573a0535c0a6c3b4df2b60698c89aab92a/src/selector.ts#L44)

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

[selector.ts:49](https://github.com/mksunny1/apption/blob/45b0ba573a0535c0a6c3b4df2b60698c89aab92a/src/selector.ts#L49)
