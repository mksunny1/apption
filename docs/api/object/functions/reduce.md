[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / reduce

# Function: reduce()

> **reduce**(`object`, `reducer`, `result`): `any`

Reduces the input object using the reducer (and optional initial value) 
and return the reduced value.

## Parameters

• **object**: `any`

• **reducer**: [`ICallable`](../../types/interfaces/ICallable.md)

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

[object.ts:106](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/object.ts#L106)
