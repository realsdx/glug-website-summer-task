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
      Allyears:[{name:'Final year',
                members:['ambani','messi','Armstrong','apj abdul kalam']},
                { name:'Third Year',
                    members:['ambani','messi','Armstrong','apj abdul kalam']
                }]
    }
  },
  async mounted() {
    /*try{ const data = (await Members.getMembers()).data  ;
    this.Allyears = data.Members;}
    catch(e){
    this.$router.push({name:'errorPage'});
  }*/
   },


}
</script>

<style lang="css">
.mems{
  min-height: 100vh;
  background-color: rgba(11, 49, 243,0.2);
}

</style>
