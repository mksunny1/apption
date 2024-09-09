[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / DelAction

# Class: DelAction

A wrapper around [del](../functions/del.md) to store the map. The map can be an instance 
of [Lazy](Lazy.md) so that it is computed every time [DelAction#act](DelAction.md#act) is called.

## Example

```ts
.import { DelAction } from 'apption'
let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
const action = new DelAction({ a: [obj1], b: [obj2], c: [obj1] });
action.act();
console.log(obj1);    // { b: 2 }
console.log(obj2);    // { a: 1, c: 3}
```

## Extends

- [`ObjectAction`](ObjectAction.md)

## Implements

- [`IAction`](../interfaces/IAction.md)\<`any`[], `any`\>

## Constructors

### new DelAction()

> **new DelAction**(`map`): [`DelAction`](DelAction.md)

#### Parameters

• **map**

#### Returns

[`DelAction`](DelAction.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`constructor`](ObjectAction.md#constructors)

#### Defined in

[action.ts:257](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L257)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`map`](ObjectAction.md#map)

#### Defined in

[action.ts:253](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L253)

## Accessors

### actor

> `get` **actor**(): `any`

The function equivalent of this action.

#### Returns

`any`

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`actor`](ObjectAction.md#actor)

#### Defined in

[action.ts:263](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L263)

## Methods

### act()

> **act**(...`args`): `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`act`](../interfaces/IAction.md#act)

#### Overrides

[`ObjectAction`](ObjectAction.md).[`act`](ObjectAction.md#act)

#### Defined in

[action.ts:319](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L319)
