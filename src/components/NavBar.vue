<template>
  <div>
    <v-toolbar
          dark
          prominent
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          

          <v-toolbar-title>Admin Menú</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-list-item> Panel </v-list-item>
            <v-list-item> <router-link to="/productos"> Productos </router-link></v-list-item>
            <v-list-item> Compras </v-list-item>
            <v-list-item> Ventas </v-list-item>
            <v-list-item> Clientes </v-list-item>
            <v-list-item> Proovedores </v-list-item>
            <v-list-item> Configuracion </v-list-item>
          </v-toolbar-items>

          <v-toolbar-items>
            <v-list-item> Home </v-list-item>
            <v-list-item><router-link to="/productos"> Productos </router-link></v-list-item>
            <v-list-item> Compras </v-list-item>
            <v-list-item> Carrito </v-list-item>
          </v-toolbar-items>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return {
      user: null,
    }
  },
  components: {
  },
  computed:{
    isAdmin(){    
      return this.user.rol == "admin";
    }
  },
  async created(){
    this.user = await this.$store.getters.user(this.$store)

  },
  methods: {
    
  }
};
</script>