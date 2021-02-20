<template>
  <v-app dark>
    <v-progress-linear
      :active="$store.state.loading"
      :indeterminate="$store.state.loading"
      absolute
      top
      color="orange accent-4"
    ></v-progress-linear>
    <Nav v-if="isLoginPage"></Nav>
    <router-view />
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
        page: null
      }
    },
    components:{
      Nav
    },
    updated(){
      this.page = this.$router.currentRoute.name;
    },
    computed:{
      isLoginPage(){
        return !(this.page == 'Login');
      }
    }
  }
</script>
