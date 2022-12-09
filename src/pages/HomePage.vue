<template>
  <q-page class="flex" id="home">
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
<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,300;1,800&display=swap';


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --dark-blue: #181D31;
  --violet: #6D67E4;
  --light-blue: #46C2CB;
}

#title-section {
  display: inline-flex;
}

.title{
  position: absolute;
  z-index: 2;
  width: 100%;
}

html{
  font-family: 'Raleway', 'Times New Roman', Times, sans-serif;
}

.img-container{
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

img {
  position: relative;
  background-size: cover;
  background-position: center;
  margin-top: 0vh;
  animation: scale 20s;
}

h3{
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  padding: .7em 45%;
  color: #F3EFE0;
  font-weight: bold;
  font-style: italic;
}

@keyframes scale {
  0% {
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
}

.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

</style>

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
