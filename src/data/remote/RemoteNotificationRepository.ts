import { Notification, NotificationRepository } from "@/domain/repositories/NotificationRepository";

export class RemoteNotificationRepository implements NotificationRepository{

    async fetchNotifications(): Promise<Notification[]> {
       return new Promise( resolve => {
        setTimeout(() => {
            resolve([

                { 
                    type: 'info',
                    message: 'Remote: Hello there!',
                    timestamp: 'Tuesday 29/02 2024',
                    senderName: 'Control Center',
                    senderChannelId: 'controlCenterChannen'
                },
                { 
                    type: 'alert',
                    message: 'Remote: Alert Hello there!',
                    timestamp: 'Tuesday 29/02 2024',
                    senderName: 'Control Center',
                    senderChannelId: 'controlCenterChannen'
                },
                { 
                    type: 'critical-alert',
                    message: 'Remote: Critical Alert Hello there!',
                    timestamp: 'Tuesday 29/02 2024',
                    senderName: 'Control Center',
                    senderChannelId: 'controlCenterChannen'
                }
            ])
        }, 1000)
       });
    }

}