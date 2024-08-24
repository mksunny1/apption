[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / Action

# Class: Action

A wrapper around the `act` function to store the operations array. The operartions can be an instance 
of `Lazy` so that it is computed every time `act` is called.

## Example

```ts
import { Action } from 'apption'
let count = 0;
const action = new Action([
    (a1, a2) => count += a1,
    (a1, a2) => count += a2,
    (a1, a2) => count += a2 + 1
]);
action.act(20, 21);
console.log(count);   // 63
```

## Implements

- [`IAction`](../interfaces/IAction.md)\<`any`[], `any`[] \| `void`\>

## Constructors

### new Action()

> **new Action**(`operations`): [`Action`](Action.md)

#### Parameters

• **operations**: [`IOperations`](../type-aliases/IOperations.md) \| [`Lazy`](Lazy.md)\<[`IOperations`](../type-aliases/IOperations.md)\>

#### Returns

[`Action`](Action.md)

#### Defined in

[action.ts:229](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/action.ts#L229)

## Properties

### operations

> **operations**: [`IOperations`](../type-aliases/IOperations.md) \| [`Lazy`](Lazy.md)\<[`IOperations`](../type-aliases/IOperations.md)\>

#### Defined in

[action.ts:228](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/action.ts#L228)

## Methods

### act()

> **act**(...`args`): `void` \| `any`[]

#### Parameters

• ...**args**: `any`[]

#### Returns

`void` \| `any`[]

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`act`](../interfaces/IAction.md#act)

#### Defined in

[action.ts:232](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/action.ts#L232)
