[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / ActionMap

# Class: ActionMap

ActionMap allows us to use iterables (of key-value pairs)  in place of 
objects in `call`, `set` and `del` functions (and corresponding classes).
This can be useful for building virtual objects which are only used with 
the calls but never held fully in memory at any time, improving memory 
performance.

## Example

```ts
import { call, ActionMap } from 'apption'
let arr1 = [1, 2, 3], arr2 = [1, 2, 3], arr3 = [1, 2, 3];
const actions = new ActionMap([[ 'push', [arr1, arr3]], ['unshift', [arr2]]]);
call(actions, 20, 21);
console.log(arr1)   // [1, 2, 3, 20, 21]
console.log(arr2)   // [20, 21, 1, 2, 3]
console.log(arr3)   // [1, 2, 3, 20, 21]
```

## Constructors

### new ActionMap()

> **new ActionMap**(`entries`): [`ActionMap`](ActionMap.md)

#### Parameters

• **entries**: `Iterable`\<[[`IKey`](../../types/type-aliases/IKey.md), `any`]\>

#### Returns

[`ActionMap`](ActionMap.md)

#### Defined in

[action.ts:145](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/action.ts#L145)

## Properties

### entries

> **entries**: `Iterable`\<[[`IKey`](../../types/type-aliases/IKey.md), `any`]\>

#### Defined in

[action.ts:144](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/action.ts#L144)
