<template lang="html">
  <div class="mems">
  <ParticlesJS/>
  <!-- <div id='particles.js'></div> -->
  <div class="particle-body">
    <div style="margin-top:10vh">
    <h1 class="headingF display-2">Our Team</h1>
    </div>
  
    <div >
      <div v-for="Eachyear in Allyears" v-if="Eachyear.members.length" class="eachyearcard">
        <v-layout justify-center><h2 class="headingF eachyear">{{Eachyear.name}}</h2></v-layout>
        <v-layout d-flex wrap >
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
        </v-layout>
      </div>
    </div>
  </div>
</div>
</template>

<script src='../assets/scripts/Members.js'>
</script>

<style lang="css" scoped>
@import '../assets/css/members.css';
#app #particles-js {
  position: absolute !important;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #b61924 !important;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
canvas {
  display: block;
}
</style>
