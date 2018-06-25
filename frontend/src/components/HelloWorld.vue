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
   <div class="eachAboutsection col-lg-4 col-sm-12"  v-for="data in aboutData" v-show="counter" v-scroll="hellyeah">
     <div v-html="data.content"></div>
   </div>
 </div>
</div>

<v-parallax :src="require('@/assets/images/5.jpg')" style="height:40vh;width:100%"></v-parallax>

<div id="eventsSection" class="container fluid" >
   <v-flex class="white--text"><h1 class="headingF display-2">Upcoming Events</h1></v-flex>
    <div class="scroller d-flex" ref="myDiv">
      <div class="eachEvent" v-for="data in eventData" v-if="(new Date(data.event_timing)>new Date())">
          <div class=" project project-2" :style="{ backgroundImage: `url('${data.event_image}')` }">
            	   <div class="project-hover">
                	<h2>{{data.title}}</h2>
                    <hr />
                    <p><v-icon color="white">alarm</v-icon>{{new Date(data.event_timing).toLocaleTimeString()}}<br>
                      <v-icon color="white">date_range</v-icon>{{new Date(data.event_timing).toLocaleDateString()}}</p>
                      <div v-show="data.venue">Venue:{{data.venue}}</div>
                      <div v-show="data.url">Visit:{{data.url}}</div>
                       <v-btn  @click="toggle(data.identifier)">What is it?</v-btn>
                       <v-dialog v-model="dialog===data.identifier" max-width=300>
                          <v-card>
                            <v-card-title class="headingF red--text">{{data.title}}</v-card-title>
                              <hr>
                              <v-card-text v-html="data.description"></v-card-text>
                              <hr>
                              <button @click="toggle(data.identifier)" class="btn btn-outline-dark">ok</button>
                          </v-card>
                      </v-dialog>
                </div>
               </div>
      </div>
      </div>
 </div>

 <div class="projects">
    <h1 class="headingF display-2">Featured Projects</h1>
      <div class="d-flex flex-wrap fwrap container">
            <div class="col-lg-6 col-sm-12" v-for="data in FprojectsData">
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
                    <v-flex xs5>
                      <img :src="data.image" class="img-fluid" style="height:30vh">
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </div>
          </div>

</div>

</div>
</template>

<script src="../assets/scripts/Helloworld.js">
</script>

<style scoped lang="css">
@import '../assets/css/Helloworld.css';
</style>
