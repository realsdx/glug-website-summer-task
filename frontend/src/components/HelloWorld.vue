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
      <v-layout column align-center align-items-center>
      <h1  class="headingF display-2">Featured Projects</h1>
      <v-container fluid >
        <v-flex xs12 lg6 class="eachFpro" v-for="data in FprojectsData">
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
    </v-layout>
</v-parallax>
</div>
</template>
<script>
import Home from '../services/Home'
import Events from '../services/Events'
export default {
  name: 'HelloWorld',
  data () {
    return {
      slider:100,
      tile: false,
      array:['GNU linux users group welcomes you','Hey there','Random text'],
      string:'Wanna be Badass',
      changed:false,
      counter:false,
      duration: 300,
       offset: 0,
       easing: 'easeInOutCubic',
      aboutData:[],
      eventData:[],
      FprojectsData:[{title:'Linit',description:'its a magazine',gitlink:'#',image:'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/12/Screen-Shot-2017-12-04-at-10.39.57-796x447.png',id:'1'},{title:'Linit',description:'its a magazine',gitlink:'#',image:'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/12/Screen-Shot-2017-12-04-at-10.39.57-796x447.png',id:'1'}]
    }
  },
  methods: {
   appendWords: function() {
     var i=0;
     var ary = this.array ;
     setInterval(() => {

     this.string = ary[i++];
       this.changed=!this.changed;
     if(i== ary.length) i=0;
   }, 2000)
 },
    hellyeah(e) {
     var count= window.pageYOffset || document.documentElement.scrollTop
     if(count>10)
    this.counter= true;
     else this.counter=false;
    },
   scrollLeft(){
    this.$refs.myDiv.scrollLeft -=250;
    },
  scrollRight(){
   this.$refs.myDiv.scrollLeft +=250;
  }


 },
 async mounted() {
   this.changed=true;
   try{ const data = (await Home.getAbout()).data  ;
     console.log(data);
   /*this.array = data.displaymesages;*/
   this.aboutData = data;
  /* this.eventData = data.Upcomingevents;
   this.FprojectsData= data.Fprojects;*/}
   catch(e){
   console.log('THIS IS THE ERROR',e);
 };
   try{ this.eventData = (await Events.getEvents()).data;}
   catch(e){
  console.log('THIS IS THE ERROR',e);
    };
   this.appendWords();
  },
  computed: {
      avatarSize () {
        return `${this.slider}px`
      },
    target () {
      const value = '#aboutSection'
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headingF{
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 35px;
  letter-spacing: -1.6px;
  word-spacing: -1.2px;
  color: #E1F5FE;
  font-weight: 700;
  width:auto;
  margin:10px;
}

#leftarrow,#rightarrow :hover{
  cursor: pointer;
}
.eachFpro{
  opacity:0.9;
  margin: 10px;

}
.eachFpro:hover{
    box-shadow: 6px 6px 50px 1px #81D4FA;

}
.project {
	width: 100%;
	height: 70vh;
	background-size: cover;
	background-position: center;
	padding: 0 !important;
}

.project-hover {
	width: 100%;
	height: 100%;
	color: #fff;
	opacity: 0;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
	background-color: rgba(244,11,105, 0.7);
	padding: 40% 30px !important;
}

.project-hover hr {
	height: 30px;
	width: 0;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
	background-color: rgba(255, 255, 255, 1);
	border: 0;
}

.project-hover a {
	color: rgba(255, 255, 255, 1);
	padding: 2px 22px;
	line-height: 40px;
	border: 2px solid rgba(255, 255, 255, 1);
	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}

.project-hover a:hover {
	border-color: rgba(51, 51, 51, 1);
	color: rgba(51, 51, 51, 1);
	background-color: #FFF;
}

.project:hover .project-hover {
	opacity: 1;
}

.project:hover .project-hover hr {
	width: 100%;
	height: 5px;
}

#eventsSection{
  z-index: -1;
  padding-top:50px;
  padding-bottom:50px
}
div.scrollmenu {
    background-color:#FFF;
    box-shadow: 0px 8px 6px -6px black;
    position: relative;
    margin: 0;
    margin-top: 50px;
    height: 70vh;

}

.scroller{
background-color:#FFF;
min-width: 80%;
height:70vh;
display: flex;
overflow-x: auto;
overflow-y: hidden;
::-webkit-scrollbar
    width: 0px
}

div.scroller .eachEvent {
  margin: 2px;
  width:300px;
  height:70vh;
}

.cover{
  height:80vh;
}
.bo{
  border-top:1px solid white;
    border-bottom:1px solid white;
   width:100%;
  height:auto;
}
.wrapping{
  height: 20vh;
}
h1{width:100%;
   word-wrap: normal;

    margin: 10px;

 }
g{ display: block;}

.g-enter-active{
   transition: all 2s ;
  }
.g-enter{
  transform: translateX(-100%);
  }
.g-leave{
    transform: translateX(100%);
    }
.arrow{
  animation: bounce 1s cubic-bezier(.5,0.05,1,.5);
   animation-direction: alternate;
   animation-iteration-count: infinite;
   border-radius: 15px;
   height: 1%;
  border: 2px solid #ffffff;
  color: #fff;
  padding-top: 20px;
}
 @keyframes bounce {
   0%{ transform: translate3d(0, 0, 0); }
  25% { transform: translate3d(0, 30px, 0); }
  50%{ transform: translate3d(0, 0px, 0); }
  75% { transform: translate3d(0, 30px, 0);}
  100%{ transform: translate3d(0, 40px, 0);}

}
.arrow:hover{
  cursor: pointer;
}
.cv{margin-top: 100vh;}
.bgimage{
      height:100vh;
      background-image: url("../assets/images/40.jpg");
      top: 0;
      right: 0;
      position: static;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;


}
.bg{
  top: 0;
  right: 0;
  margin: 0;
  position:static;
  background-color: rgba(0,0,0,0.5);
  height: 100%;
}
.eachAboutsection{
  margin:2px;
  background-color: white;
  width:250px;
  animation-name: flip;
  animation-duration: 1.5s;
  min-height:400px;
  }
@keyframes flip {
  from{transform: scale(0.5);}
  to{transform: scale(1);}
}

@keyframes slanty{
  from{ transform: translateX(-100);}
  to{transform: translateX(0);}
}
#aboutSection{
  padding: 10vh;
}
.abdata{
  margin-top: 5vh;
}
</style>
