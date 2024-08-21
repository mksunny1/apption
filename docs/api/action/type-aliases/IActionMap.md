[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / IActionMap

# Type Alias: IActionMap

> **IActionMap**: [`IActionMapObject`](IActionMapObject.md) \| [`Lazy`](../classes/Lazy.md)\<[`IActionMapObject`](IActionMapObject.md)\>

An object mapping member keys to arrays of objects which can can be used as the `map` argument 
of `call`, `set` or `del`. It may also be an instance of `Lazy` which resolves to any of these. 
The values or the items in them may also be `Lazy` objects that return the expected type of object there.

## Defined in

action.ts:67
