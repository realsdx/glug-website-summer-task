<template lang="html">
  <div class="contact d-flex flex-wrap justify-content-center">
    <div class="contact-form  col-lg-6 col-sm-12">
      <div class="images" style="margin-top:70px;">
        <img src="../assets/images/icon(1).png" alt="" style="height:20vh" >
      </div>
      <v-form ref="form" v-model="valid" lazy-validation class="acform" >
        <h1 class="headingF bleh">Get in touch</h1>
       <v-text-field
         v-model="name"
         :rules="nameRules"
         :counter="15"
         label="Name"
         required
       ></v-text-field>
       <v-text-field
         v-model="email"
         :rules="emailRules"
         label="E-mail"
         required
       ></v-text-field>
       <v-text-field
          v-model="message"
          label="Message"
          multi-line
          required
          :rules="messageRules"
        ></v-text-field>

       <v-btn
         :disabled="!valid"
         @click="submit"
       ><i class="fab fa-lg fa-telegram-plane"></i> Send
       </v-btn>
       <v-btn @click="clear"><i class="fas fa-lg fa-broom"></i>clear</v-btn>
     </v-form>
   </div>
    <div class="contact-info col-lg-6 col-sm-12">
      <div class="inner">
        <div v-for="contact in contacts" class="cardi">
          <i class="far fa-address-card fa-lg"></i><span> {{contact.name}}</span >({{contact.post}})<br>
          Phone:{{contact.phone}}<br>Mail:{{contact.email}}
        </div>

    </div>
    </div>

  </div>

</template>

<script src='../assets/scripts/contact-us.js'>

</script>

<style lang="css" scoped>

@import '../assets/css/contact-us.css';
</style>
