const languages = [
  { name: "Python", icon: "🐍", color: "warning" },
  { name: "JavaScript", icon: "🌀", color: "warning" },
  { name: "C++", icon: "💻", color: "primary" },
  { name: "Java", icon: "☕", color: "danger" },
  { name: "Go", icon: "🐹", color: "info" },
  { name: "Ruby", icon: "💎", color: "danger" }
];

// Kiểm tra trạng thái đăng nhập
let isLoggedIn = !!localStorage.getItem("loggedInUser");

const languagesDiv = document.getElementById("languages");

function createLangCard(lang) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4 col-xl-3";

  const card = document.createElement("div");
  card.className = `card border-${lang.color} h-100 shadow-sm`;

  card.innerHTML = `
    <div class="card-body text-center d-flex flex-column">
      <div style="font-size: 4rem;">${lang.icon}</div>
      <h5 class="card-title mt-3">${lang.name}</h5>
      <button class="btn btn-outline-${lang.color} mt-auto btn-learn">Học ngay</button>
    </div>
  `;

  const btnLearn = card.querySelector(".btn-learn");
  btnLearn.addEventListener("click", () => {
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để bắt đầu học!");
      return;
    }

    // Lưu ngôn ngữ đã chọn
    localStorage.setItem("selectedLanguage", lang.name);

    // Chuyển sang trang làm bài test đầu vào
    window.location.href = "../html/quiz.html";
  });

  col.appendChild(card);
  return col;
}

function renderLanguages() {
  languagesDiv.innerHTML = "";
  languages.forEach(lang => {
    const card = createLangCard(lang);
    languagesDiv.appendChild(card);
  });
}

renderLanguages();
