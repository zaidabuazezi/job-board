"use client";
import ApplicationsProvider from "@/context/jobs/applications/AppplicationsProvider";
import ApplicationsFilter from "./ApplicationsFilter";
import ApplicationsStatusSummary from "./ApplicationStatusSummary";
import ApplicationsTable from "./ApplicationsTable";
import { Application, Candidate, Job } from "@/types";


type Props = {
    jobs:Job[];
    applications:Application[];
    candidates:Candidate[];
}

function ApplicationsListingWrapper({jobs,applications,candidates}:Props) {
    return (
        <ApplicationsProvider jobs={jobs} applications={applications} candidates={candidates}>
            <ApplicationsFilter/>
            <ApplicationsStatusSummary/>
            <ApplicationsTable/>
        </ApplicationsProvider>
    )
}

export default ApplicationsListingWrapper;