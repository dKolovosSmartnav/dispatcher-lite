import ChatFragment from "@/components/home/chat-tab/ChatFragment.vue";
import ContactsFragment from "@/components/home/chat-tab/ContactsFragment.vue";
import { IonPage } from "@ionic/vue";
import {defineStore} from "pinia";

export const useChatViewStore = defineStore('chat-view', {

    state: () => (
        {
            containerView: ContactsFragment as any
        }
    ),
    actions: {
        fetchChatFragment(){
            this.containerView = ChatFragment;
        },

        fetchContactsFragment(){
            this.containerView = ContactsFragment;
        }
    }
});