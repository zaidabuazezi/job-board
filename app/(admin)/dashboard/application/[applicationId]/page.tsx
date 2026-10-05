

import Link from 'next/link';

type Props ={
    params:Promise<{
        applicationId:string
    }>
}


async function MyjobId ( {params}:Props ) {

   const {applicationId}=await params;
   console.log(applicationId);

   return (
    <div className='flex flex-col gap-2 items-center justify-center h-screen'>
          <h1>applicationID details</h1>
         <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href={`/dashboard/application/${applicationId}/review`}>move to review</Link>
         <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/application">back to application</Link>
    </div>
   )

}

export default MyjobId;
