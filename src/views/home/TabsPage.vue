<template>
  <ion-page>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="info" href="/tabs/info">
          <ion-icon aria-hidden="true" :icon="information" />
          <ion-label>Info</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="route" href="/tabs/route">
          <ion-icon aria-hidden="true" :icon="map" />
          <ion-label>Route</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/tabs/chat">
          <ion-icon aria-hidden="true" :icon="chatbubble" />
          <ion-label>Dispatch</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

    </ion-tabs>

  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { chatbubble, information, map, stop } from 'ionicons/icons';

</script>
