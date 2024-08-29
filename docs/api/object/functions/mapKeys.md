[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / mapKeys

# Function: mapKeys()

> **mapKeys**(`object`, `mapper`, `inPlace`?): `any`

Transform the keys of the input object using the mapper and return the mapped object.
The returned object will be the same as the input if `inPlace` is truthy.

## Parameters

• **object**: `any`

• **mapper**: [`ICallable`](../../action/interfaces/ICallable.md)

• **inPlace?**: `boolean`

## Returns

`any`

## Example

```ts
import { mapKeys } from 'apption'
const obj = mapKeys({ a: 1, b: 2, c: 3 }, (k, v) => `${k}1`);   
console.log(obj)   // { a1: 1, b1: 2, c1: 3 }
```

## Defined in

[object.ts:63](https://github.com/mksunny1/apption/blob/f3b5d5c3614cab7eb977eb2c318ddd94377b693c/src/object.ts#L63)
