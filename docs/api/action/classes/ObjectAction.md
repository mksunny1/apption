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

[action.ts:296](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L296)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Defined in

[action.ts:292](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L292)

## Accessors

### actor

> `get` **actor**(): `any`

The function equivalent of this action.

#### Returns

`any`

#### Defined in

[action.ts:302](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L302)

## Methods

### act()

> **act**(...`args`): `U`

#### Parameters

• ...**args**: `T`

#### Returns

`U`

#### Defined in

[action.ts:293](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L293)
