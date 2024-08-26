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

[action.ts:261](https://github.com/mksunny1/apption/blob/db22d834b74a7e66a6f9b8ca626095b91c5a8508/src/action.ts#L261)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`map`](ObjectAction.md#map)

#### Defined in

[action.ts:260](https://github.com/mksunny1/apption/blob/db22d834b74a7e66a6f9b8ca626095b91c5a8508/src/action.ts#L260)

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

#### Defined in

[action.ts:300](https://github.com/mksunny1/apption/blob/db22d834b74a7e66a6f9b8ca626095b91c5a8508/src/action.ts#L300)
