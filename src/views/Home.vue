<template>
  <v-card flat>
    <v-tabs right>
      <v-tab>Produits</v-tab>
      <v-tab>Parametres</v-tab>
     <v-tab-item>
        <ProductPage :listProd="products"/>  
     </v-tab-item>
     <v-tab-item>
       <v-card class="ma-4 pr-4" >
         <v-card-title>
           <v-subheader>
             Nouveau produit
           </v-subheader>
         </v-card-title>
         <v-row>
           <v-col md="4" class="d-flex align-center justify-center">
        <input
          type="file"
          ref="input1"
          style="display: none"
          @change="previewImage"
          accept="image/*"
        />
        <img
          v-if="imageData == null"
          @click="click1"
          class="preview"
          height="180"
          width="200"
          src="../assets/addImage.webp"
        />
        <img
          v-if="imageData != null"
          @click="click1"
          class="preview"
          height="180"
          width="200"
          :src="img1"
        />
           </v-col>
           <v-col md="8">
             <v-text-field
          v-model="product.name"
          dense
          outlined
          label="Nom project"
        ></v-text-field>
        <v-row dense>
          <v-col md="9">
            <v-select
              v-model="product.category"
              dense
              outlined
              :items="catego"
              label="categorie "
              type="number"
            ></v-select>
          </v-col>
          <v-col md="2" class="mr-4 d-flex justify-center align-center">
            <NewCategory/>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-text-field
            v-model="product.oldPrice"
              
              dense
              outlined
              label="prix "
              type="number"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="product.price"
              dense
              outlined
              label="prix promotion"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-textarea
          v-model="product.detail"
          dense
          outlined
          label="detail"
        ></v-textarea>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="black" class="px-12" @click="annuler()"
              >Annuler</v-btn
            >
            <v-btn
              dense
              color="teal"
              class="px-12 white--text"
              @click="addProd()"
              >Enregistre</v-btn
            >
         
           </v-card-actions>
           </v-col>
         </v-row>
        

        
      </v-card>
     </v-tab-item>
    </v-tabs>
         
  </v-card>
</template>

<script>
import {  mapGetters, mapState } from "vuex";
import ProductPage from "./../components/ProductPage";
import NewCategory from "./NewCategory";
import firebase from "firebase/app";
import "firebase/firebase-storage";

export default {
  name: 'Home',
  components: {
    ProductPage,
    NewCategory,
  },
  data(){
    return {
      dialog:false,
      caption: "",
      img1: "",
      imageData: null,
      product: {
        name: "",
        price: "",
        oldPrice: "",
        detail: "",
        category:""
      },
    }
  },
  updated(){
    console.log("0000000000");
  },
  computed:{
    ...mapState(['products','clients','categories']),
    ...mapGetters(['getCategories']),
    catego(){
      var cat=[];
      this.getCategories.forEach(element => {
        cat.push(element.category);
      });
      return cat;
    }
  },
  methods:{
    
        click1() {
      this.$refs.input1.click();
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      this.img1 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            // console.log(this.img1)
          });
        }
      );
    },

    addProd() {
      this.addProduct({ ...this.product, image: this.img1, date: Date.now() });
      setTimeout(
          3000,()=>{
this.product = null;
          }
      )
      
    },
    annuler() {
      this.product = null;
      this.imageData = null;
    },
  }
}
</script>
