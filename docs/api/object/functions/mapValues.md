[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / mapValues

# Function: mapValues()

> **mapValues**(`object`, `mapper`, `inPlace`?): `any`

Transform the values of the input object using the mapper and return the mapped object.
The returned object will be the same as the input if `inPlace` is truthy.

## Parameters

• **object**: `any`

• **mapper**: [`ICallable`](../../action/interfaces/ICallable.md)

• **inPlace?**: `boolean`

## Returns

`any`

## Example

```ts
import { mapValues } from 'apption'
const obj = mapValues({ a: 1, b: 2, c: 3 }, (k, v) => v * 3);   
console.log(obj)   // { a: 3, b: 6, c: 9 }
```

## Defined in

[object.ts:40](https://github.com/mksunny1/apption/blob/1b614adcd1980e91a6414cd2431809f5010e6ec2/src/object.ts#L40)
