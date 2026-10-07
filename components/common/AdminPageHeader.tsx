"use client";
import {Button} from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type Props = {
    title:string 
    subtitle:string
    actionButtonLink:string
    actionButtonVariant:"accent" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    actionButtonText:string
}

function AdminPageHeader({title,subtitle,actionButtonLink,actionButtonVariant="default",actionButtonText}:Props) {
 
    const navigate=useRouter();
 
    const CreateJob=() => {
        navigate.push(actionButtonLink);
    }

    return (
        <>
       <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-heading font-bold">{title}</h1>
            <p className="font-mono text-sm text-muted-foreground mt-1">
              {subtitle}
            </p>
          </div>
          <Button onClick={CreateJob} variant={actionButtonVariant}>{actionButtonText}</Button>
       </div>
    </>
    )
}

export default AdminPageHeader;