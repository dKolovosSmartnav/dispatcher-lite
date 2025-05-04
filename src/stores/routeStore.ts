import { RoutePoint, Location } from "@/domain/repositories/routeRepository";
import { routeRepositoryImpl } from "@/data/repo/routeRepositoryImpl";
import { defineStore } from "pinia";

const repository = new routeRepositoryImpl();

export const useRouteStore = defineStore('route', {
    state: () => ({
        routePoints: [] as RoutePoint[],
        routePoint: {} as RoutePoint
    }),
    actions: {
        async fetchRoutePoints() {
            this.routePoints = await repository.fetchRoutePoints();
        },

        async fetchRoutePoint(id: number) {
            this.routePoint = await repository.fetchRoutePoint(id);
        }
    }
});