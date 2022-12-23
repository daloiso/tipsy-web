<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
     
      <AuthComponent :tab="tab" />
      
    </q-card>
  </q-page>
</template>

<script>
import AuthComponent from "components/AuthComponent";


export default {
  components: { AuthComponent },
  data() {
    return {
      tab: "login",
    };
  },
};
</script>
