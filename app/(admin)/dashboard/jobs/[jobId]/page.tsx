import Link from 'next/link';

type Props ={
    params:Promise<{
        jobId:string
    }>
}


async function MyjobId ( {params}:Props ) {

   const {jobId}=await params;
   console.log(jobId);

   return (
    <div>
          <h1>Jobs Details</h1>
         <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href={`/dashboard/jobs/${jobId}/edit`}>move to editJob</Link>
         <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/jobs">back to Jobs</Link>
    </div>
   )

}

export default MyjobId;