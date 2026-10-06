import Link from 'next/link';
import { JobsData } from '@/data';
import JobNotFound from '@/components/jobs/JobNotFound';
import JobDescription from '@/components/jobs/JobDescription';
import JobApplyForm from '@/components/jobs/JobApplyform';


type JobIdPublic ={
    params:Promise<{
        jobId:string
    }>
}

 async function JobsPublic( {params}:JobIdPublic ) {

    const {jobId}=await params;
    console.log(jobId);

    const jobb=JobsData.find((job) => {
        return job.id ===jobId 
    });

    if(!jobb) {
        return (
           <JobNotFound/> 
        )
    }

    return (

      <div className="max-w-7xl mx-auto px-6 py-8">
      <Link
        href="/jobs"
        className="font-mono text-sm text-muted-foreground hover:text-accent transition-none"
      >
        ← ALL POSITIONS
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-6">
         <JobDescription job={jobb}/>
         <JobApplyForm/>
      </div>
    </div>
    )

 }


 export default JobsPublic;