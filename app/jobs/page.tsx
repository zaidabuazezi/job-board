import Link from "next/link";

function JobsPage() {

   return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Jobs</h1>
        <div className="border-2 border-gray-300 rounded-md p-4 text-center ">
        <p className="text-lg">FrontEnd Developer</p>
        <p>remote position</p>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 block mt-5" href="/jobs/1">View job</Link>
        </div>
    </div>
   )

}

export default JobsPage;