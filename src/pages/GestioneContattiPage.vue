<template>
    <q-page class="flex q-pa-md">
        
        <q-table
            title="Gestione Contatti"
            :rows="rows"
            :columns="columns"
            row-key="contattoId"
            selection="single"
            :selected="selected"
        />
    </q-page>
</template>
<script>

const cols = [
{ name: 'contattoId', label: 'Identificativo', field: 'contattoId'},
  { name: 'nome', label: 'Nome', field: 'nome'},
  { name: 'cognome', label: 'Cognome', field: 'cognome'},
  { name: 'telefono', label: 'Telefono', field: 'telefono' },
  { name: 'email', label: 'e-mail', field: 'email' },

]
import { LocalStorage } from 'quasar'
import { Notify } from 'quasar'
export default {
    name: 'GestioneContatti',
    created () {
        let user = LocalStorage.getItem("user")
        if(user){

        }else{
            Notify.create("User not logged in");
        }
    },
    data() {

        return {
            selected: null,
            rows: null,
            columns: cols
        }
    }
}
</script>    