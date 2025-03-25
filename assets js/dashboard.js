document.addEventListener("DOMContentLoaded", () => {
    const jobList = document.getElementById("job-list");
    const addJobForm = document.getElementById("add-job-form");

    // Farmer's job data
    let farmerJobs = [];

    function updateJobList() {
        jobList.innerHTML = "";
        farmerJobs.forEach((job, index) => {
            const jobRow = document.createElement("tr");
            jobRow.innerHTML = `
                <td>${job.work}</td>
                <td>${job.time}</td>
                <td>${job.wage}</td>
                <td>${job.start}</td>
                <td>${job.end}</td>
                <td><button class="delete-btn" data-index="${index}">Delete</button></td>
            `;
            jobList.appendChild(jobRow);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                farmerJobs.splice(index, 1);
                updateJobList();
            });
        });
    }

    addJobForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newJob = {
            work: addJobForm.work.value,
            time: addJobForm.time.value,
            wage: addJobForm.wage.value,
            start: addJobForm.start.value,
            end: addJobForm.end.value
        };
        farmerJobs.push(newJob);
        updateJobList();
        addJobForm.reset();
    });

    updateJobList();
});
