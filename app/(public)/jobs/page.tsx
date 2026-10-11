import JobsListingWrapper from "@/components/jobs/ـJobListing Wrapper";
import { getJobs } from "@/services/jobs/jobs.services";

async function JobPublic() {

     const result = await getJobs();

     console.log("getJobs result",result);

     if(! result.success) {
        return (
            <div>Error Loading Jobs</div>
        )
     }

     const {data: jobs=[]}=result

    return (
       <JobsListingWrapper jobs={jobs}/>
    )

}

export default JobPublic;