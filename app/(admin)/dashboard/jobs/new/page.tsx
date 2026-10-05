import Link from 'next/link';


function MyNew() {
    return (
        <div className='flex flex-col items-center justify-center gap-2 h-screen'>
            <h1>NewPage</h1>
            <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/jobs">back to jobs</Link>
        </div>
    )
}

export default MyNew;