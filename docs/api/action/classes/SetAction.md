[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / SetAction

# Class: SetAction

A wrapper around [set](../functions/set.md) to store the map. The map can be an instance 
of [Lazy](Lazy.md) so that it is computed every time [SetAction#act](SetAction.md#act) is called.

## Example

```ts
import { SetAction } from 'apption'
let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
const action = new SetAction({ a: [obj1], b: [obj2], c: [obj1] });
action.act(20);
console.log(obj1);    // { a: 20, b: 2, c: 20}
console.log(obj2);    // { a: 1, b: 20, c: 3}
```

## Extends

- [`ObjectAction`](ObjectAction.md)

## Implements

- [`IAction`](../interfaces/IAction.md)\<[`any`, `any`[]], `any`\>

## Constructors

### new SetAction()

> **new SetAction**(`map`): [`SetAction`](SetAction.md)

#### Parameters

• **map**

#### Returns

[`SetAction`](SetAction.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`constructor`](ObjectAction.md#constructors)

#### Defined in

[action.ts:277](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/action.ts#L277)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`map`](ObjectAction.md#map)

#### Defined in

[action.ts:273](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/action.ts#L273)

## Accessors

### actor

> `get` **actor**(): `any`

The function equivalent of this action.

#### Returns

`any`

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`actor`](ObjectAction.md#actor)

#### Defined in

[action.ts:283](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/action.ts#L283)

## Methods

### act()

> **act**(`value`, ...`args`): `void`

#### Parameters

• **value**: `any`

• ...**args**: `any`[]

#### Returns

`void`

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`act`](../interfaces/IAction.md#act)

#### Overrides

[`ObjectAction`](ObjectAction.md).[`act`](ObjectAction.md#act)

#### Defined in

[action.ts:321](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/action.ts#L321)
