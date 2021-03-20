<template>
  <v-container :fluid="true" class="fill-height py-3">
      <v-card class="p-5 ml-10 my-5" width="100%">
        <v-form class="mx-5 my-5" ref="form" v-model="valid" lazy-validation>
          <h1 class="display-1 my-5">Agregar producto</h1>
          <v-text-field
            v-model="product.name"
            label="Nombre del producto"
            width="30%"
            required
          ></v-text-field>

          <v-text-field
            v-model="product.description"
            label="Descripción"
            width="30%"
            required
          ></v-text-field>

          <v-text-field
            v-model="product.brand"
            label="Marca"
            width="30%"
            required
          ></v-text-field>

          <h5 class="overline mt-3">Colores</h5>
                  <div class="list-group font-weight-light d-flex">
                    <v-list
                      class="list-group-item ml-1"
                      v-for="color in colors"
                      :key="color.nombre"
                    >
                      <v-checkbox
                        :id="color.nombre"
                        class="form-check-input me-1"
                        :label="color.nombre"
                        type="checkbox"
                        :color=color.name
                        aria-label="..."
                        @click="addColor(color)"
                      />
                    </v-list>
                  </div>

          <div class="d-flex flex-row" v-if="product">

            <div class="list-group font-weight-light d-flex">
              <v-card class="mt-3 mb-8">
                <h3 class="font-weight-light mx-2 my-2">Talles</h3>
                <v-text-field
                  v-for="size in product.sizes"
                  v-bind:key="size.id"
                  class="mx-3"
                  v-model="product.sizes[product.sizes.indexOf(size)].size"
                  :label="Talle"
                >
                </v-text-field>
              </v-card>
            </div>

            <div class="list-group font-weight-light d-flex">
              <v-card class="mt-3 mb-8 mr-5">
                <h3 class="font-weight-light mx-2 my-2">Precios</h3>
                <v-text-field
                  v-for="price in prices"
                  v-bind:key="price.id"
                  class="mx-3"
                  v-model="prices[prices.indexOf(price)].price"
                  :label="precio"
                >
                </v-text-field>
              </v-card>
            </div>

            <div class="list-group font-weight-light d-flex">
              <v-card class="mt-3 mb-8 mr-5">
                <h3 class="font-weight-light mx-2 my-2">Precio de venta</h3>
                <v-text-field
                  v-for="price in salePrices"
                  v-bind:key="price.id"
                  class="mx-3"
                  v-model="salePrices[salePrices.indexOf(price)].price"
                  :label="precio"
                >
                </v-text-field>
              </v-card>
            </div>
          </div>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="addSize" > Agregar talle </v-btn>

          <v-btn color="primary" class="mr-4" @click="addProduct"> Cargar </v-btn>

        </v-form>
      </v-card>
    
  </v-container>
</template>

<script>
import {Product} from '@/model/product.js';
export default {
  
  data: () => ({
    product: new Product("id", "description", "brand", "name", "supplier", [{id:0, size:" "}], [], []),
    precio: "Precio",
    Talle: "Talle",
    valid: true,
    colors: [{nombre: "verde", name:"green"}, {nombre: "azul", name:"blue"}, {nombre: "rojo", name:"red"}, {nombre: "negro", name:"black"}],
    prices:[{id:0, price:" "}],
    salePrices:[{id:0, price:" "}],
    cant:1
  }),
  methods: {
    addSize(){
      this.product.sizes.push({id: this.cant, size:""})
      this.prices.push({id: this.cant, price:0})
      this.salePrices.push({id: this.cant, price:0})
      this.cant++;
    },

    addColor(color){
      if (this.product.haveColor(color)){
        this.product.deleteColor(color)
      } else {
        this.product.addColor(color)
      }
    },

    addProduct(){
      this.$store.commit('loadProduct', this.product)
      this.$router.push({ name: "productos" });
    }

  }
};
</script>

<style>
</style>