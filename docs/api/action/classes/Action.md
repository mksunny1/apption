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

[action.ts:246](https://github.com/mksunny1/apption/blob/d0bf763109284abcb2484dd7dfd7111ee7475add/src/action.ts#L246)

## Properties

### operations

> **operations**: [`IOperations`](../type-aliases/IOperations.md) \| [`Lazy`](Lazy.md)\<[`IOperations`](../type-aliases/IOperations.md)\>

#### Defined in

[action.ts:245](https://github.com/mksunny1/apption/blob/d0bf763109284abcb2484dd7dfd7111ee7475add/src/action.ts#L245)

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

[action.ts:249](https://github.com/mksunny1/apption/blob/d0bf763109284abcb2484dd7dfd7111ee7475add/src/action.ts#L249)
