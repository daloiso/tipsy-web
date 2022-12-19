<template>
  <q-page class="flex q-pa-md">

<div style="height: 500px; width: 100%">
  <div class="row">
    <!--
          <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p>
    <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
    
    <button @click="showLongText">
      Toggle long popup
    </button>
    <button @click="showMap = !showMap">
      Toggle map
    </button>
    -->

   
    <q-input
        filled
        v-model="via"
        label="Indirizzo"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Please type something'
        ]"
        class="col-8"
      />
      <div class="q-pa-md q-gutter-sm">
      <q-btn @click="searchPlace" class="col-2" style="margin-left:20px" color="secondary" label="Cerca">
      </q-btn>
      </div>  
  </div>
  <l-map
    v-if="showMap"
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    style="height: 80%"
    @update:center="centerUpdate"
    @update:zoom="zoomUpdate"
  >
    <l-tile-layer
      :url="url"
      :attribution="attribution"
    />
    <div v-for="marker1 in markers"  :key="marker1.localeId">
      <l-marker :lat-lng="getLatLong(marker1)">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div>
            <img  :src="getPathImg(marker1)"  style="width: 20px; height: 20px"/>
            {{marker1.name}}
          
          </div>
        </l-tooltip>
      </l-marker>
    </div>
  </l-map>
</div>
</q-page>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { Notify } from 'quasar'
import {visualizzaLocale, getPlace} from 'src/service/api';
export default {
name: "VisualizzaLocaliPage",
components: {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip
},
data() {
  return {
    zoom: 13,
    center: latLng(47.41322, -1.219482),
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    withPopup: latLng(47.41322, -1.219482),
    withTooltip: latLng(47.41422, -1.250482),
    currentZoom: 11.5,
    currentCenter: latLng(47.41322, -1.219482),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.5
    },
    showMap: true,
    via: null,
    markers: []
  };
},
methods: {
  zoomUpdate(zoom) {
    this.currentZoom = zoom;
  },
  centerUpdate(center) {
    this.currentCenter = center;
  },
  showLongText() {
    this.showParagraph = !this.showParagraph;
  },
  innerClick() {
    alert("Click!");
  },
  async searchPlace(){
      try{
        let geolocationJson = await getPlace(this.via)
        let res = await geolocationJson.data.features[0].geometry.coordinates;
        this.center = latLng(res[1], res[0])
        let payload ={
          posizionex: res[0],
          posizioney: res[1]
        }
        let markers = await visualizzaLocale(payload);
        this.markers = markers.data;
        
      }catch(SearchPlaceError){
        console.log("Search Place error: " + SearchPlaceError)
        Notify.create("API don't work");
      }
  },
  getLatLong(marker1){
    return latLng(marker1.posizioney,marker1.posizionex);
  },
  getPathImg(marker1) {
    return "~assets/" +marker1.tipologia+".png"
  } 
}
};
</script>