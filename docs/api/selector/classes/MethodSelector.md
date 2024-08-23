[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / MethodSelector

# Class: MethodSelector

A selection object, normally wrapped with a proxy. Used as the target of 
the proxy object returned by `method`

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

[selector.ts:172](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L172)

## Properties

### name

> **name**: `string`

#### Defined in

[selector.ts:171](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L171)

***

### treespace?

> `optional` **treespace**: `Element`

#### Inherited from

[`Selector`](Selector.md).[`treespace`](Selector.md#treespace)

#### Defined in

[selector.ts:25](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L25)

## Methods

### call()

> **call**(`key`, ...`args`): `any`

#### Parameters

• **key**: `any`

• ...**args**: `any`[]

#### Returns

`any`

#### Defined in

[selector.ts:176](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L176)

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

[selector.ts:41](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L41)

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

[selector.ts:29](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L29)

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

[selector.ts:34](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L34)
