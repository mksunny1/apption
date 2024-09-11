[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [middleware](../README.md) / Arg

# Class: Arg\<T\>

Returns a wrapper object which always invokes the function with the 
wrapped object after a property is set (`Arg.set(p, value)`) on or deleted (`Arg.delete(p)`) 
from it. The function will also be called before a property is retrieved (`Arg.get(p)`) 
from the object. 

This is useful for more complex transformations/computations that involve 
properties from multiple objects instead of a single one.

## Example

```ts
import { arg } from 'apption'
const obj = { a: 1, b: 2 };
let storedValue;
const fn = val => storedValue = val.a + val.b;
const arg = new Arg(obj, fn);
arg.set('a', 24);
console.log(storedValue)     // 24+2 = 26.
arg.set('b', 25);
console.log(storedValue)     // 24+25 = 49.
```

## Param

## Param

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

[middleware.ts:160](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L160)

## Properties

### fn

> **fn**: [`ICallable`](../../types/interfaces/ICallable.md)

#### Defined in

[middleware.ts:158](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L158)

***

### object

> **object**: `T`

#### Defined in

[middleware.ts:157](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L157)

## Methods

### delete()

> **delete**(`p`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`any`

#### Defined in

[middleware.ts:172](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L172)

***

### get()

> **get**(`p`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

#### Returns

`any`

#### Defined in

[middleware.ts:164](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L164)

***

### proxy()

> **proxy**(): `T`

#### Returns

`T`

#### Defined in

[middleware.ts:176](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L176)

***

### set()

> **set**(`p`, `value`): `any`

#### Parameters

• **p**: [`IKey`](../../types/type-aliases/IKey.md)

• **value**: `any`

#### Returns

`any`

#### Defined in

[middleware.ts:168](https://github.com/mksunny1/apption/blob/15875259b0a0fd5aee4cca9a9f9a7e7aa83be5d0/src/middleware.ts#L168)
