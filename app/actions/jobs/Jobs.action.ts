"use server";
import { createJobService } from "@/services/jobs/jobs.services";
import { Job } from "@/types";
import { Tags } from "lucide-react";
import {CreateJobInput} from '@/services/jobs/jobs.validation';


export type CreateJobState= {
   errors?:Record<string,string[]> 
} | undefined

export async function handleCreateJob(prevState:CreateJobState,formData:FormData):Promise<CreateJobState> {

   const raw= Object.fromEntries(formData) ;
   

   const data = {
    ...raw as unknown as CreateJobInput,
    tags: (raw.tags as string).split(","),
    requirements:(raw.requirements as string).split("\n")
   }

   const result=await createJobService(data);
   if(! result.success) {
      return {errors:result.errors};
   }
}