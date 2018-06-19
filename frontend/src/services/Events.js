import Api from './Api'

export default {

   getEvents(){
     return Api().get('Events')
   },

}
