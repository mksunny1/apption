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

[action.ts:261](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/action.ts#L261)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`map`](ObjectAction.md#map)

#### Defined in

[action.ts:260](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/action.ts#L260)

## Methods

### act()

> **act**(...`args`): `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`act`](../interfaces/IAction.md#act)

#### Defined in

[action.ts:318](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/action.ts#L318)
