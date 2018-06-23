<template lang="html">
  <div class="mems container fluid">
  <div style="margin-top:10vh">
  <h1 class="headingF display-2">Our Team</h1></div>
  <div style="text-align:left;margin:10px;">
    <ul v-for="Eachyear in Allyears">
      <li><strong>{{Eachyear.name}}</strong></li>
      <ol>
        <li v-for="member in Eachyear.members">{{member}}</li>
      </ol>

    </ul>

  </div>

</div>
</template>

<script>
import Members from '@/services/members.js'
export default {
  data(){
    return{
      Allyears:[{name:'Final year',members:['ambani','messi','Armstrong','apj abdul kalam']},
                { name:'Third Year',members:['ambani','messi','Armstrong','apj abdul kalam']},
               {name:'Second Year', members:[]} ]
    }
  },
  methods:{
    categorise(member){

    }
  },
  async mounted() {
    try{ const memberss = (await Members.getMembers()).data  ;
      console.log(memberss);
         memberss.forEach((mem)=>
         {
           if(mem.year_name==='3rd')
           this.Allyears[1].members.push(mem.first_name+''+mem.last_name);
           else if(mem.year_name==='2nd')
           this.Allyears[2].members.push(mem.first_name+''+mem.last_name);
           else (mem.year_name==='4th')
           this.Allyears[0].members.push(mem.first_name+''+mem.last_name);
         })
       }
    catch(e){
    console.log(e);
  }
   },


}
</script>

<style lang="css">
.mems{
  min-height: 100vh;
  background-color: rgba(11, 49, 243,0.2);
}

</style>
