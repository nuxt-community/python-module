# @nuxtjs/python
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/python/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/python)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/python.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/python)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/python-module/master.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/python-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/python-module.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/python-module)
[![Dependencies](https://david-dm.org/nuxt-community/python-module/status.svg?style=flat-square)](https://david-dm.org/nuxt-community/python-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Write Nuxt.js Apps in Python

[📖 **Release Notes**](./CHANGELOG.md)

## Features

- Write Nuxt 2 applications using Python!
- Currently only supports custom Javascripthon but in the future other compilers will also be expected to work.

## Try the example

1. Clone this repository and change directory into it
2. Install dependencies:
    ```
    npm install                         # or use yarn

    pip install -r requirements.txt
    ```
3. Run example: `npm run dev`

## Setup in your own project

- Add `@nuxtjs/python` dependency using yarn or npm to your project
- Add `@nuxtjs/python` to `modules` section of `nuxt.config.js`
  ```js
  {
    modules: [
      '@nuxtjs/python'
    ],
    python: {
      compiler: 'pj'   // default
    }
  }
  ```
- In Vue files, Mark your script tags like this: `<script lang="py">`.
- You may pass options to py-loader (currently it supports `compiler` parameter)

## Choice of Python to Javascript compiler

Compiler default and recommended is **Javascripthon** but it is possible to use other compilers (see below).

- Install the [Javascripthon](https://gitlab.com/metapensiero/metapensiero.pj) Python transpiler. For now **you'll need the master branch** e.g:
    ```
    pip install -e git+https://gitlab.com/metapensiero/metapensiero.pj#egg=javascripthon
    ```

- Note that Javascripthon requires that you have **Python 3.5** (or better).

- Javascripthon supports converting Python import statements to ES6 imports as used in Nuxt. Please note syntax [conversions](https://gitlab.com/metapensiero/metapensiero.pj#import-statements).

- You can pass a `compiler` option to py-loader by using module options or in a `python` section in your `nuxt.config.js` file.

- `Transcrypt` has its own module system so in order to use it, you can use the CommonJS module standard (`require` to import and `module.exports`) and it should work. See the `py-loader` [Vuejs example](https://github.com/martim00/python-webpack-loader/blob/master/examples/vue-demo/src/App.vue).

## Usage

### Using `.vue` files

**TIP** If you use Vim you can get syntax highlighting for HTML, CSS *and* Python by installing [vim-vue](https://github.com/posva/vim-vue) plugin and applying [this patch](https://github.com/posva/vim-vue/pull/97).

`hello.vue`:

```html
<template>
  <div>
      Nuxt {{ best_lang }}
  </div>
</template>

<script lang="py">
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
