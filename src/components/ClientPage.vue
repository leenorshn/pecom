<template>
    <v-container>
        <v-card height="12vh" class="pa-4">
            <v-row dense class="d-flex align-center justify-center">
                <v-col md="3" class="d-flex align-center justify-center">
                <h3>Gestion de clients</h3>
                </v-col>
                <v-col md="6">
                    <v-text-field label="Rechercher" append-icon="search"></v-text-field>
                </v-col>
                <v-col md="3" class="d-flex align-end justify-center">
                <h3 class="teal--text">100 <span class="grey--text darken-2">clients</span></h3>
                </v-col>
            </v-row>
        </v-card>
        <v-row class="pt-6" v-if="clients.length==0">
            <v-col md="3" v-for="(n,i) in clients" :key="i">
                <ClientTile :client="n"/>
            </v-col>
            
        </v-row>
        <v-card v-else class="d-flex align-center justify-center">
            <h2 class="title teal--text">Aucun client disponible</h2>
        </v-card>
    </v-container>
</template>
<script>
import ClientTile from "./ClientTile";
import { mapState } from "vuex";
export default {
    components: {
        ClientTile
    },
    computed:{
        ...mapState(['clients'])
    }
}
</script>