import Link from 'next/link'; 

function DashboardPage() {
    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen'>
            <h1>Dashboard page</h1>
           <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/jobs">move for jobs</Link>
           <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/application">move for application</Link>
        </div>
    )
}


export default DashboardPage;