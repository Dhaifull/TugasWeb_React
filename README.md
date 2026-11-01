# 1. Endpoint API yang digunakan

Saya menggunakan endpoint `https://dummyjson.com/quotes/random` untuk mengambil satu kutipan beserta nama penulisnya. Saya memilih API ini karena aplikasi DailyFlow digunakan untuk mencatat jadwal kuliah, tugas, dan kegiatan sehari-hari. Menurut saya, kutipan harian cocok ditampilkan sebagai pengingat atau penyemangat saat pengguna membuka aplikasi. API ini juga bisa digunakan tanpa API key, sehingga saya dapat mengambil datanya langsung menggunakan `fetch()`.

Kutipan yang berhasil diambil saya simpan di browser selama hari itu. Jadi, kutipan tidak berubah setiap kali halaman dimuat ulang, dan aplikasi akan mengambil kutipan baru pada hari berikutnya.

# 2. Penerapan loading dan error

Saya menangani proses pengambilan data di fungsi `muatKutipanHarian` pada file `src/components/AktivitasApi.jsx`. Sebelum request dimulai, status aplikasi diatur menjadi `loading`, lalu halaman menampilkan pesan bahwa kutipan sedang diambil.

Jika request berhasil dan respons berisi kutipan serta nama penulis, datanya disimpan ke state dan status diubah menjadi `success`. Kutipan kemudian ditampilkan pada halaman.

Jika request gagal, status diubah menjadi `error` dan aplikasi menampilkan pesan bahwa kutipan belum dapat dimuat. Pada kondisi ini, tombol **Coba Lagi** ditampilkan. Saat tombol tersebut ditekan, fungsi `setPercobaan` memicu `muatKutipanHarian` untuk mengulangi request ke endpoint yang sama.
