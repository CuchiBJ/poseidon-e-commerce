 <template>
   <div class="login-dark fill-height"> 
     <v-container class="fill-height">
       <v-row align="center" justify="center">
         <v-col cols="12" sm="5" md="4">
           <v-card class="elevation-12" dark>
             <v-toolbar flat>
               <v-toolbar-title>Iniciar Sesion</v-toolbar-title>
               <v-spacer />
             </v-toolbar>
             <v-card-text align="center" justify="center">
               <router-link to="/">
                 <v-img class="mb-2"  max-height="300" max-width="200" ></v-img>
               </router-link>
               <v-form @submit.prevent="login()" v-model="valid">
                 <v-text-field label="E-mail" name="login" type="email" :rules="emailRules" v-model="email" />
                 <v-text-field label="Contraseña" name="password" type="password" :rules="passwordRules" v-model="password" />
                 <div class="d-flex flex-row-reverse">
                   <v-btn class="tenloFondo" type="submit">Login</v-btn>
                 </div>
               </v-form>
               <v-divider></v-divider>
               <router-link to="/register"><span>Tengo una invitacion</span></router-link>
             </v-card-text>
           </v-card>
         </v-col>
       </v-row>
     </v-container>
   </div>
 </template>
 
 <script>

 import { auth } from "@/firebase.js";
 export default {
   name: "Login",
   data() {
     return {
       email: "",
       password: "",
        emailRules: [
         v => !!v || "E-mail es requerido",
         v => /.+@.+\..+/.test(v) || "E-mail debe ser valido"
       ],
       passwordRules: [
         v => !!v || "contraseña es requerida",
         v => (v && v.length >= 4) || 'La contraseña debe tener al menos 8 caracteres'],
       valid: false
     };
   },
   methods: {
     async login() {
       this.$store.commit('activateLoading')
       auth.signOut();
       await auth
         .signInWithEmailAndPassword(this.email, this.password)
         .catch(function (error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           // [START_EXCLUDE]
           if (errorCode === "auth/wrong-password") {
             alert("Wrong password.");
           } else {
             alert(errorMessage);
           }
           console.log(error);
           return;
         });
        let user = this.$store.getters.user(this.$store)
        console.log(user);
        this.$router.push({ name: "dash" });
        this.$store.commit('deactivateLoading')
        this.$store.commit('activeSnack', 'Sesion iniciada')
     },
   },
 };
 </script>
 
 <style scoped>
 .tenloFondo {
   background-color: #ff8d21 !important;
 }
 .login-dark {
   background: #475d62 /* url(../assets/star-sky.jpg)*/;
   background-size: cover;
 }
 </style>