[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / arg

# Function: arg()

> **arg**\<`T`\>(`object`, `fn`): `T`

Creates a proxy of an `Arg` instance whcich maps property accesses to 
corresponding `Arg` methods.

## Type Parameters

• **T**

## Parameters

• **object**: `T`

• **fn**

## Returns

`T`

## Example

```ts
import { arg } from 'apption'
const obj = { a: 1, b: 2 };
let storedValue;
const fn = val => storedValue = val.a + val.b;
const arg = arg(obj, fn);
arg.a = 24;
console.log(storedValue)     // 24+2 = 26.
arg.b = 25;
console.log(storedValue)     // 24+25 = 49.
```

## Defined in

[middleware.ts:201](https://github.com/mksunny1/apption/blob/edbec5398a9c4dd80aef328bce86959614ae2fb4/src/middleware.ts#L201)
