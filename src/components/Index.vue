<template>
  <div class="hello">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './ProductListOne'
import ProductListTwo from './ProductListTwo'
export default {
  components: {
    'productListOne': ProductListOne,
    'ProductListTwo': ProductListTwo
  },
  data () {
    return {
      /*products: [
        {name: 'Banana', price: '$20'},
        {name: 'Orange', price:'$30'},
        {name: 'Lemon', price: '$10'},
        {name: 'Apple', price: '$50'}
      ]*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
