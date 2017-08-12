import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
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
  },
  mutations: {
    reducePrice: state => {
      setTimeout(function(){
        state.products.forEach( product => {
          product.price -= 1;
        })
      }, 3000)
    }
  }
  // When it comes into debugging If we used locally we don't even know which function or method actully performing task like here reducting price sot the best way here use thrugh mutation which means they can track the chanching the data.

  // So we used mutation edit the data from the store rather than directly from the components.
})
