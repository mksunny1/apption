[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / method

# Function: method()

> **method**(`name`, `treespace`?): `any`

Returns an object that lazily represents a method with the name within the `treespace` (or document).
Calling its methods calls the corresponding method in the specified element.

## Parameters

• **name**: `string`

• **treespace?**: `Element`

## Returns

`any`

## Example

```ts
import { method } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p>I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = method('remove', document.body);
slct.section();
console.log(document.querySelector('section'));  // null
```

## Defined in

[selector.ts:292](https://github.com/mksunny1/apption/blob/528ebd3a42ce7da6886ac83411e2c2063969821c/src/selector.ts#L292)
