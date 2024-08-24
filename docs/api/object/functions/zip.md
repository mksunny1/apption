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

[object.ts:21](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/object.ts#L21)
