<template >

    <v-container>
      <v-row class="d-flex justify-space-between">
         <v-col cols="6">
          <v-card class="mt-4" width="800">
            <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="12" max-width="calc(100% - 32px)">
              <v-sparkline :labels="labels" :value="value"  color="white" line-width="2" padding="16">
              
              </v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">
                  Compras
              </div>
              <div class="subheading font-weight-light grey--text">
                Ultima semana
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon
                class="mr-2"
                small
              >
                mdi-clock
              </v-icon>
              <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>
          </v-card>
          <select v-model="selected">
            <option disabled value="">Seleccione un elemento</option>
            <option>Diario</option>
            <option>Semanal</option>
            <option>Mensual</option>
          </select>
         </v-col>
         <v-col cols="6">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            :items-per-page="5"
          >
            <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title class="text--primary font-weight-medium">Productos</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                </v-toolbar>
            </template>
          </v-data-table>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            :items-per-page="5"
          >
            <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title class="text--primary font-weight-medium">Stock</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                </v-toolbar>
            </template>
          </v-data-table>
         </v-col>
      </v-row>
    </v-container> 
</template> 

<script>

export default {
  name: "AdminPanel",
  data() {
    return {
      selected: '',
      labels: [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
      ],
      search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
    }
  },
  components: {
  },
  async created(){
  },
  methods: {

  }
};
</script>

<style scoped>
    .fondoNegro{
        background-color: #222222;
    }
    .tenloFondo{
        background-color: #FF8D21!important;
    }
    .tenloFondo2{
        background-color: #ffae02!important;
    }
</style>