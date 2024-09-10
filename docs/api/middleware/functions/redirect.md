[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / redirect

# Function: redirect()

> **redirect**\<`T`\>(`map`, `remap`?): [`ILike`](../type-aliases/ILike.md)\<`T`\>

Creates a proxy of a Redirect instance so that we can use it like a normal object.

## Type Parameters

• **T**

## Parameters

• **map**: `T`

• **remap?**: [`IOp`](../type-aliases/IOp.md)\<[`ILike`](../type-aliases/ILike.md)\<`T`, `string`\>\>

## Returns

[`ILike`](../type-aliases/ILike.md)\<`T`\>

## Example

```ts
import { redirect } from 'apption'
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
const red = redirect({ c: obj1, d: obj2 }, {c: 'a', d: 'a'});
console.log(red.c)     // 1
console.log(red.d)     // 3
```

## Defined in

[middleware.ts:302](https://github.com/mksunny1/apption/blob/edbec5398a9c4dd80aef328bce86959614ae2fb4/src/middleware.ts#L302)
