[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / Result

# Class: Result

An object returned from a function (or `Action.act` implementation) which specifies our intent to 
replace the propagated arguments with the new arguments list it is initialized with. This allows the 
`act` function to behave like a pipe operator if we require such. This is more limited than 
passing the same argument list to all the functions, but may perhaps be desired for some reason.

## Example

```ts
import { act, Result } from 'apption'
let count = 0;
act([
    (a1, a2) => count += a1,
    (a1, a2) => new Result([a2, 0]),
    (a1, a2) => count += a2 + 5
], 20, 21);
console.log(count);   // 25
```

## Constructors

### new Result()

> **new Result**(`value`): [`Result`](Result.md)

#### Parameters

• **value**: `any`[]

#### Returns

[`Result`](Result.md)

#### Defined in

[action.ts:96](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/action.ts#L96)

## Properties

### value

> **value**: `any`[]

#### Defined in

[action.ts:95](https://github.com/mksunny1/apption/blob/b06f059586e3c06c29fccfd5bd8250a5c5e800b1/src/action.ts#L95)
