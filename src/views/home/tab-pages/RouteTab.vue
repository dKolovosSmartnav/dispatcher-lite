<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Route</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Route</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="fragment-container">
        <RouteFragment/>  
      </div>
      

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import RouteFragment from '@/components/home/route-tab/RouteFragment.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<style lang="css" scoped>

.fragment-container{
  width: 100%;
  height: 100%;
  max-width: 800px;
  padding: 0 20px;
  margin: 0 auto;
}

</style>
