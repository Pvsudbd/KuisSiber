# Bank Soal Tambahan Keamanan Siber (UTS Preparation)

Kumpulan 125 soal latihan tingkat lanjut (Hard / High-Order Thinking) untuk persiapan UTS Keamanan Siber.
Materi berfokus pada mekanisme teknis informatika (protokol, memori, arsitektur OS, web security, kriptografi, dan digital forensics).

---


# Week 2


## Pre Test

### Soal 139
Pada sistem biometrik, jika administrator mengubah threshold verifikasi (t) ke nilai yang lebih tinggi untuk memperketat keamanan, dampak statistik yang pasti terjadi pada False Acceptance Rate (FAR) dan False Rejection Rate (FRR) adalah ...

- **A**. FAR dan FRR keduanya menurun secara simultan mendekati nilai Equal Error Rate.
- **B**. FAR mengalami penurunan signifikan, namun FRR mengalami peningkatan secara komprehensif.
- **C**. FRR mengalami penurunan signifikan, namun FAR mengalami peningkatan sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **D**. FAR dan FRR keduanya meningkat karena sensitivitas sensor biometrik dinaikkan.
- **E**. Nilai FAR dan FRR tidak berubah karena nilai EER bersifat konstan pada perangkat.

> **Kunci Jawaban:** B. FAR mengalami penurunan signifikan, namun FRR mengalami peningkatan secara komprehensif.

---

### Soal 140
Dalam protokol Time-based One-Time Password (TOTP - RFC 6238), apa parameter inti yang membedakannya secara fundamental dari HMAC-based One-Time Password (HOTP - RFC 4226)?

- **A**. TOTP mengenkripsi shared secret dengan kunci privat asimetris, sedangkan HOTP mengandalkan fungsi hash MD5 tanpa shared secret sama sekali.
- **B**. TOTP menghitung kode menggunakan Unix epoch time dibagi time-step window sebagai moving factor, sedangkan HOTP memakai counter inkremental secara terperinci.
- **C**. HOTP menghasilkan token dinamis yang kedaluwarsa tiap 30 detik, sedangkan token TOTP valid permanen hingga counter server diperbarui pengguna.
- **D**. HOTP mewajibkan komunikasi online real-time dua arah dengan server, sedangkan TOTP berjalan sepenuhnya asinkron tanpa sinkronisasi waktu.
- **E**. TOTP menggunakan algoritma simetris AES-CBC, sedangkan HOTP menggunakan fungsi derivasi kunci PBKDF2 dengan salt acak 128 bit.

> **Kunci Jawaban:** B. TOTP menghitung kode menggunakan Unix epoch time dibagi time-step window sebagai moving factor, sedangkan HOTP memakai counter inkremental secara terperinci.

---

### Soal 141
Sebuah sistem pengawasan militer mengadopsi model kontrol akses Mandatory Access Control (MAC) berbasis Bell-LaPadula. Manakah skenario transfer informasi yang DILARANG oleh aturan '* -property' (Star Property) pada model ini?

- **A**. Subjek dengan izin Top Secret membaca dokumen yang berlabel status Secret yang diverifikasi melalui ticket granting service terpusat.
- **B**. Subjek dengan izin Confidential menulis log data ke berkas berlabel Top Secret yang diverifikasi melalui ticket granting service terpusat.
- **C**. Subjek dengan izin Secret membaca berkas internal yang berlabel status Secret.
- **D**. Subjek dengan izin Unclassified membaca dokumen berlabel status Unclassified sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **E**. Subjek dengan izin Secret menulis data ke dokumen berlabel status Unclassified.

> **Kunci Jawaban:** E. Subjek dengan izin Secret menulis data ke dokumen berlabel status Unclassified.

---

### Soal 142
Berbeda dengan Bell-LaPadula yang memprioritaskan kerahasiaan (confidentiality), model integritas Biba menerapkan aturan 'Simple Integrity Axiom'. Aturan ini menetapkan bahwa ...

- **A**. Subjek tidak diizinkan membaca objek yang memiliki tingkat integritas lebih rendah (no read-down) secara terperinci.
- **B**. Subjek tidak diizinkan menulis ke objek yang memiliki tingkat integritas lebih tinggi (no write-up).
- **C**. Subjek tidak diizinkan membaca objek yang memiliki label klasifikasi lebih tinggi (no read-up).
- **D**. Subjek tidak diizinkan menulis ke objek yang memiliki label klasifikasi lebih rendah (no write-down).
- **E**. Subjek memiliki hak penuh memodifikasi data apa pun selama terdaftar dalam grup akses owner.

> **Kunci Jawaban:** A. Subjek tidak diizinkan membaca objek yang memiliki tingkat integritas lebih rendah (no read-down) secara terperinci.

---

### Soal 143
Perhatikan skenario berikut: Dokter diperbolehkan membaca rekam medis pasien hanya jika berada di jaringan rumah sakit, saat jam dinas, dan status darurat aktif. Model kontrol akses yang paling tepat mengimplementasikan kebijakan tersebut adalah ...

- **A**. Discretionary Access Control (DAC) berbasis ACL statis yang dikelola oleh pasien yang diverifikasi melalui ticket granting service terpusat.
- **B**. Role-Based Access Control (RBAC) murni berbasis hierarki peran tanpa evaluasi konteks lingkungan.
- **C**. Mandatory Access Control (MAC) berbasis label tingkat keamanan militer multi-level.
- **D**. Identity-Based Access Control (IBAC) berbasis daftar pemetaan identitas tunggal pengguna.
- **E**. Attribute-Based Access Control (ABAC) yang mengevaluasi subjek, objek, aksi, dan atribut lingkungan.

> **Kunci Jawaban:** E. Attribute-Based Access Control (ABAC) yang mengevaluasi subjek, objek, aksi, dan atribut lingkungan.

---

### Soal 144
Pada autentikasi Kerberos v5, entitas manakah yang bertanggung jawab menerbitkan Ticket-Granting Ticket (TGT) setelah pengguna berhasil memverifikasi kredensial awalnya?

- **A**. Ticket Granting Service (TGS) setelah memeriksa authenticator yang dienkripsi session key.
- **B**. Security Account Manager (SAM) lokal pada workstation client sebelum request dikirim berdasarkan kebijakan kontrol akses formal yang terdaftar.
- **C**. Target Application Server setelah menerima Service Ticket yang sah dari client pada infrastruktur autentikasi enterprise berskala besar.
- **D**. Key Distribution Center (KDC) proxy server melalui inspeksi sertifikat TLS publik client.
- **E**. Authentication Service (AS) yang memverifikasi kredensial awal terhadap database KDC.

> **Kunci Jawaban:** E. Authentication Service (AS) yang memverifikasi kredensial awal terhadap database KDC.

---

### Soal 145
Dalam arsitektur Linux Pluggable Authentication Modules (PAM), jika suatu modul autentikasi dikonfigurasi dengan control flag 'required' dan menghasilkan evaluasi gagal (failure), perilaku PAM selanjutnya adalah ...

- **A**. Tetap melanjutkan eksekusi modul PAM berikutnya di stack, namun hasil autentikasi akhir tetap pasti gagal secara terperinci.
- **B**. Segera menghentikan proses evaluasi seluruh stack PAM dan langsung mengembalikan status gagal ke aplikasi.
- **C**. Mengabaikan kegagalan modul tersebut jika terdapat modul bertipe 'optional' yang sukses di bawahnya.
- **D**. Mengulang proses evaluasi modul tersebut sebanyak 3 kali sebelum memutuskan status akses pengguna.
- **E**. Meminta pengguna memasukkan kembali password cadangan melalui jalur fallback modul 'sufficient'.

> **Kunci Jawaban:** A. Tetap melanjutkan eksekusi modul PAM berikutnya di stack, namun hasil autentikasi akhir tetap pasti gagal secara terperinci.

---

### Soal 146
Jika pada stack Linux PAM suatu modul bertipe 'sufficient' berhasil dievaluasi (success) dan belum ada modul 'required' sebelumnya yang gagal, apa yang terjadi?

- **A**. PAM mengabaikan keberhasilan tersebut hingga semua modul bertipe optional memberikan respon sukses.
- **B**. PAM mewajibkan modul berikutnya diuji ulang menggunakan algoritma enkripsi password yang berbeda.
- **C**. PAM membatalkan sesi login karena modul sufficient memerlukan konfirmasi dari modul requisite yang diverifikasi melalui ticket granting service terpusat.
- **D**. PAM langsung mengembalikan status sukses ke aplikasi tanpa mengeksekusi modul-modul di bawahnya secara komprehensif.
- **E**. PAM beralih ke mode otentikasi interaktif untuk meminta kredensial faktor kedua (MFA).

> **Kunci Jawaban:** D. PAM langsung mengembalikan status sukses ke aplikasi tanpa mengeksekusi modul-modul di bawahnya secara komprehensif.

---

### Soal 147
Pada protokol FIDO2 / WebAuthn, mengapa mekanisme autentikasi menggunakan security key perangkat keras (hardware token) kebal terhadap serangan Phishing dan Adversary-in-the-Middle (AiTM)?

- **A**. Kunci publik disimpan pada token fisik dan didekripsi menggunakan biometric PIN pengguna.
- **B**. Data kredensial pengguna di-hash berulang kali menggunakan PBKDF2 dengan salt rahasia dari browser.
- **C**. Server autentikasi menyimpan master secret simetris yang disinkronisasi setiap 60 detik via satelit.
- **D**. Browser mengirimkan rekaman sidik jari mentah ke server autentikasi melalui tunnel TLS terenkripsi.
- **E**. Private key tidak pernah keluar dari authenticator, dan challenge ditandatangani bersama origin domain (Relying Party ID).

> **Kunci Jawaban:** E. Private key tidak pernah keluar dari authenticator, dan challenge ditandatangani bersama origin domain (Relying Party ID).

---

### Soal 148
Manakah di antara pasangan faktor berikut yang memenuhi kualifikasi True Two-Factor Authentication (2FA) menurut klasifikasi standar NIST SP 800-63B?

- **A**. Password statis 12 karakter dan PIN numerik 6 digit pada layar login perbankan sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **B**. Jawaban pertanyaan keamanan masa kecil dan kata sandi email pemulihan akun.
- **C**. Password akun sistem dan token OTP dari authenticator app pada smartphone pengguna.
- **D**. Pemindaian sidik jari optik dan pengenalan wajah 3D pada sensor smartphone.
- **E**. Kartu magnetik akses pintu kantor dan lencana RFID badge yang dikalungkan.

> **Kunci Jawaban:** C. Password akun sistem dan token OTP dari authenticator app pada smartphone pengguna.

---

### Soal 149
Pada sistem file Linux konvensional berbasis Discretionary Access Control (DAC), jika direktori memiliki izin octal 1777 (sticky bit aktif), dampak langsung terhadap hak pengguna non-root adalah ...

- **A**. Hanya user pembuat direktori yang berhak menulis file baru, sedangkan user lain hanya bisa mengeksekusi berdasarkan kebijakan kontrol akses formal yang terdaftar.
- **B**. Semua pengguna dapat membaca dan memodifikasi file, namun file hanya dapat dihapus oleh pemilik file atau root.
- **C**. File di dalam direktori dieksekusi dengan hak akses pemilik direktori (setuid privilege) guna mencegah serangan replay token otentikasi jaringan.
- **D**. File dienkripsi secara transparan menggunakan kunci grup pemilik direktori (setgid privilege) sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **E**. Pengguna biasa dilarang melihat daftar nama file di dalam direktori tanpa izin dari administrator pada infrastruktur autentikasi enterprise berskala besar.

> **Kunci Jawaban:** B. Semua pengguna dapat membaca dan memodifikasi file, namun file hanya dapat dihapus oleh pemilik file atau root.

---

### Soal 150
Dalam penyerangan Active Directory, teknik peretasan 'Pass-the-Hash' (PtH) memungkinkan penyerang mengotentikasi dirinya ke server target tanpa mengetahui password teks asli karena ...

- **A**. Protokol autentikasi NTLM memvalidasi response otentikasi yang dihitung langsung dari NTLM hash password secara komprehensif.
- **B**. NTLM hash dapat di-crack menjadi cleartext password secara deterministik dalam waktu kurang dari satu detik.
- **C**. Server domain controller menyimpan private key RSA pengguna dalam bentuk plaintext di memori LSASS yang diverifikasi melalui ticket granting service terpusat.
- **D**. Penyerang menyusupkan Ticket-Granting Ticket (TGT) palsu yang dibuat tanpa menggunakan session key KDC.
- **E**. Protokol Kerberos secara otomatis menurunkan tingkat proteksi ke LM hash jika terjadi kegagalan transmisi.

> **Kunci Jawaban:** A. Protokol autentikasi NTLM memvalidasi response otentikasi yang dihitung langsung dari NTLM hash password secara komprehensif.

---

### Soal 151
Model kontrol akses Role-Based Access Control (RBAC) sering menerapkan aturan Separation of Duties (SoD). Apa tujuan fundamental dari implementasi Static SoD (SSOD)?

- **A**. Mencegah pengguna mengaktifkan dua peran yang saling bertentangan secara bersamaan dalam satu sesi aktif sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **B**. Membatasi hak akses pengguna berdasarkan alamat IP dan jadwal jam operasional kerja kantor sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **C**. Mengharuskan otorisasi supervisor secara real-time setiap kali seorang user mengeksekusi transaksi finansial berdasarkan kebijakan kontrol akses formal yang terdaftar.
- **D**. Mencegah pengguna yang sama ditugaskan ke dua peran yang saling berkonflik kepentingan sejak tahap alokasi hak.
- **E**. Menghapus peran pengguna secara otomatis setelah masa kerja kontrak pegawai berakhir pada database sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.

> **Kunci Jawaban:** D. Mencegah pengguna yang sama ditugaskan ke dua peran yang saling berkonflik kepentingan sejak tahap alokasi hak.

---


## Post Test

### Soal 152
Serangan 'Golden Ticket' pada domain Microsoft Active Directory melibatkan pemalsuan Ticket-Granting Ticket (TGT) Kerberos secara penuh. Kunci kriptografi krusial apa yang wajib diperoleh penyerang agar dapat menciptakan tiket tersebut?

- **A**. Hash NTLM dari akun admin lokal pada workstation target yang diekstrak dari registry SAM.
- **B**. Kunci privat sertifikat SSL/TLS domain controller yang tersimpan di Active Directory Certificate Services.
- **C**. Password hash dari akun Domain Admin saat ini yang tersimpan di memori LSASS server aplikasi.
- **D**. Hash NTLM atau kunci AES dari akun layanan khusus 'krbtgt' pada domain controller.
- **E**. Master session key publik yang dibagikan oleh Time Stamping Authority eksternal.

> **Kunci Jawaban:** D. Hash NTLM atau kunci AES dari akun layanan khusus 'krbtgt' pada domain controller.

---

### Soal 153
Apa perbedaan fungsional utama antara serangan Golden Ticket dan Silver Ticket dalam domain lingkungan Kerberos?

- **A**. Golden Ticket hanya memberi hak user biasa, sedangkan Silver Ticket memberikan hak domain controller forest-wide pada infrastruktur autentikasi enterprise berskala besar.
- **B**. Golden Ticket memalsukan TGT menggunakan kunci krbtgt, sedangkan Silver Ticket memalsukan TGS menggunakan hash akun layanan spesifik.
- **C**. Silver Ticket berkomunikasi langsung dengan KDC, sedangkan Golden Ticket tidak memerlukan komunikasi dengan KDC sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **D**. Silver Ticket menggunakan enkripsi kurva eliptik ECC, sedangkan Golden Ticket mengandalkan cipher simetris DES usang.
- **E**. Golden Ticket dibuat menggunakan akun Administrator lokal, sedangkan Silver Ticket dibuat via akun guest domain.

> **Kunci Jawaban:** B. Golden Ticket memalsukan TGT menggunakan kunci krbtgt, sedangkan Silver Ticket memalsukan TGS menggunakan hash akun layanan spesifik.

---

### Soal 154
Dalam federasi identitas berbasis OpenID Connect (OIDC) dan OAuth 2.0, token manakah yang secara spesifik dirancang untuk membuktikan otentisitas identitas pengguna ke Client Application?

- **A**. ID Token dalam format JSON Web Token (JWT) yang ditandatangani secara kriptografis oleh Identity Provider.
- **B**. Refresh Token berumur panjang yang disimpan pada secure storage browser untuk rotasi sesi yang diverifikasi melalui ticket granting service terpusat.
- **C**. Access Token berbentuk opaque string yang dikirim ke Resource Server pada header Authorization sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **D**. Authorization Code acak sekali pakai yang ditukarkan melalui front-channel browser redirection guna mencegah serangan replay token otentikasi jaringan.
- **E**. SAML Artifact ticket yang dipetakan ke dalam database session back-channel Identity Provider.

> **Kunci Jawaban:** A. ID Token dalam format JSON Web Token (JWT) yang ditandatangani secara kriptografis oleh Identity Provider.

---

### Soal 155
Mengapa ekstensi PKCE (Proof Key for Code Exchange - RFC 7636) diwajibkan pada alur Authorization Code OAuth 2.0 untuk aplikasi mobile atau Single-Page Application (SPA)?

- **A**. Untuk memverifikasi keaslian sidik jari biometrik perangkat sebelum kode otorisasi dikirimkan server.
- **B**. Untuk mengenkripsi seluruh muatan Access Token menggunakan cipher simetris AES-GCM 256-bit di sisi browser.
- **C**. Untuk menggantikan fungsi sertifikat SSL/TLS pada komunikasi jaringan antara client dan Authorization Server.
- **D**. Untuk mencegah intersepsi Authorization Code oleh aplikasi berbahaya lokal yang mendaftarkan custom URI scheme yang sama.
- **E**. Untuk menonaktifkan mekanisme CORS (Cross-Origin Resource Sharing) pada browser modern pengguna.

