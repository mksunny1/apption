[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / act

# Function: act()

> **act**(`operations`, ...`args`): `void` \| `any`[]

An abstract function that can combine any set of operations. 
Can be used in scenarios where the operations are not similar enough for the 
other more specialised functions: [call](call.md), [set](set.md) or [del](del.md).

The functions to call may be specified statically or generated dynamically 
from [Lazy](../classes/Lazy.md) instances. Similar arrays may be nested within the outermost one to 
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
const actions = [
    (a1, a2) => count += a1,
    (a1, a2) => count += a2,
    (a1, a2) => count += a2 + 1
]
act(actions, 20, 21);
console.log(count);   // 63

actions.pop();

act(actions, 10, 20);
console.log(count);   // 93
```

## Defined in

[action.ts:112](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/action.ts#L112)
