# @nuxtjs/python
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/python/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/python)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/python.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/python)
[![CircleCI](https://img.shields.io/circleci/project/github/https://github.com/nuxt-community/python-module.svg?style=flat-square)](https://circleci.com/gh/https://github.com/nuxt-community/python-module)
[![Codecov](https://img.shields.io/codecov/c/github/https://github.com/nuxt-community/python-module.svg?style=flat-square)](https://codecov.io/gh/https://github.com/nuxt-community/python-module)
[![Dependencies](https://david-dm.org/https://github.com/nuxt-community/python-module/status.svg?style=flat-square)](https://david-dm.org/https://github.com/nuxt-community/python-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Write Nuxt.js Apps in Python

[📖 **Release Notes**](./CHANGELOG.md)

## Features

- Write Nuxt.js applications without using Python!
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

- Install a Python transpiler (e.g. `pip install --user -r requirements.txt`)

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

__all__ = Component()
</script>
```
Note: This syntax requires a specific branch of Javascripthon until patches get merged https://github.com/icarito/metapensiero.pj/tree/default_import - see alternative with `require` at https://github.com/martim00/python-webpack-loader/pull/8#issuecomment-359280782

### Using `.py` files for other nuxt files

`store/index.py`
```python
from vuex import Vuex


def increment(state):
    state.counter = state.counter + 1


def createStore():
    return Vuex.Store(state={'counter': 0},
                      mutations={'increment': increment})


__all__ = createStore
```

`pages/counter.vue`
```html
<template>
  <h2>{{ $store.state.counter }}</h2>
  <button @click="$store.commit('increment')">+1</button>
</template>
```

## Development

- Clone this repository
- Install dependnecies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Sebastian Silva <sebastian@fuentelibre.org>
