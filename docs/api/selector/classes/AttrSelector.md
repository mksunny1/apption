[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / AttrSelector

# Class: AttrSelector

A selection object, normally wrapped with a proxy. Used as the target of 
the proxy object returned by `attr`

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

[selector.ts:81](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/selector.ts#L81)

## Properties

### name

> **name**: `string`

#### Inherited from

[`MemberSelector`](MemberSelector.md).[`name`](MemberSelector.md#name)

#### Defined in

[selector.ts:80](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/selector.ts#L80)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`MemberSelector`](MemberSelector.md).[`treespace`](MemberSelector.md#treespace)

#### Defined in

[selector.ts:25](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/selector.ts#L25)

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

[selector.ts:134](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/selector.ts#L134)

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

[selector.ts:128](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/selector.ts#L128)

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

[selector.ts:131](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/selector.ts#L131)
