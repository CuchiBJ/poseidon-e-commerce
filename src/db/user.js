import { UsuarioCollection } from '@/firebase.js';
export default {
  async getUsuario() {
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