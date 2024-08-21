**apption** • [**Docs**](modules.md)

***

# Apption

This is a simple library for creating frontend applications. It exports a few primitives for succinctly expressing many common operations in pure JavaScript. It works very well with modern app architectures based on components. The library encourages application code 
which are flexible, clean, well structured, fast, memory-efficient, easy to understand and easy to maintain. This is also a tiny library with minimal load-time overhead. It is an improvement on the earlier Class-Action suite of libraries; therefore it replaces them in [deleight](https://github.com/mksunny1/deleight). Anyone still interested in any of those libraries can find them [here](https://github.com/mksunny1/).

## Installation

`npm i apption`

## Usage

```js
import { call, ArrayActions, ChildrenActions } from 'apption';

const array = [];
const tbody = document.querySelector('tbody'), row = document.querySelector('template').content.firstElementChild;
const rowId = row.querySelector('td'), rowlbl = row.querySelector('a');

const AppChildrenActions = class extends ChildrenActions {
    render(item) {
        rowId.firstChild.nodeValue = item.id;
        rowlbl.firstChild.nodeValue = item.lb;
        return row.cloneNode(true);
    } update(value = ' !!!') {
        for (let i = 0; i < array.length; i += 10) 
            this.element.children[i].querySelector('a').firstChild.nodeValue = array[i].lbl += value;
    }
}, actions = [new ArrayActions(array), new AppChildrenActions(tbody)];

call({ push: actions }, { id: 1, lbl: 'First item }, { id: 2, lbl: 'Second item } );

```

## Documentation

This library exports a single class with a very simple API which can be picked up in a few minutes [here](_media/README.md).

## Contributing

Help improve Apption by contributing to this project. You can contribute in many ways. See the [contributing guidelines](_media/CONTRIBUTING.md). You can also show your support by sponsoring us.

Thank you for contributing.

## Sponsors

...
