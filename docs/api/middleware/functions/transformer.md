[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / transformer

# Function: transformer()

> **transformer**\<`T`\>(`object`, `trans`): `T`

Creates a proxy of a `Transformer` instance whcich maps property and method accesses to 
`Transformer` methods.

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

[middleware.ts:114](https://github.com/mksunny1/apption/blob/5c2ed0c98e500fcbd7087b8148508efe1896c020/src/middleware.ts#L114)
