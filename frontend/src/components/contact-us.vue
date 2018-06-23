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

<script>
import Home from '../services/Home'
export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      message: '',
      messageRules:[
        v=>!!v||'Please type in a message',
        v=>(v&&v.length>=10)||'Message must be greater than 10 characters'
      ],
     contacts:[{name:'Narendra modi',post:'President',phone:'XXXXXXX',email:'xxx@gmail.com'}]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    },
    async mounted(){
      try{ this.contacts= (await Home.getContacts()).data;}
      catch(e){ console.log(e);}
    }

}
</script>

<style lang="css">


.contact-info{
  background-image: url("../assets/images/12.jpg");
  background-size: cover;
  min-height:100vh;
  top: 0;
  right: 0;
  position: static;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index:1;

}
.bleh{
  animation-name:zomm;
  animation-duration: 0.5s;
  animation-delay: 1s;

}
@keyframes slidein {
from{ transform:translateX(100%);}
to{transform: translateX(0);}
}
@keyframes zomm {
0%{transform: scale3d(1,1,1)}
50%{transform: scale3d(1.1,1.1,1.1);}
100%{transform: scale3d(1,1,1);
}
}
.contact-form{
  min-height: 100vh;
background: rgba(241,231,103,1);
background: -moz-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(254,182,69,1)));
background: -webkit-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -o-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: -ms-linear-gradient(left, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
background: linear-gradient(to right, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#feb645', GradientType=1 );
animation-name:slidein;
animation-duration: 1s;
}
.acform{
margin:0 10vh;
}
.inner{
  top: 0;
  right: 0;
  margin: 0;
  position:static;
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  width:100%;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
  color:white;
  font-size:15px;
}
.cardi{
  margin: 30% auto auto auto;
  width:80%;
  border:1px solid white;
  border-radius: 10px;
}
.contact{
  background: lightblue;
}

</style>
