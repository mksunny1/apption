[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / arg

# Function: arg()

> **arg**\<`T`\>(`object`, `fn`): `T`

Returns a wrapper object which always invokes the function with the 
input object after a property is set on or deleted from it. The function 
will also be called before a property is retrieved from the object. This is 
useful for more complex transformations/computations that involve properties 
from multiple objects instead of a single one.

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
const arg = (obj, fn);
arg.a = 24;
console.log(storedValue)     // 24+2 = 26.
arg.b = 25;
console.log(storedValue)     // 24+25 = 49.
```

## Defined in

[middleware.ts:118](https://github.com/mksunny1/apption/blob/8a5b4dcedc594ef8c2d14b969bb9eb94e7e47749/src/middleware.ts#L118)
