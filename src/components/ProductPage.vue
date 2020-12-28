<template>
    <v-container fluid>
         <v-card height="3vh" flat></v-card>
        <v-row>
            <v-col md="4" class="px-4 py-8">
                <picture-input
                class="mb-4"
                ref="pictureInput"
                @change="onChangeCarte"
                width="160"
                height="160"
                margin="16"
                accept="image/jpeg,image/png"
                size="10"
                buttonClass="btn"
                :customStrings="{
                  upload: '<h1>file uploaded</h1>',
                  drag: 'Choisir une image \nou\n\n Glisser deposer',
                }"
              >
              </picture-input>
              <v-text-field dense outlined label="Nom project"></v-text-field>
              <v-row dense>
                  <v-col>
                      <v-text-field dense outlined label="prix " type="number"></v-text-field>
                  </v-col>
                  <v-col>
                      <v-text-field dense outlined label="prix promotion" type="number"></v-text-field>
                  </v-col>
              </v-row>
              <v-text-field dense outlined label="detail"></v-text-field>
             <v-row dense>
                  <v-col>
                      <v-btn outlined color="orange" class="px-12">Annuler</v-btn>
                  </v-col>
                  <v-col>
                      <v-btn dense  color="teal" class="px-12 white--text">Enregistre</v-btn>
                  </v-col>
              </v-row>
            </v-col>
            <v-col md="8">
                <v-row>
                    <v-col md="4" v-for="(n,i) in listProd" :key="i">
                        <ProductTile :product="n" />
                    </v-col>
                </v-row>
                
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ProductTile from "./ProductTile";
import PictureInput from 'vue-picture-input'
export default {
    components:{
        ProductTile,
        PictureInput
    },
    props:{
        listProd:Array
    }
}
</script>