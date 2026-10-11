import { useState } from "react";
import UsersContext from "./UsersContext";
import { Application, Job, Candidate } from "@/types";


const UsersProvider = ({jobs=[],applications=[],candidates=[],children}: {jobs:Job[],applications:Application[],candidates:Candidate[],children:React.ReactNode}) => {
  const [search, setSearch] = useState("");
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [jobState]=useState<Job[]>(jobs);
  const [candidatesState]=useState<Candidate[]>(candidates);
  const [applicationsState]=useState<Application[]>(applications);


  const filteredCandidates = candidatesState.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  const avgScore =
  applicationsState.length > 0
      ? Math.round(
          (applicationsState.reduce((s, a) => s + a.aiScore, 0) /
          applicationsState.length) *
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
        jobs:jobState,
        candidates:candidatesState,
        applications:applicationsState,
        filteredCandidates,
        avgScore,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;