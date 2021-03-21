<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="6">
          <v-card flat class="ma-3 text-xs-center">
            <v-toolbar-title class="text--primary font-weight-medium ml-3"
              >Clientes</v-toolbar-title
            >
            <v-data-table
              :headers="headers"
              :items="clients"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card class="mt-4" width="800">
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
              >
                <v-sparkline
                  :labels="labels"
                  :value="value"
                  color="white"
                  line-width="2"
                  padding="16"
                >
                </v-sparkline>
              </v-sheet>

              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">
                  Clientes con más ventas
                </div>
                <div class="subheading font-weight-light grey--text">
                  Ultima semana
                </div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small> mdi-clock </v-icon>
                <span class="caption grey--text font-weight-light"
                  >last registration 26 minutes ago</span
                >
              </v-card-text>
            </v-card>
            <select v-model="selected">
              <option disabled value="">Seleccione un elemento</option>
              <option>Diario</option>
              <option>Semanal</option>
              <option>Mensual</option>
            </select>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name:"Clientes",
  data() {
    return {
      selected: "",
      labels: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ],
      value: [200, 675, 410, 390, 310, 460, 250],
      search: "",
      headers: [
        {
          text: "Nombre",
          align: "start",
          filterable: false,
          value: "firstName",
        },
        { text: "Apellido", value: "lastName" },
        { text: "DNI ", value: "dni" },
        { text: "Email", value: "email" },
        { text: "Dirección", value: "addres" },
      ],
      clients: [],
    };
  },
  async created() {
    console.log(this.cont);
    this.clients = await this.$store.getters.getClients(this.$store);
    console.log(this.clients);
    this.cont++;
  },
};
</script>