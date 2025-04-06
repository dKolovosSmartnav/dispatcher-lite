<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Contacts</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list :inset="true">
                <ion-item v-for="(contact, index) in contactStore.contacts" :key="index" @click="moveToChat(contact.contactId)">
                    <ion-label> {{ contact.name }} </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>

</template>

<script setup>

import { useChatViewStore } from '@/stores/ChatViewStore';
import { useContactsStore } from '@/stores/contactStore';
import { IonItem, IonLabel, IonList } from '@ionic/vue';
import { onMounted } from 'vue';

const viewStore = useChatViewStore();
const contactStore = useContactsStore();

function moveToChat(contactId) {
    viewStore.fetchChatFragment();
}

onMounted( () => {
    contactStore.fetchContacts();
})

</script>

<style lang="css"></style>