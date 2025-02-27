<template>
    <ion-content>

        <div class="notification-grid">
            <div class="bubble alert-bubble">
                <p>This is an alert notification bubble!</p>
            </div>
            <div class="bubble info-bubble">
                <p>This is a simple info bubble!</p>
            </div>
            <div class="bubble critical-alert-bubble">
                <p>This is a crritical alert notiication bubble!</p>
            </div>
        </div>

    </ion-content>
</template>

<script setup lang="ts">


</script>

<style lang="css" scoped>
.bubble.alert-bubble {}

.bubble.info-bubble {}

.bubble.critical-alert-bubble {

    background-color: red;
    color: whitesmoke;
}

.bubble {
    display: flex;
    align-content: center;
    align-content: center;
    border-radius: 10px;
    padding: 5px;
    width: inherit;
    height: 100%;
    background-color: var(--ion-color-primary);
}

.bubble p {
    text-align: center;
    width: 100%;
    word-wrap: break-word;
    white-space: normal;
    overflow-wrap: break-word;
}


.notification-grid {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    /* flex-direction: column; Stack items vertically */
    /* align-items: center; Center notifications */
    gap: 10px;
    /* Space between notifications */
    height: auto;
    width: inherit;
    margin-top: 10px;
}

@media (min-width: 600px) {
    .bubble {}
}

/* Desktop: Three Columns */
@media (min-width: 900px) {
    .bubble {}
}
</style>