[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / ObjectAction

# Class: ObjectAction\<T, U\>

Base class for actions on objects

## Extended by

- [`CallAction`](CallAction.md)
- [`SetAction`](SetAction.md)
- [`DelAction`](DelAction.md)

## Type Parameters

• **T** *extends* `any`[] = `any`[]

• **U** *extends* `any` = `any`

## Constructors

### new ObjectAction()

> **new ObjectAction**\<`T`, `U`\>(`map`): [`ObjectAction`](ObjectAction.md)\<`T`, `U`\>

#### Parameters

• **map**

#### Returns

[`ObjectAction`](ObjectAction.md)\<`T`, `U`\>

#### Defined in

[action.ts:267](https://github.com/mksunny1/apption/blob/edbec5398a9c4dd80aef328bce86959614ae2fb4/src/action.ts#L267)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Defined in

[action.ts:263](https://github.com/mksunny1/apption/blob/edbec5398a9c4dd80aef328bce86959614ae2fb4/src/action.ts#L263)

## Accessors

### actor

> `get` **actor**(): `any`

The function equivalent of this action.

#### Returns

`any`

#### Defined in

[action.ts:273](https://github.com/mksunny1/apption/blob/edbec5398a9c4dd80aef328bce86959614ae2fb4/src/action.ts#L273)

## Methods

### act()

> **act**(...`args`): `U`

#### Parameters

• ...**args**: `T`

#### Returns

`U`

#### Defined in

[action.ts:264](https://github.com/mksunny1/apption/blob/edbec5398a9c4dd80aef328bce86959614ae2fb4/src/action.ts#L264)
