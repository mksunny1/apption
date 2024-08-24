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

[action.ts:217](https://github.com/mksunny1/apption/blob/45b0ba573a0535c0a6c3b4df2b60698c89aab92a/src/action.ts#L217)
