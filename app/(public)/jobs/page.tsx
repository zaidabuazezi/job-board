import Link from "next/link";


function JobPublic() {

    return (
        <div className="flex flex-col items-center gap-2 justify-center h-screen">
            <p  className="text-lg font-bold">Jobs</p>
            <div className="text-center">
                <h2>Frontend Engineer</h2>
                <p>Remote position</p>
                <Link className="bg-blue-500 rounded-md px-2 py-1.5 text-white hover:bg-blue-700" href="/jobs/1">View job 1</Link>
            </div>
        </div>
    )

}

export default JobPublic;