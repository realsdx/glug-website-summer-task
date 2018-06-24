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

<script src="../assets/scripts/DisplayEvents.js">

</script>

<style lang="css">
@import '../assets/css/DisplayEvents.css';
</style>
