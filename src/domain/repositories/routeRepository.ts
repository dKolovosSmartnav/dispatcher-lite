export type Location = {
    lat: Float32Array,
    lng: Float32Array,
    address: string,
    friendlyAddress: string
}

export type RoutePoint = {
    type: 'start' | 'end' | 'pickup' | 'delivery' | 'service',
    location: Location,
    visited: boolean,
    status: 'cancelled' | 'post-poned' | 'serviced'
}

export interface routeRepository{
    fetchRoutePoints(): Promise<RoutePoint[]>
    setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> /*New route point after update */
    setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint>
}