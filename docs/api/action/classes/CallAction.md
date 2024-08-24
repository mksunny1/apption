[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / CallAction

# Class: CallAction

A wrapper around [call](../functions/call.md) to store the map. The map can be an instance 
of [Lazy](Lazy.md) so that it is computed every time [CallAction#act](CallAction.md#act) is called.

## Example

```ts
import { CallAction } from 'apption'
let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
const action = new CallAction({ push: [arr1], unshift: [arr2] });
action.act(20, 21);
console.log(arr1)   // [1, 2, 3, 20, 21]
console.log(arr2)   // [20, 21, 1, 2, 3]
```

## Extends

- [`ObjectAction`](ObjectAction.md)

## Implements

- [`IAction`](../interfaces/IAction.md)\<`any`[], `any`\>

## Constructors

### new CallAction()

> **new CallAction**(`map`): [`CallAction`](CallAction.md)

#### Parameters

• **map**

#### Returns

[`CallAction`](CallAction.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`constructor`](ObjectAction.md#constructors)

#### Defined in

[action.ts:259](https://github.com/mksunny1/apption/blob/d0bf763109284abcb2484dd7dfd7111ee7475add/src/action.ts#L259)

## Properties

### map

> **map**: [`IActionMap`](../type-aliases/IActionMap.md)

#### Inherited from

[`ObjectAction`](ObjectAction.md).[`map`](ObjectAction.md#map)

#### Defined in

[action.ts:258](https://github.com/mksunny1/apption/blob/d0bf763109284abcb2484dd7dfd7111ee7475add/src/action.ts#L258)

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

[action.ts:278](https://github.com/mksunny1/apption/blob/d0bf763109284abcb2484dd7dfd7111ee7475add/src/action.ts#L278)
