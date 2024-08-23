[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / del

# Function: del()

> **del**(`map`): `void`

Deletes specified properties from different objects.
If an object or array of objects is `Lazy`, it will be called with the key first to obtain the 
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

[action.ts:200](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/action.ts#L200)
