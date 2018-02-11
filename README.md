# @nuxtjs/python
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/python/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/python)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/python.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/python)
[![CircleCI](https://img.shields.io/circleci/project/nuxt-community/python-module.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/python-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/python-module.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/python-module)
[![Dependencies](https://david-dm.org/nuxt-community/python-module/status.svg?style=flat-square)](https://david-dm.org/nuxt-community/python-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Write Nuxt.js Apps in Python

[📖 **Release Notes**](./CHANGELOG.md)

## Features

- Write Nuxt.js applications using Python!
- Currently only supports custom Javascripthon but in the future other compilers will also be expected to work.

## Setup
- Add `@nuxtjs/python` dependency using yarn or npm to your project
- Add `@nuxtjs/python` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/python'
 ]
}
```

- Install the [Javascripthon](https://gitlab.com/metapensiero/metapensiero.pj) Python transpiler (for now **you'll need the development version** e.g. `pip install -r requirements.txt`).

- Note that Javascripthon requires that you have **Python 3.5** (or better).

- In Vue files, Mark your script tags like this: `<script lang="py?compiler=pj">`.

- Please note syntax [conversions](https://gitlab.com/metapensiero/metapensiero.pj#import-statements).

## Usage

### Using `.vue` files

**TIP** If you use Vim you can get the full experience with https://github.com/posva/vim-vue/pull/97

`hello.vue`:

```html
<template>
  <div>
      Nuxt {{ best_lang }}
  </div>
</template>

<script lang="py?compiler=pj">
class Component:
  def __init__(self):
      self['data'] = lambda: { 'best_lang': 'Python' }

__default__ = Component()
</script>
```

### Using `.py` files for other nuxt files

`store/index.py`

```python
from vuex import Store

def increment(state):
    state.counter = state.counter + 1

def createStore():
    return Store(
      state={'counter': 0},
      mutations={'increment': increment}
    )

__default__ = createStore
```

`pages/counter.vue`

```html
<template>
  <h2>{{ $store.state.counter }}</h2>
  <button @click="$store.commit('increment')">+1</button>
</template>
```

👉 For a working example, see [here](./example).

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Sebastian Silva <sebastian@fuentelibre.org>

This module was started from the [module-template](https://github.com/nuxt-community/module-template) by Pooya Parsa and relies heavily on [python-webpack-loader](https://github.com/martim00/python-webpack-loader) by Martim Nascimento and [Javascripthon](https://gitlab.com/metapensiero/metapensiero.pj) by Alberto Berti.
