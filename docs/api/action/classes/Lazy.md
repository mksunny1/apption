[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / Lazy

# Class: Lazy\<T\>

Wraps a function that returns a real value to work with when an action is triggered. 
ALl actions exported by this module ([act](../functions/act.md), [call](../functions/call.md), [set](../functions/set.md), [del](../functions/del.md)) 
recognise instances of this type. This removes the need to hold references to concrete 
objects before-hand, which may be memory-inneficient.

## Example

```ts
import { Lazy, set } from 'apption';
const element = document.querySelector('ul');
const lazy = new Lazy((value, index) => element.children[index]);
set({ className: lazy }, 'color-primary', 0);
for (let i = 1; i < element.children.length; i++) set({ className: lazy }, '', i)
```

## Type Parameters

• **T**

## Constructors

### new Lazy()

> **new Lazy**\<`T`\>(`callable`): [`Lazy`](Lazy.md)\<`T`\>

#### Parameters

• **callable**: [`ICallable`](../../types/interfaces/ICallable.md)

#### Returns

[`Lazy`](Lazy.md)\<`T`\>

#### Defined in

[action.ts:19](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/action.ts#L19)

## Properties

### callable

> **callable**: [`ICallable`](../../types/interfaces/ICallable.md)

#### Defined in

[action.ts:18](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/action.ts#L18)

## Methods

### value()

> **value**(...`args`): `T`

#### Parameters

• ...**args**: `any`[]

#### Returns

`T`

#### Defined in

[action.ts:22](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/action.ts#L22)
