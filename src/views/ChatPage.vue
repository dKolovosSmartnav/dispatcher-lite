<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonItem, IonInput, IonButton, IonIcon } from '@ionic/vue';
import { ref } from 'vue';
import { sendOutline, sendSharp } from 'ionicons/icons';

const messages = ref([
    { text: 'Hello!', sender: 'user' },
    { text: 'Hi! How can I help you?', sender: 'bot' }
]);

const newMessage = ref('');

const sendMessage = () => {
    if (newMessage.value.trim() === '') return;

    messages.value.push({ text: newMessage.value, sender: 'user' });
    newMessage.value = '';

    // Simulate bot response after a delay
    setTimeout(() => {
        messages.value.push({ text: 'I am a bot! 🤖', sender: 'bot' });
    }, 1000);
};
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chat</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="chat-container">
                <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
                    {{ message.text }}
                </div>
            </div>
        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-item>
                    <ion-input v-model="newMessage" placeholder="Type a message..." @keyup.enter="sendMessage" />
                    <ion-button fill="clear" @click="sendMessage">
                        <ion-icon aria-hidden="true" :icon="sendSharp">
                        </ion-icon>
                    </ion-button>
                </ion-item>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<style scoped>
.chat-container {
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.message {
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
    max-width: 70%;
}

.user {
    align-self: flex-end;
    background-color: #007bff;
    color: white;
}

.bot {
    align-self: flex-start;
    background-color: #e0e0e0;
    color: black;
}
</style>
