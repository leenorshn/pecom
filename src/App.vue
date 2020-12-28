<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'App',

  components: {
   
  },
  methods:{
    ...mapActions(['getProducts','getClients']),

  },
  beforeMount(){
    this.getClients();
    this.getProducts();
  }
  ,
  

  data: () => ({
    //
  }),
};
</script>
