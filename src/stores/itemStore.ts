import { Item } from "@/domain/repositories/itemRepository";
import { itemRepositoryImpl } from "@/data/repo/itemRepositoryImpl";
import { defineStore } from "pinia";

const repository = new itemRepositoryImpl();

export const useItemStore = defineStore('item', {
    state: () => ({
        jobItems: [] as Item[],
        item: {} as Item,
        qrItem: {} as Item
    }),
    actions : {
        async fetchJobItems(jobId: number){
            this.jobItems = await repository.fetchJobItems(jobId);
        },

        async fetchItem(itemId: number){
            this.item = await repository.fetchItem(itemId);
        },

        async fetchQrItem(qrCode: string){
            this.qrItem = await repository.fetchItemFromQr(qrCode);
        }
    }
});