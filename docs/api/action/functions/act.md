[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / act

# Function: act()

> **act**(`operations`, ...`args`): `void` \| `any`[]

An abstract function that can combine any set of operations (actions). 
Can be used in scenarios where the operations are not similar enough for the 
other more specialised functions: `call`, `set` and `del`.

The functions to call may be specified statically or generated dynamically 
from `Lazy` instances. Similar arrays may be nested within the outermost one to 
any depth.

## Parameters

• **operations**: [`IOperations`](../type-aliases/IOperations.md)

• ...**args**: `any`[]

## Returns

`void` \| `any`[]

## Example

```ts
import { act } from 'apption'
let count = 0;
act([
    (a1, a2) => count += a1,
    (a1, a2) => count += a2,
    (a1, a2) => count += a2 + 1
], 20, 21);
console.log(count);   // 63
```

## Defined in

[action.ts:116](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/action.ts#L116)
