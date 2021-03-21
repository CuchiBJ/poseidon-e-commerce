<template>
  <v-container :fluid="true" class="fill-height py-3">
    <v-row class="fill-height">
      <v-col cols="3">
        <h3>Menu izquierdo</h3>
      </v-col>
      <v-divider inset vertical> </v-divider>
      <v-col cols="7">
        <v-sheet class="mx-auto" elevation="8" max-width="90%">
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="sale in sales"
              :key="sale.id"
              v-slot="{ active, toggle }"
            >
              <router-link :to="{ name: 'venta', params: { id: sale.id } }">
                <v-card
                  :color="active ? undefined : 'white lighten-1'"
                  class="ma-4"
                  height="200"
                  width="200"
                  @click="toggle"
                >
                  <v-card-title class="d-flex flex-column">
                    <p class="font-weight-bold">Id de la venta:</p>
                    <p class="font-weight-light text-center">
                      {{ sale.id }}
                    </p>
                     <p class="font-weight-bold">Fecha de la venta:</p>
                    <p class="font-weight-light text-center">
                      {{ sale.date }}
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
              </router-link>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ventas",
  data() {
    return {
      sales: [],
    };
  },
  async created() {
    console.log(this.cont);
    this.sales = await this.$store.getters.getSales(this.$store);
    console.log(this.sales);
    this.cont++;
  },
};
</script>