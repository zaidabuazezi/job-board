"use client";
import ApplicationsProvider from "@/context/jobs/applications/AppplicationsProvider";
import ApplicationsFilter from "./ApplicationsFilter";
import ApplicationsStatusSummary from "./ApplicationStatusSummary";
import ApplicationsTable from "./ApplicationsTable";
import { Job } from "@/types";


type Props = {
    jobs:Job[]
}

function ApplicationsListingWrapper({jobs}:Props) {
    return (
        <ApplicationsProvider jobs={jobs}>
            <ApplicationsFilter/>
            <ApplicationsStatusSummary/>
            <ApplicationsTable/>
        </ApplicationsProvider>
    )
}

export default ApplicationsListingWrapper;