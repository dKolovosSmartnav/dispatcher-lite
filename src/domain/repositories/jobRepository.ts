export type Job = {
    id: number,           // UUID
    orderNumber: number,   // display order
    serviceType: 'pickup' | 'delivery' | 'service',
    status: 'pending' | 'en_route' | 'arrived' | 'in_progress' | 'completed' | 'cancelled',
    items: Item[],
    qrCode: string, // required → used to scan & find job
    specialInstructions?: string[],
    notes?: string[]
}

export interface jobRepository{
    fetchRoutePointJobs(routePointId: number): Promise<Job[]>
    fetchJob(jobId: number): Promise<Job>
}

import { Item } from "./itemRepository"