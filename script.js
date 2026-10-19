// script.js — Praktikum 5: JavaScript Dasar dan Manipulasi HTML

/* ===== Latihan 1 — Menampilkan output ===== */
function latihan1() {
  document.getElementById("pesan").textContent = "Hello World";
  console.log("Hello World");
}
latihan1(); // dijalankan otomatis saat halaman dimuat

/* ===== Latihan 2 — Alert dan prompt ===== */
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

/* ===== Latihan 3 — Function dan operasi aritmetika ===== */
function operasiDasar(a, b) {
  const hasil = [
    "Penjumlahan: " + (a + b),
    "Pengurangan: " + (a - b),
    "Perkalian: " + (a * b),
    "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol"),
    "Modulus: " + (b !== 0 ? a % b : "Tidak dapat dibagi nol")
  ];
  hasil.forEach((baris) => console.log(baris));
  return hasil;
}
operasiDasar(9, 4); // contoh pemanggilan dari modul (lihat Console)

function tampilkanOperasi(a, b) {
  const output = document.getElementById("hasilOperasi");
  if (Number.isNaN(a) || Number.isNaN(b)) {
    output.textContent = "Masukkan dua bilangan yang valid.";
    return;
  }
  output.textContent = "A = " + a + ", B = " + b + "\n" + operasiDasar(a, b).join("\n");
}

function latihan3Form() {
  const a = document.getElementById("angkaA").value;
  const b = document.getElementById("angkaB").value;
  if (a.trim() === "" || b.trim() === "") {
    tampilkanOperasi(NaN, NaN);
    return;
  }
  tampilkanOperasi(Number(a), Number(b));
}

// Eksperimen 1: dua nilai dari prompt, dikonversi menjadi number
function latihan3Prompt() {
  const inputA = prompt("Masukkan bilangan pertama:");
  if (inputA === null) return;
  const inputB = prompt("Masukkan bilangan kedua:");
  if (inputB === null) return;
  const a = inputA.trim() === "" ? NaN : Number(inputA);
  const b = inputB.trim() === "" ? NaN : Number(inputB);
  tampilkanOperasi(a, b);
}

/* ===== Latihan 4 — if–else ===== */
function latihan4() {
  const inputNilai = prompt("Masukkan nilai (0–100):");
  const nilaiMahasiswa = Number(inputNilai);

  if (inputNilai === null || inputNilai.trim() === "" ||
      Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

/* ===== Latihan 5 — switch ===== */
function latihan5() {
  const inputPilihan = prompt("Masukkan angka 1–5:");
  switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}

/* ===== Latihan 6 — Genap atau ganjil ===== */
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

/* ===== Latihan 7 — Mengubah warna halaman ===== */
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

function ubahTampilan() {
  document.body.style.backgroundColor = "lightyellow";
  document.getElementById("pesan").style.color = "blue";
  document.getElementById("pesan").textContent = "Tampilan berhasil diubah.";
}

/* ===== Latihan 8 — Checkbox menu makanan ===== */
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

/* ===== Mini Project — Kalkulator Nilai Mahasiswa ===== */
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// Mengembalikan angka valid (0–100) atau null bila tidak valid
function ambilNilaiValid(teks) {
  if (teks === null || teks === undefined || String(teks).trim() === "") return null;
  const angka = Number(teks);
  if (Number.isNaN(angka) || angka < 0 || angka > 100) return null;
  return angka;
}

function prosesNilai() {
  const hasil = document.getElementById("hasilNilai");
  const tugas = ambilNilaiValid(document.getElementById("inputTugas").value);
  const uts = ambilNilaiValid(document.getElementById("inputUts").value);
  const uas = ambilNilaiValid(document.getElementById("inputUas").value);

  if (tugas === null || uts === null || uas === null) {
    hasil.innerHTML = '<p class="error">Semua nilai (Tugas, UTS, UAS) harus diisi dan berada pada rentang 0–100.</p>';
    return;
  }

  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const lulus = akhir >= 60;

  console.log("Nilai akhir:", akhir.toFixed(2));
  console.log("Predikat:", predikat);
  console.log("Status:", lulus ? "Lulus" : "Belum lulus");

  tampilkanHasilNilai(akhir, predikat, lulus);
}

function tampilkanHasilNilai(akhir, predikat, lulus) {
  const hasil = document.getElementById("hasilNilai");
  hasil.innerHTML =
    "<p>Nilai akhir: <strong>" + akhir.toFixed(2) + "</strong></p>" +
    "<p>Predikat: <strong>" + predikat + "</strong></p>" +
    '<p>Status: <strong class="' + (lulus ? "ok" : "error") + '">' +
    (lulus ? "Lulus" : "Belum lulus") + "</strong></p>";
}

/* ===== Tugas H.7 & Eksperimen 4 — Validasi form ===== */
function validasiForm() {
  const nama = document.getElementById("valNama").value;
  const nilaiTeks = document.getElementById("valNilai").value;
  const hasil = document.getElementById("hasilValidasi");
  const pesanError = [];

  if (nama.trim() === "") pesanError.push("Nama tidak boleh kosong.");
  if (nilaiTeks.trim() === "") {
    pesanError.push("Nilai tidak boleh kosong.");
  } else if (ambilNilaiValid(nilaiTeks) === null) {
    pesanError.push("Nilai harus berupa angka antara 0 dan 100.");
  }

  if (pesanError.length > 0) {
    hasil.className = "error";
    hasil.textContent = pesanError.join(" ");
  } else {
    hasil.className = "ok";
    hasil.textContent = "Data valid. Nama: " + nama.trim() + ", Nilai: " + Number(nilaiTeks) + ".";
  }
}

/* ===== Eksperimen Mandiri ===== */
// Eksperimen 2 — tabel perkalian
function tabelPerkalian(angka) {
  let teks = "";
  for (let i = 1; i <= 10; i++) {
    teks += angka + " x " + i + " = " + (angka * i) + "\n";
  }
  document.getElementById("hasilTabel").textContent = teks.trimEnd();
}

// Eksperimen 3 — cekGenap
function cekGenap(angka) {
  return angka % 2 === 0;
}

function tampilCekGenap() {
  const input = document.getElementById("inputGenap").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilGenap");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }
  hasil.textContent = "cekGenap(" + angka + ") = " + cekGenap(angka);
}

// Eksperimen 6 — sembunyikan / tampilkan elemen
function toggleElemen() {
  const paragraf = document.getElementById("paragrafToggle");
  const tombol = document.getElementById("tombolToggle");
  const sedangTersembunyi = paragraf.style.display === "none";
  paragraf.style.display = sedangTersembunyi ? "" : "none";
  tombol.textContent = sedangTersembunyi ? "Sembunyikan paragraf" : "Tampilkan paragraf";
}
