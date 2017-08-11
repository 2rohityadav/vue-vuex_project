import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana', price: '$20'},
      {name: 'Orange', price:'$30'},
      {name: 'Lemon', price: '$10'},
      {name: 'Apple', price: '$50'}
    ]
  }
})