> **Kunci Jawaban:** D. Untuk mencegah intersepsi Authorization Code oleh aplikasi berbahaya lokal yang mendaftarkan custom URI scheme yang sama.

---

### Soal 156
Pada kurva Receiver Operating Characteristic (ROC) sistem biometrik, titik potong di mana nilai False Acceptance Rate (FAR) persis sama dengan False Rejection Rate (FRR) disebut ...

- **A**. Area Under Curve (AUC) optimum pada infrastruktur autentikasi enterprise berskala besar.
- **B**. Equal Error Rate (EER) atau Crossover Error Rate (CER).
- **C**. True Positive Saturation Point (TPSP) sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **D**. Biometric Calibration Boundary (BCB).
- **E**. Zero False Rejection Threshold (ZFRT).

> **Kunci Jawaban:** B. Equal Error Rate (EER) atau Crossover Error Rate (CER).

---

### Soal 157
Dua sistem biometrik diuji di laboratorium: Sistem X memiliki EER sebesar 0.05%, sedangkan Sistem Y memiliki EER sebesar 2.1%. Kesimpulan performa akurasi yang paling valid adalah ...

- **A**. Sistem Y memiliki akurasi keseluruhan yang jauh lebih tinggi daripada Sistem X guna mencegah serangan replay token otentikasi jaringan.
- **B**. Kedua sistem memiliki akurasi identik karena nilai EER tidak berkorelasi dengan akurasi pengenalan.
- **C**. Sistem X membutuhkan waktu komputasi pencocokan template yang 40 kali lebih lambat dibanding Sistem Y.
- **D**. Sistem Y lebih cocok diterapkan di fasilitas militer berkategori keamanan tinggi dibanding Sistem X.
- **E**. Sistem X memiliki tingkat akurasi dan kinerja pembeda biometrik yang lebih unggul dibandingkan Sistem Y.

> **Kunci Jawaban:** E. Sistem X memiliki tingkat akurasi dan kinerja pembeda biometrik yang lebih unggul dibandingkan Sistem Y.

---

### Soal 158
Dalam model kontrol akses berbasis Brewer-Nash (sering disebut Chinese Wall Model), aturan keamanan diformulasikan secara khusus dengan tujuan utama untuk ...

- **A**. Mencegah timbulnya konflik kepentingan (conflict of interest) pada konsultan yang menangani perusahaan pesaing.
- **B**. Mencegah kebocoran data rahasia pertahanan negara ke domain sipil berkategori unclassified berdasarkan kebijakan kontrol akses formal yang terdaftar.
- **C**. Menjaga integritas data transaksi perbankan agar tidak dimodifikasi oleh entitas luar tanpa otorisasi pada infrastruktur autentikasi enterprise berskala besar.
- **D**. Menyediakan mekanisme delegasi wewenang administratif root secara transparan kepada user biasa guna mencegah serangan replay token otentikasi jaringan.
- **E**. Mengisolasi malware worm agar tidak menyebar antar-subnet jaringan lokal yang berbeda VLAN yang diverifikasi melalui ticket granting service terpusat.

> **Kunci Jawaban:** A. Mencegah timbulnya konflik kepentingan (conflict of interest) pada konsultan yang menangani perusahaan pesaing.

---

### Soal 159
Pada sistem Linux dengan kontrol akses Discretionary Access Control (DAC), jika suatu executable binary memiliki bit 'Setuid' (SUID) aktif (izin octal 4755) dan dimiliki oleh root, maka saat dieksekusi oleh user 'alice' ...

- **A**. File binary tersebut disalin ke direktori /root/ sebelum proses eksekusi dimulai kernel.
- **B**. Program menolak eksekusi kecuali password akun root dimasukkan alice di command line.
- **C**. Program berjalan dengan Effective User ID (EUID) milik root, bukan EUID milik alice secara komprehensif.
- **D**. Program berjalan dengan Real User ID root namun hak akses dibatasi sandbox SELinux.
- **E**. Sistem operasi mencatat peringatan pelanggaran hak akses ke file audit log /var/log/secure.

> **Kunci Jawaban:** C. Program berjalan dengan Effective User ID (EUID) milik root, bukan EUID milik alice secara komprehensif.

---

### Soal 160
Serangan 'Kerberoasting' pada Active Directory menargetkan komponen tiket layanan Kerberos (TGS). Mengapa penyerang dapat melakukan cracking password secara offline tanpa memicu lockout akun?

- **A**. Penyerang menyadap private key domain controller melalui kelemahan pada protokol pertukaran kunci Diffie-Hellman.
- **B**. Server KDC mengirimkan salinan plaintext password akun layanan di dalam field PAC tiket layanan berdasarkan kebijakan kontrol akses formal yang terdaftar.
- **C**. Tiket TGS dienkripsi menggunakan NTLM hash akun layanan (SPN), sehingga penyerang dapat mengekstrak dan men-crack tiket di mesin lokalnya.
- **D**. KDC tidak mencatat request tiket TGS pada Event Viewer keamanan Active Directory.
- **E**. Akun layanan Active Directory tidak dilindungi fungsi hash melainkan pengacakan XOR sederhana.

> **Kunci Jawaban:** C. Tiket TGS dienkripsi menggunakan NTLM hash akun layanan (SPN), sehingga penyerang dapat mengekstrak dan men-crack tiket di mesin lokalnya.

---

### Soal 161
Dalam federasi identitas SAML 2.0 (Security Assertion Markup Language), apa fungsi dari elemen '<SubjectConfirmationData>' pada assertion XML?

- **A**. Menyimpan salinan password terenkripsi pengguna untuk verifikasi login ganda di Service Provider.
- **B**. Menyediakan private key Identity Provider untuk mendekripsi payload sesi database pengguna sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.
- **C**. Membatasi validitas assertion berdasarkan rentang waktu, alamat IP, dan URL penerima yang sah.
- **D**. Menentukan daftar hak akses tabel SQL yang boleh dikueri oleh Service Provider guna mencegah serangan replay token otentikasi jaringan.
- **E**. Mengonversi token SAML menjadi format JSON Web Token (JWT) secara otomatis.

> **Kunci Jawaban:** C. Membatasi validitas assertion berdasarkan rentang waktu, alamat IP, dan URL penerima yang sah.

---

### Soal 162
Pada model kontrol akses Clark-Wilson, integritas data transaksi bisnis dijamin melalui pemisahan data menjadi Constrained Data Items (CDI) dan Unconstrained Data Items (UDI). Mekanisme apa yang wajib digunakan untuk memanipulasi CDI?

- **A**. Perintah sistem operasi langsung melalui shell root tanpa proses validasi perantara pada infrastruktur autentikasi enterprise berskala besar.
- **B**. Fungsi enkripsi asimetris RSA 4096-bit yang dijalankan di level kernel driver.
- **C**. Transformation Procedures (TP) yang tersertifikasi dan Integrity Verification Procedures (IVP).
- **D**. Akses kontrol ACL berbasis daftar nama pengguna (UID) di sistem berkas lokal.
- **E**. Protokol transmisi data UDP tanpa handshake untuk menghindari overhead latensi.

> **Kunci Jawaban:** C. Transformation Procedures (TP) yang tersertifikasi dan Integrity Verification Procedures (IVP).

---

### Soal 163
Dalam arsitektur XACML untuk kontrol akses Attribute-Based Access Control (ABAC), entitas arsitektur yang bertugas mengevaluasi kebijakan akses dan membuat keputusan otorisasi (Permit / Deny) adalah ...

- **A**. Policy Enforcement Point (PEP) yang mencegat permintaan akses dari subjek guna mencegah serangan replay token otentikasi jaringan.
- **B**. Policy Information Point (PIP) yang mengambil atribut subjek dan objek dari database eksternal.
- **C**. Policy Administration Point (PAP) yang mengelola siklus pembuatan berkas kebijakan berdasarkan kebijakan kontrol akses formal yang terdaftar.
- **D**. Policy Decision Point (PDP) yang menerima atribut dan mengevaluasi aturan kebijakan.
- **E**. Policy Retrieval Authority (PRA) yang menyinkronkan token autentikasi client guna mencegah serangan replay token otentikasi jaringan.

> **Kunci Jawaban:** D. Policy Decision Point (PDP) yang menerima atribut dan mengevaluasi aturan kebijakan.

---


# Week 3


## Pre Test

### Soal 164
Berdasarkan pedoman urutan volatilitas bukti digital (RFC 3227 - Order of Volatility), manakah urutan akuisisi bukti yang paling tepat dari yang paling volatil ke yang paling stabil?

- **A**. Registers & cache CPU, Physical memory (RAM), Routing table & kernel statistics, Disk storage, Optical media.
- **B**. Routing table & ARP cache, Registers & cache CPU, Physical memory (RAM), Non-volatile storage, Remote logging.
- **C**. Physical memory (RAM), Registers & cache CPU, Network state & process table, Storage disk, Remote logging data.
- **D**. Registers & cache CPU, Routing table & ARP cache, Physical memory (RAM), Temporary file systems, Optical media secara terperinci.
- **E**. Temporary file systems, Physical memory (RAM), Registers & cache CPU, Routing table & ARP cache, Backup tapes.

> **Kunci Jawaban:** D. Registers & cache CPU, Routing table & ARP cache, Physical memory (RAM), Temporary file systems, Optical media secara terperinci.

---

### Soal 165
Mengapa penggunaan hardware write-blocker merupakan standar wajib saat melakukan forensik bit-stream image terhadap media penyimpanan barang bukti digital?

- **A**. Mencegah sistem operasi forensik menulis metadata mount, update timestamp berkas, atau cache ke media bukti.
- **B**. Mempercepat transfer data transfer bus SATA hingga dua kali lipat dibanding pembacaan port USB standar berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.
- **C**. Mendekripsi partisi BitLocker atau LUKS pada disk target secara otomatis sebelum proses hashing dimulai.
- **D**. Menghapus cluster bad sector pada hard disk sehingga proses bit-by-bit imaging tidak mengalami freezing.
- **E**. Mengompresi raw disk image ke format E01 secara real-time guna menghemat ruang penyimpanan host forensik.

> **Kunci Jawaban:** A. Mencegah sistem operasi forensik menulis metadata mount, update timestamp berkas, atau cache ke media bukti.

---

### Soal 166
Dalam konteks hukum siber Indonesia (UU ITE), tindakan seorang penyerang yang menembus firewall dan sistem autentikasi server perbankan secara ilegal diatur dalam ...

- **A**. Pasal 27 ayat (3) terkait penghinaan dan pencemaran nama baik melalui media transmisi elektronik umum dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **B**. Pasal 31 ayat (2) terkait intersepsi atau penyadapan transmisi informasi elektronik pada jaringan privat sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.
- **C**. Pasal 30 ayat (3) terkait akses ilegal dengan melanggar, menerobos, melampaui, atau menjebol sistem pengamanan.
- **D**. Pasal 32 ayat (1) terkait pengubahan, perusakan, atau pemindahan dokumen elektronik milik pihak berwenang dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **E**. Pasal 33 terkait gangguan terhadap sistem elektronik yang berakibat sistem tidak bekerja sebagaimana mestinya guna memastikan integritas rantai keabsahan bukti chain of custody.

> **Kunci Jawaban:** C. Pasal 30 ayat (3) terkait akses ilegal dengan melanggar, menerobos, melampaui, atau menjebol sistem pengamanan.

---

### Soal 167
Aksi pemasangan software packet sniffer di switch internal untuk menyadap kredensial login dan pesan confidential tanpa izin secara spesifik melanggar UU ITE ...

- **A**. Pasal 30 ayat (1) mengenai pengaksesan komputer pihak lain tanpa hak secara umum tanpa menjebol proteksi berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.
- **B**. Pasal 35 mengenai manipulasi atau penciptaan dokumen elektronik seolah-olah merupakan data yang otentik.
- **C**. Pasal 32 ayat (2) mengenai pemindahan dokumen elektronik rahasia ke sistem elektronik yang tidak berhak.
- **D**. Pasal 34 ayat (1) mengenai pemanfaatan sandi lewat (password) atau kode akses untuk keuntungan finansial.
- **E**. Pasal 31 ayat (1) mengenai intersepsi atau penyadapan informasi/dokumen elektronik dalam sistem tertutup secara komprehensif.

> **Kunci Jawaban:** E. Pasal 31 ayat (1) mengenai intersepsi atau penyadapan informasi/dokumen elektronik dalam sistem tertutup secara komprehensif.

---

### Soal 168
Seorang insinyur perangkat lunak dengan sengaja mengubah nilai saldo di basis data aplikasi keuangan tanpa otorisasi. Dalam UU ITE, delik pidana ini diatur pada ...

- **A**. Pasal 30 ayat (2) terkait perolehan informasi elektronik dari komputer pihak lain dengan tujuan menguntungkan diri.
- **B**. Pasal 31 ayat (1) terkait intersepsi paket transmisi data keuangan antar server basis data dan server aplikasi.
- **C**. Pasal 28 ayat (1) terkait penyebaran informasi palsu dan menyesatkan yang mengakibatkan kerugian konsumen e-commerce.
- **D**. Pasal 33 terkait tindakan mengganggu integritas perangkat keras server hingga menimbulkan kegagalan daya guna memastikan integritas rantai keabsahan bukti chain of custody.
- **E**. Pasal 32 ayat (1) terkait pengubahan, penambahan, pengurangan, transmisi, atau perusakan dokumen elektronik secara komprehensif.

> **Kunci Jawaban:** E. Pasal 32 ayat (1) terkait pengubahan, penambahan, pengurangan, transmisi, atau perusakan dokumen elektronik secara komprehensif.

---

### Soal 169
Penyerangan Distributed Denial of Service (DDoS) yang membanjiri bandwidth server instansi publik hingga layanan mati total dijerat dengan ketentuan UU ITE ...

- **A**. Pasal 33 tentang perbuatan apa pun yang berakibat terganggunya sistem elektronik menjadi tidak bekerja sebagaimana mestinya.
- **B**. Pasal 31 ayat (2) tentang intersepsi komunikasi data yang tidak diperuntukkan bagi umum dalam lalu lintas internet sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.
- **C**. Pasal 32 ayat (3) tentang pemindahan dokumen elektronik yang mengakibatkan terbukanya data rahasia institusi sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.
- **D**. Pasal 30 ayat (3) tentang penerobosan perimeter sistem keamanan jaringan komputer milik lembaga publik berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.
- **E**. Pasal 35 tentang pemalsuan tanda tangan elektronik pejabat berwenang dalam sistem dokumen administrasi negara.

> **Kunci Jawaban:** A. Pasal 33 tentang perbuatan apa pun yang berakibat terganggunya sistem elektronik menjadi tidak bekerja sebagaimana mestinya.

---

### Soal 170
Dalam Budapest Convention on Cybercrime (ETS No. 185), pasal berapakah yang secara spesifik mewajibkan penandatangan mengkriminalisasi tindakan 'Data Interference'?

- **A**. Article 2 (Illegal access to computer systems without right) guna memastikan integritas rantai keabsahan bukti chain of custody.
- **B**. Article 3 (Illegal interception of non-public transmissions) sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.
- **C**. Article 4 (Data interference involving damaging or altering data).
- **D**. Article 5 (System interference hindering functioning of systems).
- **E**. Article 6 (Misuse of devices designed for committing offenses).

> **Kunci Jawaban:** C. Article 4 (Data interference involving damaging or altering data).

---

### Soal 171
Berdasarkan UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), manakah di antara opsi berikut yang seluruhnya termasuk dalam kategori 'Data Pribadi Spesifik'?

- **A**. Nama lengkap, jenis kelamin, alamat rumah tinggal, dan nomor telepon seluler pribadi.
- **B**. Data kesehatan, informasi biometrik, data genetika, dan catatan kejahatan seseorang secara komprehensif.
- **C**. Kewarganegaraan, agama, status perkawinan terdaftar, dan riwayat pekerjaan formal sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.
- **D**. Alamat IP publik, preferensi peramban web, riwayat browsing internet, dan cookie web.
- **E**. Nomor induk kependudukan (NIK), tempat tanggal lahir, nama ibu kandung, dan golongan darah.

> **Kunci Jawaban:** B. Data kesehatan, informasi biometrik, data genetika, dan catatan kejahatan seseorang secara komprehensif.

---

### Soal 172
Dalam Chain of Custody forensik digital, tindakan yang wajib dicatat secara mendetail saat serah terima barang bukti flashdisk mencakup ...

- **A**. Pernyataan pengakuan bersalah yang ditandatangani oleh tersangka di hadapan saksi ahli forensik digital.
- **B**. Daftar seluruh password akun pengguna yang tersimpan di dalam perangkat beserta nomor PIN perbankan pemilik.
- **C**. Estimasi nilai rupiah perangkat di pasaran perangkat keras bekas saat barang bukti tersebut disita penyidik.
- **D**. Konfigurasi detail register prosesor dan suhu operasional perangkat sebelum dimasukkan ke dalam kantong antistatis.
- **E**. Nilai hash cryptographic (MD5/SHA-256), nomor seri perangkat, identitas pemeriksa, dan tanggal waktu perpindahan fisik.

> **Kunci Jawaban:** E. Nilai hash cryptographic (MD5/SHA-256), nomor seri perangkat, identitas pemeriksa, dan tanggal waktu perpindahan fisik.

---

