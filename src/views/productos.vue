<template>
  <v-container-fluid class="fill-height py-3">
    <v-row class="fill-height">
      <v-col cols="3">
        <v-list-item-content>
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
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
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-col>
      <v-divider
        inset
        vertical>
    </v-divider>
      <v-col cols="8">
        <v-row>
          
          <v-col cols="12" class="d-flex justify-center">
            <h1 class="display-1 text-center mt-10">Las ofertas</h1>
            </v-col>
        </v-row>
        <v-row>
          
          <v-col cols="12" class="">
            <v-card class="d-flex flex-row" color="gray mt-4">
              <v-card :loading="loading" class="mx-auto my-12" width="200" height="200">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="100"
                  width="200"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title>Cafe Badilico</v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="10"
                    ></v-rating>

                    <div class="grey--text ml-4">4.5 (413)</div>
                  </v-row>

                  <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

                </v-card-text>

                <v-divider class="mx-4"></v-divider>
              </v-card>
              <v-card :loading="loading" class="mx-auto my-12" width="200" height="200">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="100"
                  width="200"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title>Cafe Badilico</v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="10"
                    ></v-rating>

                    <div class="grey--text ml-4">4.5 (413)</div>
                  </v-row>

                  <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

                </v-card-text>

                <v-divider class="mx-4"></v-divider>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
export default {
  name: "productos",
  data() {
    return {
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
};
</script>

<style scoped>
    .search {
        max-width: 60%;
    }
</style>