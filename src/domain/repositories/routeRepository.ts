export type RoutePointContact = {
    id: number,
    name: string,
    phoneNumber: string,
    floor?: string,
    department?: string,
    nameUnder?: string,
    notes?: string
}

export type Location = {
    id: number,
    lat: number,
    lng: number,
    address: string,
    friendlyAddress?: string,
    specialInstructions?: string[],
    notes?: string[]
}

export type RoutePoint = {
    id: number,            // UUID
    orderNumber: number,   // display order
    type: 'stop',
    location: Location,
    visited: boolean,
    status: 'cancelled' | 'postponed' | 'serviced',
    timeWindow: string,
    contacts: RoutePointContact[],
    jobs: Job[]
}


export interface routeRepository {
    fetchRoutePoints(): Promise<RoutePoint[]>
    setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> /*New route point after update */
    setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint>
}

import { Job } from "./jobRepository";