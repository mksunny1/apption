[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / call

# Function: call()

> **call**(`map`, ...`args`): `any`[]

Calls specified methods in multiple objects.

If any array of objects (value) or object (value item) is of type `Lazy`, it is first resolved to obtain the 
object(s) to work with.

## Parameters

• **map**: [`IActionMapObject`](../type-aliases/IActionMapObject.md)

• ...**args**: `any`[]

## Returns

`any`[]

## Example

```ts
import { call } from 'apption'
let arr1 = [1, 2, 3], arr2 = [1, 2, 3];
call({ push: [arr1], unshift: [arr2] }, 20, 21);
console.log(arr1)   // [1, 2, 3, 20, 21]
console.log(arr2)   // [20, 21, 1, 2, 3]
```

## Defined in

[action.ts:146](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/action.ts#L146)
