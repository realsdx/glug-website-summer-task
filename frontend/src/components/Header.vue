<template lang="html">
  <v-flex  v-bind:class="{ navigater:isActive&&this.$route.path=='/' }" v-scroll="onScroll" >
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
     <v-btn small class="linked" flat dark @click="navigateTo({name:'DisplayEvents'})" >
      Members
      </v-btn>
      <v-btn small class="linked" flat dark @click="navigateTo({name:'DisplayEvents'})" >
       Activities
       </v-btn>
       <v-btn  small class="linked" flat dark @click="navigateTo({name:'DisplayEvents'})" >
        Blog
      </v-btn>
      <v-btn small class="linked" flat dark @click="navigateTo({name:'DisplayEvents'})" >
       Contact us
     </v-btn>
   </v-toolbar-items>
 </v-toolbar>
  </v-flex>
</template>

<script>
export default {
  name:'Pageheader',
  data(){
    return {
      isActive:true
    }
  },
  methods:{
      navigateTo(route){
      this.$router.push(route)
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

</style>
