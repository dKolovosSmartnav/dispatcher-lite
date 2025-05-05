import { Notification, notificationRepository } from "@/domain/repositories/notificationRepository";

export class remoteNotificationRepository implements notificationRepository {

    async fetchNotifications(): Promise<Notification[]> {
        return new Promise(resolve => {
            resolve(mockNotifications);
        });
    }

}

const mockNotifications: Notification[] = [
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
];