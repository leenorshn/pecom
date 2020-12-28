<template>
  <v-card flat>
    <v-tabs
      color="white"
      active-class="white--text"
      right
      background-color="primary"
    >
      <v-tab>Mes produits</v-tab>
      <v-tab>Mes Clients</v-tab> 
      <v-tab-item>
        <ProductPage :listProd="products"/>
      </v-tab-item>
      <v-tab-item>
        <ClientPage/>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import ProductPage from "./../components/ProductPage";
import ClientPage from "./../components/ClientPage";
export default {
  name: 'Home',
  components: {
    ProductPage,
    ClientPage
  },
  computed:{
    ...mapState(['products','clients'])
  },
}
</script>
