window.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toast = document.getElementById("toast");
    let toastTimer = null;

    if (body.classList.contains("department-page") && !sessionStorage.getItem("welcomeShown")) {
        alert("Welcome to SIT NAGPUR");
        sessionStorage.setItem("welcomeShown", "1");
    }

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
    }

    document.addEventListener("click", function (event) {
        const button = event.target.closest(".clickable");
        if (!button) return;

        const message = button.dataset.toast;
        if (!message) return;

        event.preventDefault();
        showToast(message);

        const href = button.getAttribute("href");
        if (href) {
            if (href.startsWith("#")) {
                window.location.hash = href;
            } else {
                setTimeout(() => {
                    window.location.href = href;
                }, 250);
            }
        }
    });
});

// Function to open the Student Information page
function openStudentPage() {
    window.location.href = "student.html";
}

// Function to return to the Department page
function goBack() {
    window.location.href = "department.html";
}