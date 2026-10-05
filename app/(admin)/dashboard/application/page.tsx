import Link from 'next/link';


function MyApplication() {
    return (
        <div className='flex flex-col items-center justify-center gap-2 h-screen'>
            <h1>ApplicationPage</h1>
            <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/application/1">Application 1</Link>
            <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/application/2">Application 2</Link>
            <Link className='bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-300' href="/dashboard/application/3">Application 3</Link>
        </div>
    )
}

export default MyApplication;