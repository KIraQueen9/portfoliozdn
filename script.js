// Fungsi warna acak (hanya untuk mode terang)
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Ganti warna background
function changeBackgroundColor() {
    if (!document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = generateRandomColor();
    }
}

// Tampilkan modal sambutan
function showWelcomeMessage() {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementById("closeModal");

    modal.classList.add("active");

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}

// Dummy fungsi
function displayProjects() {
    console.log("Menampilkan proyek...");
}

function displayExperience() {
    console.log("Menampilkan pengalaman...");
}

// Toggle mode gelap/terang
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#121212";
    } else {
        changeBackgroundColor();
    }
}

// Saat halaman dimuat
window.onload = function () {
    changeBackgroundColor();
    showWelcomeMessage();
    displayProjects();
    displayExperience();
};
