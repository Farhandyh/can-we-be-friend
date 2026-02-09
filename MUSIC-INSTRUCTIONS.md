# Cara Menambahkan Lagu LANY "you!"

## Langkah-langkah:

### 1. Download Lagu

Download lagu "you!" dari LANY dalam format MP3

### 2. Simpan File

Simpan file MP3 ke folder project dengan nama: `lany-you.mp3`

```
Flowers-HTML-CSS-main/
├── countdown.html
├── greeting.html
├── flower.html
├── lany-you.mp3  ← Simpan di sini
├── css/
└── ...
```

### 3. Selesai!

File sudah dikonfigurasi untuk menggunakan `lany-you.mp3`. Tinggal simpan file MP3 dengan nama yang sesuai, dan musik akan otomatis berjalan!

## Fitur Background Music:

✅ **Auto-play** - Musik otomatis diputar saat halaman countdown dibuka
✅ **Continuous Playback** - Musik terus berjalan dari countdown → greeting → flower
✅ **Seamless Transition** - Musik tidak restart saat pindah halaman
✅ **Loop** - Musik akan berulang terus
✅ **No UI** - Tidak ada tombol kontrol, musik berjalan di background
✅ **Smart Resume** - Musik melanjutkan dari posisi terakhir saat navigasi

## Cara Kerja:

- Musik dimulai otomatis di halaman **countdown**
- Saat pindah ke **greeting**, musik melanjutkan dari posisi yang sama (tidak restart)
- Saat pindah ke **flower**, musik tetap berjalan tanpa putus
- Menggunakan localStorage untuk menyimpan posisi playback

## Catatan:

- Jika autoplay diblokir browser, musik akan mulai saat user klik pertama kali
- Format yang didukung: MP3, WAV, OGG
- Pastikan nama file **lany-you.mp3** (huruf kecil semua)
- File harus di folder yang sama dengan HTML files
