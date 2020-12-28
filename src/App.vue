<template>
  <v-app>
    <v-app-bar
    app
    flat
    color="black">
      <v-spacer></v-spacer>
      <v-btn class="white--text px-12" v-for="(m,i) in menu" :key="i" text router :to="m.route">{{m.name}}</v-btn>
    </v-app-bar>
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
    ...mapActions(['getProduts','getClients']),

  },
  beforeMount(){
    this.getClients();
    this.getProduts();
  }
  ,
  

  data: () => ({
   menu:[{
     route:"/",
     name:"Home"
   },
   {
     route:"/Client",
     name:"Client"
   }
   ]
     
   
  }),
};
</script>
