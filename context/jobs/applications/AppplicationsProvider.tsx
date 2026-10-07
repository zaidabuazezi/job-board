import React, { useState } from "react";
import ApplicationContext from "./ApplicationsContext";
import { getCandidate } from "@/utils";
import { CandidateData } from "@/data";
import { ApplicationData } from "@/data";
import { Application, Job } from "@/types";
import { JobsData } from "@/data";

const ApplicationsProvider = ({ children }:{children:React.ReactNode}) => {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [jobFilter, setJobFilter] = useState<string>("ALL");
  const [jobs,setJobs]=useState<Job[]>(JobsData);
  const [applications,setApplications]=useState<Application[]>(ApplicationData);

  const filteredApplications = applications.filter((app) => {
    const candidate = getCandidate(app.candidateId, CandidateData);
    const matchesSearch =
      !search ||
      (candidate &&
        (candidate.name.toLowerCase().includes(search.toLowerCase()) ||
          candidate.email.toLowerCase().includes(search.toLowerCase()) ||
          app.role.toLowerCase().includes(search.toLowerCase())));
    const matchesStatus = statusFilter === "ALL" || app.status === statusFilter;
    const matchesJob = jobFilter === "ALL" || app.jobId === jobFilter;
    return matchesSearch && matchesStatus && matchesJob;
  });

  return (
    <ApplicationContext.Provider
      value={{
        search,
        setSearch,
        statusFilter,
        setStatusFilter,
        jobFilter,
        setJobFilter,
        filteredApplications,
        jobs,
        setJobs,
        applications,
        setApplications
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationsProvider;