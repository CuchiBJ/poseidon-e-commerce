<template>
  <v-container> 
      <v-card flat class="ma-3 text-xs-center">
          <h1 class="display-1 ">ID del producto: {{salep.id}}</h1>
            <v-toolbar-title class="text--primary font-weight-medium ml-3"
              >Ventas</v-toolbar-title
            >
            <v-data-table
              :headers="headers"
              :items="salep.products"
              :search="search"
            ></v-data-table>
          </v-card>
  </v-container>
</template>

<script>
export default {
  name:"venta",
  props: {
      salep:{
          id:0,
          products:[]
      },
  },
  data() {
    return {
      sale:{
          id: 1,
          date: "23/01/2021",
          total: "$800",
          subtotal: "$800",

          products: [
              {id: 1, name: "Remera", quantity: 1, price: 800, subtotal: "$800", total: "$800"},
              {id: 1, name: "Jean", quantity: 2, price: 1500, total: "$1500"},
              
          ]
      },
      selected: "",
      headers: [
        {
          text: "Producto",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Cantidad", value: "quantity" },
        { text: "Precio ", value: "price" },
        { text: "Subtotal", value: "subtotal" },
        { text: "Total", value: "total" },
      ],
      clients: [],
    };
  },
  updated(){
      
      this.salep.products.forEach(prod => {
        prod.subtotal = prod.quantity * prod.price;
      });        
      console.log(this.salep)

  },
  computed:{
    havesale(){ 
       return this.salep != null;
    },
  },
};
</script>