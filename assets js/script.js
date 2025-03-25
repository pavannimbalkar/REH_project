document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    document.getElementById("confirmationMessage").classList.remove("hidden");
});
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("updateMessage").classList.remove("hidden");
});

// Profile Picture Upload Preview
document.getElementById("profilePicUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profileImage").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const languageSelect = document.getElementById("languageSelect");

    const translations = {
        en: {
            title: "Select Your Language",
            welcomeText: "Welcome to the REH Platform!",
            description: "Find the best jobs and connect with opportunities in agriculture.",
            applyBtn: "Apply for Jobs"
        },
        mr: {
            title: "तुमची भाषा निवडा",
            welcomeText: "REH प्लॅटफॉर्ममध्ये स्वागत आहे!",
            description: "सर्वोत्कृष्ट नोकऱ्या शोधा आणि शेतीत संधी शोधा.",
            applyBtn: "नोकरीसाठी अर्ज करा"
        },
        hi: {
            title: "अपनी भाषा चुनें",
            welcomeText: "REH प्लेटफॉर्म में आपका स्वागत है!",
            description: "सर्वश्रेष्ठ नौकरियां खोजें और कृषि में अवसरों से जुड़ें।",
            applyBtn: "नौकरी के लिए आवेदन करें"
        }
    };

    function updateLanguage(lang) {
        if (translations[lang]) {
            document.getElementById("title").textContent = translations[lang].title;
            document.getElementById("welcomeText").textContent = translations[lang].welcomeText;
            document.getElementById("description").textContent = translations[lang].description;
            document.getElementById("applyBtn").textContent = translations[lang].applyBtn;
        }
    }

    // Language selection event listener
    languageSelect.addEventListener("change", function() {
        updateLanguage(this.value);
        localStorage.setItem("selectedLanguage", this.value); // ✅ Save preference
    });

    // Load saved language preference
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);
});


function toggleScheme(schemeId) {
    let scheme = document.getElementById(schemeId);
    if (scheme.style.display === "block") {
        scheme.style.display = "none";
    } else {
        scheme.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const jobList = document.getElementById("jobList");
    const jobCards = jobList.getElementsByClassName("job-card");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        
        Array.from(jobCards).forEach(jobCard => {
            const title = jobCard.querySelector(".job-title").textContent.toLowerCase();
            const location = jobCard.querySelector(".job-location").textContent.toLowerCase();
            
            if (title.includes(query) || location.includes(query)) {
                jobCard.style.display = "block";
            } else {
                jobCard.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const exportInfo = document.getElementById("export-info");

    learnMoreBtn.addEventListener("click", function () {
        if (exportInfo.style.display === "none" || exportInfo.style.display === "") {
            exportInfo.style.display = "block";
            learnMoreBtn.textContent = "Show Less";
        } else {
            exportInfo.style.display = "none";
            learnMoreBtn.textContent = "Learn More";
        }
    });
});
// Future feature: Implement filters, search, or dynamic loading if needed.
console.log("Job Listings Loaded Successfully!");
document.addEventListener("DOMContentLoaded", function() {
    const jobList = document.getElementById("job-list");

    const jobs = [
        { name: "Plowing", time: "6 AM - 2 PM", wage: "₹500/day", applications: 5, status: "Available" },
        { name: "Harvesting", time: "5 AM - 12 PM", wage: "₹600/day", applications: 2, status: "Ongoing" },
        { name: "Irrigation", time: "7 AM - 1 PM", wage: "₹400/day", applications: 3, status: "Available" }
    ];

    function renderJobs() {
        jobList.innerHTML = "";
        jobs.forEach((job, index) => {
            const row = `
                <tr>
                    <td>${job.name}</td>
                    <td>${job.time}</td>
                    <td>${job.wage}</td>
                    <td>${job.applications}</td>
                    <td>${job.status}</td>
                    <td>
                        <button onclick="editJob(${index})">✏️ Edit</button>
                        <button onclick="deleteJob(${index})">❌ Delete</button>
                    </td>
                </tr>
            `;
            jobList.innerHTML += row;
        });
    }

    window.editJob = function(index) {
        alert(`Editing job: ${jobs[index].name}`);
    };

    window.deleteJob = function(index) {
        if (confirm(`Are you sure you want to delete ${jobs[index].name}?`)) {
            jobs.splice(index, 1);
            renderJobs();
        }
    };

    renderJobs();
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
