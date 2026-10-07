"use client";
import ApplicationsProvider from "@/context/jobs/applications/AppplicationsProvider";
import ApplicationsFilter from "./ApplicationsFilter";
import ApplicationsStatusSummary from "./ApplicationStatusSummary";
import ApplicationsTable from "./ApplicationsTable";

function ApplicationsListingWrapper() {
    return (
        <ApplicationsProvider>
            <ApplicationsFilter/>
            <ApplicationsStatusSummary/>
            <ApplicationsTable/>
        </ApplicationsProvider>
    )
}

export default ApplicationsListingWrapper;