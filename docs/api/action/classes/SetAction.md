[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / SetAction

# Class: SetAction

A wrapper around `set` to store the map. The map can be an instance 
of `Lazy` so that it is computed every time `act` is called.

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

[action.ts:242](https://github.com/mksunny1/apption/blob/4be4c2e759dafd6ec2dfcf726cc1a869f1970fb3/src/action.ts#L242)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`map`](ObjectAction.md#map)

#### Defined in

[action.ts:241](https://github.com/mksunny1/apption/blob/4be4c2e759dafd6ec2dfcf726cc1a869f1970fb3/src/action.ts#L241)

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

[action.ts:281](https://github.com/mksunny1/apption/blob/4be4c2e759dafd6ec2dfcf726cc1a869f1970fb3/src/action.ts#L281)
