import Api from './Api'

export default {

   getAbout(){
     return Api().get('about/')
   },
   getContacts(){
     return Api().get('contacts/',)
   }

}
