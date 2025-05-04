import { Location, RoutePoint, routeRepository } from "../../domain/repositories/routeRepository";
import { mockRoute } from "../mock/mockRoute";

export class remoteRouteRepository implements routeRepository {

    async fetchRoutePoints(): Promise<RoutePoint[]> {
        return new Promise(resolve => {
            resolve(mockRoute);
        })
    }
    setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }
    setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }

}

