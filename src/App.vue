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
        page: null,
        bol: false
      }
    },
    components:{
      Nav
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
