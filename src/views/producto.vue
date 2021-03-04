<template>
  <v-container-fluid class="fill-height py-3">
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
          <h1 class="display-1 ml-5">Prenda</h1>
          <h1 class="price display-1 ml-2">$</h1>
        </div>

        <v-card class="mx-auto ml-5 mt-3" max-width="100%" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Características</div>
              <v-list-item-subtitle>
                <ul class="font-weight-light">
                  <v-list>1. asñlkdañslda</v-list>
                  <v-list>2. kasdklas</v-list>
                </ul>
              </v-list-item-subtitle>
              <h5 class="overline mb-1">Talles</h5>
              <div class="list-group font-weight-light d-flex">
                <v-list class="list-group-item ml-2">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  S
                </v-list>
                <v-list class="list-group-item ml-2">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  M
                </v-list>
                <v-list class="list-group-item ml-2">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  L
                </v-list>
                <v-list class="list-group-item ml-2">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  XL
                </v-list>
                <v-list class="list-group-item ml-2">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  XXL
                </v-list>
              </div>
              <h5 class="overline mb-1">Colores</h5>
              <div class="list-group font-weight-light d-flex">
                <v-list class="list-group-item ml-1">
                  <v-checkbox
                    label="Rojo"
                    color="red"
                  ></v-checkbox>
                </v-list>
                <v-list class="list-group-item ml-1">
                  <v-checkbox
                    label="Azul"
                    color="blue"
                  ></v-checkbox>
                </v-list>
                <v-list class="list-group-item ml-1">
                  <v-checkbox
                    label="Amarillo"
                    color="yellow"
                  ></v-checkbox>
                </v-list>
                <v-list class="list-group-item ml-1">
                  <v-checkbox
                    label="Verde"
                    color="green"
                  ></v-checkbox>
                </v-list>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
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
  </v-container-fluid>
</template>

<script>
export default {
  name: "producto",
};
</script>

<style>
.price {
  color: red;
}
</style>