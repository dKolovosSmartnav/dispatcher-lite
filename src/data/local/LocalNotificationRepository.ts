import { Notification, NotificationRepository } from "@/domain/repositories/NotificationRepository";

export class LocalNotificationRepository implements NotificationRepository{
    
    async fetchNotifications(): Promise<Notification[]> {
        return new Promise( resolve => {
            setTimeout(() => {
                resolve([
    
                    { 
                        type: 'info',
                        message: 'Local: Hello there!',
                        timestamp: 'Tuesday 29/02 2024',
                        senderName: 'Control Center',
                        senderChannelId: 'controlCenterChannen'
                    },
                    { 
                        type: 'alert',
                        message: 'Local: Alert Hello there!',
                        timestamp: 'Tuesday 29/02 2024',
                        senderName: 'Control Center',
                        senderChannelId: 'controlCenterChannen'
                    },
                    { 
                        type: 'critical-alert',
                        message: 'Local: Critical Alert Hello there!',
                        timestamp: 'Tuesday 29/02 2024',
                        senderName: 'Control Center',
                        senderChannelId: 'controlCenterChannen'
                    }
                ])
            }, 1000);
           });
    }

}