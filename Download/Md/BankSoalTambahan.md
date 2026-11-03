# 📚 Bank Soal Tambahan UTS Keamanan Siber (125 Soal Pendalaman)

Kumpulan 125 soal latihan tambahan bermutu tinggi untuk persiapan UTS Keamanan Siber (Week 2 s.d. Week 6).
Setiap bab berisi minimal 25 soal baru (Pre-Test & Post-Test) dengan cakupan materi lengkap sesuai silabus perkuliahan.

### 📊 Ringkasan Soal per Bab
- **Week 2 (Authentication & Access Control):** 25 Soal (13 Pre Test, 12 Post Test)
- **Week 3 (Cyber Law, Ethics & Computer Crime):** 25 Soal (13 Pre Test, 12 Post Test)
- **Week 4 (Software Security, Secure Coding & Testing):** 25 Soal (13 Pre Test, 12 Post Test)
- **Week 5 (Web Application Security & OWASP ASVS):** 25 Soal (13 Pre Test, 12 Post Test)
- **Week 6 (Cryptography, Cipher & Hash):** 25 Soal (13 Pre Test, 12 Post Test)
- **Total Soal Tambahan:** **125 Soal Baru**

---

## 📑 Daftar Isi
- [Week 2 - Authentication & Access Control](#week-2---authentication--access-control)
- [Week 3 - Cyber Law, Ethics & Computer Crime](#week-3---cyber-law-ethics--computer-crime)
- [Week 4 - Software Security, Secure Coding & Testing](#week-4---software-security-secure-coding--testing)
- [Week 5 - Web Application Security & OWASP ASVS](#week-5---web-application-security--owasp-asvs)
- [Week 6 - Cryptography, Cipher & Hash](#week-6---cryptography-cipher--hash)

---

## 📌 Week 2 - Authentication & Access Control

### Soal 1 (Pre Test)
**Pertanyaan:**  
Seorang pengguna mengautentikasi diri dengan menempelkan kartu pintar (smart card) pada card reader dan memasukkan PIN 6-digit. Faktor autentikasi yang digunakan pada skenario ini adalah ...

**Pilihan Jawaban:**
- **A.** Something you know dan something you are
- **B.** Something you have dan something you know *(Kunci Jawaban)*
- **C.** Something you have dan something you are
- **D.** Dua faktor dari kategori something you know
- **E.** Something you are dan somewhere you are

> **Kunci Jawaban Benar:** **B. Something you have dan something you know**

---

### Soal 2 (Pre Test)
**Pertanyaan:**  
Pada sistem biometrik, titik potong pada kurva di mana False Acceptance Rate (FAR) sama persis dengan False Rejection Rate (FRR) disebut ...

**Pilihan Jawaban:**
- **A.** Receiver Operating Characteristic (ROC)
- **B.** Equal Error Rate (EER) atau Crossover Error Rate (CER) *(Kunci Jawaban)*
- **C.** Threshold of Detection (ToD)
- **D.** Biometric Accuracy Index (BAI)
- **E.** Zero Tolerance Boundary (ZTB)

> **Kunci Jawaban Benar:** **B. Equal Error Rate (EER) atau Crossover Error Rate (CER)**

---

### Soal 3 (Pre Test)
**Pertanyaan:**  
Mengapa penggunaan salt yang unik dan acak untuk setiap password sangat penting sebelum nilai hash disimpan di database?

**Pilihan Jawaban:**
- **A.** Membuat algoritma enkripsi simetris password menjadi tidak dapat didekripsi.
- **B.** Mencegah serangan precomputed dictionary attack seperti Rainbow Tables dan membedakan hash dari dua password yang sama. *(Kunci Jawaban)*
- **C.** Mempercepat proses komputasi verifikasi password di sisi server aplikasi.
- **D.** Mengubah fungsi hash satu arah menjadi fungsi enkripsi asimetris.
- **E.** Menghilangkan kebutuhan pengguna untuk mengingat password yang panjang.

> **Kunci Jawaban Benar:** **B. Mencegah serangan precomputed dictionary attack seperti Rainbow Tables dan membedakan hash dari dua password yang sama.**

---

### Soal 4 (Pre Test)
**Pertanyaan:**  
Manakah algoritma hashing password berikut yang sengaja dirancang memiliki parameter memory-hard dan time-cost tinggi untuk mempersulit brute-force berbasis GPU/ASIC?

**Pilihan Jawaban:**
- **A.** MD5
- **B.** SHA-256 murni
- **C.** Argon2 *(Kunci Jawaban)*
- **D.** CRC32
- **E.** RC4

> **Kunci Jawaban Benar:** **C. Argon2**

---

### Soal 5 (Pre Test)
**Pertanyaan:**  
Protokol Challenge-Handshake Authentication Protocol (CHAP) lebih aman dibandingkan Password Authentication Protocol (PAP) karena ...

**Pilihan Jawaban:**
- **A.** Password pengguna ditransmisikan dalam format plaintext terkompresi.
- **B.** Password asli tidak pernah dikirimkan melalui jaringan; server mengirimkan nonce/challenge dan klien merespons dengan hash password + challenge. *(Kunci Jawaban)*
- **C.** CHAP tidak memerlukan database password di sisi server.
- **D.** CHAP selalu menggunakan enkripsi RSA 4096-bit pada setiap transmisi paket.
- **E.** Klien menentukan sendiri kunci rahasia tanpa persetujuan server.

> **Kunci Jawaban Benar:** **B. Password asli tidak pernah dikirimkan melalui jaringan; server mengirimkan nonce/challenge dan klien merespons dengan hash password + challenge.**

---

### Soal 6 (Pre Test)
**Pertanyaan:**  
Dalam model Discretionary Access Control (DAC), siapa yang memiliki wewenang untuk memberikan atau mencabut hak akses atas suatu objek data?

**Pilihan Jawaban:**
- **A.** Hanya Administrator Sistem Pusat melalui kebijakan global.
- **B.** Pemilik (owner) dari objek data tersebut. *(Kunci Jawaban)*
- **C.** Sistem operasi secara otomatis berdasarkan security label militer.
- **D.** Pengguna tamu yang sedang aktif dalam sesi sistem.
- **E.** Entitas Certificate Authority (CA) pihak ketiga.

> **Kunci Jawaban Benar:** **B. Pemilik (owner) dari objek data tersebut.**

---

### Soal 7 (Pre Test)
**Pertanyaan:**  
Model Mandatory Access Control (MAC) mengandalkan mekanisme otorisasi yang didasarkan pada ...

**Pilihan Jawaban:**
- **A.** Tingkat izin keamanan (clearance) subjek dan label klasifikasi sensitivitas objek yang ditetapkan secara ketat oleh otoritas keamanan. *(Kunci Jawaban)*
- **B.** Keinginan pemilik berkas untuk membagikan file ke teman satu grup.
- **C.** Daftar kontak yang disimpan dalam address book pengguna.
- **D.** Waktu login pengguna di workstation lokal.
- **E.** Jumlah kuota bandwidth yang dialokasikan kepada pengguna.

> **Kunci Jawaban Benar:** **A. Tingkat izin keamanan (clearance) subjek dan label klasifikasi sensitivitas objek yang ditetapkan secara ketat oleh otoritas keamanan.**

---

### Soal 8 (Pre Test)
**Pertanyaan:**  
Prinsip Simple Security Property pada model keamanan Bell-LaPadula dirumuskan sebagai ...

**Pilihan Jawaban:**
- **A.** No Read Down (subjek tidak boleh membaca data pada tingkat lebih rendah).
- **B.** No Read Up (subjek pada tingkat keamanan tertentu tidak boleh membaca objek dengan klasifikasi lebih tinggi). *(Kunci Jawaban)*
- **C.** No Write Up (subjek tidak boleh menulis ke tingkat lebih tinggi).
- **D.** Read and Write bebas pada semua level asalkan satu departemen.
- **E.** Hanya subjek dengan root access yang boleh membaca data rahasia.

> **Kunci Jawaban Benar:** **B. No Read Up (subjek pada tingkat keamanan tertentu tidak boleh membaca objek dengan klasifikasi lebih tinggi).**

---

### Soal 9 (Pre Test)
**Pertanyaan:**  
Perbedaan mendasar antara model Bell-LaPadula dan model Biba adalah bahwa model Biba dirancang secara khusus untuk menjaga aspek ...

**Pilihan Jawaban:**
- **A.** Kerahasiaan (Confidentiality) data militer.
- **B.** Integritas (Integrity) data agar informasi tidak terkontaminasi oleh sumber yang tidak tepercaya. *(Kunci Jawaban)*
- **C.** Ketersediaan (Availability) jaringan dari serangan DDoS.
- **D.** Kecepatan throughput komputasi pada CPU multi-core.
- **E.** Kompresi data sebelum ditransmisikan.

> **Kunci Jawaban Benar:** **B. Integritas (Integrity) data agar informasi tidak terkontaminasi oleh sumber yang tidak tepercaya.**

---

### Soal 10 (Pre Test)
**Pertanyaan:**  
Pada Role-Based Access Control (RBAC), hak akses (permissions) diasosiasikan langsung kepada ...

**Pilihan Jawaban:**
- **A.** Identitas nama individu masing-masing karyawan secara mandiri.
- **B.** Peran atau fungsi jabatan (Role), di mana pengguna kemudian ditugaskan ke dalam peran tersebut. *(Kunci Jawaban)*
- **C.** Alamat IP dan MAC address perangkat keras yang digunakan.
- **D.** Nama komputer server database.
- **E.** Waktu kadaluarsa token OAuth.

> **Kunci Jawaban Benar:** **B. Peran atau fungsi jabatan (Role), di mana pengguna kemudian ditugaskan ke dalam peran tersebut.**

---

### Soal 11 (Pre Test)
**Pertanyaan:**  
Model Attribute-Based Access Control (ABAC) mengevaluasi kebijakan akses berdasarkan kombinasi atribut subjek, sumber daya, tindakan, dan ...

**Pilihan Jawaban:**
- **A.** Kondisi lingkungan (environment conditions seperti waktu akses, lokasi, dan status jaringan). *(Kunci Jawaban)*
- **B.** Nomor seri kartu identitas fisik pengguna.
- **C.** Hash MD5 dari password database administrator.
- **D.** Panjang kabel jaringan Ethernet.
- **E.** Merek monitor yang digunakan klien.

> **Kunci Jawaban Benar:** **A. Kondisi lingkungan (environment conditions seperti waktu akses, lokasi, dan status jaringan).**

---

### Soal 12 (Pre Test)
**Pertanyaan:**  
Dalam arsitektur protokol Kerberos, komponen yang bertugas mengeluarkan Ticket Granting Ticket (TGT) kepada klien setelah autentikasi awal berhasil adalah ...

**Pilihan Jawaban:**
- **A.** Ticket Granting Server (TGS)
- **B.** Authentication Server (AS) *(Kunci Jawaban)*
- **C.** Resource Server (RS)
- **D.** Service Provider (SP)
- **E.** Certificate Revocation List (CRL)

> **Kunci Jawaban Benar:** **B. Authentication Server (AS)**

---

### Soal 13 (Pre Test)
**Pertanyaan:**  
Mengapa protokol Kerberos sangat bergantung pada sinkronisasi waktu (NTP) antar komputer dengan toleransi drift waktu biasanya maksimal 5 menit?

**Pilihan Jawaban:**
- **A.** Untuk menghitung biaya sewa bandwidth jaringan secara presisi.
- **B.** Untuk memvalidasi timestamp tiket guna mencegah serangan replay (replay attack). *(Kunci Jawaban)*
- **C.** Agar file log server tidak terhapus otomatis oleh sistem operasi.
- **D.** Untuk memastikan CPU tidak mengalami overheat saat enkripsi data.
- **E.** Agar proses handshake TLS tidak memerlukan sertifikat X.509.

> **Kunci Jawaban Benar:** **B. Untuk memvalidasi timestamp tiket guna mencegah serangan replay (replay attack).**

---

### Soal 14 (Post Test)
**Pertanyaan:**  
Dalam federated identity menggunakan SAML 2.0, entitas yang bertugas memverifikasi identitas pengguna dan menerbitkan SAML Assertion bertanda tangan digital disebut ...

**Pilihan Jawaban:**
- **A.** Service Provider (SP)
- **B.** Identity Provider (IdP) *(Kunci Jawaban)*
- **C.** Relying Party (RP)
- **D.** Authorization Server (AS)
- **E.** API Gateway

> **Kunci Jawaban Benar:** **B. Identity Provider (IdP)**

---

### Soal 15 (Post Test)
**Pertanyaan:**  
Pada alur OAuth 2.0 Authorization Code Grant, apa tujuan utama penggunaan parameter 'state' yang dikirimkan klien saat mengarahkan pengguna ke Authorization Server?

**Pilihan Jawaban:**
- **A.** Menyimpan data password pengguna dalam format base64.
- **B.** Mencegah serangan Cross-Site Request Forgery (CSRF) pada proses pertukaran kode otorisasi. *(Kunci Jawaban)*
- **C.** Mempercepat proses parsing JSON pada token response.
- **D.** Menentukan hak akses scope pengguna secara dinamis tanpa persetujuan server.
- **E.** Mengenkripsi payload access token agar tidak terbaca oleh klien.

> **Kunci Jawaban Benar:** **B. Mencegah serangan Cross-Site Request Forgery (CSRF) pada proses pertukaran kode otorisasi.**

---

### Soal 16 (Post Test)
**Pertanyaan:**  
OpenID Connect (OIDC) dibangun di atas protokol OAuth 2.0 untuk melengkapi fungsi yang sebelumnya tidak disediakan oleh OAuth 2.0 murni, yaitu fungsi ...

**Pilihan Jawaban:**
- **A.** Otorisasi delegasi hak akses sumber daya API
- **B.** Autentikasi identitas pengguna (federated authentication) melalui ID Token berbentuk JWT *(Kunci Jawaban)*
- **C.** Routing paket data pada layer transport TCP
- **D.** Kompresi citra biometric sidik jari
- **E.** Enkripsi media penyimpanan harddisk lokal

> **Kunci Jawaban Benar:** **B. Autentikasi identitas pengguna (federated authentication) melalui ID Token berbentuk JWT**

---

### Soal 17 (Post Test)
**Pertanyaan:**  
JSON Web Token (JWT) terdiri dari tiga bagian utama yang dipisahkan oleh karakter titik (.), yaitu ...

**Pilihan Jawaban:**
- **A.** Header, Payload, dan Signature *(Kunci Jawaban)*
- **B.** Username, Password, dan Salt
- **C.** Metadata, Hash, dan Private Key
- **D.** Issuer, Subject, dan Expiration
- **E.** IV, Ciphertext, dan MAC

> **Kunci Jawaban Benar:** **A. Header, Payload, dan Signature**

---

### Soal 18 (Post Test)
**Pertanyaan:**  
Kerentanan kritis pada implementasi JWT di mana penyerang dapat memodifikasi payload dan meminta server memverifikasi token tanpa memeriksa tanda tangan terjadi apabila server menerima nilai header ...

**Pilihan Jawaban:**
- **A.** "alg": "RS256"
- **B.** "alg": "none" *(Kunci Jawaban)*
- **C.** "typ": "JWT"
- **D.** "alg": "HS512"
- **E.** "enc": "A128GCM"

> **Kunci Jawaban Benar:** **B. "alg": "none"**

---

### Soal 19 (Post Test)
**Pertanyaan:**  
Pada serangan Session Fixation, penyerang memanfaatkan celah keamanan di mana ...

**Pilihan Jawaban:**
- **A.** Sistem aplikasi mempertahankan session identifier yang sama persis sebelum dan sesudah pengguna berhasil login. *(Kunci Jawaban)*
- **B.** Penyerang memecahkan kunci enkripsi SSL server menggunakan quantum computing.
- **C.** Pengguna memilih password yang sama untuk lima akun website berbeda.
- **D.** Server database mengalami crash akibat buffer overflow pada driver SQL.
- **E.** Session cookie kadaluarsa terlalu cepat dalam hitungan detik.

> **Kunci Jawaban Benar:** **A. Sistem aplikasi mempertahankan session identifier yang sama persis sebelum dan sesudah pengguna berhasil login.**

---

### Soal 20 (Post Test)
**Pertanyaan:**  
Mitigasi paling efektif pada aplikasi web untuk mencegah pencurian session cookie melalui serangan Cross-Site Scripting (XSS) adalah ...

**Pilihan Jawaban:**
- **A.** Menambahkan flag HttpOnly pada cookie sesi. *(Kunci Jawaban)*
- **B.** Menyimpan session identifier di dalam LocalStorage browser.
- **C.** Mengurangi panjang session identifier menjadi hanya 4 karakter.
- **D.** Menonaktifkan protokol HTTPS pada web server.
- **E.** Mengirimkan session token melalui URL query string.

> **Kunci Jawaban Benar:** **A. Menambahkan flag HttpOnly pada cookie sesi.**

---

### Soal 21 (Post Test)
**Pertanyaan:**  
Atribut cookie 'SameSite=Strict' memberikan perlindungan keamanan yang kuat terhadap serangan ...

**Pilihan Jawaban:**
- **A.** SQL Injection
- **B.** Cross-Site Request Forgery (CSRF) *(Kunci Jawaban)*
- **C.** Denial of Service (DoS)
- **D.** Directory Traversal
- **E.** Man-in-the-Middle (MitM)

> **Kunci Jawaban Benar:** **B. Cross-Site Request Forgery (CSRF)**

---

### Soal 22 (Post Test)
**Pertanyaan:**  
Perbedaan mendasar antara Access Token dan Refresh Token pada protokol OAuth 2.0 adalah ...

**Pilihan Jawaban:**
- **A.** Access token berumur pendek untuk mengakses resource API, sedangkan refresh token berumur lebih panjang dan digunakan untuk mendapatkan access token baru. *(Kunci Jawaban)*
- **B.** Access token disimpan di server, sedangkan refresh token disimpan di DNS publik.
- **C.** Refresh token dikirimkan pada setiap HTTP request header ke Resource Server.
- **D.** Access token tidak memiliki masa kedaluwarsa selamanya.
- **E.** Refresh token hanya boleh menggunakan algoritma enkripsi simetris DES.

> **Kunci Jawaban Benar:** **A. Access token berumur pendek untuk mengakses resource API, sedangkan refresh token berumur lebih panjang dan digunakan untuk mendapatkan access token baru.**

---

### Soal 23 (Post Test)
**Pertanyaan:**  
Prinsip Separation of Duties (Pemisahan Tugas) dalam sistem Access Control bertujuan untuk ...

**Pilihan Jawaban:**
- **A.** Memastikan semua karyawan memiliki wewenang setara dengan sistem administrator.
- **B.** Mencegah kecurangan atau penyalahgunaan wewenang dengan mensyaratkan keterlibatan lebih dari satu individu untuk menyelesaikan tugas kritis. *(Kunci Jawaban)*
- **C.** Membagi beban kerja komputasi jaringan secara merata ke seluruh server.
- **D.** Memisahkan partisi harddisk sistem operasi dari partisi data pengguna.
- **E.** Memaksa setiap pengguna mengganti password setiap 24 jam sekali.

> **Kunci Jawaban Benar:** **B. Mencegah kecurangan atau penyalahgunaan wewenang dengan mensyaratkan keterlibatan lebih dari satu individu untuk menyelesaikan tugas kritis.**

---

### Soal 24 (Post Test)
**Pertanyaan:**  
Ketika merancang sistem autentikasi berbasis biometric wajah, manajemen memutuskan untuk memprioritaskan keamanan fisik fasilitas berisiko tinggi di atas kenyamanan pengguna. Penyesuaian threshold matching score (t) yang tepat adalah ...

**Pilihan Jawaban:**
- **A.** Menurunkan nilai threshold t agar pengguna dapat masuk lebih cepat tanpa antrean.
- **B.** Menaikkan nilai threshold t untuk meminimalkan False Acceptance Rate (FAR), meskipun False Rejection Rate (FRR) meningkat. *(Kunci Jawaban)*
- **C.** Menonaktifkan threshold dan menerima seluruh citra wajah yang terdeteksi kamera.
- **D.** Menyetel threshold ke nilai nol mutlak.
- **E.** Mengganti kamera beresolusi tinggi dengan sensor suhu inframerah sederhana.

> **Kunci Jawaban Benar:** **B. Menaikkan nilai threshold t untuk meminimalkan False Acceptance Rate (FAR), meskipun False Rejection Rate (FRR) meningkat.**

---

### Soal 25 (Post Test)
**Pertanyaan:**  
Apa kelemahan utama dari mekanisme autentikasi berbasis SMS OTP (One-Time Password) dibandingkan Time-based One-Time Password (TOTP) berbasis aplikasi authenticator?

**Pilihan Jawaban:**
- **A.** SMS OTP membutuhkan perangkat hardware token khusus yang mahal.
- **B.** SMS rentan terhadap intersepsi jaringan seluler (SS7 vulnerability) dan serangan SIM Swapping oleh penyerang. *(Kunci Jawaban)*
- **C.** SMS OTP hanya dapat digunakan pada komputer desktop tanpa koneksi internet.
- **D.** Aplikasi authenticator selalu mengirimkan kode OTP secara plaintext ke server telekomunikasi.
- **E.** SMS OTP tidak memiliki batas waktu kedaluwarsa.

> **Kunci Jawaban Benar:** **B. SMS rentan terhadap intersepsi jaringan seluler (SS7 vulnerability) dan serangan SIM Swapping oleh penyerang.**

---

## 📌 Week 3 - Cyber Law, Ethics & Computer Crime

### Soal 1 (Pre Test)
**Pertanyaan:**  
Seorang security researcher menemukan zero-day vulnerability pada portal perbankan nasional. Menurut etika profesional Coordinated Vulnerability Disclosure (Responsible Disclosure), langkah pertama yang wajib diambil oleh researcher tersebut adalah ...

**Pilihan Jawaban:**
- **A.** Menjual exploit tersebut di pasar gelap dark web untuk mendapatkan keuntungan finansial.
- **B.** Mempublikasikan detail exploit secara publik di media sosial sebelum vendor sempat mengetahuinya.
- **C.** Melaporkan temuan secara tertutup kepada pihak pengembang/vendor terkait dan memberikan waktu yang wajar untuk patch sebelum pengungkapan publik. *(Kunci Jawaban)*
- **D.** Menggunakan kerentanan tersebut untuk mengekstrak saldo nasabah demi membuktikan dampak risiko.
- **E.** Menghapus seluruh database server agar kerentanan tidak dieksploitasi pihak lain.

> **Kunci Jawaban Benar:** **C. Melaporkan temuan secara tertutup kepada pihak pengembang/vendor terkait dan memberikan waktu yang wajar untuk patch sebelum pengungkapan publik.**

---

### Soal 2 (Pre Test)
**Pertanyaan:**  
Berdasarkan prinsip Data Minimization dalam regulasi perlindungan data pribadi (UU PDP dan GDPR), sebuah aplikasi toko online wajib ...

**Pilihan Jawaban:**
- **A.** Mengumpulkan seluruh data pribadi pengguna termasuk rekam medis dan data biometrik untuk cadangan masa depan.
- **B.** Hanya mengumpulkan dan memproses data pribadi yang benar-benar relevan, memadai, dan terbatas pada tujuan transaksi yang telah disepakati. *(Kunci Jawaban)*
- **C.** Menjual data pelanggan kepada pihak ketiga tanpa memerlukan persetujuan pemilik data.
- **D.** Menyimpan data log percakapan telepon pengguna selama minimal 50 tahun.
- **E.** Menonaktifkan enkripsi database agar data mudah diaudit oleh publik.

> **Kunci Jawaban Benar:** **B. Hanya mengumpulkan dan memproses data pribadi yang benar-benar relevan, memadai, dan terbatas pada tujuan transaksi yang telah disepakati.**

---

### Soal 3 (Pre Test)
**Pertanyaan:**  
Dalam UU ITE (Undang-Undang Informasi dan Transaksi Elektronik), tindakan mengakses komputer atau sistem elektronik milik orang lain dengan cara melanggar, menerobos, melampaui, atau menjebol sistem pengamanan diatur secara spesifik dalam ...

- **A**. Pasal 27 ayat (1) (Larangan mendistribusikan konten elektronik berkonten asusila/pornografi)
- **B**. Pasal 28 ayat (2) (Larangan menyebarkan ujaran kebencian berbasis SARA)
- **C**. Pasal 30 ayat (3) (Illegal access dengan melanggar, menerobos, melampaui, atau menjebol sistem pengamanan/cracking)
- **D**. Pasal 35 (Manipulasi atau pemalsuan dokumen elektronik/electronic forgery)
- **E**. Pasal 45 (Ketentuan sanksi pidana penjara dan denda)

> **Kunci Jawaban:** `C` - Pasal 30 ayat (3) (Illegal access dengan melanggar, menerobos, melampaui, atau menjebol sistem pengamanan/cracking)

### Soal 4 (Pre Test)
**Pertanyaan:**  
Seseorang memasang packet sniffer pada jaringan Wi-Fi privat perusahaan tanpa izin untuk menangkap transmisi data sensitif yang tidak bersifat publik. Tindakan penyadapan ini diatur dan dilarang dalam UU ITE pada ...

- **A**. Pasal 31 ayat (1) (Interception/penyadapan transmisi informasi elektronik pada sistem privat tanpa hak/sniffing)
- **B**. Pasal 30 ayat (1) (Akses tanpa hak ke komputer atau sistem elektronik)
- **C**. Pasal 33 (Tindakan yang berakibat terganggunya kinerja sistem elektronik/serangan DoS)
- **D**. Pasal 35 (Pemalsuan data atau manipulasi dokumen elektronik)
- **E**. Pasal 36 (Pemberatan hukuman apabila kejahatan siber mengakibatkan kerugian materiil bagi pihak lain)

> **Kunci Jawaban:** `A` - Pasal 31 ayat (1) (Interception/penyadapan transmisi informasi elektronik pada sistem privat tanpa hak/sniffing)

### Soal 5 (Pre Test)
**Pertanyaan:**  
Seorang mantan karyawan yang kecewa sengaja menghapus tabel database nasabah dan mengubah record saldo rekening. Tindakan pengubahan, perusakan, dan penghapusan informasi elektronik milik orang lain ini melanggar UU ITE ...

- **A**. Pasal 27 ayat (3) (Pencemaran nama baik dan penghinaan melalui media sosial)
- **B**. Pasal 32 ayat (1) (Data interference: mengubah, menambah, mengurangi, merusak, atau menghapus informasi/dokumen elektronik orang lain)
- **C**. Pasal 31 ayat (2) (Penyadapan transmisi data dari satu komputer ke komputer lain)
- **D**. Pasal 34 (Penyediaan atau penjualan alat dan perangkat lunak peretas)
- **E**. Pasal 30 ayat (1) (Mengakses sistem komputer tanpa mengubah isi data)

> **Kunci Jawaban:** `B` - Pasal 32 ayat (1) (Data interference: mengubah, menambah, mengurangi, merusak, atau menghapus informasi/dokumen elektronik orang lain)

### Soal 6 (Pre Test)
**Pertanyaan:**  
Tindakan melancarkan serangan Distributed Denial of Service (DDoS) yang menyebabkan server layanan publik lumpuh dan tidak dapat diakses masyarakat termasuk pelanggaran UU ITE ...

**Pilihan Jawaban:**
- **A.** Pasal 33 (Tindakan yang berakibat terganggunya Sistem Elektronik dan/atau mengakibatkan Sistem Elektronik menjadi tidak bekerja sebagaimana mestinya) *(Kunci Jawaban)*
- **B.** Pasal 27 ayat (2) tentang perjudian online
- **C.** Pasal 31 ayat (1) tentang penyadapan
- **D.** Pasal 35 tentang manipulasi dokumen
- **E.** Pasal 30 ayat (1) tentang browsing biasa

> **Kunci Jawaban Benar:** **A. Pasal 33 (Tindakan yang berakibat terganggunya Sistem Elektronik dan/atau mengakibatkan Sistem Elektronik menjadi tidak bekerja sebagaimana mestinya)**

---

### Soal 7 (Pre Test)
**Pertanyaan:**  
Seseorang memproduksi dan memperjualbelikan software peretas (exploit kit) yang dirancang khusus untuk memfasilitasi pembobolan sistem perbankan. Tindakan penyediaan perangkat keras atau lunak untuk memfasilitasi kejahatan komputer ini diatur dalam UU ITE ...

- **A**. Pasal 30 ayat (2) (Akses ilegal untuk memperoleh informasi/dokumen elektronik)
- **B**. Pasal 34 ayat (1) (Misuse of devices: memproduksi, menjual, menyebarkan, atau memiliki perangkat keras/lunak yang dirancang untuk memfasilitasi peretasan)
- **C**. Pasal 31 ayat (1) (Penyadapan transmisi data jaringan privat)
- **D**. Pasal 28 ayat (1) (Penyebaran berita bohong yang merugikan konsumen transaksi elektronik)
- **E**. Pasal 29 (Pengiriman informasi elektronik yang berisi ancaman kekerasan pribadi)

> **Kunci Jawaban:** `B` - Pasal 34 ayat (1) (Misuse of devices: memproduksi, menjual, menyebarkan, atau memiliki perangkat keras/lunak yang dirancang untuk memfasilitasi peretasan)

### Soal 8 (Pre Test)
**Pertanyaan:**  
Membuat sertifikat digital palsu atau memanipulasi dokumen elektronik rekening bank agar tampak seolah-olah merupakan data yang otentik (Electronic Forgery) dilarang dalam UU ITE pada ...

- **A**. Pasal 35 (Electronic forgery: memanipulasi, menciptakan, atau mengubah dokumen elektronik agar seolah-olah otentik)
- **B**. Pasal 30 (Illegal access ke dalam jaringan komputer tanpa hak)
- **C**. Pasal 31 (Interception atau penyadapan kabel/gelombang radio transmisi)
- **D**. Pasal 32 (Perusakan atau penghapusan data database perusahaan)
- **E**. Pasal 33 (Serangan siber yang mengakibatkan lumpuhnya layanan server)

> **Kunci Jawaban:** `A` - Pasal 35 (Electronic forgery: memanipulasi, menciptakan, atau mengubah dokumen elektronik agar seolah-olah otentik)

### Soal 9 (Pre Test)
**Pertanyaan:**  
Budapest Convention on Cybercrime (Convention ETS 185) merupakan instrumen internasional penting yang bertujuan untuk ...

**Pilihan Jawaban:**
- **A.** Mewajibkan seluruh negara memblokir akses internet secara sepihak.
- **B.** Mengharmonisasikan hukum pidana siber nasional, meningkatkan kemampuan investigasi, dan memfasilitasi kerjasama peradilan internasional lintas batas. *(Kunci Jawaban)*
- **C.** Menetapkan tarif pajak standar untuk transaksi e-commerce global.
- **D.** Melarang riset kriptografi sumber terbuka di perguruan tinggi.
- **E.** Menghapus wewenang aparat penegak hukum lokal dalam menyita barang bukti digital.

> **Kunci Jawaban Benar:** **B. Mengharmonisasikan hukum pidana siber nasional, meningkatkan kemampuan investigasi, dan memfasilitasi kerjasama peradilan internasional lintas batas.**

---

### Soal 10 (Pre Test)
**Pertanyaan:**  
Dalam hukum forensik digital, dokumentasi kronologis ketat mengenai siapa yang menyita, menerima, memindahkan, menganalisis, dan menyimpan barang bukti digital disebut ...

**Pilihan Jawaban:**
- **A.** Order of Volatility
- **B.** Chain of Custody *(Kunci Jawaban)*
- **C.** Incident Response Plan
- **D.** Electronic Discovery Protocol
- **E.** Forensic Audit Log

> **Kunci Jawaban Benar:** **B. Chain of Custody**

---

### Soal 11 (Pre Test)
**Pertanyaan:**  
Mengapa penyidik forensik digital wajib menggunakan perangkat hardware write-blocker saat menghubungkan media penyimpanan bukti asli ke komputer workstation analisis?

**Pilihan Jawaban:**
- **A.** Agar kecepatan transfer data harddisk meningkat dua kali lipat.
- **B.** Untuk mencegah sistem operasi workstation mengubah, menulis, atau memodifikasi metadata/isi berkas pada media bukti asli secara tidak sengaja. *(Kunci Jawaban)*
- **C.** Untuk menghapus malware yang mungkin aktif pada harddisk bukti secara otomatis.
- **D.** Agar partisi harddisk yang terenkripsi langsung terdekripsi tanpa kata sandi.
- **E.** Untuk mengompresi ukuran disk image menjadi format zip.

> **Kunci Jawaban Benar:** **B. Untuk mencegah sistem operasi workstation mengubah, menulis, atau memodifikasi metadata/isi berkas pada media bukti asli secara tidak sengaja.**

---

### Soal 12 (Pre Test)
**Pertanyaan:**  
Bagaimana seorang ahli forensik membuktikan di depan pengadilan bahwa salinan bit-stream image identik secara sempurna dengan harddisk bukti asli di tempat kejadian perkara (TKP)?

**Pilihan Jawaban:**
- **A.** Dengan membandingkan jumlah folder pada Windows Explorer.
- **B.** Dengan menunjukkan bahwa nilai cryptographic hash (misalnya SHA-256) dari media asli sama persis dengan nilai hash salinan image sebelum dan sesudah analisis. *(Kunci Jawaban)*
- **C.** Dengan mencetak isi seluruh file di atas kertas bermaterai.
- **D.** Dengan mengonfirmasi pengakuan lisan dari tersangka peretasan.
- **E.** Dengan memeriksa tanggal pembuatan casing komputer.

> **Kunci Jawaban Benar:** **B. Dengan menunjukkan bahwa nilai cryptographic hash (misalnya SHA-256) dari media asli sama persis dengan nilai hash salinan image sebelum dan sesudah analisis.**

---

### Soal 13 (Pre Test)
**Pertanyaan:**  
Berdasarkan standar RFC 3227 mengenai urutan volatilitas data (Order of Volatility), manakah sumber data yang paling mudah hilang / mudah menguap dan wajib diakuisisi pertama kali?

**Pilihan Jawaban:**
- **A.** Data pada harddisk magnetik lokal
- **B.** Media pita cadangan (backup tape)
- **C.** Isi register CPU, cache memori, dan memori fisik (RAM) *(Kunci Jawaban)*
- **D.** Dokumen cetak pada lemari arsip
- **E.** Kabel jaringan serat optik

> **Kunci Jawaban Benar:** **C. Isi register CPU, cache memori, dan memori fisik (RAM)**

---

### Soal 14 (Post Test)
**Pertanyaan:**  
Pada penanganan insiden ransomware yang sedang aktif menginfeksi sebuah server, mengapa mematikan daya secara mendadak (hard power-off) sering kali tidak disarankan sebelum live memory capture dilakukan?

**Pilihan Jawaban:**
- **A.** Mematikan server akan merusak fisik monitor dan keyboard.
- **B.** Daya yang hilang akan melenyapkan isi RAM yang berpotensi menyimpan kunci enkripsi ransomware, proses malware aktif, dan koneksi jaringan memori. *(Kunci Jawaban)*
- **C.** Ransomware akan langsung menyebar ke seluruh internet secara otomatis.
- **D.** Sistem operasi tidak akan bisa diinstal ulang selamanya.
- **E.** Harddisk akan kehilangan partisi booting secara permanen.

> **Kunci Jawaban Benar:** **B. Daya yang hilang akan melenyapkan isi RAM yang berpotensi menyimpan kunci enkripsi ransomware, proses malware aktif, dan koneksi jaringan memori.**

---

### Soal 15 (Post Test)
**Pertanyaan:**  
Teknik anti-forensik di mana penyerang dengan sengaja memanipulasi timestamp MAC (Modified, Accessed, Created) pada file system untuk mengaburkan kronologi insiden disebut ...

**Pilihan Jawaban:**
- **A.** Data Degaussing
- **B.** Timestomping *(Kunci Jawaban)*
- **C.** Buffer Overflow
- **D.** Memory Injection
- **E.** Traffic Sniffing

> **Kunci Jawaban Benar:** **B. Timestomping**

---

### Soal 16 (Post Test)
**Pertanyaan:**  
Serangan Business Email Compromise (BEC) umumnya menargetkan divisi keuangan perusahaan dengan modus ...

**Pilihan Jawaban:**
- **A.** Menginfeksi komputer dengan worm jaringan yang menggandakan diri.
- **B.** Memalsukan email identitas eksekutif/vendor rekanan tepercaya untuk menginstruksikan transfer dana ke rekening penipu melalui rekayasa sosial. *(Kunci Jawaban)*
- **C.** Melakukan serangan brute-force terhadap password BIOS server.
- **D.** Memutuskan kabel optik bawah laut antarnegara.
- **E.** Mengubah tampilan visual halaman depan website perusahaan (web defacement).

> **Kunci Jawaban Benar:** **B. Memalsukan email identitas eksekutif/vendor rekanan tepercaya untuk menginstruksikan transfer dana ke rekening penipu melalui rekayasa sosial.**

---

### Soal 17 (Post Test)
**Pertanyaan:**  
Serangan phishing yang ditargetkan secara spesifik kepada individu berpangkat tinggi seperti CEO, CFO, atau pejabat pemerintah dengan informasi personal yang sangat mendalam disebut ...

**Pilihan Jawaban:**
- **A.** Bulk Spamming
- **B.** Whaling *(Kunci Jawaban)*
- **C.** Phreaking
- **D.** Adware Infiltration
- **E.** Denial of Service

> **Kunci Jawaban Benar:** **B. Whaling**

---

### Soal 18 (Post Test)
**Pertanyaan:**  
Perbedaan lisensi perangkat lunak Copyleft (seperti GNU GPL) dengan lisensi Permissive (seperti MIT atau Apache 2.0) adalah ...

**Pilihan Jawaban:**
- **A.** Lisensi GPL melarang siapa pun mengunduh kode sumber.
- **B.** Lisensi GPL mewajibkan setiap karya turunan untuk tetap dirilis dengan lisensi open source yang sama (GPL), sedangkan MIT mengizinkan integrasi ke software komersial berpemilik. *(Kunci Jawaban)*
- **C.** Lisensi MIT melarang penggunaan perangkat lunak untuk keperluan komersial.
- **D.** Lisensi GPL memungut royalti sebesar 10% dari setiap penjualan.
- **E.** Lisensi MIT hanya berlaku untuk aplikasi berbasis mobile Android.

> **Kunci Jawaban Benar:** **B. Lisensi GPL mewajibkan setiap karya turunan untuk tetap dirilis dengan lisensi open source yang sama (GPL), sedangkan MIT mengizinkan integrasi ke software komersial berpemilik.**

---

### Soal 19 (Post Test)
**Pertanyaan:**  
Dalam konteks etika dan legalitas Penetration Testing, dokumen krusial yang mendefinisikan batasan sistem target, jadwal waktu pengujian, teknik yang diizinkan, dan kontak darurat disebut ...

**Pilihan Jawaban:**
- **A.** Certificate of Authenticity (CoA)
- **B.** Rules of Engagement (RoE) / Scope of Work *(Kunci Jawaban)*
- **C.** End-User License Agreement (EULA)
- **D.** Privacy Policy Statement
- **E.** Hardware Warranty Agreement

> **Kunci Jawaban Benar:** **B. Rules of Engagement (RoE) / Scope of Work**

---

### Soal 20 (Post Test)
**Pertanyaan:**  
Karakteristik utama dari ancaman Insider Threat yang menjadikannya sangat berbahaya dan sulit dideteksi oleh firewall konvensional adalah ...

**Pilihan Jawaban:**
- **A.** Penyerang tidak memiliki akun login ke dalam sistem perusahaan.
- **B.** Pelaku telah memiliki kredensial resmi dan hak akses sah ke jaringan internal sehingga aktivitas awalnya tampak seperti perilaku kerja biasa. *(Kunci Jawaban)*
- **C.** Serangan selalu berasal dari negara dengan zona waktu yang berbeda.
- **D.** Pelaku selalu menggunakan alat peretas automated exploit yang meninggalkan jejak jelas.
- **E.** Insider threat hanya terjadi pada sistem operasi lama yang tidak lagi diperbarui.

> **Kunci Jawaban Benar:** **B. Pelaku telah memiliki kredensial resmi dan hak akses sah ke jaringan internal sehingga aktivitas awalnya tampak seperti perilaku kerja biasa.**

---

### Soal 21 (Post Test)
**Pertanyaan:**  
Sifat 'Non-Repudiation' (penyangkalan yang tidak dapat dilakukan) dalam transaksi elektronik paling tepat diwujudkan melalui penggunaan teknologi ...

**Pilihan Jawaban:**
- **A.** CAPTCHA berbasis gambar
- **B.** Tanda tangan digital (Digital Signature) berbasis kriptografi asimetris dan sertifikat elektronik tersertifikasi *(Kunci Jawaban)*
- **C.** Protokol HTTP tanpa enkripsi
- **D.** Password bersama (shared password) satu kantor
- **E.** Firewall berbasis stateless packet filter

> **Kunci Jawaban Benar:** **B. Tanda tangan digital (Digital Signature) berbasis kriptografi asimetris dan sertifikat elektronik tersertifikasi**

---

### Soal 22 (Post Test)
**Pertanyaan:**  
Berdasarkan regulasi UU Perlindungan Data Pribadi (UU PDP), ketika terjadi insiden kegagalan perlindungan data pribadi (data breach), pengendali data wajib menyampaikan pemberitahuan tertulis kepada lembaga pengawas dan subjek data paling lambat dalam waktu ...

**Pilihan Jawaban:**
- **A.** 3 x 24 jam *(Kunci Jawaban)*
- **B.** 30 hari kerja
- **C.** 6 bulan setelah audit tahunan
- **D.** 1 tahun setelah insiden selesai diinvestigasi
- **E.** Tidak ada kewajiban memberitahukan insiden kepada subjek data

> **Kunci Jawaban Benar:** **A. 3 x 24 jam**

---

### Soal 23 (Post Test)
**Pertanyaan:**  
Prinsip etika ACM Code of Ethics mengenai 'Honor Property Rights including Copyrights and Patents' menegaskan bahwa profesional komputer dilarang ...

**Pilihan Jawaban:**
- **A.** Membaca dokumentasi open-source di internet.
- **B.** Menduplikasi, mendistribusikan, atau menggunakan karya perangkat lunak atau kekayaan intelektual orang lain tanpa izin atau lisensi yang sah. *(Kunci Jawaban)*
- **C.** Membuat kode program yang menggunakan pustaka matematika standar.
- **D.** Membeli perangkat keras komputer dari vendor luar negeri.
- **E.** Menulis program komputer untuk tujuan komersial.

> **Kunci Jawaban Benar:** **B. Menduplikasi, mendistribusikan, atau menggunakan karya perangkat lunak atau kekayaan intelektual orang lain tanpa izin atau lisensi yang sah.**

---

### Soal 24 (Post Test)
**Pertanyaan:**  
Dokumen hukum internasional non-mengikat yang merumuskan bagaimana hukum humaniter internasional berlaku pada domain perang siber (cyber warfare) dikenal dengan nama ...

**Pilihan Jawaban:**
- **A.** Geneva Convention Amendment 1999
- **B.** Tallinn Manual on the International Law Applicable to Cyber Warfare *(Kunci Jawaban)*
- **C.** Wassenaar Arrangement on Cyber Arms
- **D.** Kyoto Protocol Cyber Annex
- **E.** Rome Statute Cyber Article

> **Kunci Jawaban Benar:** **B. Tallinn Manual on the International Law Applicable to Cyber Warfare**

---

### Soal 25 (Post Test)
**Pertanyaan:**  
Seorang teknisi TI menemukan log bahwa salah satu pengguna mengunduh data rahasia perusahaan dalam jumlah mencurigakan pada pukul 02:00 dini hari. Sebelum mengambil tindakan hukum atau disipliner, langkah kepatuhan profesional yang harus dijaga teknisi adalah ...

**Pilihan Jawaban:**
- **A.** Menyebarkan nama pengguna tersebut di grup obrolan publik agar dipermalukan.
- **B.** Menjaga integritas data log sebagai barang bukti, mencatat rantai penanganan bukti (chain of custody), dan melaporkannya kepada tim kepatuhan internal/CISO sesuai SOP. *(Kunci Jawaban)*
- **C.** Menghapus akun pengguna dan memformat komputer tanpa menyimpan salinan forensik.
- **D.** Meretas perangkat pribadi pengguna tersebut untuk membalas dendam.
- **E.** Mengabaikan insiden tersebut karena bukan tanggung jawab langsung.

> **Kunci Jawaban Benar:** **B. Menjaga integritas data log sebagai barang bukti, mencatat rantai penanganan bukti (chain of custody), dan melaporkannya kepada tim kepatuhan internal/CISO sesuai SOP.**

---

## 📌 Week 4 - Software Security, Secure Coding & Testing

### Soal 1 (Pre Test)
**Pertanyaan:**  
Prinsip 'Fail-Safe Defaults' dalam desain perangkat lunak aman menyatakan bahwa ...

**Pilihan Jawaban:**
- **A.** Jika terjadi kegagalan atau galat pada sistem, hak akses secara bawaan harus ditolak (default deny), bukan diizinkan. *(Kunci Jawaban)*
- **B.** Sistem harus terus berjalan meskipun memori bocor tanpa membatasi hak akses pengguna.
- **C.** Aplikasi harus mematikan firewall server jika terjadi kesalahan jaringan.
- **D.** Semua pengguna baru secara otomatis diberikan hak akses administrator sistem.
- **E.** Sistem harus merahasiakan algoritma enkripsi agar tidak diketahui penguji keamanan.

> **Kunci Jawaban Benar:** **A. Jika terjadi kegagalan atau galat pada sistem, hak akses secara bawaan harus ditolak (default deny), bukan diizinkan.**

---

### Soal 2 (Pre Test)
**Pertanyaan:**  
Pada arsitektur memori program berbasis arsitektur x86/x64, arah pertumbuhan stack dan letak Return Address (EIP/RIP) dalam stack frame menyebabkan buffer overflow dapat mengeksploitasi sistem karena ...

**Pilihan Jawaban:**
- **A.** Stack tumbuh ke arah alamat memori lebih rendah, sementara pengisian array buffer lokal tumbuh ke arah alamat lebih tinggi menuju Saved Frame Pointer dan Return Address. *(Kunci Jawaban)*
- **B.** Stack dan Heap berada pada segmen memori yang sama persis tanpa pemisah.
- **C.** Return Address selalu disimpan di dalam register prosesor dan tidak pernah diletakkan di memori RAM.
- **D.** Ukuran stack selalu bersifat dinamis tanpa batas maksimal.
- **E.** Compiler C selalu menyisipkan kode NOP sled secara otomatis pada setiap fungsi.

> **Kunci Jawaban Benar:** **A. Stack tumbuh ke arah alamat memori lebih rendah, sementara pengisian array buffer lokal tumbuh ke arah alamat lebih tinggi menuju Saved Frame Pointer dan Return Address.**

---

### Soal 3 (Pre Test)
**Pertanyaan:**  
Sebuah loop pada bahasa C menulis data sebanyak N+1 elemen ke dalam array buffer berukuran N. Kesalahan batas memori satu byte ini dikenal sebagai ...

**Pilihan Jawaban:**
- **A.** Null Pointer Dereference
- **B.** Off-by-one vulnerability *(Kunci Jawaban)*
- **C.** Type Confusion
- **D.** Integer Underflow
- **E.** Cross-Site Scripting

> **Kunci Jawaban Benar:** **B. Off-by-one vulnerability**

---

### Soal 4 (Pre Test)
**Pertanyaan:**  
Mekanisme proteksi Stack Canary (Stack Cookie) yang disisipkan oleh compiler antara variabel lokal dan Saved Frame Pointer bekerja dengan cara ...

**Pilihan Jawaban:**
- **A.** Mengenkripsi seluruh instruksi biner menggunakan AES-256 sebelum dieksekusi CPU.
- **B.** Menaruh nilai integer acak sebelum Return Address dan memverifikasi integritas nilai tersebut sebelum fungsi melakukan instruksi return (RET). *(Kunci Jawaban)*
- **C.** Mengalokasikan seluruh variabel lokal di memori Read-Only Data (.rodata).
- **D.** Menonaktifkan pointer arithmetic pada runtime sistem operasi.
- **E.** Mengganti semua tipe data integer menjadi float.

> **Kunci Jawaban Benar:** **B. Menaruh nilai integer acak sebelum Return Address dan memverifikasi integritas nilai tersebut sebelum fungsi melakukan instruksi return (RET).**

---

### Soal 5 (Pre Test)
**Pertanyaan:**  
Fitur keamanan Address Space Layout Randomization (ASLR) pada sistem operasi modern dirancang untuk menggagalkan eksploitasi buffer overflow dengan cara ...

**Pilihan Jawaban:**
- **A.** Mengacak lokasi base address memori stack, heap, dan shared libraries setiap kali program dieksekusi sehingga penyerang tidak dapat memprediksi alamat lompatan shellcode. *(Kunci Jawaban)*
- **B.** Menghapus kode biner program setelah proses selesai berjalan.
- **C.** Mengubah nama file executable menjadi string acak di direktori instalasi.
- **D.** Memblokir seluruh port jaringan TCP yang terbuka di server.
- **E.** Membatasi kecepatan eksekusi instruksi per detik pada CPU.

> **Kunci Jawaban Benar:** **A. Mengacak lokasi base address memori stack, heap, dan shared libraries setiap kali program dieksekusi sehingga penyerang tidak dapat memprediksi alamat lompatan shellcode.**

---

### Soal 6 (Pre Test)
**Pertanyaan:**  
Data Execution Prevention (DEP) atau fitur No-Execute (NX / W^X) melindungi sistem operasi dengan menerapkan aturan bahwa ...

**Pilihan Jawaban:**
- **A.** Sebuah halaman memori tidak boleh memiliki izin tulis (writable) dan izin eksekusi (executable) secara bersamaan. *(Kunci Jawaban)*
- **B.** File biner tidak boleh dibaca oleh pengguna non-root.
- **C.** Aplikasi tidak diizinkan membuka koneksi soket jaringan keluar.
- **D.** Program C dilarang menggunakan fungsi alokasi memori dinamis malloc().
- **E.** Setiap file teks harus memiliki ekstensi .bin sebelum dijalankan.

> **Kunci Jawaban Benar:** **A. Sebuah halaman memori tidak boleh memiliki izin tulis (writable) dan izin eksekusi (executable) secara bersamaan.**

---

### Soal 7 (Pre Test)
**Pertanyaan:**  
Ketika mekanisme proteksi DEP/NX aktif sehingga shellcode di stack tidak dapat dieksekusi langsung, teknik eksploitasi canggih yang merangkai potongan instruksi biner yang sudah ada di memori dan diakhiri instruksi 'ret' disebut ...

**Pilihan Jawaban:**
- **A.** SQL Injection
- **B.** Return-Oriented Programming (ROP) *(Kunci Jawaban)*
- **C.** Cross-Site Request Forgery (CSRF)
- **D.** Denial of Service (DoS)
- **E.** Directory Traversal

> **Kunci Jawaban Benar:** **B. Return-Oriented Programming (ROP)**

---

### Soal 8 (Pre Test)
**Pertanyaan:**  
Kerentanan memori Use-After-Free (UAF) terjadi pada sebuah aplikasi ketika ...

**Pilihan Jawaban:**
- **A.** Sebuah pointer tetap merujuk dan mengakses area memori heap yang sebelumnya telah dibebaskan (deallocated/freed). *(Kunci Jawaban)*
- **B.** Aplikasi tidak menggunakan lisensi perangkat lunak berbayar.
- **C.** Sistem kehabisan ruang harddisk saat menyimpan log aplikasi.
- **D.** Dua thread mengakses variabel konstan secara bersamaan.
- **E.** Program C dikompilasi menggunakan compiler berbasis Java.

> **Kunci Jawaban Benar:** **A. Sebuah pointer tetap merujuk dan mengakses area memori heap yang sebelumnya telah dibebaskan (deallocated/freed).**

---

### Soal 9 (Pre Test)
**Pertanyaan:**  
Memanggil fungsi free() sebanyak dua kali pada alamat pointer memori heap yang sama tanpa alokasi baru di antaranya memicu kerentanan yang disebut ...

**Pilihan Jawaban:**
- **A.** Double Free *(Kunci Jawaban)*
- **B.** Memory Leak
- **C.** Buffer Underflow
- **D.** Stack Exhaustion
- **E.** Deadlock Threading

> **Kunci Jawaban Benar:** **A. Double Free**

---

### Soal 10 (Pre Test)
**Pertanyaan:**  
Perhatikan potongan kode C berikut: printf(user_input);. Mengapa penulisan kode tersebut sangat berbahaya?

**Pilihan Jawaban:**
- **A.** Fungsi printf tidak mendukung tampilan teks berwarna di terminal.
- **B.** Jika user_input berisi format specifier seperti %x, %s, atau %n, penyerang dapat membaca isi stack atau menulis data ke alamat memori arbitrer (Format String Vulnerability). *(Kunci Jawaban)*
- **C.** Fungsi printf akan otomatis mengunduh malware dari internet jika string terlalu panjang.
- **D.** Compiler akan menolak mengompilasi kode tersebut secara permanen.
- **E.** Variabel user_input otomatis terhapus dari sistem berkas.

> **Kunci Jawaban Benar:** **B. Jika user_input berisi format specifier seperti %x, %s, atau %n, penyerang dapat membaca isi stack atau menulis data ke alamat memori arbitrer (Format String Vulnerability).**

---

### Soal 11 (Pre Test)
**Pertanyaan:**  
Sebuah variabel unsigned 16-bit integer bernilai 65535 ditambah dengan nilai 1. Fenomena aritmatika yang terjadi sehingga nilai variabel tersebut membungkus menjadi 0 disebut ...

**Pilihan Jawaban:**
- **A.** Floating-point division by zero
- **B.** Integer Overflow / Wraparound *(Kunci Jawaban)*
- **C.** Buffer Smashing
- **D.** Race Condition
- **E.** Type Casting Violation

> **Kunci Jawaban Benar:** **B. Integer Overflow / Wraparound**

---

### Soal 12 (Pre Test)
**Pertanyaan:**  
Kondisi balapan Time-of-Check to Time-of-Use (TOCTOU) pada sistem berkas terjadi ketika ...

**Pilihan Jawaban:**
- **A.** Terdapat jeda waktu antara saat sistem memeriksa izin suatu berkas (check) dan saat sistem melakukan operasi terhadap berkas tersebut (use), yang memungkinkan penyerang mengganti berkas dengan symlink. *(Kunci Jawaban)*
- **B.** Jam internal server mengalami lompatan waktu ke masa lampau akibat manipulasi NTP.
- **C.** Waktu kedaluwarsa password pengguna habis saat proses login berlangsung.
- **D.** Dua query SQL dijalankan pada koneksi database yang berbeda tanpa transaksi.
- **E.** Sistem kompilasi kode membutuhkan waktu lebih dari 60 menit.

> **Kunci Jawaban Benar:** **A. Terdapat jeda waktu antara saat sistem memeriksa izin suatu berkas (check) dan saat sistem melakukan operasi terhadap berkas tersebut (use), yang memungkinkan penyerang mengganti berkas dengan symlink.**

---

### Soal 13 (Pre Test)
**Pertanyaan:**  
Manakah fungsi pustaka standar bahasa C berikut yang dianggap SANGAT BERBAHAYA dan dilarang digunakan dalam secure coding karena tidak memiliki mekanisme pembatasan ukuran input sama sekali?

**Pilihan Jawaban:**
- **A.** fgets()
- **B.** snprintf()
- **C.** gets() *(Kunci Jawaban)*
- **D.** strncpy()
- **E.** strncat()

> **Kunci Jawaban Benar:** **C. gets()**

---

### Soal 14 (Post Test)
**Pertanyaan:**  
Mengapa pendekatan input validation berbasis Whitelisting (Positive Validation) jauh lebih aman dibandingkan Blacklisting (Negative Validation)?

**Pilihan Jawaban:**
- **A.** Whitelisting hanya menerima pola data yang secara eksplisit diketahui valid dan aman, sedangkan blacklisting berisiko gagal mendeteksi teknik pengaburan baru (obfuscation/evasion). *(Kunci Jawaban)*
- **B.** Whitelisting menggunakan algoritma AI canggih yang tidak memerlukan konfigurasi aturan.
- **C.** Blacklisting membuat ukuran file program menjadi terlalu besar untuk memori RAM.
- **D.** Whitelisting hanya memeriksa ekstensi file tanpa memeriksa isi konten.
- **E.** Blacklisting dilarang oleh standar keamanan perangkat keras PCI-DSS.

> **Kunci Jawaban Benar:** **A. Whitelisting hanya menerima pola data yang secara eksplisit diketahui valid dan aman, sedangkan blacklisting berisiko gagal mendeteksi teknik pengaburan baru (obfuscation/evasion).**

---

### Soal 15 (Post Test)
**Pertanyaan:**  
Sebelum data input pengguna divalidasi terhadap pola aturan keamanan, data tersebut wajib melalui proses 'Canonicalization'. Tujuan proses ini adalah ...

**Pilihan Jawaban:**
- **A.** Mengubah data input menjadi bentuk representasi standar yang seragam untuk mencegah bypass berbasis berbagai variasi encoding (seperti URL encoding, Unicode ganda, atau path traversal). *(Kunci Jawaban)*
- **B.** Menghapus seluruh angka dan menyisakan huruf alfabet saja.
- **C.** Mengompresi data input agar hemat penyimpanan disk.
- **D.** Menyimpan data input ke file log tanpa divalidasi.
- **E.** Mengenkripsi data input menggunakan kunci publik server.

> **Kunci Jawaban Benar:** **A. Mengubah data input menjadi bentuk representasi standar yang seragam untuk mencegah bypass berbasis berbagai variasi encoding (seperti URL encoding, Unicode ganda, atau path traversal).**

---

### Soal 16 (Post Test)
**Pertanyaan:**  
Static Application Security Testing (SAST) memiliki keunggulan dibandingkan Dynamic Application Security Testing (DAST) dalam hal ...

**Pilihan Jawaban:**
- **A.** SAST menguji aplikasi pada kondisi runtime aktif tanpa membutuhkan kode sumber.
- **B.** SAST dapat menganalisis seluruh alur kode sumber secara mendalam pada fase awal pengembangan (shift-left) dan menunjukkan lokasi baris kode yang rentan secara presisi. *(Kunci Jawaban)*
- **C.** SAST tidak pernah menghasilkan false positive sama sekali.
- **D.** SAST hanya dapat mendeteksi kerentanan konfigurasi web server dan firewall.
- **E.** SAST memerlukan kredensial login aktif pengguna untuk bekerja.

> **Kunci Jawaban Benar:** **B. SAST dapat menganalisis seluruh alur kode sumber secara mendalam pada fase awal pengembangan (shift-left) dan menunjukkan lokasi baris kode yang rentan secara presisi.**

---

### Soal 17 (Post Test)
**Pertanyaan:**  
Keterbatasan utama dari pengujian keamanan dinamis (DAST) adalah ...

**Pilihan Jawaban:**
- **A.** DAST memerlukan akses penuh ke seluruh repositori kode sumber (white-box).
- **B.** DAST hanya menguji jalur eksekusi yang berhasil dipicu selama sesi pengujian runtime (black-box) dan kesulitan mendeteksi fungsi tersembunyi yang tidak terhubung ke antarmuka. *(Kunci Jawaban)*
- **C.** DAST tidak dapat dijalankan pada aplikasi berbasis web.
- **D.** DAST menghasilkan laporan analisis kode baris per baris secara otomatis.
- **E.** DAST hanya dapat menguji kelemahan fisik perangkat keras komputer.

> **Kunci Jawaban Benar:** **B. DAST hanya menguji jalur eksekusi yang berhasil dipicu selama sesi pengujian runtime (black-box) dan kesulitan mendeteksi fungsi tersembunyi yang tidak terhubung ke antarmuka.**

---

### Soal 18 (Post Test)
**Pertanyaan:**  
Teknik pengujian Interactive Application Security Testing (IAST) bekerja dengan cara ...

**Pilihan Jawaban:**
- **A.** Memasang sensor/agent instrumentasi di dalam runtime aplikasi untuk memantau aliran data dan perilaku kode saat pengujian fungsional berlangsung. *(Kunci Jawaban)*
- **B.** Mengirimkan formulir kuesioner wawancara keamanan kepada seluruh programmer.
- **C.** Melakukan brute-force dictionary attack terhadap port SSH server.
- **D.** Menguji daya tahan fisik server terhadap guncangan gempa bumi.
- **E.** Membongkar chip mikrokontroler hardware menggunakan mikroskop elektron.

> **Kunci Jawaban Benar:** **A. Memasang sensor/agent instrumentasi di dalam runtime aplikasi untuk memantau aliran data dan perilaku kode saat pengujian fungsional berlangsung.**

---

### Soal 19 (Post Test)
**Pertanyaan:**  
Metode pengujian Fuzzing (Fuzz Testing) bertujuan menemukan cacat software (seperti crash atau buffer overflow) dengan mekanisme ...

**Pilihan Jawaban:**
- **A.** Menganalisis dokumentasi manual penggunaan sistem secara teliti.
- **B.** Mengirimkan volume besar data input acak, malformed, atau semi-terstruktur yang tidak terduga ke dalam program dan memantau terjadinya anomali. *(Kunci Jawaban)*
- **C.** Mengecek apakah tampilan UI tombol telah simetris di berbagai browser.
- **D.** Mengaudit laporan keuangan perusahaan pengembang software.
- **E.** Memeriksa ejaan tata bahasa pada komentar kode sumber.

> **Kunci Jawaban Benar:** **B. Mengirimkan volume besar data input acak, malformed, atau semi-terstruktur yang tidak terduga ke dalam program dan memantau terjadinya anomali.**

---

### Soal 20 (Post Test)
**Pertanyaan:**  
Dalam pemodelan ancaman (Threat Modeling) STRIDE, huruf 'T' mewakili ancaman 'Tampering' yang didefinisikan sebagai ...

**Pilihan Jawaban:**
- **A.** Tindakan menyamar sebagai pengguna yang sah (Spoofing).
- **B.** Modifikasi atau manipulasi data yang tidak sah baik saat diam maupun saat transit di jaringan. *(Kunci Jawaban)*
- **C.** Penyangkalan keterlibatan dalam suatu transaksi (Repudiation).
- **D.** Pembocoran informasi rahasia kepada pihak tidak berhak (Information Disclosure).
- **E.** Melumpuhkan ketersediaan layanan sistem (Denial of Service).

> **Kunci Jawaban Benar:** **B. Modifikasi atau manipulasi data yang tidak sah baik saat diam maupun saat transit di jaringan.**

---

### Soal 21 (Post Test)
**Pertanyaan:**  
Dalam STRIDE, ancaman 'Elevation of Privilege' mengacu pada situasi di mana ...

**Pilihan Jawaban:**
- **A.** Penyerang berhasil memperoleh tingkat hak akses yang lebih tinggi daripada yang semestinya diizinkan (misalnya dari user biasa menjadi root/admin). *(Kunci Jawaban)*
- **B.** Pengguna menghapus log audit untuk menyembunyikan jejak transaksi.
- **C.** Aplikasi menampilkan error stack trace lengkap ke layar browser.
- **D.** Server kehabisan kapasitas memori RAM akibat memory leak.
- **E.** Pengguna lupa kata sandi dan meminta reset password melalui email.

> **Kunci Jawaban Benar:** **A. Penyerang berhasil memperoleh tingkat hak akses yang lebih tinggi daripada yang semestinya diizinkan (misalnya dari user biasa menjadi root/admin).**

---

### Soal 22 (Post Test)
**Pertanyaan:**  
Mengapa bahasa pemrograman modern seperti Rust dianggap kebal terhadap sebagian besar bug memori (memory-safety) dibandingkan C/C++?

**Pilihan Jawaban:**
- **A.** Rust tidak menggunakan memori RAM sama sekali saat mengeksekusi program.
- **B.** Rust menerapkan sistem Ownership, Borrowing, dan Lifetimes yang ketat pada saat compile-time tanpa memerlukan garbage collector runtime. *(Kunci Jawaban)*
- **C.** Rust secara otomatis mengenkripsi seluruh variabel menggunakan kunci AES.
- **D.** Program Rust hanya dapat dijalankan di dalam virtual machine terisolasi.
- **E.** Rust tidak mengizinkan pembuatan fungsi atau loop perulangan.

> **Kunci Jawaban Benar:** **B. Rust menerapkan sistem Ownership, Borrowing, dan Lifetimes yang ketat pada saat compile-time tanpa memerlukan garbage collector runtime.**

---

### Soal 23 (Post Test)
**Pertanyaan:**  
Praktik penanganan kesalahan (error handling) yang BURUK dan membahayakan keamanan aplikasi web adalah ...

**Pilihan Jawaban:**
- **A.** Mencatat detail error lengkap ke file log internal yang hanya bisa diakses administrator berwenang.
- **B.** Menampilkan pesan galat generik yang sopan kepada pengguna akhir seperti 'Terjadi kesalahan sistem, silakan hubungi tim dukungan'.
- **C.** Mengekspos stack trace mentah, nama tabel database, versi framework, dan potongan query SQL secara langsung ke layar pengguna saat terjadi exception. *(Kunci Jawaban)*
- **D.** Menutup koneksi database dan merilis sumber daya secara aman pada blok finally/catch.
- **E.** Mengirimkan notifikasi alert otomatis ke dashboard SIEM saat terjadi unhandled exception berulang.

> **Kunci Jawaban Benar:** **C. Mengekspos stack trace mentah, nama tabel database, versi framework, dan potongan query SQL secara langsung ke layar pengguna saat terjadi exception.**

---

### Soal 24 (Post Test)
**Pertanyaan:**  
Dalam penulisan kode C yang aman, fungsi strncpy(dest, src, n) sering digunakan untuk menggantikan strcpy. Namun, kelemahan yang tetap harus diwaspadai dari strncpy adalah ...

**Pilihan Jawaban:**
- **A.** Fungsi tersebut tidak menjamin null-terminator ('\0') ditambahkan pada string tujuan jika panjang src melebihi atau sama dengan n. *(Kunci Jawaban)*
- **B.** Fungsi tersebut menghapus isi string sumber secara permanen.
- **C.** strncpy hanya dapat memproses karakter angka numerik.
- **D.** Fungsi tersebut berjalan sepuluh kali lebih lambat daripada operasi disk IO.
- **E.** strncpy secara otomatis memicu buffer overflow pada compiler modern.

> **Kunci Jawaban Benar:** **A. Fungsi tersebut tidak menjamin null-terminator ('\0') ditambahkan pada string tujuan jika panjang src melebihi atau sama dengan n.**

---

### Soal 25 (Post Test)
**Pertanyaan:**  
Prinsip 'Complete Mediation' dalam arsitektur software security mengharuskan bahwa ...

**Pilihan Jawaban:**
- **A.** Setiap permintaan akses ke setiap objek harus diperiksa dan divalidasi keabsahannya setiap saat, tanpa mengandalkan hasil pemeriksaan sebelumnya yang di-cache secara membabi buta. *(Kunci Jawaban)*
- **B.** Pengguna hanya perlu diautentikasi sekali seumur hidup pada saat pendaftaran akun.
- **C.** Sistem keamanan harus memediasi perselisihan hukum antara pengguna dan penyedia layanan.
- **D.** Semua berkas konfigurasi harus disimpan dalam satu file terpusat tanpa enkripsi.
- **E.** Hak akses administratif harus diberikan secara penuh kepada seluruh developer.

> **Kunci Jawaban Benar:** **A. Setiap permintaan akses ke setiap objek harus diperiksa dan divalidasi keabsahannya setiap saat, tanpa mengandalkan hasil pemeriksaan sebelumnya yang di-cache secara membabi buta.**

---

## 📌 Week 5 - Web Application Security & OWASP ASVS

### Soal 1 (Pre Test)
**Pertanyaan:**  
Metode pertahanan paling efektif dan mutlak untuk mencegah kerentanan SQL Injection pada kode backend aplikasi web adalah ...

**Pilihan Jawaban:**
- **A.** Menggunakan Parameterized Queries (Prepared Statements) yang memisahkan kode query SQL dari data input pengguna. *(Kunci Jawaban)*
- **B.** Menyaring karakter petik tunggal (') menggunakan fungsi regex buatan sendiri (blacklisting).
- **C.** Menyimpan seluruh data input dalam format huruf kapital (uppercase).
- **D.** Mengganti web server Apache dengan Nginx.
- **E.** Menambahkan firewall hardware di depan router utama.

> **Kunci Jawaban Benar:** **A. Menggunakan Parameterized Queries (Prepared Statements) yang memisahkan kode query SQL dari data input pengguna.**

---

### Soal 2 (Pre Test)
**Pertanyaan:**  
Seorang penyerang menyisipkan payload JavaScript berbahaya ke dalam kolom komentar blog. Setiap kali pengguna lain membuka artikel blog tersebut, script penyerang dieksekusi di browser korban dan mencuri session cookie. Jenis serangan XSS ini adalah ...

**Pilihan Jawaban:**
- **A.** Reflected XSS
- **B.** Stored (Persistent) XSS *(Kunci Jawaban)*
- **C.** DOM-based XSS
- **D.** Self-XSS
- **E.** Blind SQL Injection

> **Kunci Jawaban Benar:** **B. Stored (Persistent) XSS**

---

### Soal 3 (Pre Test)
**Pertanyaan:**  
Mengapa mitigasi Cross-Site Scripting (XSS) mensyaratkan 'Context-Aware Output Encoding' (misalnya HTML Body Encoding berbeda dengan JavaScript Context Encoding)?

**Pilihan Jawaban:**
- **A.** Karena parser browser menafsirkan karakter khusus secara berbeda bergantung pada konteks sintaksis tempat data dirender (HTML tag, atribut, script block, atau URL). *(Kunci Jawaban)*
- **B.** Agar ukuran dokumen HTML menjadi lebih kecil saat ditransmisikan melalui jaringan.
- **C.** Karena encoding hanya berlaku untuk browser berbasis Chromium.
- **D.** Untuk mempercepat waktu render CSS pada perangkat mobile.
- **E.** Agar aplikasi web tidak memerlukan sertifikat SSL/TLS.

> **Kunci Jawaban Benar:** **A. Karena parser browser menafsirkan karakter khusus secara berbeda bergantung pada konteks sintaksis tempat data dirender (HTML tag, atribut, script block, atau URL).**

---

### Soal 4 (Pre Test)
**Pertanyaan:**  
Header keamanan Content Security Policy (CSP) dengan direktif 'script-src 'self'' memberikan perlindungan bagi browser pengguna dengan cara ...

**Pilihan Jawaban:**
- **A.** Melarang eksekusi skrip JavaScript yang berasal dari domain eksternal pihak ketiga serta memblokir inline script yang tidak memiliki nonce/hash valid. *(Kunci Jawaban)*
- **B.** Mengenkripsi seluruh file JavaScript di server menggunakan AES.
- **C.** Menonaktifkan fitur JavaScript sepenuhnya pada komputer klien.
- **D.** Menghapus cookie sesi browser setiap 5 menit secara otomatis.
- **E.** Mengalihkan seluruh traffic HTTP ke protokol FTP.

> **Kunci Jawaban Benar:** **A. Melarang eksekusi skrip JavaScript yang berasal dari domain eksternal pihak ketiga serta memblokir inline script yang tidak memiliki nonce/hash valid.**

---

### Soal 5 (Pre Test)
**Pertanyaan:**  
Serangan Cross-Site Request Forgery (CSRF) memanfaatkan karakteristik bawaan web browser, yaitu ...

**Pilihan Jawaban:**
- **A.** Browser secara otomatis menyertakan kredensial autentikasi (seperti session cookie) saat mengirimkan request HTTP lintas domain ke situs target yang sedang aktif login. *(Kunci Jawaban)*
- **B.** Browser dapat mengeksekusi shellcode biner langsung pada kernel sistem operasi.
- **C.** Browser menyimpan password plaintext di dalam file konfigurasi Windows.
- **D.** Browser selalu menonaktifkan validasi sertifikat HTTPS pada form POST.
- **E.** Browser membagikan riwayat pencarian kepada semua tab yang terbuka.

> **Kunci Jawaban Benar:** **A. Browser secara otomatis menyertakan kredensial autentikasi (seperti session cookie) saat mengirimkan request HTTP lintas domain ke situs target yang sedang aktif login.**

---

### Soal 6 (Pre Test)
**Pertanyaan:**  
Mekanisme pertahanan paling standar untuk mencegah serangan CSRF pada formulir HTML aplikasi web adalah ...

**Pilihan Jawaban:**
- **A.** Penggunaan Anti-CSRF Token (Synchronizer Token Pattern) yang unik, tidak dapat ditebak, dan terikat pada sesi pengguna aktif. *(Kunci Jawaban)*
- **B.** Mengganti metode HTTP POST menjadi GET pada seluruh formulir.
- **C.** Menyembunyikan formulir menggunakan styling CSS display:none.
- **D.** Memperpanjang masa kedaluwarsa sesi menjadi 30 hari.
- **E.** Menghapus atribut action pada tag form HTML.

> **Kunci Jawaban Benar:** **A. Penggunaan Anti-CSRF Token (Synchronizer Token Pattern) yang unik, tidak dapat ditebak, dan terikat pada sesi pengguna aktif.**

---

### Soal 7 (Pre Test)
**Pertanyaan:**  
Pada kerentanan Server-Side Request Forgery (SSRF), penyerang memanipulasi aplikasi web backend untuk ...

**Pilihan Jawaban:**
- **A.** Membuat server backend mengirimkan permintaan HTTP yang tidak sah ke layanan internal yang dilindungi firewall (misalnya layanan metadata cloud 169.254.169.254 atau database lokal). *(Kunci Jawaban)*
- **B.** Menjalankan script berbahaya di browser pengguna lain secara acak.
- **C.** Mengubah warna tema antarmuka website menjadi gelap.
- **D.** Mematikan koneksi internet pengguna rumahan.
- **E.** Mencuri keyboard fisik di kantor perusahaan.

> **Kunci Jawaban Benar:** **A. Membuat server backend mengirimkan permintaan HTTP yang tidak sah ke layanan internal yang dilindungi firewall (misalnya layanan metadata cloud 169.254.169.254 atau database lokal).**

---

### Soal 8 (Pre Test)
**Pertanyaan:**  
Seorang pengguna biasa dapat melihat tagihan medis pasien lain dengan cara mengganti parameter ID pada URL dari '/invoice?id=1001' menjadi '/invoice?id=1002' karena server tidak memverifikasi kepemilikan data. Kerentanan ini diklasifikasikan sebagai ...

**Pilihan Jawaban:**
- **A.** Insecure Direct Object Reference (IDOR) / Broken Object Level Authorization (BOLA) *(Kunci Jawaban)*
- **B.** Cross-Site Scripting (XSS)
- **C.** Buffer Overflow
- **D.** Denial of Service (DoS)
- **E.** Weak Password Hashing

> **Kunci Jawaban Benar:** **A. Insecure Direct Object Reference (IDOR) / Broken Object Level Authorization (BOLA)**

---

### Soal 9 (Pre Test)
**Pertanyaan:**  
Header keamanan 'Strict-Transport-Security' (HSTS) pada respons HTTP berfungsi untuk ...

**Pilihan Jawaban:**
- **A.** Memaksa browser agar selalu berkomunikasi dengan situs tersebut hanya menggunakan protokol aman HTTPS dan menolak downgrade ke HTTP biasa. *(Kunci Jawaban)*
- **B.** Menutup port 80 pada firewall perangkat router klien.
- **C.** Menghapus cache DNS lokal setiap kali browser ditutup.
- **D.** Mengizinkan koneksi HTTP tanpa enkripsi untuk file gambar.
- **E.** Mengirimkan log error aplikasi ke server Google.

> **Kunci Jawaban Benar:** **A. Memaksa browser agar selalu berkomunikasi dengan situs tersebut hanya menggunakan protokol aman HTTPS dan menolak downgrade ke HTTP biasa.**

---

### Soal 10 (Pre Test)
**Pertanyaan:**  
Konfigurasi Cross-Origin Resource Sharing (CORS) yang sangat berbahaya dan membuka celah pencurian data sensitif antar-origin terjadi ketika server merespons dengan kombinasi header ...

**Pilihan Jawaban:**
- **A.** Access-Control-Allow-Origin: * dan Access-Control-Allow-Credentials: true *(Kunci Jawaban)*
- **B.** Access-Control-Allow-Origin: null dan Access-Control-Max-Age: 0
- **C.** Access-Control-Allow-Methods: GET dan Access-Control-Allow-Headers: Content-Type
- **D.** Content-Type: application/json dan X-Frame-Options: SAMEORIGIN
- **E.** Strict-Transport-Security: max-age=31536000

> **Kunci Jawaban Benar:** **A. Access-Control-Allow-Origin: * dan Access-Control-Allow-Credentials: true**

---

### Soal 11 (Pre Test)
**Pertanyaan:**  
Kerentanan XML External Entity (XXE) Injection terjadi ketika parser XML pada aplikasi web dikonfigurasi untuk ...

**Pilihan Jawaban:**
- **A.** Mengizinkan resolusi external Document Type Definition (DTD) dan entitas eksternal, sehingga penyerang dapat membaca berkas lokal server (misal /etc/passwd) atau memicu SSRF. *(Kunci Jawaban)*
- **B.** Menolak parsing dokumen XML yang memiliki spasi ganda.
- **C.** Mengompresi format XML menjadi format binary JSON.
- **D.** Menyimpan data XML ke dalam file gambar format PNG.
- **E.** Mengharuskan dokumen XML ditandatangani oleh sertifikat SSL berbayar.

> **Kunci Jawaban Benar:** **A. Mengizinkan resolusi external Document Type Definition (DTD) dan entitas eksternal, sehingga penyerang dapat membaca berkas lokal server (misal /etc/passwd) atau memicu SSRF.**

---

### Soal 12 (Pre Test)
**Pertanyaan:**  
Pada fitur upload file di aplikasi web, praktik keamanan yang PALING EFEKTIF untuk mencegah eksekusi webshell berbahaya adalah ...

**Pilihan Jawaban:**
- **A.** Menyimpan file yang diunggah di luar web root direktori publik, mengganti nama file dengan nama acak/UUID unik, dan menonaktifkan izin eksekusi script pada folder penyimpanan. *(Kunci Jawaban)*
- **B.** Hanya memeriksa MIME-type yang dikirimkan oleh browser klien (Content-Type header).
- **C.** Hanya memeriksa ekstensi file menggunakan huruf kecil (misal .jpg).
- **D.** Menyimpan file di folder yang sama dengan file index.php aplikasi.
- **E.** Membatasi ukuran file maksimal 10 megabyte tanpa memeriksa isi berkas.

> **Kunci Jawaban Benar:** **A. Menyimpan file yang diunggah di luar web root direktori publik, mengganti nama file dengan nama acak/UUID unik, dan menonaktifkan izin eksekusi script pada folder penyimpanan.**

---

### Soal 13 (Pre Test)
**Pertanyaan:**  
Dalam standar OWASP ASVS (Application Security Verification Standard), aplikasi yang mengelola transaksi keuangan penting, data bisnis bernilai tinggi, atau informasi kesehatan pribadi (B2B) wajib memenuhi minimal verifikasi pada ...

**Pilihan Jawaban:**
- **A.** Level 1 (Opportunistic)
- **B.** Level 2 (Standard) *(Kunci Jawaban)*
- **C.** Level 3 (Advanced)
- **D.** Level 0 (Basic Entry)
- **E.** Level 4 (Military Grade)

> **Kunci Jawaban Benar:** **B. Level 2 (Standard)**

---

### Soal 14 (Post Test)
**Pertanyaan:**  
Karakteristik utama yang membedakan OWASP ASVS Level 1 dengan Level 2 dan Level 3 adalah bahwa ASVS Level 1 ...

**Pilihan Jawaban:**
- **A.** Dapat diverifikasi secara penuh menggunakan teknik pengujian black-box tanpa mengharuskan akses ke kode sumber aplikasi atau wawancara arsitektur mendalam. *(Kunci Jawaban)*
- **B.** Hanya berlaku untuk aplikasi yang dibangun menggunakan bahasa pemrograman Java.
- **C.** Tidak memiliki persyaratan kontrol autentikasi dan otorisasi sama sekali.
- **D.** Mengharuskan audit forensik militer di laboratorium bersertifikasi internasional.
- **E.** Hanya dapat diaudit oleh lembaga penegak hukum pemerintah.

> **Kunci Jawaban Benar:** **A. Dapat diverifikasi secara penuh menggunakan teknik pengujian black-box tanpa mengharuskan akses ke kode sumber aplikasi atau wawancara arsitektur mendalam.**

---

### Soal 15 (Post Test)
**Pertanyaan:**  
Berdasarkan Chapter V2 (Authentication) pada OWASP ASVS v4, rekomendasi modern mengenai kebijakan kata sandi pengguna adalah ...

**Pilihan Jawaban:**
- **A.** Mewajibkan penggantian password berkala setiap 30 hari dan memaksa kombinasi karakter aneh yang rumit.
- **B.** Mengizinkan panjang password minimal 12 karakter (dan mendukung hingga minimal 64 karakter), serta memverifikasi password terhadap daftar password yang pernah bocor (breached passwords list). *(Kunci Jawaban)*
- **C.** Membatasi panjang password maksimal hanya 8 karakter demi efisiensi hashing.
- **D.** Mengharuskan password berisi nomor induk kependudukan (NIK) pengguna.
- **E.** Mengirimkan password baru dalam format plaintext melalui pesan SMS berkala.

> **Kunci Jawaban Benar:** **B. Mengizinkan panjang password minimal 12 karakter (dan mendukung hingga minimal 64 karakter), serta memverifikasi password terhadap daftar password yang pernah bocor (breached passwords list).**

---

### Soal 16 (Post Test)
**Pertanyaan:**  
Berdasarkan Chapter V3 (Session Management) pada OWASP ASVS, nilai entropi minimum yang diwajibkan untuk pembuatan session identifier adalah ...

**Pilihan Jawaban:**
- **A.** 16 bit
- **B.** 32 bit
- **C.** 64 bit
- **D.** Minimal 128 bit pseudorandom entropy *(Kunci Jawaban)*
- **E.** 1024 bit

> **Kunci Jawaban Benar:** **D. Minimal 128 bit pseudorandom entropy**

---

### Soal 17 (Post Test)
**Pertanyaan:**  
Pada Chapter V4 (Access Control) OWASP ASVS, prinsip utama yang harus diimplementasikan pada mekanisme otorisasi server adalah ...

**Pilihan Jawaban:**
- **A.** Otorisasi hanya perlu diperiksa sekali pada halaman beranda utama aplikasi.
- **B.** Penerapan prinsip 'Deny by Default', di mana seluruh akses ditolak secara bawaan kecuali diberikan izin secara eksplisit, dan penegakan otorisasi wajib dilakukan di sisi server. *(Kunci Jawaban)*
- **C.** Otorisasi dapat dipercayakan sepenuhnya kepada logika JavaScript di sisi browser klien.
- **D.** Hak akses pengguna disimpan di dalam URL parameter tanpa enkripsi.
- **E.** Administrator sistem boleh mengabaikan logging akses data sensitif.

> **Kunci Jawaban Benar:** **B. Penerapan prinsip 'Deny by Default', di mana seluruh akses ditolak secara bawaan kecuali diberikan izin secara eksplisit, dan penegakan otorisasi wajib dilakukan di sisi server.**

---

### Soal 18 (Post Test)
**Pertanyaan:**  
Untuk mencegah browser menyimpan halaman yang berisi informasi rahasia perbankan ke dalam web cache lokal (Chapter V8 Data Protection), header respons HTTP yang wajib disertakan adalah ...

**Pilihan Jawaban:**
- **A.** Cache-Control: no-store, max-age=0 dan Pragma: no-cache *(Kunci Jawaban)*
- **B.** Cache-Control: public, max-age=86400
- **C.** Accept-Encoding: gzip, deflate
- **D.** Connection: keep-alive
- **E.** Content-Encoding: br

> **Kunci Jawaban Benar:** **A. Cache-Control: no-store, max-age=0 dan Pragma: no-cache**

---

### Soal 19 (Post Test)
**Pertanyaan:**  
Kerentanan 'Mass Assignment' (atau Over-Posting) pada framework web modern terjadi ketika ...

**Pilihan Jawaban:**
- **A.** Framework secara otomatis mengikat (bind) seluruh parameter input HTTP request langsung ke atribut objek data/model tanpa membatasi field sensitif (misal field role='admin'). *(Kunci Jawaban)*
- **B.** Pengguna mengirimkan email ke 10.000 alamat sekaligus.
- **C.** Aplikasi tidak mendukung database relasional MySQL.
- **D.** Dua pengguna menggunakan satu akun secara bersamaan dari lokasi berbeda.
- **E.** Server web kehabisan soket TCP akibat serangan SYN flood.

> **Kunci Jawaban Benar:** **A. Framework secara otomatis mengikat (bind) seluruh parameter input HTTP request langsung ke atribut objek data/model tanpa membatasi field sensitif (misal field role='admin').**

---

### Soal 20 (Post Test)
**Pertanyaan:**  
Header 'X-Content-Type-Options: nosniff' memiliki fungsi krusial untuk mencegah serangan ...

**Pilihan Jawaban:**
- **A.** MIME-type Confusion / MIME Sniffing, di mana browser mengeksekusi file non-eksekusi (seperti file teks atau gambar yang disusupi skrip) sebagai JavaScript. *(Kunci Jawaban)*
- **B.** Brute-force password SSH
- **C.** Man-in-the-Middle pada router Wi-Fi
- **D.** Buffer overflow pada compiler C++
- **E.** Denial of Service pada server DNS

> **Kunci Jawaban Benar:** **A. MIME-type Confusion / MIME Sniffing, di mana browser mengeksekusi file non-eksekusi (seperti file teks atau gambar yang disusupi skrip) sebagai JavaScript.**

---

### Soal 21 (Post Test)
**Pertanyaan:**  
Header 'X-Frame-Options: DENY' (atau CSP frame-ancestors 'none') digunakan untuk melindungi pengguna aplikasi web dari serangan ...

**Pilihan Jawaban:**
- **A.** SQL Injection
- **B.** Clickjacking (UI Redressing), di mana situs korban dimuat dalam iframe transparan di atas halaman penyerang untuk memanipulasi klik pengguna. *(Kunci Jawaban)*
- **C.** Session Fixation
- **D.** Format String Attack
- **E.** Buffer Overflow

> **Kunci Jawaban Benar:** **B. Clickjacking (UI Redressing), di mana situs korban dimuat dalam iframe transparan di atas halaman penyerang untuk memanipulasi klik pengguna.**

---

### Soal 22 (Post Test)
**Pertanyaan:**  
Pada OWASP MASVS (Mobile Application Security Verification Standard), kontrol MASVS-STORAGE mensyaratkan penyimpanan data kredensial dan kunci kriptografi pada perangkat mobile harus menggunakan ...

**Pilihan Jawaban:**
- **A.** Mekanisme penyimpanan aman berbasis perangkat keras (Hardware-backed Keystore pada Android atau Keychain pada iOS). *(Kunci Jawaban)*
- **B.** Penyimpanan berkas teks biasa pada SD Card eksternal yang dapat diakses publik.
- **C.** SharedPreferences atau NSUserDefaults tanpa enkripsi.
- **D.** Komentar hardcoded di dalam source code file Java/Swift.
- **E.** File database SQLite lokal yang dapat dibaca semua aplikasi lain.

> **Kunci Jawaban Benar:** **A. Mekanisme penyimpanan aman berbasis perangkat keras (Hardware-backed Keystore pada Android atau Keychain pada iOS).**

---

### Soal 23 (Post Test)
**Pertanyaan:**  
Sebuah aplikasi web memuat data input serialized objek dari cookie pengguna tanpa verifikasi tanda tangan kriptografi (HMAC). Bahaya terbesar dari kerentanan Insecure Deserialization ini adalah ...

**Pilihan Jawaban:**
- **A.** Penyerang dapat merekayasa serialized object berbahaya (gadget chain) yang mengeksekusi kode perintah sistem operasi secara Remote Code Execution (RCE). *(Kunci Jawaban)*
- **B.** Tampilan website menjadi tidak responsif pada layar ponsel.
- **C.** Ukuran font tulisan paragraf artikel membesar sendiri.
- **D.** Waktu loading halaman web bertambah sekitar 10 milidetik.
- **E.** Browser menampilkan notifikasi bahwa halaman belum diterjemahkan.

> **Kunci Jawaban Benar:** **A. Penyerang dapat merekayasa serialized object berbahaya (gadget chain) yang mengeksekusi kode perintah sistem operasi secara Remote Code Execution (RCE).**

---

### Soal 24 (Post Test)
**Pertanyaan:**  
Perbedaan mendasar antara Blind SQL Injection (Time-based / Boolean-based) dan In-Band SQL Injection (Union-based) adalah ...

**Pilihan Jawaban:**
- **A.** Blind SQLi tidak menampilkan data hasil query atau pesan error database secara langsung pada respon HTTP, sehingga penyerang harus merekonstruksi data karakter demi karakter berdasarkan respons boolean atau jeda waktu. *(Kunci Jawaban)*
- **B.** Blind SQLi hanya dapat dilakukan pada server web berbasis Microsoft IIS.
- **C.** In-Band SQLi tidak memerlukan koneksi internet untuk mengekstrak data.
- **D.** Blind SQLi selalu terdeteksi dan diblokir oleh antivirus komputer pengguna.
- **E.** In-Band SQLi tidak pernah merusak integritas database server.

> **Kunci Jawaban Benar:** **A. Blind SQLi tidak menampilkan data hasil query atau pesan error database secara langsung pada respon HTTP, sehingga penyerang harus merekonstruksi data karakter demi karakter berdasarkan respons boolean atau jeda waktu.**

---

### Soal 25 (Post Test)
**Pertanyaan:**  
Kategori OWASP Top 10 'Vulnerable and Outdated Components' (A06) paling efektif dimitigasi dalam siklus CI/CD pipeline modern menggunakan perkakas ...

**Pilihan Jawaban:**
- **A.** Software Composition Analysis (SCA) seperti Dependency-Check, Snyk, atau npm audit yang memindai kerentanan CVE pada library pihak ketiga. *(Kunci Jawaban)*
- **B.** Aplikasi defragmentasi harddisk terjadwal.
- **C.** Pemeriksa ejaan kata (spell checker) pada file markdown.
- **D.** Perangkat penstabil tegangan listrik (UPS) server.
- **E.** Generator gambar AI untuk thumbnail artikel.

> **Kunci Jawaban Benar:** **A. Software Composition Analysis (SCA) seperti Dependency-Check, Snyk, atau npm audit yang memindai kerentanan CVE pada library pihak ketiga.**

---

## 📌 Week 6 - Cryptography, Cipher & Hash

### Soal 1 (Pre Test)
**Pertanyaan:**  
Prinsip dasar Shannon mengenai 'Confusion' dan 'Diffusion' dalam perancangan algoritma block cipher bertujuan untuk ...

**Pilihan Jawaban:**
- **A.** Confusion membuat hubungan antara kunci dan ciphertext serumit mungkin, sedangkan Diffusion menyebarkan pengaruh satu bit plaintext ke banyak bit ciphertext. *(Kunci Jawaban)*
- **B.** Confusion mempercepat proses komputasi CPU, sedangkan Diffusion mengompresi ukuran data.
- **C.** Confusion mengubah ciphertext menjadi plaintext tanpa memerlukan kunci rahasia.
- **D.** Diffusion mengganti seluruh karakter alfabet dengan angka acak.
- **E.** Confusion hanya berlaku untuk enkripsi asimetris, sedangkan Diffusion untuk fungsi hash.

> **Kunci Jawaban Benar:** **A. Confusion membuat hubungan antara kunci dan ciphertext serumit mungkin, sedangkan Diffusion menyebarkan pengaruh satu bit plaintext ke banyak bit ciphertext.**

---

### Soal 2 (Pre Test)
**Pertanyaan:**  
Dalam perancangan algoritma Advanced Encryption Standard (AES), tahapan transformasi non-linear yang bertanggung jawab menyediakan sifat 'Confusion' adalah ...

**Pilihan Jawaban:**
- **A.** ShiftRows
- **B.** SubBytes (menggunakan S-box berbasis invers perkalian Galois Field GF(2^8)) *(Kunci Jawaban)*
- **C.** MixColumns
- **D.** AddRoundKey
- **E.** Key Expansion

> **Kunci Jawaban Benar:** **B. SubBytes (menggunakan S-box berbasis invers perkalian Galois Field GF(2^8))**

---

### Soal 3 (Pre Test)
**Pertanyaan:**  
Mengapa penggunaan algoritma Double-DES (enkripsi DES dua kali berturut-turut dengan dua kunci berbeda K1 dan K2) TIDAK memberikan keamanan 112 bit sebagaimana yang diharapkan?

**Pilihan Jawaban:**
- **A.** Double-DES rentan terhadap serangan Meet-in-the-Middle Attack yang mereduksi kompleksitas pencarian kunci menjadi sekitar 2^57 operasi. *(Kunci Jawaban)*
- **B.** Kunci kedua otomatis terhapus oleh prosesor saat enkripsi tahap pertama selesai.
- **C.** Dua kunci DES selalu menghasilkan nilai ciphertext yang identik dengan plaintext.
- **D.** Double-DES hanya dapat mengenkripsi file dengan ukuran kurang dari 8 byte.
- **E.** Algoritma DES tidak mendukung operasi perulangan round.

> **Kunci Jawaban Benar:** **A. Double-DES rentan terhadap serangan Meet-in-the-Middle Attack yang mereduksi kompleksitas pencarian kunci menjadi sekitar 2^57 operasi.**

---

### Soal 4 (Pre Test)
**Pertanyaan:**  
Kelemahan paling fatal dari mode operasi Electronic Codebook (ECB) pada enkripsi berkas yang menjadikannya tidak aman untuk data lebih dari satu blok adalah ...

**Pilihan Jawaban:**
- **A.** ECB berjalan sangat lambat dibandingkan mode operasi lainnya.
- **B.** ECB bersifat deterministik di mana blok plaintext yang identik akan selalu menghasilkan blok ciphertext yang identik, sehingga membocorkan pola struktur data asli. *(Kunci Jawaban)*
- **C.** ECB memerlukan kunci yang berbeda untuk setiap blok data.
- **D.** ECB hanya dapat digunakan untuk mendekripsi data tetapi tidak dapat mengenkripsi.
- **E.** Ciphertext yang dihasilkan ECB memiliki ukuran 10 kali lebih besar dari plaintext.

> **Kunci Jawaban Benar:** **B. ECB bersifat deterministik di mana blok plaintext yang identik akan selalu menghasilkan blok ciphertext yang identik, sehingga membocorkan pola struktur data asli.**

---

### Soal 5 (Pre Test)
**Pertanyaan:**  
Pada mode operasi Cipher Block Chaining (CBC), apa peran utama dari Initialization Vector (IV) yang di-XOR dengan blok plaintext pertama?

**Pilihan Jawaban:**
- **A.** Memastikan bahwa dua plaintext identik yang dienkripsi dengan kunci yang sama menghasilkan ciphertext yang sepenuhnya berbeda dan tidak dapat diprediksi. *(Kunci Jawaban)*
- **B.** Menyimpan nilai hash dari seluruh file untuk verifikasi tanda tangan digital.
- **C.** Mengompresi blok pertama agar muat dalam register CPU 32-bit.
- **D.** Menggantikan kebutuhan kunci simetris rahasia.
- **E.** Menghapus padding PKCS#7 secara otomatis saat dekripsi.

> **Kunci Jawaban Benar:** **A. Memastikan bahwa dua plaintext identik yang dienkripsi dengan kunci yang sama menghasilkan ciphertext yang sepenuhnya berbeda dan tidak dapat diprediksi.**

---

### Soal 6 (Pre Test)
**Pertanyaan:**  
Serangan Padding Oracle Attack pada implementasi enkripsi mode CBC memanfaatkan kerentanan di mana ...

**Pilihan Jawaban:**
- **A.** Server membocorkan informasi melalui pesan error yang membedakan kegagalan padding PKCS#7 yang tidak valid dengan kegagalan dekripsi lainnya, sehingga penyerang dapat mendekripsi ciphertext blok demi blok. *(Kunci Jawaban)*
- **B.** Penyerang memecahkan kunci AES-256 menggunakan serangan brute-force dalam hitungan menit.
- **C.** Server web tidak memperbarui sertifikat SSL yang sudah kadaluarsa.
- **D.** Pengguna menggunakan IV bernilai nol untuk seluruh komunikasi.
- **E.** Sistem operasi menonaktifkan fitur firewall pada port database.

> **Kunci Jawaban Benar:** **A. Server membocorkan informasi melalui pesan error yang membedakan kegagalan padding PKCS#7 yang tidak valid dengan kegagalan dekripsi lainnya, sehingga penyerang dapat mendekripsi ciphertext blok demi blok.**

---

### Soal 7 (Pre Test)
**Pertanyaan:**  
Mode operasi Counter (CTR) mengubah block cipher menjadi stream cipher dengan mengenkripsi kombinasi nonce dan counter. Aturan keamanan MUTLAK yang tidak boleh dilanggar pada mode CTR adalah ...

**Pilihan Jawaban:**
- **A.** Kunci dan nonce tidak boleh digunakan kembali untuk mengenkripsi dua pesan yang berbeda (keberulangan keystream membocorkan plaintext melalui operasi XOR). *(Kunci Jawaban)*
- **B.** Ukuran plaintext harus selalu kelipatan tepat 128 bit.
- **C.** Proses enkripsi tidak boleh dijalankan secara paralel pada multi-core CPU.
- **D.** Counter harus selalu bernilai bilangan prima negatif.
- **E.** Kunci harus diganti setiap kali satu byte data selesai diproses.

> **Kunci Jawaban Benar:** **A. Kunci dan nonce tidak boleh digunakan kembali untuk mengenkripsi dua pesan yang berbeda (keberulangan keystream membocorkan plaintext melalui operasi XOR).**

---

### Soal 8 (Pre Test)
**Pertanyaan:**  
Mengapa mode Galois/Counter Mode (GCM) menjadi standar mode enkripsi simetris paling direkomendasikan pada protokol modern seperti TLS 1.3?

**Pilihan Jawaban:**
- **A.** GCM menyediakan Authenticated Encryption with Associated Data (AEAD) yang menjamin kerahasiaan (confidentiality) sekaligus keaslian dan integritas data (authenticity/integrity) dengan performa tinggi. *(Kunci Jawaban)*
- **B.** GCM tidak memerlukan kunci rahasia sama sekali dalam operasinya.
- **C.** GCM kebal terhadap serangan komputer kuantum selamanya.
- **D.** GCM menggantikan kebutuhan algoritma asimetris RSA pada pertukaran kunci.
- **E.** GCM secara otomatis menghapus malware dari file yang dienkripsi.

> **Kunci Jawaban Benar:** **A. GCM menyediakan Authenticated Encryption with Associated Data (AEAD) yang menjamin kerahasiaan (confidentiality) sekaligus keaslian dan integritas data (authenticity/integrity) dengan performa tinggi.**

---

### Soal 9 (Pre Test)
**Pertanyaan:**  
Properti 'Collision Resistance' pada fungsi cryptographic hash menjamin bahwa ...

**Pilihan Jawaban:**
- **A.** Secara komputasi sangat sulit untuk menemukan dua pesan berbeda sembarang m1 dan m2 sehingga H(m1) = H(m2). *(Kunci Jawaban)*
- **B.** Sangat mudah untuk merekonstruksi pesan asli m jika diberikan nilai hash H(m).
- **C.** Nilai hash selalu bertambah panjang jika ukuran file bertambah besar.
- **D.** Fungsi hash dapat didekripsi menggunakan private key pemilik data.
- **E.** Dua file berbeda akan selalu menghasilkan nilai hash yang sama pada tanggal ganjil.

> **Kunci Jawaban Benar:** **A. Secara komputasi sangat sulit untuk menemukan dua pesan berbeda sembarang m1 dan m2 sehingga H(m1) = H(m2).**

---

### Soal 10 (Pre Test)
**Pertanyaan:**  
Berdasarkan fenomena Birthday Paradox (Birthday Attack), untuk menemukan tabrakan (collision) pada fungsi hash dengan panjang output n bit, kompleksitas rata-rata operasi yang dibutuhkan penyerang adalah sekitar ...

**Pilihan Jawaban:**
- **A.** 2^n operasi
- **B.** 2^(n/2) operasi *(Kunci Jawaban)*
- **C.** n^2 operasi
- **D.** 2^(n/4) operasi
- **E.** n/2 operasi

> **Kunci Jawaban Benar:** **B. 2^(n/2) operasi**

---

### Soal 11 (Pre Test)
**Pertanyaan:**  
Mengapa konstruksi naif MAC berbasis hash H(k || m) pada algoritma keluarga Merkle-Damgård (seperti MD5 dan SHA-256) rentan terhadap serangan Length Extension Attack?

**Pilihan Jawaban:**
- **A.** Karena output hash H(k || m) mewakili internal state akhir fungsi hash, penyerang dapat melanjutkan komputasi hash untuk pesan tambahan m' tanpa perlu mengetahui nilai secret key k. *(Kunci Jawaban)*
- **B.** Karena kunci rahasia k otomatis tertulis di dalam file log sistem operasi.
- **C.** Karena ukuran output SHA-256 terlalu pendek untuk standar keamanan modern.
- **D.** Karena algoritma MD5 menggunakan kunci asimetris publik.
- **E.** Karena penyerang dapat membalikkan fungsi hash satu arah menggunakan tabel pembagian matematika.

> **Kunci Jawaban Benar:** **A. Karena output hash H(k || m) mewakili internal state akhir fungsi hash, penyerang dapat melanjutkan komputasi hash untuk pesan tambahan m' tanpa perlu mengetahui nilai secret key k.**

---

### Soal 12 (Pre Test)
**Pertanyaan:**  
Konstruksi Hash-based Message Authentication Code (HMAC) dirumuskan sebagai H((K XOR opad) || H((K XOR ipad) || m)). Tujuan penggunaan dua putaran hash bersarang dengan bantalan opad dan ipad ini adalah ...

**Pilihan Jawaban:**
- **A.** Mencegah serangan Length Extension Attack dan membuktikan keaslian serta integritas pesan menggunakan kunci rahasia bersama. *(Kunci Jawaban)*
- **B.** Membuat fungsi hash dapat berjalan tanpa membutuhkan memori RAM.
- **C.** Mengompresi pesan m agar ukuran filenya menjadi separuh ukuran asli.
- **D.** Mengubah algoritma simetris menjadi algoritma tanda tangan digital publik.
- **E.** Menghilangkan kebutuhan inisialisasi kunci pada pihak penerima.

> **Kunci Jawaban Benar:** **A. Mencegah serangan Length Extension Attack dan membuktikan keaslian serta integritas pesan menggunakan kunci rahasia bersama.**

---

### Soal 13 (Pre Test)
**Pertanyaan:**  
Keamanan algoritma kriptografi asimetris RSA secara fundamental didasarkan pada kesulitan komputasi matematika dalam menyelesaikan masalah ...

**Pilihan Jawaban:**
- **A.** Faktorisasi bilangan bulat besar yang merupakan hasil kali dua bilangan prima acak besar (Integer Factorization Problem). *(Kunci Jawaban)*
- **B.** Penyelesaian persamaan diferensial linier orde tiga.
- **C.** Pencarian akar kuadrat bilangan negatif pada domain riil.
- **D.** Pengurutan array bilangan acak berukuran gigabyte.
- **E.** Perhitungan logaritma natural pada CPU grafis.

> **Kunci Jawaban Benar:** **A. Faktorisasi bilangan bulat besar yang merupakan hasil kali dua bilangan prima acak besar (Integer Factorization Problem).**

---

### Soal 14 (Post Test)
**Pertanyaan:**  
Pada algoritma RSA, mengapa skema padding probabilistik seperti Optimal Asymmetric Encryption Padding (OAEP) wajib digunakan alih-alih Textbook RSA?

**Pilihan Jawaban:**
- **A.** Textbook RSA bersifat deterministik dan memiliki sifat homomorfik perkalian yang memungkinkan penyerang memanipulasi ciphertext tanpa mengetahui plaintext asli (malleability). *(Kunci Jawaban)*
- **B.** OAEP memperkecil ukuran ciphertext menjadi 16 byte.
- **C.** Textbook RSA hanya dapat digunakan pada prosesor 8-bit.
- **D.** OAEP menghapus kebutuhan kunci privat dalam proses dekripsi.
- **E.** Textbook RSA tidak mendukung enkripsi karakter teks alfabet.

> **Kunci Jawaban Benar:** **A. Textbook RSA bersifat deterministik dan memiliki sifat homomorfik perkalian yang memungkinkan penyerang memanipulasi ciphertext tanpa mengetahui plaintext asli (malleability).**

---

### Soal 15 (Post Test)
**Pertanyaan:**  
Protokol pertukaran kunci Diffie-Hellman (DH) memungkinkan dua pihak membangun kunci rahasia bersama melalui saluran komunikasi publik yang tidak aman berdasarkan kesulitan komputasi ...

**Pilihan Jawaban:**
- **A.** Discrete Logarithm Problem (Masalah Logaritma Diskrit pada grup siklik berhingga). *(Kunci Jawaban)*
- **B.** Invers matriks 2x2 modular.
- **C.** Penjumlahan deret aritmatika Gauss.
- **D.** Pencarian nilai determinan matriks bujur sangkar.
- **E.** Kompresi data lossy format JPEG.

> **Kunci Jawaban Benar:** **A. Discrete Logarithm Problem (Masalah Logaritma Diskrit pada grup siklik berhingga).**

---

### Soal 16 (Post Test)
**Pertanyaan:**  
Kelemahan paling mendasar dari protokol Diffie-Hellman standar (unauthenticated DH) jika tidak dikombinasikan dengan mekanisme autentikasi adalah kerentanannya terhadap serangan ...

**Pilihan Jawaban:**
- **A.** Man-in-the-Middle (MitM) Attack, di mana penyerang secara aktif mencegat dan menegosiasikan kunci terpisah dengan masing-masing pihak tanpa terdeteksi. *(Kunci Jawaban)*
- **B.** Buffer Overflow pada compiler C
- **C.** SQL Injection pada server basis data
- **D.** Cross-Site Scripting (XSS)
- **E.** Directory Traversal pada web server

> **Kunci Jawaban Benar:** **A. Man-in-the-Middle (MitM) Attack, di mana penyerang secara aktif mencegat dan menegosiasikan kunci terpisah dengan masing-masing pihak tanpa terdeteksi.**

---

### Soal 17 (Post Test)
**Pertanyaan:**  
Sifat 'Perfect Forward Secrecy' (PFS) pada protokol keamanan TLS menjamin bahwa ...

**Pilihan Jawaban:**
- **A.** Jika private key jangka panjang server terkompromi/bocor di masa depan, penyerang tetap tidak dapat mendekripsi rekaman traffic sesi komunikasi masa lalu yang menggunakan kunci sesi ephemeral (seperti ECDHE). *(Kunci Jawaban)*
- **B.** Data pengguna akan dienkripsi ulang setiap 24 jam secara otomatis di harddisk server.
- **C.** Website tidak akan pernah mengalami downtime meskipun server terbakar.
- **D.** Pengguna tidak perlu menggunakan password saat login ke aplikasi perbankan.
- **E.** Koneksi internet klien akan selalu memiliki kecepatan bandwidth maksimum tanpa batas.

> **Kunci Jawaban Benar:** **A. Jika private key jangka panjang server terkompromi/bocor di masa depan, penyerang tetap tidak dapat mendekripsi rekaman traffic sesi komunikasi masa lalu yang menggunakan kunci sesi ephemeral (seperti ECDHE).**

---

### Soal 18 (Post Test)
**Pertanyaan:**  
Keunggulan utama Elliptic Curve Cryptography (ECC) dibandingkan RSA adalah ...

**Pilihan Jawaban:**
- **A.** ECC menawarkan tingkat kekuatan keamanan kriptografi yang setara dengan RSA namun dengan ukuran kunci yang jauh lebih pendek (misalnya kunci ECC 256-bit setara dengan RSA 3072-bit), sehingga menghemat bandwidth dan daya komputasi. *(Kunci Jawaban)*
- **B.** ECC tidak memerlukan operasi matematika modular sama sekali.
- **C.** ECC dapat didekripsi oleh siapa saja tanpa membutuhkan kunci privat.
- **D.** Kunci ECC dapat disimpan dalam format plaintext di repositori publik GitHub tanpa risiko.
- **E.** ECC merupakan algoritma enkripsi simetris tercepat di dunia.

> **Kunci Jawaban Benar:** **A. ECC menawarkan tingkat kekuatan keamanan kriptografi yang setara dengan RSA namun dengan ukuran kunci yang jauh lebih pendek (misalnya kunci ECC 256-bit setara dengan RSA 3072-bit), sehingga menghemat bandwidth dan daya komputasi.**

---

### Soal 19 (Post Test)
**Pertanyaan:**  
Pada mekanisme pembuatan Tanda Tangan Digital (Digital Signature), operasi kriptografi yang dilakukan oleh pengirim pesan adalah ...

**Pilihan Jawaban:**
- **A.** Mendekripsi seluruh file dokumen menggunakan public key penerima.
- **B.** Menghitung nilai cryptographic hash (digest) dari pesan, lalu mengenkripsi nilai digest tersebut menggunakan private key milik pengirim. *(Kunci Jawaban)*
- **C.** Mengenkripsi pesan menggunakan kunci simetris rahasia milik penerima pesan.
- **D.** Mengirimkan password akun pengirim ke server verifikasi pihak ketiga.
- **E.** Menandatangani dokumen secara fisik di atas kertas lalu memindainya menjadi file PDF.

> **Kunci Jawaban Benar:** **B. Menghitung nilai cryptographic hash (digest) dari pesan, lalu mengenkripsi nilai digest tersebut menggunakan private key milik pengirim.**

---

### Soal 20 (Post Test)
**Pertanyaan:**  
Bagaimana pihak penerima memverifikasi keabsahan tanda tangan digital pada sebuah dokumen elektronik?

**Pilihan Jawaban:**
- **A.** Mendekripsi tanda tangan digital menggunakan public key pengirim untuk memperoleh digest asli, lalu membandingkannya dengan digest yang dihitung sendiri dari dokumen yang diterima. *(Kunci Jawaban)*
- **B.** Membuka file dokumen menggunakan program pengolah kata Microsoft Word.
- **C.** Menelepon pengirim untuk menanyakan apakah dokumen tersebut benar dikirimkan.
- **D.** Memeriksa apakah ukuran file dokumen merupakan bilangan bulat genap.
- **E.** Mengirimkan dokumen ke kantor pos terdekat untuk distempel manual.

> **Kunci Jawaban Benar:** **A. Mendekripsi tanda tangan digital menggunakan public key pengirim untuk memperoleh digest asli, lalu membandingkannya dengan digest yang dihitung sendiri dari dokumen yang diterima.**

---

### Soal 21 (Post Test)
**Pertanyaan:**  
Tiga layanan keamanan informasi yang diwujudkan secara simultan oleh tanda tangan digital adalah ...

**Pilihan Jawaban:**
- **A.** Otentikasi Pengirim (Authenticity), Integritas Pesan (Integrity), dan Anti-Penyangkalan (Non-Repudiation). *(Kunci Jawaban)*
- **B.** Kerahasiaan Mutlak (Confidentiality), Kompresi Data, dan Kecepatan Transmisi.
- **C.** Ketersediaan Jaringan (Availability), Alokasi Bandwidth, dan Load Balancing.
- **D.** Pencegahan Virus, Pemulihan Bencana, dan Redundansi Penyimpanan.
- **E.** Enkripsi Hardware, Proteksi BIOS, dan Pembersihan Disk.

> **Kunci Jawaban Benar:** **A. Otentikasi Pengirim (Authenticity), Integritas Pesan (Integrity), dan Anti-Penyangkalan (Non-Repudiation).**

---

### Soal 22 (Post Test)
**Pertanyaan:**  
Dalam infrastruktur Public Key Infrastructure (PKI), fungsi utama dari Certificate Authority (CA) adalah ...

**Pilihan Jawaban:**
- **A.** Bertindak sebagai pihak ketiga tepercaya (trusted third party) yang memverifikasi identitas pemilik kunci dan menerbitkan sertifikat digital X.509 bertanda tangan digital yang mengikat identitas dengan public key pemilik. *(Kunci Jawaban)*
- **B.** Menyimpan seluruh private key pengguna di server publik agar tidak hilang.
- **C.** Memungut pajak internet tahunan atas kepemilikan nama domain website.
- **D.** Menerjemahkan nama domain URL menjadi alamat IP numerik (DNS).
- **E.** Memperbaiki kerusakan fisik kabel fiber optik jaringan internet.

> **Kunci Jawaban Benar:** **A. Bertindak sebagai pihak ketiga tepercaya (trusted third party) yang memverifikasi identitas pemilik kunci dan menerbitkan sertifikat digital X.509 bertanda tangan digital yang mengikat identitas dengan public key pemilik.**

---

### Soal 23 (Post Test)
**Pertanyaan:**  
Mekanisme Online Certificate Status Protocol (OCSP) Stapling dirancang untuk meningkatkan efisiensi dan privasi pengecekan status pencabutan sertifikat SSL/TLS dengan cara ...

**Pilihan Jawaban:**
- **A.** Server web secara berkala meminta bukti validitas sertifikat bertanda tangan waktu dari CA (OCSP response) dan menyertakannya langsung kepada klien selama proses TLS handshake. *(Kunci Jawaban)*
- **B.** Mengharuskan klien mengunduh file daftar CRL berukuran ratusan megabyte setiap kali membuka website.
- **C.** Menghapus kebutuhan sertifikat SSL sehingga browser tidak pernah menampilkan error koneksi.
- **D.** Menyimpan seluruh histori browsing pengguna di server CA pusat.
- **E.** Mengizinkan server menggunakan sertifikat yang sudah kadaluarsa hingga 5 tahun.

> **Kunci Jawaban Benar:** **A. Server web secara berkala meminta bukti validitas sertifikat bertanda tangan waktu dari CA (OCSP response) dan menyertakannya langsung kepada klien selama proses TLS handshake.**

---

### Soal 24 (Post Test)
**Pertanyaan:**  
Jika suatu organisasi memiliki 100 karyawan yang saling ingin berkomunikasi secara rahasia sepasang-demi-sepasang menggunakan kriptografi simetris murni, jumlah pasangan kunci rahasia berbeda yang harus didistribusikan dan dikelola adalah ...

**Pilihan Jawaban:**
- **A.** N(N-1)/2 = 100 x 99 / 2 = 4.950 kunci rahasia *(Kunci Jawaban)*
- **B.** 100 kunci
- **C.** 200 kunci
- **D.** 1 kunci master bersama
- **E.** 10.000 kunci

> **Kunci Jawaban Benar:** **A. N(N-1)/2 = 100 x 99 / 2 = 4.950 kunci rahasia**

---

### Soal 25 (Post Test)
**Pertanyaan:**  
Bagaimana sistem Hybrid Cryptography (seperti pada protokol HTTPS/TLS) menggabungkan keunggulan kriptografi asimetris dan simetris secara harmonis?

**Pilihan Jawaban:**
- **A.** Kriptografi asimetris (RSA/ECDHE) digunakan pada fase awal handshake untuk mengotentikasi server dan mempertukarkan kunci sesi (session key) secara aman, kemudian seluruh data komunikasi bervolume besar dienkripsi menggunakan kriptografi simetris (AES-GCM) yang jauh lebih cepat dan efisien. *(Kunci Jawaban)*
- **B.** Kriptografi simetris digunakan untuk menandatangani dokumen, sedangkan kriptografi asimetris untuk mengenkripsi harddisk.
- **C.** Data teks dienkripsi dengan kriptografi simetris, sedangkan gambar dan video dienkripsi dengan asimetris.
- **D.** Kriptografi asimetris dijalankan hanya saat komputer dalam mode hemat daya (sleep).
- **E.** Kedua algoritma dijalankan bergantian setiap 10 detik secara berulang.

> **Kunci Jawaban Benar:** **A. Kriptografi asimetris (RSA/ECDHE) digunakan pada fase awal handshake untuk mengotentikasi server dan mempertukarkan kunci sesi (session key) secara aman, kemudian seluruh data komunikasi bervolume besar dienkripsi menggunakan kriptografi simetris (AES-GCM) yang jauh lebih cepat dan efisien.**

---
