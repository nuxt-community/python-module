from vuex import Store

def increment(state):
  state.counter = state.counter + 1

def decrement(state):
  state.counter = state.counter - 1

def createStore():
  return Store(
    state= {
      'counter': 0
    },
    mutations= {
      'increment': increment,
      'decrement': decrement
    })

__default__ = createStore
