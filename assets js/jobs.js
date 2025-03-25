document.addEventListener("DOMContentLoaded", () => {
    const jobsContainer = document.getElementById("jobs-container");

    // Sample job data
    const jobs = [
        { farmer: "Ram Patil", work: "Harvesting", time: "6 AM - 12 PM", wage: "₹500/day", start: "25 Mar", end: "30 Mar", village: "Village A", vacancies: 5 },
        { farmer: "Shyam Gaikwad", work: "Plowing", time: "7 AM - 1 PM", wage: "₹600/day", start: "26 Mar", end: "31 Mar", village: "Village A", vacancies: 3 },
        { farmer: "Ravi More", work: "Irrigation", time: "8 AM - 2 PM", wage: "₹550/day", start: "27 Mar", end: "2 Apr", village: "Village A", vacancies: 4 },
        { farmer: "Suresh Jadhav", work: "Weeding", time: "9 AM - 3 PM", wage: "₹480/day", start: "28 Mar", end: "3 Apr", village: "Village B", vacancies: 6 },
        { farmer: "Ganesh Pawar", work: "Sowing", time: "6 AM - 12 PM", wage: "₹520/day", start: "29 Mar", end: "4 Apr", village: "Village B", vacancies: 2 },
        // Add more jobs as needed
    ];

    function displayJobs() {
        jobsContainer.innerHTML = ""; // Clear previous jobs
        jobs.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
            jobCard.innerHTML = `
                <h3>${job.work} - ${job.farmer}</h3>
                <p><strong>Time:</strong> ${job.time}</p>
                <p><strong>Wage:</strong> ${job.wage}</p>
                <p><strong>Duration:</strong> ${job.start} to ${job.end}</p>
                <p><strong>Village:</strong> ${job.village}</p>
                <p><strong>Vacancies:</strong> ${job.vacancies}</p>
                <button class="apply-btn">Apply</button>
            `;
            jobsContainer.appendChild(jobCard);
        });
    }

    displayJobs();
});
