<template>
    <v-container>
        <v-row>
            <v-col cols="">

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
 name: "productos",
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
    
}
</script>

<style scoped>

</style>