<script setup lang="ts">
import RoutePointItem from '@/composables/RoutePointItem.vue';
import { useRouteStore } from '@/stores/routeStore';
import { IonContent } from '@ionic/vue';
import { onMounted } from 'vue';
import { IonList } from '@ionic/vue';

const routeStore = useRouteStore();

const routePointType = (type: string) => {
    switch (type) {
        case 'start': return 'start';
        case 'end': return 'end';
        case 'delivery': return 'delivery';
        case 'pickup': return 'pickup';
        case 'service': return 'service';
        default: return ''
    }
}

onMounted(() => {
    routeStore.fetchRoutePoints();
})

</script>

<template>
    <ion-content>
        <ion-list>
            <RoutePointItem v-for="(item, index) in routeStore.routePoints" :key="index" :routePoint="item" :pointType="routePointType(item.type)"/>
        </ion-list>
    </ion-content>
</template>

<style>
ion-content {
  --padding-bottom: var(--ion-safe-area-bottom, 0px);
}
</style>