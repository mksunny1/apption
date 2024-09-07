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

[array.ts:44](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L44)

## Properties

### array

> **array**: `T`[]

#### Defined in

[array.ts:20](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L20)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[array.ts:41](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L41)

***

### move()

> **move**(`from`, `to`): `T`[]

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

`T`[]

#### Defined in

[array.ts:37](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L37)

***

### pop()

> **pop**(): `T`

#### Returns

`T`

#### Defined in

[array.ts:26](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L26)

***

### push()

> **push**(...`items`): `number`

#### Parameters

• ...**items**: `T`[]

#### Returns

`number`

#### Defined in

[array.ts:25](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L25)

***

### set()

> **set**(`index`, `value`): `void`

#### Parameters

• **index**: `number`

• **value**: `T`

#### Returns

`void`

#### Defined in

[array.ts:21](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L21)

***

### shift()

> **shift**(): `T`

#### Returns

`T`

#### Defined in

[array.ts:28](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L28)

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

[array.ts:29](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L29)

***

### swap()

> **swap**(`from`, `to`): [`T`, `T`]

#### Parameters

• **from**: `number`

• **to**: `number`

#### Returns

[`T`, `T`]

#### Defined in

[array.ts:33](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L33)

***

### unshift()

> **unshift**(...`items`): `number`

#### Parameters

• ...**items**: `T`[]

#### Returns

`number`

#### Defined in

[array.ts:27](https://github.com/mksunny1/apption/blob/ae95a8119448c604f1b19ab341a5639f3c56f4f4/src/array.ts#L27)
