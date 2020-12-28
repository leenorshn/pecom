<template>
    <v-container>
        <v-card height="12vh" class="pa-4">
            <v-row dense class="d-flex align-center justify-center">
                <v-col md="4" class="d-flex align-center justify-center">
                <h3>Gestion de clients</h3>
                </v-col>
                <v-col md="4"></v-col>
                <v-col md="4" class="d-flex align-end justify-center">
                <h3 class="teal--text">100 <span class="grey--text darken-2">clients</span></h3>
                </v-col>
            </v-row>
        </v-card>
        <v-row class="pt-6">
            <v-col md="4" v-for="(n,i) in 10" :key="i">
                
                <ClientTile />
    
            </v-col>
            
        </v-row>
    </v-container>
</template>
<script>
import ClientTile from "./ClientTile";
export default {
    components: {
        ClientTile
    }
}
</script>