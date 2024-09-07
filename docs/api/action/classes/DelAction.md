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

[action.ts:277](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/action.ts#L277)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`map`](ObjectAction.md#map)

#### Defined in

[action.ts:273](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/action.ts#L273)

## Accessors

### actor

> `get` **actor**(): `any`

The function equivalent of this action.

#### Returns

`any`

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`actor`](ObjectAction.md#actor)

#### Defined in

[action.ts:283](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/action.ts#L283)

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

[action.ts:339](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/action.ts#L339)
