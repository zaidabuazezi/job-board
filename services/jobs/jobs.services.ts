import { JobsData } from '@/data';
import {createJobSchema,CreateJobInput} from '@/services/jobs/jobs.validation';
import { Job } from '@/types';
import {z} from "zod"

export type ServiceResult<T>= 
| {success:true; data?: T}
| {success:false; errors?: Record<string,string[]>}

export async function createJobService(input:CreateJobInput):Promise<ServiceResult<Job>> {

     const validated=createJobSchema.safeParse(input);

     if(! validated.success) {
     return {success:false,errors:z.flattenError(validated.error).fieldErrors};
     }


     console.log("CreatingJob",validated);

     return {success:true,data:validated.data as Job};

}



export async function getJobs():Promise<ServiceResult<Job[]>> {

 return {success:true,data:JobsData};

}

export async function getJob(id:string):Promise<ServiceResult<Job>> {
    const job=JobsData.find((job) => {
 
   return job.id === id;

    });

    if(!job) {
        return {success:false,errors:{id:["Job not found"]} };
    }

    return {success:true,data:job};
}