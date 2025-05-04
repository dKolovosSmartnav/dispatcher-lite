import { Notification } from "@/domain/repositories/notificationRepository";
import { notificationRepositoryImpl } from "@/data/repo/notificationRepositoryImpl";
import { defineStore } from 'pinia'

const repository = new notificationRepositoryImpl();

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