import Link from 'next/link';

type JobIdPublic ={
    params:Promise<{
        jobId:string
    }>
}

 async function JobsPublic( {params}:JobIdPublic ) {

    const {jobId}=await params;
    console.log(jobId);

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
        <h3>myJobsHeader</h3>
        <Link className="bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-700" href="/jobs">back to jobs</Link>
        </div>
    )

 }


 export default JobsPublic;