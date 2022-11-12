<template>
  <q-layout view="lHh Lpr lFf">

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
        <q-item-label header>
          item1
        </q-item-label>
      </q-list>
    </q-drawer>

  

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'



export default {
  name: 'MainLayout',

  components: {
    
  },

  setup () {
   

    return {
      leftDrawerOpen: ref(true),
    
    }
  }
}
</script>
