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
  </div>
</template>

<script>
  export default {
    computed: {
      products () {
        return this.$store.state.products;
      },
      saleProducts () {
        var saleP = this.$store.state.products.map(product => { // map method take this original array and is gonna map it into the new array and perform someking of functionality as mapped through
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
