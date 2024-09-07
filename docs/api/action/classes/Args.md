[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / Args

# Class: Args

An object returned from a function (or `Action.act` implementation) which specifies our intent to 
replace the propagated arguments with the new arguments list it is initialized with. This allows the 
`act` function to behave like a pipe operator if we require such. This is more limited than 
passing the same argument list to all the functions, but may perhaps be desired for some reason.

## Example

```ts
import { act, Args } from 'apption'
let count = 0;
act([
    (a1, a2) => count += a1,
    (a1, a2) => new Args([a2, 0]),
    (a1, a2) => count += a2 + 5
], 20, 21);
console.log(count);   // 25
```

## Constructors

### new Args()

> **new Args**(`value`): [`Args`](Args.md)

#### Parameters

• **value**: `any`[]

#### Returns

[`Args`](Args.md)

#### Defined in

[action.ts:98](https://github.com/mksunny1/apption/blob/3f2288c24fed7fc1effebf2fdac51656d2dda91c/src/action.ts#L98)

## Properties

### value

> **value**: `any`[]

#### Defined in

[action.ts:97](https://github.com/mksunny1/apption/blob/3f2288c24fed7fc1effebf2fdac51656d2dda91c/src/action.ts#L97)
