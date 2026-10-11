"use client";
import { useState } from "react";
import ClientPageHeader from '@/components/common/ClientPageHeader';
import { JobsData } from "@/data";
import FilterSidebar from "./FilterSidebar";
import JobCards from "./JobCards";
import { Job } from "@/types";
import JobsProvider from "@/context/jobs/JobsProvider";

type Props= {
  jobs:Job[];
}

function JobsListingWrapper({jobs}: Props) {

   console.log("jobs recieved",jobs);

  return (
     <JobsProvider jobs={jobs}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <ClientPageHeader title="ALL POSITION" subtitle={`${jobs.length} OPEN ROLES`}/>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            <FilterSidebar/>
              <JobCards/>
        </div>
      </div>
      </JobsProvider>
  );
}

export default JobsListingWrapper;