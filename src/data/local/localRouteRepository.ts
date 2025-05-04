import { Location, RoutePoint, routeRepository } from "@/domain/repositories/routeRepository";

export class localRouteRepository implements routeRepository {

    async fetchRoutePoint(id: number): Promise<RoutePoint> {
        return await Promise.reject(new Error(`Unable to load data from local repository`));
    }

    async fetchRoutePoints(): Promise<RoutePoint[]> {
        return await Promise.reject(new Error(`Unable to load data from local repository`));
    }
    async setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> {
        return await Promise.reject(new Error(`Unable to load data from local repository`));
    }
    async setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint> {
        return await Promise.reject(new Error(`Unable to load data from local repository`));
    }

}