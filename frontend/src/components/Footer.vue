<template lang="html">
  <div class=" white--text text-xs-center" width="100%">
        <div class="d-flex justify-content-center" elevation-2>
         <span  v-for="icon in icons" class="col-sm-1 fa-2x tapp hover"  style="color:#263238"><i v-bind:class="icon"></i></span>
          </div>
       <div class="white--text blue-grey darken-4">
          &copy;2018 — <strong>GNU linux users group</strong>
       </div>
     </div>
</template>

<script>
export default {
    data: () => ({
      icons: ["fab fa-facebook-square", 'fab fa-twitter', 'fab fa-google-plus-g', 'fab fa-linkedin', 'fab fa-instagram'],
    })
  }
</script>

<style lang="css">
.tapp:hover{
   text-shadow: 2px 0px 9px rgba(0, 83, 255, 0.86);

}
</style>
