<template>
  <IonPage>

    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="info" href="/tabs/info">
          <IonIcon aria-hidden="true" :icon="information" />
          <IonLabel>Info</IonLabel>
        </IonTabButton>

        <IonTabButton tab="route" href="/tabs/route">
          <IonIcon aria-hidden="true" :icon="map" />
          <IonLabel>Route</IonLabel>
        </IonTabButton>

        <IonTabButton tab="contacts" href="/tabs/contacts">
          <IonIcon aria-hidden="true" :icon="person" />
          <IonLabel>Contacts</IonLabel>
        </IonTabButton>
      </IonTabBar>

    </IonTabs>

  </IonPage>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { information, map, person } from 'ionicons/icons';

</script>
