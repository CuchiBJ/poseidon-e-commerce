<template>
  <v-app dark>
    <v-progress-linear
      :active="$store.state.loading"
      :indeterminate="$store.state.loading"
      absolute
      top
      color="orange accent-4"
    ></v-progress-linear>
    <router-view />
    <v-snackbar v-model="$store.state.snackBar" timeout="4000" top>
      {{ $store.state.snackText }}
    </v-snackbar>
  </v-app> 
</template>

<script>
  export default {
    name: "App"
  }
</script>
