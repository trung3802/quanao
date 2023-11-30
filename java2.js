function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordRepeat = document.getElementById("password-repeat").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("add").value;
    var gender = document.querySelector('input[name="sex"]:checked').value;

    // Kiểm tra thông tin đăng ký
    if (!username || !password || !passwordRepeat || !phone || !address || !gender) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return false;
    }


    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password !== passwordRepeat) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp!");
        return false;
    }
	 

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return false;
    }

    // Kiểm tra định dạng số điện thoại
    if (!/^\d{10}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ! Vui lòng nhập đủ 10 số.");
        return false;
    }
    // Tạo đối tượng chứa thông tin đăng ký
    var userObject = {
        username: username,
        password: password,
        phone: phone,
        address: address,
        gender: gender
    };

    // Lưu thông tin đăng ký vào session storage
    sessionStorage.setItem('registeredUser', JSON.stringify(userObject));

    
	alert("Đăng ký thành công!\nTài khoản: " + username + "\nMật khẩu: " + password);


    // Reset form sau khi đăng ký
    resetForm();

    return true;
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-repeat").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("add").value = "";
    document.querySelector('input[name="sex"]:checked').checked = false;
}


/////

