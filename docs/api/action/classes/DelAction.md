[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / DelAction

# Class: DelAction

A wrapper around `del` to store the map. The map can be an instance 
of `Lazy` so that it is computed every time `act` is called.

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

[action.ts:242](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/action.ts#L242)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`map`](ObjectAction.md#map)

#### Defined in

[action.ts:241](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/action.ts#L241)

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

[action.ts:299](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/action.ts#L299)
