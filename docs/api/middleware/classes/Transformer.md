[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / Transformer

# Class: Transformer\<T\>

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

[middleware.ts:51](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L51)

## Properties

### object

> **object**: `T`

#### Defined in

[middleware.ts:48](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L48)

***

### trans

> **trans**: [`ITransformer`](../interfaces/ITransformer.md)

#### Defined in

[middleware.ts:49](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L49)

## Methods

### get()

> **get**(`p`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`any`

#### Defined in

[middleware.ts:55](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L55)

***

### proxy()

> **proxy**(): `T`

#### Returns

`T`

#### Defined in

[middleware.ts:73](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L73)

***

### set()

> **set**(`p`, `value`): `void`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

• **value**: `any`

#### Returns

`void`

#### Defined in

[middleware.ts:68](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L68)
