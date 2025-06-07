document.addEventListener("DOMContentLoaded", () => {
    const navUsername = document.getElementById("nav-username");
    const usernameSpan = document.getElementById("username");
    const navLogin = document.getElementById("nav-login");
    const navLogout = document.getElementById("nav-logout");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
  
    // Kiểm tra trạng thái đăng nhập từ localStorage
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const username = localStorage.getItem("username");
  
    function updateNavbar() {
      if (isLoggedIn && username) {
        navUsername.style.display = "block";
        usernameSpan.textContent = username;
        navLogin.style.display = "none";
        navLogout.style.display = "block";
      } else {
        navUsername.style.display = "none";
        navLogin.style.display = "block";
        navLogout.style.display = "none";
      }
    }
  

    // Xử lý đăng xuất
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      location.reload();
    });
  
    updateNavbar();
  });
  