<template>
  <div id="app"   >
    <v-app  >
        <main>
          <Pageheader/>
          <v-content class="cn">

          <router-view></router-view>

          </v-content>

          <Pagefooter/>

      </main>
  </v-app>
</div>
</template>

<script>

import Pageheader from './components/Header'
import Pagefooter from './components/Footer'
export default {
  name: 'App',
  components:{ Pageheader,Pagefooter},
}
</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.headingF{
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 35px;
  letter-spacing: -1.6px;
  word-spacing: -1.2px;
  font-weight: 700;
  width:auto;
  color:#263238;
}

</style>
