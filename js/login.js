document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = this.username.value.trim();
    const password = this.password.value;
  
    if (!username || !password) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
  
    // Lấy danh sách người dùng đã đăng ký
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Tìm tài khoản khớp
    const foundUser = users.find(user => user.username === username && user.password === password);
  
    if (foundUser) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      localStorage.setItem("checkLogin", "true");
      window.location.href = "../index.html"; // hoặc đổi sang trang bạn muốn
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });
  