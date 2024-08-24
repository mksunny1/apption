[**apption**](../../README.md) • **Docs**

***

[apption](../../modules.md) / [selector](../README.md) / selector

# Function: selector()

> **selector**(`treespace`?, `cls`?): [`Selector`](../classes/Selector.md)

Returns a proxy object that selects an element when a property is requested from it. 
Setting a property will also replace the selected element and deleting 
a property will remove the selected element.

By default it uses `querySelector` for string keys and `children` for 
number keys.

## Parameters

• **treespace?**: `Element`

• **cls?**: *typeof* [`Selector`](../classes/Selector.md) = `Selector`

## Returns

[`Selector`](../classes/Selector.md)

## Example

```ts
import { selector } from 'apption';
document.body.innerHTML = `
<div>I am a div</div>
<p>I am a paragraph</p>
<section>I am a section</section>
<article>I am an article</article>
`;
const slct = selector(document.body);
console.log(slct.article.textContent);  // I am an article
```

## Defined in

[selector.ts:70](https://github.com/mksunny1/apption/blob/035a4a06796a9b49dd42992a6540b71b3edfb590/src/selector.ts#L70)
