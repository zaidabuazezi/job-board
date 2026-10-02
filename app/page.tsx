import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center m-auto">
     <h1 className="text-4xl font-bold">Job Board</h1>
     <p className="text-lg">Welcome To Production App</p>
     <Link  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" href="/jobs">Browse Jobs</Link>
     </div>
  );
}

