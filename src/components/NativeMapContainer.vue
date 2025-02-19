<script setup>
import { onMounted, ref } from 'vue';
import { GoogleMap } from '@capacitor/google-maps';

const mapContainer = ref(null);
let map;

onMounted(async () => {


  map = await GoogleMap.create({
    id: 'native-map',
    element: mapContainer.value,
    apiKey: 'AIzaSyBy277EcmtPGMIM3iwXDlR_JEZW8iQ11pw',
    config: {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12 
    }
  });
});
</script>

<template>
  <div style="background-color: #fff;">
    <capacitor-google-map ref="mapContainer" class="full-screen-map"></capacitor-google-map>
  </div>
  
</template>

<style scoped>
.full-screen-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
capacitor-google-map {
  display: inline-block;
  opacity: 0;
  background-color: #fff;
}
</style>
