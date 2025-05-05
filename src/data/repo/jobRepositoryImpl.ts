import { remoteJobRepository } from "../remote/remoteJobRepository";
import { localJobRepository } from "../local/localJobRepository";
import { Job, jobRepository } from "@/domain/repositories/jobRepository";

const remoteRepo = new remoteJobRepository();
const localRepo = new localJobRepository();

export class jobRepositoryImpl implements jobRepository {

    async fetchRoutePointJobs(routePointId: number): Promise<Job[]> {
        try {
            return await localRepo.fetchRoutePointJobs(routePointId);
        } catch (localError) {
            try {
                return await remoteRepo.fetchRoutePointJobs(routePointId);
            } catch (remoteError) {
                throw new Error(`RoutePoint with ID ${routePointId} not found`);
            }
        }
    }

    async fetchJob(jobId: number): Promise<Job> {
        try{
            return await localRepo.fetchJob(jobId);
        }catch(localError) {
            try{
                return await remoteRepo.fetchJob(jobId);
            }catch(remoteError) {
                throw new Error(`Job with ID ${jobId} not found`); 
            }
        }
    }

} 