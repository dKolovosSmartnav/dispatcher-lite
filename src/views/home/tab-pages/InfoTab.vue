<template>
  <!--
   In this tab general information will be displayed to the user.
   Such oinformation may be: 
    -- Notifications.
    -- Alerts
    -- Driver's data (name, vehicle licence plate)
    -- Date
    -- Departure time
    -- Expected departure time
    -- End of day time
    -- Expected end of day
    -- Hours driven
    -- Miles done
    -- Vehicle condition
    -- Tasks (done, scheduled, aborted, cancelled,...)
   
  -->
  <IonPage>
    <IonHeader>
      <ion-toolbar>
        <ion-title>Info</ion-title>
      </ion-toolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Information</IonTitle>
        </IonToolbar>
      </IonHeader>

      <!-- That's the fragment for the tasks-->
      <div class="grid-container">

        <NotificationsFragment />

      </div>
    </ion-content>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import NotificationsFragment from '@/components/home/info-tab/NotificationsFragment.vue';
</script>

<style scoped>

/* Default: Mobile Layout (Single Column) */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%; /* Controls the width of the grid */
  height: 100%;
  max-width: 800px; /* Prevents it from being too wide on large screens */
  margin: 0 auto; /* Centers the grid horizontally */
  padding: 0 20px; /*Adds left and right padding*/
}


/* Tablet: Two Columns */
@media (min-width: 600px) {
  .grid-container {
  }
}

/* Desktop: Three Columns */
@media (min-width: 900px) {
  .grid-container {
  }
}




</style>