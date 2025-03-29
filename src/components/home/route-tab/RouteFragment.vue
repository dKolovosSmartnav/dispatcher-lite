<script setup lang="ts">
import { useRouteStore } from '@/stores/routeStore';
import { IonContent } from '@ionic/vue';
import { onMounted } from 'vue';

const routeStore = useRouteStore();

const routePointType = (type: string) => {
    switch(type){
        case 'start': return 'start';
        case 'end' : return 'end';
        case 'delivery': return 'delivery';
        case 'pickup': return 'pickup';
        case 'service': return 'service';
        default: return ''
    }
}

onMounted( () => {
    routeStore.fetchRoutePoints();
})

</script>

<template>
    <IonContent>
        <div class="route-grid">
            <div v-for="(routePoint, index) in routeStore.routePoints" :key="index"
                :class="['point' , routePointType(routePoint.type)]">
                <p>{{ routePoint.location.address }}</p>
                <p>{{ routePoint.location.friendlyAddress }}</p>
                <p>{{ routePoint.type.toUpperCase() }}</p>
                <p>{{ routePoint.status.toUpperCase() }}</p>
            </div>
        </div>
    </IonContent>
</template>

<style lang="css" scoped>

.route-grid {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    /* flex-direction: column; Stack items vertically */
    /* align-items: center; Center notifications */
    /* Space between notifications */
    gap: 5px;
    height: auto;
    width: inherit;
    margin-top: 10px;
    margin-bottom: 10px;

}

.point {
    display: flex;
    align-content: center;
    align-content: center;
    padding: 5px;
    width: inherit;
    height: 100%;

    border-bottom: 5px;
    border-color: gray;
}

.point.start{
    background-color: rgb(49, 87, 49);
}

.point.end{
    background-color: rgb(49, 87, 49);
}

.point.delivery{
    background-color: rgb(24, 24, 92);
}

.point.pickup{
    background-color: rgb(2, 55, 87);
}

.point.service{
    background-color: darkgrey;
}

@media (min-width: 600px) {
    .point {}
}

/* Desktop: Three Columns */
@media (min-width: 900px) {
    .point {}
}

</style>