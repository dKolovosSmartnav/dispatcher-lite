<template>
    <ion-item :class="['route-item', routePoint.status]">
        <div>
            <p>{{ routePoint.location.address }}</p>
            <p>{{ routePoint.location.friendlyAddress }}</p>
            <p>{{ routePoint.type.toUpperCase() }}</p>
            <p>{{ routePoint.status.toUpperCase() }}</p>
        </div>

    </ion-item>
</template>

<script setup>

import { IonItem } from '@ionic/vue';

defineProps({
    routePoint: Object,
    pointType: String
});

</script>

<style>
.route-item {
    margin-top: 4px;
}

.route-item.post-poned {
    color: dodgerblue;
}

.route-item.cancelled {
    color: #c20000;
}

.route-item.serviced {
    color: #00a53a;
}

</style>