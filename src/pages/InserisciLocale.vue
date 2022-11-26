<template>
  <q-page class="flex q-pa-md">
    Inserisci Locale

    <q-form
      @submit="onSubmit"
      @reset="onReset"
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

      <q-select v-model="model" :options="options" label="Standard" />


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </q-page>

</template>

<script>
import { ref } from 'vue'
import { Notify } from 'quasar'

export default {
  name: 'InserisciLocale',

  setup () {
    const via = ref(null)
    const nome = ref(null)
    const tipologia = ref(null)
    const options = ['Birreria', 'Vineria', 'Cocktail Bar']


    return {
      via,
      nome,
      tipologia,
      options,
      model: ref(null),

      onSubmit () {
        Notify.create("DANGER PASQUALE")
      },

      onReset () {
        via.value = null
        nome.value = null
        tipologia.value = false
      }
    }
  }

};

</script>
