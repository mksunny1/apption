[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / MemberSelector

# Class: MemberSelector

A selection object, normally wrapped with a proxy. Used as the target of 
the proxy object returned by `member`

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

[selector.ts:81](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L81)

## Properties

### name

> **name**: `string`

#### Defined in

[selector.ts:80](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L80)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`Selector`](Selector.md).[`treespace`](Selector.md#treespace)

#### Defined in

[selector.ts:25](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L25)

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

[selector.ts:91](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L91)

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

[selector.ts:85](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L85)

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

[selector.ts:88](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L88)