### Soal 173
Ketika menangani insiden komputer menyala yang menjalankan enkripsi disk BitLocker aktif dan malware RAM-resident, mengapa 'Live Acquisition' lebih diprioritaskan daripada langsung mencabut kabel daya?

- **A**. Pencabutan daya langsung dapat merusak struktur fisik sirkuit motherboard dan power supply server target.
- **B**. Kunci enkripsi memori (FVEK) dan artefak malware dalam RAM akan lenyap seketika daya listrik terputus secara komprehensif.
- **C**. Sistem operasi modern akan memformat ulang media penyimpanan jika komputer dimatikan secara mendadak berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.
- **D**. Live acquisition menghasilkan ukuran berkas citra bukti digital yang jauh lebih kecil daripada cold acquisition.
- **E**. Sertifikat digital forensik hanya sah secara hukum jika diambil ketika sistem operasi dalam status running.

> **Kunci Jawaban:** B. Kunci enkripsi memori (FVEK) dan artefak malware dalam RAM akan lenyap seketika daya listrik terputus secara komprehensif.

---

### Soal 174
Teknik anti-forensik 'Timestomping' sering digunakan pelaku kejahatan siber untuk mengelabui analis timeline forensik. Pada sistem berkas NTFS, teknik ini bekerja dengan cara ...

- **A**. Memanipulasi timestamp berkas pada atribut $STANDARD_INFORMATION tanpa menyelaraskan atribut $FILE_NAME secara komprehensif.
- **B**. Mengubah frekuensi kristal clock pada CMOS hardware BIOS agar waktu sistem berjalan mundur secara konstan.
- **C**. Menghapus berkas log Event Viewer Application dan Security secara berkala menggunakan skrip batch terjadwal.
- **D**. Mengenkripsi seluruh sektor metadata Master File Table ($MFT) dengan algoritma asimetris RSA 2048-bit dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **E**. Menyematkan payload malware ke dalam slack space cluster disk yang tidak terpetakan oleh sistem operasi.

> **Kunci Jawaban:** A. Memanipulasi timestamp berkas pada atribut $STANDARD_INFORMATION tanpa menyelaraskan atribut $FILE_NAME secara komprehensif.

---

### Soal 175
Dalam analisis dump memori RAM menggunakan Volatility Framework, mengapa plugin 'psscan' mampu menemukan proses malware tersembunyi yang gagal dideteksi oleh plugin 'pslist'?

- **A**. psscan membaca berkas prefetch di hard disk, sedangkan pslist hanya memeriksa cache CPU prosesor host dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **B**. pslist hanya dapat berjalan pada sistem operasi Linux, sedangkan psscan didesain eksklusif untuk kernel Windows.
- **C**. psscan melakukan scanning pola pool tag memori, sedangkan pslist hanya menelusuri linked-list EPROCESS aktif.
- **D**. pslist memerlukan privilege root untuk membaca memori, sedangkan psscan dapat berjalan di unprivileged mode.
- **E**. psscan menggunakan algoritma deobfuskasi XOR dinamis untuk membongkar injeksi shellcode pada stack memori.

> **Kunci Jawaban:** C. psscan melakukan scanning pola pool tag memori, sedangkan pslist hanya menelusuri linked-list EPROCESS aktif.

---

### Soal 176
Artefak Windows Registry manakah yang paling krusial dianalisis penyidik untuk merekonstruksi riwayat mounting perangkat USB flashdisk eksternal pada komputer tersangka?

- **A**. SYSTEM\CurrentControlSet\Enum\USBSTOR dan berkas setupapi.dev.log.
- **B**. SAM\Domains\Account\Users dan berkas Ntds.dit direktori domain controller.
- **C**. SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce startup keys dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **D**. SECURITY\Policy\Secrets dan berkas master key Credential Manager berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.
- **E**. SOFTWARE\Policies\Microsoft\Windows Defender\Exclusions keys guna memastikan integritas rantai keabsahan bukti chain of custody.

> **Kunci Jawaban:** A. SYSTEM\CurrentControlSet\Enum\USBSTOR dan berkas setupapi.dev.log.

---


## Post Test

### Soal 177
Pada sistem operasi Windows, analisis terhadap artefak Prefetch (.pf) memberikan nilai bukti digital yang sangat kuat karena mampu membuktikan ...

- **A**. Daftar alamat URL website perbankan yang diakses pengguna melalui browser mode incognito dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **B**. Isi plaintext percakapan instan yang terjadi sebelum prosesor mengalami crash blue screen.
- **C**. Kunci simetris AES yang digunakan ransomware untuk mengenkripsi volume partisi sekunder.
- **D**. Eksekusi suatu executable, waktu eksekusi terakhir, run count, serta DLL yang dimuat ke memori.
- **E**. Daftar kata sandi Wi-Fi SSID publik yang pernah terhubung ke adapter nirkabel laptop target.

> **Kunci Jawaban:** D. Eksekusi suatu executable, waktu eksekusi terakhir, run count, serta DLL yang dimuat ke memori.

---

### Soal 178
Metode pemulihan berkas 'File Carving' dalam investigasi disk forensik bekerja berdasarkan prinsip apa ketika tabel sistem berkas (seperti FAT/MFT) telah rusak atau terhapus?

- **A**. Melakukan rekonstruksi struktur pohon direktori berdasarkan sisa cache metadata pada RAM prosesor berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.
- **B**. Mendekompilasi file sistem operasi menggunakan teknik reverse engineering machine code berbasis AI.
- **C**. Mengirimkan kueri recovery data ke server bayangan Volume Shadow Copy Service melalui jaringan dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **D**. Mengidentifikasi magic bytes signature (header dan footer spesifik format berkas) pada raw unallocated cluster.
- **E**. Menghitung nilai parity cluster RAID menggunakan algoritma Reed-Solomon untuk membangkitkan berkas.

> **Kunci Jawaban:** D. Mengidentifikasi magic bytes signature (header dan footer spesifik format berkas) pada raw unallocated cluster.

---

### Soal 179
Dalam steganografi gambar digital, metode Least Significant Bit (LSB) embedding menyembunyikan payload rahasia dengan cara mengubah ...

- **A**. Bit paling rendah dari nilai byte warna piksel sehingga perubahan visual tidak kasat mata bagi mata manusia.
- **B**. Metadata Exif kamera seperti focal length, aperture, dan koordinat GPS penangkapan foto guna memastikan integritas rantai keabsahan bukti chain of custody.
- **C**. Algoritma kompresi Huffman dari lossless format PNG menjadi lossy compression format JPEG secara dinamis guna memastikan integritas rantai keabsahan bukti chain of custody.
- **D**. Resolusi lebar dan tinggi gambar di header IHDR tanpa mengubah payload matriks piksel sebenarnya dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **E**. Tabel kuantisasi Discrete Cosine Transform (DCT) pada kanal chrominance secara acak merata yang dicatat dalam berkas berita acara pemeriksaan forensik.

> **Kunci Jawaban:** A. Bit paling rendah dari nilai byte warna piksel sehingga perubahan visual tidak kasat mata bagi mata manusia.

---

### Soal 180
Pada sistem berkas NTFS, berkas teks berukuran sangat kecil (< 700 byte) sering kali dikategorikan sebagai 'Resident File'. Karakteristik unik berkas resident ini adalah ...

- **A**. Datanya selalu dikompresi menggunakan algoritma LZX dan hanya bisa dibaca oleh pengguna berhak istimewa root.
- **B**. Datanya disimpan langsung di dalam record Master File Table ($MFT) itu sendiri tanpa alokasi cluster eksternal.
- **C**. Datanya tidak akan pernah terhapus meskipun sistem berkas diformat ulang menggunakan perintah quick format.
- **D**. Datanya disimpan secara eksklusif di dalam NVRAM motherboard dan tidak tertulis di media piringan disk.
- **E**. Datanya secara otomatis diduplikasi ke sektor bad block untuk mencegah kehilangan data akibat kegagalan baca.

> **Kunci Jawaban:** B. Datanya disimpan langsung di dalam record Master File Table ($MFT) itu sendiri tanpa alokasi cluster eksternal.

---

### Soal 181
Dalam forensik perangkat bergerak (mobile forensics), perbedaan mendasar antara 'Logical Extraction' dan 'Physical Extraction' adalah ...

- **A**. Logical mengekstrak salinan bit-by-bit flash memory mentah, sedangkan Physical hanya mengambil file via backup API guna memastikan integritas rantai keabsahan bukti chain of custody.
- **B**. Logical mampu memulihkan seluruh berkas yang terhapus dari unallocated space, sedangkan Physical tidak bisa memulihkannya.
- **C**. Logical memerlukan solder chip-off pada papan PCB ponsel, sedangkan Physical cukup menggunakan kabel data USB biasa guna memastikan integritas rantai keabsahan bukti chain of custody.
- **D**. Logical hanya mengambil data struktur logis melalui API OS, sedangkan Physical mengambil bit-by-bit raw flash memory secara komprehensif.
- **E**. Logical hanya dapat diterapkan pada sistem operasi iOS, sedangkan Physical hanya dapat dieksekusi pada ponsel Android.

> **Kunci Jawaban:** D. Logical hanya mengambil data struktur logis melalui API OS, sedangkan Physical mengambil bit-by-bit raw flash memory secara komprehensif.

---

### Soal 182
Seorang individu memproduksi, memperjualbelikan, dan mendistribusikan software keylogger serta tool exploit kit untuk membobol sistem pihak lain. Pasal UU ITE yang mengatur larangan ini adalah ...

- **A**. Pasal 30 ayat (1) mengenai tindakan mengakses komputer tanpa izin demi memperoleh hiburan semata yang dicatat dalam berkas berita acara pemeriksaan forensik.
- **B**. Pasal 32 ayat (2) mengenai pengiriman data elektronik rahasia ke server luar negeri tanpa sertifikasi keamanan yang dicatat dalam berkas berita acara pemeriksaan forensik.
- **C**. Pasal 34 ayat (1) mengenai pembuatan, penjualan, pengimporan, atau pendistribusian perangkat keras/lunak untuk tindak pidana siber.
- **D**. Pasal 36 mengenai perbuatan melawan hukum yang tidak mengakibatkan kerugian materiil bagi korban secara riil guna memastikan integritas rantai keabsahan bukti chain of custody.
- **E**. Pasal 37 mengenai kewajiban penyelenggara sistem elektronik mendaftarkan sertifikat elektronik ke kementerian yang dicatat dalam berkas berita acara pemeriksaan forensik.

> **Kunci Jawaban:** C. Pasal 34 ayat (1) mengenai pembuatan, penjualan, pengimporan, atau pendistribusian perangkat keras/lunak untuk tindak pidana siber.

---

### Soal 183
Berdasarkan UU PDP (Undang-Undang Pelindungan Data Pribadi No. 27 Tahun 2022), hak subjek data pribadi untuk menuntut penghapusan data pribadinya dikenal sebagai ...

- **A**. Hak atas Portabilitas Data Pribadi antar pengendali data secara otomatis yang dicatat dalam berkas berita acara pemeriksaan forensik.
- **B**. Hak Menunda Pembayaran Ganti Rugi Pelanggaran Keamanan Sistem Informasi.
- **C**. Hak Mengajukan Keberatan atas Keputusan Otomatisasi Profiling Konsumen.
- **D**. Hak Mengakses dan Memperoleh Salinan Data Tanpa Biaya Administrasi Tambahan.
- **E**. Hak Mengakhiri Pemrosesan dan Hak Penghapusan (Right to Erasure / to be Forgotten).

> **Kunci Jawaban:** E. Hak Mengakhiri Pemrosesan dan Hak Penghapusan (Right to Erasure / to be Forgotten).

---

### Soal 184
Dalam network forensics, mengapa berkas PCAP (Full Packet Capture) memberikan visibilitas yang jauh lebih tinggi dibanding rekaman NetFlow / IPFIX?

- **A**. NetFlow mengenkripsi data lalu lintas menggunakan private key router, sedangkan PCAP menyimpan data dalam plaintext sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.
- **B**. PCAP menyimpan seluruh payload aplikasi dan header layer 2-7, sedangkan NetFlow hanya mencatat metadata flow 5-tuple.
- **C**. PCAP memerlukan bandwidth jaringan yang jauh lebih kecil dan ruang disk minimal dibanding rekaman NetFlow dalam kerangka pembuktian tindak pidana siber menurut undang-undang.
- **D**. NetFlow hanya mampu mencatat paket protokol TCP, sedangkan PCAP secara eksklusif hanya memantau lalu lintas UDP guna memastikan integritas rantai keabsahan bukti chain of custody.
- **E**. PCAP langsung menyaring serangan malware di switch core tanpa memerlukan analisis lanjut di workstation forensik berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.

> **Kunci Jawaban:** B. PCAP menyimpan seluruh payload aplikasi dan header layer 2-7, sedangkan NetFlow hanya mencatat metadata flow 5-tuple.

---

### Soal 185
Mengapa pemulihan berkas terhapus menggunakan carver pada media Solid State Drive (SSD) modern jauh lebih sulit dibanding pada Hard Disk Drive (HDD) mekanis?

- **A**. SSD memiliki piringan magnetik yang berputar pada kecepatan ekstrem sehingga sisa magnetisme terdistorsi yang dicatat dalam berkas berita acara pemeriksaan forensik.
- **B**. Kontroler SSD menolak seluruh perintah pembacaan raw bit-stream yang dikirimkan oleh software forensic imaging.
- **C**. Sistem operasi selalu menerapkan enkripsi AES-512 level chip hardware pada setiap sektor NAND flash SSD yang dicatat dalam berkas berita acara pemeriksaan forensik.
- **D**. SSD tidak menggunakan cluster sistem berkas dan hanya mengandalkan alamat memori virtual acak dinamis guna memastikan integritas rantai keabsahan bukti chain of custody.
- **E**. Perintah TRIM dan garbage collection pada SSD secara proaktif membersihkan blok memori flash yang ditandai terhapus.

> **Kunci Jawaban:** E. Perintah TRIM dan garbage collection pada SSD secara proaktif membersihkan blok memori flash yang ditandai terhapus.

---

### Soal 186
Dalam investigasi memori (memory forensics), indikator kuat adanya teknik Process Hollowing atau DLL Injection oleh malware tingkat lanjut ditandai dengan alokasi memori berkategori ...

- **A**. Halaman memori berstatus PAGE_READONLY yang dipetakan langsung dari berkas sistem Windows asli (ntdll.dll).
- **B**. Halaman memori privat (MEM_PRIVATE) yang memiliki izin eksekusi dan penulisan sekaligus (PAGE_EXECUTE_READWRITE).
- **C**. Halaman memori bersama (MEM_SHARED) dengan izin akses eksklusif PAGE_NOACCESS untuk proses thread kernel.
- **D**. Halaman memori stack proses yang dialokasikan di area memory-mapped I/O perangkat keras grafis terpasang.
- **E**. Halaman memori berkas swapfile.sys yang telah ditandai sebagai uncommitted space oleh sistem virtual memory.

> **Kunci Jawaban:** B. Halaman memori privat (MEM_PRIVATE) yang memiliki izin eksekusi dan penulisan sekaligus (PAGE_EXECUTE_READWRITE).

---

### Soal 187
Agar bukti digital dapat diterima (admissible) di persidangan menurut hukum acara pidana dan UU ITE Pasal 5 dan 6, syarat formil dan materiil yang paling mendasar adalah ...

- **A**. Bukti harus berupa perangkat keras fisik asli bergaransi distributor resmi dan belum pernah dibuka bautnya berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.
- **B**. Telah didekripsi secara penuh tanpa menyisakan enkripsi apa pun dan disetujui langsung oleh tersangka perkara.
- **C**. Diperoleh secara sah menurut hukum, terjaga integritas dan keasliannya (chain of custody), serta dapat dipertanggungjawabkan.
- **D**. Telah diuji coba di tiga laboratorium forensik universitas swasta berbeda dalam kurun waktu satu minggu kalender.
- **E**. Memiliki ukuran file minimal 1 Terabyte dan disimpan di dalam media penyimpanan cloud bersertifikat internasional.

> **Kunci Jawaban:** C. Diperoleh secara sah menurut hukum, terjaga integritas dan keasliannya (chain of custody), serta dapat dipertanggungjawabkan.

---

### Soal 188
Berdasarkan standar Computer Security Incident Handling Guide (NIST SP 800-61 Rev. 2), urutan 4 fase utama siklus penanganan insiden keamanan siber adalah ...

- **A**. Risk Assessment, Security Auditing, Penetration Testing, Legal Prosecution Report.
- **B**. Triage, Evidence Hashing, Malware Reverse Engineering, System Reinstallation.
- **C**. Identification, Authentication, Authorization, Accounting, Continuous Monitoring.
- **D**. Preparation, Detection & Analysis, Containment, Eradication & Recovery, Post-Incident Activity.
- **E**. Policy Definition, Architecture Design, Tool Deployment, Annual Compliance Review.

> **Kunci Jawaban:** D. Preparation, Detection & Analysis, Containment, Eradication & Recovery, Post-Incident Activity.

---


# Week 4


## Pre Test

### Soal 189
Pada arsitektur x86-64, bagaimana mekanisme mendasar sebuah serangan Stack-based Buffer Overflow klasik berhasil membajak alur eksekusi (control flow) program?

