<template>
<div class="Blog">
<div class="container">
    <div class="neon">BLOG</div>
</div>


<v-layout row wrap >

   <v-flex xs12 >
    <!-- <v-flex xs12 d-flex>
       <h2 class="blogHead">posts</h2>
     </v-flex>-->
     <v-container fluid>
     <v-layout row wrap   justify-center>
           <v-flex xs6 md2 >
             <input id="myInput" v-model="filter" placeholder="Search">
           </v-flex>
           <v-flex xs6 md2>
           <v-select
                 :items="options"
                  item-text="text"
                  item-value="value"
                  v-model="sortQuery"
                  label="Sort By"
                  append-icon="fas fa-caret-down"
                  solo
                  style="margin-left:10px;"
                ></v-select>
           </v-flex>
     </v-layout>
     </v-container>

          <post :posts="PostsSorted" :SearchQuery="filter"/>
   </v-flex>
<!--   <v-flex xs12 lg3 class="Recentposts">
          <v-flex xs12 >
            <h2 class="blogHead">Recent posts</h2>
          </v-flex>
          <Recentpost :posts="RecentPosts"/>
   </v-flex>-->
</v-layout>
</div>
</template>

<script>
import Blog from '@/services/Blog'
import post from './post'
import Recentpost from './Recentpost'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts:[],
     options:[{text:'Recent',value:['date_to_show','desc']},
              {text:'Older',value:['date_to_show','asc']},
              {text:'A-Z',value:['title','asc']},
              {text:'Z-A',value:['title','desc']}
              ],
     sortQuery:['date_to_show','asc'],
     filter:''
    }
  },
  components:{post,Recentpost},
  computed: {
    PostsSorted: function() {
        return _.orderBy(this.posts, [this.sortQuery[0]],  [this.sortQuery[1]]);
            },
    RecentPosts:function() {
        return (_.filter(this.posts ,function(o) {
          var one_day=1000*60*60*24;
          var date1_ms = new Date().getTime();
          var date2_ms = new Date(o.date_to_show).getTime();
          var difference_ms = date1_ms - date2_ms;
          return (difference_ms/one_day<=31)
      }))
      },
    },
async created() {
      try{
        this.posts= (await Blog.getPosts()).data;
         }
      catch(e){
          console.log(e.message);
           }
     },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/Blog.css';
</style>
