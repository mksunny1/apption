[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / Redirect

# Class: Redirect\<T\>

Creates an object which reroutes property accesses (`get`, `set` and `delete`) to 
other objects.

The keys in `Redirect.map` are the 'virtual' properties of the Redirect instance and 
the values are the source objects containing the real properties.

The optional `Redirect.remap` object may be used to map a virtual property to 
a property with a different key in the source object. Any virtual properties not in 
`Redirect.remap` will naturally have the same key in the source object.

## Example

```ts
import { redirect } from 'apption'
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
const red = new Redirect({ c: obj1, d: obj2 }, {c: 'a', d: 'a'});
console.log(red.get('c'))     // 1
console.log(red.get('d'))     // 3
```

## Param

## Param

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

[middleware.ts:253](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L253)

## Properties

### map

> **map**: `T`

#### Defined in

[middleware.ts:250](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L250)

***

### remap?

> `optional` **remap**: [`IOp`](../type-aliases/IOp.md)\<[`ILike`](../type-aliases/ILike.md)\<`T`, [`IKey`](../../types/type-aliases/IKey.md)\>\>

#### Defined in

[middleware.ts:251](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L251)

## Methods

### delete()

> **delete**(`p`): `void`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`void`

#### Defined in

[middleware.ts:275](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L275)

***

### get()

> **get**(`p`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`any`

#### Defined in

[middleware.ts:257](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L257)

***

### proxy()

> **proxy**(): `T`

#### Returns

`T`

#### Defined in

[middleware.ts:282](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L282)

***

### set()

> **set**(`p`, `value`): `void`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

• **value**: `any`

#### Returns

`void`

#### Defined in

[middleware.ts:268](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L268)
