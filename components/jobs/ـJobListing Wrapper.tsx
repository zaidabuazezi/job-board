"use client";
import { useState } from "react";
import PageHeader from '@/components/common/PageHeader';
import { JobsData } from "@/data";
import FilterSidebar from "./FilterSidebar";
import JobCards from "./JobCards";
function JobsListingWrapper() {

  return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <PageHeader title="ALL POSITION" subtitle={`${JobsData.length} OPEN ROLES`}/>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            <FilterSidebar/>
              <JobCards/>
        </div>
      </div>
  );
}

export default JobsListingWrapper;