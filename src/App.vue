<template>
  <v-app dark>
    <v-progress-linear
      :active="$store.state.loading"
      :indeterminate="$store.state.loading"
      absolute
      top
      color="orange accent-4" 
    ></v-progress-linear>
    <Nav v-if="bol"></Nav>
    <v-container class="d-flex flex-column align-center justify-center fill-height" v-if="loading">
        <v-progress-circular
          indeterminate
          color="blue accent-4"
        ></v-progress-circular>
        <h3 class="text-white">CARGANDO...</h3>
      </v-container>
    <router-view v-else />
    <v-snackbar v-model="$store.state.snackBar" timeout="4000" top>
      {{ $store.state.snackText }}
    </v-snackbar>
  </v-app> 
</template>

<script>
  import Nav from '@/components/NavBar'

  export default {
    name: "App",
    data(){
      return {
        page: null,
        bol: false,
        loading: false
      }
    },
    components:{
      Nav
    },
    created(){
      this.loading = this.$store.state.loading
      console.log(this.loading)
    },
    updated(){
      this.page = this.$router.currentRoute.name;
      if (this.page == 'Login'){
        this.bol = false
      } else{
        this.bol = true
      }
    },
    computed:{
      isLoginPage(){
        return !(this.page == 'Login');
      }
    }
  }
</script>
