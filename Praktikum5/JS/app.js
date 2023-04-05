//1. Buat fungsi untuk materi Event
function eventSatu() {
  alert("Hello World!");
}

function gantiGambar(img) {
  img.src = "img/gambar2.jpg";
}

function gantiGambarDua(img) {
  img.src = "img/gambar1.jpg";
}

//2. Materi Operator 1
function cekLogin() {
  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;

  if (username == "hansel" && password == "1234") {
    alert("Login Berhasil");
  } else {
    alert("Login Gagal");
  }
}

//3. Materi Operator 2
function cekNilai(param) {
  let nilai = param.value;
  let info = document.getElementById("info");

  info.style.fontSize = "24px";

  if (nilai > 60) {
    info.innerText = "Anda LULUS";
    info.style.color = "blue";
  } else {
    info.innerText = "Anda TIDAK LULUS";
    info.style.color = "blue";
  }
}

//4. Materi Operator 3
let day = new Date().getDay();
switch (day) {
  case 1:
    namahari = "Senin";
    break;

  case 2:
    namahari = "Selasa";
    break;

  case 3:
    namahari = "Rabu";
    break;

  case 4:
    namahari = "Kamis";
    break;

  case 5:
    namahari = "Jumat";
    break;

  default:
    namahari = "Tidak Ada";
    break;
}

document.getElementById("namahari").innerHTML =
  "Hari ini adalah hari " + namahari;

//4. Perulangan
let namaOrang = ["Malvin", "Kelvin", "Zaman"];

let teks = "";

for (let index = 0; index < namaOrang.length; index++) {
  teks += "-" + namaOrang[index] + "<br>";
}

document.getElementById("nama_orang").innerHTML = teks;
