import Events from '@/services/Events'


export default {
  data(){
    return{
      visible:false,
      events:[]
    }
  },
  async mounted() {
    try{this.events = (await Events.getEvents()).data  ;
     }
    catch(e){
    this.$router.push({name:'errorPage'});
  }
   },





}
