import { Item, itemRepository } from "@/domain/repositories/itemRepository";
import { mockRoute } from "../mock/mockRoute";

export class remoteItemRepository implements itemRepository{
    fetchJobItems(jobId: number): Promise<Item[]> {
        for(const routePoint of mockRoute){
            const job = routePoint.jobs.find( job => job.id === jobId);
            if(job){
                return Promise.resolve(job.items);
            }
        }
        return Promise.reject(`Job with id: ${jobId} not found!`);
    }

    fetchItem(itemId: number): Promise<Item> {
        for(const routePoint of mockRoute){
            for( const job of routePoint.jobs){
                const item = job.items.find( item => item.id === itemId);
                if(item){
                    return Promise.resolve(item);
                }
            }
        }
        return Promise.reject(`Item with id: ${itemId} not found!`)
    }

    fetchItemFromQr(qrCode: string): Promise<Item> {
        for(const routePoint of mockRoute){
            for( const job of routePoint.jobs){
                const item = job.items.find( item => item.qrCode === qrCode);
                if(item){
                    return Promise.resolve(item);
                }
            }
        }
        return Promise.reject(`Item with qrCode: ${qrCode} not found!`)
    }
    
}