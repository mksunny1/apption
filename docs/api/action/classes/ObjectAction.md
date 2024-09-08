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

[action.ts:277](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/action.ts#L277)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Defined in

[action.ts:273](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/action.ts#L273)

## Accessors

### actor

> `get` **actor**(): `any`

The function equivalent of this action.

#### Returns

`any`

#### Defined in

[action.ts:283](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/action.ts#L283)

## Methods

### act()

> **act**(...`args`): `U`

#### Parameters

• ...**args**: `T`

#### Returns

`U`

#### Defined in

[action.ts:274](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/action.ts#L274)
