import { Contact } from "@/domain/repositories/contactRepository";
import { contactRepositoryImpl } from "@/data/repo/contactRepositoryImpl";
import { defineStore } from "pinia";
import { c } from "vite/dist/node/types.d-aGj9QkWt";

const repository = new contactRepositoryImpl();

export const useContactsStore = defineStore('contacts', {
    state: () => (
        {
            contacts: [] as Contact[],
            contact: {} as Contact,          
        }
    ),
    actions: {
        async fetchContacts(){
            this.contacts = await repository.fetchContacts();
        },

        async fetchContact(contactId: Int32Array){
            this.contact = await repository.fetchContact(contactId);
        }
    }
});