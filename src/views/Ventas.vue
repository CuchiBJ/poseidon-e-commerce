<template>
  <v-container :fluid="true" class="fill-height py-3">
    <v-row class="fill-height">
      <v-col cols="3">
        <h3>Menu izquierdo</h3>
      </v-col>
      <v-divider inset vertical> </v-divider>
      <v-col cols="7">
        <h1 class="display-1 mx-4 my-4">Ventas realizadas</h1>
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
              <!-- <router-link :to="{ name: 'venta', params: { id: sale.id } }"> -->
              <v-card
                :color="active ? undefined : 'white lighten-1'"
                class="ma-4"
                height="auto"
                width="auto"
                @click="toggle"
              >
                <v-card-title class="d-flex flex-column">
                  <div class="d-flex">
                    <p class="font-weight-bold">Venta Nro: {{ sale.id }}</p>
                    <p class="font-weight-light">- {{ sale.date }}</p>
                  </div>
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="150"
                    max-width="250"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                  <p class="font-weight-light my-3">{{ sale.client }}</p>
                  <div class="d-flex">
                    <p class="font-weight-bold">{{ sale.total }}</p>
                    <p class="font-weight-light">- {{ sale.typepay }}</p>
                  </div>
                  <p class="font-weight-light">{{ sale.pay }}</p>
                  <v-btn @click="setSale(sale)"><v-icon>mdi-chevron-double-down</v-icon> </v-btn>
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

              <!-- </router-link> -->
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <v-card class="my-4">
          <venta v-if="sale" :salep="sale" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import venta from "@/views/Venta.vue";
export default {
  components: { venta },
  name: "ventas",
  data() {
    return {
      sales: [],
      sale:null,
    };
  },
  async created() {
    console.log(this.cont);
    this.sales = await this.$store.getters.getSales(this.$store);
    console.log(this.sales);
    this.cont++;
  },
  methods: {
    setSale(sale){
      this.sale=sale;
    }
  }
};
</script>