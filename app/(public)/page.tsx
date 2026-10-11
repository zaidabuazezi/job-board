import JobsListingWrapper  from "@/components/jobs/ـJobListing Wrapper";
import { FeaturedJobs } from "@/components/landing/FeaturedJobs";
import { HeroSection } from "@/components/landing/HeroSection";
import { getJob, getJobs } from "@/services/jobs/jobs.services";

export default async function Home() {
 
  const result=await getJobs();

  if(! result.success) {
    return (
      <div>Error Loading jobs</div>
    )
  }

  const {data:jobs=[]}=result;

  return (
    <>
     <HeroSection/>
     <FeaturedJobs jobs={jobs}/>
     </>  
     
  );
}
