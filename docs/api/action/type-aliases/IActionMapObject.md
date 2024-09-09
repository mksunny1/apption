[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [action](../README.md) / IActionMapObject

# Type Alias: IActionMapObject

> **IActionMapObject**: `object`

An object mapping member keys to arrays of objects which can can be used as the `map` argument 
of `call`, `set` or `del`. It may also be an instance of `Lazy` which resolves to any of these. 
The values or the items in them may also be `Lazy` objects that return the expected type of object there.

## Index Signature

 \[`key`: `string` \| `number`\]: `any`[] \| [`Lazy`](../classes/Lazy.md)\<`any`[]\>

## Defined in

[action.ts:51](https://github.com/mksunny1/apption/blob/7303acd5ad264aa235c8c110ccb0c2efbc2d008c/src/action.ts#L51)
