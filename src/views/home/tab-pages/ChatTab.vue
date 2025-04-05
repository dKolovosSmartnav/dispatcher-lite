<script setup>
import ChatFragment from '@/components/home/chat-tab/ChatFragment.vue';
import ContactsFragment from '@/components/home/chat-tab/ContactsFragment.vue';
import { useChatViewStore } from '@/stores/ChatViewStore';
import { defineStore } from 'pinia';
import { onMounted } from 'vue';

const chatView = useChatViewStore();

onMounted(() => {
    chatView.fetchContactsFragment();
});

</script>


<template>
    
    <component :is="chatView.containerView" />
</template>
