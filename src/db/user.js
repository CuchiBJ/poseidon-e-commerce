import { UsuarioCollection, auth } from '@/firebase.js';
import { User } from '../model/user.js'

export default {
  async getUser(){
    if (auth.currentUser) { 
      let user = await UsuarioCollection
        .doc(auth.currentUser.uid)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            let aux = doc.data();
            let user = new User(auth.currentUser.uid ,aux.nickname, auth.currentUser.email, aux.rol);
            console.log(user)
            return user;
          } else {
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
      return user
    } else {
      return {nombre: null}
    }
  },
  async getUsers() {
    let usersData = [];
    let users = await UsuarioCollection.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          usersData.push({
            docId: doc.id, // Se crea a mano el objeto para poder guardar tambien docId, para cuando se quiera editar/eliminar. Caso contrario solo guardar doc.data()
            nickname: doc.data().nickname,
            rol: doc.data().rol
          });
        });
        return usersData;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        return [];
      });
    return users;
  }
}