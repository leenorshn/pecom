<template>
  <v-card flat>
        <ProductPage :listProd="products"/>   
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import ProductPage from "./../components/ProductPage";

export default {
  name: 'Home',
  components: {
    ProductPage,
    
  },
  computed:{
    ...mapState(['products','clients'])
  },
}
</script>
