import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCsy4DXyN2JiNWM4Kf3veGD9p1LoXGOsmw",
    authDomain: "totalvue-f6b99.firebaseapp.com",
    databaseURL: "https://totalvue-f6b99.firebaseio.com",
    projectId: "totalvue-f6b99",
    storageBucket: "totalvue-f6b99.appspot.com",
    messagingSenderId: "66667444162",
    appId: "1:66667444162:web:0aeb67f737a4cde797885b",
    measurementId: "G-0YFC4TH4QD"
}
firebase.default.initializeApp(firebaseConfig)

// utils
const db = firebase.default.firestore()
const auth = firebase.default.auth()
const storage= firebase.default.storage()

// collection references
const clientsCollection = db.collection('clients')
const productsCollection = db.collection('products')


// export utils/refs
export {
  db,
  auth,
  clientsCollection,
  productsCollection,
  storage
  
}