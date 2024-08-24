[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / reduce

# Function: reduce()

> **reduce**(`object`, `reducer`, `result`): `any`

Reduces the input object using the reducer (and optional initial value) and return the reduced value.

## Parameters

• **object**: `any`

• **reducer**: [`ICallable`](../../action/interfaces/ICallable.md)

• **result**: `any` = `null`

## Returns

`any`

## Example

```ts
import { reduce } from 'apption'
const r = mapValues({ a: 1, b: 2, c: 3 }, (r, k, v) => r + (v * v), 0);   
console.log(r)   // 14
```

## Defined in

[object.ts:103](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/object.ts#L103)
