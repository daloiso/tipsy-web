<template>
  <q-layout view="lHh Lpr lFf">
  <q-page-container>
     <q-header elevated class="bg-black">
        <q-toolbar>

          <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
          <q-toolbar-title >Menu</q-toolbar-title>

        </q-toolbar>
      </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered>
      <q-list>
        <q-item-label header @click="gotoHome" >

          Home
        </q-item-label>
        <q-separator spaced />
         <q-item-label header @click="gotoLogin" >

          Login

        </q-item-label>
        <q-separator spaced />
        <q-item-label header @click="gotoLocali" >

        Visualizza Locali

      </q-item-label>
      <q-separator spaced />
      <q-item-label header @click="goToInserisciLocale" v-if="venditore==true">

        Inserisci Locale

      </q-item-label>
      <q-separator spaced v-if="venditore==true"/>
      <q-item-label header @click="goToGestioneContatti" v-if="consumatore==true">

        Gestione Contatti

        </q-item-label>
        <q-separator spaced v-if="consumatore==true"/>
      </q-list>
    </q-drawer>




  <router-view />
  </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import {HOME, AUTH_PAGE, VISUALIZZA_LOCALI, INSERISCI_LOCALE, GESTIONE_CONTATTI} from '../router/routes'
import {visualizzaUser} from 'src/service/api';
import { LocalStorage } from 'quasar'
import { Notify } from 'quasar'
export default {
  name: 'MainLayout',

  components: {

  },
  data() {
    return {
      venditore:false,
      consumatore:false
    }
  },
  //computed: {
    created(){
      let user = LocalStorage.getItem("user")
      if (user) {
        this.visualizzaUserDB(user)
        .then(result=>{
            if(result.data.tipo=='consumatore'||result.data.tipo=='entrambi'){
              this.consumatore=true 
            }
            if(result.data.tipo=='venditore'||result.data.tipo=='entrambi'){
              this.venditore=true 
            }
          }
        )
        .catch(error => console.log('error',error))
      } 
      return user;
    },
  //},
  
  setup () {


    return {
      leftDrawerOpen: ref(true),

      HOME,
      AUTH_PAGE
    }

  },
  methods:{
    async visualizzaUserDB(user){
      try{
        let utente = await visualizzaUser(user)
        return utente;
      }catch(SearchPlaceError){
        console.log("SvisualizzaUser error: " + SearchPlaceError)
        Notify.create("API don't work");
      }
    },
    gotoHome(){
      let route = {
        name:HOME.name,
        params:{}
      }
      this.$router.push(route);
    },
    gotoLogin(){
      let route = {
        name:AUTH_PAGE.name,
        params:{}
      }
      this.$router.push(route);
    },
    gotoLocali(){
      let route = {
        name:VISUALIZZA_LOCALI.name,
        params:{}
      }
      this.$router.push(route);
    },
    goToGestioneContatti(){
      let route = {
        name:GESTIONE_CONTATTI.name,
        params:{}
      }
      this.$router.push(route);
    },
    goToInserisciLocale(){
      let route = {
        name:INSERISCI_LOCALE.name,
        params:{}
      }
      this.$router.push(route);    
    }
  }

}
</script>
