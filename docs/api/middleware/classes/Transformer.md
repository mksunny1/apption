[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / Transformer

# Class: Transformer\<T\>

An object which wraps another object to 
transform values passed to/from it using the transformer object.

## Example

```ts
import { Transformer } from 'apption'
const obj = { a: 1, b: 2 };
const trans = { get(val) {return val * 5} };
const tObj = new Transformer(obj, trans);
console.log(tObj.get('a'));    // 5
console.log(tObj.get('b'));    // 10
console.log(tObj.proxy().a);    
// 5. `new Transformer(obj, trans).proxy()` is equivalent to `transformer(obj, trans)`
```

## Param

## Param

## Type Parameters

• **T**

## Constructors

### new Transformer()

> **new Transformer**\<`T`\>(`object`, `trans`): [`Transformer`](Transformer.md)\<`T`\>

#### Parameters

• **object**: `T`

• **trans**: [`ITransformer`](../interfaces/ITransformer.md)

#### Returns

[`Transformer`](Transformer.md)\<`T`\>

#### Defined in

[middleware.ts:69](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/middleware.ts#L69)

## Properties

### object

> **object**: `T`

#### Defined in

[middleware.ts:66](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/middleware.ts#L66)

***

### trans

> **trans**: [`ITransformer`](../interfaces/ITransformer.md)

#### Defined in

[middleware.ts:67](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/middleware.ts#L67)

## Methods

### get()

> **get**(`p`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`any`

#### Defined in

[middleware.ts:74](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/middleware.ts#L74)

***

### proxy()

> **proxy**(): `T`

#### Returns

`T`

#### Defined in

[middleware.ts:92](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/middleware.ts#L92)

***

### set()

> **set**(`p`, `value`): `void`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

• **value**: `any`

#### Returns

`void`

#### Defined in

[middleware.ts:87](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/middleware.ts#L87)
