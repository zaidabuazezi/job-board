import { CandidateData } from "@/data";
import { Candidate, ServiceResult } from "@/types";


export async function getCandidates():Promise<ServiceResult<Candidate[]>> {

  return {success:true, data:CandidateData}

}