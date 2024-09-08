[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / redirect

# Function: redirect()

> **redirect**\<`T`\>(`map`, `remap`?): [`ILike`](../type-aliases/ILike.md)\<`T`\>

Returns an object whose properties are drawn from multiple objects.

The keys in `map` are the 'virtual' properties of the redirect object and 
the values are the source objects containing the real properties.

The optional `remap` object may be used to map virtual properties to 
another property on the source object. Any virtual properties not in 
`remap` will naturally have the same name in the source object.

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

[middleware.ts:178](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/middleware.ts#L178)
