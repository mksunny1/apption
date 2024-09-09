[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / Arg

# Class: Arg\<T\>

## Type Parameters

• **T**

## Constructors

### new Arg()

> **new Arg**\<`T`\>(`object`, `fn`): [`Arg`](Arg.md)\<`T`\>

#### Parameters

• **object**: `T`

• **fn**: [`ICallable`](../../types/interfaces/ICallable.md)

#### Returns

[`Arg`](Arg.md)\<`T`\>

#### Defined in

[middleware.ts:117](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L117)

## Properties

### fn

> **fn**: [`ICallable`](../../types/interfaces/ICallable.md)

#### Defined in

[middleware.ts:115](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L115)

***

### object

> **object**: `T`

#### Defined in

[middleware.ts:114](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L114)

## Methods

### delete()

> **delete**(`p`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`any`

#### Defined in

[middleware.ts:129](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L129)

***

### get()

> **get**(`p`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`any`

#### Defined in

[middleware.ts:121](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L121)

***

### proxy()

> **proxy**(): `T`

#### Returns

`T`

#### Defined in

[middleware.ts:133](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L133)

***

### set()

> **set**(`p`, `value`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

• **value**: `any`

#### Returns

`any`

#### Defined in

[middleware.ts:125](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/middleware.ts#L125)
