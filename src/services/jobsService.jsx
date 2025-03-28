export const addJobsService = async (newJob) => {
    try {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
        return res.ok;
    } catch (e) {
        console.log("Error while adding job", e);
        return false
    }
}

export const deleteJobsService = async (id) => {
    try {
        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE'
        })
        return res.ok;
    } catch (e) {
        console.log("Error while deleting job", e);
        return false;
    }
}
