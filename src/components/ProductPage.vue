<template>
  <v-container fluid>
    <v-card height="3vh" flat></v-card>
    <v-row>
      
      <v-col md="12">
        <v-row>
          <v-col md="4" v-for="(n, i) in listProd" :key="i">
            <ProductTile :product="n" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ProductTile from "./ProductTile";


import { mapActions } from "vuex";

export default {
  components: {
    ProductTile,
  },
  props: {
    listProd: Array,
  },
  data() {
    return {
      caption: "",
      img1: "",
      imageData: null,
      product: {
        name: "",
        price: "",
        oldPrice: "",
        detail: "",
      },
    };
  },
  methods: {
    ...mapActions(["addProduct"]),

  },
};
</script>