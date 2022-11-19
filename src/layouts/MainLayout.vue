<template>
  <q-layout view="lHh Lpr lFf">
  <q-page-container>
     <q-header elevated class="bg-black">
        <q-toolbar>
          
          <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
          <q-toolbar-title>Menu</q-toolbar-title>
        
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
      </q-list>
    </q-drawer>

  

   
  <router-view />
  </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import {HOME, AUTH_PAGE, VISUALIZZA_LOCALI} from '../router/routes'


export default {
  name: 'MainLayout',

  components: {
    
  },

  setup () {
   
  
    return {
      leftDrawerOpen: ref(true),
      
      HOME,
      AUTH_PAGE
    }

  },
  methods:{
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
    }

  }

}
</script>
