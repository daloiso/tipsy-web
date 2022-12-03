<template>
  <q-page class="flex q-pa-md">
    Inserisci Locale

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
    <q-input
        filled
        v-model="via"
        label="Indirizzo"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Please type something'
        ]"
      />
      <button @click="searchPlace">
      Cerca via
      </button>

      <q-input
        filled
        v-model="nome"
        label="Nome Locale"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Please type something'
        ]"
      />

      <q-select v-model="tipologia" :options="options" label="Standard" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" :disabled="posizioneX==0"/>
      </div>
    </q-form>

  </q-page>

</template>

<script>
import { ref } from 'vue'
import { Notify } from 'quasar'
import {registerLocale, getPlace} from 'src/service/api';
import console from 'console';

export default {
  name: 'InserisciLocale',

  data() {

    return {
      options : ['Birreria', 'Vineria', 'Cocktail Bar'],
      via: "",
      nome: "",
      tipologia: "",
      posizioneX: 0,
      posizioneY: 0
    };
  },

  methods: {
    onSubmit () {
        this.registerLocaleOnDb(this.nome, this.tipologia)
      },

    async searchPlace(){
      try{
        let geolocationJson = await getPlace(this.via)
        let res = await geolocationJson.data.features[0].geometry.coordinates;

        this.posizioneX = res[0]
        this.posizioneY = res[1]


      }catch(SearchPlaceError){
        console.log("Search Place error: " + SearchPlaceError)
        Notify.create("API don't work");
      }
    },

    async registerLocaleOnDb(nome, tipologia){

      let payload={
        name: nome,
        posizionex: this.posizioneX,
        posizioney: this.posizioneY,
        tipologia: tipologia
      }

      //console.log("via: " + via + "\nnome: " + nome + "\ntipo: " + tipologia + "\nposiz: " +  this.posizioneX + " " + this.posizioneY);

      try{
        let data = await registerLocale(payload);

      }catch(error){
        let message="non è stato possibile registrare il locale sul db "
        Notify.create(message);
        console.log(message);
      }

    }
  }


};

</script>
