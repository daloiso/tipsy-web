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
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

  </q-page>

</template>

<script>
import { ref } from 'vue'
import { Notify } from 'quasar'
import {registerUser} from 'src/service/api';

export default {
  name: 'InserisciLocale',

  data() {

    return {
      options : ['Birreria', 'Vineria', 'Cocktail Bar'],
      via: "",
      nome: "",
      tipologia: ""
    };
  },

  methods: {
    onSubmit () {
        this.registerLocaleOnDb(this.via, this.nome, this.tipologia)
      },

    async registerLocaleOnDb(via, nome, tipologia){
      /*
      let payload={
        name:'Da Pino',
        posizionex:'2',
        posizioney:'3'
      }
      */
      console.log(via + nome + tipologia);

      try{
        let data = await registerUser(payload);
      }catch(error){
        let message="non è stato possibile registrare il locale sul db "
        console.log(message);
      }
    }
  }


};

</script>
