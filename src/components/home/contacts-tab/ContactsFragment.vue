<template>

    <IonPage>

        <ion-content>
            <ion-list :inset="true">
                <ion-item v-for="(contact, index) in contactStore.contacts" :key="index"
                    @click="moveToChat(contact.contactId)">
                    <ion-label> {{ contact.name }} </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>

    </IonPage>

</template>

<script setup>

import { useContactsStore } from '@/stores/contactStore';
import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const contactStore = useContactsStore();
const router = useRouter();

async function moveToChat(contactId) {
    router.push({ path: '/chat', query: { contactId: contactId } });
}

onMounted(() => {
    contactStore.fetchContacts();
})

</script>

<style lang="css"></style>