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
            <v-list-item> Productos </v-list-item>
            <v-list-item> Compras </v-list-item>
            <v-list-item> Ventas </v-list-item>
            <v-list-item> Clientes </v-list-item>
            <v-list-item> Proovedores </v-list-item>
            <v-list-item> Configuracion </v-list-item>
              
          </v-toolbar-items>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
  </div>
</template>