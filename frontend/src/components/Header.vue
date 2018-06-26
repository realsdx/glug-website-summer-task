<template lang="html"><div>
  <v-flex  v-bind:class="{ navigater:this.$route.path=='/'&&isActive}" v-scroll="onScroll" >
    <v-toolbar style="background-color:#12202E" dark fixed>
   <v-toolbar-title><v-avatar class="logo" @click="navigateTo({name:'root'})"><img src="../assets/images/logo.png" alt=""/></v-avatar></v-toolbar-title>
   <v-spacer></v-spacer>
   <v-toolbar-items class="hidden-sm-and-down">
     <v-btn medium class="linked" flat  @click="navigateTo({name:'root'})" >
      Home
     </v-btn>
     <v-btn medium class="linked" flat  @click="navigateTo({name:'DisplayEvents'})" >
      Events
    </v-btn>
     <v-btn medium class="linked" flat  @click="navigateTo({name:'Members'})" >
      Members
      </v-btn>
      <v-btn medium class="linked" flat  >
       Activities
       </v-btn>
       <v-btn  medium class="linked" flat   >
        Blog
      </v-btn>
      <v-btn medium class="linked" flat  @click="navigateTo({name:'contact-us'})" >
       Contact us
     </v-btn>
   </v-toolbar-items>
    <span dark color="pink" @click.stop="drawer = !drawer" class="hidden-sm-and-up"><i class="fas fa-bars fa-lg"></i></span>
    </v-toolbar>

</v-flex>
<v-navigation-drawer
v-model="drawer"
temporary
fixed
style="height:100vh;background-color:rgba(0,0,0,0);margin-top:60px;width:64px"
right
>
<v-layout d-block align-content-center justify-center fill-height>
<v-flex><span @click="navigateTo({name:'root'})" class=" linked fa-2x"><i class="fas icons fa-home"></i></span></v-flex><br>
<v-flex><span @click="navigateTo({name:'DisplayEvents'})" class=" linked fa-2x"><i class="fas icons fa-dice"></i></span></v-flex><br>
<v-flex><span @click="navigateTo({name:'Members'})" class=" linked fa-2x"><i class="fas icons fa-users"></i></span></v-flex><br>
<v-flex><span  class=" linked fa-2x"><i class="fas icons fa-briefcase"></i></span></v-flex><br>
<v-flex><span class=" linked fa-2x"><i class="icons fab fa-blogger-b"></i></span></v-flex><br>
<v-flex><span @click="navigateTo({name:'contact-us'})" class=" linked fa-2x"><i class="fas icons fa-phone"></i></span></v-flex><br>
</v-layout>
</v-navigation-drawer>
</div>
</template>

<script src='../assets/scripts/Header'>

</script>

<style lang="css">
@import '../assets/css/Header.css';
</style>
