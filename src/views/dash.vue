<template>
  <v-main>
    <v-container class="fill-height" fluid >
      <v-container class="d-flex flex-column align-center justify-center fill-height" v-if="loading">
        <v-progress-circular
          indeterminate
          color="blue accent-4"
        ></v-progress-circular>
        <h3 class="text-white">CARGANDO...</h3>
      </v-container>
      <v-container v-else class="d-flex fill-height">
        <AdminPanel  v-if=isAdmin />
        <ClientPanel v-else />
      </v-container>
      <v-footer app dark class="tenloFondo2">
        <span class="black--text">&copy;Poseidon E-commerce</span>
      </v-footer>
    </v-container>
  </v-main>
</template>

<script>
import AdminPanel from '@/views/AdminDash.vue';
import ClientPanel from '@/views/ClientDash.vue';

export default {
  name: "Dash",
  data() {
    return {
      user: null,
      loading: null,
      sucursal: null,
    }
  },
  components: {
    AdminPanel,
    ClientPanel
  },
  computed:{
    isAdmin(){    
      return this.user.rol == "admin";
    }
  },
  async created(){
    this.loading = true
    this.$store.commit('activateLoading')
    
    this.user = await this.$store.getters.user(this.$store)

    
    this.$store.commit('deactivateLoading')
    this.loading= false
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>