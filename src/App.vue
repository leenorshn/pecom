<template>
  <v-app>
    <v-app-bar
    app
    flat
    color="black">
    <v-subheader class="white--text">{{currentTitleO}}</v-subheader>
      <v-spacer></v-spacer>
     
    </v-app-bar>
    <v-navigation-drawer
      app
      permante
      color="white"
      >
      <v-card height="24vh" class="mb-16 " flat>
        <v-img src="./assets/imglogo.jpeg"></v-img>
      </v-card>
      <v-card
        height="10vh"
        class="white--text px-12 ma-2 d-flex  align-center" 
        v-for="(m,i) in menu" :key="i" 
        router :to="m.route"
        :class="getCurrentPage===m.route?'black':' grey lighten-4'"
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
    },
    currentTitleO(){
     var currentRoute= this.menu.find(el=>{
        return el.route===this.$route.path;
      })
      return currentRoute.label;
    }
  },
  data: () => ({
    currentTitle:"",
   menu:[{
     route:"/",
     label:"Admin",
     icon:"timeline"
   },
   {
     route:"/clients",
     label:"Client",
     icon:"people"
   }
   ]
     
   
  }),
};
</script>
