<template>
  <div>
  <div class='bgimage'>
  <div class="wrapping bg">
  <v-container class="cover" justify-center fill-height>
  <v-flex class="bo" >
  <transition name="g">
  <h1 class="white--text display-1 ani" v-text="string"  v-show="changed"></h1>
  </transition>
  </v-flex>
  </v-container>
  <v-flex class="anWrapping">
 <span @click="$vuetify.goTo(target, options)"><i class="fas fa-angle-down fa-lg white--text arrow" ></i></span>
</v-flex>
</div>
</div>

<v-container id="aboutSection" fluid>
    <v-flex wrap class="white--text"><h1 class="headingF display-2">About us</h1></v-flex>
  <v-layout class="d-flex  justify-content-center" wrap >
    <v-flex md12 lg4  class="abdata" v-for="data in aboutData" v-show="counter" v-scroll="hellyeah"  :key="data.identifier"> <div class="eachAboutsection" v-html="data.content"></div></v-flex>
  </v-layout>
</v-container>

<v-parallax :src="require('@/assets/images/5.jpg')" style="height:60vh;width:100%"></v-parallax>

<v-container fluid id="eventsSection">
   <v-flex class="white--text"><h1 class="headingF display-2">Upcoming Events</h1></v-flex>
    <v-layout class="scroller" ref="myDiv" fill-height>
      <v-flex class="eachEvent" v-for="data in eventData" v-if="(new Date(data.event_timing)>new Date())"  :key="data.identifier">
          <div  class="project" :style="{ backgroundImage: `url('${data.event_image}')` }">
            	   <div class="project-hover">
                	<h2>{{data.title}}</h2>
                    <hr />
                    <p><i class="fas fa-clock fa-lg"></i>{{new Date(data.event_timing).toLocaleTimeString()}}<br>
                      <i class="far fa-calendar-alt fa-lg"></i>{{new Date(data.event_timing).toLocaleDateString()}}</p>
                      <div v-show="data.venue">Venue:{{data.venue}}</div>
                      <div v-show="data.url">Visit:{{data.url}}</div>
                       <v-btn outline color="white" @click="toggle(data.identifier)">What is it?</v-btn>
                       <v-dialog v-model="dialog===data.identifier" max-width=500>
                          <v-card>
                            <v-card-title class="headingF red--text">{{data.title}}</v-card-title>
                             <v-card-text v-html="data.description"></v-card-text>
                            <v-btn fab small @click="toggle(data.identifier)" color="red">ok</v-btn>
                          </v-card>
                      </v-dialog>
                </div>
               </div>
      </v-flex>
    </v-layout>
</v-container>

<v-container fluid class="projects" justify-center align-content-center>
    <v-layout><v-flex><h1 class="headingF display-2">Featured Projects</h1></v-flex></v-layout>
    <v-layout d-flex wrap justify-center>
            <v-flex lg6 xs12 v-for="data in FprojectsData" :key="data.identifier">
              <v-card color="blue-grey darken-4" hover class="white--text eachFpro ">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs7>
                      <div>
                        <div class="headline">{{data.title}}</div>
                        <div class="container">{{data.description}}</div>
                        <a :href="data.gitlink">git</a>
                      </div>
                    </v-flex>
                    <v-flex xs5 v-if="data.image">
                      <v-card-media><img :src="data.image"  ></v-card-media>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
</v-container>

</div>
</template>

<script src="../assets/scripts/Helloworld.js">
</script>

<style scoped lang="css">
@import '../assets/css/Helloworld.css';
</style>
