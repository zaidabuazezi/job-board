import {Button} from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center m-auto">
     <h1 className="text-4xl font-bold">Job Board</h1>
     <p className="text-lg">Welcome To Production App</p>
     <Button variant="destructive">Browse Job</Button>
     </div>
  );
}

