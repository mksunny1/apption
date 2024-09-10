[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / del

# Function: del()

> **del**(`map`): `void`

Deletes specified properties from different objects.
If an object or array of objects is [Lazy](../classes/Lazy.md), it will be called with the key first to obtain the 
real values to work with.

## Parameters

• **map**: [`IActionMapObject`](../type-aliases/IActionMapObject.md)

## Returns

`void`

## Example

```ts
.import { del } from 'apption'
let obj1 = { a: 1, b: 2, c: 3 }, obj2 = { a: 1, b: 2, c: 3 };
del({ a: [obj1], b: [obj2], c: [obj1] });
console.log(obj1);    // { b: 2 }
console.log(obj2);    // { a: 1, c: 3}
```

## Defined in

[action.ts:209](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/action.ts#L209)
