<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Contacts</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            
        </ion-content>
    </ion-page>

</template>

<script setup>

import { useChatViewStore } from '@/stores/ChatViewStore';

const viewStore = useChatViewStore();

function moveToChat() {
    viewStore.fetchChatFragment();
}

</script>

<style lang="css"></style>