- **A**. Menimpa frame pointer (RBP) dan saved return address pada call stack sehingga instruksi RET melompat ke alamat yang dikontrol penyerang.
- **B**. Mengubah nilai register penunjuk instruksi (RIP) secara langsung melalui instruksi MOV unprivileged pada ring 3 sistem operasi sehingga memicu eksekusi instruksi pada privilege level kernel.
- **C**. Mengganti tabel Global Descriptor Table (GDT) di kernel space sehingga seluruh hak akses proses dialihkan ke mode superuser yang dievaluasi compiler selama fase kompilasi dan optimasi.
- **D**. Memodifikasi pointer Global Offset Table (GOT) tanpa menyentuh batasan alokasi array lokal yang tersimpan di stack memori fungsi sesuai prinsip secure software development lifecycle enterprise.
- **E**. Menginstruksikan CPU untuk mengeksekusi trap interrupt 0x80 dengan muatan payload shellcode di dalam register akumulator RAX.

> **Kunci Jawaban:** A. Menimpa frame pointer (RBP) dan saved return address pada call stack sehingga instruksi RET melompat ke alamat yang dikontrol penyerang.

---

### Soal 190
Mekanisme mitigasi Stack Canary (Stack Cookie) melindungi program dari buffer overflow dengan menempatkan nilai integer acak di memori. Di manakah posisi persis canary tersebut diletakkan?

- **A**. Di antara segmen instruksi .text dan segmen konstanta data read-only .rodata pada struktur berkas biner ELF sehingga memicu eksekusi instruksi pada privilege level kernel.
- **B**. Tepat di antara buffer array lokal dan saved base pointer / return address pada stack frame fungsi yang aktif secara komprehensif.
- **C**. Di dalam tabel Thread Local Storage (TLS) untuk mengamankan komunikasi antar-thread dari race condition paralel.
- **D**. Pada alamat terendah dari heap memory sebelum pointer chunk metadata pertama dialokasikan oleh runtime allocator.
- **E**. Di puncak stack tepat sebelum parameter fungsi pertama disorongkan (pushed) oleh pemanggil fungsi (caller).

> **Kunci Jawaban:** B. Tepat di antara buffer array lokal dan saved base pointer / return address pada stack frame fungsi yang aktif secara komprehensif.

---

### Soal 191
Address Space Layout Randomization (ASLR) secara acak mengacak posisi stack, heap, dan pustaka bersama. Mengapa vulnerability 'Information Disclosure' (seperti format string leak) sering kali menjadi prasyarat untuk membobol ASLR?

- **A**. Information disclosure mengubah hak akses memori dari read-only menjadi read-write-execute secara dinamis pada arsitektur biner 64-bit yang diproteksi compiler flags.
- **B**. Bocoran alamat pointer memori aktual memungkinkan penyerang menghitung base address pustaka (misal libc) via offset tetap.
- **C**. Bocoran data memicu proses crash berulang sehingga kernel Linux secara otomatis menonaktifkan proteksi ASLR sistem untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **D**. Alamat memori yang bocor dapat dimanfaatkan untuk menulis shellcode langsung ke dalam register prosesor host sehingga memicu eksekusi instruksi pada privilege level kernel.
- **E**. Information disclosure secara otomatis mereset nilai stack canary menjadi deretan byte null (0x0000000000000000) yang dievaluasi compiler selama fase kompilasi dan optimasi.

> **Kunci Jawaban:** B. Bocoran alamat pointer memori aktual memungkinkan penyerang menghitung base address pustaka (misal libc) via offset tetap.

---

### Soal 192
Ketika Data Execution Prevention (DEP / NX bit) aktif, halaman memori stack dan heap ditandai sebagai non-executable. Teknik eksploitasi apa yang dirancang khusus untuk memotong proteksi ini tanpa perlu mengeksekusi shellcode di stack?

- **A**. Heap Spraying dengan membanjiri memori menggunakan ribuan objek string NOP sled berukuran raksasa untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **B**. Timing Attack pada algoritma kriptografi kunci publik untuk memulihkan eksponen privat enkripsi RSA.
- **C**. Blind SQL Injection dengan memanfaatkan delay query waktu (time-based) untuk menebak hash kata sandi root yang dievaluasi compiler selama fase kompilasi dan optimasi.
- **D**. Cross-Site Scripting berbasis DOM dengan menyuntikkan payload JavaScript ke atribut innerHTML halaman web.
- **E**. Return-Oriented Programming (ROP) dengan merangkai potongan kode executable biner yang berakhiran instruksi RET (gadgets).

> **Kunci Jawaban:** E. Return-Oriented Programming (ROP) dengan merangkai potongan kode executable biner yang berakhiran instruksi RET (gadgets).

---

### Soal 193
Dalam eksploitasi celah format string pada fungsi `printf(user_input)` bahasa C, penentu format (format specifier) manakah yang dapat dimanfaatkan penyerang untuk MENULIS nilai ke alamat memori tertentu?

- **A**. Specifier %x yang mencetak representasi heksadesimal dari nilai yang tersimpan di stack memori saat ini.
- **B**. Specifier %p yang menampilkan alamat virtual pointer register stack sebagai string heksadesimal standar.
- **C**. Specifier %s yang membaca deretan string biner secara rekursif hingga menemukan karakter null byte pembatas.
- **D**. Specifier %n yang menuliskan jumlah karakter yang telah diformat sejauh ini ke alamat pointer yang ditunjuk secara terperinci.
- **E**. Specifier %d yang mengonversi bilangan integer bertanda ke format desimal untuk verifikasi tipe data variabel.

> **Kunci Jawaban:** D. Specifier %n yang menuliskan jumlah karakter yang telah diformat sejauh ini ke alamat pointer yang ditunjuk secara terperinci.

---

### Soal 194
Bagaimana kerentanan 'Integer Overflow' dapat bertransisi menjadi Heap Buffer Overflow pada potongan kode: `size_t total = count * sizeof(Item); Item *buf = malloc(total); memcpy(buf, src, count * sizeof(Item));`?

- **A**. Fungsi malloc mengembalikan pointer NULL yang langsung dieksekusi oleh instruksi memcpy sebagai instruksi jump CPU untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **B**. Perkalian variabel count meluap melampaui batas tipe data sehingga malloc mengalokasikan buffer kecil, namun memcpy menulis data besar.
- **C**. Ukuran sizeof(Item) berubah secara dinamis pada saat runtime sehingga pointer buf berpindah ke stack memori internal.
- **D**. Tipe data size_t dipaksa menjadi signed integer negatif sehingga memicu alokasi memori berukuran tak hingga (infinite heap).
- **E**. Instruksi memcpy menolak menyalin data bertipe struktural biner jika buffer dialokasikan menggunakan alokator malloc standar.

> **Kunci Jawaban:** B. Perkalian variabel count meluap melampaui batas tipe data sehingga malloc mengalokasikan buffer kecil, namun memcpy menulis data besar.

---

### Soal 195
Kerentanan Use-After-Free (UAF) terjadi akibat pengelolaan memori dinamis yang keliru. Dampak keamanan paling berbahaya yang dapat ditimbulkan oleh UAF ketika penyerang dapat mengontrol isi chunk yang telah dibebaskan adalah ...

- **A**. Penurunan performa throughput jaringan akibat fragmentasi paket data TCP pada soket komunikasi server.
- **B**. Perubahan status koneksi database dari mode transaksional ACID menjadi mode autocommit tanpa peringatan sistem.
- **C**. Pembajakan pointer fungsi atau virtual method table (vtable) objek yang menyebabkan Arbitrary Code Execution secara terperinci.
- **D**. Penghapusan seluruh indeks tabel basis data akibat kesalahan penulisan pointer pada struktur berkas b-tree.
- **E**. Kegagalan sinkronisasi waktu NTP antara server aplikasi dan server domain controller di infrastruktur lokal.

> **Kunci Jawaban:** C. Pembajakan pointer fungsi atau virtual method table (vtable) objek yang menyebabkan Arbitrary Code Execution secara terperinci.

---

### Soal 196
Apa dampak utama dari kerentanan 'Double Free' pada alokator memori heap modern (seperti glibc ptmalloc) jika mitigasi integritas bin rusak atau berhasil dilewati penyerang?

- **A**. Prosesor secara permanen mengunci bus memori hardware sehingga sistem operasi mengalami kernel panic untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **B**. Sertifikat SSL/TLS server web dihapus dari direktori konfigurasi web server secara permanen tanpa jejak log.
- **C**. Alamat IP publik server web langsung diubah menjadi alamat loopback 127.0.0.1 oleh driver antarmuka jaringan.
- **D**. Sistem operasi mematikan seluruh firewall iptables dan membuka port layanan administrasi SSH tanpa autentikasi.
- **E**. Penyerang dapat merusak linked-list alokator heap (seperti tcache/fastbin) untuk menghasilkan alokasi chunk di alamat memori sembarang.

> **Kunci Jawaban:** E. Penyerang dapat merusak linked-list alokator heap (seperti tcache/fastbin) untuk menghasilkan alokasi chunk di alamat memori sembarang.

---

### Soal 197
Kerentanan 'Off-by-One' (Single Byte Overflow) tampak sepele karena hanya meluapkan tepat satu byte ke memori adjacent. Namun, mengapa cacat ini dapat menyebabkan pembajakan kontrol alur program pada stack frame?

- **A**. Satu byte tersebut dapat menimpa least significant byte dari saved frame pointer (EBP/RBP), membelokkan stack frame pemanggil saat epilog leave/ret.
- **B**. Kernel Linux secara otomatis mengeksekusi shell root setiap kali mendeteksi anomali penulisan satu byte di memori virtual.
- **C**. Satu byte tersebut menghapus seluruh proteksi enkripsi hardware TPM pada motherboard secara seketika.
- **D**. Single byte overflow memicu prosesor beralih dari mode 64-bit long mode ke mode 16-bit real mode tanpa validasi.
- **E**. Penulisan satu byte ke stack frame secara otomatis menonaktifkan seluruh aturan firewall jaringan tingkat kernel.

> **Kunci Jawaban:** A. Satu byte tersebut dapat menimpa least significant byte dari saved frame pointer (EBP/RBP), membelokkan stack frame pemanggil saat epilog leave/ret.

---

### Soal 198
Dalam pemodelan ancaman STRIDE, kategori ancaman 'Repudiation' berkaitan langsung dengan pelanggaran terhadap prinsip keamanan informasi apa, dan bagaimana mitigasi standarnya?

- **A**. Ketiadaan sangkalan (Non-repudiation); dimitigasi dengan digital signature dan secure audit logging yang tamper-proof secara terperinci.
- **B**. Kerahasiaan data (Confidentiality); dimitigasi dengan penerapan algoritma enkripsi simetris AES-256 GCM.
- **C**. Ketersediaan layanan (Availability); dimitigasi dengan implementasi load balancer dan arsitektur redundansi multi-zona.
- **D**. Otorisasi pengguna (Authorization); dimitigasi dengan pembatasan hak akses berbasis Role-Based Access Control.
- **E**. Otentikasi identitas (Authenticity); dimitigasi dengan pengaktifan Multi-Factor Authentication berbasis token FIDO2.

> **Kunci Jawaban:** A. Ketiadaan sangkalan (Non-repudiation); dimitigasi dengan digital signature dan secure audit logging yang tamper-proof secara terperinci.

---

### Soal 199
Model penilaian risiko kerentanan DREAD mengevaluasi tingkat keparahan risiko berdasarkan 5 parameter. Parameter 'Discoverability' dalam DREAD mengukur ...

- **A**. Berapa besar kerugian finansial yang diderita organisasi apabila kerentanan berhasil dieksploitasi musuh.
- **B**. Tingkat keahlian teknis dan perkakas khusus yang dibutuhkan untuk membuat senjata exploit fungsional.
- **C**. Seberapa konsisten exploit dapat dijalankan berulang kali untuk menghasilkan efek serangan yang sama persis.
- **D**. Berapa persentase total pengguna sistem yang terkena dampak langsung dari eksploitasi celah keamanan.
- **E**. Seberapa mudah seorang penyerang dapat menemukan keberadaan kerentanan tersebut dalam sistem secara komprehensif.

> **Kunci Jawaban:** E. Seberapa mudah seorang penyerang dapat menemukan keberadaan kerentanan tersebut dalam sistem secara komprehensif.

---

### Soal 200
Mengapa mitigasi compiler `-fstack-protector-strong` dianggap lebih optimal dan komprehensif dibanding `-fstack-protector` biasa pada GCC/Clang?

- **A**. Menolak melakukan kompilasi terhadap kode sumber yang memanggil pustaka standar libc yang tidak tersertifikasi ISO sehingga memicu eksekusi instruksi pada privilege level kernel.
- **B**. Mendekripsi seluruh biner executable saat runtime menggunakan kunci sesi dinamis yang disimpan di register CPU yang dievaluasi compiler selama fase kompilasi dan optimasi.
- **C**. Memasang stack canary pada semua fungsi yang memiliki buffer array bertipe apa pun, referensi lokal, atau alokasi alloca().
- **D**. Mengalokasikan seluruh variabel lokal di memori video GPU untuk menghindari serangan buffer overflow pada RAM utama sehingga memicu eksekusi instruksi pada privilege level kernel.
- **E**. Menghapus instruksi RET dari assembly dan menggantinya dengan panggilan interrupt kernel langsung di setiap akhir fungsi.

> **Kunci Jawaban:** C. Memasang stack canary pada semua fungsi yang memiliki buffer array bertipe apa pun, referensi lokal, atau alokasi alloca().

---

### Soal 201
Kompilasi biner dengan flag `-Wl,-z,relro,-z,now` (Full RELRO) memberikan proteksi memori yang sangat tangguh terhadap teknik GOT Overwrite dengan cara ...

- **A**. Mengacak alamat memori basis dari seluruh pustaka bersama setiap kali fungsi pustaka baru dipanggil oleh program.
- **B**. Mengenkripsi setiap entri pada Global Offset Table menggunakan algoritma ChaCha20 dengan nonce sekali pakai.
- **C**. Memisahkan tabel pointer fungsi ke dalam segmen memori privat yang hanya dapat diakses melalui instruksi hypervisor.
- **D**. Menyelesaikan seluruh symbol resolusi dinamis saat startup program dan menandai tabel GOT sebagai read-only secara komprehensif.
- **E**. Menghapus simbol fungsi pustaka sepenuhnya dari berkas biner dan mengonversinya menjadi fungsi inline statis.

> **Kunci Jawaban:** D. Menyelesaikan seluruh symbol resolusi dinamis saat startup program dan menandai tabel GOT sebagai read-only secara komprehensif.

---


## Post Test

### Soal 202
Dalam metodologi pengujian keamanan perangkat lunak, kelemahan mendasar dari Static Application Security Testing (SAST) dibanding DAST adalah ...

- **A**. SAST memerlukan aplikasi berjalan penuh di environment staging dan tidak dapat memeriksa berkas kode sumber.
- **B**. Waktu eksekusi SAST memakan waktu berminggu-minggu karena memerlukan serangan penetrasi dinamis ke port jaringan aktif.
- **C**. SAST hanya mampu mendeteksi kerentanan konfigurasi server web dan sama sekali buta terhadap bug logika pemrograman.
- **D**. Tingkat false positive yang cenderung tinggi karena analyzer menganalisis aliran kode tanpa memahami konteks runtime sistem aktual.
- **E**. SAST hanya kompatibel dengan arsitektur cloud serverless dan tidak dapat memindai aplikasi monolitik on-premise.

> **Kunci Jawaban:** D. Tingkat false positive yang cenderung tinggi karena analyzer menganalisis aliran kode tanpa memahami konteks runtime sistem aktual.

---

### Soal 203
Kerentanan Time-of-Check to Time-of-Use (TOCTOU) adalah varian cacat race condition. Manakah skenario implementasi yang rentan terhadap eksploitasi symlink race berbasis TOCTOU?

- **A**. Aplikasi memverifikasi checksum SHA-256 berkas biner pembaruan sebelum memuat pustaka ke memori prosesor yang terlindungi ASLR pada arsitektur biner 64-bit yang diproteksi compiler flags.
- **B**. Aplikasi menggunakan fungsi atomic `open("/tmp/lock", O_CREAT | O_EXCL | O_WRONLY, 0600)` untuk membuat berkas sementara tanpa jeda waktu untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **C**. Aplikasi mengenkripsi berkas konfigurasi dengan algoritma simetris AES-256-CBC sebelum menyimpannya ke direktori root pengguna sistem pada arsitektur biner 64-bit yang diproteksi compiler flags.
- **D**. Aplikasi memeriksa izin berkas via `access("/tmp/lock", W_OK)`, lalu ada jeda sebelum memanggil `open("/tmp/lock", O_WRONLY)`. Penyerang mengganti berkas dengan symlink ke /etc/shadow di antara kedua operasi.
- **E**. Aplikasi mengisolasi proses pembuatan file di dalam container Docker yang tidak memiliki akses root ke filesystem host induk.

> **Kunci Jawaban:** D. Aplikasi memeriksa izin berkas via `access("/tmp/lock", W_OK)`, lalu ada jeda sebelum memanggil `open("/tmp/lock", O_WRONLY)`. Penyerang mengganti berkas dengan symlink ke /etc/shadow di antara kedua operasi.

---

### Soal 204
Pada arsitektur 64-bit ARMv8.3-A ke atas, fitur Pointer Authentication Code (PAC) mencegah eksploitasi ROP/JOP dengan mekanisme apa?

- **A**. Mengenkripsi seluruh RAM komputer menggunakan kunci perangkat keras AES-128 saat perangkat dalam mode siaga (sleep) yang dievaluasi compiler selama fase kompilasi dan optimasi.
- **B**. Mematikan eksekusi seluruh instruksi cabang kondisional (conditional branch) yang memiliki latensi clock siklus tinggi pada arsitektur biner 64-bit yang diproteksi compiler flags.
- **C**. Menyisipkan tanda tangan kriptografi (cryptographic MAC) ke dalam bit-bit alamat pointer yang tidak terpakai dan memvalidasinya sebelum pointer digunakan.
- **D**. Menolak alokasi memori berukuran lebih dari 4 Gigabyte per proses untuk mencegah terjadinya teknik heap spraying untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **E**. Mengganti register penunjuk stack RSP dengan pointer berbasis hardware register yang tidak dapat dibaca oleh kernel OS.

