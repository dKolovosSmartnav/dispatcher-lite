import { Location, RoutePoint, routeRepository } from "@/domain/repositories/routeRepository";

export class localRouteRepository implements routeRepository {

    async fetchRoutePoints(): Promise<RoutePoint[]> {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    resolve(
                        [
                            {
                                type: 'start',
                                location: {
                                    lat: new Float32Array([37.7749]),
                                    lng: new Float32Array([-122.4194]),
                                    address: '1 Market St, San Francisco, CA',
                                    friendlyAddress: 'San Francisco Start Point',
                                },
                                visited: true,
                                status: 'serviced',
                            },
                            {
                                type: 'pickup',
                                location: {
                                    lat: new Float32Array([37.7849]),
                                    lng: new Float32Array([-122.4094]),
                                    address: '500 Howard St, San Francisco, CA',
                                    friendlyAddress: 'Howard Pickup',
                                },
                                visited: true,
                                status: 'serviced',
                            },
                            {
                                type: 'delivery',
                                location: {
                                    lat: new Float32Array([37.7949]),
                                    lng: new Float32Array([-122.3994]),
                                    address: '100 Pine St, San Francisco, CA',
                                    friendlyAddress: 'Pine Delivery',
                                },
                                visited: false,
                                status: 'post-poned',
                            },
                            {
                                type: 'service',
                                location: {
                                    lat: new Float32Array([37.8049]),
                                    lng: new Float32Array([-122.3894]),
                                    address: 'Pier 39, San Francisco, CA',
                                    friendlyAddress: 'Tourist Service Spot',
                                },
                                visited: false,
                                status: 'cancelled',
                            },
                            {
                                type: 'pickup',
                                location: {
                                    lat: new Float32Array([37.7740]),
                                    lng: new Float32Array([-122.4313]),
                                    address: '200 Dolores St, San Francisco, CA',
                                    friendlyAddress: 'Dolores Pickup',
                                },
                                visited: true,
                                status: 'serviced',
                            },
                            {
                                type: 'delivery',
                                location: {
                                    lat: new Float32Array([37.7689]),
                                    lng: new Float32Array([-122.4148]),
                                    address: 'Castro St, San Francisco, CA',
                                    friendlyAddress: 'Castro Delivery',
                                },
                                visited: false,
                                status: 'post-poned',
                            },
                            {
                                type: 'service',
                                location: {
                                    lat: new Float32Array([37.7599]),
                                    lng: new Float32Array([-122.4148]),
                                    address: 'Mission Dolores Park, San Francisco, CA',
                                    friendlyAddress: 'Park Maintenance Service',
                                },
                                visited: true,
                                status: 'serviced',
                            },
                            {
                                type: 'pickup',
                                location: {
                                    lat: new Float32Array([37.7610]),
                                    lng: new Float32Array([-122.4241]),
                                    address: '16th St, San Francisco, CA',
                                    friendlyAddress: '16th Street Pickup',
                                },
                                visited: true,
                                status: 'serviced',
                            },
                            {
                                type: 'delivery',
                                location: {
                                    lat: new Float32Array([37.7510]),
                                    lng: new Float32Array([-122.4477]),
                                    address: 'Twin Peaks Blvd, San Francisco, CA',
                                    friendlyAddress: 'Twin Peaks Delivery',
                                },
                                visited: false,
                                status: 'cancelled',
                            },
                            {
                                type: 'end',
                                location: {
                                    lat: new Float32Array([37.7430]),
                                    lng: new Float32Array([-122.4750]),
                                    address: 'Ocean Beach, San Francisco, CA',
                                    friendlyAddress: 'San Francisco End Point',
                                },
                                visited: false,
                                status: 'post-poned',
                            }
                        ]

                    )
                },
                1000
            );
        })
    }
    setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }
    setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }

}