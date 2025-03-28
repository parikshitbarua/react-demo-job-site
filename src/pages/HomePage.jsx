import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";

const HomePage = () => {
    return (
        <>
            <Hero title="Become A React Developer" subtitle="Find the React job that fits your skills and needs." />
            <HomeCards />
            <JobListings isHome={true}/>
            <ViewAllJobs />
        </>
    )
}

export default HomePage;
