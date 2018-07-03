<template lang="html">
<v-container fluid class="events" wrap>
<div style="margin-top:10vh;margin-bottom:1vh">
<v-flex><span class="headingF display-2">Events</span></v-flex></div>
<hr><br>
<hr>

<v-layout justify-space-around wrap>
  <v-flex md12 lg4 sm12 xs12 wrap  v-for="data in events" :key="data.identifier" v-if="data.show_bool" style="margin:1rem 0rem">
   <div class="Eachcard">
     <v-flex xs12>
      <v-card-media
        height="30vh"
        :src="data.event_image"
      >
      </v-card-media>
     </v-flex>
     <v-flex xs12>
       <v-layout row wrap>
         <v-flex xs10><h2 >{{data.title}}</h2></v-flex>
         <v-flex xs2>
             <v-menu top offest-y>
               <v-btn slot="activator" icon outline dark style="color:#12202E" ripple><i class="fas fa-share-alt"></i></v-btn>
                <v-list fluid  align-content-end>
                               <social-sharing :url="data.url||$route.path"
                                             :title="data.title"
                                              :description="data.description"
                                             :quote="data.title"
                                             inline-template>

                                <v-list>
                                 <v-list-tile><network network="facebook"><span><i class="fab fa-lg fa-facebook-f"></i></span></network></v-list-tile>
                                <v-list-tile><network network="twitter"><span><i class="fab fa-lg fa-twitter" ></i></span></network></v-list-tile>
                                <v-list-tile><network network="whatsapp"><span><i class="fab fa-lg fa-whatsapp"></i></span></network></v-list-tile>
                              </v-list>
                               </social-sharing>
                </v-list>
                </v-menu>
            </v-flex>
       </v-layout>
     </v-flex>
     <v-flex xs12>
       <div id="ribbon" ><i class="far fa-calendar-alt fa-lg" ></i> <span > {{new Date(data.event_timing).toLocaleDateString()}}</span></div>
       <div id="ribbon"><i class="fas fa-clock fa-lg"></i> <span> {{new Date(data.event_timing).toLocaleTimeString()}}</span></div>
     </v-flex>
     <v-flex wrap xs12  v-show="data.venue">
       <strong>Venue:</strong><u >{{data.venue}}</u>
     </v-flex>
     <v-flex wrap xs12  v-show="data.url">
       <strong>Visit:</strong><u style="word-wrap: break-word;">{{data.url}}</u>
     </v-flex>
     <v-flex wrap 12>
        <p v-html="data.description"></p>
     </v-flex>

   </div>

  </v-flex>
</v-layout>
</v-container>
</template>

<script src="../assets/scripts/DisplayEvents.js">

</script>

<style lang="css" scoped>
@import '../assets/css/DisplayEvents.css';
</style>
