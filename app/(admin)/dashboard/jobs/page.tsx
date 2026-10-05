import Link from 'next/link';

function MyJobs() {
    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen'>
            <h1 className="text-lg font-bold">MyJobs</h1>
            <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/jobs/new">move for new</Link>
            <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/jobs/1">move for job 1</Link>
            <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/jobs/2">move for job 2</Link>
            <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/jobs/3">move for job 3</Link>
        </div>
    )
}

export default MyJobs;