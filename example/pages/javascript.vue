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

<script>
import PythonLogo from '~/components/PythonLogo'
import NuxtLogo from '~/components/NuxtLogo'


export default {
  components : { 'NuxtLogo': NuxtLogo, 'PythonLogo': PythonLogo },
  data: function () {
    return {
      'name': 'Nuxt.js + Python',
      'description': 'Build Nuxt.js applications using Python!'
      }
  },
  methods: {
    increment: function() {
      this['$store'].commit('increment')
    },
    decrement: function() {
      this['$store'].commit('decrement')
    }
  }
}

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
