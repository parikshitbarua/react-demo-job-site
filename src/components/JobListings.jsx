import { useState, useEffect } from "react";
import JobListing from "./JobListing.jsx";
import Spinner from "./Spinner.jsx";

export const JobListings = ({ isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        setTimeout(() => {
            (async function (){
                setLoading(true);
                try {
                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    setJobs(data);
                } catch (e) {
                    console.log("Error fetching data", e);
                } finally {
                    setLoading(false);
                }
            })()
        },1500)
    }, [])
    
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { isHome ? 'Recent Jobs' : 'Browse Jobs' }
                </h2>
                { loading ? (<Spinner />) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        { jobs.map((job) => (
                            <JobListing job={ job } key={ job.id }/>
                        )) }
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobListings;
