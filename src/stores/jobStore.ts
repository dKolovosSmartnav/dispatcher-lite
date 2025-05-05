import { Job } from "@/domain/repositories/jobRepository";
import { jobRepositoryImpl } from "@/data/repo/jobRepositoryImpl";
import { defineStore } from "pinia";

const repository = new jobRepositoryImpl();

export const useJobStore = defineStore('job', {
    state: () => ({
        routeJobs: [] as Job[],
        job: {} as Job
    }),
    actions: {
        async fetchRouteJobs(routeId: number){
            this.routeJobs = await repository.fetchRoutePointJobs(routeId);
        },

        async fetchJob(jobId: number){
            this.job = await repository.fetchJob(jobId);
        }
    }
});