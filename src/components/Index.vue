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
    productListOne: ProductListOne,
    ProductListTwo: ProductListTwo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
