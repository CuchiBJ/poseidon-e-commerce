<template>
  <v-container :fluid="true" class="fill-height py-3">
    <div class="d-inline-flex">
      <v-card class="ml-5">
        <v-img
          class=""
          lazy-src="https://picsum.photos/id/11/10/6"
          height="100%"
          width="100%"
          src="https://picsum.photos/id/11/500/300"
        >
        </v-img>
      </v-card>

      <div class="d-flex-row">
        <div class="d-flex">
          <h1 class="display-1 ml-5">{{ product.name }}</h1>
          <h1 class="price display-1 ml-2">
            $ {{ product.variants[1].price }}
          </h1>
        </div>

        <div class="d-flex flex-row">
          <v-card
            class="mx-auto ml-5 mt-3"
            max-width="100%"
            min-width="80%"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-card class="p-1">
                  <div class="overline">Descripcion</div>
                  <v-list-item-subtitle>
                    <h3>{{ product.description }}</h3>
                  </v-list-item-subtitle>
                  <h5 class="overline mt-3">Talles</h5>
                  <div class="list-group font-weight-light d-flex">
                    <v-list
                      class="list-group-item ml-2"
                      v-for="size in product.sizes"
                      :key="size"
                    >
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        value=""
                        aria-label="..."
                      />
                      {{ size }}
                    </v-list>
                  </div>
                  <h5 class="overline mt-3">Colores</h5>
                  <div class="list-group font-weight-light d-flex">
                    <v-list
                      class="list-group-item ml-1"
                      v-for="color in product.colors"
                      :key="color"
                    >
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        value=""
                        aria-label="..."
                      />
                      {{ color }}
                    </v-list>
                  </div>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            class="mx-auto ml-5 mt-3"
            max-width="100%"
            min-width="80%"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-card class="p-3">
                  <div class="overline mb-4">Formas de pago</div>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </div>
    </div>
    <div>
      <v-card class="mx-5 my-5" width="98%" height="100%">
        <h3 class="display-3 p-2">Descripcion</h3>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
          scelerisque massa. Vestibulum quis ultrices elit, eu pharetra nisi.
          Fusce vehicula odio non velit sodales dapibus. Duis tincidunt massa
          quis nisl tincidunt, in imperdiet dui vulputate. Ut sed tellus non
          justo porta maximus. Nullam non dictum lorem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut
          ut dignissim ex, eget iaculis ante. Morbi fermentum metus tellus.
          Quisque ullamcorper dictum dictum. Quisque sem nisl, rhoncus at tellus
          a, ultricies elementum erat. Nam ac tempor odio, at malesuada mauris.
          Phasellus mattis vel lorem nec viverra. Curabitur semper volutpat
          tellus in venenatis. Nunc cursus, enim quis rutrum lacinia, turpis ex
          euismod neque, posuere faucibus sapien ex ut arcu. Nullam dui tellus,
          gravida in risus a, bibendum porta orci.
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "producto",
  data() {
    return {
      product: { name: "cargando nombre" },
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
    console.log(this.product);
    this.product = await this.$store.getters.getProduct(
      this.$store,
      this.$route.params.id
    );
    console.log(this.product);
  },
};
</script>

<style>
.price {
  color: red;
}
</style>