[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / foreach

# Function: foreach()

> **foreach**(`object`, `callable`): `void`

Performs the specified operation on all pairs of object keys and values (Object.entries()).

## Parameters

• **object**: `any`

• **callable**: [`ICallable`](../../action/interfaces/ICallable.md)

## Returns

`void`

## Example

```ts
import { foreach } from 'apption'
let count = 0;
foreach({ a: 1, b: 2, c: 3 }, (k, v) => count += (v * v));
console.log(count)    // 14
```

## Defined in

[object.ts:119](https://github.com/mksunny1/apption/blob/1b614adcd1980e91a6414cd2431809f5010e6ec2/src/object.ts#L119)
