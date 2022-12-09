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

export default {
    name: 'GestioneContatti',
    data() {

        return {
            selected: null,
            rows: null,
            columns: cols
        }
    }
}
</script>    