import React, { useState } from "react";
import ApplicationContext from "./ApplicationsContext";
import { getCandidate } from "@/utils";
import { Application, Candidate, Job } from "@/types";

const ApplicationsProvider = ({jobs=[],applications=[],candidates=[] ,children }:{jobs:Job[],applications:Application[],candidates:Candidate[],children:React.ReactNode}) => {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [jobFilter, setJobFilter] = useState<string>("ALL");
  const [jobState]=useState<Job[]>(jobs);
  const [applicationsState]=useState<Application[]>(applications);
  const[candidatesState]=useState<Candidate[]>(candidates);

  const filteredApplications = applicationsState.filter((app) => {
    const candidate = getCandidate(app.candidateId, candidatesState);
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
        jobs:jobState,
        applications:applicationsState,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationsProvider;