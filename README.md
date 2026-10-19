# Lab5Web — Praktikum 5: JavaScript Dasar dan Manipulasi HTML

Mata Kuliah: Pemrograman Web — Pertemuan 6

## Tujuan Praktikum

1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

## Struktur Berkas

```
Lab5Web/
├── index.html   # semua latihan, mini project, dan eksperimen
├── script.js    # seluruh logika JavaScript
├── README.md
└── screenshots/ # taruh screenshot hasil di sini
```

## Cara Menjalankan

1. Simpan `index.html` dan `script.js` dalam satu folder.
2. Buka `index.html` di browser modern (Chrome/Firefox/Edge).
3. Buka Inspect/Periksa → Console untuk melihat output `console.log()`.
4. Klik tombol pada tiap bagian halaman untuk mencoba latihan.

## Langkah Kerja dan Hasil

| No | Latihan | Cara menguji | Hasil yang diharapkan | Screenshot |
|----|---------|--------------|------------------------|------------|
| 1 | Menampilkan output | Buka halaman | Teks halaman menjadi "Hello World", Console mencetak "Hello World" | `screenshots/latihan1.png` |
| 2 | Alert dan prompt | Klik "Masukkan nama": isi nama / Cancel / kosong | Isi nama → alert "Halo, nama!" dan teks halaman berubah; Cancel atau kosong → alert "Nama belum diisi." | `screenshots/latihan2.png` |
| 3 | Function aritmetika | Klik "Hitung" (default 9 dan 4) | Jumlah 13, kurang 5, kali 36, bagi 2.25, modulus 1 | `screenshots/latihan3.png` |
| 4 | if–else | Isi 76, 40, 101, "abc", kosong | 76 → Lulus; 40 → Belum lulus; sisanya "Input nilai tidak valid." | `latihan4_lulus.png`, `latihan4_belum.png`, `latihan4_tidak_valid.png` |
| 5 | switch | Isi 1–5 dan 9 | Nama bilangan muncul; selain 1–5 → "Pilihan tidak tersedia" | `latihan5_valid.png`, `latihan5_tidak_tersedia.png` |
| 6 | Genap/ganjil | Uji 4, -3, 0, 2.5, kosong | 4 genap; -3 ganjil; 0 genap; 2.5 dan kosong → pesan tidak valid | `latihan6_genap.png`, `latihan6_ganjil.png`, `latihan6_tidak_valid.png` |
| 7 | Warna halaman | Klik tiga tombol warna | Latar berubah hijau/putih/kuning | `latihan7_hijau.png`, `latihan7_kuning.png`, `latihan7_putih.png` |
| 8 | Checkbox menu | Centang/lepas menu | Total berubah otomatis (format Rp Indonesia) | `latihan8_satu.png`, `latihan8_beberapa.png`, `latihan8_semua.png` |

### Mini Project — Kalkulator Nilai Mahasiswa

Bobot: Tugas 30%, UTS 30%, UAS 40%. Nilai divalidasi 0–100 dan hasil tampil di halaman (bukan hanya Console).

| Skenario | Tugas | UTS | UAS | Nilai Akhir | Predikat | Status |
|----------|-------|-----|-----|-------------|----------|--------|
| 1 | 85 | 78 | 88 | 84.10 | B | Lulus |
| 2 | 50 | 40 | 55 | 49.00 | E | Belum lulus |
| 3 | 100 | 100 | 100 | 100.00 | A | Lulus |
| 4 | 90 | 120 | 80 | — | — | Ditolak (di luar 0–100) |

Screenshot: `mini_skenario1.png` sampai `mini_skenario4.png`

### Eksperimen Mandiri

1. Latihan 3 versi prompt: tombol "Hitung via prompt", input dikonversi dengan `Number()`.
2. Tabel perkalian 7 dari 1 sampai 10 memakai perulangan `for`.
3. `cekGenap(angka)` mengembalikan `true` jika angka genap.
4. Validasi form: nama dan nilai tidak boleh kosong, nilai harus 0–100.
5. Latihan 8 ditambah dua menu: Nasi Putih (Rp3.000) dan Es Teh (Rp2.000).
6. Tombol untuk menyembunyikan/menampilkan paragraf.

Screenshot Validasi Form: `validasi_valid.png`, `validasi_nama_kosong.png`, `validasi_nilai_salah.png`.

Screenshot Eksperimen: `eks_tabel7.png`, `eks_genap_true.png`, `eks_genap_false.png`, `eks_sembunyi.png`, `eks_tampil.png`.

Semua screenshot disimpan di folder `screenshots/`.

## Jawaban Pertanyaan dan Tugas

**1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`.**
`console.log()` menulis pesan ke Console browser (untuk debugging, tidak terlihat pengunjung biasa). `alert()` menampilkan kotak pesan dengan tombol OK dan menghentikan eksekusi sampai ditutup. `prompt()` menampilkan kotak input dan mengembalikan string (atau `null` bila Cancel). `textContent` mengubah isi teks elemen apa adanya, sedangkan `innerHTML` mengubah isi sebagai HTML sehingga tag diproses (hati-hati bila berisi input pengguna).

**2. Perbedaan `let` dan `const`.**
`let` dapat diberi nilai ulang, `const` tidak. Keduanya tidak bisa dideklarasikan ulang dalam scope yang sama.
```js
let umur = 20;
umur = 21;        // boleh
const nama = "Rani";
// nama = "Dina"; // error: Assignment to constant variable
```

**3. Perbedaan `==` dan `===`.**
`==` membandingkan nilai setelah konversi tipe otomatis, `===` membandingkan nilai dan tipe tanpa konversi.
```js
5 == "5";   // true
5 === "5";  // false
```

**4. Fungsi `if–else` dan `switch`.**
`if–else` menguji kondisi logis, cocok untuk rentang nilai atau kondisi majemuk (mis. nilai >= 60). `switch` memilih satu tindakan dari sejumlah nilai tertentu yang pasti (mis. pilihan menu "1" sampai "5"). `break` mencegah eksekusi lanjut ke `case` berikutnya.

**5. Fungsi parameter dan `return`.**
Parameter adalah variabel penerima data masukan saat function dipanggil, sehingga function bisa dipakai ulang dengan data berbeda. `return` mengembalikan hasil ke pemanggil dan mengakhiri eksekusi function.
```js
function hitungLuas(panjang, lebar) { return panjang * lebar; }
hitungLuas(8, 4); // 32
```

**6. Memilih elemen dengan `document.getElementById()`.**
Method ini mencari elemen berdasarkan atribut `id`-nya dan mengembalikan objek elemen (atau `null` jika tidak ada). Objek itu lalu bisa diubah, misalnya `document.getElementById("pesan").textContent = "Halo";`.

**7. Script validasi form (nama tidak kosong, nilai 0–100).**
Tersedia di `script.js` pada function `validasiForm()` dan `ambilNilaiValid()`:
```js
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
```

## Pengumpulan

Commit ke repository `Lab5Web`, lalu kirim URL repository melalui e-learning/ecampus sesuai arahan dosen.
