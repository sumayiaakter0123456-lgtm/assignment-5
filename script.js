document.getElementById("sign-in-btn").addEventListener("click", function () {
    const usernameInput = document.getElementById("input-username");
    const contactName = usernameInput.value;

    const passwordInput = document.getElementById("input-password");
    const password = passwordInput.value;
    if (contactName == "admin" && password == "admin123") {
        alert("sign-in success");
        window.location.replace("home.html");
    } else {
        alert("sign-in failed");
        return;
    }

});

const container = document.getElementById("issuesContainer");
const loader = document.getElementById("loader");
const issueCount = document.getElementById("issueCount");

let allIssues = [];

async function loadIssues(url) {

    container.innerHTML = "";
    loader.classList.remove("hidden");

    const res = await fetch(url);
    const data = await res.json();

    allIssues = data.data;

    loader.classList.add("hidden");

    displayIssues(allIssues);
}

function displayIssues(issues) {

    container.innerHTML = "";
    issueCount.innerText = issues.length;

    issues.forEach(issue => {

        const borderColor =
            issue.status === "open"
                ? "border-green-500"
                : "border-purple-500";

        const card = document.createElement("div");

        card.className =
            bg - white rounded - xl shadow border - t - 4 ${ borderColor } p - 4 cursor - pointer hover: shadow - lg transition;

        card.innerHTML = 
<h3 class="font-semibold mb-2">${issue.title}</h3>

<p class="text-sm text-gray-500 mb-3">
${issue.description?.slice(0,80) || ""}
</p>

<div class="flex flex-wrap gap-2 mb-3">
<span class="badge badge-outline">${issue.status}</span>
<span class="badge badge-outline">${issue.priority}</span>
</div>

<p class="text-xs text-gray-400">
By ${issue.author || "Unknown"}
</p>
            ;

        card.onclick = () => openModal(issue);

        container.appendChild(card);

    });

}

function openModal(issue) {

    document.getElementById("modalTitle").innerText = issue.title;
    document.getElementById("modalDesc").innerText = issue.description;
    document.getElementById("modalStatus").innerText = issue.status;
    document.getElementById("modalAuthor").innerText = issue.author;
    document.getElementById("modalPriority").innerText = issue.priority;
    document.getElementById("modalDate").innerText = issue.createdAt;

    document.getElementById("issueModal").showModal();

}

loadIssues("https://phi-lab-server.vercel.app/api/v1/lab/issues");


document.querySelectorAll(".tab-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelectorAll(".tab-btn").forEach(b => {
            b.classList.remove("btn-primary");
        });

        btn.classList.add("btn-primary");

        const status = btn.dataset.status;

        if (status === "all") {

            displayIssues(allIssues);

        }
        else {

            const filtered = allIssues.filter(issue =>
                issue.status === status
            );

            displayIssues(filtered);

        }

    });

});


document.getElementById("searchBtn").addEventListener("click", async () => {

    const text = document.getElementById("searchInput").value;

    if (!text) return;

    loader.classList.remove("hidden");

    const res = await fetch(
        https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}
    );

    const data = await res.json();

    loader.classList.add("hidden");

    displayIssues(data.data);

});
