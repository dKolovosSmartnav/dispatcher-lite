<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <!-- ⬅️ Custom Back Button -->
                <IonButtons slot="start">
                    <IonButton @click="switchToContactsFragment">
                        <IonIcon :icon="arrowBack" class="back-icon"/>
                    </IonButton>
                </IonButtons>

                <IonTitle>Chat</IonTitle>
            </IonToolbar>
        </IonHeader>
        <ion-content>
            <div class="chat-container">
                <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]"
                    @click="playAudio(message)">
                    <template v-if="message.type == 'text'">
                        {{ message.text }}
                    </template>
                    <template v-else-if="messages.type == 'audio'">
                        <IonIcon :icon="playOutline" class="play-audio-icon" v-if="!message.isPlaying"></IonIcon>
                        <IonIcon :icon="pauseOutline" class="play-audio-icon" v-else></IonIcon>
                    </template>
                </div>
            </div>
        </ion-content>
        <IonFooter>
            <IonToolbar>
                <IonItem>
                    <IonInput v-model="newMessage" placeholder="Type a message..." @keyup.enter="sendMessage" />
                    <IonButton fill="clear" @touchstart="startRecording" @touchend="stopRecording"
                        @mousedown="startRecording" @mouseup="startRecording" class="mic-button">
                        <IonIcon aria-hidden="true" :icon="isRecording ? stopSharp : micSharp" class="mic-icon">
                        </IonIcon>
                    </IonButton>
                    <IonButton fill="clear" @click="sendMessage" class="send-button">
                        <IonIcon aria-hidden="true" :icon="sendSharp" class="send-icon">
                        </IonIcon>
                    </IonButton>
                </IonItem>
            </IonToolbar>
        </IonFooter>
    </IonPage>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonItem, IonInput, IonButton, IonIcon, IonButtons } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { micSharp, sendSharp, stopSharp, playOutline, pauseOutline, arrowBack } from 'ionicons/icons';
import { VoiceRecorder } from 'capacitor-voice-recorder';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(async () => {
    contactId.value = route.query.contactId;
    const permissionResult = await VoiceRecorder.hasAudioRecordingPermission();
    hasPermission.value = permissionResult.value;
});


const messages = ref([
    { text: 'Hello!', sender: 'user', type: 'text' },
    { text: 'Hi! How can I help you?', sender: 'bot', type: 'text' }
]);

const newMessage = ref('');
const isRecording = ref(false);
const audioPlayer = ref(new Audio());
const hasPermission = ref(false);
const contactId = ref(-1);

const sendMessage = () => {
    if (newMessage.value.trim() === '') return;

    messages.value.push({ text: newMessage.value, sender: 'user', type: 'text' });
    newMessage.value = '';

    // Simulate bot response after a delay
    setTimeout(() => {
        messages.value.push({ text: 'I am a bot! 🤖', sender: 'bot', type: 'text' });
    }, 1000);
};

async function hasRecordingPermission() {
    return hasPermission.value;
}

const getPermissionResult = async () => {

    const permission = await VoiceRecorder.requestAudioRecordingPermission();
    if (permission.value) {
        return true;
    } else {
        alert("Recording permission is denied");
        return false;
    }

}

async function startRecording() {

    if (!isRecording.value) {
        //Start recording
        if (!hasPermission.value) {
            hasPermission.value = getPermissionResult();
            return;
        } else {
            await VoiceRecorder.startRecording();
            isRecording.value = true;
        }

    }
}

async function stopRecording() {
    if (isRecording.value) {
        const result = await VoiceRecorder.stopRecording();
        if (result.value && result.value.recordDataBase64) {
            const audioBlob = base64ToBlob(result.value.recordDataBase64, 'audio/mp3');
            const audioUrl = URL.createObjectURL(audioBlob);
            messages.value.push({
                id: messages.value.length + 1,
                audioUrl,
                sender: 'user',
                type: 'audio',
                isPlaying: false
            });

        }
        isRecording.value = false;
    }
}

const playAudio = (message) => {
    if (!message.audioUrl) { return; }

    if (!message.isPlaying) {
        //Play audio
        audioPlayer.value.src = message.audioUrl;
        audioPlayer.value.play();
        message.isPlaying = true;
        audioPlayer.value.onended = () => {
            message.isPlaying = false; // Reset the icon when audio ends
        };
    } else {
        //stop audio
        audioPlayer.value.pause();
        message.isPlaying = false;
    }
}

const base64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
};

async function switchToContactsFragment() {
    router.back();
}

</script>

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


/* Microphone Button */
.mic-button {
    min-width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.back-icon,
.mic-icon {
    font-size: 24px;
    color: #007bff;
}


/* Send Button */
.send-button {
    min-width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.send-icon {
    font-size: 24px;
    color: #007bff;
}

/* Audio Play Icon */
.play-audio-icon {
    font-size: 24px;
    color: #007bff;
    margin-left: 8px;
}
</style>
