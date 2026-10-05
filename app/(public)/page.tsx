import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";


export default function Home() {
  return (
    
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
     <h1 className="text-4xl font-bold">Job Board</h1>
     <p className="text-lg">Welcome To Production App</p>
     <Button variant="default">Default</Button>
     </div>
  );
}
