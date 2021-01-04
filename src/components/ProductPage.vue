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

import firebase from "firebase/app";
import "firebase/firebase-storage";
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
  },
};
</script>