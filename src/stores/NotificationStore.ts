import { Notification } from "@/domain/repositories/NotificationRepository";
import { NotificationRepositoryImpl } from "@/data/repo/NotificationRepositoryImpl";
import { defineStore } from 'pinia'
import { notifications } from "ionicons/icons";

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