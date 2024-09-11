[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [object](../README.md) / foreach

# Function: foreach()

> **foreach**(`object`, `callable`): `void`

Performs the specified operation on all pairs of object keys and values (Object.entries()).

## Parameters

• **object**: `any`

• **callable**: [`ICallable`](../../types/interfaces/ICallable.md)

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

[object.ts:123](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/object.ts#L123)
