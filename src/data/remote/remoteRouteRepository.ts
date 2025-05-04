import { Location, RoutePoint, routeRepository } from "../../domain/repositories/routeRepository";
import { mockRoute } from "../mock/mockRoute";

export class remoteRouteRepository implements routeRepository {


    fetchRoutePoint(id: number): Promise<RoutePoint> {
        return new Promise((resolve, reject) => {
            const routePoint = mockRoute.find(routePoint => routePoint.id === id);
            if (routePoint) {
                resolve(routePoint);
            } else {
                reject(new Error(`Route point with id ${id} not found`));
            }
        });
    }

    async fetchRoutePoints(): Promise<RoutePoint[]> {
        return new Promise((resolve, reject) => {
            if (mockRoute.length > 0) {
                resolve(mockRoute);
            } else {
                reject(new Error(`No route points found`));
            }
        });
    }
    setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }
    setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }

}

