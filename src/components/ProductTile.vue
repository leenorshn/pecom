<template>
    <v-card height="16vh">
        <v-row dense>
            <v-col md="4">
                <v-img class="grey" height="15vh" width="180" :src="product.image"></v-img>
            </v-col>
            <v-col md="6">
                <h3 class="subtitle-2">{{product.name}}</h3>
                <h3 class="title">{{product.price}} $</h3>
                <h3 class="caption text-decoration-line-through red--tex">{{product.oldPrice}} $</h3>
                
            </v-col>
            <v-col md="2" class="d-flex align-center justify-center">
                <v-btn icon @click="deleteProduct(product)"><v-icon>delete</v-icon></v-btn>
            </v-col>
        </v-row>

    </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
    props:{
        product:Object,
    },
    methods:{
        ...mapActions(["deleteProduct"])
    }
}
</script>