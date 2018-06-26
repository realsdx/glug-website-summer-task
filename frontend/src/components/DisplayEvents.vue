<template lang="html">
<v-container fluid class="events">
<div style="margin-top:10vh;margin-bottom:1vh">
<v-flex><span class="headingF display-2">Events</span></v-flex></div>
<hr><br>
<hr>
<v-layout d-flex wrap justify-space-around class="cards">
   <v-flex lg3 sm12 class="Eachcard" v-for="data in events" :key="data.identifier" v-if="data.show_bool">
      <v-container><img :src="data.event_image" class="cardImage"/>
      <v-layout d-flex><v-flex xs10><h2 >{{data.title}}</h2></v-flex>
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
                              <v-list-tile><network network="facebook"><v-btn icon><i class="fab fa-lg fa-facebook-f"></i></v-btn></network></v-list-tile>
                             <v-list-tile><network network="twitter"><v-btn icon><i class="fab fa-lg fa-twitter" ></i></v-btn></network></v-list-tile>
                             <v-list-tile><network network="whatsapp"><v-btn icon><i class="fab fa-lg fa-whatsapp"></i></v-btn></network></v-list-tile>
                           </v-list>
                            </social-sharing>
                          </v-list>
                        </v-menu>
                        </v-flex>
      </v-layout> </v-container>
      <div id="ribbon" ><i class="far fa-calendar-alt fa-lg" ></i> <span > {{new Date(data.event_timing).toLocaleDateString()}}</span></div>
      <div id="ribbon"><i class="fas fa-clock fa-lg"></i> <span> {{new Date(data.event_timing).toLocaleTimeString()}}</span></div>
      <div v-show="data.venue"><strong>Venue:</strong><u>{{data.venue}}</u></div>
      <div v-show="data.url"><strong>Visit:</strong><u>{{data.url}}</u></div>
       <p v-html="data.description"></p>


    </v-flex>
  </v-layout>

</v-container>
</template>

<script src="../assets/scripts/DisplayEvents.js">

</script>

<style lang="css" scoped>
@import '../assets/css/DisplayEvents.css';
</style>
