<template>
  <v-app>
    <v-app-bar
    app
    flat
    color="black">
      <v-spacer></v-spacer>
     
    </v-app-bar>
    <v-navigation-drawer
      app
      permante
      color="grey lighten-4"
      >
      <v-card height="15vh" class="mb-16 grey lighten-4" flat>

      </v-card>
      <v-card
        height="10vh"
        class="white--text px-12 ma-2 d-flex justify-center align-center" 
        v-for="(m,i) in menu" :key="i" 
        router :to="m.route"
        >
        <h2 class="black--text subtitle-2">{{m.label}}</h2> 
      </v-card>
    </v-navigation-drawer>
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
    ...mapActions(['getProduts','getClients',"getCategory"]),

  },
  beforeMount(){
    this.getClients();
    this.getProduts();
    this.getCategory();
  }
  ,
  

  data: () => ({
   menu:[{
     route:"/",
     label:"Home"
   },
   {
     route:"/Client",
     label:"Client"
   }
   ]
     
   
  }),
};
</script>
