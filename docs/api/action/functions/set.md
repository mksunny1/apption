[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / set

# Function: set()

> **set**(`map`, `value`): `void`

Sets specified properties in different objects.

If any array of objects (value) or object (value item) is of type [Lazy](../classes/Lazy.md), it is first resolved to obtain the 
object(s) to work with.

## Parameters

• **map**: [`IActionMapObject`](../type-aliases/IActionMapObject.md)

• **value**: `any`

## Returns

`void`

## Example

```ts
import { set } from 'apption'
let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
const actions = { a: [obj1], b: [obj2], c: [obj1] };
set(actions, 20);
console.log(obj1);    // { a: 20, b: 2, c: 20}
console.log(obj2);    // { a: 1, b: 20, c: 3}
```

## Defined in

[action.ts:194](https://github.com/mksunny1/apption/blob/3f2288c24fed7fc1effebf2fdac51656d2dda91c/src/action.ts#L194)