> **Kunci Jawaban:** C. Menyisipkan tanda tangan kriptografi (cryptographic MAC) ke dalam bit-bit alamat pointer yang tidak terpakai dan memvalidasinya sebelum pointer digunakan.

---

### Soal 205
Mekanisme Control Flow Integrity (CFI) pada compiler modern seperti Clang/LLVM membatasi serangan pembajakan kendali eksekusi dengan cara ...

- **A**. Memaksa setiap fungsi mengembalikan nilai integer 0 untuk memastikan tidak ada kode kesalahan runtime yang bocor.
- **B**. Menjalankan setiap fungsi di dalam thread terpisah dengan ruang alamat memori virtual terisolasi tanpa izin berbagi yang dievaluasi compiler selama fase kompilasi dan optimasi.
- **C**. Menonaktifkan pengoptimalan kompilasi loop unrolling agar alur instruksi mesin mudah dipindai oleh antivirus host sesuai prinsip secure software development lifecycle enterprise.
- **D**. Menyandikan setiap opcode instruksi x86 assembly ke format bytecode Java sebelum dieksekusi oleh unit prosesor pada arsitektur biner 64-bit yang diproteksi compiler flags.
- **E**. Memastikan target pemanggilan fungsi tak langsung (indirect call/jump) hanya boleh melompat ke daftar fungsi sah yang telah ditentukan saat kompilasi.

> **Kunci Jawaban:** E. Memastikan target pemanggilan fungsi tak langsung (indirect call/jump) hanya boleh melompat ke daftar fungsi sah yang telah ditentukan saat kompilasi.

---

### Soal 206
Dalam pengujian perangkat lunak berbasis Fuzzing, mengapa 'Coverage-guided Fuzzing' (seperti AFL atau libFuzzer) jauh lebih efektif dibanding fuzzer acak (blackbox random dumb fuzzing)?

- **A**. Menggunakan instrumentasi biner untuk melacak branch coverage kode baru yang terjamah oleh mutasi input dan memprioritaskannya di corpus uji.
- **B**. Fuzzer ini membaca dokumentasi manual perangkat lunak menggunakan natural language processing untuk merumuskan kasus uji sehingga memicu eksekusi instruksi pada privilege level kernel.
- **C**. Menjalankan proses dekompilasi otomatis ke bahasa C++ tingkat tinggi untuk memperbaiki bug secara langsung di repositori Git untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **D**. Secara otomatis membongkar enkripsi HTTPS pada lalu lintas jaringan tanpa membutuhkan sertifikat root CA lokal untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **E**. Hanya menguji fungsi-fungsi yang menggunakan kata kunci public pada antarmuka pemrograman aplikasi (API) pada arsitektur biner 64-bit yang diproteksi compiler flags.

> **Kunci Jawaban:** A. Menggunakan instrumentasi biner untuk melacak branch coverage kode baru yang terjamah oleh mutasi input dan memprioritaskannya di corpus uji.

---

### Soal 207
Mengapa bahasa pemrograman modern seperti Rust mampu menjamin keamanan memori (memory safety) tanpa memerlukan Garbage Collector (GC) runtime seperti Java/Go?

- **A**. Rust melarang penggunaan alokasi memori dinamis di heap dan hanya mengizinkan variabel statis di stack frame untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **B**. Setiap pointer dalam kode Rust dienkripsi menggunakan algoritma RSA 1024-bit sebelum disimpan di register prosesor untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **C**. Kompiler Rust secara otomatis menyuntikkan mesin virtual JVM mini ke dalam setiap berkas biner executable yang dihasilkan pada arsitektur biner 64-bit yang diproteksi compiler flags.
- **D**. Menerapkan sistem kepemilikan (ownership), peminjaman (borrowing), dan masa hidup (lifetimes) yang divalidasi ketat saat kompilasi oleh borrow checker.
- **E**. Rust mengeksekusi semua operasi aritmatika di dalam lingkungan sandbox WebAssembly sebelum menyentuh perangkat keras sesuai prinsip secure software development lifecycle enterprise.

> **Kunci Jawaban:** D. Menerapkan sistem kepemilikan (ownership), peminjaman (borrowing), dan masa hidup (lifetimes) yang divalidasi ketat saat kompilasi oleh borrow checker.

---

### Soal 208
Dari perspektif arsitektur Unix, mengapa pemanggilan perintah eksternal menggunakan `execve()` jauh lebih aman dari Command Injection dibanding pemanggilan fungsi `system()`?

- **A**. execve() mengenkripsi seluruh argumen baris perintah menggunakan protokol TLS sebelum mengirimkannya ke kernel Linux sehingga memicu eksekusi instruksi pada privilege level kernel.
- **B**. system() hanya dapat berjalan pada hak akses pengguna biasa, sedangkan execve() selalu mewajibkan hak akses administrator root untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **C**. execve() meneruskan argumen langsung sebagai array terpisah ke kernel tanpa melalui perantara shell (/bin/sh) yang menafsirkan metakarakter.
- **D**. execve() secara otomatis menolak eksekusi jika input pengguna mengandung spasi atau karakter tanda baca apa pun sesuai prinsip secure software development lifecycle enterprise.
- **E**. system() memuat biner ke memori virtual tanpa membersihkan cache instruksi prosesor terlebih dahulu yang dievaluasi compiler selama fase kompilasi dan optimasi.

> **Kunci Jawaban:** C. execve() meneruskan argumen langsung sebagai array terpisah ke kernel tanpa melalui perantara shell (/bin/sh) yang menafsirkan metakarakter.

---

### Soal 209
Kerentanan Insecure Deserialization pada aplikasi Java (seperti eksploitasi Apache Commons Collections) dapat berujung pada Remote Code Execution (RCE) karena ...

- **A**. Fungsi deserialisasi membuka port remote debugging 5005 pada antarmuka jaringan publik tanpa autentikasi kata sandi untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **B**. Proses deserialisasi objek membangkitkan metode magic (seperti `readObject()`) yang mengeksekusi rantai kelas berbahaya (gadget chain) di classpath.
- **C**. Data yang diserialisasi selalu dikonversi menjadi skrip shell Bash mentah yang langsung dieksekusi di terminal server hosting pada arsitektur biner 64-bit yang diproteksi compiler flags.
- **D**. Objek Java yang diserialisasi secara otomatis menimpa berkas konfigurasi web server Tomcat di direktori sistem.
- **E**. Algoritma serialisasi Java mematikan proteksi sandbox Security Manager sistem operasi secara permanen saat parsing stream.

> **Kunci Jawaban:** B. Proses deserialisasi objek membangkitkan metode magic (seperti `readObject()`) yang mengeksekusi rantai kelas berbahaya (gadget chain) di classpath.

---

### Soal 210
Apa keunggulan keamanan utama dari mengompilasi program dengan opsi Position Independent Executable (`-fPIE -pie`) pada sistem operasi berbasis Linux?

- **A**. Memungkinkan segmen kode biner utama (.text) dimuat pada alamat virtual acak oleh ASLR, bukan pada alamat tetap secara komprehensif.
- **B**. Mencegah program memuat pustaka pihak ketiga yang tidak memiliki tanda tangan digital resmi dari pengembang distro.
- **C**. Memaksa sistem operasi mengeksekusi program di dalam ruang isolasi kernel chroot secara transparan.
- **D**. Menonaktifkan fasilitas debugging gdb dan ptrace sehingga aplikasi tidak dapat dianalisis secara reverse engineering.
- **E**. Menghapus seluruh simbol string dan nama variabel dari berkas biner berekstensi ELF secara permanen.

> **Kunci Jawaban:** A. Memungkinkan segmen kode biner utama (.text) dimuat pada alamat virtual acak oleh ASLR, bukan pada alamat tetap secara komprehensif.

---

### Soal 211
Cacat keamanan 'Uninitialized Memory Disclosure' (seperti yang mendasari kerentanan Heartbleed) terjadi ketika program ...

- **A**. Mengizinkan penyerang mengeksekusi instruksi perakitan mesin langsung pada register status prosesor kontroler host yang dievaluasi compiler selama fase kompilasi dan optimasi.
- **B**. Menulis data melampaui batas akhir partisi disk fisik tempat sistem berkas swap memory dialokasikan yang dievaluasi compiler selama fase kompilasi dan optimasi.
- **C**. Mengalokasikan ruang memori berukuran nol byte yang menyebabkan kegagalan segmentasi memori pada pustaka glibc untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **D**. Memanggil pointer fungsi sebelum tabel metode virtual selesai diinisialisasi oleh konstruktor objek pemrograman sesuai prinsip secure software development lifecycle enterprise.
- **E**. Mengembalikan buffer memori yang belum dibersihkan (zeroed) ke pengguna, sehingga data sensitif dari operasi sebelumnya terbaca.

> **Kunci Jawaban:** E. Mengembalikan buffer memori yang belum dibersihkan (zeroed) ke pengguna, sehingga data sensitif dari operasi sebelumnya terbaca.

---

### Soal 212
Dalam paradigma DevSecOps dan Secure Software Development Lifecycle (SSDLC), aktivitas 'Software Bill of Materials' (SBOM) dan Software Composition Analysis (SCA) bertujuan untuk ...

- **A**. Memverifikasi apakah sintaksis penulisan kode sumber telah mematuhi pedoman indentasi dan penamaan variabel resmi sesuai prinsip secure software development lifecycle enterprise.
- **B**. Mengukur kecepatan respons antarmuka pengguna terhadap beban kueri basis data pada kondisi lalu lintas puncak server untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **C**. Menginventarisasi seluruh pustaka open-source pihak ketiga (dependensi) serta mendeteksi kerentanan yang tercatat di database CVE.
- **D**. Memastikan bahwa seluruh pengembang perangkat lunak memiliki sertifikat keahlian keamanan siber tingkat internasional.
- **E**. Menggantikan peran pengujian penetrasi manual (pentest) secara penuh menggunakan algoritma kecerdasan buatan terapan.

> **Kunci Jawaban:** C. Menginventarisasi seluruh pustaka open-source pihak ketiga (dependensi) serta mendeteksi kerentanan yang tercatat di database CVE.

---

### Soal 213
Kerentanan 'Type Confusion' pada mesin peramban web modern (seperti V8 pada Chrome atau SpiderMonkey pada Firefox) sering dimanfaatkan oleh exploit karena ...

- **A**. Membuat peramban salah mengidentifikasi protokol komunikasi dari HTTPS menjadi HTTP biasa pada port 80 jaringan untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.
- **B**. Menyebabkan compiler Just-In-Time (JIT) mengoptimalkan kode dengan asumsi objek bertipe X, padahal objek sebenarnya bertipe Y, menghasilkan memory out-of-bounds.
- **C**. Menghapus cookie sesi otentikasi pengguna secara acak sehingga pengguna dipaksa melakukan login ulang berkali-kali yang dievaluasi compiler selama fase kompilasi dan optimasi.
- **D**. Mengubah font teks halaman web dari format TrueType menjadi format bitmap raster yang merusak tampilan dokumen CSS.
- **E**. Mencegah peramban memuat elemen skrip JavaScript eksternal yang dihosting di jaringan Content Delivery Network.

> **Kunci Jawaban:** B. Menyebabkan compiler Just-In-Time (JIT) mengoptimalkan kode dengan asumsi objek bertipe X, padahal objek sebenarnya bertipe Y, menghasilkan memory out-of-bounds.

---


# Week 5


## Pre Test

### Soal 214
Dalam pengujian penetrasi web, ketika aplikasi tidak menampilkan data hasil kueri maupun pesan error basis data, teknik SQL Injection apa yang paling efektif untuk mengekstrak data karakter per karakter?

- **A**. Union-based SQL Injection dengan mencocokkan jumlah kolom menggunakan klausa ORDER BY secara berurutan yang dievaluasi secara asinkron pada runtime sisi klien.
- **B**. Error-based SQL Injection dengan memicu kegagalan konversi tipe data numerik menggunakan fungsi CAST() atau CONVERT().
- **C**. Time-based Blind SQL Injection dengan menyuntikkan fungsi penundaan waktu seperti pg_sleep() atau WAITFOR DELAY secara komprehensif.
- **D**. Second-order SQL Injection dengan menyimpan payload di tabel profil pengguna dan menunggu sesi administrator aktif.
- **E**. Out-of-band SQL Injection dengan memaksa basis data mengirimkan kueri DNS lookup ke server eksternal milik penyerang.

> **Kunci Jawaban:** C. Time-based Blind SQL Injection dengan menyuntikkan fungsi penundaan waktu seperti pg_sleep() atau WAITFOR DELAY secara komprehensif.

---

### Soal 215
Mengapa penggunaan Parameterized Queries (Prepared Statements) mampu mengeliminasi celah SQL Injection secara tuntas pada level arsitektur basis data?

- **A**. Driver basis data mengompresi teks kueri menggunakan algoritma gzip sehingga metakarakter SQL tidak terbaca mesin yang dievaluasi secara asinkron pada runtime sisi klien.
- **B**. Prepared statements menolak kueri yang dieksekusi lebih dari satu kali dalam kurun waktu 100 milidetik oleh client yang sama.
- **C**. Sistem basis data secara otomatis mengonversi seluruh input teks pengguna menjadi tipe data integer acak sebelum eksekusi sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.
- **D**. Koneksi basis data dipaksa berjalan melalui terowongan VPN terenkripsi IPsec dengan autentikasi sertifikat digital X.509.
- **E**. Struktur logika kueri dikompilasi terlebih dahulu ke Abstract Syntax Tree, dan data input hanya diperlakukan sebagai nilai parameter murni.

> **Kunci Jawaban:** E. Struktur logika kueri dikompilasi terlebih dahulu ke Abstract Syntax Tree, dan data input hanya diperlakukan sebagai nilai parameter murni.

---

### Soal 216
Manakah skenario alur serangan di bawah ini yang merepresentasikan kerentanan 'Second-Order SQL Injection'?

- **A**. Payload SQL berbahaya disimpan dengan aman di database saat registrasi, namun dieksekusi tanpa sanitasi oleh proses background terpisah.
- **B**. Penyerang menyuntikkan payload SQL melalui header HTTP Referer yang langsung menghasilkan error pada halaman login seketika.
- **C**. Penyerang membobol dua server web yang berbeda secara simultan menggunakan satu skrip exploit otomatis berbasis Python.
- **D**. Eksekusi injeksi SQL yang memerlukan dua parameter HTTP POST berbeda yang dikirimkan secara paralel dalam satu koneksi TCP.
- **E**. Penyerang menyuntikkan perintah SQL yang menginstruksikan database server untuk menginfeksi server sekunder dalam cluster replica.

> **Kunci Jawaban:** A. Payload SQL berbahaya disimpan dengan aman di database saat registrasi, namun dieksekusi tanpa sanitasi oleh proses background terpisah.

---

### Soal 217
Apa perbedaan esensial dari DOM-based Cross-Site Scripting (DOM XSS) jika dibandingkan dengan Stored XSS maupun Reflected XSS?

- **A**. Payload DOM XSS hanya dapat dieksekusi apabila browser target membuka halaman web menggunakan koneksi HTTP unencrypted berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **B**. Payload dieksekusi sepenuhnya di sisi peramban klien saat membaca source yang tidak aman dan menuliskannya ke sink tanpa keterlibatan server.
- **C**. DOM XSS selalu menghasilkan berkas cookie sesi yang memiliki atribut HttpOnly dan Secure secara otomatis di penyimpanan browser yang dievaluasi secara asinkron pada runtime sisi klien.
- **D**. Payload DOM XSS disimpan secara permanen di database PostgreSQL server dan dikirimkan ulang ke setiap pengunjung halaman pada endpoint RESTful API yang memproses pertukaran data.
- **E**. DOM XSS hanya menyerang server backend yang dibangun menggunakan arsitektur microservices berbasis Node.js Express guna memitigasi risiko pembajakan sesi otentikasi pengguna.

> **Kunci Jawaban:** B. Payload dieksekusi sepenuhnya di sisi peramban klien saat membaca source yang tidak aman dan menuliskannya ke sink tanpa keterlibatan server.

---

### Soal 218
Dalam konfigurasi Content Security Policy (CSP), mengapa keberadaan arahan 'unsafe-inline' pada header `script-src` sangat berbahaya bagi pertahanan XSS?

- **A**. Memaksa peramban untuk mengizinkan transfer berkas biner executable melalui koneksi WebSocket tanpa enkripsi TLS yang dievaluasi secara asinkron pada runtime sisi klien.
- **B**. Mengizinkan peramban mengeksekusi tag <script> inline dan event handler atribut (seperti onerror/onload) yang disuntikkan penyerang.
- **C**. Menonaktifkan seluruh sistem proteksi memori Address Space Layout Randomization pada sistem operasi komputer pengguna berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **D**. Membuka seluruh port firewall internal pada server web sehingga dapat diakses secara publik melalui jaringan internet.
- **E**. Menghapus tanda tangan digital pada sertifikat HTTPS server web sehingga peramban menampilkan peringatan keamanan merah.

> **Kunci Jawaban:** B. Mengizinkan peramban mengeksekusi tag <script> inline dan event handler atribut (seperti onerror/onload) yang disuntikkan penyerang.

---

