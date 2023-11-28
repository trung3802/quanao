/Tự Động Load Ảnh/
var index=1;
changeImage=function(){
    var imgs=["img/anh1.jpg","img/trahoanhai.jpg","img/nuocep.png","img/haoquadam.png","img/kem.png","img/sinhto.webp","img/soda.jpg"]
    document.getElementById('img').src=imgs[index];
    index++;
    if(index==7)
    {
        index=0
    }
}
setInterval(changeImage,1700);


function myFunction() 
{
    var x = document.getElementById("bars");
    if (x.className === "trangchu") {
      x.className += " responsive";
    } else {
      x.className = "trangchu";
    }
}
                   

function  AddGioHang(item) {
  item.quantity = 1;
  var list;
  if (localStorage.getItem('douong') == null) {
      list = [item];
  } else {
      list = JSON.parse(localStorage.getItem('douong')) || [];
  let ok = true;
  for (let x of list) {
      if (x.id == item.id) {
      x.quantity += 1;
      ok = false;
      break;
      }
  }
  if(ok){
      list.push(item); 
  } 
  }
  localStorage.setItem('douong', JSON.stringify(list));
  alert("Đã thêm giở hàng thành công");
}

function XoaGioHang() {
    localStorage.setItem('douong', null);
    location.reload();
}

function Xoa(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list.splice(index, 1);
    }
    LoadData();
}
function updatedouong() {
    localStorage.setItem('douong', JSON.stringify(list));
    alert("Đã cập nhật thông tin giở hàng thành công");
}
function Tang(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list[index].quantity += 1; 
    }
    LoadData();
}
function Giam(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >=1) {
        list[index].quantity -= 1; 
    }
    LoadData();
}

// function LogOut() {
//     localStorage.setItem('user', null);
//     window.location.href = "TaiKhoan.html";
// }



