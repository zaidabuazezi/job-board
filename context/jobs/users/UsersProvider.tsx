import { useState } from "react";
import UsersContext from "./UsersContext";
import { Application, Job, Candidate } from "@/types";
import { JobsData,ApplicationData,CandidateData } from "@/data";

const UsersProvider = ({children}: {children:React.ReactNode}) => {
  const [search, setSearch] = useState("");
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [jobs,setJobs]=useState<Job[]>(JobsData);
  const [candidates,setCandidates]=useState<Candidate[]>(CandidateData);
  const [applications,setApplications]=useState<Application[]>(ApplicationData);


  const filteredCandidates = candidates.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  const avgScore =
  applications.length > 0
      ? Math.round(
          (applications.reduce((s, a) => s + a.aiScore, 0) /
          applications.length) *
            10,
        ) / 10
      : 0;

  return (
    <UsersContext.Provider
      value={{
        search,
        setSearch,
        expandedUser,
        setExpandedUser,
        jobs,
        setJobs,
        candidates,
        setCandidates,
        applications,
        setApplications,
        filteredCandidates,
        avgScore,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;