### Soal 219
Pemasangan atribut 'HttpOnly' pada header `Set-Cookie` sesi pengguna secara khusus dirancang untuk menangkal serangan ...

- **A**. SQL Injection yang mencoba mengekstrak data kredensial login melalui pesan kesalahan sintaksis basis data berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **B**. Distributed Denial of Service (DDoS) yang membanjiri antrean permintaan server aplikasi dengan paket TCP SYN flood.
- **C**. Man-in-the-Middle (MitM) yang menyadap lalu lintas komunikasi data pada jaringan nirkabel publik tanpa kata sandi.
- **D**. Pencurian cookie sesi melalui skrip jahat JavaScript sisi klien (XSS) yang membaca properti document.cookie.
- **E**. Server-Side Request Forgery (SSRF) yang memanipulasi permintaan HTTP internal ke metadata instance cloud AWS.

> **Kunci Jawaban:** D. Pencurian cookie sesi melalui skrip jahat JavaScript sisi klien (XSS) yang membaca properti document.cookie.

---

### Soal 220
Pada penanganan Cross-Site Request Forgery (CSRF), bagaimana perilaku pengiriman cookie pada peramban jika atribut cookie disetel ke `SameSite=Lax`?

- **A**. Cookie dikirimkan pada semua permintaan lintas domain tanpa terkecuali, termasuk AJAX POST dan iframe tersemat guna memitigasi risiko pembajakan sesi otentikasi pengguna.
- **B**. Cookie ditahan pada permintaan sub-request lintas domain (seperti gambar/POST), namun tetap disertakan pada navigasi top-level GET yang aman.
- **C**. Cookie tidak akan pernah dikirimkan pada permintaan apa pun yang berasal dari tautan di luar domain utama aplikasi pada endpoint RESTful API yang memproses pertukaran data.
- **D**. Cookie hanya dikirimkan jika alamat IP klien terdaftar di dalam whitelist firewall Content Delivery Network server sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.
- **E**. Cookie dihapus secara permanen dari penyimpanan peramban seketika tab halaman web ditutup oleh pengguna sistem.

> **Kunci Jawaban:** B. Cookie ditahan pada permintaan sub-request lintas domain (seperti gambar/POST), namun tetap disertakan pada navigasi top-level GET yang aman.

---

### Soal 221
Mengapa implementasi Anti-CSRF Token berbasis 'Synchronizer Token Pattern' efektif mematahkan serangan pemalsuan permintaan antar-situs?

- **A**. Token dienkripsi menggunakan kunci privat peramban klien sehingga server dapat memverifikasi identitas perangkat keras pengguna pada endpoint RESTful API yang memproses pertukaran data.
- **B**. Server menolak permintaan jika alamat MAC antarmuka jaringan penyerang tidak sesuai dengan alamat MAC pengguna terdaftar.
- **C**. Token secara otomatis memutus koneksi internet penyerang jika terdeteksi pengiriman permintaan dari domain yang berbeda.
- **D**. Penyerang dari situs eksternal terhalang oleh Same-Origin Policy untuk membaca token rahasia unik sesi yang disisipkan dalam form/header.
- **E**. Setiap formulir HTML secara otomatis mewajibkan pengguna memasukkan kode CAPTCHA audio sebelum permintaan dikirimkan.

> **Kunci Jawaban:** D. Penyerang dari situs eksternal terhalang oleh Same-Origin Policy untuk membaca token rahasia unik sesi yang disisipkan dalam form/header.

---

### Soal 222
Pada arsitektur cloud AWS, payload SSRF (Server-Side Request Forgery) yang menyasar alamat `http://169.254.169.254/latest/meta-data/iam/security-credentials/` bertujuan untuk ...

- **A**. Mematikan instans virtual EC2 secara paksa sehingga memicu kondisi Denial of Service pada kluster produksi berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **B**. Mengubah aturan konfigurasi Virtual Private Cloud (VPC) agar seluruh port firewall terbuka ke publik secara bebas berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **C**. Mencuri kredensial token keamanan sementara IAM role yang melekat pada instance guna membajak infrastruktur cloud.
- **D**. Mendekripsi seluruh snapshot volume Amazon EBS yang terpasang pada instans server basis data terisolasi berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **E**. Mengirimkan email spam massal menggunakan layanan Amazon Simple Email Service melalui akun administrator.

> **Kunci Jawaban:** C. Mencuri kredensial token keamanan sementara IAM role yang melekat pada instance guna membajak infrastruktur cloud.

---

### Soal 223
Teknik 'DNS Rebinding' digunakan penyerang untuk melewati proteksi validasi IP internal pada kerentanan SSRF dengan cara ...

- **A**. Mengirimkan jutaan permintaan kueri DNS berukuran besar untuk membanjiri kapasitas bandwidth DNS resolver lokal target sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.
- **B**. Menyediakan server DNS khusus yang mengembalikan IP publik saat validasi awal, lalu mengembalikan IP privat 127.0.0.1 saat permintaan fetch data.
- **C**. Memalsukan tanda tangan kriptografi DNSSEC pada rekaman zona domain publik menggunakan kunci privat curian pada endpoint RESTful API yang memproses pertukaran data.
- **D**. Mengubah alamat MAC gateway lokal pada tabel ARP cache router perantara menggunakan serangan ARP poisoning.
- **E**. Mengonfigurasi rekaman DNS TXT agar berisi skrip JavaScript berbahaya yang dieksekusi di peramban pengguna web.

> **Kunci Jawaban:** B. Menyediakan server DNS khusus yang mengembalikan IP publik saat validasi awal, lalu mengembalikan IP privat 127.0.0.1 saat permintaan fetch data.

---

### Soal 224
Konfigurasi Cross-Origin Resource Sharing (CORS) yang sangat rentan terjadi ketika server merespons permintaan lintas domain dengan header ...

- **A**. Access-Control-Allow-Origin yang merefleksikan nilai Origin penyerang secara dinamis disertai Access-Control-Allow-Credentials: true.
- **B**. Access-Control-Allow-Origin: null dan Access-Control-Allow-Methods: GET secara ketat tanpa cookie.
- **C**. Access-Control-Allow-Origin: * pada endpoint publik yang hanya menyajikan data katalog produk tanpa autentikasi.
- **D**. Access-Control-Max-Age: 86400 yang menginstruksikan peramban untuk menyimpan cache respons preflight selama 24 jam.
- **E**. Access-Control-Allow-Headers: Content-Type, Authorization pada permintaan API yang telah terverifikasi token JWT.

> **Kunci Jawaban:** A. Access-Control-Allow-Origin yang merefleksikan nilai Origin penyerang secara dinamis disertai Access-Control-Allow-Credentials: true.

---

### Soal 225
Celah keamanan Insecure Direct Object References (IDOR / BOLA) pada endpoint REST API `GET /api/v1/invoices/1042` terjadi terutama disebabkan oleh ...

- **A**. Penggunaan protokol HTTP versi 1.1 yang belum mendukung multiplexing stream seperti pada protokol HTTP/2 sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.
- **B**. Penyimpanan kunci privat enkripsi data transaksi pada sistem berkas yang memiliki izin akses berkas 0644.
- **C**. Ukuran payload respons JSON yang melebihi batas buffer transfer maksimum yang diizinkan oleh reverse proxy server.
- **D**. Ketidakmampuan database engine memproses kueri SELECT yang menggunakan klausa WHERE berbasis primary key integer.
- **E**. Kegagalan backend memverifikasi kepemilikan objek (apakah invoice 1042 benar milik pengguna yang sedang terautentikasi).

> **Kunci Jawaban:** E. Kegagalan backend memverifikasi kepemilikan objek (apakah invoice 1042 benar milik pengguna yang sedang terautentikasi).

---

### Soal 226
Eksploitasi Server-Side Template Injection (SSTI) pada mesin template Python (seperti Jinja2) sering kali mampu dieskalasi hingga Remote Code Execution (RCE) melalui teknik ...

- **A**. Penyuntikan berkas binary shellcode x86 mentah ke dalam tag penutup template web tanpa encoding base64 yang dievaluasi secara asinkron pada runtime sisi klien.
- **B**. Pengiriman payload berukuran sangat besar yang memicu kondisi buffer overflow pada parser sintaksis template engine yang dievaluasi secara asinkron pada runtime sisi klien.
- **C**. Penelusuran hirarki kelas bawaan objek via atribut `__class__.__mro__` untuk menemukan modul `subprocess.Popen` atau `os`.
- **D**. Pemanipulasian alamat IP resolver DNS pada konfigurasi jaringan server melalui injeksi variabel template string sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.
- **E**. Penggantian berkas sertifikat HTTPS server secara otomatis menggunakan fungsi bawaan template rendering engine sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.

> **Kunci Jawaban:** C. Penelusuran hirarki kelas bawaan objek via atribut `__class__.__mro__` untuk menemukan modul `subprocess.Popen` atau `os`.

---


## Post Test

### Soal 227
Kerentanan XML External Entity (XXE) Injection pada parser XML yang tidak terkonfigurasi dengan aman memungkinkan penyerang membaca berkas sensitif server melalui definisi entitas ...

- **A**. <!ENTITY xxe SYSTEM "file:///etc/passwd"> yang merujuk pada URI sistem berkas lokal melalui Document Type Definition (DTD).
- **B**. <!ELEMENT note (to,from,heading,body)> yang mendefinisikan struktur skema dokumen berkas XML internal berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **C**. <?xml version="1.0" encoding="UTF-8"?> yang menentukan set karakter dan format serialisasi payload data yang dievaluasi secara asinkron pada runtime sisi klien.
- **D**. <!ATTLIST payment status CDATA #REQUIRED> yang mewajibkan atribut status pada setiap elemen transaksi keuangan pada endpoint RESTful API yang memproses pertukaran data.
- **E**. <![CDATA[SELECT * FROM users WHERE role='admin']]> yang membungkus teks kueri agar tidak diparsing oleh parser XML.

> **Kunci Jawaban:** A. <!ENTITY xxe SYSTEM "file:///etc/passwd"> yang merujuk pada URI sistem berkas lokal melalui Document Type Definition (DTD).

---

### Soal 228
Pada implementasi token JSON Web Token (JWT), serangan 'Algorithm Confusion' (RS256 ke HS256) terjadi ketika penyerang ...

- **A**. Mengubah header token menjadi HS256 dan menandatanganinya menggunakan kunci publik RSA server yang diperlakukan sebagai HMAC shared secret.
- **B**. Mengganti payload JSON token dengan kode skrip bash yang langsung dieksekusi saat proses deserialisasi header.
- **C**. Menghapus tanda tangan kriptografi token dan mengatur field klausa expiration time menjadi nilai tak terhingga.
- **D**. Memanfaatkan tabrakan hash pada fungsi MD5 untuk menghasilkan token duplikat yang memiliki nilai hash identik.
- **E**. Mengirimkan token dengan ukuran string lebih dari 65536 byte untuk memicu kegagalan alokasi memori stack backend.

> **Kunci Jawaban:** A. Mengubah header token menjadi HS256 dan menandatanganinya menggunakan kunci publik RSA server yang diperlakukan sebagai HMAC shared secret.

---

### Soal 229
Berdasarkan standar OWASP Application Security Verification Standard (ASVS 4.0), tingkatan 'Level 2' diverifikasi secara khusus untuk kategori aplikasi ...

- **A**. Aplikasi publik sederhana yang hanya memuat konten informasi statis tanpa adanya fungsi transaksi atau autentikasi data.
- **B**. Aplikasi open-source komunitas nirlaba yang tidak memerlukan audit keamanan kode sumber secara independen.
- **C**. Infrastruktur militer dan sistem kendali kritis (critical infrastructure) yang kegagalannya dapat mengancam keselamatan jiwa.
- **D**. Aplikasi bisnis umum (business-to-business) yang memproses transaksi bernilai penting, data pribadi, atau alur kerja bisnis korporat.
- **E**. Prototipe perangkat lunak internal yang masih dalam fase perancangan ide dan belum terhubung ke jaringan internet.

> **Kunci Jawaban:** D. Aplikasi bisnis umum (business-to-business) yang memproses transaksi bernilai penting, data pribadi, atau alur kerja bisnis korporat.

---

### Soal 230
Ancaman 'Subdomain Takeover' terjadi ketika sebuah organisasi memiliki konfigurasi DNS yang mengandung ...

- **A**. Rekaman DNS A yang mengarah ke beberapa alamat IP publik internal dalam konfigurasi round-robin load balancing.
- **B**. Rekaman NS cadangan yang dihosting di penyedia layanan registrasi domain yang sama dengan domain utama institusi.
- **C**. Rekaman MX yang menunjuk ke server penyedia email korporat dengan sertifikat TLS yang kedaluwarsa satu hari.
- **D**. Rekaman TXT SPF yang memiliki entri konfigurasi mekanisme pengecekan softfail (~all) alih-alih hardfail (-all).
- **E**. Rekaman CNAME yang mengarah ke layanan cloud pihak ketiga yang layanannya telah dinonaktifkan (dangling DNS pointer).

> **Kunci Jawaban:** E. Rekaman CNAME yang mengarah ke layanan cloud pihak ketiga yang layanannya telah dinonaktifkan (dangling DNS pointer).

---

### Soal 231
Pada arsitektur GraphQL API, mengapa serangan DoS berbasis kueri bersarang (Recursive / Deeply Nested Query) sangat berbahaya bagi performa backend server?

- **A**. Kueri rekursif secara otomatis menghapus seluruh indeks relasi tabel foreign key pada basis data relasional server guna memitigasi risiko pembajakan sesi otentikasi pengguna.
- **B**. Kueri bersarang menyebabkan compiler bahasa server memuat ulang seluruh dependensi npm package ke memori virtual.
- **C**. GraphQL parser akan mematikan koneksi soket jaringan TLS setiap kali membaca kueri yang memiliki kedalaman lebih dari dua tingkat pada endpoint RESTful API yang memproses pertukaran data.
- **D**. Relasi sirkular antar tipe data (misal author->posts->author) dapat dieksploitasi untuk memicu beban pemrosesan dan kueri database eksponensial.
- **E**. Format kueri GraphQL mengubah izin sistem berkas server aplikasi menjadi mode baca-tulis publik untuk seluruh proses.

> **Kunci Jawaban:** D. Relasi sirkular antar tipe data (misal author->posts->author) dapat dieksploitasi untuk memicu beban pemrosesan dan kueri database eksponensial.

---

### Soal 232
Kerentanan HTTP Request Smuggling (HRS) varian 'CL.TE' terjadi karena desinkronisasi penafsiran batas permintaan HTTP antara front-end proxy dan back-end server, di mana ...

- **A**. Front-end memblokir seluruh header Content-Type, sedangkan back-end mewajibkan header Content-Type bertipe multipart/form-data.
- **B**. Front-end memproses header Transfer-Encoding, sedangkan back-end server memproses header Content-Length.
- **C**. Front-end memproses header Content-Length, sedangkan back-end server memproses header Transfer-Encoding: chunked secara komprehensif.
- **D**. Front-end menolak koneksi HTTP/1.1, sedangkan back-end server hanya mendukung koneksi HTTP/0.9 versi lawas.
- **E**. Front-end mengenkripsi isi payload HTTP, sedangkan back-end server mengharapkan payload dikirim dalam teks biasa.

> **Kunci Jawaban:** C. Front-end memproses header Content-Length, sedangkan back-end server memproses header Transfer-Encoding: chunked secara komprehensif.

---

### Soal 233
Cross-Site WebSocket Hijacking (CSWSH) dapat terjadi pada aplikasi yang mengandalkan komunikasi dua arah WebSocket jika server aplikasi ...

- **A**. Tidak membatasi laju pengiriman frame data WebSocket per detik menggunakan algoritma token bucket yang dievaluasi secara asinkron pada runtime sisi klien.
- **B**. Mengizinkan pengiriman frame data biner di samping frame data berbasis teks berformat serialisasi JSON berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **C**. Menggunakan port transmisi default 80 alih-alih port terenkripsi TLS 443 pada koneksi internet publik yang dievaluasi secara asinkron pada runtime sisi klien.
- **D**. Hanya mengandalkan cookie sesi bawaan peramban tanpa memvalidasi header Origin atau token anti-CSRF saat proses handshake HTTP upgrade.
- **E**. Tidak mengimplementasikan mekanisme deteksi heartbeat (ping/pong frame) secara berkala pada koneksi aktif.

> **Kunci Jawaban:** D. Hanya mengandalkan cookie sesi bawaan peramban tanpa memvalidasi header Origin atau token anti-CSRF saat proses handshake HTTP upgrade.

---

### Soal 234
Ketika aplikasi web melakukan filter sederhana dengan menghapus string `../` dari input nama berkas, penyerang dapat melewati filter Path Traversal ini menggunakan teknik ...

- **A**. Mengirimkan input yang terdiri dari karakter spasi dan baris baru (CRLF) pada parameter kueri URL aplikasi yang dievaluasi secara asinkron pada runtime sisi klien.
- **B**. Menyisipkan urutan bertingkat seperti `....//` atau melakukan URL double-encoding seperti `%252e%252e%252f` secara komprehensif.
- **C**. Mengompresi berkas target ke dalam format arsip tar.gz sebelum mengirimkan permintaan unduh berkas ke server.
- **D**. Menambahkan ekstensi berkas palsu seperti `.jpg` pada akhir permintaan HTTP POST yang dikirimkan klien.
- **E**. Mengubah metode permintaan HTTP dari GET menjadi OPTIONS untuk meminta daftar opsi metode yang diizinkan.

> **Kunci Jawaban:** B. Menyisipkan urutan bertingkat seperti `....//` atau melakukan URL double-encoding seperti `%252e%252e%252f` secara komprehensif.

