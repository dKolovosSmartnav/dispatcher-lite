import { RemoteNotificationRepository } from "../remote/RemoteNotificationRepository";
import { LocalNotificationRepository } from "../local/LocalNotificationRepository";
import { Notification, NotificationRepository } from "@/domain/repositories/NotificationRepository";
import { warn } from "vue";

export class NotificationRepositoryImpl implements NotificationRepository{

    private remote = new RemoteNotificationRepository();
    private local = new LocalNotificationRepository();
    async fetchNotifications(): Promise<Notification[]> {
        try{
            return await this.local.fetchNotifications();
        }catch(ex){
            console.warn("Remote fetch failed. Trying with local");
            return await this.remote.fetchNotifications();
        }
        
    }

}