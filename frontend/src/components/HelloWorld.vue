<template>
  <div style="background-color:#90A4AE">
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
 <span @click="$vuetify.goTo(target, options)"><v-icon color="white" class="arrow" >expand_more</v-icon></span>
</v-flex>
</div>
</div>

<div id="aboutSection" class="container fluid" flex-fill>
  <v-flex wrap class="white--text"><h1 class="headingF display-2">About us</h1></v-flex>
  <div class="d-flex flex-wrap justify-content-center abdata">
   <div class="eachAboutsection "  v-for="data in aboutData" v-show="counter" v-scroll="hellyeah">
     <div v-html="data.content"></div>
   </div>
 </div>
</div>

<v-parallax :src="require('@/assets/images/5.jpg')" jumbotron height="200"></v-parallax>

<div id="eventsSection" class="container fluid" flex-fill >
   <v-flex class="white--text"><h1 class="headingF display-2">Upcoming Events</h1></v-flex>
   <div class="d-flex  align-items-center">
   <span  fixed id="leftarrow" @click="scrollLeft"><v-icon x-large>navigate_before</v-icon></span>
    <div class="scroller scrollmenu " ref="myDiv">
      <div class="eachEvent" v-for="data in eventData" v-show="counter" v-scroll="hellyeah" v-if="(new Date(data.event_timing)>new Date())">
          <div class=" project project-2" :style="{ backgroundImage: `url('${data.event_image}')` }">
            	   <div class="project-hover">
                	<h2>{{data.title}}</h2>
                    <hr />
                    <p><v-icon color="white">alarm</v-icon>{{new Date(data.event_timing).toLocaleTimeString()}}<br>
                      <v-icon color="white">date_range</v-icon>{{new Date(data.event_timing).toLocaleDateString()}}</p>
                      <div v-show="data.venue">Venue:{{data.venue}}</div>
                      <div v-show="data.url">Visit:{{data.url}}</div>
                       <a href="#">See Project</a>
                </div>
               </div>
      </div>
      </div>
    <span id="rightarrow" fixed  @click="scrollRight"><v-icon x-large>navigate_next</v-icon></span>
  </div>
 </div>

 <v-parallax :src="require('@/assets/images/9.jpg')" jumbotron style="height:auto;min-height:100vh">
        <h1  class="headingF display-2">Featured Projects</h1>
      <v-container column align-content-center fluid class="d-flex flex-wrap" style="height:auto;min-height:70vh">
        <v-flex xs12 lg6  class="eachFpro" v-for="data in FprojectsData">
          <v-card color="blue-grey darken-4" class="white--text" hover>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">{{data.title}}</div>
                    <div class="container">{{data.description}}</div>
                    <a :href="data.gitlink">git</a>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <img :src="data.image" class="img-fluid" style="height:30vh">
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-container>
</v-parallax>
</div>
</template>

<script src="./Helloworld.js">
</script>

<style scoped lang="css">
@import './Helloworld.css';
</style>