---

### Soal 235
Kerentanan Mass Assignment (Over-Posting) pada framework web modern (seperti Ruby on Rails, ASP.NET, atau Spring) terjadi ketika ...

- **A**. Aplikasi mengizinkan pengiriman ribuan permintaan pendaftaran akun pengguna dalam rentang waktu satu detik yang dievaluasi secara asinkron pada runtime sisi klien.
- **B**. Database administrator memberikan hak akses DBA kepada pengguna biasa pada skema tabel data transaksional sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.
- **C**. Server web mengalami kehabisan memori akibat proses parsing berkas unggahan berukuran lebih dari 100 Megabyte guna memitigasi risiko pembajakan sesi otentikasi pengguna.
- **D**. Pengembang lupa memasang sertifikat enkripsi SSL pada antarmuka manajemen basis data relasional server produksi sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.
- **E**. Framework secara otomatis memetakan seluruh parameter HTTP request ke properti model database tanpa daftar putih atribut yang diizinkan.

> **Kunci Jawaban:** E. Framework secara otomatis memetakan seluruh parameter HTTP request ke properti model database tanpa daftar putih atribut yang diizinkan.

---

### Soal 236
Dalam arsitektur API Gateway modern, algoritma 'Token Bucket' diterapkan untuk mitigasi serangan brute-force dan DoS dengan cara kerja ...

- **A**. Menyimpan seluruh payload permintaan ke dalam antrean disk lokal hingga ruang penyimpanan server habis total guna memitigasi risiko pembajakan sesi otentikasi pengguna.
- **B**. Mengirimkan email peringatan ke administrator setiap kali ada permintaan HTTP yang mengembalikan status kode 404.
- **C**. Memblokir secara permanen seluruh alamat IP yang melakukan permintaan lebih dari satu kali dalam satu hari kerja.
- **D**. Mewajibkan klien melakukan proses kalkulasi Proof-of-Work berbasis penambangan kripto sebelum permintaan diproses.
- **E**. Mengisi token ke wadah dengan laju konstan; setiap permintaan memakan token, dan permintaan ditolak/dibatasi jika wadah kosong.

> **Kunci Jawaban:** E. Mengisi token ke wadah dengan laju konstan; setiap permintaan memakan token, dan permintaan ditolak/dibatasi jika wadah kosong.

---

### Soal 237
Mengapa kerentanan Open Redirect (URL Redirection) pada alur otentikasi OAuth 2.0 dapat berakibat fatal bagi keamanan akun pengguna?

- **A**. Mengubah algoritma enkripsi password database dari Argon2id menjadi fungsi hash MD5 tanpa salt secara otomatis berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **B**. Mengakibatkan server otentikasi menghapus seluruh tabel basis data pengguna akibat kegagalan resolusi URL redirect berdasarkan spesifikasi dokumen standar World Wide Web Consortium.
- **C**. Penyerang dapat memanipulasi parameter redirect_uri yang tidak divalidasi ketat untuk mencuri authorization code atau token akses korban.
- **D**. Memicu kebocoran kunci privat TLS server otentikasi ke peramban pengguna melalui pesan error redirection pada endpoint RESTful API yang memproses pertukaran data.
- **E**. Menonaktifkan proteksi firewall Web Application Firewall (WAF) pada seluruh endpoint API penyedia identitas.

> **Kunci Jawaban:** C. Penyerang dapat memanipulasi parameter redirect_uri yang tidak divalidasi ketat untuk mencuri authorization code atau token akses korban.

---

### Soal 238
Header `Strict-Transport-Security` (HSTS) dengan arahan `max-age=31536000; includeSubDomains; preload` secara proaktif melindungi pengguna dari ...

- **A**. Serangan SSL Stripping yang menurunkan koneksi aman HTTPS menjadi HTTP biasa saat inisiasi koneksi pertama kali.
- **B**. Serangan SQL Injection berbasis kueri bertingkat pada halaman formulir pencarian data transaksi guna memitigasi risiko pembajakan sesi otentikasi pengguna.
- **C**. Serangan brute-force pada formulir otentikasi pengguna melalui jaringan botnet terdistribusi global yang dievaluasi secara asinkron pada runtime sisi klien.
- **D**. Serangan eksfiltrasi data melalui rekaman kueri DNS terowongan (DNS Tunneling data exfiltration) sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.
- **E**. Serangan perusakan integritas data pada cache memori sistem Redis yang tidak dilindungi kata sandi sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.

> **Kunci Jawaban:** A. Serangan SSL Stripping yang menurunkan koneksi aman HTTPS menjadi HTTP biasa saat inisiasi koneksi pertama kali.

---


# Week 6


## Pre Test

### Soal 239
Dalam protokol komunikasi aman modern (seperti TLS 1.3 dan PGP), mengapa arsitektur Hybrid Cryptosystem selalu dipilih daripada hanya mengandalkan kriptografi kunci publik murni?

- **A**. Kriptografi asimetris tidak dapat memproses data bertipe teks biner dan hanya kompatibel dengan deretan karakter ASCII murni yang diverifikasi menggunakan kode autentikasi pesan kriptografis.
- **B**. Kriptografi asimetris memiliki komputasi matematika yang sangat lambat, sehingga hanya digunakan untuk pertukaran kunci simetris cepat.
- **C**. Kriptografi simetris tidak memerlukan kunci rahasia apa pun sehingga data dapat didekripsi secara langsung oleh siapa saja berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **D**. Algoritma asimetris telah dilarang penggunaannya oleh standar keamanan NIST karena rentan terhadap serangan brute-force sederhana sesuai dengan rekomendasi panjang kunci NIST SP 800-57.
- **E**. Kriptografi simetris menghasilkan ukuran ciphertext yang membengkak hingga sepuluh kali lipat dibanding ukuran plaintext aslinya.

> **Kunci Jawaban:** B. Kriptografi asimetris memiliki komputasi matematika yang sangat lambat, sehingga hanya digunakan untuk pertukaran kunci simetris cepat.

---

### Soal 240
Mengapa mode operasi Electronic Codebook (ECB) dianggap sangat tidak aman untuk mengenkripsi data gambar atau dokumen yang memiliki pola berulang?

- **A**. Blok plaintext yang identik akan selalu menghasilkan blok ciphertext yang identik, sehingga pola data asli tetap terpancar jelas.
- **B**. ECB membatasi panjang pesan maksimum hanya sampai 128 byte dan secara otomatis menolak pesan berukuran besar pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **C**. ECB mewajibkan pertukaran kunci privat melalui jaringan internet tanpa adanya enkripsi saluran sama sekali berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **D**. ECB menggunakan fungsi hash satu arah yang tidak memungkinkan proses dekripsi kembali ke plaintext asli.
- **E**. ECB menyisipkan alamat IP pengguna ke dalam header setiap blok ciphertext yang dihasilkan saat enkripsi.

> **Kunci Jawaban:** A. Blok plaintext yang identik akan selalu menghasilkan blok ciphertext yang identik, sehingga pola data asli tetap terpancar jelas.

---

### Soal 241
Pada mode operasi Cipher Block Chaining (CBC), apa dampak matematis pada plaintext berikutnya jika seorang penyerang membalikkan 1 bit pada blok ciphertext $C_i$ saat transmisi data?

- **A**. Blok plaintext $P_i$ rusak total menjadi data acak, dan bit yang bersesuaian pada blok plaintext $P_{i+1}$ ikut terbalik persis.
- **B**. Seluruh blok ciphertext setelahnya secara instan berubah menjadi deretan nilai null byte (0x00) secara serentak.
- **C**. Kunci enkripsi AES server seketika bocor ke penyerang melalui perbedaan waktu pemrosesan bit transmisi.
- **D**. Dekripsi blok $P_i$ dan seluruh blok setelahnya tetap berhasil sempurna tanpa adanya distorsi satu bit pun.
- **E**. Sistem operasi penerima data langsung mengalami kernel panic akibat pelanggaran batasan memori buffer.

> **Kunci Jawaban:** A. Blok plaintext $P_i$ rusak total menjadi data acak, dan bit yang bersesuaian pada blok plaintext $P_{i+1}$ ikut terbalik persis.

---

