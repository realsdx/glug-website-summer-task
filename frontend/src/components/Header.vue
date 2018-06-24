<template lang="html"><div>
  <v-flex  v-bind:class="{ navigater:this.$route.path=='/'&&isActive}" v-scroll="onScroll" >
    <v-toolbar color="blue-grey darken-4" dark fixed>
   <v-toolbar-title><span class="home" @click="navigateTo({name:'root'})"><img src="../assets/images/logo.png" alt="" class="logo rounded-circle img-fluid"/></span></v-toolbar-title>
   <v-spacer></v-spacer>
   <v-toolbar-items class="hidden-sm-and-down">
     <v-btn small class="linked" flat dark @click="navigateTo({name:'root'})" >
      Home
     </v-btn>
     <v-btn small class="linked" flat dark @click="navigateTo({name:'DisplayEvents'})" >
      Events
    </v-btn>
     <v-btn small class="linked" flat dark @click="navigateTo({name:'Members'})" >
      Members
      </v-btn>
      <v-btn small class="linked" flat dark  >
       Activities
       </v-btn>
       <v-btn  small class="linked" flat dark  >
        Blog
      </v-btn>
      <v-btn small class="linked" flat dark @click="navigateTo({name:'contact-us'})" >
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
<span @click="navigateTo({name:'root'})" class=" linked fa-lg"><i class="fas icons fa-home"></i></span><br>
<span @click="navigateTo({name:'DisplayEvents'})" class=" linked fa-lg"><i class="fas icons fa-dice"></i></span><br>
<span @click="navigateTo({name:'Members'})" class=" linked fa-lg"><i class="fas icons fa-users"></i></span><br>
<span  class=" linked fa-lg"><i class="fas icons fa-briefcase"></i></span><br>
<span class=" linked fa-lg"><i class="icons fab fa-blogger-b"></i></span><br>
<span @click="navigateTo({name:'contact-us'})" class=" linked fa-lg"><i class="fas icons fa-phone"></i></span><br>

</v-navigation-drawer>
</div>
</template>

<script src='../assets/scripts/Header'>

</script>

<style lang="css">
@import '../assets/css/Header.css';
</style>
