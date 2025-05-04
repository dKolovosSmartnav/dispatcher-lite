import { remoteRouteRepository } from "@/data/remote/remoteRouteRepository";
import { localRouteRepository } from "@/data/local/localRouteRepository";
import { routeRepository } from "@/domain/repositories/routeRepository";
import { RoutePoint } from "@/domain/repositories/routeRepository";

export class routeRepositoryImpl implements routeRepository{
    
    
    private remote = new remoteRouteRepository();
    private local = new localRouteRepository();

    async fetchRoutePoints(): Promise<RoutePoint[]> {
        try{
            return await this.remote.fetchRoutePoints();
        }catch(error){
            console.log('Unable to load data from remote. Accessing DB.');
            return await this.local.fetchRoutePoints();
        }
    }

    async fetchRoutePoint(id: number): Promise<RoutePoint> {
        try{
            return await this.local.fetchRoutePoint(id);
        }catch(localError){
            console.log('Unable to load data from local. Accessing remote.');
            try{
                return await this.remote.fetchRoutePoint(id);
            }catch(remoteError){
                console.log('Unable to load data from remote. Accessing DB.');
                return Promise.reject(new Error(`Unable to load data from local repository`));
            }
        }
    }
    setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }
    setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }

}