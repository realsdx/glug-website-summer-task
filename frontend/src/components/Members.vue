<template lang="html">
  <div class="mems container fluid">
  <div style="margin-top:10vh">
  <h1 class="headingF display-2">Our Team</h1></div>
  <div >
    <div v-for="Eachyear in Allyears" v-if="Eachyear.members.length" >
      <h2 class="headingF">{{Eachyear.name}}</h2>
       <div class="d-flex flex-wrap" >
        <div v-for="member in Eachyear.members">
          <div class=" member" :style="{ backgroundImage: `url('${member.image}')` }">
                 <div class="member-hover">
                    <a :href="member.facebook_link"><i class="fab fa-lg fa-facebook-square"></i></a>
                    <a :href="member.email"><i class="fa-lg fas fa-envelope"></i> </a>
                    <a :href="member.git_link"><i class="fab fa-lg fa-github-square"></i></a>
                </div>
                <h5>{{member.first_name + ' '+member.last_name}}</h5>
               </div>
           </div>
      </div>
    </div>
  </div>

</div>
</template>

<script src='../assets/scripts/Members.js'>
</script>

<style lang="css">
@import '../assets/css/members.css'
</style>
