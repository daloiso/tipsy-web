<template>
    <q-page class="flex q-pa-md">
        <div class="row">
          <!--
            <q-btn color="primary" label="Add row" @click="retrieveContattiFromDB" />

          -->
        <q-table
            title="Gestione Contatti"
            :data="righe"
            :columns="cols"
            row-key="contattoId"
            selection="single"
            :selected="selected"
            class="col-12"
            :loading="loading"
        />
        <div class="q-pa-md q-gutter-sm">
            <q-btn  @click="dialog = true" class="col-2" color="secondary" label="Inserisci Contatto"></q-btn>
        </div>
    </div>
    <q-dialog v-model="dialog" persistent>
        <q-card>
        <q-card-section class="row items-center">
            <div>
            <q-form
                @submit="inserisciContatto"
                class="row"
                >

                <q-input
                    filled
                    v-model="nome"
                    label="Nome"
                    lazy-rules
                    :rules="[
                    val => val && val.length > 0 || 'Please type something'
                    ]"
                    class="col-8"
                />
                <q-input
                    filled
                    v-model="cognome"
                    label="Cognome"
                    lazy-rules
                    :rules="[
                    val => val && val.length > 0 || 'Please type something'
                    ]"
                    class="col-8"
                />
                <q-input
                    filled
                    v-model="telefono"
                    label="Telefono"
                    type="tel"
                    lazy-rules
                    :rules="[val => isValidTelephone(val)]"
                    class="col-8"
                />
                <q-input
                    filled
                    v-model="email"
                    label="Email"
                    type="email"
                    lazy-rules
                    :rules="[val => isValidEmail(val)]"

                    class="col-8"
                />
            </q-form>
            </div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="Cancel" color="secondary" v-close-popup />
          <q-btn flat label="Inserisci Contatto" color="secondary" @click="inserisciContatto"/>
        </q-card-actions>
        </q-card>
    </q-dialog>
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

/*
cognome
: 
"Daloiso"
contattoId
: 
1
email
: 
"Pasquale.daloiso@gmail.com"
nome
: 
"Pasquale"
telefono
: 
"+393466000133"
*/
const rows = []


import { LocalStorage } from 'quasar'
import { Notify } from 'quasar'
import {registerContatto, retrieveContatto} from 'src/service/api';
export default {
    name: 'GestioneContatti',
    created () {
        let user = LocalStorage.getItem("user")
        if(user){
          this.utenteProv = user;
        
        }else{
            Notify.create("User not logged in");
        }
    },
    setup () {
    return {
      cols
    }
  },
    data() {

        return {
            dialog:false,
            selected: [],
            rows: this.retrieveContatti(),
            nome: null,
            cognome: null,
            telefono: null,
            email: null,
            utenteProv: null,
           loading:false
        }
    },
    computed:{
       righe(){
        return this.rows;
       }
    },
    methods:{
        retrieveContatti(){
            this.retrieveContattiFromDB();
        },
      
        async retrieveContattiFromDB(){
          try{
            this.loading=true;
            let contatti = await retrieveContatto(this.utenteProv);
            console.log(contatti.data);
            this.rows= contatti.data;
            
          }catch(error){
            let message="non è stato possibile visualizzare i contatti dal db "
            Notify.create(message);
            console.log(message);
          }
          this.loading=false;
        },
      
        inserisciContatto(){
          this.inserisciContattoOnDb();
        },
        isValidEmail (val) {
            if(!val){
                return "Please type something"
            }
            const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
            return emailPattern.test(val) || 'Invalid email';
        },
        isValidTelephone(val){
            if(!val){
                return "Please type something"
            }
            const emailPattern = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
            return emailPattern.test(val) || 'Invalid telephone';
        },

        async inserisciContattoOnDb(){

          let payload={
            nome: this.nome,
            cognome: this.cognome,
            telefono: this.telefono,
            email: this.email,
            utenteProv: this.utenteProv
          }

          //console.log("via: " + via + "\nnome: " + nome + "\ntipo: " + tipologia + "\nposiz: " +  this.posizioneX + " " + this.posizioneY);

          try{
            let data = await registerContatto(payload);

          }catch(error){
            let message="non è stato possibile registrare il contatto sul db "
            Notify.create(message);
            console.log(message);
          }

      }
    }
}
</script>
