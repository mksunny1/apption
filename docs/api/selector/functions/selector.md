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

[selector.ts:87](https://github.com/mksunny1/apption/blob/db22d834b74a7e66a6f9b8ca626095b91c5a8508/src/selector.ts#L87)
