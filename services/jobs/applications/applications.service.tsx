import { ApplicationData } from "@/data";
import { Application, ServiceResult } from "@/types";


export async function getApplications():Promise<ServiceResult<Application[]>> {

  return {success:true,data:ApplicationData};

}