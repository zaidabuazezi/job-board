import { useState } from "react";
import JobsContext from "./JobsContext";
import { Job } from "@/types";

const JobsProvider = ({jobs=[] ,children }: {jobs:Job[] ,children: React.ReactNode }) => {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("ALL");
    const [locationFilter, setLocationFilter] = useState("ALL");
    const [jobState,setJobState]=useState<Job[]>(jobs);

    
    return (
        <JobsContext.Provider value={{jobs:jobState,search, setSearch, typeFilter, setTypeFilter, locationFilter, setLocationFilter }}>
            {children}
        </JobsContext.Provider>
    )
}

export default JobsProvider;