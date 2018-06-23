<template lang="html">
<div class="events container fluid">
<div class="project-hover" style="margin-top:10vh">
<h1 class="headingF display-2">Events</h1></div>
<hr>
<hr>
<div class="cards d-flex flex-wrap">
  <div class="Eachcard" v-for="data in events">

      <img :src="data.event_image" class="cardImage"/>
      <h3 >{{data.title}}</h3>
      <div id="ribbon" ><i class="far fa-calendar-alt fa-lg" ></i><span >{{new Date(data.event_timing).toLocaleDateString()}}</span></div>
      <div id="ribbon"><i class="fas fa-clock fa-lg"></i><span>{{new Date(data.event_timing).toLocaleTimeString()}}</span></div>
       <p v-html="data.description"></p>
       <div v-show="data.venue">Venue:{{data.venue}}</div>
       <div v-show="data.url">Visit:{{data.url}}</div>
       <div ><social-sharing :url="data.url||$route.path"
                     :title="data.title"
                     :description="data.description"
                     :quote="data.title"
                     inline-template>
 <div class="d-flex justify-content-center align-items-center fa-lg icons">

     <network network="facebook">
         <i class="fab fa-facebook-f" style="color:#3B5998"></i>
     </network>
     <network network="twitter">
        <i class="fab fa-twitter" style="color:#1DA1F2"></i>
     </network>
     <network network="whatsapp">
        <i class="fab fa-whatsapp" style="color:green"></i>
     </network>
 </div>
</social-sharing>
       </div>
      </div>

</div>
</div>
</div>
</div>
</template>

<script>
import Events from '../services/Events'


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
</script>

<style lang="css">
.events{
  min-height: 100vh;
  background-color: rgba(11, 49, 243,0.2);
}

hr{
  height: 2px;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
	background-color: rgba(255, 255, 255, 1);
	border: 0;
  animation-name: inc;
  animation-duration: 2s;
}
@keyframes inc {
 0%{ width: 0;height:20px;}
 100%{width:100%;}
}
.Eachcard{
  height:auto;
  background-color:white;
  max-width: 400px;
  -webkit-box-shadow: -3px 16px 15px 2px #01181D;
  box-shadow: -3px 16px 15px 2px #01181D;
  border-radius:10px;
  margin: 20px;
}

.cardImage{
  width: 100%;
  height:280px;
  border-top-right-radius: inherit;
  border-top-left-radius:inherit;
}
#ribbon{
  background: #263238;
  position: relative;
  width:70%;
  margin-bottom: 2px;
  text-align: left;
  padding-left: 5px;
  color:white;
}

#ribbon:after{
  content:'';
  height:0;
    color:transparent;
  width: 0;
  top:0px;
  right:-20px;
  position: absolute;
  border-left:22px   solid transparent;
  border-right: 22px solid transparent;
  border-bottom: 21px solid  #263238;
}

#ribbon:before{
  content:'';
  color:transparent;
  height:0;
  width: 0;
  top:0px;
  right:-20px;
  position: absolute;
  border-style: solid;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
  border-top: 21px solid  #263238;
}
.icons{
  margin: 0px 10px 0px;
  padding: 10px;
}
.icons i:hover{
  transform: scale3d(1.5,1.5,1.5);
  cursor: pointer;
}

</style>
