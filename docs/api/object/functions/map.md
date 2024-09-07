[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / map

# Function: map()

> **map**(`object`, `mapper`, `inPlace`?): `any`

Transform the keys and values of the input object using the mapper and return the mapped object.
The returned object will be the same as the input if `inPlace` is truthy.

## Parameters

• **object**: `any`

• **mapper**: [`ICallable`](../../action/interfaces/ICallable.md)

• **inPlace?**: `boolean`

## Returns

`any`

## Example

```ts
import { map } from 'apption'
const obj = map({ a: 1, b: 2, c: 3 }, (k, v) => `${k}1`);   
console.log(obj)   // { a1: 3, b1: 6, c1: 9 }
```

## Defined in

[object.ts:82](https://github.com/mksunny1/apption/blob/3f2288c24fed7fc1effebf2fdac51656d2dda91c/src/object.ts#L82)
