[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / Action

# Class: Action

A wrapper around [act](../functions/act.md) to store the operations array. The operartions can be an instance 
of [Lazy](Lazy.md) so that it is computed every time [Action#act](Action.md#act) is called.

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

[action.ts:267](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L267)

## Properties

### operations

> **operations**: [`IOperations`](../type-aliases/IOperations.md) \| [`Lazy`](Lazy.md)\<[`IOperations`](../type-aliases/IOperations.md)\>

#### Defined in

[action.ts:266](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L266)

## Accessors

### actor

> `get` **actor**(): `any`

The function equivalent of this action.

#### Example

```ts
import { CallAction } from 'apption'
let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
const action = new CallAction({ push: [arr1], unshift: [arr2] }).actor;
action(20, 21);
console.log(arr1)   // [1, 2, 3, 20, 21]
console.log(arr2)   // [20, 21, 1, 2, 3]
```

#### Returns

`any`

#### Defined in

[action.ts:283](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L283)

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

[action.ts:270](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L270)
