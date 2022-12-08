<template>
  <q-page class="flex">
    <section id="title-section">
      <div class="title">
        <h3>TIPSY</h3>
      </div>
    </section>

    <div class="img-container">
      <div class="overlay"></div>
      <img src="../assets/imgs/tipsy1.jpg" alt="">
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
import "../assets/homepageStyle.css";

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
