var i =1;
var N=4;
function next(){
if(i<N) i +=1; else i=1;
document.getElementById("slider").setAttribute("src",i+".png");
}
function back(){
if(i>N) i -=1; else i=N;
document.getElementById("slider").setAttribute("src",i+".png");
}  
function autoPlay(){
	setInterval(next,1800)
}

//tổng tiền
function tonghoadon() {
	var cart = sessionStorage.getItem("cart");
	var order = "["+cart+"]";
	var data = JSON.parse(order);
	var tong = 0;

	for(var i=0;i<data.length;i++){
		var laytien = getMoney(data[i].price);
		tong = Number(tong) + Number(laytien);
	}	
	$("#payTong").text(ThanhTien(tong) + " Đ");
	
	$("#spTong").text(ThanhTien(tong + 50000) + " Đ");
}



function getMoney(m){
	var money = m.replace(" Đ","");
	money = money.replaceAll(".","");
	return money			
}
				
function ThanhTien(tien) {
	tien = tien.toString();

	var mang = tien.split('');
	mang = mang.reverse();
	var ketqua = [0];
	 var dem = mang.length;

	if (dem > 3) {
		for (var i = 1; i < dem; i++) {
			if (i % 3 == 0) {
				ketqua += '.'
			}
			ketqua += mang[i]
		}
		ketqua = ketqua.split('').reverse().join('');
	}
	else {
		ketqua += mang.join('');
	 }
	 return (ketqua)
}