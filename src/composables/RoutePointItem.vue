<template>
    <div :class="['route-item', pointType]">
        <p>{{ routePoint.location.address }}</p>
        <p>{{ routePoint.location.friendlyAddress }}</p>
        <p>{{ routePoint.type.toUpperCase() }}</p>
        <p>{{ routePoint.status.toUpperCase() }}</p>
    </div>

</template>

<script setup>

defineProps({ 
    routePoint: Object,
    pointType: String
 });

</script>

<style>

.route-item{
    padding: 8px;
    border-bottom: 1px solid #bbb;
}

.route-item.service{
    
}

.route-item.delivery{

}

.route-item.pickup{

}

.route-item.start{

}

.route-item.finish{

}

</style>