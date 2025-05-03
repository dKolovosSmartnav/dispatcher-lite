<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <!-- ⬅️ Custom Back Button -->
                <IonButtons slot="start">
                    <IonButton @click="navigateBack">
                        <IonIcon :icon="arrowBack" class="back-icon" />
                    </IonButton>
                </IonButtons>

                <IonTitle>Job Information</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>

            

        </IonContent>
    </IonPage>
</template>

<script setup lang="ts">

import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonIcon, IonTitle } from "@ionic/vue";
import { arrowBack } from 'ionicons/icons';
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const jobObject = ref();

onMounted(async () => {
    jobObject.value = route.query.job;

});

async function navigateBack() {
    router.back();
}

</script>