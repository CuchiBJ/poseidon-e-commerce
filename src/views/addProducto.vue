<template>
  <v-container-fluid class="fill-height py-3">
    <div class="d-flex flex-column justify-center align-center">
      <v-card class="p-5 ml-10 my-5" width="70%">
        <v-form class="mx-5 my-5" ref="form" v-model="valid" lazy-validation>
          <h1 class="display-1 my-5">Agregar producto</h1>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nombre del producto"
            required
          ></v-text-field>

          <v-text-field
            v-model="description"
            :rules="nameRules"
            label="Descripción"
            required
          ></v-text-field>
          <div class="d-flex flex-row">
            <div class="list-group font-weight-light d-flex">
              <v-card class="mt-3 mb-8 mr-5">
                <h3 class="font-weight-light mx-2 my-2">Colores</h3>
                <v-text-field
                  class="mx-3"
                  counter="15"
                  v-model="color1"
                  label="Color 1"
                >
                </v-text-field>
                <v-text-field
                  class="mx-3"
                  counter="15"
                  v-model="color2"
                  label="Color 2"
                >
                </v-text-field>
                <v-text-field
                  class="mx-3"
                  counter="15"
                  v-model="color3"
                  label="Color 3"
                >
                </v-text-field>
                <v-text-field
                  class="mx-3"
                  counter="15"
                  v-model="color4"
                  label="Color 4"
                >
                </v-text-field>
              </v-card>
            </div>

            <div class="list-group font-weight-light d-flex">
              <v-card class="mt-3 mb-8">
                <h3 class="font-weight-light mx-2 my-2">Talles</h3>

                <v-text-field
                  class="mx-3"
                  counter="10"
                  v-model="talle1"
                  label="Talle 1"
                >
                </v-text-field>
                <v-text-field
                  class="mx-3"
                  counter="10"
                  v-model="talle2"
                  label="Talle 2"
                >
                </v-text-field>
                <v-text-field
                  class="mx-3"
                  counter="10"
                  v-model="talle3"
                  label="Talle 3"
                >
                </v-text-field>
                <v-text-field
                  class="mx-3"
                  counter="10"
                  v-model="talle4"
                  label="Talle 4"
                >
                </v-text-field>
              </v-card>
            </div>
          </div>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </v-container-fluid>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
</style>