document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = this.username.value.trim();
    const email = this.email.value.trim();
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;
  
    if (!username || !email || !password || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
  
    // Giả lập đăng ký thành công (ở đây bạn có thể thêm xử lý gửi dữ liệu lên server)
    alert("Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.");
  
    // Chuyển sang trang đăng nhập
    window.location.href = "login.html";
  });
  