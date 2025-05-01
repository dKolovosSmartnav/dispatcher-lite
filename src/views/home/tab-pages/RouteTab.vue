<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Route</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Route</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div class="fragment-container">
        <RouteFragment/>  
      </div>
      

    </ion-content >
  </IonPage>
</template>

<script setup lang="ts">
import RouteFragment from '@/components/home/route-tab/RouteFragment.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<style lang="css">

.fragment-container{
  width: 100%;
  height: 100%;
  max-width: 800px;
  padding: 0 20px;
  margin: 0 auto;
}

</style>
