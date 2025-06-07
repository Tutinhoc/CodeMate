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
  
    // Lấy danh sách người dùng đã đăng ký
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Kiểm tra tài khoản đã tồn tại chưa
    const existingUser = users.find(user => user.username === username || user.email === email);
  
    if (existingUser) {
      alert("Tên đăng nhập hoặc email đã được sử dụng!");
      return;
    }
  
    // Thêm người dùng mới
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.");
    window.location.href = "login.html";
  });
  