import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import JobPage, { jobLoader } from "./pages/JobPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import { addJobsService, deleteJobsService } from "./services/jobsService.jsx"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={ <MainLayout />}>
                <Route index element={ <HomePage />} />
                <Route path="/jobs" element={ <JobsPage />} />
                <Route path="/jobs/:id" element={ <JobPage  deleteJobsService={ deleteJobsService } /> } loader={ jobLoader } />
                <Route path="/add-job" element={ <AddJobPage addJobsService={ addJobsService }/> } />
                <Route path="*" element={ <NotFoundPage />} />
            </Route>
        )
    );
    return <RouterProvider router={ router } />;
}

export default App;
