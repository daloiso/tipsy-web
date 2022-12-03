<template>

  <q-page class="flex q-pa-md">
    <div>
      <h3>Tipsy Web</h3>
      <img src="../assets/imgs/tipsy-brewery-1.jpg" alt="">

    </div>
    <!--
    <div>

      <q-btn
        :class="$q.screen.lt.sm ? 'col-8' : 'col-4'"
        color="indigo"
        label="Mia localizzazione"
        push
        size="lg"
        @click="getGeolocation"
      />
    </div>
  </q-page>
</template>

<script>

export default {
  name: "HomePage",

  data() {
    return {
      latitude: "",
      longitude: "",
    };
  },
  methods: {
    getGeolocation() {
      if (navigator.geolocation) {
        this.$q.loading.show();
        navigator.geolocation.getCurrentPosition(
          this.setPosition,
          this.errorPosition
        );
      } else {
        this.errorPosition();
      }
    },
    setPosition(position) {
      const coords = position.coords;
      this.latitude = coords.latitude;
      this.longitude = coords.longitude;
      this.$q.loading.hide();
      this.successNotify();
    },
    errorPosition() {
      this.$q.notify({
        position: "bottom",
        timeout: 3000,
        color: "negative",
        textColor: "white",
        actions: [{ icon: "close", color: "white" }],
        message: "Posizione non recuperata!",
      });
      this.$q.loading.hide();
    },
    successNotify() {
      this.$q.notify({
        position: "bottom",
        timeout: 3000,
        color: "positive",
        textColor: "white",
        actions: [{ icon: "check", color: "white" }],
        message: "Posizione recuperata!",
      });
    },
    logout() {
      console.log("logged out");
    },
  },
};
</script>
