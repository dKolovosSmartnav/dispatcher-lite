import { Job, jobRepository } from "@/domain/repositories/jobRepository";

export class localJobRepository implements jobRepository{
    
    fetchRoutePointJobs(routePointId: number): Promise<Job[]> {
        return Promise.reject(new Error(`RoutePoint with ID ${routePointId} not found`));
    }
    fetchJob(jobId: number): Promise<Job> {
        return Promise.reject(new Error(`Job with ID ${jobId} not found`));
    }

}