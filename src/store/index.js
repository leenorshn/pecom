import Vue from 'vue'
import Vuex from 'vuex'
import {clientsCollection,productsCollection} from "./fireApi";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
    
    ],
    clients:[],
    currentClient:null
  },
  mutations: {
    ADD_PRODUCT(state,data){
      state.products.unshift(data);
    },
    SET_PRODUCTS(state,data){
      state.products=data;
    },
    DELETE_PRODUCT(state,data){
     var arrayProduct= state.products.filter(doc=>doc.id!==data.id);
      state.products=arrayProduct;
    },
    UPDATE_PRODUCT(state){
      state.products
    },
    ///clients
    SET_CLIENTS(state,data){
      state.clients=data;
    },
    SET_ONE_CLIENT(state,data){
      state.currentClient=data;
    }
  },
  actions: {
    addProduct({commit},product){
      productsCollection.add(product);
      commit("ADD_PRODUCT",product);
    },
    getProduts({commit}){

      productsCollection.onSnapshot(snap=>{
        let products=[];
        snap.docs.forEach(doc=>{
          let product=doc.data();
          product.id=doc.id;
          products.push(product);
        });
        commit("SET_PRODUCTS",products);
      })
    },
    deleteProduct({commit},product){
      commit("DELETE_PRODUCT",product);
      productsCollection.doc(product.id).delete();
    },
    updateProduct({commit},product){
      productsCollection.doc(product.id).update(product);
      commit("UPDATE_PRODUCT");
    },
    ///clients
    getClients({commit}){
      clientsCollection.onSnapshot(snap=>{
        let clients=[]
        snap.docs.forEach(doc=>{
          let client=doc.data();
          client.id=doc.id;
          clients.push(client);
        })
        commit("SET_CLIENTS",clients);
      })
    },
    getOneClient({commit},id){
      clientsCollection.doc(id).onSnapshot(snap=>{
        let client=snap.data();
        client.id=snap.id;
        commit("SET_ONE_CLIENT",client);
      });

    }

  },
  modules: {
  }
})
