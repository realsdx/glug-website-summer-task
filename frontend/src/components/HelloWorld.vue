<template>
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
 <v-icon color="white" class="arrow" >expand_more</v-icon>
</v-flex>
</div>
<div id="aboutSection" class="container fluid" flex-fill>
  <v-flex wrap class="white--text"><h1 class="display-2">About us</h1></v-flex>
  <div class="d-flex flex-wrap justify-content-center">
   <div class="eachAboutsection "  v-for="data in aboutData" v-show="counter" v-scroll="hellyeah">
     <h1 class="headline">{{data.heading}}</h1>
     <hr>
     <div>{{data.content}}</div>
   </div>
 </div>
</div>

<v-parallax :src="require('@/assets/images/5.jpg')" jumbotron height="200"></v-parallax>
<div id="eventsSection" class="container fluid" flex-fill >
   <v-flex class="white--text"><h1 class="display-2">Upcoming Events</h1></v-flex>
   <div class="d-flex scrollmenu align-items-center">
   <div id="leftarrow"><v-icon x-large>navigate_before</v-icon></div>
    <div class="scroller ">
      <div class="eachAboutsectionss" v-for="data in eventData" v-show="counter" v-scroll="hellyeah">

                <div class=" project project-2 wow animated animated3 fadeInLeft">
            	   <div class="project-hover">
                	<h2>{{data.title}}</h2>
                    <hr />
                    <p><v-icon color="white">alarm</v-icon>{{data.time}}<br><v-icon color="white">date_range</v-icon>{{data.date}}</p>

                    <a href="#">See Project</a>
                </div>
               </div>
      </div>
      <div class="eachAboutsectionss" v-for="data in eventData" v-show="counter" v-scroll="hellyeah">

                <div class=" project project-2 wow animated animated3 fadeInLeft">
            	   <div class="project-hover">
                	<h2>{{data.title}}</h2>
                    <hr />
                    <p><v-icon color="white">alarm</v-icon>{{data.time}}<br><v-icon color="white">date_range</v-icon>{{data.date}}</p>

                    <a href="#">See Project</a>
                </div>
               </div>
      </div>
      </div>
    <div id="rightarrow"><v-icon x-large>navigate_next</v-icon></div>
  </div>
 </div>
</div>
</template>
<script>

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
      aboutData:[{heading:'what we do',content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,       consectetur,      adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',linktext:'this is linktext',link:'this is random link'},
               {heading:'what we do',content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',linktext:'this is linktext',link:'this is random link'},
                 {heading:'what we do',content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',linktext:'this is linktext',link:'this is random link'}],
      eventData:[{title:'freemax',date:'27-01-2018',time:'2:00AM',venue:'Ovals',link:'eventlink'},{title:'freemax',date:'27-01-2018',time:'2:00AM',venue:'Ovals'},{title:'freemax',date:'27-01-2018',time:'2:00AM',venue:'Ovals',link:'eventlink'},{title:'freemax',date:'27-01-2018',time:'2:00AM',venue:'Ovals',link:'eventlink'}]
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
   }

 },
 mounted() {
   this.changed=true;
    this.appendWords(); // invoke function when ready

  },
  computed: {
      avatarSize () {
        return `${this.slider}px`
      }
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project {
	width: 100%;
	height: inherit;
	background-image: url(https://image.freepik.com/free-vector/abstract-geometric-background-design_1045-764.jpg);
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
  background-color:#90A4AE;
  position: relative;
  z-index: -1;
  padding-top:50px;

}
div.scrollmenu {
    background-color:#FFF;
    box-shadow: 0px 8px 6px -6px black;
    position: relative;
    margin: 0;
    margin-top: 50px;
    height: 400px;

}

.scroller{
  background-color:#FFF;
min-width: 80%;
height:inherit;
display: flex;
overflow-x: auto;
overflow-y: hidden;
}

div.scroller .eachAboutsectionss {
  margin: 2px;
  min-width:300px;
  height:inherit;
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

  }
@keyframes flip {
  from{transform: scale(0.5);}
  to{transform: scale(1);}
}

.eachAboutsection:hover{

}
#aboutSection{

  background-color:#90A4AE;
}
</style>
