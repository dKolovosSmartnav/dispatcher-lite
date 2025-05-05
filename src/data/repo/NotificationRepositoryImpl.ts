import { remoteNotificationRepository } from "../remote/remoteNotificationRepository";
import { localNotificationRepository } from "../local/localNotificationRepository";
import { Notification, notificationRepository } from "@/domain/repositories/notificationRepository";
import { warn } from "vue";

export class notificationRepositoryImpl implements notificationRepository{

    private remote = new remoteNotificationRepository();
    private local = new localNotificationRepository();
    async fetchNotifications(): Promise<Notification[]> {
        try{
            return await this.local.fetchNotifications();
        }catch(ex){
            console.warn("Remote fetch failed. Trying with local");
            return await this.remote.fetchNotifications();
        }
        
    }

}