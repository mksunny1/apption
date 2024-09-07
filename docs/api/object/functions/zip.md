[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / zip

# Function: zip()

> **zip**(`keys`, `values`?): `object`

Combine `keys` with corresponding items in `values` to form and return an object.
`values` could be `undefined` may not have items corresponding to some keys but 
all keys must be provided.

## Parameters

• **keys**: [`IKey`](../../action/type-aliases/IKey.md)[]

• **values?**: `any`[]

## Returns

`object`

## Example

```ts
import { zip } from 'apption'
const obj = zip(['a', 'b', 'c'], [1, 2, 3]);   
console.log(obj)   // { a: 1, b: 2, c: 3 }
```

## Defined in

[object.ts:23](https://github.com/mksunny1/apption/blob/3f2288c24fed7fc1effebf2fdac51656d2dda91c/src/object.ts#L23)
