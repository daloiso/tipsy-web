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
        <q-item-label header :to="HOME" >
          Home
        </q-item-label>
        <q-separator spaced />
         <q-item-label header :to="AUTH_PAGE" >
          Login
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
import {HOME, AUTH_PAGE} from '../router/routes'


export default {
  name: 'MainLayout',

  components: {
    
  },

  setup () {
   
    function goMethod (e, go) {
      e.preventDefault() ;
      setTimeout(() => {
        // console.log('navigating as promised 2s ago')
        go()
      }, 2000)
    }
    return {
      leftDrawerOpen: ref(true),
      goMethod,
      HOME,
      AUTH_PAGE
    }

  },
  methods:{

  }

}
</script>
