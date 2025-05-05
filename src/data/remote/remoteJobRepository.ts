import { Job, jobRepository } from "@/domain/repositories/jobRepository";
import { mockRoute } from "../mock/mockRoute";

export class remoteJobRepository implements jobRepository {
    fetchRoutePointJobs(routePointId: number): Promise<Job[]> {
        const routePoint = mockRoute.find(rp => rp.id === routePointId);
        if ( routePoint ){
            return Promise.resolve(routePoint.jobs);
        }else{
            return Promise.reject(new Error(`RoutePoint with ID ${routePointId} not found`));
        }
    }
    fetchJob(jobId: number): Promise<Job> {
        for (const routePoint of mockRoute) {
            const job = routePoint.jobs.find(j => j.id === jobId);
            if (job) {
              return Promise.resolve(job);
            }
          }
          return Promise.reject(new Error(`Job with ID ${jobId} not found`));
    }
    
}