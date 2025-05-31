// login.js
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = this.username.value.trim();
    const password = this.password.value;
  
    // Giả lập kiểm tra đăng nhập
    if (username === "" || password === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
  
    // Ví dụ đơn giản giả lập đăng nhập
    if (username === "admin" && password === "123456") {
      alert("Đăng nhập thành công!");
      // Chuyển hướng trang chính (hoặc trang cần đến)
      window.location.href = "index.html";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });
  