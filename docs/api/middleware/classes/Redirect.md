[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / Redirect

# Class: Redirect\<T\>

## Type Parameters

• **T**

## Constructors

### new Redirect()

> **new Redirect**\<`T`\>(`map`, `remap`?): [`Redirect`](Redirect.md)\<`T`\>

#### Parameters

• **map**: `T`

• **remap?**: [`IOp`](../type-aliases/IOp.md)\<[`ILike`](../type-aliases/ILike.md)\<`T`, [`IKey`](../../types/type-aliases/IKey.md)\>\>

#### Returns

[`Redirect`](Redirect.md)\<`T`\>

#### Defined in

[middleware.ts:192](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L192)

## Properties

### map

> **map**: `T`

#### Defined in

[middleware.ts:189](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L189)

***

### remap?

> `optional` **remap**: [`IOp`](../type-aliases/IOp.md)\<[`ILike`](../type-aliases/ILike.md)\<`T`, [`IKey`](../../types/type-aliases/IKey.md)\>\>

#### Defined in

[middleware.ts:190](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L190)

## Methods

### delete()

> **delete**(`p`): `void`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`void`

#### Defined in

[middleware.ts:214](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L214)

***

### get()

> **get**(`p`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`any`

#### Defined in

[middleware.ts:196](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L196)

***

### proxy()

> **proxy**(): `T`

#### Returns

`T`

#### Defined in

[middleware.ts:221](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L221)

***

### set()

> **set**(`p`, `value`): `void`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

• **value**: `any`

#### Returns

`void`

#### Defined in

[middleware.ts:207](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L207)
