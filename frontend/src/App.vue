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

</style>
