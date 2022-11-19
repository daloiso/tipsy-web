<template>
  <div>
    <template v-if="tab === 'register'">
      <div class="text-center q-mb-lg">Sign up with</div>
    </template>
    <template v-else>
      <div class="text-center q-mb-lg">Sign in with</div>
    </template>
    <div class="flex flex-center">
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        color="primary"
        size="md"
        label="Google"
        @click="google"
      />
    </div>
    <template v-if="tab === 'register'">
      <p class="text-center">Sign up with credentials</p>
    </template>
    <template v-else>
      <p class="text-center">Sign in with credentials</p>
    </template>

    <q-form @submit="submitForm">
      <q-input
        outlined
        class="q-mb-md"
        type="email"
        label="Email"
        v-model="formData.email"
      />
      <q-input
        outlined
        class="q-mb-md"
        type="password"
        label="Password"
        v-model="formData.password"
      />
      <div class="row">
        <q-space />
        <q-btn type="submit" color="primary" :label="tab" />
      </div>
    </q-form>
    <div class="text-center q-my-md">
      <q-btn
        flat
        label="Forgot Password?"
        color="green"
        class="text-capitalize rounded-borders"
        v-if="tab !== 'register'"
        @click="forgotPassword"
      />
    </div>
    <q-dialog v-model="resetPwdDialog">
      <ForgotPassword />
    </q-dialog>
  </div>
</template>

<script>
import ForgotPassword from "./ForgotPassword.vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {HOME, AUTH_PAGE} from '../router/routes';
import {registerUser} from 'src/service/api';

const firebaseConfig = {
    apiKey: "AIzaSyCx2Jtbf51lWlsJHaUZgUObmDv_TkvdVQQ",
  authDomain: "tipsy-368410.firebaseapp.com",
  projectId: "tipsy-368410",
  storageBucket: "tipsy-368410.appspot.com",
  messagingSenderId: "973178688229",
  appId: "1:973178688229:web:0936b2103950c52cb37a0c",
  measurementId: "G-V7181SKZDC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default {
  name: "AuthComponent",
  props: ["tab"],
  components: { ForgotPassword },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      resetPwdDialog: false,
    };
  },
  methods: {
    submitForm() {
      if (this.tab === "login") {
        this.signInExistingUser(this.formData.email, this.formData.password);
      } else {
        this.createUser(this.formData.email, this.formData.password);
      }
    },
    google() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(result=>registerUserAll(result))
      .catch(error => console.log('error',error))
    },
    async registerUserAll(result){
      
        //registro
        console.log(result);
        let data= await registerUserOnDb(result);
        //home
        let route = {
          name:HOME.name,
          params:{}
        }
        this.$router.push(route)
    },
    async registerUserOnDb(result){
      let payload={
        username:'',
        email:''
      }
      try{
        let data = await registerUser(payload);
      }catch(error){
        let message="non è stato possisbile registrare su db l'utente"
        console.log(message);
      }
    },
    signInExistingUser(email, password) {
      console.log(email, password);
    },
    createUser(email, password) {
      console.log(email, password);
    },
    forgotPassword() {
      this.resetPwdDialog = true;
    },
  },
};
</script>
