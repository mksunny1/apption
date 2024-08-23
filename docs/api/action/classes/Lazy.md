[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / Lazy

# Class: Lazy\<T\>

Wraps a function that returns a real list or map of functions or objects to work with.
It removes the need to hold references to concrete objects before-hand, which may be 
memory-inneficient.

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

• **callable**: [`ICallable`](../interfaces/ICallable.md)

#### Returns

[`Lazy`](Lazy.md)\<`T`\>

#### Defined in

[action.ts:36](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/action.ts#L36)

## Properties

### callable

> **callable**: [`ICallable`](../interfaces/ICallable.md)

#### Defined in

[action.ts:35](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/action.ts#L35)

## Methods

### value()

> **value**(...`args`): `T`

#### Parameters

• ...**args**: `any`[]

#### Returns

`T`

#### Defined in

[action.ts:39](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/action.ts#L39)
