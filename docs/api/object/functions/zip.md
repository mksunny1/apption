[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / zip

# Function: zip()

> **zip**(`keys`, `values`?): `object`

Combine the keys with corresponding values to form and return an object.
The value could be `undefined`.

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

[object.ts:20](https://github.com/mksunny1/apption/blob/4be4c2e759dafd6ec2dfcf726cc1a869f1970fb3/src/object.ts#L20)