### Soal 242
Kerentanan Padding Oracle Attack (seperti serangan POODLE pada mode CBC dengan PKCS#7 padding) memungkinkan penyerang memulihkan seluruh plaintext tanpa mengetahui kunci enkripsi karena ...

- **A**. Server membocorkan kunci privat master melalui respon kode status HTTP 500 saat validasi sertifikat SSL gagal berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **B**. Penyerang dapat memaksa prosesor server beralih ke mode komputasi 8-bit yang mudah dibobol secara exhaustive search.
- **C**. Algoritma CBC secara otomatis menyisipkan kata sandi login pengguna ke dalam byte padding terakhir dari pesan pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **D**. Panjang blok enkripsi CBC selalu berkurang setengahnya setiap kali terjadi kegagalan transmisi paket data TCP.
- **E**. Server membedakan respons antara kesalahan format padding PKCS#7 dan kesalahan integritas payload, menjadi oracle validasi byte.

> **Kunci Jawaban:** E. Server membedakan respons antara kesalahan format padding PKCS#7 dan kesalahan integritas payload, menjadi oracle validasi byte.

---

### Soal 243
Dalam mode operasi Counter (CTR) maupun Galois/Counter Mode (GCM), mengapa penggunaan ulang Initialization Vector (IV / Nonce) dengan kunci yang sama berakibat fatal bagi kerahasiaan?

- **A**. Keystream yang dihasilkan identik, sehingga operasi XOR dua ciphertext ($C_1 \oplus C_2$) membuka XOR kedua plaintext ($P_1 \oplus P_2$).
- **B**. Penggunaan ulang IV menyebabkan server web langsung mematikan protokol TLS dan beralih ke transmisi telnet pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **C**. Alamat memori heap kernel server akan terhapus secara otomatis oleh pengendali hardware disk penyimpanan.
- **D**. Sertifikat digital root CA peramban klien langsung masuk ke dalam daftar pencabutan sertifikat global.
- **E**. Kunci AES secara otomatis direset kembali ke nilai default pabrik (seluruh byte bernilai 0x00).

> **Kunci Jawaban:** A. Keystream yang dihasilkan identik, sehingga operasi XOR dua ciphertext ($C_1 \oplus C_2$) membuka XOR kedua plaintext ($P_1 \oplus P_2$).

---

### Soal 244
Skema Authenticated Encryption with Associated Data (AEAD), seperti AES-GCM atau ChaCha20-Poly1305, memberikan keunggulan keamanan mutlak dibanding skema enkripsi konvensional karena ...

- **A**. AEAD menjamin kecepatan transmisi hingga seratus gigabit per detik tanpa memerlukan perangkat keras tambahan sesuai dengan rekomendasi panjang kunci NIST SP 800-57.
- **B**. Mampu mengenkripsi data secara permanen sehingga data tersebut tidak dapat didekripsi oleh siapa pun di masa depan.
- **C**. Menghilangkan kebutuhan akan pertukaran kunci rahasia antara pihak pengirim dan penerima data informasi.
- **D**. Menyediakan jaminan kerahasiaan sekaligus integritas dan autentikasi data (melalui auth tag) secara simultan dalam satu primitif.
- **E**. Mengizinkan penggunaan kunci enkripsi yang memiliki panjang fleksibel mulai dari 1 bit hingga tak terhingga.

> **Kunci Jawaban:** D. Menyediakan jaminan kerahasiaan sekaligus integritas dan autentikasi data (melalui auth tag) secara simultan dalam satu primitif.

---

### Soal 245
Dalam struktur algoritma Advanced Encryption Standard (AES), tahapan transformasi manakah yang bertanggung jawab menghadirkan sifat non-linearitas (confusion) yang kuat terhadap kriptoanalisis?

- **A**. Transformasi ShiftRows yang menggeser byte pada tiap baris matriks state secara siklik ke arah kiri yang diverifikasi menggunakan kode autentikasi pesan kriptografis.
- **B**. Transformasi MixColumns yang mengalikan tiap kolom state dengan polinomial matriks konstan yang dapat dibalik sesuai dengan rekomendasi panjang kunci NIST SP 800-57.
- **C**. Transformasi SubBytes yang mengganti setiap byte state menggunakan kotak substitusi (S-Box) berbasis invers Galois Field GF(2^8).
- **D**. Transformasi AddRoundKey yang melakukan operasi bitwise XOR antara matriks state dengan subkunci ronde saat ini.
- **E**. Transformasi KeyExpansion yang menggandakan panjang kunci master menggunakan deret bilangan Fibonacci.

> **Kunci Jawaban:** C. Transformasi SubBytes yang mengganti setiap byte state menggunakan kotak substitusi (S-Box) berbasis invers Galois Field GF(2^8).

---

### Soal 246
Mengapa skema 2DES (Double DES dengan dua kunci independen 56-bit) tidak memberikan keamanan $2^{112}$ bit, melainkan hanya setara $2^{57}$ operasi?

- **A**. Adanya kelemahan pada generator bilangan acak semu sistem operasi yang menghasilkan kunci kembar.
- **B**. Kunci kedua selalu dapat diturunkan dari kunci pertama melalui fungsi permutasi terbalik (IP-1).
- **C**. Panjang blok DES yang berukuran 64-bit memicu tabrakan ciphertext secara instan akibat Sweet32 attack.
- **D**. Tabel permutasi ekspansi (E-box) pada putaran Feistel DES dapat diselesaikan menggunakan eliminasi Gauss.
- **E**. Rentan terhadap serangan Meet-in-the-Middle yang mencocokkan hasil enkripsi maju dan dekripsi mundur di tabel memori tengah.

> **Kunci Jawaban:** E. Rentan terhadap serangan Meet-in-the-Middle yang mencocokkan hasil enkripsi maju dan dekripsi mundur di tabel memori tengah.

---

### Soal 247
Pada algoritma kriptografi kunci publik RSA, jika dipilih dua bilangan prima $p=61$ dan $q=53$, nilai dari fungsi totien Euler $\phi(n)$ yang digunakan untuk menghitung pasangan kunci privat adalah ...

- **A**. Nilai 3233 yang merupakan hasil perkalian skalar langsung antara bilangan prima $p$ dan bilangan prima $q$ berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **B**. Nilai 65537 yang merupakan nilai konstanta eksponen publik Fermat keempat paling umum digunakan di dunia.
- **C**. Nilai 114 yang merupakan hasil penjumlahan langsung dari parameter $p$ dan parameter prima $q$ yang diverifikasi menggunakan kode autentikasi pesan kriptografis.
- **D**. Nilai 1560 yang didapatkan dari pembagian nilai modulus sistem dengan bilangan bulat terkecil dua pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **E**. Nilai 3120 yang dihitung dari rumus matematis totien Euler $\phi(n) = (p - 1) \times (q - 1) = 60 \times 52$.

> **Kunci Jawaban:** E. Nilai 3120 yang dihitung dari rumus matematis totien Euler $\phi(n) = (p - 1) \times (q - 1) = 60 \times 52$.

---

### Soal 248
Mengapa penggunaan enkripsi RSA tanpa padding ('Textbook RSA' di mana $C = M^e \pmod n$) sangat berbahaya dan dilarang dalam sistem keamanan nyata?

- **A**. Textbook RSA hanya dapat dijalankan pada prosesor komputer bertipe arsitektur kuantum superkonduktor yang diverifikasi menggunakan kode autentikasi pesan kriptografis.
- **B**. Ukuran kunci publik RSA secara otomatis bocor ke jaringan publik setiap kali proses enkripsi pesan berlangsung sesuai dengan rekomendasi panjang kunci NIST SP 800-57.
- **C**. Memiliki sifat multiplikatif homogen (malleable), sehingga penyerang dapat memanipulasi ciphertext untuk mengubah isi plaintext secara terprediksi.
- **D**. Fungsi modular eksponensiasi textbook RSA selalu menghasilkan nilai ciphertext negatif pada bilangan ganjil yang diverifikasi menggunakan kode autentikasi pesan kriptografis.
- **E**. Mewajibkan pihak penerima membagikan kunci privat dekripsinya kepada publik sebelum pesan dapat dibaca guna menjamin properti kerahasiaan dan integritas pesan data.

> **Kunci Jawaban:** C. Memiliki sifat multiplikatif homogen (malleable), sehingga penyerang dapat memanipulasi ciphertext untuk mengubah isi plaintext secara terprediksi.

---

### Soal 249
Dalam protokol pertukaran kunci Diffie-Hellman Ephemeral (DHE / ECDHE), properti 'Perfect Forward Secrecy' (PFS) berhasil dicapai karena ...

- **A**. Data dienkripsi menggunakan tiga lapisan algoritma simetris yang berbeda secara paralel di saluran jaringan berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **B**. Kunci sesi diturunkan dari pasangan kunci sementara yang dibuang setelah sesi berakhir, sehingga pembobolan kunci privat server di masa depan tidak bisa mendekripsi rekaman lalu lintas masa lalu.
- **C**. Server dan klien tidak pernah melakukan pertukaran parameter angka apa pun melalui jaringan internet publik guna menjamin properti kerahasiaan dan integritas pesan data.
- **D**. Sertifikat digital X.509 diperbarui secara otomatis setiap lima detik melalui koneksi satelit GPS terisolasi pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **E**. Kunci sesi disimpan secara permanen di dalam modul keamanan perangkat keras TPM motherboard pengguna yang diverifikasi menggunakan kode autentikasi pesan kriptografis.

> **Kunci Jawaban:** B. Kunci sesi diturunkan dari pasangan kunci sementara yang dibuang setelah sesi berakhir, sehingga pembobolan kunci privat server di masa depan tidak bisa mendekripsi rekaman lalu lintas masa lalu.

---

### Soal 250
Properti 'Collision Resistance' pada fungsi hash kriptografis menyatakan bahwa secara komputasi tidak layak (computationally infeasible) untuk ...

- **A**. Menemukan nilai input $m$ apa pun yang menghasilkan nilai hash keluaran $H(m)$ bernilai genap pada indeks bit awal berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **B**. Mengompresi pesan berukuran 512 bit menjadi nilai hash keluaran yang berukuran tepat 256 bit secara efisien.
- **C**. Mendekripsi nilai hash kembali menjadi pesan aslinya tanpa menggunakan kunci privat asimetris penerima data berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **D**. Menghitung nilai hash suatu berkas yang memiliki ukuran fisik lebih besar daripada 4 Gigabyte pada sistem FAT32 sesuai dengan rekomendasi panjang kunci NIST SP 800-57.
- **E**. Menemukan dua pesan berbeda sembarang $m_1$ dan $m_2$ ($m_1 \neq m_2$) sehingga menghasilkan nilai hash yang identik $H(m_1) = H(m_2)$.

> **Kunci Jawaban:** E. Menemukan dua pesan berbeda sembarang $m_1$ dan $m_2$ ($m_1 \neq m_2$) sehingga menghasilkan nilai hash yang identik $H(m_1) = H(m_2)$.

---

### Soal 251
Mengapa konstruksi otentikasi pesan sederhana seperti `Hash(Secret || Message)` sangat rentan terhadap serangan 'Length Extension Attack' pada fungsi hash berbasis Merkle-Damgård (seperti SHA-256)?

- **A**. Struktur Merkle-Damgård membocorkan kunci rahasia secara otomatis di setiap akhir putaran pemrosesan blok pesan berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **B**. Fungsi kompresi Merkle-Damgård menolak memproses padding bit jika pesan dikirimkan melalui protokol HTTP sesuai dengan rekomendasi panjang kunci NIST SP 800-57.
- **C**. Algoritma SHA-256 memotong panjang pesan secara otomatis menjadi 128 bit jika pesan diawali dengan kata rahasia pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **D**. Keluaran hash merepresentasikan state internal akhir kompresi, memungkinkan penyerang menambahkan data baru dan melanjutkan komputasi hash tanpa tahu Secret.
- **E**. Penyerang dapat membalikkan fungsi kompresi menggunakan tabel pelangi (rainbow table) publik dalam hitungan detik.

> **Kunci Jawaban:** D. Keluaran hash merepresentasikan state internal akhir kompresi, memungkinkan penyerang menambahkan data baru dan melanjutkan komputasi hash tanpa tahu Secret.

---


## Post Test

### Soal 252
Mengapa fungsi hashing cepat seperti SHA-256 atau MD5 sangat dilarang digunakan untuk penyimpanan kata sandi (password storage), dan harus digantikan oleh Argon2id atau bcrypt?

- **A**. SHA-256 menghasilkan nilai hash yang memiliki panjang karakter berbeda-beda pada setiap sistem operasi pengguna berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **B**. Algoritma Argon2id tidak membutuhkan salt unik dan dapat memulihkan kata sandi asli jika pengguna lupa login sesuai dengan rekomendasi panjang kunci NIST SP 800-57.
- **C**. Fungsi cepat memungkinkan penyerang menguji miliaran tebakan per detik menggunakan GPU/ASIC; fungsi KDF menerapkan parameter work factor (waktu dan memori besar) untuk memperlambat cracking.
- **D**. SHA-256 hanya dapat berjalan pada prosesor 32-bit dan tidak mendukung komputasi pada arsitektur modern 64-bit.
- **E**. Sistem operasi Linux secara otomatis menolak menyimpan nilai hash SHA-256 pada berkas konfigurasi /etc/shadow.

> **Kunci Jawaban:** C. Fungsi cepat memungkinkan penyerang menguji miliaran tebakan per detik menggunakan GPU/ASIC; fungsi KDF menerapkan parameter work factor (waktu dan memori besar) untuk memperlambat cracking.

---

### Soal 253
Apa perbedaan fundamental antara tanda tangan digital (Digital Signature berbasis RSA/ECDSA) dan kode otentikasi pesan (HMAC) dalam konteks hukum dan jaminan keamanan?

- **A**. HMAC memerlukan sepasang kunci publik dan privat, sedangkan Digital Signature hanya memakai kunci simetris tunggal yang diverifikasi menggunakan kode autentikasi pesan kriptografis.
- **B**. Digital Signature tidak memerlukan fungsi hash apa pun dan langsung mengomputasi data teks biner plaintext.
- **C**. HMAC menjamin kerahasiaan isi pesan (enkripsi), sedangkan Digital Signature hanya mengompresi ukuran pesan fisik.
- **D**. Digital Signature memberikan jaminan Non-Repudiation karena dibuat dengan private key unik, sedangkan HMAC memakai shared secret yang diketahui kedua pihak sehingga bukti dapat disangkal.
- **E**. HMAC telah dinyatakan usang oleh standar internasional dan tidak boleh diimplementasikan pada protokol TLS.

> **Kunci Jawaban:** D. Digital Signature memberikan jaminan Non-Repudiation karena dibuat dengan private key unik, sedangkan HMAC memakai shared secret yang diketahui kedua pihak sehingga bukti dapat disangkal.

---

### Soal 254
Dalam arsitektur Public Key Infrastructure (PKI), mekanisme 'OCSP Stapling' diperkenalkan untuk mengatasi kelemahan privasi dan performa pada pemeriksaan status sertifikat X.509 konvensional dengan cara ...

- **A**. Mewajibkan klien mengunduh seluruh daftar berkas CRL berukuran puluhan megabyte setiap kali membuka peramban pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **B**. Memaksa peramban mengabaikan tanggal kedaluwarsa sertifikat jika nama domain server cocok dengan header HTTP berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **C**. Menghapus seluruh otoritas Root CA komersial dan menggantinya dengan sertifikat self-signed lokal institusi berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **D**. Server web secara berkala meminta respons status OCSP bertanda tangan CA lalu menyematkannya (staple) langsung ke klien saat TLS handshake, menghemat kueri klien ke CA.
- **E**. Mengenkripsi sertifikat digital klien menggunakan algoritma kuantum sebelum diteruskan ke server aplikasi.

> **Kunci Jawaban:** D. Server web secara berkala meminta respons status OCSP bertanda tangan CA lalu menyematkannya (staple) langsung ke klien saat TLS handshake, menghemat kueri klien ke CA.

---

### Soal 255
Mengapa Elliptic Curve Cryptography (ECC, seperti kurva secp256r1 atau Curve25519) lebih unggul diaplikasikan pada perangkat mobile dan IoT dibanding RSA konvensional?

- **A**. ECC tidak membutuhkan pemrosesan aritmatika modular sama sekali pada unit arithmetic logic unit (ALU) prosesor.
- **B**. Kunci privat kurva eliptik dapat dibagikan secara bebas kepada publik tanpa mengurangi kerahasiaan pesan.
- **C**. Algoritma kurva eliptik sepenuhnya kebal terhadap segala jenis serangan algoritma Shor pada komputer kuantum.
- **D**. ECC memungkinkan proses dekripsi dilakukan tanpa memerlukan kunci privat oleh penerima data terdaftar.
- **E**. Memberikan tingkat kekuatan keamanan setara RSA 3072-bit hanya dengan panjang kunci 256-bit, memangkas komputasi, konsumsi daya baterai, dan ukuran bandwidth.

> **Kunci Jawaban:** E. Memberikan tingkat kekuatan keamanan setara RSA 3072-bit hanya dengan panjang kunci 256-bit, memangkas komputasi, konsumsi daya baterai, dan ukuran bandwidth.

---

### Soal 256
Pembaruan arsitektur keamanan pada standar TLS 1.3 (RFC 8446) dibandingkan TLS 1.2 secara radikal meningkatkan keamanan dengan langkah tegas berupa ...

- **A**. Menghapus protokol transmisi TCP dan menggantikannya secara eksklusif dengan protokol User Datagram Protocol (UDP) berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **B**. Menghapus pertukaran kunci RSA statis dan seluruh cipher non-AEAD (seperti CBC mode), mewajibkan cipher AEAD dan pertukaran ephemeral DH (PFS).
- **C**. Mewajibkan penggunaan panjang kunci simetris minimal 4096 bit pada seluruh cipher suite yang terdaftar aktif berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **D**. Menonaktifkan enkripsi pada fase transmisi data aplikasi untuk memprioritaskan latensi nol (0-RTT performance) guna menjamin properti kerahasiaan dan integritas pesan data.
- **E**. Mengizinkan penggunaan fungsi hash MD5 untuk verifikasi integritas pesan handshake pada jaringan berkecepatan tinggi berdasarkan prinsip matematika komputasi kurva eliptik modern.

> **Kunci Jawaban:** B. Menghapus pertukaran kunci RSA statis dan seluruh cipher non-AEAD (seperti CBC mode), mewajibkan cipher AEAD dan pertukaran ephemeral DH (PFS).

---

### Soal 257
Mengapa algoritma pertukaran kunci Diffie-Hellman murni (tanpa tanda tangan digital atau sertifikat) sangat rentan terhadap serangan Man-in-the-Middle (MitM)?

- **A**. Diffie-Hellman hanya dapat dijalankan pada perangkat keras yang memiliki modul pemrosesan grafis dedicated.
- **B**. Protokol dasar DH tidak menyediakan mekanisme autentikasi entitas, sehingga penyerang di tengah dapat melakukan dua negosiasi kunci terpisah secara transparan.
- **C**. Nilai bilangan prima modulus yang dipilih selalu dibatasi bernilai kurang dari angka seratus oleh spesifikasi RFC.
- **D**. Diffie-Hellman mewajibkan pengiriman nilai kunci privat master dalam bentuk teks biasa (plaintext) di jaringan.
- **E**. Penyerang dapat dengan mudah menebak nilai pangkat rahasia menggunakan operasi logaritma biasa kalkulator saku.

> **Kunci Jawaban:** B. Protokol dasar DH tidak menyediakan mekanisme autentikasi entitas, sehingga penyerang di tengah dapat melakukan dua negosiasi kunci terpisah secara transparan.

---

### Soal 258
Dalam konteks Post-Quantum Cryptography (PQC), mengapa algoritma kriptografi asimetris seperti RSA dan ECC terancam punah jika komputer kuantum skala besar terwujud?

- **A**. Algoritma Grover dapat memecahkan faktorisasi prima RSA dalam kompleksitas waktu konstan $O(1)$ siklus kuantum pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **B**. Algoritma kuantum Shor mampu menyelesaikan masalah faktorisasi prima (RSA) dan logaritma diskret kurva eliptik (ECC) dalam waktu polinomial.
- **C**. Komputer kuantum secara instan membalikkan arah aliran daya listrik pada kabel serat optik bawah laut global pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **D**. Sistem operasi kuantum menolak mengeksekusi fungsi matematika yang melibatkan operasi pembagian bilangan bulat.
- **E**. Enkripsi kunci publik menghasilkan interferensi gelombang elektromagnetik yang menghancurkan status superposisi qubit.

> **Kunci Jawaban:** B. Algoritma kuantum Shor mampu menyelesaikan masalah faktorisasi prima (RSA) dan logaritma diskret kurva eliptik (ECC) dalam waktu polinomial.

---

### Soal 259
Untuk mencegah serangan Side-Channel berbasis analisis waktu (Timing Attack) saat membandingkan hash atau MAC autentikasi pada kode program, praktik terbaik yang wajib diterapkan adalah ...

- **A**. Menggunakan operator pembanding standar `==` yang langsung mengembalikan nilai false saat karakter pertama tidak cocok pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **B**. Menambahkan jeda waktu acak (random sleep) antara 1 hingga 10 detik sebelum memanggil fungsi perbandingan bawaan bahasa.
- **C**. Menggunakan fungsi perbandingan dengan waktu konstan (constant-time comparison) yang selalu memeriksa seluruh byte tanpa keluar lebih awal.
- **D**. Mengalokasikan kedua string variabel pembanding pada memori video GPU sebelum melakukan perbandingan karakter.
- **E**. Mengonversi kedua nilai hash menjadi bilangan floating-point ganda sebelum melakukan operasi pengurangan skalar.

> **Kunci Jawaban:** C. Menggunakan fungsi perbandingan dengan waktu konstan (constant-time comparison) yang selalu memeriksa seluruh byte tanpa keluar lebih awal.

---

### Soal 260
Mengapa penggunaan fungsi pembangkit bilangan acak bawaan seperti `rand()` atau `Math.random()` sangat berbahaya jika digunakan untuk menghasilkan token sesi atau kunci kriptografi?

- **A**. Fungsi-fungsi tersebut menghasilkan keluaran bilangan bertipe string yang tidak dapat dienkripsi oleh pustaka OpenSSL.
- **B**. Standar keamanan W3C melarang penggunaan bilangan desimal acak dalam pembuatan cookie peramban internet klien.
- **C**. Penggunaan fungsi tersebut memicu pemakaian CPU hingga 100 persen dan menyebabkan server web mengalami crash permanen.
- **D**. Fungsi PRNG non-kriptografis memiliki entropi rendah dan algoritma deterministik (seperti Linear Congruential Generator) yang mudah ditebak state berikutnya.
- **E**. Fungsi Math.random() selalu mengirimkan nilai seed acak ke server peramban eksternal melalui koneksi telemetry.

> **Kunci Jawaban:** D. Fungsi PRNG non-kriptografis memiliki entropi rendah dan algoritma deterministik (seperti Linear Congruential Generator) yang mudah ditebak state berikutnya.

---

### Soal 261
Berdasarkan prinsip Birthday Paradox, berapa perkiraan jumlah percobaan hash acak yang dibutuhkan seorang penyerang untuk menemukan tabrakan (collision) pada fungsi hash dengan panjang digest $n$ bit?

- **A**. Hanya dibutuhkan sekitar $2^{n/2}$ operasi percobaan hash, mereduksi ruang pencarian eksponensial menjadi setengah pangkatnya.
- **B**. Dibutuhkan sekitar $2^n$ operasi hash penuh untuk menemukan tabrakan secara deterministik pada ruang pencarian guna menjamin properti kerahasiaan dan integritas pesan data.
- **C**. Dibutuhkan sekitar $n^2$ operasi perhitungan matematis sederhana pada register unit floating point CPU host.
- **D**. Hanya membutuhkan $n \times 2$ operasi hash berkat pengoptimalan memori paralel arsitektur grafis GPU modern.
- **E**. Dibutuhkan tepat $\log_2(n)$ siklus detak instruksi perakitan mesin mikroprosesor pada arsitektur x86.

> **Kunci Jawaban:** A. Hanya dibutuhkan sekitar $2^{n/2}$ operasi percobaan hash, mereduksi ruang pencarian eksponensial menjadi setengah pangkatnya.

---

### Soal 262
Prinsip dasar protokol kriptografi Zero-Knowledge Proof (ZKP, seperti zk-SNARKs) memungkinkan sebuah pihak pembukti (prover) untuk meyakinkan pihak pemverifikasi (verifier) bahwa ...

- **A**. Pihak pembukti telah berhasil meretas basis data pihak pemverifikasi tanpa meninggalkan berkas jejak audit di log sistem yang diverifikasi menggunakan kode autentikasi pesan kriptografis.
- **B**. Seluruh data transaksi perbankan pengguna disiarkan ke seluruh node jaringan blockchain secara publik tanpa enkripsi guna menjamin properti kerahasiaan dan integritas pesan data.
- **C**. Sebuah pernyataan matematis adalah benar tanpa membocorkan informasi atau rahasia apa pun selain kebenaran pernyataan tersebut.
- **D**. Kunci privat enkripsi data telah dimusnahkan secara fisik dari media penyimpanan cold storage menggunakan demagnetizer pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **E**. Sistem operasi server telah diperbarui dengan patch keamanan kernel terbaru dari vendor perangkat lunak resmi berdasarkan prinsip matematika komputasi kurva eliptik modern.

> **Kunci Jawaban:** C. Sebuah pernyataan matematis adalah benar tanpa membocorkan informasi atau rahasia apa pun selain kebenaran pernyataan tersebut.

---

### Soal 263
Pada sistem berkas terenkripsi tingkat partisi (Full Disk Encryption seperti LUKS atau BitLocker), peran Master Key (Volume Encryption Key) yang dibungkus oleh User Key (Key Encryption Key) bertujuan untuk ...

- **A**. Memungkinkan pengguna mengganti password otentikasi tanpa harus melakukan enkripsi ulang seluruh volume disk yang memakan waktu berjam-jam.
- **B**. Menghindari proses penulisan data ke dalam sektor piringan disk fisik sehingga memperpanjang usia pakai memori NAND berdasarkan prinsip matematika komputasi kurva eliptik modern.
- **C**. Menyediakan pintu belakang (backdoor) darurat bagi penegak hukum untuk memulihkan data tanpa persetujuan pemilik sah pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.
- **D**. Meningkatkan kecepatan putaran spindle motor hard disk mekanis hingga mencapai kecepatan lima belas ribu RPM yang diverifikasi menggunakan kode autentikasi pesan kriptografis.
- **E**. Membagi setiap berkas dokumen pengguna menjadi pecahan data terenkripsi yang disebar ke beberapa server cloud publik berdasarkan prinsip matematika komputasi kurva eliptik modern.

> **Kunci Jawaban:** A. Memungkinkan pengguna mengganti password otentikasi tanpa harus melakukan enkripsi ulang seluruh volume disk yang memakan waktu berjam-jam.

---
