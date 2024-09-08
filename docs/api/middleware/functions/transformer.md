[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / transformer

# Function: transformer()

> **transformer**\<`T`\>(`object`, `trans`): `T`

Creates a transformer object which wraps the given object to 
transform values passed to/from it.

## Type Parameters

• **T**

## Parameters

• **object**: `T`

• **trans**: [`ITransformer`](../interfaces/ITransformer.md)

## Returns

`T`

## Example

```ts
import { transformer } from 'apption'
const obj = { a: 1, b: 2 };
const trans = { get(val) {return val * 5} };
const tObj = transformer(obj, trans);
console.log(tObj.a);    // 5
console.log(tObj.b);    // 10
```

## Defined in

[middleware.ts:75](https://github.com/mksunny1/apption/blob/76ef749a5be7d197c14269d0b969e6bfc0fc29cb/src/middleware.ts#L75)
