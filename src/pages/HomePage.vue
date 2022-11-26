<template>
  <q-page class="flex q-pa-md">
    <div>
      <h3>Tipsy Web</h3>
      <img src="../assets/imgs/tipsy-brewery-1.jpg" alt="">

    </div>
    <!--
    <div>
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      />
    </div>
    -->
  </q-page>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HomePage",

  data() {
    return {};
  },
  methods: {
    logout() {
      console.log("logged out");
    },
  },
};
</script>
