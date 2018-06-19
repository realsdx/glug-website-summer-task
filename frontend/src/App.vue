<template>
  <div id="app"   >
    <v-app  >
       <div >
        <main >
          <Pageheader/>
          <v-content >
          <router-view/>
          </v-content>
      </main>
      </div>
  </v-app>
</div>
</template>

<script>

import Pageheader from './components/Header'
export default {
  name: 'App',
  components:{ Pageheader},
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
.navv{
  z-index: -999;
}

</style>
