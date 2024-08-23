[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / attr

# Function: attr()

> **attr**(`name`, `treespace`?, `cls`?): [`Selector`](../classes/Selector.md)

Returns an object that represents an attribute with the name within the `treespace` (or document).
Getting properties returns the attribute in the specified element and setting or deleting properties 
updates or removes the attribute correspondingly.

## Parameters

• **name**: `string`

• **treespace?**: `Element`

• **cls?**: *typeof* [`AttrSelector`](../classes/AttrSelector.md) = `AttrSelector`

## Returns

[`Selector`](../classes/Selector.md)

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

[selector.ts:161](https://github.com/mksunny1/apption/blob/1770a08bd9b714c79b6dab283c2bf83182646040/src/selector.ts#L161)
