import { remoteItemRepository } from "../remote/remoteItemRepository";
import { localItemRepository } from "../local/localItemRepository";
import { Item, itemRepository } from "@/domain/repositories/itemRepository";

const remoteRepo = new remoteItemRepository();
const localRepo = new localItemRepository();

export class itemRepositoryImpl implements itemRepository{
    
    async fetchJobItems(jobId: number): Promise<Item[]> {
        try{
            return await localRepo.fetchJobItems(jobId);
        }catch(localError){
            try{
                return await remoteRepo.fetchJobItems(jobId);
            }catch(remoteError){
                return Promise.reject(remoteError);
            }
        }
    }

    async fetchItem(itemId: number): Promise<Item> {
        try{
            return await localRepo.fetchItem(itemId);
        }catch(localError){
            try{
                return await remoteRepo.fetchItem(itemId);
            }catch(remoteError){
                return Promise.reject(remoteError);
            }
        }
    }

    async fetchItemFromQr(qrCode: string): Promise<Item> {
        try{
            return await localRepo.fetchItemFromQr(qrCode);
        }catch(localError){
            try{
                return await remoteRepo.fetchItemFromQr(qrCode);
            }catch(remoteError){
                return Promise.reject(remoteError);
            }
        }
    }
    
}