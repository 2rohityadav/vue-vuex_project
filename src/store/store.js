import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana', price: 20},
      {name: 'Orange', price:30},
      {name: 'Lemon', price: 10},
      {name: 'Apple', price: 50}
    ]
  },
  getters: {
    saleProducts: state => {
      var saleP = state.products.map(product => { // map method take this original array and is gonna map it into the new array and perform someking of functionality as mapped through
        // So inside here we need to return new value which goona be mappped to the new array
        // So remeber we are returning object because each iteration we have product object
        return {
          // so each object have name and price property
          name: '*'+ product.name + '*',
          price: product.price/2
        }
      });
      // now we need to return this array
      return saleP;
    }
  }
})
