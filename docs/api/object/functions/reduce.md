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

[object.ts:102](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/object.ts#L102)
