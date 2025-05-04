export type Notification = {
    type: 'info' | 'alert' | 'critical-alert',
    message: string,
    timestamp: string,
    senderName: string,
    senderChannelId: string
}

export interface notificationRepository{
    fetchNotifications(): Promise<Notification[]>
}