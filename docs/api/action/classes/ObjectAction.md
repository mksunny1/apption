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

[action.ts:257](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L257)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Defined in

[action.ts:253](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L253)

## Accessors

### actor

> `get` **actor**(): `any`

The function equivalent of this action.

#### Returns

`any`

#### Defined in

[action.ts:263](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L263)

## Methods

### act()

> **act**(...`args`): `U`

#### Parameters

• ...**args**: `T`

#### Returns

`U`

#### Defined in

[action.ts:254](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L254)
