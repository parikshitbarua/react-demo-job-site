export const addJobsService = async (newJob) => {
    try {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
        console.log("Addeddddd");
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
        console.log("Heyyyyyy");
        return res.ok;
    } catch (e) {
        console.log("Error while deleting job", e);
        return false;
    }
}

export const updateJobsService = async (id, updatedJob) => {
    try {
       await fetch(`/api/jobs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
       })
    } catch(err) {
        throw Error(err);
    }
}
