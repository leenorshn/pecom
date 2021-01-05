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
        class="white--text px-12 ma-2 d-flex  align-center" 
        v-for="(m,i) in menu" :key="i" 
        router :to="m.route"
        :class="getCurrentPage===m.route?'black':'white'"
        >
        <v-row>
          <v-col>
            <v-icon :color="getCurrentPage===m.route?'white':'grey'">{{m.icon}}</v-icon>
          </v-col>
          <v-col md="8">
            <h2 class="subtitle-2" :class="getCurrentPage===m.route?'white--text':'black--text'">{{m.label}}</h2> 
          </v-col>
        </v-row>
        
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
  computed:{
    getCurrentPage(){
    return  this.$route.path;
    }
  },
  data: () => ({
   menu:[{
     route:"/",
     label:"Admin",
     icon:"timeline"
   },
   {
     route:"/Client",
     label:"Client",
     icon:"people"
   }
   ]
     
   
  }),
};
</script>
