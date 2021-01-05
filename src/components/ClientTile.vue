<template>
    <v-card height="12vh" class="mt-1" elevation="1">

        <v-row align-content="center" dense>
            <v-col md="4" class="d-flex align-center justify-center">
                <v-avatar color="grey" size="64">
                    <!-- <v-img :src="client.avatar"></v-img> -->
                    <v-icon>user</v-icon>
                </v-avatar>
            </v-col>
            <v-col md="8">
                <h3>{{client.name}}</h3>
                <h4>{{client.phone}}</h4>
            </v-col>
            
        </v-row>
        
    </v-card>
</template>
<script>
export default {
    props: {
        client:Object
    }
}
</script>