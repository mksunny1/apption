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

[object.ts:120](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/object.ts#L120)
