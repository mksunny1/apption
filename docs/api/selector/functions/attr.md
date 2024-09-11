[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / attr

# Function: attr()

> **attr**(`name`, `treespace`?): `any`

Returns an object that lazily represents an attribute with the name within the `treespace` element (or document).
Getting properties returns the attribute in the specified element and setting or deleting properties 
updates or removes the attribute correspondingly.

## Parameters

• **name**: `string`

• **treespace?**: `Element`

## Returns

`any`

## Example

```ts
import { attr } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p class="main">I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = attr('class', document.body);
console.log(slct.p);  // main
```

## Defined in

[selector.ts:226](https://github.com/mksunny1/apption/blob/dbb9a0b63a254dcf90cb4a7766307cb86cadec9a/src/selector.ts#L226)
