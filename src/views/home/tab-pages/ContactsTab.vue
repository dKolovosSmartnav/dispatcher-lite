<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue'
import ContactsFragment from '@/components/home/contacts-tab/ContactsFragment.vue';
</script>

<template>
    <IonPage>
        <ion-header>
            <ion-toolbar>
                <ion-title>Contacts</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            


            <ContactsFragment />

        </ion-content>
    </IonPage>
</template>
