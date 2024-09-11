[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / call

# Function: call()

> **call**(`map`, ...`args`): `any`[]

Calls specified methods in multiple objects.

If any array of objects (value) or object (value item) is of type [Lazy](../classes/Lazy.md), 
it is first resolved to obtain the object(s) to work with.

## Parameters

• **map**: [`IActionMapObject`](../type-aliases/IActionMapObject.md) \| [`ActionMap`](../classes/ActionMap.md)

• ...**args**: `any`[]

## Returns

`any`[]

## Example

```ts
import { call } from 'apption'
let arr1 = [1, 2, 3], arr2 = [1, 2, 3], arr3 = [1, 2, 3];
const actions = { push: [arr1, arr3], unshift: [arr2] };
call(actions, 20, 21);
console.log(arr1)   // [1, 2, 3, 20, 21]
console.log(arr2)   // [20, 21, 1, 2, 3]
console.log(arr3)   // [1, 2, 3, 20, 21]
```

## Defined in

[action.ts:173](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/action.ts#L173)
