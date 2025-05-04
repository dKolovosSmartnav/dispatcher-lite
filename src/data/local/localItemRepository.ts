import { Item, itemRepository } from "@/domain/repositories/itemRepository";
import { itemRepositoryImpl } from "../repo/itemRepositoryImpl";
import { mockRoute } from "../mock/mockRoute";

const repository = new itemRepositoryImpl();

export class localItemRepository implements itemRepository{
    
    fetchJobItems(jobId: number): Promise<Item[]> {
        return Promise.reject(new Error(`Items for Job with id: ${jobId} not found!`));
    }
    fetchItem(itemId: number): Promise<Item> {
        return Promise.reject(new Error(`Item with id: ${itemId} not found!`));
    }
    fetchItemFromQr(qrCode: string): Promise<Item> {
        return Promise.reject(new Error(`Item with qrCode: ${qrCode} not found!`));
    }
    
}