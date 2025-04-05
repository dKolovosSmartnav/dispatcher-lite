<script setup lang="ts">
import RoutePointItem from '@/composables/RoutePointItem.vue';
import { useRouteStore } from '@/stores/routeStore';
import { IonContent } from '@ionic/vue';
import { onMounted } from 'vue';

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
    <IonContent>
        <RoutePointItem v-for="(item, index) in routeStore.routePoints" :key="index" :routePoint="item" :pointType="routePointType(item.type)"/>
    </IonContent>
</template>
