[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [array](../README.md) / ArrayActions

# Class: ArrayActions\<T\>

Wraps an array exposing the same mutation API (`push`, `pop`, `unshift`, `shift`, `splice`) 
and adds a few extra methods namely: `set`, `move`, `swap` and `clear`.

## Example

```ts
import { ArrayActions, call, ChildrenActions } from 'apption';
const array = [];
const actions = new ArrayActions(array);
actions.push(1, 2, 3);
console.log(array.length);   // 3
```

## Type Parameters

• **T**

## Constructors

### new ArrayActions()

> **new ArrayActions**\<`T`\>(`array`): [`ArrayActions`](ArrayActions.md)\<`T`\>

#### Parameters

• **array**: `T`[]

#### Returns

[`ArrayActions`](ArrayActions.md)\<`T`\>

#### Defined in

[array.ts:42](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L42)

## Properties

### array

> **array**: `T`[]

#### Defined in

[array.ts:18](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L18)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[array.ts:39](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L39)

***

### move()

> **move**(`from`, `to`): `T`[]

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

`T`[]

#### Defined in

[array.ts:35](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L35)

***

### pop()

> **pop**(): `T`

#### Returns

`T`

#### Defined in

[array.ts:24](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L24)

***

### push()

> **push**(...`items`): `number`

#### Parameters

• ...**items**: `T`[]

#### Returns

`number`

#### Defined in

[array.ts:23](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L23)

***

### set()

> **set**(`index`, `value`): `void`

#### Parameters

• **index**: `number`

• **value**: `T`

#### Returns

`void`

#### Defined in

[array.ts:19](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L19)

***

### shift()

> **shift**(): `T`

#### Returns

`T`

#### Defined in

[array.ts:26](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L26)

***

### splice()

> **splice**(`start`, `deleteCount`?, ...`items`?): `T`[]

#### Parameters

• **start**: `number`

• **deleteCount?**: `number`

• ...**items?**: `T`[]

#### Returns

`T`[]

#### Defined in

[array.ts:27](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L27)

***

### swap()

> **swap**(`from`, `to`): [`T`, `T`]

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

[`T`, `T`]

#### Defined in

[array.ts:31](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L31)

***

### unshift()

> **unshift**(...`items`): `number`

#### Parameters

• ...**items**: `T`[]

#### Returns

`number`

#### Defined in

[array.ts:25](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/array.ts#L25)
