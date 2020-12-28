<template>
    <v-card height="16vh">
        <v-row dense>
            <v-col md="5">
                <v-img class="grey" height="15vh" width="180" :src="product.image"></v-img>
            </v-col>
            <v-col md="7">
                <h3 class="subtitle-2">{{product.productName}}</h3>
                <h3 class="title">{{product.prixPromo}} $</h3>
                <h3 class="caption text-decoration-line-through red--tex">{{product.prix}} $</h3>
                
            </v-col>
        </v-row>
<v-btn absolute right top icon><v-icon>more_vertical</v-icon></v-btn>
    </v-card>
</template>
<script>
export default {
    props:{
        product:Object,
    }
}
</script>