<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
             v-bind="attrs"
            v-on="on"
            class="ml-6 mb-6" 
            ><v-icon>add</v-icon> ajouter</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Category</span>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row dense>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-text-field
                  label="Entrer une categorie"
                  required
                  outlined
                  v-model="category"
                ></v-text-field>
              </v-col>
              
            
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addCat()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";
export default {
    
    data(){
        return{
            category:"",
            dialog:false
        }
    },
    methods:{
        ...mapActions(['addCategory']),
        addCat(){
            this.addCategory(this.category);
            this.dialog=false;
        },
        close(){
          this.dialog=false;
        }
    }
}
</script>