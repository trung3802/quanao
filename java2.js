function validate() {
var u = document.getElementById("username").value;
var p1 = document.getElementById("password").value;
var p2 = document.getElementById("password-repeat").value;
var u4 = document.getElementById("number").value;
var u2 = document.getElementById("phone").value;
var u3 = document.getElementById("add").value;

if(u== "" ) {
	alert("Vui lòng nhập tên!");
	return false;
}
if(p1 == "") {
	alert("Vui lòng nhập mật khẩu!");
	return false;
}
if(p2 == "") {
	alert("Vui lòng xác minh mật khẩu!");
	return false;
}
if(u4==""){
	alert("Vui lòng nhập lại mã xác nhận!");
	return false;
}
if(u2== "" ) {
	alert("Vui lòng nhập SDT!");
	return false;
}
if(u3== "" ) {
	alert("Vui lòng nhập địa chỉ");
	return false;
} 

	alert("Xin hãy điền đúng thông tin!")
	 
	return true;
}

