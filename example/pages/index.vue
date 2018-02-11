<template>
  <section class="container">
    <div>
      <nuxt-logo/>
      <python-logo />
      <h1 class="title">
        {{ name }}
      </h1>
      <h2 class="subtitle">
        {{ description }}
      </h2>
      <div class="links">
        <a
          href="https://github.com/nuxt-community/python-module"
          target="_blank"
          class="button--green">Module Docs</a>
      </div>

      <br>

      <button @click="decrement">-</button>
      {{ $store.state.counter }}
      <button @click="increment">+</button>
    </div>
  </section>
</template>

<script lang="py?compiler=pj">
from ..components.PythonLogo import __default__ as PythonLogo
from ..components.NuxtLogo import __default__ as NuxtLogo

class Component:
    def __init__(self):
      self['components'] = { 'NuxtLogo': NuxtLogo, 'PythonLogo': PythonLogo }

      self['data'] = lambda: {
        'name': 'Nuxt.js + Python',
        'description': 'Build Nuxt.js applications using python!'
      }

      self['methods'] = {
        'increment': self.increment,
        'decrement': self.decrement
      }

    def increment(self):
      self['$store'].commit('increment')

    def decrement(self):
      self['$store'].commit('decrement')

__default__= Component()
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
