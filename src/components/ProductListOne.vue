<template>
  <div class="productlist__one">
    <h1>
      I am product list - 1
    </h1>
    <ul class="flex-container">
      <li class="flex-item" v-for="product in saleProducts">
        {{product.name}} - ${{product.price}}
      </li>
    </ul>
    <button type="button" @click="reducePrice">Reduce price</button>
  </div>
</template>

<script>
  export default {
    computed: {
      products () {
        return this.$store.state.products;
      },
      saleProducts () {
        return this.$store.getters.saleProducts
      }
    },
    methods: {
      reducePrice () {
        this.$store.state.products.forEach( product => {
          product.price -= 1;
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .productlist__one {
    background: lightgreen;
    padding: 20px;
  }
  .flex-container {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    font: inherit;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .flex-item {
    width: 200px;
    height: 150px;
    background: tomato;

    margin: 10px 0px;
    padding: 5px;
    line-height: 150px;

    color: white;
    font-weight: bold;
    font-size: 2vh;
    text-align: center;
  }

</style>
