<template>
  <v-container-fluid class="fill-height py-3">
    <v-row class="fill-height">
      <v-col cols="3">
        <v-list-item-content>
          <v-row>
            <v-col
              cols="12"
              class="d-flex flex-column justify-center align-center"
            >
              <v-text-field
                @focus="searchClosed = false"
                @blur="searchClosed = true"
                class="search"
                :class="{ closed: searchClosed }"
                filled
                dense
                prepend-inner-icon="mdi-magnify"
                placeholder="Search"
              >
              </v-text-field>
              <v-btn elevation="2" large
                >Filtrar<v-icon>mdi-filter</v-icon></v-btn
              >
              <v-checkbox v-model="checkbox1" :label="`Oferta`"></v-checkbox>
              <v-checkbox v-model="checkbox2" :label="`Colores`"></v-checkbox>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-col>
      <v-divider inset vertical> </v-divider>
      <v-col cols="8">
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <h1 class="display-1 text-center mt-10">Las ofertas</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-sheet class="mx-auto" elevation="8" max-width="90%">
              <v-slide-group
                v-model="model"
                class="pa-4"
                active-class="success"
                show-arrows
              >
                <v-slide-item
                  v-for="product in products"
                  :key="product.id"
                  v-slot="{ active, toggle }"
                >
                  <router-link to="/producto">
                    <v-card
                      :color="active ? undefined : 'white lighten-1'"
                      class="ma-4"
                      height="300"
                      width="200"
                      @click="toggle"
                    >
                      <v-img
                        height="150"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ><v-btn class="ml-1" elevation="2" right x-small>
                          <v-icon>mdi-cart-arrow-down</v-icon>
                        </v-btn>
                      </v-img>

                      <v-card-title class="d-flex flex-column">
                        <p class="font-weight-light text-center">
                          {{ product.name }}
                        </p>
                        <p class="font-weight-light text-center">
                          $
                          
                        </p>
                      </v-card-title>
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <v-scale-transition>
                          <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                          ></v-icon>
                        </v-scale-transition>
                      </v-row>
                    </v-card>
                  </router-link>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <h1 class="display-1 text-center mt-10">Todo para el verano</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="">
            <v-sheet class="mx-auto" elevation="8" max-width="90%">
              <v-slide-group
                v-model="model"
                class="pa-4"
                active-class="success"
                show-arrows
              >
                <v-slide-item
                  v-for="product in products"
                  :key="product.id"
                  v-slot="{ active, toggle }"
                >
                  <v-card
                    :color="active ? undefined : 'white lighten-1'"
                    class="ma-4"
                    height="300"
                    width="200"
                    @click="toggle"
                  >
                    <v-img
                      height="150"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                      ><v-btn class="ml-1" elevation="2" right x-small>
                        <v-icon>mdi-cart-arrow-down</v-icon>
                      </v-btn>
                    </v-img>

                    <v-card-title class="d-flex flex-column">
                      <p class="font-weight-light text-center">
                        {{ product.name }}
                      </p>
                      <p class="font-weight-light text-center">
                        $
                        
                      </p>
                    </v-card-title>
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      products: [],
      model: null,
      searchClosed: true,
      user: null,
    };
  },
  components: {},
  computed: {
    isAdmin() {
      return this.user.rol == "admin";
    },
  },
  async created() {
    this.products = await this.$store.getters.getProducts(this.$store);
    console.log(this.productos);
  },
};
</script>

<style scoped>
.search {
  max-width: 60%;
}
</style>