# Drage

[![NPM Package][npm]][npm-url]

Draggable Container.

## Installation

You can install `Drage` using npm:

```bash
npm i drage
```

## Usage

Here's an example of how to use `Drage` in combination with [Tweakpane](https://github.com/cocopon/tweakpane):

```js
import { Drage } from "drage"
import { Pane } from "tweakpane"

// Create a Drage container
const { contentArea } = Drage()

// Create a Tweakpane instance
const pane = new Pane({
  title: "Parameters",
  container: contentArea,
})

// Your customization here...
```

## LICENSE

Please refer to [the MIT license](https://github.com/ZRNOF/Drage/blob/main/LICENSE) for detailed licensing information.


[npm]: https://img.shields.io/npm/v/drage
[npm-url]: https://www.npmjs.com/package/drage
