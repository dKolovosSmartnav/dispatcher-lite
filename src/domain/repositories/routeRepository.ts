export type Contact = {
    name: string,
    phoneNumber: string,
    floor?: string,
    department?: string,
    nameUnder?: string,
    notes?: string
}

export type Location = {
    lat: number,
    lng: number,
    address: string,
    friendlyAddress?: string,
    specialInstructions?: string[],
    notes?: string[]
}

export type Item = {
    description: string,
    quantity: number,
    qrCode: string, // required → used to scan & find item inside job
    specialInstructions?: string[],
    notes?: string[]
}

export type Job = {
    serviceType: 'pickup' | 'delivery' | 'service',
    status: 'pending' | 'en_route' | 'arrived' | 'in_progress' | 'completed' | 'cancelled',
    items: Item[],
    qrCode: string, // required → used to scan & find job
    specialInstructions?: string[],
    notes?: string[]
}

export type RoutePoint = {
    type: 'stop',
    location: Location,
    visited: boolean,
    status: 'cancelled' | 'postponed' | 'serviced',
    timeWindow: string,
    contacts: Contact[],
    jobs: Job[]
}


export interface routeRepository{
    fetchRoutePoints(): Promise<RoutePoint[]>
    setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> /*New route point after update */
    setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint>
}