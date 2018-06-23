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

<script>
export default {
  name:'Pageheader',
  data(){
    return {
      drawer: null,
      isActive:true,
      items: [
       'All', 'Family', 'Friends', 'Coworkers'
     ]
    }
  },
  methods:{
      navigateTo(routes){
      if(this.$route.name===routes.name) location.reload();
       else  this.$router.push(routes)
    },
    onScroll (e) {
        var count= window.pageYOffset || document.documentElement.scrollTop
        if(count>300)
        { this.isActive = false;}
        else this.isActive = true;
      }
  }
}
</script>

<style lang="css">
.home{
  cursor: pointer;
}
.home:hover{
  color:grey;
}
.navigater{
  opacity: 0.8;
  top:0;
  right:0;
  position: relative;
}
.logo{
  height: 60px;
  border:1px solid black;
  overflow: visible;
  background-color: white;
  margin-top: 15px;
  width:60px;
}
.logo:hover{
  transform:rotateX(100);
}
.linked:hover{
  text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #00ffff , 0 0 70px #00ffff , 0 0 80px #00ffff , 0 0 100px #00ffff ;
}

.icons{
padding-top: 20px;
color:white;
}
</style>
