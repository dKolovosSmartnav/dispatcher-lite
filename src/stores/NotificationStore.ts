import { Notification } from "@/domain/repositories/NotificationRepository";
import { NotificationRepositoryImpl } from "@/data/repo/NotificationRepositoryImpl";
import { defineStore } from 'pinia'

const repository = new NotificationRepositoryImpl();

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        notifications: [] as Notification[]
    }),
    actions: {
        async fetchNotifications() {
            this.notifications = await repository.fetchNotifications();
        }
    }
});