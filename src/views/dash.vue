<template>
  <v-main>
    <v-container class="fill-height" fluid >
      <v-container class="d-flex flex-column align-center justify-center fill-height" v-if="loadingp">
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
     
    </v-container> 
    <v-footer
          dark
          padless
        >
          <v-card
            class="flex"
            flat
            tile
          >
            <v-card-title class="teal">
              <strong class="subheading">Get connected with us on social networks!</strong>

              <v-spacer></v-spacer>

              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text class="py-2 white--text text-center">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
          </v-card>
        </v-footer>
  </v-main>
</template>

<script>
import AdminPanel from '@/views/AdminDash.vue';
import ClientPanel from '@/views/ClientDash.vue';

export default {
  name: "Dash",
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      user: null,
      loadingp: true,
    }
  },
  components: {
    AdminPanel,
    ClientPanel
  },
  computed:{
    isAdmin(){ 
      console.log(this.user)
      return this.user.rol == "admin";
    }
  },
  async created(){
    this.loadingp = true
    this.$store.commit('activateLoading')
    this.user = await this.$store.getters.user(this.$store)
    if (this.user == null) {
      console.log("problemss")
    } else {
      this.$store.commit('deactivateLoading')
      this.loadingp= false
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>