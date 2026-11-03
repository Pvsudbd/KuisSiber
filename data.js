// Auto-generated Quiz Data (Informan 1 + Informan 2 Unik + Bank Soal Tambahan)
const QUIZ_DATA = [
  {
    "id": 1,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Manakah pasangan yang benar-benar merupakan two-factor authentication?",
    "options": {
      "a": "Password dan PIN",
      "b": "Password dan fingerprint",
      "c": "Password dan jawaban security question",
      "d": "PIN dan password kedua",
      "e": "Fingerprint dan face recognition"
    },
    "correct_letter": "b",
    "correct_answer": "Password dan fingerprint"
  },
  {
    "id": 2,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam biometric authentication digunakan matching score s dan threshold t. Sistem menerima pengguna jika s ≥ t. Jika threshold dinaikkan, kecenderungan yang paling tepat adalah ...",
    "options": {
      "a": "False match turun tetapi false nonmatch dapat naik",
      "b": "False match dan false nonmatch selalu turun bersamaan",
      "c": "False match naik dan false nonmatch turun",
      "d": "Semua pengguna akan selalu diterima",
      "e": "False match dan false nonmatch tidak dipengaruhi threshold"
    },
    "correct_letter": "a",
    "correct_answer": "False match turun tetapi false nonmatch dapat naik"
  },
  {
    "id": 3,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Setelah seorang pengguna menyatakan identitasnya, sistem meminta password untuk memastikan bahwa klaim identitas tersebut benar. Proses yang sedang dilakukan adalah ...",
    "options": {
      "a": "Identification",
      "b": "Authorization",
      "c": "Authentication",
      "d": "Provisioning",
      "e": "Auditing"
    },
    "correct_letter": "c",
    "correct_answer": "Authentication"
  },
  {
    "id": 4,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Remote user authentication umumnya memiliki risiko tambahan dibandingkan local authentication karena ...",
    "options": {
      "a": "Local authentication selalu menggunakan biometrik",
      "b": "Remote authentication tidak dapat menggunakan password",
      "c": "Informasi authentication melewati communication link sehingga dapat menghadapi eavesdropping dan replay",
      "d": "Local authentication tidak membutuhkan verifier",
      "e": "Remote authentication tidak memiliki user ID"
    },
    "correct_letter": "c",
    "correct_answer": "Informasi authentication melewati communication link sehingga dapat menghadapi eavesdropping dan replay"
  },
  {
    "id": 5,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sistem biometric menerima seorang impostor sebagai pengguna yang sah. Kejadian ini disebut ...",
    "options": {
      "a": "Identification timeout",
      "b": "False nonmatch",
      "c": "Enrollment failure",
      "d": "True rejection",
      "e": "False match"
    },
    "correct_letter": "e",
    "correct_answer": "False match"
  },
  {
    "id": 6,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perusahaan memiliki aturan: pegawai boleh mengubah data hanya jika data tersebut dimiliki oleh divisi di mana pegawai tersebut berada, menggunakan komputer perusahaan, berada pada internal network, dan sedang berada pada jam kerjanya. Model yang paling tepat adalah ...",
    "options": {
      "a": "ACL karena setiap komputer memiliki alamat IP",
      "b": "MAC karena rekam medis merupakan data sensitif",
      "c": "ABAC karena keputusan menggunakan atribut subject, object, dan environment",
      "d": "DAC karena dokter memiliki identitas",
      "e": "RBAC karena pengguna mempunyai role dokter"
    },
    "correct_letter": "c",
    "correct_answer": "ABAC karena keputusan menggunakan atribut subject, object, dan environment"
  },
  {
    "id": 7,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Di sebuah universitas, permission untuk menginput nilai diberikan kepada role Dosen, bukan kepada setiap dosen secara individual. Model yang diterapkan terutama adalah ...",
    "options": {
      "a": "MAC",
      "b": "ABAC",
      "c": "RBAC",
      "d": "DAC",
      "e": "Capability-based authentication"
    },
    "correct_letter": "c",
    "correct_answer": "RBAC"
  },
  {
    "id": 8,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Mengapa sekadar mengirim password statis dalam bentuk terenkripsi belum tentu cukup untuk mencegah replay attack?",
    "options": {
      "a": "Password terenkripsi selalu memiliki panjang kurang dari password asli",
      "b": "Nilai terenkripsi yang tertangkap dapat berfungsi sebagai credential yang digunakan kembali jika protokol tidak menjamin freshness",
      "c": "Encryption menghapus identitas pengguna dari pesan",
      "d": "Encryption selalu mengubah password menjadi plaintext",
      "e": "Password terenkripsi tidak dapat diperiksa oleh server"
    },
    "correct_letter": "b",
    "correct_answer": "Nilai terenkripsi yang tertangkap dapat berfungsi sebagai credential yang digunakan kembali jika protokol tidak menjamin freshness"
  },
  {
    "id": 9,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "PIN pada kartu ATM termasuk authentication factor kategori ...",
    "options": {
      "a": "Something the individual knows \n --- --",
      "b": "Somewhere the individual is",
      "c": "Something the individual is",
      "d": "Something the individual does",
      "e": "Something the individual possesses \n Good w ork \n The cor rect answer is:Something the individual knows"
    },
    "correct_letter": "a",
    "correct_answer": "Something the individual knows \n --- --"
  },
  {
    "id": 10,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Karakteristik utama continuous authentication adalah ...",
    "options": {
      "a": "Sistem tidak lagi membutuhkan authentication saat login",
      "b": "Pengguna harus mengetik ulang password setiap satu detik",
      "c": "Continuous authentication hanya dapat menggunakan fingerprint",
      "d": "Authentication hanya dilakukan ketika akun pertama kali dibuat",
      "e": "Identitas atau risiko pengguna dievaluasi secara berkelanjutan selama sesi aktif"
    },
    "correct_letter": "e",
    "correct_answer": "Identitas atau risiko pengguna dievaluasi secara berkelanjutan selama sesi aktif"
  },
  {
    "id": 11,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam trust triangle, sebuah aplikasi eksternal meminta pihak lain mengautentikasi pengguna dan kemudian mempercayai hasil verifikasinya. Aplikasi eksternal tersebut berperan sebagai ...",
    "options": {
      "a": "Attribute owner",
      "b": "Identity Service Provider (IdP)",
      "c": "Relying Party (RP)",
      "d": "Credential Service Provider (CSP)",
      "e": "Registration Authority (RA)"
    },
    "correct_letter": "c",
    "correct_answer": "Relying Party (RP)"
  },
  {
    "id": 12,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Alice dan Bob memilih password yang sama. Sistem menggunakan salt acak yang berbeda untuk setiap pengguna sebelum hashing. Apa yang diharapkan tersimpan di password database?",
    "options": {
      "a": "Password Alice dan Bob disimpan dalam plaintext",
      "b": "Hash Alice dan Bob umumnya berbeda karena salt-nya berbeda",
      "c": "Salt tidak perlu disimpan oleh sistem",
      "d": "Password Bob otomatis ditolak karena sudah digunakan Alice",
      "e": "Hash Alice dan Bob harus identik"
    },
    "correct_letter": "b",
    "correct_answer": "Hash Alice dan Bob umumnya berbeda karena salt-nya berbeda"
  },
  {
    "id": 13,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Seorang pengguna tidak memberikan username, tetapi memindai fingerprint. Sistem membandingkan fingerprint tersebut dengan seluruh template yang tersimpan untuk menemukan siapa pengguna tersebut. Operasi ini disebut ...",
    "options": {
      "a": "Verification",
      "b": "Assertion",
      "c": "Enrollment",
      "d": "Identification",
      "e": "Authorization"
    },
    "correct_letter": "d",
    "correct_answer": "Identification"
  },
  {
    "id": 14,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Manakah yang merupakan tiga elemen dasar access control?",
    "options": {
      "a": "Identity,password,dan token",
      "b": "Authentication,encryption,dan hashing",
      "c": "Confidentiality,integrity,dan availability",
      "d": "User,server,dan network",
      "e": "Subject,object,dan access right"
    },
    "correct_letter": "e",
    "correct_answer": "Subject,object,dan access right"
  },
  {
    "id": 15,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam biometric authentication digunakan matching score s dan threshold t. Sistem menerima pengguna jika s ≥ t. Jika threshold dinaikkan, kecenderungan yang paling tepat adalah ...",
    "options": {
      "a": "False match dan false nonmatch tidak dipengaruhi threshold",
      "b": "False match naik dan false nonmatch turun",
      "c": "False match turun tetapi false nonmatch dapat naik",
      "d": "False match dan false nonmatch selalu turun bersamaan",
      "e": "Semua pengguna akan selalu diterima"
    },
    "correct_letter": "c",
    "correct_answer": "False match turun tetapi false nonmatch dapat naik"
  },
  {
    "id": 16,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Fungsi utama salt pada mekanisme hashed password adalah ...",
    "options": {
      "a": "Menggantikan password sehingga password tidak lagi diperlukan",
      "b": "Memungkinkan hash dikembalikan menjadi plaintext password",
      "c": "Membuat semua pengguna dengan password sama menghasilkan hash yang sama",
      "d": "Mengenkripsi user ID agar tidak diketahui administrator",
      "e": "Membuat password yang sama dapat menghasilkan hash berbeda dan mempersulit offline dictionary attack"
    },
    "correct_letter": "e",
    "correct_answer": "Membuat password yang sama dapat menghasilkan hash berbeda dan mempersulit offline dictionary attack"
  },
  {
    "id": 17,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Manakah pasangan yang benar-benar merupakan two-factor authentication?",
    "options": {
      "a": "PIN dan password kedua \n --- --",
      "b": "Password dan PIN",
      "c": "Password dan jawaban security question",
      "d": "Fingerprint dan face recognition",
      "e": "Password dan fingerprint \n Good w ork \n The cor rect answer is:Password dan fingerprint"
    },
    "correct_letter": "e",
    "correct_answer": "Password dan fingerprint \n Good w ork \n The cor rect answer is:Password dan fingerprint"
  },
  {
    "id": 18,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Pada proses enrollment biometric, aktivitas utama yang dilakukan adalah ...",
    "options": {
      "a": "Mengambil karakteristik biometric, mengekstrak fitur, dan menyimpan template pengguna",
      "b": "Membandingkan satu sampel dengan seluruh pengguna yang ada",
      "c": "Menentukan role berdasarkan nilai threshold",
      "d": "Menghapus template lama setiap kali pengguna login",
      "e": "Memberikan permission kepada pengguna"
    },
    "correct_letter": "a",
    "correct_answer": "Mengambil karakteristik biometric, mengekstrak fitur, dan menyimpan template pengguna"
  },
  {
    "id": 19,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Manakah data berikut yang paling sesuai digunakan sebagai passive indicator dalam continuous authentication?",
    "options": {
      "a": "Password database server",
      "b": "Nama lengkap pengguna saja",
      "c": "Daftar permission administrator saja",
      "d": "Keystroke dynamics, pola gerakan mouse, dan konteks perangkat",
      "e": "Nomor induk mahasiswa saja"
    },
    "correct_letter": "d",
    "correct_answer": "Keystroke dynamics, pola gerakan mouse, dan konteks perangkat"
  },
  {
    "id": 20,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Remote user authentication umumnya memiliki risiko tambahan dibandingkan local authentication karena ...",
    "options": {
      "a": "Local authentication selalu menggunakan biometrik",
      "b": "Remote authentication tidak dapat menggunakan password",
      "c": "Local authentication tidak membutuhkan verifier",
      "d": "Informasi authentication melewati communication link sehingga dapat menghadapi eavesdropping dan replay",
      "e": "Remote authentication tidak memiliki user ID"
    },
    "correct_letter": "d",
    "correct_answer": "Informasi authentication melewati communication link sehingga dapat menghadapi eavesdropping dan replay"
  },
  {
    "id": 21,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Teknologi komputer menimbulkan isu etika baru karena ...",
    "options": {
      "a": "Pengguna tidak memiliki hubungan dengan teknologi",
      "b": "Sistem komputer tidak dapat menyimpan informasi pribadi",
      "c": "Sistem komputer hanya digunakan oleh kelompok tertentu",
      "d": "Perangkat komputer tidak memiliki aturan penggunaan",
      "e": "Teknologi memungkinkan pengumpulan dan pemrosesan data dalam skala besar"
    },
    "correct_letter": "e",
    "correct_answer": "Teknologi memungkinkan pengumpulan dan pemrosesan data dalam skala besar"
  },
  {
    "id": 22,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Seorang security engineer menemukan kerentanan kritis pada aplikasi pembayaran perusahaan. Manajemen meminta engineer tersebut menunda perbaikan karena aplikasi akan diluncurkan besok dan keterlambatan dapat menyebabkan kerugian bisnis. Tindakan yang paling sesuai dengan tanggung jawab etika profesional adalah ...",
    "options": {
      "a": "Mengabaikan masalah tersebut karena pengujian keamanan bukan tanggung jawab engineer",
      "b": "Membagikan informasi kerentanan kepada publik agar perusahaan segera memperbaikinya",
      "c": "Melaporkan risiko tersebut dan mendorong mitigasi sebelum sistem digunakan oleh pengguna",
      "d": "Mengikuti keputusan manajemen karena perusahaan memiliki hak menentukan prioritas pengembangan",
      "e": "Menunggu hingga terjadi insiden untuk mendapatkan bukti dampak kerentanan"
    },
    "correct_letter": "c",
    "correct_answer": "Melaporkan risiko tersebut dan mendorong mitigasi sebelum sistem digunakan oleh pengguna"
  },
  {
    "id": 23,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Pendekatan human-centered security bertujuan untuk ...",
    "options": {
      "a": "Membatasi penggunaan teknologi informasi",
      "b": "Mengintegrasikan aspek manusia, teknologi, hukum, dan etika dalam keamanan",
      "c": "Menggantikan keamanan teknis dengan kebijakan organisasi",
      "d": "Menghilangkan seluruh interaksi manusia dengan sistem",
      "e": "Memprioritaskan teknologi dibandingkan pengguna"
    },
    "correct_letter": "b",
    "correct_answer": "Mengintegrasikan aspek manusia, teknologi, hukum, dan etika dalam keamanan"
  },
  {
    "id": 24,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Kasus penipuan terhadap Google dan Facebook yang menyebabkan kerugian besar dilakukan dengan cara ...",
    "options": {
      "a": "Mengubah data keuangan perusahaan melalui akses ilegal",
      "b": "Mengirim malware melalui sistem komunikasi internal perusahaan",
      "c": "Menggunakan identitas vendor palsu untuk mengirimkan invoice yang tampak valid",
      "d": "Mengeksploitasi celah keamanan pada aplikasi transaksi perusahaan",
      "e": "Mengambil alih akun administrator menggunakan kredensial curian"
    },
    "correct_letter": "c",
    "correct_answer": "Menggunakan identitas vendor palsu untuk mengirimkan invoice yang tampak valid"
  },
  {
    "id": 25,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Memanipulasi informasi elektronik sehingga terlihat sebagai dokumen asli termasuk ...",
    "options": {
      "a": "Electronic forgery",
      "b": "System interference",
      "c": "Illegal access",
      "d": "Cyber threat",
      "e": "Data modification"
    },
    "correct_letter": "a",
    "correct_answer": "Electronic forgery"
  },
  {
    "id": 26,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Menghapus atau mengubah data elektronik milik pihak lain tanpa hak termasuk kategori ...",
    "options": {
      "a": "Electronic forgery",
      "b": "Illegal interception",
      "c": "Data interference",
      "d": "Cyber threat",
      "e": "Online defamation"
    },
    "correct_letter": "c",
    "correct_answer": "Data interference"
  },
  {
    "id": 27,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Code of Conduct bagi profesional komputer dibuat untuk...",
    "options": {
      "a": "Menghilangkan risiko penggunaan teknologi",
      "b": "Mengatur seluruh aktivitas pengguna internet",
      "c": "Menentukan standar harga produk teknologi",
      "d": "Menggantikan hukum yang berlaku di suatu negara",
      "e": "Memberikan panduan perilaku dan tanggung jawab profesional"
    },
    "correct_letter": "e",
    "correct_answer": "Memberikan panduan perilaku dan tanggung jawab profesional"
  },
  {
    "id": 28,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Indonesia mengadopsi banyak konsep cybercrime dari Budapest Convention ke dalam regulasi nasional terutama melalui ...",
    "options": {
      "a": "Ketentuan pidana dalam UU Informasi dan Transaksi Elektronik",
      "b": "Regulasi mengenai hak kekayaan intelektual digital",
      "c": "Standar teknis keamanan jaringan nasional",
      "d": "Pedoman pengembangan perangkat lunak pemerintah",
      "e": "Aturan penggunaan perangkat komputer pribadi"
    },
    "correct_letter": "a",
    "correct_answer": "Ketentuan pidana dalam UU Informasi dan Transaksi Elektronik"
  },
  {
    "id": 29,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam kategori computer crime menurut U.S. Department of Justice, komputer sebagai target berarti ...",
    "options": {
      "a": "Komputer digunakan untuk mengakses layanan internet ilegal",
      "b": "Komputer digunakan untuk menyebarkan informasi kepada publik",
      "c": "Sistem komputer menjadi objek serangan untuk merusak data atau layanan",
      "d": "Komputer digunakan sebagai media komunikasi melakukan kejahatan",
      "e": "Komputer digunakan untuk menyimpan informasi hasil pencurian"
    },
    "correct_letter": "c",
    "correct_answer": "Sistem komputer menjadi objek serangan untuk merusak data atau layanan"
  },
  {
    "id": 30,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Berdasarkan Budapest Convention on Cybercrime, tindakan memasuki sistem komputer tanpa hak termasuk ...",
    "options": {
      "a": "Computer-related forgery",
      "b": "Illegal access",
      "c": "Computer-related fraud",
      "d": "Data interference",
      "e": "Misuse of devices"
    },
    "correct_letter": "b",
    "correct_answer": "Illegal access"
  },
  {
    "id": 31,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Salah satu tujuan utama RUU Keamanan dan Ketahanan Siber adalah...",
    "options": {
      "a": "Mengurangi keterlibatan masyarakat dalam keamanan",
      "b": "Menggantikan seluruh fungsi organisasi keamanan",
      "c": "Menghapus regulasi keamanan yang sudah ada",
      "d": "Memperkuat penyelenggaraan keamanan siber nasional",
      "e": "Membatasi penggunaan teknologi informasi masyarakat"
    },
    "correct_letter": "d",
    "correct_answer": "Memperkuat penyelenggaraan keamanan siber nasional"
  },
  {
    "id": 32,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah organisasi mengalami kebocoran data setelah seorang pegawai membuka lampiran email yang terlihat berasal dari pihak terpercaya. Berdasarkan konsep keamanan siber, kejadian tersebut merupakan contoh dari ...",
    "options": {
      "a": "Eksploitasi kelemahan perangkat lunak untuk memperoleh hak akses sistem",
      "b": "Penggunaan algoritma kriptografi yang tidak sesuai standar keamanan",
      "c": "Manipulasi pengguna agar secara tidak langsung membantu terjadinya kompromi keamanan",
      "d": "Kegagalan mekanisme autentikasi dalam memverifikasi identitas pengguna",
      "e": "Gangguan terhadap layanan jaringan akibat konsumsi sumber daya berlebih"
    },
    "correct_letter": "c",
    "correct_answer": "Manipulasi pengguna agar secara tidak langsung membantu terjadinya kompromi keamanan"
  },
  {
    "id": 33,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Seorang security engineer menemukan kerentanan kritis pada aplikasi pembayaran perusahaan. Manajemen meminta engineer tersebut menunda perbaikan karena aplikasi akan diluncurkan besok dan keterlambatan dapat menyebabkan kerugian bisnis. Tindakan yang paling sesuai dengan tanggung jawab etika profesional adalah ...",
    "options": {
      "a": "Mengabaikan masalah tersebut karena pengujian keamanan bukan tanggung jawab engineer",
      "b": "Membagikan informasi kerentanan kepada publik agar perusahaan segera memperbaikinya",
      "c": "Melaporkan risiko tersebut dan mendorong mitigasi sebelum sistem digunakan oleh pengguna",
      "d": "Mengikuti keputusan manajemen karena perusahaan memiliki hak menentukan prioritas pengembangan",
      "e": "Menunggu hingga terjadi insiden untuk mendapatkan bukti dampak kerentanan"
    },
    "correct_letter": "c",
    "correct_answer": "Melaporkan risiko tersebut dan mendorong mitigasi sebelum sistem digunakan oleh pengguna"
  },
  {
    "id": 34,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Penyimpanan daftar password curian dan informasi kartu kredit menggunakan komputer termasuk kategori ...",
    "options": {
      "a": "Computer as communication tools karena informasi dikirim melalui jaringan",
      "b": "Illegal access karena komputer mendapatkan akses tanpa izin",
      "c": "Computer as storage device karena komputer digunakan menyimpan informasi ilegal",
      "d": "System interference karena sistem mengalami gangguan layanan",
      "e": "Computer as target karena data berada dalam sistem komputer"
    },
    "correct_letter": "c",
    "correct_answer": "Computer as storage device karena komputer digunakan menyimpan informasi ilegal"
  },
  {
    "id": 35,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Code of Conduct bagi profesional komputer dibuat untuk...",
    "options": {
      "a": "Menggantikan hukum yang berlaku di suatu negara",
      "b": "Menghilangkan risiko penggunaan teknologi",
      "c": "Memberikan panduan perilaku dan tanggung jawab profesional",
      "d": "Mengatur seluruh aktivitas pengguna internet",
      "e": "Menentukan standar harga produk teknologi"
    },
    "correct_letter": "c",
    "correct_answer": "Memberikan panduan perilaku dan tanggung jawab profesional"
  },
  {
    "id": 36,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perusahaan memberikan pelatihan kepada administrator jaringan mengenai konfigurasi firewall dan pengamanan server. Aktivitas tersebut termasuk kategori ...",
    "options": {
      "a": "Awareness karena memberikan informasi mengenai ancaman",
      "b": "Education karena hanya diberikan kepada peneliti keamanan",
      "c": "Training karena mengembangkan kemampuan melakukan pekerjaan secara aman",
      "d": "Security assessment karena mengevaluasi sistem keamanan",
      "e": "Policy enforcement karena berkaitan dengan aturan organisasi"
    },
    "correct_letter": "c",
    "correct_answer": "Training karena mengembangkan kemampuan melakukan pekerjaan secara aman"
  },
  {
    "id": 37,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Seorang attacker masuk ke server perusahaan tanpa izin menggunakan akun yang diperoleh secara ilegal. Perbuatan tersebut sesuai dengan UU ITE Pasal ...",
    "options": {
      "a": "Pasal32mengenai perubahan data elektronik \n --- --",
      "b": "Pasal27mengenai konten elektronik",
      "c": "Pasal28mengenai informasi yang merugikan",
      "d": "Pasal35mengenai manipulasi informasi elektronik",
      "e": "Pasal30mengenai illegal access"
    },
    "correct_letter": "e",
    "correct_answer": "Pasal30mengenai illegal access"
  },
  {
    "id": 38,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Serangan yang melakukan penyadapan komunikasi elektronik tanpa izin termasuk kategori ...",
    "options": {
      "a": "Computer fraud karena menyebabkan kerugian finansial",
      "b": "Illegal access karena mendapatkan akses ke sistem",
      "c": "Data interference karena mengubah informasi",
      "d": "Illegal interception karena menangkap komunikasi tanpa hak",
      "e": "System interference karena mengganggu layanan"
    },
    "correct_letter": "d",
    "correct_answer": "Illegal interception karena menangkap komunikasi tanpa hak"
  },
  {
    "id": 39,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam ethical hierarchy, ketika terjadi konflik antara aturan internal perusahaan dan prinsip moral yang lebih tinggi, seorang profesional sebaiknya ...",
    "options": {
      "a": "Memilih keputusan yang memberikan keuntungan terbesar bagi organisasi",
      "b": "Menyerahkan seluruh keputusan kepada pengguna sistem",
      "c": "Mempertimbangkan prinsip etika yang lebih tinggi ketika aturan tersebut menyebabkan tindakan yang merugikan",
      "d": "Selalu mengikuti aturan perusahaan tanpa mempertimbangkan dampaknya",
      "e": "Menghindari seluruh keputusan yang memiliki risiko"
    },
    "correct_letter": "c",
    "correct_answer": "Mempertimbangkan prinsip etika yang lebih tinggi ketika aturan tersebut menyebabkan tindakan yang merugikan"
  },
  {
    "id": 40,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam kategori computer crime menurut U.S. Department of Justice, komputer sebagai target berarti ...",
    "options": {
      "a": "Komputer digunakan untuk menyimpan informasi hasil pencurian",
      "b": "Sistem komputer menjadi objek serangan untuk merusak data atau layanan",
      "c": "Komputer digunakan untuk menyebarkan informasi kepada publik",
      "d": "Komputer digunakan untuk mengakses layanan internet ilegal",
      "e": "Komputer digunakan sebagai media komunikasi melakukan kejahatan"
    },
    "correct_letter": "b",
    "correct_answer": "Sistem komputer menjadi objek serangan untuk merusak data atau layanan"
  },
  {
    "id": 41,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Strategi yang PALING TIDAK SESUAI dengan secure coding practice adalah ...",
    "options": {
      "a": "memilih bahasa, framework, dan library yang sesuai dan relatif aman.",
      "b": "mengembangkan ulang seluruh fitur keamanan framework agar aplikasi lebih independen.",
      "c": "memanfaatkan fitur keamanan yang telah tersedia dengan cara yang benar.",
      "d": "menggunakan automated analysis serta melakukan manual code review.",
      "e": "mendefinisikan coding standards yang digunakan oleh tim pengembang."
    },
    "correct_letter": "b",
    "correct_answer": "mengembangkan ulang seluruh fitur keamanan framework agar aplikasi lebih independen."
  },
  {
    "id": 42,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Pernyataan yang paling tepat mengenai security testing perangkat lunak adalah ...",
    "options": {
      "a": "automated testing cukup dilakukan pada tahap deployment karena vulnerability tidak dapat ditemukan saat development.",
      "b": "manual testing sebaiknya dilakukan merata pada semua modul tanpa mempertimbangkan tingkat risiko komponennya.",
      "c": "SAST dan DAST merupakan metode manual, sedangkan penetration testing merupakan automated testing.",
      "d": "automated tools dapat dilengkapi manual testing pada area berisiko serta penetration testing seperti pendekatan penyerang.",
      "e": "fuzzing dan penetration testing hanya diperlukan apabila aplikasi menggunakan third-party components."
    },
    "correct_letter": "d",
    "correct_answer": "automated tools dapat dilengkapi manual testing pada area berisiko serta penetration testing seperti pendekatan penyerang."
  },
  {
    "id": 43,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Prinsip utama yang digunakan dalam defensive programming adalah ...",
    "options": {
      "a": "setiap asumsi perlu diperiksa dan setiap kemungkinan kondisi kesalahan perlu ditangani.",
      "b": "setiap input pengguna dapat diterima selama tidak menyebabkan kegagalan aplikasi.",
      "c": "setiap mekanisme keamanan sebaiknya diserahkan kepada compiler dan sistem operasi.",
      "d": "setiap kesalahan sebaiknya dihentikan sebelum aplikasi menjalankan proses berikutnya.",
      "e": "setiap data internal dapat dipercaya selama berasal dari modul aplikasi yang sama."
    },
    "correct_letter": "a",
    "correct_answer": "setiap asumsi perlu diperiksa dan setiap kemungkinan kondisi kesalahan perlu ditangani."
  },
  {
    "id": 44,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Program menggunakan dynamically sized buffer. Ketika ukuran memori yang diminta melebihi memori yang tersedia, tindakan yang paling sesuai adalah ...",
    "options": {
      "a": "menangani kondisi tersebut secara aman, misalnya memproses blok, membuang kelebihan, atau berhenti.",
      "b": "tetap mengalokasikan memori karena sistem operasi akan menyediakan ruang tambahan secara otomatis.",
      "c": "menyalin data yang tersisa ke alamat memori berikutnya agar pemrosesan tetap dapat dilanjutkan.",
      "d": "mengulangi permintaan alokasi tanpa mengubah jumlah memori yang diminta oleh program.",
      "e": "menonaktifkan pemeriksaan kapasitas memori agar seluruh data tetap dapat diterima oleh program."
    },
    "correct_letter": "a",
    "correct_answer": "menangani kondisi tersebut secara aman, misalnya memproses blok, membuang kelebihan, atau berhenti."
  },
  {
    "id": 45,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Tujuan utama praktik secure coding adalah ...",
    "options": {
      "a": "menghilangkan kebutuhan pengujian keamanan dengan mengandalkan framework yang telah teruji sebelumnya.",
      "b": "memastikan perangkat lunak selalu menggunakan bahasa pemrograman yang mempunyai garbage collector.",
      "c": "mengurangi jumlah source code sehingga kemungkinan terdapat kesalahan pemrograman menjadi semakin kecil.",
      "d": "meminimalkan kerentanan keamanan pada level kode yang muncul akibat kesalahan tidak disengaja developer.",
      "e": "memastikan seluruh fungsi keamanan dikembangkan sendiri tanpa ketergantungan pada komponen eksternal."
    },
    "correct_letter": "d",
    "correct_answer": "meminimalkan kerentanan keamanan pada level kode yang muncul akibat kesalahan tidak disengaja developer."
  },
  {
    "id": 46,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Mengapa penggunaan compiler atau interpreter yang terpercaya merupakan perhatian dalam secure programming?",
    "options": {
      "a": "compiler terpercaya memastikan algoritma aplikasi selalu memiliki kompleksitas komputasi paling rendah.",
      "b": "compiler terpercaya menjamin seluruh data pengguna akan dienkripsi sebelum disimpan ke dalam memori.",
      "c": "compiler terpercaya membantu memastikan instruksi mesin merepresentasikan kode tanpa tambahan instruksi berbahaya.",
      "d": "compiler terpercaya memungkinkan program menjalankan seluruh operasi menggunakan hak akses administrator.",
      "e": "compiler terpercaya memastikan seluruh kesalahan logika program dapat ditemukan selama proses kompilasi."
    },
    "correct_letter": "c",
    "correct_answer": "compiler terpercaya membantu memastikan instruksi mesin merepresentasikan kode tanpa tambahan instruksi berbahaya."
  },
  {
    "id": 47,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Praktik yang paling tepat berkaitan dengan pemilihan fungsi dan runtime yang aman adalah ...",
    "options": {
      "a": "menghindari fungsi berisiko, memakai versi runtime terbaru, serta mempertahankan opsi keamanan compiler.",
      "b": "menggunakan fungsi runtime dinamis selama input telah disimpan di dalam variabel lokal program.",
      "c": "menonaktifkan secure default apabila hal tersebut menghasilkan peningkatan performa aplikasi yang signifikan.",
      "d": "menggunakan versi compiler lama apabila telah terbukti kompatibel dengan seluruh fungsi aplikasi.",
      "e": "menggunakan fungsi pembentuk kode runtime karena dapat mengurangi jumlah source code yang ditulis developer."
    },
    "correct_letter": "a",
    "correct_answer": "menghindari fungsi berisiko, memakai versi runtime terbaru, serta mempertahankan opsi keamanan compiler."
  },
  {
    "id": 48,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi menyimpan komentar dari pengguna A dan kemudian menampilkannya kepada pengguna B. Kondisi menjadi berbahaya apabila ...",
    "options": {
      "a": "komentar memiliki ukuran lebih besar daripada informasi lain yang ditampilkan pada halaman aplikasi.",
      "b": "komentar disimpan lebih lama daripada sesi pengguna yang pertama kali memasukkan data tersebut.",
      "c": "komentar berasal dari browser dengan sistem operasi yang berbeda dari browser pengguna penerima.",
      "d": "komentar disimpan dalam basis data yang digunakan bersama dengan beberapa modul aplikasi lainnya.",
      "e": "komentar berisi konten yang mengubah perilaku komponen penampil dan tidak disanitasi dengan memadai."
    },
    "correct_letter": "e",
    "correct_answer": "komentar berisi konten yang mengubah perilaku komponen penampil dan tidak disanitasi dengan memadai."
  },
  {
    "id": 49,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Mengapa framework, library, atau component sebaiknya dibuat loosely coupled dengan aplikasi?",
    "options": {
      "a": "agar validasi input hanya perlu dilakukan pada framework dan tidak perlu dilakukan aplikasi.",
      "b": "agar komponen dapat menggunakan shared memory tanpa membutuhkan mekanisme sinkronisasi tambahan.",
      "c": "agar compiler dapat mengoptimalkan seluruh komponen menjadi satu executable dengan lebih mudah.",
      "d": "agar komponen tersebut lebih mudah diganti atau diperbarui ketika perubahan diperlukan.",
      "e": "agar seluruh komponen dapat memperoleh hak akses aplikasi tanpa pengaturan tambahan."
    },
    "correct_letter": "d",
    "correct_answer": "agar komponen tersebut lebih mudah diganti atau diperbarui ketika perubahan diperlukan."
  },
  {
    "id": 50,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Bagaimana error message yang ditampilkan kepada pengguna sebaiknya dirancang?",
    "options": {
      "a": "menyembunyikan seluruh informasi kesalahan tanpa memberikan petunjuk tindakan lanjutan kepada pengguna.",
      "b": "menampilkan detail internal sebanyak mungkin agar pengguna dapat memperbaiki kesalahannya secara mandiri.",
      "c": "menampilkan stack trace secara lengkap agar sumber kesalahan dapat diketahui oleh seluruh pengguna aplikasi.",
      "d": "memberikan informasi konfigurasi aplikasi agar pengguna dapat menentukan modul yang menyebabkan kesalahan.",
      "e": "memberikan pesan umum dan tindakan yang berguna tanpa mengungkapkan banyak informasi kepada penyerang."
    },
    "correct_letter": "e",
    "correct_answer": "memberikan pesan umum dan tindakan yang berguna tanpa mengungkapkan banyak informasi kepada penyerang."
  },
  {
    "id": 51,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Defensive programming paling tepat didefinisikan sebagai proses untuk ...",
    "options": {
      "a": "mengembangkan perangkat lunak dengan mengandalkan mekanisme keamanan dari sistem operasi.",
      "b": "mengembangkan perangkat lunak dengan membatasi seluruh interaksi pengguna dengan sistem operasi.",
      "c": "mengembangkan perangkat lunak dengan mengutamakan kecepatan eksekusi pada kondisi normal.",
      "d": "merancang perangkat lunak dengan menghilangkan kebutuhan penanganan kesalahan saat runtime.",
      "e": "merancang perangkat lunak agar tetap berfungsi secara aman meskipun sedang menghadapi serangan."
    },
    "correct_letter": "e",
    "correct_answer": "merancang perangkat lunak agar tetap berfungsi secara aman meskipun sedang menghadapi serangan."
  },
  {
    "id": 52,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam keamanan output program, \"assumption of common origin\" berarti pengguna cenderung menganggap bahwa ...",
    "options": {
      "a": "seluruh output yang terlihat telah dienkripsi oleh program sebelum dikirim kepada pengguna tersebut.",
      "b": "seluruh output yang terlihat dibuat atau setidaknya telah divalidasi oleh program tersebut.",
      "c": "seluruh output yang terlihat berasal dari pengguna yang sedang berinteraksi dengan aplikasi tersebut.",
      "d": "seluruh output yang terlihat telah diperiksa secara langsung oleh sistem operasi sebelum ditampilkan.",
      "e": "seluruh output yang terlihat menggunakan sumber data yang sama dengan input pengguna tersebut."
    },
    "correct_letter": "b",
    "correct_answer": "seluruh output yang terlihat dibuat atau setidaknya telah divalidasi oleh program tersebut."
  },
  {
    "id": 53,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Input biner dari paket jaringan tetap harus divalidasi terutama karena ...",
    "options": {
      "a": "format biner tidak memungkinkan program menentukan struktur dari data yang sedang diterima.",
      "b": "paket jaringan selalu mengalami perubahan nilai setelah melewati perangkat jaringan tertentu.",
      "c": "seluruh data jaringan memiliki representasi yang berbeda pada setiap sistem operasi komputer.",
      "d": "setiap data biner harus terlebih dahulu dikonversi menjadi karakter sebelum digunakan program.",
      "e": "nilai biner dapat diinterpretasikan sebagai berbagai struktur dan harus dipastikan valid saat dibaca."
    },
    "correct_letter": "e",
    "correct_answer": "nilai biner dapat diinterpretasikan sebagai berbagai struktur dan harus dipastikan valid saat dibaca."
  },
  {
    "id": 54,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Perbedaan utama antara whitelisting dan blacklisting dalam validasi input adalah ...",
    "options": {
      "a": "whitelisting menerima input yang diketahui valid, sedangkan blacklisting menolak nilai berbahaya yang dikenal.",
      "b": "whitelisting dilakukan saat kompilasi, sedangkan blacklisting hanya dilakukan ketika program dijalankan.",
      "c": "whitelisting memeriksa ukuran input, sedangkan blacklisting memeriksa tipe data input.",
      "d": "whitelisting digunakan untuk input teks, sedangkan blacklisting digunakan untuk input berbentuk biner.",
      "e": "whitelisting diterapkan pada aplikasi lokal, sedangkan blacklisting digunakan pada aplikasi berbasis jaringan."
    },
    "correct_letter": "a",
    "correct_answer": "whitelisting menerima input yang diketahui valid, sedangkan blacklisting menolak nilai berbahaya yang dikenal."
  },
  {
    "id": 55,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Mengapa input program perlu diperlakukan sebagai sumber risiko keamanan?",
    "options": {
      "a": "karena input berasal dari luar program dan nilainya belum diketahui saat kode ditulis.",
      "b": "karena input selalu memiliki ukuran yang lebih besar daripada kapasitas buffer program.",
      "c": "karena input selalu dikirim melalui jaringan yang tidak memiliki enkripsi.",
      "d": "karena input selalu berasal dari pengguna yang tidak terautentikasi dengan benar.",
      "e": "karena input tidak dapat diproses sebelum dikonversi menjadi representasi data biner."
    },
    "correct_letter": "a",
    "correct_answer": "karena input berasal dari luar program dan nilainya belum diketahui saat kode ditulis."
  },
  {
    "id": 56,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Mengapa penggunaan compiler atau interpreter yang terpercaya merupakan perhatian dalam secure programming?",
    "options": {
      "a": "compiler terpercaya memungkinkan program menjalankan seluruh operasi menggunakan hak akses administrator.",
      "b": "compiler terpercaya memastikan algoritma aplikasi selalu memiliki kompleksitas komputasi paling rendah.",
      "c": "compiler terpercaya memastikan seluruh kesalahan logika program dapat ditemukan selama proses kompilasi.",
      "d": "compiler terpercaya membantu memastikan instruksi mesin merepresentasikan kode tanpa tambahan instruksi berbahaya.",
      "e": "compiler terpercaya menjamin seluruh data pengguna akan dienkripsi sebelum disimpan ke dalam memori."
    },
    "correct_letter": "d",
    "correct_answer": "compiler terpercaya membantu memastikan instruksi mesin merepresentasikan kode tanpa tambahan instruksi berbahaya."
  },
  {
    "id": 57,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Pernyataan yang paling tepat mengenai security testing perangkat lunak adalah ...",
    "options": {
      "a": "manual testing sebaiknya dilakukan merata pada semua modul tanpa mempertimbangkan tingkat risiko komponennya.",
      "b": "SAST dan DAST merupakan metode manual, sedangkan penetration testing merupakan automated testing.",
      "c": "automated tools dapat dilengkapi manual testing pada area berisiko serta penetration testing seperti pendekatan penyerang.",
      "d": "fuzzing dan penetration testing hanya diperlukan apabila aplikasi menggunakan third-party components.",
      "e": "automated testing cukup dilakukan pada tahap deployment karena vulnerability tidak dapat ditemukan saat development."
    },
    "correct_letter": "c",
    "correct_answer": "automated tools dapat dilengkapi manual testing pada area berisiko serta penetration testing seperti pendekatan penyerang."
  },
  {
    "id": 58,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Mengapa memberikan hak akses yang berlebihan kepada sebuah program berbahaya?",
    "options": {
      "a": "program dengan hak akses tinggi tidak dapat menjalankan mekanisme sinkronisasi terhadap sumber daya.",
      "b": "program dengan hak akses tinggi tidak dapat menggunakan mekanisme validasi input dari sistem operasi.",
      "c": "hak akses yang tinggi selalu membuat program menggunakan kapasitas memori yang lebih besar.",
      "d": "hak akses yang tinggi mengharuskan setiap input program diproses menggunakan privilege administrator.",
      "e": "bug pada program berpotensi menimbulkan kompromi terhadap bagian sistem yang lebih luas."
    },
    "correct_letter": "e",
    "correct_answer": "bug pada program berpotensi menimbulkan kompromi terhadap bagian sistem yang lebih luas."
  },
  {
    "id": 59,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Strategi yang PALING TIDAK SESUAI dengan secure coding practice adalah ...",
    "options": {
      "a": "memanfaatkan fitur keamanan yang telah tersedia dengan cara yang benar.",
      "b": "memilih bahasa, framework, dan library yang sesuai dan relatif aman.",
      "c": "menggunakan automated analysis serta melakukan manual code review.",
      "d": "mendefinisikan coding standards yang digunakan oleh tim pengembang.",
      "e": "mengembangkan ulang seluruh fitur keamanan framework agar aplikasi lebih independen."
    },
    "correct_letter": "e",
    "correct_answer": "mengembangkan ulang seluruh fitur keamanan framework agar aplikasi lebih independen."
  },
  {
    "id": 60,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Manakah pasangan isu keamanan dan sumber permasalahannya yang paling tepat?",
    "options": {
      "a": "buffer overflow — kegagalan menghapus objek yang tidak lagi digunakan dari dynamic memory.",
      "b": "race condition — pengelolaan akses beberapa proses atau thread terhadap sumber daya bersama.",
      "c": "code injection — kegagalan menentukan urutan akses thread terhadap shared memory program.",
      "d": "path traversal — kegagalan membebaskan dynamic memory setelah proses selesai dijalankan.",
      "e": "memory leak — kegagalan mengatur sinkronisasi beberapa proses pada shared memory."
    },
    "correct_letter": "b",
    "correct_answer": "race condition — pengelolaan akses beberapa proses atau thread terhadap sumber daya bersama."
  },
  {
    "id": 61,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Suatu organisasi ingin mengurangi risiko keamanan yang disebabkan oleh pustaka pihak ketiga. Pengembang diminta memiliki inventaris komponen dan memastikan kerentanan yang diketahui ditangani sesuai kebijakan. Chapter ASVS yang paling relevan adalah ....",
    "options": {
      "a": "V13 Configuration, karena seluruh pustaka eksternal harus memiliki konfigurasi berbeda untuk setiap lingkungan.",
      "b": "V15 Secure Coding and Architecture, karena pengelolaan dependencies dan komponen rentan termasuk keamanan arsitektur.",
      "c": "V14 Data Protection, karena komponen pihak ketiga terutama digunakan untuk memproses informasi yang sensitif.",
      "d": "V16 Security Logging, karena setiap penggunaan komponen eksternal harus dicatat sebagai kejadian keamanan.",
      "e": "V11 Cryptography, karena seluruh pustaka eksternal harus menggunakan fungsi kriptografi yang telah disetujui."
    },
    "correct_letter": "b",
    "correct_answer": "V15 Secure Coding and Architecture, karena pengelolaan dependencies dan komponen rentan termasuk keamanan arsitektur."
  },
  {
    "id": 62,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mobile menampilkan OTP dalam notifikasi dan informasi tersebut masih dapat dilihat ketika perangkat terkunci. Kontrol MASVS yang paling langsung menangani masalah ini adalah ....",
    "options": {
      "a": "MASVS-STORAGE-2, karena OTP dapat tersimpan secara tidak sengaja pada lokasi penyimpanan yang dapat diakses.",
      "b": "MASVS-CODE-4, karena OTP merupakan masukan pengguna yang harus divalidasi sebelum dilakukan pemrosesan.",
      "c": "MASVS-PRIVACY-3, karena pengguna harus mengetahui bagaimana informasi OTP dikumpulkan dan digunakan aplikasi.",
      "d": "MASVS-PLATFORM-3, karena antarmuka pengguna harus mencegah pengungkapan informasi sensitif secara tidak sengaja.",
      "e": "MASVS-AUTH-3, karena setiap OTP harus dilengkapi mekanisme autentikasi tambahan sebelum digunakan pengguna."
    },
    "correct_letter": "d",
    "correct_answer": "MASVS-PLATFORM-3, karena antarmuka pengguna harus mencegah pengungkapan informasi sensitif secara tidak sengaja."
  },
  {
    "id": 63,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Pada suatu aplikasi, pengguna dapat mengirimkan atribut isAdmin=true melalui API ketika memperbarui profil. Atribut tersebut kemudian tersimpan karena seluruh field input langsung diikat ke objek database. Risiko ini paling sesuai dicegah dengan ....",
    "options": {
      "a": "Menambahkan logging pada pembaruan profil agar semua perubahan data dapat ditelusuri oleh administrator.",
      "b": "Menambahkan timeout sesi pengguna agar perubahan profil hanya berlangsung dalam waktu yang ditentukan.",
      "c": "Membatasi field yang dapat diperbarui pada setiap operasi agar atribut sensitif tidak dapat dimodifikasi.",
      "d": "Mengenkripsi seluruh respons profil agar atribut sensitif tidak dapat dibaca oleh pengguna lain.",
      "e": "Membatasi panjang input profil agar nilai yang dikirim tidak melebihi batas ukuran field database."
    },
    "correct_letter": "c",
    "correct_answer": "Membatasi field yang dapat diperbarui pada setiap operasi agar atribut sensitif tidak dapat dimodifikasi."
  },
  {
    "id": 64,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi web menggunakan HTTPS, tetapi mengizinkan penggunaan algoritma kriptografi yang lemah untuk melindungi informasi sensitif. Kategori OWASP Top 10:2025 yang paling tepat adalah ....",
    "options": {
      "a": "Cryptographic Failures, karena mekanisme perlindungan data menggunakan algoritma yang tidak cukup kuat.",
      "b": "Insecure Design, karena aplikasi tidak membedakan tingkat sensitivitas setiap informasi yang dikirimkan.",
      "c": "Security Misconfiguration, karena konfigurasi server masih mengaktifkan beberapa pilihan protokol komunikasi.",
      "d": "Authentication Failures, karena identitas server belum diverifikasi melalui mekanisme autentikasi pengguna.",
      "e": "Software Integrity Failures, karena integritas komponen kriptografi tidak dipastikan sebelum aplikasi dijalankan."
    },
    "correct_letter": "a",
    "correct_answer": "Cryptographic Failures, karena mekanisme perlindungan data menggunakan algoritma yang tidak cukup kuat."
  },
  {
    "id": 65,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah organisasi telah mengimplementasikan kontrol keamanan berdasarkan OWASP ASVS, tetapi belum dapat membuktikan apakah kontrol tersebut bekerja dengan benar. Prinsip ASVS yang belum terpenuhi adalah ....",
    "options": {
      "a": "Security, karena setiap mekanisme keamanan harus menggunakan teknologi yang sama di seluruh aplikasi.",
      "b": "Authentication, karena setiap aktivitas pengujian harus dijalankan melalui identitas pengguna yang terdaftar.",
      "c": "Standard, karena setiap implementasi keamanan harus mengikuti satu metode teknis yang telah ditentukan.",
      "d": "Verification, karena setiap persyaratan harus dapat diperiksa dan menghasilkan keputusan lulus atau gagal.",
      "e": "Application, karena setiap komponen perangkat lunak harus ditempatkan dalam lingkungan operasional khusus."
    },
    "correct_letter": "d",
    "correct_answer": "Verification, karena setiap persyaratan harus dapat diperiksa dan menghasilkan keputusan lulus atau gagal."
  },
  {
    "id": 66,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi memiliki endpoint API yang menerima ID objek dari pengguna. Pengujian menemukan bahwa endpoint tersebut mengembalikan data tanpa memeriksa apakah objek benarbenar menjadi hak pengguna. Chapter ASVS yang paling relevan adalah ....",
    "options": {
      "a": "V2 Validation and Business Logic, karena nilai ID yang digunakan berasal dari input pengguna.",
      "b": "V8 Authorization, karena hak pengguna terhadap objek harus diperiksa sebelum data dapat diakses.",
      "c": "V6 Authentication, karena pengguna harus login sebelum diperbolehkan mengirimkan permintaan API.",
      "d": "V4 API and Web Service, karena endpoint mengirimkan respons menggunakan protokol HTTP.",
      "e": "V9 Self-contained Tokens, karena autentikasi endpoint dapat dilakukan melalui token yang diverifikasi."
    },
    "correct_letter": "b",
    "correct_answer": "V8 Authorization, karena hak pengguna terhadap objek harus diperiksa sebelum data dapat diakses."
  },
  {
    "id": 67,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah organisasi menyatakan aplikasi telah memenuhi ASVS Level 2. Pernyataan yang paling tepat mengenai cakupan persyaratannya adalah ....",
    "options": {
      "a": "Aplikasi harus memenuhi seluruh persyaratan L3 terlebih dahulu sebelum dapat dinilai pada tingkat L2.",
      "b": "Aplikasi harus menerapkan mekanisme keamanan L2 saja karena kontrol L1 hanya bersifat rekomendasi.",
      "c": "Aplikasi cukup menjalankan pengujian black-box terhadap kontrol yang dianggap paling mudah diperiksa.",
      "d": "Aplikasi cukup memenuhi seluruh persyaratan L2 tanpa perlu memenuhi persyaratan keamanan pada L1.",
      "e": "Aplikasi harus memenuhi persyaratan L1 dan L2 yang berlaku, termasuk perlindungan dasar dan lanjutan."
    },
    "correct_letter": "e",
    "correct_answer": "Aplikasi harus memenuhi persyaratan L1 dan L2 yang berlaku, termasuk perlindungan dasar dan lanjutan."
  },
  {
    "id": 68,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mobile dapat dimodifikasi oleh penyerang untuk mengaktifkan fitur berbayar tanpa melakukan pembayaran. Tim keamanan ingin meningkatkan ketahanan aplikasi terhadap modifikasi tersebut. Kontrol yang paling relevan adalah ....",
    "options": {
      "a": "MASVS-RESILIENCE-1, karena aplikasi perlu memeriksa apakah sistem operasi perangkat telah dimodifikasi.",
      "b": "MASVS-CODE-3, karena aplikasi perlu memastikan pustaka yang digunakan tidak memiliki kerentanan yang diketahui.",
      "c": "MASVS-RESILIENCE-2, karena aplikasi perlu meningkatkan perlindungan terhadap perubahan kode dan sumber daya.",
      "d": "MASVS-RESILIENCE-4, karena aplikasi perlu membatasi pengamatan perilaku aplikasi ketika proses sedang berjalan.",
      "e": "MASVS-RESILIENCE-3, karena aplikasi perlu mempersulit pemahaman struktur kode melalui analisis statis."
    },
    "correct_letter": "c",
    "correct_answer": "MASVS-RESILIENCE-2, karena aplikasi perlu meningkatkan perlindungan terhadap perubahan kode dan sumber daya."
  },
  {
    "id": 69,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam implementasi ASVS, suatu organisasi telah menentukan level keamanan, tetapi setiap tim pengembang menerapkan kebijakan validasi dan kontrol akses yang berbeda. Langkah yang paling tepat adalah ....",
    "options": {
      "a": "Melakukan pengujian penetrasi pada setiap modul sebelum organisasi menyepakati mekanisme keamanan yang digunakan.",
      "b": "Menghapus persyaratan yang sulit diterapkan agar masing-masing tim dapat menentukan kebijakan keamanan sendiri.",
      "c": "Meningkatkan seluruh persyaratan ke Level 3 agar setiap tim wajib menggunakan kontrol yang lebih ketat.",
      "d": "Mendokumentasikan keputusan keamanan organisasi agar implementasi kontrol konsisten dan dapat diverifikasi.",
      "e": "Memindahkan seluruh pengendalian keamanan ke firewall agar aplikasi tidak perlu menerapkan kebijakan internal."
    },
    "correct_letter": "d",
    "correct_answer": "Mendokumentasikan keputusan keamanan organisasi agar implementasi kontrol konsisten dan dapat diverifikasi."
  },
  {
    "id": 70,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah bank mengembangkan layanan perbankan online yang menangani data keuangan sangat sensitif. Organisasi ingin menerapkan perlindungan berlapis dan tingkat assurance yang tinggi. Level ASVS yang paling tepat dipertimbangkan adalah ....",
    "options": {
      "a": "Level 2, karena kontrol tingkat lanjutan tidak diperlukan apabila sistem memiliki sertifikat digital.",
      "b": "Level 1, karena penerapan autentikasi pengguna sudah mencakup sebagian besar kebutuhan keamanan perbankan.",
      "c": "Level 1, karena layanan perbankan membutuhkan kontrol dasar yang dapat diterapkan secara cepat.",
      "d": "Level 3, karena aplikasi berisiko tinggi membutuhkan kontrol lanjutan dan mekanisme defense-in-depth.",
      "e": "Level 2, karena layanan keuangan cukup dilindungi oleh persyaratan yang berlaku bagi aplikasi umum."
    },
    "correct_letter": "d",
    "correct_answer": "Level 3, karena aplikasi berisiko tinggi membutuhkan kontrol lanjutan dan mekanisme defense-in-depth."
  },
  {
    "id": 71,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Pengembang menerapkan pembatasan waktu sesi ketika pengguna tidak aktif. Kontrol tersebut bertujuan mengurangi kemungkinan penyalahgunaan sesi yang masih berlaku. Chapter ASVS yang paling sesuai adalah ....",
    "options": {
      "a": "V9 Self-contained Tokens, karena semua sesi harus disimpan sebagai token mandiri yang ditandatangani.",
      "b": "V8 Authorization, karena seluruh sesi ditentukan berdasarkan hak akses setiap pengguna aplikasi.",
      "c": "V10 OAuth and OIDC, karena seluruh aplikasi harus menggunakan sistem federasi untuk mengelola sesi.",
      "d": "V7 Session Management, karena pengaturan timeout merupakan bagian dari pengendalian siklus hidup sesi.",
      "e": "V6 Authentication, karena pengelolaan sesi merupakan bagian dari verifikasi identitas saat login."
    },
    "correct_letter": "d",
    "correct_answer": "V7 Session Management, karena pengaturan timeout merupakan bagian dari pengendalian siklus hidup sesi."
  },
  {
    "id": 72,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah sistem menerima permintaan transaksi dengan memeriksa saldo terlebih dahulu, kemudian mengurangi saldo dalam operasi terpisah. Dua permintaan bersamaan dapat melewati pemeriksaan sebelum saldo diperbarui. Prinsip keamanan yang paling tepat diterapkan adalah ....",
    "options": {
      "a": "Menggunakan pencatatan audit untuk setiap transaksi agar selisih saldo dapat ditemukan setelah proses selesai.",
      "b": "Menggunakan operasi atomik agar pemeriksaan kondisi dan perubahan saldo tidak dapat disela transaksi lain.",
      "c": "Menggunakan validasi format saldo sebelum transaksi diproses agar nilai numerik tidak berubah saat dikirim.",
      "d": "Menggunakan enkripsi database saat transaksi berlangsung agar informasi saldo terlindungi dari akses pengguna.",
      "e": "Menggunakan autentikasi tambahan sebelum transaksi dimulai agar hanya pengguna sah yang dapat menjalankannya."
    },
    "correct_letter": "b",
    "correct_answer": "Menggunakan operasi atomik agar pemeriksaan kondisi dan perubahan saldo tidak dapat disela transaksi lain."
  },
  {
    "id": 73,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Tim keamanan menemukan sebuah aplikasi memiliki rancangan proses bisnis yang memungkinkan transaksi penting dilewati tanpa pemeriksaan yang semestinya. Meskipun tidak ditemukan kesalahan sintaks pemrograman, kondisi tersebut termasuk ....",
    "options": {
      "a": "Insecure Design, karena rancangan alur bisnis tidak memasukkan pengendalian keamanan yang diperlukan.",
      "b": "Cryptographic Failures, karena informasi transaksi tidak menggunakan algoritma kriptografi yang memadai.",
      "c": "Security Misconfiguration, karena aturan transaksi tidak dicatat dalam konfigurasi server aplikasi.",
      "d": "Authentication Failures, karena proses bisnis tidak melakukan autentikasi ulang pada seluruh aktivitas.",
      "e": "Injection, karena proses bisnis menerima masukan pengguna tanpa menggunakan parameterisasi yang sesuai."
    },
    "correct_letter": "a",
    "correct_answer": "Insecure Design, karena rancangan alur bisnis tidak memasukkan pengendalian keamanan yang diperlukan."
  },
  {
    "id": 74,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mobile menyimpan token akses pada lokasi penyimpanan publik sehingga aplikasi lain dapat membacanya. Kontrol MASVS yang paling tepat digunakan sebagai acuan adalah ....",
    "options": {
      "a": "MASVS-STORAGE-1, karena informasi sensitif yang disimpan pada perangkat harus mendapat perlindungan memadai.",
      "b": "MASVS-CODE-3, karena pustaka pihak ketiga mungkin memiliki kerentanan dalam mengelola token akses.",
      "c": "MASVS-AUTH-1, karena token akses merupakan bagian dari mekanisme autentikasi dan otorisasi pengguna.",
      "d": "MASVS-PLATFORM-2, karena token akses dapat digunakan oleh aplikasi yang memiliki komponen WebView.",
      "e": "MASVS-NETWORK-1, karena token akses dikirim ke layanan remote melalui jaringan yang perlu diamankan."
    },
    "correct_letter": "a",
    "correct_answer": "MASVS-STORAGE-1, karena informasi sensitif yang disimpan pada perangkat harus mendapat perlindungan memadai."
  },
  {
    "id": 75,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mobile tidak memiliki mekanisme untuk mewajibkan pengguna memasang pembaruan meskipun versi lama mengandung kerentanan kritis. Kontrol MASVS yang paling relevan adalah ....",
    "options": {
      "a": "MASVS-PLATFORM-1, karena aplikasi harus mengatur mekanisme komunikasi dengan komponen sistem operasi secara aman.",
      "b": "MASVS-CODE-2, karena aplikasi harus memiliki mekanisme untuk mewajibkan pembaruan ketika dibutuhkan. \n\n -",
      "c": "MASVS-CODE-1, karena aplikasi harus berjalan pada versi sistem operasi yang menyediakan pembaruan keamanan.",
      "d": "MASVS-CODE-3, karena aplikasi harus menggunakan komponen perangkat lunak tanpa kerentanan yang diketahui.",
      "e": "MASVS-RESILIENCE-2, karena aplikasi harus mampu mendeteksi modifikasi kode dan sumber daya secara tidak sah."
    },
    "correct_letter": "b",
    "correct_answer": "MASVS-CODE-2, karena aplikasi harus memiliki mekanisme untuk mewajibkan pembaruan ketika dibutuhkan."
  },
  {
    "id": 76,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Tim pengembang menggunakan pustaka perangkat lunak dari repositori eksternal. Salah satu pustaka ternyata telah disusupi kode berbahaya sebelum didistribusikan. Kategori risiko OWASP Top 10:2025 yang paling tepat adalah ....",
    "options": {
      "a": "Cryptographic Failures, karena mekanisme enkripsi tidak melindungi pustaka dari perubahan kode.",
      "b": "Insecure Design, karena arsitektur aplikasi masih bergantung pada pustaka dari pihak ketiga.",
      "c": "Security Misconfiguration, karena konfigurasi pustaka tidak dibatasi pada lingkungan pengembangan tertentu.",
      "d": "Software or Data Integrity Failures, karena perubahan data aplikasi tidak diperiksa sebelum diproses.",
      "e": "Software Supply Chain Failures, karena komponen eksternal yang digunakan berasal dari rantai pasok terkompromi."
    },
    "correct_letter": "e",
    "correct_answer": "Software Supply Chain Failures, karena komponen eksternal yang digunakan berasal dari rantai pasok terkompromi."
  },
  {
    "id": 77,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi web memungkinkan pengguna mengakses data milik pengguna lain dengan mengubah parameter ID pada URL, meskipun pengguna tersebut telah login menggunakan akun yang valid. Kategori OWASP Top 10:2025 yang paling sesuai adalah ....",
    "options": {
      "a": "Authentication Failures, karena proses login tidak membedakan identitas pengguna secara memadai.",
      "b": "Software Integrity Failures, karena nilai parameter permintaan dapat dimodifikasi oleh pengguna.",
      "c": "Security Misconfiguration, karena parameter URL masih dapat diubah secara langsung oleh pengguna.",
      "d": "Insecure Design, karena aplikasi menggunakan mekanisme identifikasi objek melalui parameter URL.",
      "e": "Broken Access Control, karena pembatasan akses terhadap objek milik pengguna lain tidak diterapkan."
    },
    "correct_letter": "e",
    "correct_answer": "Broken Access Control, karena pembatasan akses terhadap objek milik pengguna lain tidak diterapkan."
  },
  {
    "id": 78,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah bank mengembangkan layanan perbankan online yang menangani data keuangan sangat sensitif. Organisasi ingin menerapkan perlindungan berlapis dan tingkat assurance yang tinggi. Level ASVS yang paling tepat dipertimbangkan adalah ....",
    "options": {
      "a": "Level 1, karena layanan perbankan membutuhkan kontrol dasar yang dapat diterapkan secara cepat.",
      "b": "Level 2, karena kontrol tingkat lanjutan tidak diperlukan apabila sistem memiliki sertifikat digital.",
      "c": "Level 1, karena penerapan autentikasi pengguna sudah mencakup sebagian besar kebutuhan keamanan perbankan.",
      "d": "Level 3, karena aplikasi berisiko tinggi membutuhkan kontrol lanjutan dan mekanisme defense-in-depth.",
      "e": "Level 2, karena layanan keuangan cukup dilindungi oleh persyaratan yang berlaku bagi aplikasi umum."
    },
    "correct_letter": "d",
    "correct_answer": "Level 3, karena aplikasi berisiko tinggi membutuhkan kontrol lanjutan dan mekanisme defense-in-depth."
  },
  {
    "id": 79,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perangkat IoT kecil di sistem smart home tidak menyimpan informasi sensitif dan kompromi perangkat tidak memungkinkan penyerang berpindah ke sistem lain. Organisasi terutama ingin melindunginya dari serangan berbasis perangkat lunak. Level ISVS yang paling sesuai adalah ....",
    "options": {
      "a": "Level 3, karena seluruh perangkat terkoneksi harus memiliki perlindungan terhadap reverse engineering tingkat lanjut.",
      "b": "Level 2, karena semua perangkat IoT memerlukan perlindungan terhadap akses fisik meskipun tidak menyimpan data.",
      "c": "Level 2, karena perangkat yang terhubung ke cloud selalu menyimpan informasi sensitif yang membutuhkan perlindungan.",
      "d": "Level 3, karena seluruh perangkat IoT harus menggunakan pengamanan hardware paling ketat sejak tahap perancangan.",
      "e": "Level 1, karena fokusnya adalah serangan berbasis perangkat lunak tanpa kebutuhan perlindungan fisik tingkat tinggi."
    },
    "correct_letter": "e",
    "correct_answer": "Level 1, karena fokusnya adalah serangan berbasis perangkat lunak tanpa kebutuhan perlindungan fisik tingkat tinggi."
  },
  {
    "id": 80,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi menangkap exception dari sistem database, tetapi menampilkan pesan kesalahan yang mengandung struktur query dan informasi internal server kepada pengguna. Kategori OWASP Top 10:2025 yang paling relevan adalah ....",
    "options": {
      "a": "Mishandling of Exceptional Conditions, karena penanganan kegagalan membocorkan informasi internal sistem.",
      "b": "Injection, karena struktur query database muncul dalam respons yang diterima pengguna aplikasi.",
      "c": "Security Logging Failures, karena informasi kesalahan tidak disimpan secara terpisah pada sistem pencatatan.",
      "d": "Insecure Design, karena rancangan aplikasi belum memisahkan pengolahan data dan tampilan pengguna.",
      "e": "Security Misconfiguration, karena konfigurasi koneksi database memungkinkan pesan teknis ditampilkan."
    },
    "correct_letter": "a",
    "correct_answer": "Mishandling of Exceptional Conditions, karena penanganan kegagalan membocorkan informasi internal sistem."
  },
  {
    "id": 81,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Penyerang berencana menggunakan brute-force attack terhadap algoritma symmetric encryption dengan panjang kunci 128 bit. Jika setiap kemungkinan kunci memiliki peluang yang sama, ratarata jumlah percobaan untuk menemukan kunci yang benar adalah ...",
    "options": {
      "a": "Sekitar 128^2 percobaan, karena kompleksitas pencarian meningkat secara kuadratik.",
      "b": "Sekitar 128x2 percobaan, karena setiap bit mempunyai dua kemungkinan.",
      "c": "Sekitar 2^128 percobaan, karena seluruh ruang kunci harus selalu diperiksa.",
      "d": "Sekitar 2^127 percobaan, karena rata-rata setengah ruang kunci perlu diperiksa.",
      "e": "Sekitar 2^64 percobaan, karena panjang kunci efektif menjadi setengahnya."
    },
    "correct_letter": "d",
    "correct_answer": "Sekitar 2^127 percobaan, karena rata-rata setengah ruang kunci perlu diperiksa."
  },
  {
    "id": 82,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perusahaan mengembangkan algoritma enkripsi sendiri dan merahasiakan seluruh mekanisme internalnya. Keamanan sistem tersebut sangat bergantung pada ketidaktahuan penyerang terhadap desain algoritma. Berdasarkan Kerckhoffs's Principle, kelemahan utama pendekatan tersebut adalah ...",
    "options": {
      "a": "Keamanan sistem bergantung pada frekuensi perubahan algoritma selama penggunaannya.",
      "b": "Keamanan sistem ditentukan oleh kompleksitas perangkat lunak yang menjalankan algoritma.",
      "c": "Keamanan sistem bergantung pada ukuran data yang diproses selama proses enkripsi.",
      "d": "Keamanan sistem ditentukan oleh jumlah pengguna yang mengetahui cara kerja algoritma.",
      "e": "Keamanan sistem bergantung pada kerahasiaan desain, bukan terutama pada perlindungan kunci."
    },
    "correct_letter": "e",
    "correct_answer": "Keamanan sistem bergantung pada kerahasiaan desain, bukan terutama pada perlindungan kunci."
  },
  {
    "id": 83,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Seorang mahasiswa membandingkan struktur internal DES dan AES. Berdasarkan prinsip perancangan algoritmanya, perbedaan utama antara keduanya adalah ...",
    "options": {
      "a": "DES menggunakan substitution–permutation network, sedangkan AES menggunakan Feistel network.",
      "b": "DES menggunakan variasi Feistel network, sedangkan AES menggunakan substitution–permutation network.",
      "c": "DES menggunakan stream cipher, sedangkan AES menggunakan block cipher dengan banyak putaran.",
      "d": "DES menggunakan operasi hash berulang, sedangkan AES menggunakan algoritma pembangkitan kunci.",
      "e": "DES menggunakan enkripsi asimetris, sedangkan AES menggunakan enkripsi simetris berbasis blok."
    },
    "correct_letter": "b",
    "correct_answer": "DES menggunakan variasi Feistel network, sedangkan AES menggunakan substitution–permutation network."
  },
  {
    "id": 84,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dua pihak menggunakan symmetric encryption untuk mengamankan komunikasi melalui jaringan publik. Agar komunikasi tersebut tetap terlindungi, dua persyaratan utama yang harus dipenuhi adalah ...",
    "options": {
      "a": "Algoritma harus menggunakan banyak putaran dan plaintext harus disembunyikan dari penerima.",
      "b": "Algoritma harus dirahasiakan dan ciphertext harus dikirimkan melalui saluran khusus.",
      "c": "Algoritma harus bersifat publik dan setiap pengguna harus memiliki pasangan kunci berbeda.",
      "d": "Algoritma harus kuat dan kunci rahasia harus didistribusikan serta disimpan secara aman.",
      "e": "Algoritma harus menggunakan blok tetap dan setiap pesan harus memiliki kunci berbeda."
    },
    "correct_letter": "d",
    "correct_answer": "Algoritma harus kuat dan kunci rahasia harus didistribusikan serta disimpan secara aman."
  },
  {
    "id": 85,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perusahaan menemukan bahwa kunci enkripsi untuk komunikasi tertentu telah diketahui penyerang. Sebelumnya perusahaan menggunakan kunci tersebut dalam waktu lama untuk banyak transaksi. Strategi yang paling tepat untuk membatasi dampak kompromi serupa adalah ...",
    "options": {
      "a": "Memperbesar ukuran plaintext sehingga penyerang kesulitan mengenali isi setiap transaksi.",
      "b": "Menerapkan pergantian kunci berkala untuk membatasi jumlah data yang dilindungi satu kunci.",
      "c": "Mengurangi frekuensi distribusi kunci agar jumlah proses pertukaran kunci semakin sedikit.",
      "d": "Merahasiakan kembali algoritma enkripsi sehingga ciphertext lama tidak dapat dianalisis.",
      "e": "Menggunakan satu kunci perusahaan secara konsisten untuk mempermudah proses audit keamanan."
    },
    "correct_letter": "b",
    "correct_answer": "Menerapkan pergantian kunci berkala untuk membatasi jumlah data yang dilindungi satu kunci."
  },
  {
    "id": 86,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dua organisasi ingin menggunakan symmetric encryption untuk komunikasi rahasia. Mereka belum pernah berbagi kunci sebelumnya dan tidak memiliki koneksi aman ke pihak ketiga. Permasalahan utama yang harus diselesaikan sebelum komunikasi berlangsung adalah ...",
    "options": {
      "a": "Memastikan algoritma enkripsi hanya diketahui oleh dua organisasi tersebut.",
      "b": "Memastikan ukuran plaintext selalu sama dengan panjang kunci yang digunakan.",
      "c": "Memastikan kedua organisasi memperoleh kunci rahasia melalui mekanisme yang aman.",
      "d": "Memastikan ciphertext tidak dapat dikirim melalui jaringan yang bersifat publik.",
      "e": "Memastikan setiap ciphertext memiliki panjang berbeda meskipun plaintext sama."
    },
    "correct_letter": "c",
    "correct_answer": "Memastikan kedua organisasi memperoleh kunci rahasia melalui mekanisme yang aman."
  },
  {
    "id": 87,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Alice dan Bob berbagi kunci rahasia untuk menghitung Message Authentication Code (MAC). Bob menerima pesan beserta MAC, kemudian menghitung kembali MAC menggunakan kunci yang sama. Jika hasil perhitungan sesuai dengan MAC yang diterima, kesimpulan yang paling tepat adalah ...",
    "options": {
      "a": "Pesan dipastikan berasal dari Alice secara eksklusif meskipun Bob mengetahui kunci yang sama.",
      "b": "Pesan dipastikan rahasia dari pihak ketiga karena MAC mengenkripsi seluruh isi pesan.",
      "c": "Pesan dinyatakan konsisten dengan MAC dan kunci bersama, sehingga perubahan pesan dapat dideteksi.",
      "d": "Pesan dipastikan tidak dapat disalin karena MAC membatasi jumlah penggunaan sebuah pesan.",
      "e": "Pesan dipastikan belum pernah dikirim sebelumnya karena setiap MAC selalu bersifat unik."
    },
    "correct_letter": "c",
    "correct_answer": "Pesan dinyatakan konsisten dengan MAC dan kunci bersama, sehingga perubahan pesan dapat dideteksi."
  },
  {
    "id": 88,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mengenkripsi gambar menggunakan AES dalam mode ECB. Setelah dienkripsi, sebagian pola visual gambar masih dapat dikenali. Penyebab utama kondisi tersebut adalah ...",
    "options": {
      "a": "ECB mengenkripsi setiap blok secara independen sehingga plaintext identik menghasilkan ciphertext identik.",
      "b": "ECB menggunakan ciphertext sebelumnya sebagai masukan sehingga pola blok saling memengaruhi.",
      "c": "ECB menggunakan initialization vector yang identik untuk seluruh blok dalam satu pesan.",
      "d": "ECB menghasilkan ciphertext dengan panjang lebih pendek sehingga sebagian pola plaintext tetap terlihat.",
      "e": "ECB mengenkripsi blok menggunakan counter berulang sehingga seluruh blok memiliki pola yang sama."
    },
    "correct_letter": "a",
    "correct_answer": "ECB mengenkripsi setiap blok secara independen sehingga plaintext identik menghasilkan ciphertext identik."
  },
  {
    "id": 89,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Seorang penyerang mengetahui nilai hash h dari suatu data, tetapi tidak mengetahui data asli x. Penyerang berusaha mencari sebuah input yang menghasilkan hash yang sama dengan h. Sifat keamanan hash yang secara khusus mempersulit serangan tersebut adalah ...",
    "options": {
      "a": "Fixed-length output, karena penyerang harus mencari pesan yang mempunyai panjang tetap.",
      "b": "Collision resistance, karena penyerang harus mencari dua pesan baru dengan hash identik.",
      "c": "Deterministic hashing, karena penyerang harus mencari hasil berbeda untuk input yang sama.",
      "d": "Preimage resistance, karena penyerang harus mencari input berdasarkan nilai hash yang diketahui.",
      "e": "Second-preimage resistance, karena penyerang harus mencari pesan kedua dari pesan yang diketahui."
    },
    "correct_letter": "d",
    "correct_answer": "Preimage resistance, karena penyerang harus mencari input berdasarkan nilai hash yang diketahui."
  },
  {
    "id": 90,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mengenkripsi file menggunakan algoritma block cipher dengan ukuran blok 128 bit. File tersebut memiliki ukuran yang lebih besar daripada satu blok. Pernyataan yang paling tepat mengenai proses enkripsi adalah ...",
    "options": {
      "a": "File dipisahkan menjadi beberapa bagian berdasarkan panjang kunci yang digunakan algoritma.",
      "b": "File dikonversi menjadi nilai hash tetap sebelum setiap blok diproses oleh algoritma.",
      "c": "Seluruh file diproses sekaligus sehingga ukuran blok tidak memengaruhi proses enkripsi.",
      "d": "File dipisahkan menjadi beberapa blok berukuran tetap sebelum diproses menggunakan mode operasi.",
      "e": "File diproses per karakter menggunakan operasi XOR tanpa memerlukan pembagian blok."
    },
    "correct_letter": "d",
    "correct_answer": "File dipisahkan menjadi beberapa blok berukuran tetap sebelum diproses menggunakan mode operasi."
  },
  {
    "id": 91,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perangkat mengirimkan data secara bertahap dalam unit-unit kecil. Mode operasi yang digunakan memanfaatkan ciphertext sebelumnya sebagai masukan algoritma enkripsi untuk menghasilkan output yang kemudian di-XOR dengan plaintext. Mode yang paling sesuai adalah ...",
    "options": {
      "a": "CBC, karena ciphertext sebelumnya digabungkan langsung dengan plaintext setiap blok.",
      "b": "ECB, karena ciphertext sebelumnya menentukan hasil enkripsi pada setiap unit berikutnya.",
      "c": "CFB, karena ciphertext sebelumnya menjadi masukan untuk menghasilkan output pseudorandom.",
      "d": "CTR, karena ciphertext sebelumnya digunakan untuk menentukan nilai counter berikutnya.",
      "e": "OFB, karena ciphertext sebelumnya digunakan untuk membentuk keluaran enkripsi berikutnya."
    },
    "correct_letter": "c",
    "correct_answer": "CFB, karena ciphertext sebelumnya menjadi masukan untuk menghasilkan output pseudorandom."
  },
  {
    "id": 92,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mengenkripsi gambar menggunakan AES dalam mode ECB. Setelah dienkripsi, sebagian pola visual gambar masih dapat dikenali. Penyebab utama kondisi tersebut adalah ...",
    "options": {
      "a": "ECB menghasilkan ciphertext dengan panjang lebih pendek sehingga sebagian pola plaintext tetap terlihat.",
      "b": "ECB menggunakan initialization vector yang identik untuk seluruh blok dalam satu pesan.",
      "c": "ECB mengenkripsi setiap blok secara independen sehingga plaintext identik menghasilkan ciphertext identik.",
      "d": "ECB menggunakan ciphertext sebelumnya sebagai masukan sehingga pola blok saling memengaruhi.",
      "e": "ECB mengenkripsi blok menggunakan counter berulang sehingga seluruh blok memiliki pola yang sama."
    },
    "correct_letter": "c",
    "correct_answer": "ECB mengenkripsi setiap blok secara independen sehingga plaintext identik menghasilkan ciphertext identik."
  },
  {
    "id": 93,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi komunikasi real-time mempertimbangkan penggunaan stream cipher daripada block cipher. Karakteristik utama stream cipher yang membedakannya dari block cipher adalah ...",
    "options": {
      "a": "Memproses plaintext menggunakan dua kunci berbeda untuk setiap elemen yang dikirimkan.",
      "b": "Memproses plaintext dalam blok tetap dan menghasilkan output setelah seluruh blok tersedia.",
      "c": "Memproses elemen plaintext secara berkelanjutan dan menghasilkan output per elemen.",
      "d": "Memproses plaintext menjadi hash tetap sebelum menghasilkan ciphertext secara bertahap.",
      "e": "Memproses seluruh plaintext sebagai satu blok besar sebelum menghasilkan ciphertext."
    },
    "correct_letter": "c",
    "correct_answer": "Memproses elemen plaintext secara berkelanjutan dan menghasilkan output per elemen."
  },
  {
    "id": 94,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mengenkripsi file menggunakan algoritma block cipher dengan ukuran blok 128 bit. File tersebut memiliki ukuran yang lebih besar daripada satu blok. Pernyataan yang paling tepat mengenai proses enkripsi adalah ...",
    "options": {
      "a": "File dipisahkan menjadi beberapa blok berukuran tetap sebelum diproses menggunakan mode operasi.",
      "b": "File diproses per karakter menggunakan operasi XOR tanpa memerlukan pembagian blok.",
      "c": "File dipisahkan menjadi beberapa bagian berdasarkan panjang kunci yang digunakan algoritma.",
      "d": "Seluruh file diproses sekaligus sehingga ukuran blok tidak memengaruhi proses enkripsi.",
      "e": "File dikonversi menjadi nilai hash tetap sebelum setiap blok diproses oleh algoritma."
    },
    "correct_letter": "a",
    "correct_answer": "File dipisahkan menjadi beberapa blok berukuran tetap sebelum diproses menggunakan mode operasi."
  },
  {
    "id": 95,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perusahaan menemukan bahwa kunci enkripsi untuk komunikasi tertentu telah diketahui penyerang. Sebelumnya perusahaan menggunakan kunci tersebut dalam waktu lama untuk banyak transaksi. Strategi yang paling tepat untuk membatasi dampak kompromi serupa adalah ...",
    "options": {
      "a": "Mengurangi frekuensi distribusi kunci agar jumlah proses pertukaran kunci semakin sedikit.",
      "b": "Merahasiakan kembali algoritma enkripsi sehingga ciphertext lama tidak dapat dianalisis.",
      "c": "Menggunakan satu kunci perusahaan secara konsisten untuk mempermudah proses audit keamanan.",
      "d": "Memperbesar ukuran plaintext sehingga penyerang kesulitan mengenali isi setiap transaksi.",
      "e": "Menerapkan pergantian kunci berkala untuk membatasi jumlah data yang dilindungi satu kunci."
    },
    "correct_letter": "e",
    "correct_answer": "Menerapkan pergantian kunci berkala untuk membatasi jumlah data yang dilindungi satu kunci."
  },
  {
    "id": 96,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perangkat embedded tidak memiliki akselerasi AES berbasis perangkat keras dan membutuhkan mekanisme enkripsi yang sekaligus menyediakan autentikasi serta integritas data. Dari alternatif pengganti RC4 yang dibahas, pilihan yang paling sesuai adalah ...",
    "options": {
      "a": "RC4-HMAC, karena mempertahankan stream cipher lama dengan integritas tambahan.",
      "b": "DES-CBC, karena mempunyai kebutuhan komputasi rendah dan mendukung autentikasi pesan.",
      "c": "AES-ECB, karena tidak menggunakan mekanisme chaining sehingga pemrosesannya sederhana.",
      "d": "AES-XTS, karena dirancang untuk komunikasi jaringan tanpa akselerasi perangkat keras.",
      "e": "ChaCha20-Poly1305, karena memberikan performa baik tanpa akselerasi AES perangkat keras."
    },
    "correct_letter": "e",
    "correct_answer": "ChaCha20-Poly1305, karena memberikan performa baik tanpa akselerasi AES perangkat keras."
  },
  {
    "id": 97,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perusahaan mengembangkan algoritma enkripsi sendiri dan merahasiakan seluruh mekanisme internalnya. Keamanan sistem tersebut sangat bergantung pada ketidaktahuan penyerang terhadap desain algoritma. Berdasarkan Kerckhoffs's Principle, kelemahan utama pendekatan tersebut adalah ...",
    "options": {
      "a": "Keamanan sistem bergantung pada ukuran data yang diproses selama proses enkripsi.",
      "b": "Keamanan sistem bergantung pada kerahasiaan desain, bukan terutama pada perlindungan kunci.",
      "c": "Keamanan sistem bergantung pada frekuensi perubahan algoritma selama penggunaannya.",
      "d": "Keamanan sistem ditentukan oleh kompleksitas perangkat lunak yang menjalankan algoritma.",
      "e": "Keamanan sistem ditentukan oleh jumlah pengguna yang mengetahui cara kerja algoritma."
    },
    "correct_letter": "b",
    "correct_answer": "Keamanan sistem bergantung pada kerahasiaan desain, bukan terutama pada perlindungan kunci."
  },
  {
    "id": 98,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Dalam Feistel Cipher Structure, proses enkripsi menggunakan sejumlah subkey yang dihasilkan dari kunci utama. Karakteristik penting dari proses dekripsi pada struktur ini adalah ...",
    "options": {
      "a": "Menggunakan subkey baru yang dihasilkan secara independen setelah enkripsi selesai.",
      "b": "Menggunakan subkey yang sama tetapi diterapkan dalam urutan terbalik dari proses enkripsi.",
      "c": "Menggunakan ciphertext sebagai subkey untuk menggantikan seluruh subkey dari proses enkripsi.",
      "d": "Menggunakan kunci utama secara langsung tanpa melibatkan subkey selama proses dekripsi.",
      "e": "Menggunakan subkey yang sama dengan urutan pemakaian identik seperti proses enkripsi."
    },
    "correct_letter": "b",
    "correct_answer": "Menggunakan subkey yang sama tetapi diterapkan dalam urutan terbalik dari proses enkripsi."
  },
  {
    "id": 99,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perusahaan menggunakan Key Distribution Center (KDC) untuk mengelola komunikasi aman antarpengguna. Setiap pengguna memiliki hubungan kunci dengan KDC, kemudian KDC mendistribusikan session key bagi pihak yang akan berkomunikasi. Keuntungan utama pendekatan ini adalah ...",
    "options": {
      "a": "Memastikan semua komunikasi tetap aman meskipun kunci utama milik KDC telah diketahui penyerang.",
      "b": "Memusatkan distribusi session key tanpa mengharuskan setiap pasangan pengguna berbagi kunci jangka panjang.",
      "c": "Memungkinkan pengguna membuat session key tanpa memerlukan hubungan aman dengan KDC.",
      "d": "Menghilangkan kebutuhan perlindungan kunci karena setiap pengguna memakai kunci publik.",
      "e": "Menghilangkan kebutuhan session key karena seluruh komunikasi memakai satu kunci perusahaan."
    },
    "correct_letter": "b",
    "correct_answer": "Memusatkan distribusi session key tanpa mengharuskan setiap pasangan pengguna berbagi kunci jangka panjang."
  },
  {
    "id": 100,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 1",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah sistem komunikasi satelit membutuhkan mode enkripsi yang menggunakan output enkripsi sebelumnya sebagai input pada proses berikutnya, bukan ciphertext sebelumnya. Berdasarkan mekanisme tersebut, mode yang paling tepat adalah ...",
    "options": {
      "a": "CFB, karena rangkaian ciphertext digunakan untuk membangkitkan aliran kunci berikutnya.",
      "b": "CTR, karena setiap blok menggunakan output enkripsi sebelumnya sebagai nilai counter baru.",
      "c": "ECB, karena setiap blok menggunakan ciphertext sebelumnya dalam proses enkripsi berikutnya.",
      "d": "CBC, karena rangkaian plaintext digunakan untuk membangkitkan aliran kunci berikutnya.",
      "e": "OFB, karena rangkaian output enkripsi digunakan untuk membangkitkan aliran kunci berikutnya."
    },
    "correct_letter": "e",
    "correct_answer": "OFB, karena rangkaian output enkripsi digunakan untuk membangkitkan aliran kunci berikutnya."
  },
  {
    "id": 101,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Countermeasure yang paling langsung untuk mengurangi specific account attack yang mencoba banyak password\nterhadap satu akun adalah ...",
    "options": {
      "a": "Menghapus user ID setelah setiap login",
      "b": "Menyimpan username menggunakan hash",
      "c": "Menggunakan ACL pada file pengguna",
      "d": "Menambahkan permission read-only",
      "e": "Membatasi percobaan login atau menerapkan account lockout"
    },
    "correct_letter": "e",
    "correct_answer": "Membatasi percobaan login atau menerapkan account lockout"
  },
  {
    "id": 102,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sistem mengizinkan akses dokumen berdasarkan perbandingan antara security classification pada dokumen dan\nsecurity clearance pengguna. Model yang paling sesuai adalah ...",
    "options": {
      "a": "ABAC",
      "b": "MAC",
      "c": "DAC",
      "d": "RBAC",
      "e": "ACL"
    },
    "correct_letter": "b",
    "correct_answer": "MAC"
  },
  {
    "id": 103,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Pernyataan yang paling tepat mengenai hubungan authentication dan access control adalah ...",
    "options": {
      "a": "Authentication memvalidasi identitas, kemudian identitas tersebut dapat digunakan dalam pengambilan\nkeputusan access control",
      "b": "Authentication menentukan seluruh permission tanpa memerlukan kebijakan lain",
      "c": "Authentication dan access control merupakan proses yang identik",
      "d": "Authentication hanya diperlukan jika menggunakan biometrik",
      "e": "Access control selalu dilakukan sebelum authentication"
    },
    "correct_letter": "a",
    "correct_answer": "Authentication memvalidasi identitas, kemudian identitas tersebut dapat digunakan dalam pengambilan\nkeputusan access control"
  },
  {
    "id": 104,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "pengambilan keputusan access control\nManakah yang termasuk contoh dynamic biometric?",
    "options": {
      "a": "Retina pattern",
      "b": "Fingerprint",
      "c": "Typing rhythm",
      "d": "Facial geometry",
      "e": "Iris pattern"
    },
    "correct_letter": "c",
    "correct_answer": "Typing rhythm"
  },
  {
    "id": 105,
    "week": "Week 2",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sistem biometric menolak pengguna sah karena sampel fingerprint-nya tidak dianggap cukup mirip dengan template.\nKejadian ini disebut ...",
    "options": {
      "a": "Replay",
      "b": "Identity collision",
      "c": "False match",
      "d": "False nonmatch",
      "e": "True match"
    },
    "correct_letter": "d",
    "correct_answer": "False nonmatch"
  },
  {
    "id": 106,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi meminta password dan kode yang dihasilkan oleh authenticator application pada ponsel. Faktor\nkedua pada mekanisme tersebut termasuk ...",
    "options": {
      "a": "Something the individual is",
      "b": "Something the individual knows",
      "c": "Something the individual does",
      "d": "Something the individual possesses",
      "e": "Something the individual remembers"
    },
    "correct_letter": "d",
    "correct_answer": "Something the individual possesses"
  },
  {
    "id": 107,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Dalam konteks access control, authorization terutama menjawab pertanyaan ...",
    "options": {
      "a": "\"Apakah fingerprint Anda sudah di-enroll?\"",
      "b": "\"Siapa Anda?\"",
      "c": "\"Bisakah identitas Anda dibuktikan?\"",
      "d": "\"Apa yang boleh Anda lakukan terhadap resource ini?\"",
      "e": "\"Apakah password Anda sudah di-hash?\""
    },
    "correct_letter": "d",
    "correct_answer": "\"Apa yang boleh Anda lakukan terhadap resource ini?\""
  },
  {
    "id": 108,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah organisasi menetapkan bahwa pemilik file dapat menentukan pengguna lain yang boleh membaca file\nmiliknya. Model access control yang paling sesuai adalah ...",
    "options": {
      "a": "Continuous Access Control",
      "b": "Role-Based Access Control (RBAC)",
      "c": "Attribute-Based Access Control (ABAC)",
      "d": "Mandatory Access Control (MAC)",
      "e": "Discretionary Access Control (DAC)"
    },
    "correct_letter": "e",
    "correct_answer": "Discretionary Access Control (DAC)"
  },
  {
    "id": 109,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Seorang mahasiswa menjalankan program untuk membaca file tertentu. Dalam model access control, pihak aktif\nyang mencoba mengakses resource disebut ...",
    "options": {
      "a": "Credential",
      "b": "Attribute",
      "c": "Subject",
      "d": "Object",
      "e": "Access right"
    },
    "correct_letter": "c",
    "correct_answer": "Subject"
  },
  {
    "id": 110,
    "week": "Week 2",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Seorang pengguna memasukkan student123 untuk menyatakan siapa dirinya kepada sistem. Proses ini disebut ...",
    "options": {
      "a": "Accounting",
      "b": "Authentication",
      "c": "Identification",
      "d": "Authorization",
      "e": "Auditing"
    },
    "correct_letter": "c",
    "correct_answer": "Identification"
  },
  {
    "id": 111,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Program security awareness, training, and education bertujuan untuk ...",
    "options": {
      "a": "Mengurangi kebutuhan organisasi terhadap kebijakan keamanan",
      "b": "Menggantikan seluruh mekanisme keamanan teknis organisasi",
      "c": "Membentuk perilaku pengguna agar lebih sadar terhadap risiko keamanan",
      "d": "Membatasi seluruh aktivitas pengguna dalam sistem informasi",
      "e": "Menghilangkan kemungkinan terjadinya kesalahan manusia"
    },
    "correct_letter": "c",
    "correct_answer": "Membentuk perilaku pengguna agar lebih sadar terhadap risiko keamanan"
  },
  {
    "id": 112,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Membuat atau menyediakan tools yang digunakan untuk melakukan kejahatan elektronik termasuk ...",
    "options": {
      "a": "Illegal content",
      "b": "Misuse of cyber tools",
      "c": "Reputation attack",
      "d": "Electronic fraud",
      "e": "Data interference"
    },
    "correct_letter": "b",
    "correct_answer": "Misuse of cyber tools"
  },
  {
    "id": 113,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Ethics dalam konteks teknologi informasi berkaitan dengan ...",
    "options": {
      "a": "Metode meningkatkan efisiensi pemrograman",
      "b": "Standar performa perangkat keras komputer",
      "c": "Prinsip moral mengenai benar, salah, manfaat, dan dampak tindakan",
      "d": "Cara meningkatkan kecepatan komunikasi jaringan",
      "e": "Teknik mengoptimalkan penggunaan sumber daya sistem"
    },
    "correct_letter": "c",
    "correct_answer": "Prinsip moral mengenai benar, salah, manfaat, dan dampak tindakan"
  },
  {
    "id": 114,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Pada kasus RSA Security tahun 2011, attacker berhasil memperoleh akses setelah karyawan membuka file Excel\nberisi malware yang dikirim melalui email. Faktor utama yang dimanfaatkan attacker adalah ...",
    "options": {
      "a": "Kelemahan konfigurasi jaringan internal perusahaan",
      "b": "Kegagalan sistem penyimpanan token autentikasi perusahaan",
      "c": "Kerentanan implementasi algoritma keamanan pada perangkat autentikasi",
      "d": "Kelengahan pengguna dalam menangani file yang berasal dari email mencurigakan",
      "e": "Kesalahan pengguna dalam membuat password autentikasi"
    },
    "correct_letter": "d",
    "correct_answer": "Kelengahan pengguna dalam menangani file yang berasal dari email mencurigakan"
  },
  {
    "id": 115,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Salah satu aspek yang perlu diperhatikan dalam usable security adalah ...",
    "options": {
      "a": "Popularitas teknologi keamanan yang digunakan",
      "b": "Biaya implementasi teknologi keamanan",
      "c": "Kemampuan dan keterbatasan pengguna yang menggunakan sistem",
      "d": "Jumlah pengguna yang terdaftar pada sistem",
      "e": "Jumlah fitur tambahan yang tersedia pada aplikasi"
    },
    "correct_letter": "c",
    "correct_answer": "Kemampuan dan keterbatasan pengguna yang menggunakan sistem"
  },
  {
    "id": 116,
    "week": "Week 3",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Dalam perspektif human-centered security, faktor manusia dianggap penting karena ...",
    "options": {
      "a": "Pengguna dapat menjadi bagian dari pertahanan maupun kelemahan keamanan",
      "b": "Semua serangan berasal dari kesalahan manusia",
      "c": "Sistem otomatis tidak dapat digunakan untuk keamanan",
      "d": "Teknologi keamanan tidak diperlukan dalam sistem modern",
      "e": "Manusia selalu menjadi ancaman terbesar dibanding teknologi"
    },
    "correct_letter": "a",
    "correct_answer": "Pengguna dapat menjadi bagian dari pertahanan maupun kelemahan keamanan"
  },
  {
    "id": 117,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "UU No. 27 Tahun 2022 berkaitan dengan ...",
    "options": {
      "a": "Pengelolaan infrastruktur informasi kritikal",
      "b": "Perlindungan terhadap data pribadi individu",
      "c": "Pengawasan penggunaan media sosial",
      "d": "Pengaturan hak cipta perangkat lunak",
      "e": "Pengaturan transaksi elektronik antar organisasi"
    },
    "correct_letter": "b",
    "correct_answer": "Perlindungan terhadap data pribadi individu"
  },
  {
    "id": 118,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Perbedaan utama social engineering dibandingkan serangan teknis adalah ...",
    "options": {
      "a": "Social engineering memanfaatkan faktor manusia sebagai bagian dari proses serangan",
      "b": "Social engineering membutuhkan eksploitasi kerentanan perangkat keras",
      "c": "Social engineering hanya menyerang sistem tanpa melibatkan pengguna",
      "d": "Social engineering hanya terjadi pada organisasi pemerintahan",
      "e": "Social engineering selalu menggunakan malware sebagai metode utama"
    },
    "correct_letter": "a",
    "correct_answer": "Social engineering memanfaatkan faktor manusia sebagai bagian dari proses serangan"
  },
  {
    "id": 119,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Konsep usable security menekankan bahwa mekanisme keamanan harus ...",
    "options": {
      "a": "Dirancang agar keamanan dapat digunakan secara efektif oleh pengguna",
      "b": "Mengutamakan keamanan meskipun pengguna mengalami kesulitan",
      "c": "Menghilangkan seluruh interaksi pengguna dengan sistem",
      "d": "Memiliki tingkat kompleksitas tinggi agar sulit dilewati attacker",
      "e": "Menggantikan kebutuhan edukasi keamanan pengguna"
    },
    "correct_letter": "a",
    "correct_answer": "Dirancang agar keamanan dapat digunakan secara efektif oleh pengguna"
  },
  {
    "id": 120,
    "week": "Week 3",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Seorang pegawai mengetahui aturan keamanan tetapi sengaja mengabaikannya karena merasa proses keamanan\nmenghambat pekerjaannya. Pegawai tersebut termasuk kategori ...",
    "options": {
      "a": "External attacker karena berasal dari luar sistem",
      "b": "Clueless human karena tidak memahami kebijakan keamanan",
      "c": "Malicious human karena melakukan aktivitas ilegal",
      "d": "Security professional karena memahami kelemahan sistem",
      "e": "Unmotivated human karena menganggap keamanan sebagai beban"
    },
    "correct_letter": "e",
    "correct_answer": "Unmotivated human karena menganggap keamanan sebagai beban"
  },
  {
    "id": 121,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Mengapa validation dinilai umumnya lebih aman dibandingkan sanitization?",
    "options": {
      "a": "validation menghapus bagian berbahaya dan selalu mempertahankan bagian input yang masih dapat\ndigunakan.",
      "b": "validation dapat menolak input yang tidak memenuhi aturan alih-alih mencoba memperbaiki konten yang\ntidak valid.",
      "c": "validation mengubah setiap input menjadi format aman tanpa perlu mengetahui format input yang\nseharusnya.",
      "d": "validation memungkinkan aplikasi menerima format apa pun selama karakter yang dianggap berbahaya telah\ndihapus.",
      "e": "validation memastikan setiap input eksternal diterjemahkan menjadi canonical form tanpa kemungkinan\nkesalahan."
    },
    "correct_letter": "b",
    "correct_answer": "validation dapat menolak input yang tidak memenuhi aturan alih-alih mencoba memperbaiki konten yang\ntidak valid."
  },
  {
    "id": 122,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Dalam konteks writing safe program code, salah satu pertanyaan penting terkait implementasi algoritma adalah ...",
    "options": {
      "a": "apakah algoritma dapat menggantikan seluruh mekanisme pengamanan yang disediakan sistem operasi.",
      "b": "apakah algoritma dapat dikompilasi menggunakan seluruh jenis compiler yang tersedia di pasar.",
      "c": "apakah algoritma menggunakan jumlah fungsi yang lebih sedikit dibandingkan implementasi sebelumnya.",
      "d": "apakah algoritma mempunyai waktu eksekusi yang sama pada seluruh sistem operasi yang digunakan.",
      "e": "apakah algoritma yang diimplementasikan benar-benar menyelesaikan masalah yang telah ditentukan."
    },
    "correct_letter": "e",
    "correct_answer": "apakah algoritma yang diimplementasikan benar-benar menyelesaikan masalah yang telah ditentukan."
  },
  {
    "id": 123,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Pernyataan yang paling tepat mengenai penggunaan code analysis tools adalah ...",
    "options": {
      "a": "tools digunakan untuk memastikan aplikasi tidak lagi membutuhkan security testing ketika pengembangan\nselesai.",
      "b": "tools menggantikan kebutuhan secure code review karena logic bug selalu dapat ditemukan secara otomatis.",
      "c": "tools terutama digunakan setelah deployment karena analisis source code tidak efektif selama development\ncycle.",
      "d": "tools membantu menemukan penyimpangan dari requirement dan masalah keamanan lebih awal dalam\ndevelopment cycle.",
      "e": "tools menjamin framework yang digunakan aplikasi tidak memiliki vulnerability dari pihak pengembang\nframework."
    },
    "correct_letter": "d",
    "correct_answer": "tools membantu menemukan penyimpangan dari requirement dan masalah keamanan lebih awal dalam\ndevelopment cycle."
  },
  {
    "id": 124,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "awal dalam development cycle.\nPerhatikan dua proses berikut: (Mengubah `2018/01/30` menjadi format tanggal standar aplikasi -- Menolak `` karena\nbukan tanggal yang valid). Urutan istilah yang sesuai adalah ...",
    "options": {
      "a": "validation — sanitization.",
      "b": "canonicalization — validation.",
      "c": "canonicalization — sanitization.",
      "d": "sanitization — canonicalization.",
      "e": "sanitization — validation."
    },
    "correct_letter": "b",
    "correct_answer": "canonicalization — validation."
  },
  {
    "id": 125,
    "week": "Week 4",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Bagaimana seharusnya program memperlakukan environment variables dan command-line arguments?",
    "options": {
      "a": "sebagai data sementara yang hanya perlu diperiksa apabila program menggunakan koneksi jaringan.",
      "b": "sebagai input eksternal yang nilainya perlu diperiksa dan divalidasi sebelum digunakan program.",
      "c": "sebagai konfigurasi sistem yang dapat digunakan langsung tanpa pemeriksaan tambahan oleh aplikasi.",
      "d": "sebagai data internal karena keduanya disediakan melalui fasilitas dari sistem operasi.",
      "e": "sebagai data terpercaya apabila program dijalankan menggunakan akun pengguna yang terautentikasi."
    },
    "correct_letter": "b",
    "correct_answer": "sebagai input eksternal yang nilainya perlu diperiksa dan divalidasi sebelum digunakan program."
  },
  {
    "id": 126,
    "week": "Week 4",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Mengapa Cross-Site Scripting (XSS) berkaitan erat dengan keamanan output aplikasi web?",
    "options": {
      "a": "server dapat mengubah setiap output pengguna menjadi perintah sistem sebelum dikirim kepada browser.",
      "b": "browser menghapus pemisahan antara data teks dan data biner ketika halaman web sedang diproses.",
      "c": "server menganggap setiap permintaan browser memiliki privilege yang sama dengan administrator sistem.",
      "d": "browser dapat menganggap konten yang ditampilkan oleh suatu situs berasal dari situs tersebut dan\nterpercaya.",
      "e": "browser menganggap setiap data dari jaringan sebagai executable sistem operasi yang dapat dipercaya."
    },
    "correct_letter": "d",
    "correct_answer": "browser dapat menganggap konten yang ditampilkan oleh suatu situs berasal dari situs tersebut dan\nterpercaya."
  },
  {
    "id": 127,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "kode dan sumber daya.\nSebuah aplikasi Android menggunakan algoritma enkripsi yang kuat, tetapi menyimpan kunci enkripsi secara\nlangsung di dalam source code aplikasi. Kontrol MASVS yang paling relevan adalah ....",
    "options": {
      "a": "MASVS-RESILIENCE-3, karena kode aplikasi harus dipersulit agar tidak mudah dianalisis secara statis.",
      "b": "MASVS-NETWORK-2, karena aplikasi perlu memverifikasi identitas endpoint ketika melakukan komunikasi\njaringan.",
      "c": "MASVS-AUTH-2, karena autentikasi lokal harus dilakukan sesuai dengan praktik keamanan sistem operasi.",
      "d": "MASVS-CRYPTO-2, karena kunci kriptografi harus dikelola dan dilindungi sepanjang siklus hidupnya.",
      "e": "MASVS-STORAGE-2, karena aplikasi perlu memastikan informasi sensitif tidak bocor melalui mekanisme\nlogging."
    },
    "correct_letter": "d",
    "correct_answer": "MASVS-CRYPTO-2, karena kunci kriptografi harus dikelola dan dilindungi sepanjang siklus hidupnya."
  },
  {
    "id": 128,
    "week": "Week 5",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perusahaan mengembangkan aplikasi mobile yang terhubung ke API berbasis web dan perangkat IoT.\nKombinasi standar OWASP yang paling sesuai adalah ....",
    "options": {
      "a": "ASVS untuk aplikasi mobile, ISVS untuk API, dan MASVS untuk perangkat serta ekosistem IoT.",
      "b": "MASVS untuk aplikasi mobile, ASVS untuk API, dan ISVS untuk perangkat serta ekosistem IoT.",
      "c": "ISVS untuk aplikasi mobile, MASVS untuk API, dan ASVS untuk perangkat serta ekosistem IoT.",
      "d": "MASVS untuk seluruh komponen, sedangkan ASVS dan ISVS hanya digunakan untuk pelaporan risiko.",
      "e": "ASVS untuk seluruh komponen, sedangkan MASVS dan ISVS hanya digunakan untuk analisis kebutuhan."
    },
    "correct_letter": "b",
    "correct_answer": "MASVS untuk aplikasi mobile, ASVS untuk API, dan ISVS untuk perangkat serta ekosistem IoT."
  },
  {
    "id": 129,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi mengizinkan pengguna mengunggah arsip terkompresi. Tim keamanan menemukan arsip kecil dapat\nmenghasilkan data sangat besar setelah diekstraksi. Kontrol yang paling sesuai adalah ....",
    "options": {
      "a": "Memvalidasi nama file dan tipe ekstensi agar berkas yang diterima sesuai dengan format yang diizinkan.",
      "b": "Memvalidasi metadata file dan waktu unggahan agar sistem dapat mengidentifikasi berkas yang telah\ndiproses.",
      "c": "Memvalidasi ukuran hasil ekstraksi dan jumlah file agar proses pengunggahan tidak menghabiskan\nsumber daya.",
      "d": "Memvalidasi identitas pengguna yang mengunggah agar setiap berkas dapat dikaitkan dengan pemilik akun.",
      "e": "Memvalidasi lokasi penyimpanan file agar arsip hasil unggahan tidak dapat diakses melalui URL langsung."
    },
    "correct_letter": "c",
    "correct_answer": "Memvalidasi ukuran hasil ekstraksi dan jumlah file agar proses pengunggahan tidak menghabiskan\nsumber daya."
  },
  {
    "id": 130,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "tidak cukup kuat.\nSebuah aplikasi tidak mencatat percobaan login gagal dan tidak memberikan peringatan ketika terjadi aktivitas\nautentikasi mencurigakan secara berulang. Kategori OWASP Top 10:2025 yang paling sesuai adalah ....",
    "options": {
      "a": "Security Logging & Alerting Failures, karena aktivitas keamanan penting tidak tercatat dan tidak\nmenghasilkan peringatan.",
      "b": "Security Misconfiguration, karena konfigurasi sistem tidak membatasi jumlah permintaan autentikasi.",
      "c": "Software Integrity Failures, karena integritas catatan autentikasi tidak diperiksa ketika pengguna gagal login.",
      "d": "Broken Access Control, karena pengguna yang gagal login masih dapat mengirimkan permintaan ke server.",
      "e": "Authentication Failures, karena autentikasi pengguna harus menggunakan lebih dari satu faktor keamanan."
    },
    "correct_letter": "a",
    "correct_answer": "Security Logging & Alerting Failures, karena aktivitas keamanan penting tidak tercatat dan tidak\nmenghasilkan peringatan."
  },
  {
    "id": 131,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "dan dapat diverifikasi.\nSebuah aplikasi mobile menggunakan HTTPS, tetapi tidak memvalidasi identitas server dengan benar sehingga\nkomunikasi dapat diarahkan ke server penyerang. Kontrol MASVS yang paling sesuai adalah ....",
    "options": {
      "a": "MASVS-CRYPTO-2, karena aplikasi harus menyimpan seluruh sertifikat server sebagai kunci rahasia pada\nperangkat.",
      "b": "MASVS-NETWORK-2, karena aplikasi harus selalu menggunakan satu sertifikat yang sama untuk semua\nserver eksternal.",
      "c": "MASVS-NETWORK-1, karena aplikasi harus memastikan komunikasi jaringan menggunakan\nperlindungan dan autentikasi endpoint yang aman.",
      "d": "MASVS-AUTH-1, karena aplikasi harus mengganti seluruh mekanisme autentikasi jaringan dengan\nautentikasi pengguna.",
      "e": "MASVS-PLATFORM-1, karena aplikasi harus membatasi komunikasi antarproses agar server tidak dapat\nmengganti identitas."
    },
    "correct_letter": "c",
    "correct_answer": "MASVS-NETWORK-1, karena aplikasi harus memastikan komunikasi jaringan menggunakan\nperlindungan dan autentikasi endpoint yang aman."
  },
  {
    "id": 132,
    "week": "Week 5",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah perangkat IoT menerima pembaruan firmware melalui jaringan. Untuk mencegah pemasangan firmware\npalsu yang dapat mengambil alih perangkat, persyaratan keamanan yang paling tepat adalah ....",
    "options": {
      "a": "Membatasi frekuensi pengunduhan firmware agar server pembaruan tidak mengalami lonjakan permintaan\ndari perangkat.",
      "b": "Mencatat waktu pengunduhan firmware agar administrator dapat mengetahui kapan proses pembaruan\ndijalankan perangkat.",
      "c": "Memverifikasi tanda tangan kriptografis firmware dari sumber tepercaya sebelum pembaruan dijalankan\npada perangkat.",
      "d": "Memeriksa ukuran firmware agar seluruh berkas pembaruan sesuai dengan kapasitas penyimpanan internal\nperangkat.",
      "e": "Memastikan firmware memiliki nomor versi berbeda agar perangkat dapat membedakan pembaruan baru\ndan sebelumnya."
    },
    "correct_letter": "c",
    "correct_answer": "Memverifikasi tanda tangan kriptografis firmware dari sumber tepercaya sebelum pembaruan dijalankan\npada perangkat."
  },
  {
    "id": 133,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "AES memproses data internal menggunakan struktur state berupa array 4 × 4 byte dengan susunan column-major.\nPernyataan yang tepat mengenai struktur tersebut adalah ...",
    "options": {
      "a": "Setiap state berisi 128 bit dan disusun menjadi empat kolom yang masing-masing berukuran 32 bit.",
      "b": "Setiap state berisi 64 bit dan disusun menjadi empat baris yang masing-masing berukuran 16 bit.",
      "c": "Setiap state berisi 192 bit dan disusun menjadi enam kolom yang masing-masing berukuran 32 bit.",
      "d": "Setiap state berisi 256 bit dan disusun menjadi empat kolom yang masing-masing berukuran 64 bit.",
      "e": "Setiap state berisi 128 bit dan disusun menjadi delapan kolom yang masing-masing berukuran 16 bit."
    },
    "correct_letter": "a",
    "correct_answer": "Setiap state berisi 128 bit dan disusun menjadi empat kolom yang masing-masing berukuran 32 bit."
  },
  {
    "id": 134,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah aplikasi telah mengenkripsi pesan agar tidak dapat dibaca pihak ketiga. Namun, penyerang masih berpotensi\nmemodifikasi atau mengirim ulang pesan tersebut. Mekanisme keamanan tambahan yang diperlukan adalah ...",
    "options": {
      "a": "Block padding, untuk memastikan setiap pesan mempunyai ukuran sesuai blok algoritma.",
      "b": "Confidentiality, untuk memastikan pesan terenkripsi tidak dapat diamati dalam jaringan.",
      "c": "Message authentication, untuk membantu memverifikasi sumber dan integritas pesan.",
      "d": "Data compression, untuk memastikan perubahan pesan menghasilkan ukuran data yang berbeda.",
      "e": "Key expansion, untuk memastikan setiap pesan memakai seluruh panjang kunci yang tersedia."
    },
    "correct_letter": "c",
    "correct_answer": "Message authentication, untuk membantu memverifikasi sumber dan integritas pesan."
  },
  {
    "id": 135,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah sistem menggunakan DES, Triple DES, dan AES untuk kebutuhan enkripsi berbeda. Kombinasi ukuran blok\ndan panjang kunci yang sesuai dengan karakteristik algoritma tersebut adalah ...",
    "options": {
      "a": "DES: blok 128 bit, kunci 56 bit; Triple DES: blok 64 bit; AES: blok 128 bit.",
      "b": "DES: blok 64 bit, kunci 56 bit; Triple DES: blok 128 bit; AES: blok 256 bit.",
      "c": "DES: blok 128 bit, kunci 128 bit; Triple DES: blok 64 bit; AES: blok 256 bit.",
      "d": "DES: blok 64 bit, kunci 64 bit; Triple DES: blok 128 bit; AES: blok 128 bit.",
      "e": "DES: blok 64 bit, kunci 56 bit; Triple DES: blok 64 bit; AES: blok 128 bit."
    },
    "correct_letter": "e",
    "correct_answer": "DES: blok 64 bit, kunci 56 bit; Triple DES: blok 64 bit; AES: blok 128 bit."
  },
  {
    "id": 136,
    "week": "Week 6",
    "type": "Pre Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah organisasi ingin meningkatkan keamanan algoritma enkripsi simetris terhadap brute-force attack dengan\nmemperbesar panjang kunci. Dampak utama dari peningkatan panjang kunci tersebut adalah ...",
    "options": {
      "a": "Jumlah kemungkinan kunci meningkat secara eksponensial terhadap penambahan panjang kunci.",
      "b": "Jumlah kemungkinan kunci tetap karena ditentukan oleh panjang blok, bukan panjang kunci.",
      "c": "Jumlah kemungkinan kunci berkurang karena semakin banyak kombinasi dapat dieliminasi.",
      "d": "Jumlah kemungkinan kunci meningkat secara kuadratik terhadap penambahan panjang kunci.",
      "e": "Jumlah kemungkinan kunci bertambah secara linear mengikuti setiap tambahan bit kunci."
    },
    "correct_letter": "a",
    "correct_answer": "Jumlah kemungkinan kunci meningkat secara eksponensial terhadap penambahan panjang kunci."
  },
  {
    "id": 137,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Sebuah sistem lama masih menggunakan RC4 untuk mengamankan komunikasi TLS. Administrator merencanakan\npeningkatan keamanan sistem. Berdasarkan perkembangan standar kriptografi, tindakan yang paling tepat adalah ...",
    "options": {
      "a": "Menggunakan RC4 dengan pergantian kunci rutin karena masih direkomendasikan dalam TLS.",
      "b": "Mengganti RC4 dengan algoritma modern seperti AES-GCM atau ChaCha20-Poly1305.",
      "c": "Mempertahankan RC4 dan menambah fungsi hash untuk menghilangkan seluruh kelemahannya.",
      "d": "Menggunakan RC4 dengan mode CBC agar sesuai dengan ketentuan keamanan TLS terbaru.",
      "e": "Mempertahankan RC4 dan meningkatkan panjang kunci agar kompatibel dengan TLS modern."
    },
    "correct_letter": "b",
    "correct_answer": "Mengganti RC4 dengan algoritma modern seperti AES-GCM atau ChaCha20-Poly1305."
  },
  {
    "id": 138,
    "week": "Week 6",
    "type": "Post Test",
    "source": "Informan 2",
    "mark": "1.00 out of 1.00",
    "question": "Dalam symmetric cryptography, operasi substitusi dan permutasi digunakan untuk mengubah representasi plaintext.\nMengapa transformasi tersebut harus dapat dibalik?",
    "options": {
      "a": "Agar setiap proses enkripsi dapat dijalankan tanpa menggunakan kunci rahasia.",
      "b": "Agar plaintext asli dapat diperoleh kembali tanpa kehilangan informasi saat dekripsi.",
      "c": "Agar ukuran ciphertext selalu lebih kecil daripada ukuran plaintext sebelum diproses.",
      "d": "Agar ciphertext memiliki pola karakter yang sama dengan plaintext setelah diproses.",
      "e": "Agar semua blok ciphertext menghasilkan nilai yang identik ketika kuncinya sama."
    },
    "correct_letter": "b",
    "correct_answer": "Agar plaintext asli dapat diperoleh kembali tanpa kehilangan informasi saat dekripsi."
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Seorang pengguna mengautentikasi diri dengan menempelkan kartu pintar (smart card) pada card reader dan memasukkan PIN 6-digit. Faktor autentikasi yang digunakan pada skenario ini adalah ...",
    "options": {
      "a": "Something you know dan something you are",
      "b": "Something you have dan something you know",
      "c": "Something you have dan something you are",
      "d": "Dua faktor dari kategori something you know",
      "e": "Something you are dan somewhere you are"
    },
    "correct_letter": "b",
    "correct_answer": "Something you have dan something you know",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 139
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Pada sistem biometrik, titik potong pada kurva di mana False Acceptance Rate (FAR) sama persis dengan False Rejection Rate (FRR) disebut ...",
    "options": {
      "a": "Receiver Operating Characteristic (ROC)",
      "b": "Equal Error Rate (EER) atau Crossover Error Rate (CER)",
      "c": "Threshold of Detection (ToD)",
      "d": "Biometric Accuracy Index (BAI)",
      "e": "Zero Tolerance Boundary (ZTB)"
    },
    "correct_letter": "b",
    "correct_answer": "Equal Error Rate (EER) atau Crossover Error Rate (CER)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 140
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Mengapa penggunaan salt yang unik dan acak untuk setiap password sangat penting sebelum nilai hash disimpan di database?",
    "options": {
      "a": "Membuat algoritma enkripsi simetris password menjadi tidak dapat didekripsi.",
      "b": "Mencegah serangan precomputed dictionary attack seperti Rainbow Tables dan membedakan hash dari dua password yang sama.",
      "c": "Mempercepat proses komputasi verifikasi password di sisi server aplikasi.",
      "d": "Mengubah fungsi hash satu arah menjadi fungsi enkripsi asimetris.",
      "e": "Menghilangkan kebutuhan pengguna untuk mengingat password yang panjang."
    },
    "correct_letter": "b",
    "correct_answer": "Mencegah serangan precomputed dictionary attack seperti Rainbow Tables dan membedakan hash dari dua password yang sama.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 141
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Manakah algoritma hashing password berikut yang sengaja dirancang memiliki parameter memory-hard dan time-cost tinggi untuk mempersulit brute-force berbasis GPU/ASIC?",
    "options": {
      "a": "MD5",
      "b": "SHA-256 murni",
      "c": "Argon2",
      "d": "CRC32",
      "e": "RC4"
    },
    "correct_letter": "c",
    "correct_answer": "Argon2",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 142
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Protokol Challenge-Handshake Authentication Protocol (CHAP) lebih aman dibandingkan Password Authentication Protocol (PAP) karena ...",
    "options": {
      "a": "Password pengguna ditransmisikan dalam format plaintext terkompresi.",
      "b": "Password asli tidak pernah dikirimkan melalui jaringan; server mengirimkan nonce/challenge dan klien merespons dengan hash password + challenge.",
      "c": "CHAP tidak memerlukan database password di sisi server.",
      "d": "CHAP selalu menggunakan enkripsi RSA 4096-bit pada setiap transmisi paket.",
      "e": "Klien menentukan sendiri kunci rahasia tanpa persetujuan server."
    },
    "correct_letter": "b",
    "correct_answer": "Password asli tidak pernah dikirimkan melalui jaringan; server mengirimkan nonce/challenge dan klien merespons dengan hash password + challenge.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 143
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Dalam model Discretionary Access Control (DAC), siapa yang memiliki wewenang untuk memberikan atau mencabut hak akses atas suatu objek data?",
    "options": {
      "a": "Hanya Administrator Sistem Pusat melalui kebijakan global.",
      "b": "Pemilik (owner) dari objek data tersebut.",
      "c": "Sistem operasi secara otomatis berdasarkan security label militer.",
      "d": "Pengguna tamu yang sedang aktif dalam sesi sistem.",
      "e": "Entitas Certificate Authority (CA) pihak ketiga."
    },
    "correct_letter": "b",
    "correct_answer": "Pemilik (owner) dari objek data tersebut.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 144
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Model Mandatory Access Control (MAC) mengandalkan mekanisme otorisasi yang didasarkan pada ...",
    "options": {
      "a": "Tingkat izin keamanan (clearance) subjek dan label klasifikasi sensitivitas objek yang ditetapkan secara ketat oleh otoritas keamanan.",
      "b": "Keinginan pemilik berkas untuk membagikan file ke teman satu grup.",
      "c": "Daftar kontak yang disimpan dalam address book pengguna.",
      "d": "Waktu login pengguna di workstation lokal.",
      "e": "Jumlah kuota bandwidth yang dialokasikan kepada pengguna."
    },
    "correct_letter": "a",
    "correct_answer": "Tingkat izin keamanan (clearance) subjek dan label klasifikasi sensitivitas objek yang ditetapkan secara ketat oleh otoritas keamanan.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 145
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Prinsip Simple Security Property pada model keamanan Bell-LaPadula dirumuskan sebagai ...",
    "options": {
      "a": "No Read Down (subjek tidak boleh membaca data pada tingkat lebih rendah).",
      "b": "No Read Up (subjek pada tingkat keamanan tertentu tidak boleh membaca objek dengan klasifikasi lebih tinggi).",
      "c": "No Write Up (subjek tidak boleh menulis ke tingkat lebih tinggi).",
      "d": "Read and Write bebas pada semua level asalkan satu departemen.",
      "e": "Hanya subjek dengan root access yang boleh membaca data rahasia."
    },
    "correct_letter": "b",
    "correct_answer": "No Read Up (subjek pada tingkat keamanan tertentu tidak boleh membaca objek dengan klasifikasi lebih tinggi).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 146
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Perbedaan mendasar antara model Bell-LaPadula dan model Biba adalah bahwa model Biba dirancang secara khusus untuk menjaga aspek ...",
    "options": {
      "a": "Kerahasiaan (Confidentiality) data militer.",
      "b": "Integritas (Integrity) data agar informasi tidak terkontaminasi oleh sumber yang tidak tepercaya.",
      "c": "Ketersediaan (Availability) jaringan dari serangan DDoS.",
      "d": "Kecepatan throughput komputasi pada CPU multi-core.",
      "e": "Kompresi data sebelum ditransmisikan."
    },
    "correct_letter": "b",
    "correct_answer": "Integritas (Integrity) data agar informasi tidak terkontaminasi oleh sumber yang tidak tepercaya.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 147
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Pada Role-Based Access Control (RBAC), hak akses (permissions) diasosiasikan langsung kepada ...",
    "options": {
      "a": "Identitas nama individu masing-masing karyawan secara mandiri.",
      "b": "Peran atau fungsi jabatan (Role), di mana pengguna kemudian ditugaskan ke dalam peran tersebut.",
      "c": "Alamat IP dan MAC address perangkat keras yang digunakan.",
      "d": "Nama komputer server database.",
      "e": "Waktu kadaluarsa token OAuth."
    },
    "correct_letter": "b",
    "correct_answer": "Peran atau fungsi jabatan (Role), di mana pengguna kemudian ditugaskan ke dalam peran tersebut.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 148
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Model Attribute-Based Access Control (ABAC) mengevaluasi kebijakan akses berdasarkan kombinasi atribut subjek, sumber daya, tindakan, dan ...",
    "options": {
      "a": "Kondisi lingkungan (environment conditions seperti waktu akses, lokasi, dan status jaringan).",
      "b": "Nomor seri kartu identitas fisik pengguna.",
      "c": "Hash MD5 dari password database administrator.",
      "d": "Panjang kabel jaringan Ethernet.",
      "e": "Merek monitor yang digunakan klien."
    },
    "correct_letter": "a",
    "correct_answer": "Kondisi lingkungan (environment conditions seperti waktu akses, lokasi, dan status jaringan).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 149
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Dalam arsitektur protokol Kerberos, komponen yang bertugas mengeluarkan Ticket Granting Ticket (TGT) kepada klien setelah autentikasi awal berhasil adalah ...",
    "options": {
      "a": "Ticket Granting Server (TGS)",
      "b": "Authentication Server (AS)",
      "c": "Resource Server (RS)",
      "d": "Service Provider (SP)",
      "e": "Certificate Revocation List (CRL)"
    },
    "correct_letter": "b",
    "correct_answer": "Authentication Server (AS)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 150
  },
  {
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Mengapa protokol Kerberos sangat bergantung pada sinkronisasi waktu (NTP) antar komputer dengan toleransi drift waktu biasanya maksimal 5 menit?",
    "options": {
      "a": "Untuk menghitung biaya sewa bandwidth jaringan secara presisi.",
      "b": "Untuk memvalidasi timestamp tiket guna mencegah serangan replay (replay attack).",
      "c": "Agar file log server tidak terhapus otomatis oleh sistem operasi.",
      "d": "Untuk memastikan CPU tidak mengalami overheat saat enkripsi data.",
      "e": "Agar proses handshake TLS tidak memerlukan sertifikat X.509."
    },
    "correct_letter": "b",
    "correct_answer": "Untuk memvalidasi timestamp tiket guna mencegah serangan replay (replay attack).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 151
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Dalam federated identity menggunakan SAML 2.0, entitas yang bertugas memverifikasi identitas pengguna dan menerbitkan SAML Assertion bertanda tangan digital disebut ...",
    "options": {
      "a": "Service Provider (SP)",
      "b": "Identity Provider (IdP)",
      "c": "Relying Party (RP)",
      "d": "Authorization Server (AS)",
      "e": "API Gateway"
    },
    "correct_letter": "b",
    "correct_answer": "Identity Provider (IdP)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 152
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Pada alur OAuth 2.0 Authorization Code Grant, apa tujuan utama penggunaan parameter 'state' yang dikirimkan klien saat mengarahkan pengguna ke Authorization Server?",
    "options": {
      "a": "Menyimpan data password pengguna dalam format base64.",
      "b": "Mencegah serangan Cross-Site Request Forgery (CSRF) pada proses pertukaran kode otorisasi.",
      "c": "Mempercepat proses parsing JSON pada token response.",
      "d": "Menentukan hak akses scope pengguna secara dinamis tanpa persetujuan server.",
      "e": "Mengenkripsi payload access token agar tidak terbaca oleh klien."
    },
    "correct_letter": "b",
    "correct_answer": "Mencegah serangan Cross-Site Request Forgery (CSRF) pada proses pertukaran kode otorisasi.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 153
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "OpenID Connect (OIDC) dibangun di atas protokol OAuth 2.0 untuk melengkapi fungsi yang sebelumnya tidak disediakan oleh OAuth 2.0 murni, yaitu fungsi ...",
    "options": {
      "a": "Otorisasi delegasi hak akses sumber daya API",
      "b": "Autentikasi identitas pengguna (federated authentication) melalui ID Token berbentuk JWT",
      "c": "Routing paket data pada layer transport TCP",
      "d": "Kompresi citra biometric sidik jari",
      "e": "Enkripsi media penyimpanan harddisk lokal"
    },
    "correct_letter": "b",
    "correct_answer": "Autentikasi identitas pengguna (federated authentication) melalui ID Token berbentuk JWT",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 154
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "JSON Web Token (JWT) terdiri dari tiga bagian utama yang dipisahkan oleh karakter titik (.), yaitu ...",
    "options": {
      "a": "Header, Payload, dan Signature",
      "b": "Username, Password, dan Salt",
      "c": "Metadata, Hash, dan Private Key",
      "d": "Issuer, Subject, dan Expiration",
      "e": "IV, Ciphertext, dan MAC"
    },
    "correct_letter": "a",
    "correct_answer": "Header, Payload, dan Signature",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 155
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Kerentanan kritis pada implementasi JWT di mana penyerang dapat memodifikasi payload dan meminta server memverifikasi token tanpa memeriksa tanda tangan terjadi apabila server menerima nilai header ...",
    "options": {
      "a": "\"alg\": \"RS256\"",
      "b": "\"alg\": \"none\"",
      "c": "\"typ\": \"JWT\"",
      "d": "\"alg\": \"HS512\"",
      "e": "\"enc\": \"A128GCM\""
    },
    "correct_letter": "b",
    "correct_answer": "\"alg\": \"none\"",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 156
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Pada serangan Session Fixation, penyerang memanfaatkan celah keamanan di mana ...",
    "options": {
      "a": "Sistem aplikasi mempertahankan session identifier yang sama persis sebelum dan sesudah pengguna berhasil login.",
      "b": "Penyerang memecahkan kunci enkripsi SSL server menggunakan quantum computing.",
      "c": "Pengguna memilih password yang sama untuk lima akun website berbeda.",
      "d": "Server database mengalami crash akibat buffer overflow pada driver SQL.",
      "e": "Session cookie kadaluarsa terlalu cepat dalam hitungan detik."
    },
    "correct_letter": "a",
    "correct_answer": "Sistem aplikasi mempertahankan session identifier yang sama persis sebelum dan sesudah pengguna berhasil login.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 157
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Mitigasi paling efektif pada aplikasi web untuk mencegah pencurian session cookie melalui serangan Cross-Site Scripting (XSS) adalah ...",
    "options": {
      "a": "Menambahkan flag HttpOnly pada cookie sesi.",
      "b": "Menyimpan session identifier di dalam LocalStorage browser.",
      "c": "Mengurangi panjang session identifier menjadi hanya 4 karakter.",
      "d": "Menonaktifkan protokol HTTPS pada web server.",
      "e": "Mengirimkan session token melalui URL query string."
    },
    "correct_letter": "a",
    "correct_answer": "Menambahkan flag HttpOnly pada cookie sesi.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 158
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Atribut cookie 'SameSite=Strict' memberikan perlindungan keamanan yang kuat terhadap serangan ...",
    "options": {
      "a": "SQL Injection",
      "b": "Cross-Site Request Forgery (CSRF)",
      "c": "Denial of Service (DoS)",
      "d": "Directory Traversal",
      "e": "Man-in-the-Middle (MitM)"
    },
    "correct_letter": "b",
    "correct_answer": "Cross-Site Request Forgery (CSRF)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 159
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Perbedaan mendasar antara Access Token dan Refresh Token pada protokol OAuth 2.0 adalah ...",
    "options": {
      "a": "Access token berumur pendek untuk mengakses resource API, sedangkan refresh token berumur lebih panjang dan digunakan untuk mendapatkan access token baru.",
      "b": "Access token disimpan di server, sedangkan refresh token disimpan di DNS publik.",
      "c": "Refresh token dikirimkan pada setiap HTTP request header ke Resource Server.",
      "d": "Access token tidak memiliki masa kedaluwarsa selamanya.",
      "e": "Refresh token hanya boleh menggunakan algoritma enkripsi simetris DES."
    },
    "correct_letter": "a",
    "correct_answer": "Access token berumur pendek untuk mengakses resource API, sedangkan refresh token berumur lebih panjang dan digunakan untuk mendapatkan access token baru.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 160
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Prinsip Separation of Duties (Pemisahan Tugas) dalam sistem Access Control bertujuan untuk ...",
    "options": {
      "a": "Memastikan semua karyawan memiliki wewenang setara dengan sistem administrator.",
      "b": "Mencegah kecurangan atau penyalahgunaan wewenang dengan mensyaratkan keterlibatan lebih dari satu individu untuk menyelesaikan tugas kritis.",
      "c": "Membagi beban kerja komputasi jaringan secara merata ke seluruh server.",
      "d": "Memisahkan partisi harddisk sistem operasi dari partisi data pengguna.",
      "e": "Memaksa setiap pengguna mengganti password setiap 24 jam sekali."
    },
    "correct_letter": "b",
    "correct_answer": "Mencegah kecurangan atau penyalahgunaan wewenang dengan mensyaratkan keterlibatan lebih dari satu individu untuk menyelesaikan tugas kritis.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 161
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Ketika merancang sistem autentikasi berbasis biometric wajah, manajemen memutuskan untuk memprioritaskan keamanan fisik fasilitas berisiko tinggi di atas kenyamanan pengguna. Penyesuaian threshold matching score (t) yang tepat adalah ...",
    "options": {
      "a": "Menurunkan nilai threshold t agar pengguna dapat masuk lebih cepat tanpa antrean.",
      "b": "Menaikkan nilai threshold t untuk meminimalkan False Acceptance Rate (FAR), meskipun False Rejection Rate (FRR) meningkat.",
      "c": "Menonaktifkan threshold dan menerima seluruh citra wajah yang terdeteksi kamera.",
      "d": "Menyetel threshold ke nilai nol mutlak.",
      "e": "Mengganti kamera beresolusi tinggi dengan sensor suhu inframerah sederhana."
    },
    "correct_letter": "b",
    "correct_answer": "Menaikkan nilai threshold t untuk meminimalkan False Acceptance Rate (FAR), meskipun False Rejection Rate (FRR) meningkat.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 162
  },
  {
    "week": "Week 2",
    "type": "Post Test",
    "question": "Apa kelemahan utama dari mekanisme autentikasi berbasis SMS OTP (One-Time Password) dibandingkan Time-based One-Time Password (TOTP) berbasis aplikasi authenticator?",
    "options": {
      "a": "SMS OTP membutuhkan perangkat hardware token khusus yang mahal.",
      "b": "SMS rentan terhadap intersepsi jaringan seluler (SS7 vulnerability) dan serangan SIM Swapping oleh penyerang.",
      "c": "SMS OTP hanya dapat digunakan pada komputer desktop tanpa koneksi internet.",
      "d": "Aplikasi authenticator selalu mengirimkan kode OTP secara plaintext ke server telekomunikasi.",
      "e": "SMS OTP tidak memiliki batas waktu kedaluwarsa."
    },
    "correct_letter": "b",
    "correct_answer": "SMS rentan terhadap intersepsi jaringan seluler (SS7 vulnerability) dan serangan SIM Swapping oleh penyerang.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 163
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Seorang security researcher menemukan zero-day vulnerability pada portal perbankan nasional. Menurut etika profesional Coordinated Vulnerability Disclosure (Responsible Disclosure), langkah pertama yang wajib diambil oleh researcher tersebut adalah ...",
    "options": {
      "a": "Menjual exploit tersebut di pasar gelap dark web untuk mendapatkan keuntungan finansial.",
      "b": "Mempublikasikan detail exploit secara publik di media sosial sebelum vendor sempat mengetahuinya.",
      "c": "Melaporkan temuan secara tertutup kepada pihak pengembang/vendor terkait dan memberikan waktu yang wajar untuk patch sebelum pengungkapan publik.",
      "d": "Menggunakan kerentanan tersebut untuk mengekstrak saldo nasabah demi membuktikan dampak risiko.",
      "e": "Menghapus seluruh database server agar kerentanan tidak dieksploitasi pihak lain."
    },
    "correct_letter": "c",
    "correct_answer": "Melaporkan temuan secara tertutup kepada pihak pengembang/vendor terkait dan memberikan waktu yang wajar untuk patch sebelum pengungkapan publik.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 164
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Berdasarkan prinsip Data Minimization dalam regulasi perlindungan data pribadi (UU PDP dan GDPR), sebuah aplikasi toko online wajib ...",
    "options": {
      "a": "Mengumpulkan seluruh data pribadi pengguna termasuk rekam medis dan data biometrik untuk cadangan masa depan.",
      "b": "Hanya mengumpulkan dan memproses data pribadi yang benar-benar relevan, memadai, dan terbatas pada tujuan transaksi yang telah disepakati.",
      "c": "Menjual data pelanggan kepada pihak ketiga tanpa memerlukan persetujuan pemilik data.",
      "d": "Menyimpan data log percakapan telepon pengguna selama minimal 50 tahun.",
      "e": "Menonaktifkan enkripsi database agar data mudah diaudit oleh publik."
    },
    "correct_letter": "b",
    "correct_answer": "Hanya mengumpulkan dan memproses data pribadi yang benar-benar relevan, memadai, dan terbatas pada tujuan transaksi yang telah disepakati.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 165
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Dalam UU ITE (Undang-Undang Informasi dan Transaksi Elektronik), tindakan mengakses komputer atau sistem elektronik milik orang lain dengan cara melanggar, menerobos, melampaui, atau menjebol sistem pengamanan diatur secara spesifik dalam ...",
    "options": {
      "a": "Pasal 27 ayat (1) (Larangan mendistribusikan konten elektronik berkonten asusila/pornografi)",
      "b": "Pasal 28 ayat (2) (Larangan menyebarkan ujaran kebencian berbasis SARA)",
      "c": "Pasal 30 ayat (3) (Illegal access dengan melanggar, menerobos, melampaui, atau menjebol sistem pengamanan/cracking)",
      "d": "Pasal 35 (Manipulasi atau pemalsuan dokumen elektronik/electronic forgery)",
      "e": "Pasal 45 (Ketentuan sanksi pidana penjara dan denda)"
    },
    "correct_letter": "c",
    "correct_answer": "Pasal 30 ayat (3) (Illegal access dengan melanggar, menerobos, melampaui, atau menjebol sistem pengamanan/cracking)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 166
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Seseorang memasang packet sniffer pada jaringan Wi-Fi privat perusahaan tanpa izin untuk menangkap transmisi data sensitif yang tidak bersifat publik. Tindakan penyadapan ini diatur dan dilarang dalam UU ITE pada ...",
    "options": {
      "a": "Pasal 31 ayat (1) (Interception/penyadapan transmisi informasi elektronik pada sistem privat tanpa hak/sniffing)",
      "b": "Pasal 30 ayat (1) (Akses tanpa hak ke komputer atau sistem elektronik)",
      "c": "Pasal 33 (Tindakan yang berakibat terganggunya kinerja sistem elektronik/serangan DoS)",
      "d": "Pasal 35 (Pemalsuan data atau manipulasi dokumen elektronik)",
      "e": "Pasal 36 (Pemberatan hukuman apabila kejahatan siber mengakibatkan kerugian materiil bagi pihak lain)"
    },
    "correct_letter": "a",
    "correct_answer": "Pasal 31 ayat (1) (Interception/penyadapan transmisi informasi elektronik pada sistem privat tanpa hak/sniffing)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 167
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Seorang mantan karyawan yang kecewa sengaja menghapus tabel database nasabah dan mengubah record saldo rekening. Tindakan pengubahan, perusakan, dan penghapusan informasi elektronik milik orang lain ini melanggar UU ITE ...",
    "options": {
      "a": "Pasal 27 ayat (3) (Pencemaran nama baik dan penghinaan melalui media sosial)",
      "b": "Pasal 32 ayat (1) (Data interference: mengubah, menambah, mengurangi, merusak, atau menghapus informasi/dokumen elektronik orang lain)",
      "c": "Pasal 31 ayat (2) (Penyadapan transmisi data dari satu komputer ke komputer lain)",
      "d": "Pasal 34 (Penyediaan atau penjualan alat dan perangkat lunak peretas)",
      "e": "Pasal 30 ayat (1) (Mengakses sistem komputer tanpa mengubah isi data)"
    },
    "correct_letter": "b",
    "correct_answer": "Pasal 32 ayat (1) (Data interference: mengubah, menambah, mengurangi, merusak, atau menghapus informasi/dokumen elektronik orang lain)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 168
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Tindakan melancarkan serangan Distributed Denial of Service (DDoS) yang menyebabkan server layanan publik lumpuh dan tidak dapat diakses masyarakat termasuk pelanggaran UU ITE ...",
    "options": {
      "a": "Pasal 33 (Tindakan yang berakibat terganggunya Sistem Elektronik dan/atau mengakibatkan Sistem Elektronik menjadi tidak bekerja sebagaimana mestinya)",
      "b": "Pasal 27 ayat (2) tentang perjudian online",
      "c": "Pasal 31 ayat (1) tentang penyadapan",
      "d": "Pasal 35 tentang manipulasi dokumen",
      "e": "Pasal 30 ayat (1) tentang browsing biasa"
    },
    "correct_letter": "a",
    "correct_answer": "Pasal 33 (Tindakan yang berakibat terganggunya Sistem Elektronik dan/atau mengakibatkan Sistem Elektronik menjadi tidak bekerja sebagaimana mestinya)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 169
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Seseorang memproduksi dan memperjualbelikan software peretas (exploit kit) yang dirancang khusus untuk memfasilitasi pembobolan sistem perbankan. Tindakan penyediaan perangkat keras atau lunak untuk memfasilitasi kejahatan komputer ini diatur dalam UU ITE ...",
    "options": {
      "a": "Pasal 30 ayat (2) (Akses ilegal untuk memperoleh informasi/dokumen elektronik)",
      "b": "Pasal 34 ayat (1) (Misuse of devices: memproduksi, menjual, menyebarkan, atau memiliki perangkat keras/lunak yang dirancang untuk memfasilitasi peretasan)",
      "c": "Pasal 31 ayat (1) (Penyadapan transmisi data jaringan privat)",
      "d": "Pasal 28 ayat (1) (Penyebaran berita bohong yang merugikan konsumen transaksi elektronik)",
      "e": "Pasal 29 (Pengiriman informasi elektronik yang berisi ancaman kekerasan pribadi)"
    },
    "correct_letter": "b",
    "correct_answer": "Pasal 34 ayat (1) (Misuse of devices: memproduksi, menjual, menyebarkan, atau memiliki perangkat keras/lunak yang dirancang untuk memfasilitasi peretasan)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 170
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Membuat sertifikat digital palsu atau memanipulasi dokumen elektronik rekening bank agar tampak seolah-olah merupakan data yang otentik (Electronic Forgery) dilarang dalam UU ITE pada ...",
    "options": {
      "a": "Pasal 35 (Electronic forgery: memanipulasi, menciptakan, atau mengubah dokumen elektronik agar seolah-olah otentik)",
      "b": "Pasal 30 (Illegal access ke dalam jaringan komputer tanpa hak)",
      "c": "Pasal 31 (Interception atau penyadapan kabel/gelombang radio transmisi)",
      "d": "Pasal 32 (Perusakan atau penghapusan data database perusahaan)",
      "e": "Pasal 33 (Serangan siber yang mengakibatkan lumpuhnya layanan server)"
    },
    "correct_letter": "a",
    "correct_answer": "Pasal 35 (Electronic forgery: memanipulasi, menciptakan, atau mengubah dokumen elektronik agar seolah-olah otentik)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 171
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Budapest Convention on Cybercrime (Convention ETS 185) merupakan instrumen internasional penting yang bertujuan untuk ...",
    "options": {
      "a": "Mewajibkan seluruh negara memblokir akses internet secara sepihak.",
      "b": "Mengharmonisasikan hukum pidana siber nasional, meningkatkan kemampuan investigasi, dan memfasilitasi kerjasama peradilan internasional lintas batas.",
      "c": "Menetapkan tarif pajak standar untuk transaksi e-commerce global.",
      "d": "Melarang riset kriptografi sumber terbuka di perguruan tinggi.",
      "e": "Menghapus wewenang aparat penegak hukum lokal dalam menyita barang bukti digital."
    },
    "correct_letter": "b",
    "correct_answer": "Mengharmonisasikan hukum pidana siber nasional, meningkatkan kemampuan investigasi, dan memfasilitasi kerjasama peradilan internasional lintas batas.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 172
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Dalam hukum forensik digital, dokumentasi kronologis ketat mengenai siapa yang menyita, menerima, memindahkan, menganalisis, dan menyimpan barang bukti digital disebut ...",
    "options": {
      "a": "Order of Volatility",
      "b": "Chain of Custody",
      "c": "Incident Response Plan",
      "d": "Electronic Discovery Protocol",
      "e": "Forensic Audit Log"
    },
    "correct_letter": "b",
    "correct_answer": "Chain of Custody",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 173
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Mengapa penyidik forensik digital wajib menggunakan perangkat hardware write-blocker saat menghubungkan media penyimpanan bukti asli ke komputer workstation analisis?",
    "options": {
      "a": "Agar kecepatan transfer data harddisk meningkat dua kali lipat.",
      "b": "Untuk mencegah sistem operasi workstation mengubah, menulis, atau memodifikasi metadata/isi berkas pada media bukti asli secara tidak sengaja.",
      "c": "Untuk menghapus malware yang mungkin aktif pada harddisk bukti secara otomatis.",
      "d": "Agar partisi harddisk yang terenkripsi langsung terdekripsi tanpa kata sandi.",
      "e": "Untuk mengompresi ukuran disk image menjadi format zip."
    },
    "correct_letter": "b",
    "correct_answer": "Untuk mencegah sistem operasi workstation mengubah, menulis, atau memodifikasi metadata/isi berkas pada media bukti asli secara tidak sengaja.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 174
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Bagaimana seorang ahli forensik membuktikan di depan pengadilan bahwa salinan bit-stream image identik secara sempurna dengan harddisk bukti asli di tempat kejadian perkara (TKP)?",
    "options": {
      "a": "Dengan membandingkan jumlah folder pada Windows Explorer.",
      "b": "Dengan menunjukkan bahwa nilai cryptographic hash (misalnya SHA-256) dari media asli sama persis dengan nilai hash salinan image sebelum dan sesudah analisis.",
      "c": "Dengan mencetak isi seluruh file di atas kertas bermaterai.",
      "d": "Dengan mengonfirmasi pengakuan lisan dari tersangka peretasan.",
      "e": "Dengan memeriksa tanggal pembuatan casing komputer."
    },
    "correct_letter": "b",
    "correct_answer": "Dengan menunjukkan bahwa nilai cryptographic hash (misalnya SHA-256) dari media asli sama persis dengan nilai hash salinan image sebelum dan sesudah analisis.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 175
  },
  {
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Berdasarkan standar RFC 3227 mengenai urutan volatilitas data (Order of Volatility), manakah sumber data yang paling mudah hilang / mudah menguap dan wajib diakuisisi pertama kali?",
    "options": {
      "a": "Data pada harddisk magnetik lokal",
      "b": "Media pita cadangan (backup tape)",
      "c": "Isi register CPU, cache memori, dan memori fisik (RAM)",
      "d": "Dokumen cetak pada lemari arsip",
      "e": "Kabel jaringan serat optik"
    },
    "correct_letter": "c",
    "correct_answer": "Isi register CPU, cache memori, dan memori fisik (RAM)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 176
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Pada penanganan insiden ransomware yang sedang aktif menginfeksi sebuah server, mengapa mematikan daya secara mendadak (hard power-off) sering kali tidak disarankan sebelum live memory capture dilakukan?",
    "options": {
      "a": "Mematikan server akan merusak fisik monitor dan keyboard.",
      "b": "Daya yang hilang akan melenyapkan isi RAM yang berpotensi menyimpan kunci enkripsi ransomware, proses malware aktif, dan koneksi jaringan memori.",
      "c": "Ransomware akan langsung menyebar ke seluruh internet secara otomatis.",
      "d": "Sistem operasi tidak akan bisa diinstal ulang selamanya.",
      "e": "Harddisk akan kehilangan partisi booting secara permanen."
    },
    "correct_letter": "b",
    "correct_answer": "Daya yang hilang akan melenyapkan isi RAM yang berpotensi menyimpan kunci enkripsi ransomware, proses malware aktif, dan koneksi jaringan memori.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 177
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Teknik anti-forensik di mana penyerang dengan sengaja memanipulasi timestamp MAC (Modified, Accessed, Created) pada file system untuk mengaburkan kronologi insiden disebut ...",
    "options": {
      "a": "Data Degaussing",
      "b": "Timestomping",
      "c": "Buffer Overflow",
      "d": "Memory Injection",
      "e": "Traffic Sniffing"
    },
    "correct_letter": "b",
    "correct_answer": "Timestomping",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 178
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Serangan Business Email Compromise (BEC) umumnya menargetkan divisi keuangan perusahaan dengan modus ...",
    "options": {
      "a": "Menginfeksi komputer dengan worm jaringan yang menggandakan diri.",
      "b": "Memalsukan email identitas eksekutif/vendor rekanan tepercaya untuk menginstruksikan transfer dana ke rekening penipu melalui rekayasa sosial.",
      "c": "Melakukan serangan brute-force terhadap password BIOS server.",
      "d": "Memutuskan kabel optik bawah laut antarnegara.",
      "e": "Mengubah tampilan visual halaman depan website perusahaan (web defacement)."
    },
    "correct_letter": "b",
    "correct_answer": "Memalsukan email identitas eksekutif/vendor rekanan tepercaya untuk menginstruksikan transfer dana ke rekening penipu melalui rekayasa sosial.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 179
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Serangan phishing yang ditargetkan secara spesifik kepada individu berpangkat tinggi seperti CEO, CFO, atau pejabat pemerintah dengan informasi personal yang sangat mendalam disebut ...",
    "options": {
      "a": "Bulk Spamming",
      "b": "Whaling",
      "c": "Phreaking",
      "d": "Adware Infiltration",
      "e": "Denial of Service"
    },
    "correct_letter": "b",
    "correct_answer": "Whaling",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 180
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Perbedaan lisensi perangkat lunak Copyleft (seperti GNU GPL) dengan lisensi Permissive (seperti MIT atau Apache 2.0) adalah ...",
    "options": {
      "a": "Lisensi GPL melarang siapa pun mengunduh kode sumber.",
      "b": "Lisensi GPL mewajibkan setiap karya turunan untuk tetap dirilis dengan lisensi open source yang sama (GPL), sedangkan MIT mengizinkan integrasi ke software komersial berpemilik.",
      "c": "Lisensi MIT melarang penggunaan perangkat lunak untuk keperluan komersial.",
      "d": "Lisensi GPL memungut royalti sebesar 10% dari setiap penjualan.",
      "e": "Lisensi MIT hanya berlaku untuk aplikasi berbasis mobile Android."
    },
    "correct_letter": "b",
    "correct_answer": "Lisensi GPL mewajibkan setiap karya turunan untuk tetap dirilis dengan lisensi open source yang sama (GPL), sedangkan MIT mengizinkan integrasi ke software komersial berpemilik.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 181
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Dalam konteks etika dan legalitas Penetration Testing, dokumen krusial yang mendefinisikan batasan sistem target, jadwal waktu pengujian, teknik yang diizinkan, dan kontak darurat disebut ...",
    "options": {
      "a": "Certificate of Authenticity (CoA)",
      "b": "Rules of Engagement (RoE) / Scope of Work",
      "c": "End-User License Agreement (EULA)",
      "d": "Privacy Policy Statement",
      "e": "Hardware Warranty Agreement"
    },
    "correct_letter": "b",
    "correct_answer": "Rules of Engagement (RoE) / Scope of Work",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 182
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Karakteristik utama dari ancaman Insider Threat yang menjadikannya sangat berbahaya dan sulit dideteksi oleh firewall konvensional adalah ...",
    "options": {
      "a": "Penyerang tidak memiliki akun login ke dalam sistem perusahaan.",
      "b": "Pelaku telah memiliki kredensial resmi dan hak akses sah ke jaringan internal sehingga aktivitas awalnya tampak seperti perilaku kerja biasa.",
      "c": "Serangan selalu berasal dari negara dengan zona waktu yang berbeda.",
      "d": "Pelaku selalu menggunakan alat peretas automated exploit yang meninggalkan jejak jelas.",
      "e": "Insider threat hanya terjadi pada sistem operasi lama yang tidak lagi diperbarui."
    },
    "correct_letter": "b",
    "correct_answer": "Pelaku telah memiliki kredensial resmi dan hak akses sah ke jaringan internal sehingga aktivitas awalnya tampak seperti perilaku kerja biasa.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 183
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Sifat 'Non-Repudiation' (penyangkalan yang tidak dapat dilakukan) dalam transaksi elektronik paling tepat diwujudkan melalui penggunaan teknologi ...",
    "options": {
      "a": "CAPTCHA berbasis gambar",
      "b": "Tanda tangan digital (Digital Signature) berbasis kriptografi asimetris dan sertifikat elektronik tersertifikasi",
      "c": "Protokol HTTP tanpa enkripsi",
      "d": "Password bersama (shared password) satu kantor",
      "e": "Firewall berbasis stateless packet filter"
    },
    "correct_letter": "b",
    "correct_answer": "Tanda tangan digital (Digital Signature) berbasis kriptografi asimetris dan sertifikat elektronik tersertifikasi",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 184
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Berdasarkan regulasi UU Perlindungan Data Pribadi (UU PDP), ketika terjadi insiden kegagalan perlindungan data pribadi (data breach), pengendali data wajib menyampaikan pemberitahuan tertulis kepada lembaga pengawas dan subjek data paling lambat dalam waktu ...",
    "options": {
      "a": "3 x 24 jam",
      "b": "30 hari kerja",
      "c": "6 bulan setelah audit tahunan",
      "d": "1 tahun setelah insiden selesai diinvestigasi",
      "e": "Tidak ada kewajiban memberitahukan insiden kepada subjek data"
    },
    "correct_letter": "a",
    "correct_answer": "3 x 24 jam",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 185
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Prinsip etika ACM Code of Ethics mengenai 'Honor Property Rights including Copyrights and Patents' menegaskan bahwa profesional komputer dilarang ...",
    "options": {
      "a": "Membaca dokumentasi open-source di internet.",
      "b": "Menduplikasi, mendistribusikan, atau menggunakan karya perangkat lunak atau kekayaan intelektual orang lain tanpa izin atau lisensi yang sah.",
      "c": "Membuat kode program yang menggunakan pustaka matematika standar.",
      "d": "Membeli perangkat keras komputer dari vendor luar negeri.",
      "e": "Menulis program komputer untuk tujuan komersial."
    },
    "correct_letter": "b",
    "correct_answer": "Menduplikasi, mendistribusikan, atau menggunakan karya perangkat lunak atau kekayaan intelektual orang lain tanpa izin atau lisensi yang sah.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 186
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Dokumen hukum internasional non-mengikat yang merumuskan bagaimana hukum humaniter internasional berlaku pada domain perang siber (cyber warfare) dikenal dengan nama ...",
    "options": {
      "a": "Geneva Convention Amendment 1999",
      "b": "Tallinn Manual on the International Law Applicable to Cyber Warfare",
      "c": "Wassenaar Arrangement on Cyber Arms",
      "d": "Kyoto Protocol Cyber Annex",
      "e": "Rome Statute Cyber Article"
    },
    "correct_letter": "b",
    "correct_answer": "Tallinn Manual on the International Law Applicable to Cyber Warfare",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 187
  },
  {
    "week": "Week 3",
    "type": "Post Test",
    "question": "Seorang teknisi TI menemukan log bahwa salah satu pengguna mengunduh data rahasia perusahaan dalam jumlah mencurigakan pada pukul 02:00 dini hari. Sebelum mengambil tindakan hukum atau disipliner, langkah kepatuhan profesional yang harus dijaga teknisi adalah ...",
    "options": {
      "a": "Menyebarkan nama pengguna tersebut di grup obrolan publik agar dipermalukan.",
      "b": "Menjaga integritas data log sebagai barang bukti, mencatat rantai penanganan bukti (chain of custody), dan melaporkannya kepada tim kepatuhan internal/CISO sesuai SOP.",
      "c": "Menghapus akun pengguna dan memformat komputer tanpa menyimpan salinan forensik.",
      "d": "Meretas perangkat pribadi pengguna tersebut untuk membalas dendam.",
      "e": "Mengabaikan insiden tersebut karena bukan tanggung jawab langsung."
    },
    "correct_letter": "b",
    "correct_answer": "Menjaga integritas data log sebagai barang bukti, mencatat rantai penanganan bukti (chain of custody), dan melaporkannya kepada tim kepatuhan internal/CISO sesuai SOP.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 188
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Prinsip 'Fail-Safe Defaults' dalam desain perangkat lunak aman menyatakan bahwa ...",
    "options": {
      "a": "Jika terjadi kegagalan atau galat pada sistem, hak akses secara bawaan harus ditolak (default deny), bukan diizinkan.",
      "b": "Sistem harus terus berjalan meskipun memori bocor tanpa membatasi hak akses pengguna.",
      "c": "Aplikasi harus mematikan firewall server jika terjadi kesalahan jaringan.",
      "d": "Semua pengguna baru secara otomatis diberikan hak akses administrator sistem.",
      "e": "Sistem harus merahasiakan algoritma enkripsi agar tidak diketahui penguji keamanan."
    },
    "correct_letter": "a",
    "correct_answer": "Jika terjadi kegagalan atau galat pada sistem, hak akses secara bawaan harus ditolak (default deny), bukan diizinkan.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 189
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Pada arsitektur memori program berbasis arsitektur x86/x64, arah pertumbuhan stack dan letak Return Address (EIP/RIP) dalam stack frame menyebabkan buffer overflow dapat mengeksploitasi sistem karena ...",
    "options": {
      "a": "Stack tumbuh ke arah alamat memori lebih rendah, sementara pengisian array buffer lokal tumbuh ke arah alamat lebih tinggi menuju Saved Frame Pointer dan Return Address.",
      "b": "Stack dan Heap berada pada segmen memori yang sama persis tanpa pemisah.",
      "c": "Return Address selalu disimpan di dalam register prosesor dan tidak pernah diletakkan di memori RAM.",
      "d": "Ukuran stack selalu bersifat dinamis tanpa batas maksimal.",
      "e": "Compiler C selalu menyisipkan kode NOP sled secara otomatis pada setiap fungsi."
    },
    "correct_letter": "a",
    "correct_answer": "Stack tumbuh ke arah alamat memori lebih rendah, sementara pengisian array buffer lokal tumbuh ke arah alamat lebih tinggi menuju Saved Frame Pointer dan Return Address.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 190
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Sebuah loop pada bahasa C menulis data sebanyak N+1 elemen ke dalam array buffer berukuran N. Kesalahan batas memori satu byte ini dikenal sebagai ...",
    "options": {
      "a": "Null Pointer Dereference",
      "b": "Off-by-one vulnerability",
      "c": "Type Confusion",
      "d": "Integer Underflow",
      "e": "Cross-Site Scripting"
    },
    "correct_letter": "b",
    "correct_answer": "Off-by-one vulnerability",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 191
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Mekanisme proteksi Stack Canary (Stack Cookie) yang disisipkan oleh compiler antara variabel lokal dan Saved Frame Pointer bekerja dengan cara ...",
    "options": {
      "a": "Mengenkripsi seluruh instruksi biner menggunakan AES-256 sebelum dieksekusi CPU.",
      "b": "Menaruh nilai integer acak sebelum Return Address dan memverifikasi integritas nilai tersebut sebelum fungsi melakukan instruksi return (RET).",
      "c": "Mengalokasikan seluruh variabel lokal di memori Read-Only Data (.rodata).",
      "d": "Menonaktifkan pointer arithmetic pada runtime sistem operasi.",
      "e": "Mengganti semua tipe data integer menjadi float."
    },
    "correct_letter": "b",
    "correct_answer": "Menaruh nilai integer acak sebelum Return Address dan memverifikasi integritas nilai tersebut sebelum fungsi melakukan instruksi return (RET).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 192
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Fitur keamanan Address Space Layout Randomization (ASLR) pada sistem operasi modern dirancang untuk menggagalkan eksploitasi buffer overflow dengan cara ...",
    "options": {
      "a": "Mengacak lokasi base address memori stack, heap, dan shared libraries setiap kali program dieksekusi sehingga penyerang tidak dapat memprediksi alamat lompatan shellcode.",
      "b": "Menghapus kode biner program setelah proses selesai berjalan.",
      "c": "Mengubah nama file executable menjadi string acak di direktori instalasi.",
      "d": "Memblokir seluruh port jaringan TCP yang terbuka di server.",
      "e": "Membatasi kecepatan eksekusi instruksi per detik pada CPU."
    },
    "correct_letter": "a",
    "correct_answer": "Mengacak lokasi base address memori stack, heap, dan shared libraries setiap kali program dieksekusi sehingga penyerang tidak dapat memprediksi alamat lompatan shellcode.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 193
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Data Execution Prevention (DEP) atau fitur No-Execute (NX / W^X) melindungi sistem operasi dengan menerapkan aturan bahwa ...",
    "options": {
      "a": "Sebuah halaman memori tidak boleh memiliki izin tulis (writable) dan izin eksekusi (executable) secara bersamaan.",
      "b": "File biner tidak boleh dibaca oleh pengguna non-root.",
      "c": "Aplikasi tidak diizinkan membuka koneksi soket jaringan keluar.",
      "d": "Program C dilarang menggunakan fungsi alokasi memori dinamis malloc().",
      "e": "Setiap file teks harus memiliki ekstensi .bin sebelum dijalankan."
    },
    "correct_letter": "a",
    "correct_answer": "Sebuah halaman memori tidak boleh memiliki izin tulis (writable) dan izin eksekusi (executable) secara bersamaan.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 194
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Ketika mekanisme proteksi DEP/NX aktif sehingga shellcode di stack tidak dapat dieksekusi langsung, teknik eksploitasi canggih yang merangkai potongan instruksi biner yang sudah ada di memori dan diakhiri instruksi 'ret' disebut ...",
    "options": {
      "a": "SQL Injection",
      "b": "Return-Oriented Programming (ROP)",
      "c": "Cross-Site Request Forgery (CSRF)",
      "d": "Denial of Service (DoS)",
      "e": "Directory Traversal"
    },
    "correct_letter": "b",
    "correct_answer": "Return-Oriented Programming (ROP)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 195
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Kerentanan memori Use-After-Free (UAF) terjadi pada sebuah aplikasi ketika ...",
    "options": {
      "a": "Sebuah pointer tetap merujuk dan mengakses area memori heap yang sebelumnya telah dibebaskan (deallocated/freed).",
      "b": "Aplikasi tidak menggunakan lisensi perangkat lunak berbayar.",
      "c": "Sistem kehabisan ruang harddisk saat menyimpan log aplikasi.",
      "d": "Dua thread mengakses variabel konstan secara bersamaan.",
      "e": "Program C dikompilasi menggunakan compiler berbasis Java."
    },
    "correct_letter": "a",
    "correct_answer": "Sebuah pointer tetap merujuk dan mengakses area memori heap yang sebelumnya telah dibebaskan (deallocated/freed).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 196
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Memanggil fungsi free() sebanyak dua kali pada alamat pointer memori heap yang sama tanpa alokasi baru di antaranya memicu kerentanan yang disebut ...",
    "options": {
      "a": "Double Free",
      "b": "Memory Leak",
      "c": "Buffer Underflow",
      "d": "Stack Exhaustion",
      "e": "Deadlock Threading"
    },
    "correct_letter": "a",
    "correct_answer": "Double Free",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 197
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Perhatikan potongan kode C berikut: printf(user_input);. Mengapa penulisan kode tersebut sangat berbahaya?",
    "options": {
      "a": "Fungsi printf tidak mendukung tampilan teks berwarna di terminal.",
      "b": "Jika user_input berisi format specifier seperti %x, %s, atau %n, penyerang dapat membaca isi stack atau menulis data ke alamat memori arbitrer (Format String Vulnerability).",
      "c": "Fungsi printf akan otomatis mengunduh malware dari internet jika string terlalu panjang.",
      "d": "Compiler akan menolak mengompilasi kode tersebut secara permanen.",
      "e": "Variabel user_input otomatis terhapus dari sistem berkas."
    },
    "correct_letter": "b",
    "correct_answer": "Jika user_input berisi format specifier seperti %x, %s, atau %n, penyerang dapat membaca isi stack atau menulis data ke alamat memori arbitrer (Format String Vulnerability).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 198
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Sebuah variabel unsigned 16-bit integer bernilai 65535 ditambah dengan nilai 1. Fenomena aritmatika yang terjadi sehingga nilai variabel tersebut membungkus menjadi 0 disebut ...",
    "options": {
      "a": "Floating-point division by zero",
      "b": "Integer Overflow / Wraparound",
      "c": "Buffer Smashing",
      "d": "Race Condition",
      "e": "Type Casting Violation"
    },
    "correct_letter": "b",
    "correct_answer": "Integer Overflow / Wraparound",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 199
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Kondisi balapan Time-of-Check to Time-of-Use (TOCTOU) pada sistem berkas terjadi ketika ...",
    "options": {
      "a": "Terdapat jeda waktu antara saat sistem memeriksa izin suatu berkas (check) dan saat sistem melakukan operasi terhadap berkas tersebut (use), yang memungkinkan penyerang mengganti berkas dengan symlink.",
      "b": "Jam internal server mengalami lompatan waktu ke masa lampau akibat manipulasi NTP.",
      "c": "Waktu kedaluwarsa password pengguna habis saat proses login berlangsung.",
      "d": "Dua query SQL dijalankan pada koneksi database yang berbeda tanpa transaksi.",
      "e": "Sistem kompilasi kode membutuhkan waktu lebih dari 60 menit."
    },
    "correct_letter": "a",
    "correct_answer": "Terdapat jeda waktu antara saat sistem memeriksa izin suatu berkas (check) dan saat sistem melakukan operasi terhadap berkas tersebut (use), yang memungkinkan penyerang mengganti berkas dengan symlink.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 200
  },
  {
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Manakah fungsi pustaka standar bahasa C berikut yang dianggap SANGAT BERBAHAYA dan dilarang digunakan dalam secure coding karena tidak memiliki mekanisme pembatasan ukuran input sama sekali?",
    "options": {
      "a": "fgets()",
      "b": "snprintf()",
      "c": "gets()",
      "d": "strncpy()",
      "e": "strncat()"
    },
    "correct_letter": "c",
    "correct_answer": "gets()",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 201
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Mengapa pendekatan input validation berbasis Whitelisting (Positive Validation) jauh lebih aman dibandingkan Blacklisting (Negative Validation)?",
    "options": {
      "a": "Whitelisting hanya menerima pola data yang secara eksplisit diketahui valid dan aman, sedangkan blacklisting berisiko gagal mendeteksi teknik pengaburan baru (obfuscation/evasion).",
      "b": "Whitelisting menggunakan algoritma AI canggih yang tidak memerlukan konfigurasi aturan.",
      "c": "Blacklisting membuat ukuran file program menjadi terlalu besar untuk memori RAM.",
      "d": "Whitelisting hanya memeriksa ekstensi file tanpa memeriksa isi konten.",
      "e": "Blacklisting dilarang oleh standar keamanan perangkat keras PCI-DSS."
    },
    "correct_letter": "a",
    "correct_answer": "Whitelisting hanya menerima pola data yang secara eksplisit diketahui valid dan aman, sedangkan blacklisting berisiko gagal mendeteksi teknik pengaburan baru (obfuscation/evasion).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 202
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Sebelum data input pengguna divalidasi terhadap pola aturan keamanan, data tersebut wajib melalui proses 'Canonicalization'. Tujuan proses ini adalah ...",
    "options": {
      "a": "Mengubah data input menjadi bentuk representasi standar yang seragam untuk mencegah bypass berbasis berbagai variasi encoding (seperti URL encoding, Unicode ganda, atau path traversal).",
      "b": "Menghapus seluruh angka dan menyisakan huruf alfabet saja.",
      "c": "Mengompresi data input agar hemat penyimpanan disk.",
      "d": "Menyimpan data input ke file log tanpa divalidasi.",
      "e": "Mengenkripsi data input menggunakan kunci publik server."
    },
    "correct_letter": "a",
    "correct_answer": "Mengubah data input menjadi bentuk representasi standar yang seragam untuk mencegah bypass berbasis berbagai variasi encoding (seperti URL encoding, Unicode ganda, atau path traversal).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 203
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Static Application Security Testing (SAST) memiliki keunggulan dibandingkan Dynamic Application Security Testing (DAST) dalam hal ...",
    "options": {
      "a": "SAST menguji aplikasi pada kondisi runtime aktif tanpa membutuhkan kode sumber.",
      "b": "SAST dapat menganalisis seluruh alur kode sumber secara mendalam pada fase awal pengembangan (shift-left) dan menunjukkan lokasi baris kode yang rentan secara presisi.",
      "c": "SAST tidak pernah menghasilkan false positive sama sekali.",
      "d": "SAST hanya dapat mendeteksi kerentanan konfigurasi web server dan firewall.",
      "e": "SAST memerlukan kredensial login aktif pengguna untuk bekerja."
    },
    "correct_letter": "b",
    "correct_answer": "SAST dapat menganalisis seluruh alur kode sumber secara mendalam pada fase awal pengembangan (shift-left) dan menunjukkan lokasi baris kode yang rentan secara presisi.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 204
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Keterbatasan utama dari pengujian keamanan dinamis (DAST) adalah ...",
    "options": {
      "a": "DAST memerlukan akses penuh ke seluruh repositori kode sumber (white-box).",
      "b": "DAST hanya menguji jalur eksekusi yang berhasil dipicu selama sesi pengujian runtime (black-box) dan kesulitan mendeteksi fungsi tersembunyi yang tidak terhubung ke antarmuka.",
      "c": "DAST tidak dapat dijalankan pada aplikasi berbasis web.",
      "d": "DAST menghasilkan laporan analisis kode baris per baris secara otomatis.",
      "e": "DAST hanya dapat menguji kelemahan fisik perangkat keras komputer."
    },
    "correct_letter": "b",
    "correct_answer": "DAST hanya menguji jalur eksekusi yang berhasil dipicu selama sesi pengujian runtime (black-box) dan kesulitan mendeteksi fungsi tersembunyi yang tidak terhubung ke antarmuka.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 205
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Teknik pengujian Interactive Application Security Testing (IAST) bekerja dengan cara ...",
    "options": {
      "a": "Memasang sensor/agent instrumentasi di dalam runtime aplikasi untuk memantau aliran data dan perilaku kode saat pengujian fungsional berlangsung.",
      "b": "Mengirimkan formulir kuesioner wawancara keamanan kepada seluruh programmer.",
      "c": "Melakukan brute-force dictionary attack terhadap port SSH server.",
      "d": "Menguji daya tahan fisik server terhadap guncangan gempa bumi.",
      "e": "Membongkar chip mikrokontroler hardware menggunakan mikroskop elektron."
    },
    "correct_letter": "a",
    "correct_answer": "Memasang sensor/agent instrumentasi di dalam runtime aplikasi untuk memantau aliran data dan perilaku kode saat pengujian fungsional berlangsung.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 206
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Metode pengujian Fuzzing (Fuzz Testing) bertujuan menemukan cacat software (seperti crash atau buffer overflow) dengan mekanisme ...",
    "options": {
      "a": "Menganalisis dokumentasi manual penggunaan sistem secara teliti.",
      "b": "Mengirimkan volume besar data input acak, malformed, atau semi-terstruktur yang tidak terduga ke dalam program dan memantau terjadinya anomali.",
      "c": "Mengecek apakah tampilan UI tombol telah simetris di berbagai browser.",
      "d": "Mengaudit laporan keuangan perusahaan pengembang software.",
      "e": "Memeriksa ejaan tata bahasa pada komentar kode sumber."
    },
    "correct_letter": "b",
    "correct_answer": "Mengirimkan volume besar data input acak, malformed, atau semi-terstruktur yang tidak terduga ke dalam program dan memantau terjadinya anomali.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 207
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Dalam pemodelan ancaman (Threat Modeling) STRIDE, huruf 'T' mewakili ancaman 'Tampering' yang didefinisikan sebagai ...",
    "options": {
      "a": "Tindakan menyamar sebagai pengguna yang sah (Spoofing).",
      "b": "Modifikasi atau manipulasi data yang tidak sah baik saat diam maupun saat transit di jaringan.",
      "c": "Penyangkalan keterlibatan dalam suatu transaksi (Repudiation).",
      "d": "Pembocoran informasi rahasia kepada pihak tidak berhak (Information Disclosure).",
      "e": "Melumpuhkan ketersediaan layanan sistem (Denial of Service)."
    },
    "correct_letter": "b",
    "correct_answer": "Modifikasi atau manipulasi data yang tidak sah baik saat diam maupun saat transit di jaringan.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 208
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Dalam STRIDE, ancaman 'Elevation of Privilege' mengacu pada situasi di mana ...",
    "options": {
      "a": "Penyerang berhasil memperoleh tingkat hak akses yang lebih tinggi daripada yang semestinya diizinkan (misalnya dari user biasa menjadi root/admin).",
      "b": "Pengguna menghapus log audit untuk menyembunyikan jejak transaksi.",
      "c": "Aplikasi menampilkan error stack trace lengkap ke layar browser.",
      "d": "Server kehabisan kapasitas memori RAM akibat memory leak.",
      "e": "Pengguna lupa kata sandi dan meminta reset password melalui email."
    },
    "correct_letter": "a",
    "correct_answer": "Penyerang berhasil memperoleh tingkat hak akses yang lebih tinggi daripada yang semestinya diizinkan (misalnya dari user biasa menjadi root/admin).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 209
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Mengapa bahasa pemrograman modern seperti Rust dianggap kebal terhadap sebagian besar bug memori (memory-safety) dibandingkan C/C++?",
    "options": {
      "a": "Rust tidak menggunakan memori RAM sama sekali saat mengeksekusi program.",
      "b": "Rust menerapkan sistem Ownership, Borrowing, dan Lifetimes yang ketat pada saat compile-time tanpa memerlukan garbage collector runtime.",
      "c": "Rust secara otomatis mengenkripsi seluruh variabel menggunakan kunci AES.",
      "d": "Program Rust hanya dapat dijalankan di dalam virtual machine terisolasi.",
      "e": "Rust tidak mengizinkan pembuatan fungsi atau loop perulangan."
    },
    "correct_letter": "b",
    "correct_answer": "Rust menerapkan sistem Ownership, Borrowing, dan Lifetimes yang ketat pada saat compile-time tanpa memerlukan garbage collector runtime.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 210
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Praktik penanganan kesalahan (error handling) yang BURUK dan membahayakan keamanan aplikasi web adalah ...",
    "options": {
      "a": "Mencatat detail error lengkap ke file log internal yang hanya bisa diakses administrator berwenang.",
      "b": "Menampilkan pesan galat generik yang sopan kepada pengguna akhir seperti 'Terjadi kesalahan sistem, silakan hubungi tim dukungan'.",
      "c": "Mengekspos stack trace mentah, nama tabel database, versi framework, dan potongan query SQL secara langsung ke layar pengguna saat terjadi exception.",
      "d": "Menutup koneksi database dan merilis sumber daya secara aman pada blok finally/catch.",
      "e": "Mengirimkan notifikasi alert otomatis ke dashboard SIEM saat terjadi unhandled exception berulang."
    },
    "correct_letter": "c",
    "correct_answer": "Mengekspos stack trace mentah, nama tabel database, versi framework, dan potongan query SQL secara langsung ke layar pengguna saat terjadi exception.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 211
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Dalam penulisan kode C yang aman, fungsi strncpy(dest, src, n) sering digunakan untuk menggantikan strcpy. Namun, kelemahan yang tetap harus diwaspadai dari strncpy adalah ...",
    "options": {
      "a": "Fungsi tersebut tidak menjamin null-terminator ('\\0') ditambahkan pada string tujuan jika panjang src melebihi atau sama dengan n.",
      "b": "Fungsi tersebut menghapus isi string sumber secara permanen.",
      "c": "strncpy hanya dapat memproses karakter angka numerik.",
      "d": "Fungsi tersebut berjalan sepuluh kali lebih lambat daripada operasi disk IO.",
      "e": "strncpy secara otomatis memicu buffer overflow pada compiler modern."
    },
    "correct_letter": "a",
    "correct_answer": "Fungsi tersebut tidak menjamin null-terminator ('\\0') ditambahkan pada string tujuan jika panjang src melebihi atau sama dengan n.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 212
  },
  {
    "week": "Week 4",
    "type": "Post Test",
    "question": "Prinsip 'Complete Mediation' dalam arsitektur software security mengharuskan bahwa ...",
    "options": {
      "a": "Setiap permintaan akses ke setiap objek harus diperiksa dan divalidasi keabsahannya setiap saat, tanpa mengandalkan hasil pemeriksaan sebelumnya yang di-cache secara membabi buta.",
      "b": "Pengguna hanya perlu diautentikasi sekali seumur hidup pada saat pendaftaran akun.",
      "c": "Sistem keamanan harus memediasi perselisihan hukum antara pengguna dan penyedia layanan.",
      "d": "Semua berkas konfigurasi harus disimpan dalam satu file terpusat tanpa enkripsi.",
      "e": "Hak akses administratif harus diberikan secara penuh kepada seluruh developer."
    },
    "correct_letter": "a",
    "correct_answer": "Setiap permintaan akses ke setiap objek harus diperiksa dan divalidasi keabsahannya setiap saat, tanpa mengandalkan hasil pemeriksaan sebelumnya yang di-cache secara membabi buta.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 213
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Metode pertahanan paling efektif dan mutlak untuk mencegah kerentanan SQL Injection pada kode backend aplikasi web adalah ...",
    "options": {
      "a": "Menggunakan Parameterized Queries (Prepared Statements) yang memisahkan kode query SQL dari data input pengguna.",
      "b": "Menyaring karakter petik tunggal (') menggunakan fungsi regex buatan sendiri (blacklisting).",
      "c": "Menyimpan seluruh data input dalam format huruf kapital (uppercase).",
      "d": "Mengganti web server Apache dengan Nginx.",
      "e": "Menambahkan firewall hardware di depan router utama."
    },
    "correct_letter": "a",
    "correct_answer": "Menggunakan Parameterized Queries (Prepared Statements) yang memisahkan kode query SQL dari data input pengguna.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 214
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Seorang penyerang menyisipkan payload JavaScript berbahaya ke dalam kolom komentar blog. Setiap kali pengguna lain membuka artikel blog tersebut, script penyerang dieksekusi di browser korban dan mencuri session cookie. Jenis serangan XSS ini adalah ...",
    "options": {
      "a": "Reflected XSS",
      "b": "Stored (Persistent) XSS",
      "c": "DOM-based XSS",
      "d": "Self-XSS",
      "e": "Blind SQL Injection"
    },
    "correct_letter": "b",
    "correct_answer": "Stored (Persistent) XSS",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 215
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Mengapa mitigasi Cross-Site Scripting (XSS) mensyaratkan 'Context-Aware Output Encoding' (misalnya HTML Body Encoding berbeda dengan JavaScript Context Encoding)?",
    "options": {
      "a": "Karena parser browser menafsirkan karakter khusus secara berbeda bergantung pada konteks sintaksis tempat data dirender (HTML tag, atribut, script block, atau URL).",
      "b": "Agar ukuran dokumen HTML menjadi lebih kecil saat ditransmisikan melalui jaringan.",
      "c": "Karena encoding hanya berlaku untuk browser berbasis Chromium.",
      "d": "Untuk mempercepat waktu render CSS pada perangkat mobile.",
      "e": "Agar aplikasi web tidak memerlukan sertifikat SSL/TLS."
    },
    "correct_letter": "a",
    "correct_answer": "Karena parser browser menafsirkan karakter khusus secara berbeda bergantung pada konteks sintaksis tempat data dirender (HTML tag, atribut, script block, atau URL).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 216
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Header keamanan Content Security Policy (CSP) dengan direktif 'script-src 'self'' memberikan perlindungan bagi browser pengguna dengan cara ...",
    "options": {
      "a": "Melarang eksekusi skrip JavaScript yang berasal dari domain eksternal pihak ketiga serta memblokir inline script yang tidak memiliki nonce/hash valid.",
      "b": "Mengenkripsi seluruh file JavaScript di server menggunakan AES.",
      "c": "Menonaktifkan fitur JavaScript sepenuhnya pada komputer klien.",
      "d": "Menghapus cookie sesi browser setiap 5 menit secara otomatis.",
      "e": "Mengalihkan seluruh traffic HTTP ke protokol FTP."
    },
    "correct_letter": "a",
    "correct_answer": "Melarang eksekusi skrip JavaScript yang berasal dari domain eksternal pihak ketiga serta memblokir inline script yang tidak memiliki nonce/hash valid.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 217
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Serangan Cross-Site Request Forgery (CSRF) memanfaatkan karakteristik bawaan web browser, yaitu ...",
    "options": {
      "a": "Browser secara otomatis menyertakan kredensial autentikasi (seperti session cookie) saat mengirimkan request HTTP lintas domain ke situs target yang sedang aktif login.",
      "b": "Browser dapat mengeksekusi shellcode biner langsung pada kernel sistem operasi.",
      "c": "Browser menyimpan password plaintext di dalam file konfigurasi Windows.",
      "d": "Browser selalu menonaktifkan validasi sertifikat HTTPS pada form POST.",
      "e": "Browser membagikan riwayat pencarian kepada semua tab yang terbuka."
    },
    "correct_letter": "a",
    "correct_answer": "Browser secara otomatis menyertakan kredensial autentikasi (seperti session cookie) saat mengirimkan request HTTP lintas domain ke situs target yang sedang aktif login.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 218
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Mekanisme pertahanan paling standar untuk mencegah serangan CSRF pada formulir HTML aplikasi web adalah ...",
    "options": {
      "a": "Penggunaan Anti-CSRF Token (Synchronizer Token Pattern) yang unik, tidak dapat ditebak, dan terikat pada sesi pengguna aktif.",
      "b": "Mengganti metode HTTP POST menjadi GET pada seluruh formulir.",
      "c": "Menyembunyikan formulir menggunakan styling CSS display:none.",
      "d": "Memperpanjang masa kedaluwarsa sesi menjadi 30 hari.",
      "e": "Menghapus atribut action pada tag form HTML."
    },
    "correct_letter": "a",
    "correct_answer": "Penggunaan Anti-CSRF Token (Synchronizer Token Pattern) yang unik, tidak dapat ditebak, dan terikat pada sesi pengguna aktif.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 219
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Pada kerentanan Server-Side Request Forgery (SSRF), penyerang memanipulasi aplikasi web backend untuk ...",
    "options": {
      "a": "Membuat server backend mengirimkan permintaan HTTP yang tidak sah ke layanan internal yang dilindungi firewall (misalnya layanan metadata cloud 169.254.169.254 atau database lokal).",
      "b": "Menjalankan script berbahaya di browser pengguna lain secara acak.",
      "c": "Mengubah warna tema antarmuka website menjadi gelap.",
      "d": "Mematikan koneksi internet pengguna rumahan.",
      "e": "Mencuri keyboard fisik di kantor perusahaan."
    },
    "correct_letter": "a",
    "correct_answer": "Membuat server backend mengirimkan permintaan HTTP yang tidak sah ke layanan internal yang dilindungi firewall (misalnya layanan metadata cloud 169.254.169.254 atau database lokal).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 220
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Seorang pengguna biasa dapat melihat tagihan medis pasien lain dengan cara mengganti parameter ID pada URL dari '/invoice?id=1001' menjadi '/invoice?id=1002' karena server tidak memverifikasi kepemilikan data. Kerentanan ini diklasifikasikan sebagai ...",
    "options": {
      "a": "Insecure Direct Object Reference (IDOR) / Broken Object Level Authorization (BOLA)",
      "b": "Cross-Site Scripting (XSS)",
      "c": "Buffer Overflow",
      "d": "Denial of Service (DoS)",
      "e": "Weak Password Hashing"
    },
    "correct_letter": "a",
    "correct_answer": "Insecure Direct Object Reference (IDOR) / Broken Object Level Authorization (BOLA)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 221
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Header keamanan 'Strict-Transport-Security' (HSTS) pada respons HTTP berfungsi untuk ...",
    "options": {
      "a": "Memaksa browser agar selalu berkomunikasi dengan situs tersebut hanya menggunakan protokol aman HTTPS dan menolak downgrade ke HTTP biasa.",
      "b": "Menutup port 80 pada firewall perangkat router klien.",
      "c": "Menghapus cache DNS lokal setiap kali browser ditutup.",
      "d": "Mengizinkan koneksi HTTP tanpa enkripsi untuk file gambar.",
      "e": "Mengirimkan log error aplikasi ke server Google."
    },
    "correct_letter": "a",
    "correct_answer": "Memaksa browser agar selalu berkomunikasi dengan situs tersebut hanya menggunakan protokol aman HTTPS dan menolak downgrade ke HTTP biasa.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 222
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Konfigurasi Cross-Origin Resource Sharing (CORS) yang sangat berbahaya dan membuka celah pencurian data sensitif antar-origin terjadi ketika server merespons dengan kombinasi header ...",
    "options": {
      "a": "Access-Control-Allow-Origin: * dan Access-Control-Allow-Credentials: true",
      "b": "Access-Control-Allow-Origin: null dan Access-Control-Max-Age: 0",
      "c": "Access-Control-Allow-Methods: GET dan Access-Control-Allow-Headers: Content-Type",
      "d": "Content-Type: application/json dan X-Frame-Options: SAMEORIGIN",
      "e": "Strict-Transport-Security: max-age=31536000"
    },
    "correct_letter": "a",
    "correct_answer": "Access-Control-Allow-Origin: * dan Access-Control-Allow-Credentials: true",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 223
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Kerentanan XML External Entity (XXE) Injection terjadi ketika parser XML pada aplikasi web dikonfigurasi untuk ...",
    "options": {
      "a": "Mengizinkan resolusi external Document Type Definition (DTD) dan entitas eksternal, sehingga penyerang dapat membaca berkas lokal server (misal /etc/passwd) atau memicu SSRF.",
      "b": "Menolak parsing dokumen XML yang memiliki spasi ganda.",
      "c": "Mengompresi format XML menjadi format binary JSON.",
      "d": "Menyimpan data XML ke dalam file gambar format PNG.",
      "e": "Mengharuskan dokumen XML ditandatangani oleh sertifikat SSL berbayar."
    },
    "correct_letter": "a",
    "correct_answer": "Mengizinkan resolusi external Document Type Definition (DTD) dan entitas eksternal, sehingga penyerang dapat membaca berkas lokal server (misal /etc/passwd) atau memicu SSRF.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 224
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Pada fitur upload file di aplikasi web, praktik keamanan yang PALING EFEKTIF untuk mencegah eksekusi webshell berbahaya adalah ...",
    "options": {
      "a": "Menyimpan file yang diunggah di luar web root direktori publik, mengganti nama file dengan nama acak/UUID unik, dan menonaktifkan izin eksekusi script pada folder penyimpanan.",
      "b": "Hanya memeriksa MIME-type yang dikirimkan oleh browser klien (Content-Type header).",
      "c": "Hanya memeriksa ekstensi file menggunakan huruf kecil (misal .jpg).",
      "d": "Menyimpan file di folder yang sama dengan file index.php aplikasi.",
      "e": "Membatasi ukuran file maksimal 10 megabyte tanpa memeriksa isi berkas."
    },
    "correct_letter": "a",
    "correct_answer": "Menyimpan file yang diunggah di luar web root direktori publik, mengganti nama file dengan nama acak/UUID unik, dan menonaktifkan izin eksekusi script pada folder penyimpanan.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 225
  },
  {
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Dalam standar OWASP ASVS (Application Security Verification Standard), aplikasi yang mengelola transaksi keuangan penting, data bisnis bernilai tinggi, atau informasi kesehatan pribadi (B2B) wajib memenuhi minimal verifikasi pada ...",
    "options": {
      "a": "Level 1 (Opportunistic)",
      "b": "Level 2 (Standard)",
      "c": "Level 3 (Advanced)",
      "d": "Level 0 (Basic Entry)",
      "e": "Level 4 (Military Grade)"
    },
    "correct_letter": "b",
    "correct_answer": "Level 2 (Standard)",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 226
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Karakteristik utama yang membedakan OWASP ASVS Level 1 dengan Level 2 dan Level 3 adalah bahwa ASVS Level 1 ...",
    "options": {
      "a": "Dapat diverifikasi secara penuh menggunakan teknik pengujian black-box tanpa mengharuskan akses ke kode sumber aplikasi atau wawancara arsitektur mendalam.",
      "b": "Hanya berlaku untuk aplikasi yang dibangun menggunakan bahasa pemrograman Java.",
      "c": "Tidak memiliki persyaratan kontrol autentikasi dan otorisasi sama sekali.",
      "d": "Mengharuskan audit forensik militer di laboratorium bersertifikasi internasional.",
      "e": "Hanya dapat diaudit oleh lembaga penegak hukum pemerintah."
    },
    "correct_letter": "a",
    "correct_answer": "Dapat diverifikasi secara penuh menggunakan teknik pengujian black-box tanpa mengharuskan akses ke kode sumber aplikasi atau wawancara arsitektur mendalam.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 227
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Berdasarkan Chapter V2 (Authentication) pada OWASP ASVS v4, rekomendasi modern mengenai kebijakan kata sandi pengguna adalah ...",
    "options": {
      "a": "Mewajibkan penggantian password berkala setiap 30 hari dan memaksa kombinasi karakter aneh yang rumit.",
      "b": "Mengizinkan panjang password minimal 12 karakter (dan mendukung hingga minimal 64 karakter), serta memverifikasi password terhadap daftar password yang pernah bocor (breached passwords list).",
      "c": "Membatasi panjang password maksimal hanya 8 karakter demi efisiensi hashing.",
      "d": "Mengharuskan password berisi nomor induk kependudukan (NIK) pengguna.",
      "e": "Mengirimkan password baru dalam format plaintext melalui pesan SMS berkala."
    },
    "correct_letter": "b",
    "correct_answer": "Mengizinkan panjang password minimal 12 karakter (dan mendukung hingga minimal 64 karakter), serta memverifikasi password terhadap daftar password yang pernah bocor (breached passwords list).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 228
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Berdasarkan Chapter V3 (Session Management) pada OWASP ASVS, nilai entropi minimum yang diwajibkan untuk pembuatan session identifier adalah ...",
    "options": {
      "a": "16 bit",
      "b": "32 bit",
      "c": "64 bit",
      "d": "Minimal 128 bit pseudorandom entropy",
      "e": "1024 bit"
    },
    "correct_letter": "d",
    "correct_answer": "Minimal 128 bit pseudorandom entropy",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 229
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Pada Chapter V4 (Access Control) OWASP ASVS, prinsip utama yang harus diimplementasikan pada mekanisme otorisasi server adalah ...",
    "options": {
      "a": "Otorisasi hanya perlu diperiksa sekali pada halaman beranda utama aplikasi.",
      "b": "Penerapan prinsip 'Deny by Default', di mana seluruh akses ditolak secara bawaan kecuali diberikan izin secara eksplisit, dan penegakan otorisasi wajib dilakukan di sisi server.",
      "c": "Otorisasi dapat dipercayakan sepenuhnya kepada logika JavaScript di sisi browser klien.",
      "d": "Hak akses pengguna disimpan di dalam URL parameter tanpa enkripsi.",
      "e": "Administrator sistem boleh mengabaikan logging akses data sensitif."
    },
    "correct_letter": "b",
    "correct_answer": "Penerapan prinsip 'Deny by Default', di mana seluruh akses ditolak secara bawaan kecuali diberikan izin secara eksplisit, dan penegakan otorisasi wajib dilakukan di sisi server.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 230
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Untuk mencegah browser menyimpan halaman yang berisi informasi rahasia perbankan ke dalam web cache lokal (Chapter V8 Data Protection), header respons HTTP yang wajib disertakan adalah ...",
    "options": {
      "a": "Cache-Control: no-store, max-age=0 dan Pragma: no-cache",
      "b": "Cache-Control: public, max-age=86400",
      "c": "Accept-Encoding: gzip, deflate",
      "d": "Connection: keep-alive",
      "e": "Content-Encoding: br"
    },
    "correct_letter": "a",
    "correct_answer": "Cache-Control: no-store, max-age=0 dan Pragma: no-cache",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 231
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Kerentanan 'Mass Assignment' (atau Over-Posting) pada framework web modern terjadi ketika ...",
    "options": {
      "a": "Framework secara otomatis mengikat (bind) seluruh parameter input HTTP request langsung ke atribut objek data/model tanpa membatasi field sensitif (misal field role='admin').",
      "b": "Pengguna mengirimkan email ke 10.000 alamat sekaligus.",
      "c": "Aplikasi tidak mendukung database relasional MySQL.",
      "d": "Dua pengguna menggunakan satu akun secara bersamaan dari lokasi berbeda.",
      "e": "Server web kehabisan soket TCP akibat serangan SYN flood."
    },
    "correct_letter": "a",
    "correct_answer": "Framework secara otomatis mengikat (bind) seluruh parameter input HTTP request langsung ke atribut objek data/model tanpa membatasi field sensitif (misal field role='admin').",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 232
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Header 'X-Content-Type-Options: nosniff' memiliki fungsi krusial untuk mencegah serangan ...",
    "options": {
      "a": "MIME-type Confusion / MIME Sniffing, di mana browser mengeksekusi file non-eksekusi (seperti file teks atau gambar yang disusupi skrip) sebagai JavaScript.",
      "b": "Brute-force password SSH",
      "c": "Man-in-the-Middle pada router Wi-Fi",
      "d": "Buffer overflow pada compiler C++",
      "e": "Denial of Service pada server DNS"
    },
    "correct_letter": "a",
    "correct_answer": "MIME-type Confusion / MIME Sniffing, di mana browser mengeksekusi file non-eksekusi (seperti file teks atau gambar yang disusupi skrip) sebagai JavaScript.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 233
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Header 'X-Frame-Options: DENY' (atau CSP frame-ancestors 'none') digunakan untuk melindungi pengguna aplikasi web dari serangan ...",
    "options": {
      "a": "SQL Injection",
      "b": "Clickjacking (UI Redressing), di mana situs korban dimuat dalam iframe transparan di atas halaman penyerang untuk memanipulasi klik pengguna.",
      "c": "Session Fixation",
      "d": "Format String Attack",
      "e": "Buffer Overflow"
    },
    "correct_letter": "b",
    "correct_answer": "Clickjacking (UI Redressing), di mana situs korban dimuat dalam iframe transparan di atas halaman penyerang untuk memanipulasi klik pengguna.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 234
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Pada OWASP MASVS (Mobile Application Security Verification Standard), kontrol MASVS-STORAGE mensyaratkan penyimpanan data kredensial dan kunci kriptografi pada perangkat mobile harus menggunakan ...",
    "options": {
      "a": "Mekanisme penyimpanan aman berbasis perangkat keras (Hardware-backed Keystore pada Android atau Keychain pada iOS).",
      "b": "Penyimpanan berkas teks biasa pada SD Card eksternal yang dapat diakses publik.",
      "c": "SharedPreferences atau NSUserDefaults tanpa enkripsi.",
      "d": "Komentar hardcoded di dalam source code file Java/Swift.",
      "e": "File database SQLite lokal yang dapat dibaca semua aplikasi lain."
    },
    "correct_letter": "a",
    "correct_answer": "Mekanisme penyimpanan aman berbasis perangkat keras (Hardware-backed Keystore pada Android atau Keychain pada iOS).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 235
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Sebuah aplikasi web memuat data input serialized objek dari cookie pengguna tanpa verifikasi tanda tangan kriptografi (HMAC). Bahaya terbesar dari kerentanan Insecure Deserialization ini adalah ...",
    "options": {
      "a": "Penyerang dapat merekayasa serialized object berbahaya (gadget chain) yang mengeksekusi kode perintah sistem operasi secara Remote Code Execution (RCE).",
      "b": "Tampilan website menjadi tidak responsif pada layar ponsel.",
      "c": "Ukuran font tulisan paragraf artikel membesar sendiri.",
      "d": "Waktu loading halaman web bertambah sekitar 10 milidetik.",
      "e": "Browser menampilkan notifikasi bahwa halaman belum diterjemahkan."
    },
    "correct_letter": "a",
    "correct_answer": "Penyerang dapat merekayasa serialized object berbahaya (gadget chain) yang mengeksekusi kode perintah sistem operasi secara Remote Code Execution (RCE).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 236
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Perbedaan mendasar antara Blind SQL Injection (Time-based / Boolean-based) dan In-Band SQL Injection (Union-based) adalah ...",
    "options": {
      "a": "Blind SQLi tidak menampilkan data hasil query atau pesan error database secara langsung pada respon HTTP, sehingga penyerang harus merekonstruksi data karakter demi karakter berdasarkan respons boolean atau jeda waktu.",
      "b": "Blind SQLi hanya dapat dilakukan pada server web berbasis Microsoft IIS.",
      "c": "In-Band SQLi tidak memerlukan koneksi internet untuk mengekstrak data.",
      "d": "Blind SQLi selalu terdeteksi dan diblokir oleh antivirus komputer pengguna.",
      "e": "In-Band SQLi tidak pernah merusak integritas database server."
    },
    "correct_letter": "a",
    "correct_answer": "Blind SQLi tidak menampilkan data hasil query atau pesan error database secara langsung pada respon HTTP, sehingga penyerang harus merekonstruksi data karakter demi karakter berdasarkan respons boolean atau jeda waktu.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 237
  },
  {
    "week": "Week 5",
    "type": "Post Test",
    "question": "Kategori OWASP Top 10 'Vulnerable and Outdated Components' (A06) paling efektif dimitigasi dalam siklus CI/CD pipeline modern menggunakan perkakas ...",
    "options": {
      "a": "Software Composition Analysis (SCA) seperti Dependency-Check, Snyk, atau npm audit yang memindai kerentanan CVE pada library pihak ketiga.",
      "b": "Aplikasi defragmentasi harddisk terjadwal.",
      "c": "Pemeriksa ejaan kata (spell checker) pada file markdown.",
      "d": "Perangkat penstabil tegangan listrik (UPS) server.",
      "e": "Generator gambar AI untuk thumbnail artikel."
    },
    "correct_letter": "a",
    "correct_answer": "Software Composition Analysis (SCA) seperti Dependency-Check, Snyk, atau npm audit yang memindai kerentanan CVE pada library pihak ketiga.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 238
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Prinsip dasar Shannon mengenai 'Confusion' dan 'Diffusion' dalam perancangan algoritma block cipher bertujuan untuk ...",
    "options": {
      "a": "Confusion membuat hubungan antara kunci dan ciphertext serumit mungkin, sedangkan Diffusion menyebarkan pengaruh satu bit plaintext ke banyak bit ciphertext.",
      "b": "Confusion mempercepat proses komputasi CPU, sedangkan Diffusion mengompresi ukuran data.",
      "c": "Confusion mengubah ciphertext menjadi plaintext tanpa memerlukan kunci rahasia.",
      "d": "Diffusion mengganti seluruh karakter alfabet dengan angka acak.",
      "e": "Confusion hanya berlaku untuk enkripsi asimetris, sedangkan Diffusion untuk fungsi hash."
    },
    "correct_letter": "a",
    "correct_answer": "Confusion membuat hubungan antara kunci dan ciphertext serumit mungkin, sedangkan Diffusion menyebarkan pengaruh satu bit plaintext ke banyak bit ciphertext.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 239
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Dalam perancangan algoritma Advanced Encryption Standard (AES), tahapan transformasi non-linear yang bertanggung jawab menyediakan sifat 'Confusion' adalah ...",
    "options": {
      "a": "ShiftRows",
      "b": "SubBytes (menggunakan S-box berbasis invers perkalian Galois Field GF(2^8))",
      "c": "MixColumns",
      "d": "AddRoundKey",
      "e": "Key Expansion"
    },
    "correct_letter": "b",
    "correct_answer": "SubBytes (menggunakan S-box berbasis invers perkalian Galois Field GF(2^8))",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 240
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Mengapa penggunaan algoritma Double-DES (enkripsi DES dua kali berturut-turut dengan dua kunci berbeda K1 dan K2) TIDAK memberikan keamanan 112 bit sebagaimana yang diharapkan?",
    "options": {
      "a": "Double-DES rentan terhadap serangan Meet-in-the-Middle Attack yang mereduksi kompleksitas pencarian kunci menjadi sekitar 2^57 operasi.",
      "b": "Kunci kedua otomatis terhapus oleh prosesor saat enkripsi tahap pertama selesai.",
      "c": "Dua kunci DES selalu menghasilkan nilai ciphertext yang identik dengan plaintext.",
      "d": "Double-DES hanya dapat mengenkripsi file dengan ukuran kurang dari 8 byte.",
      "e": "Algoritma DES tidak mendukung operasi perulangan round."
    },
    "correct_letter": "a",
    "correct_answer": "Double-DES rentan terhadap serangan Meet-in-the-Middle Attack yang mereduksi kompleksitas pencarian kunci menjadi sekitar 2^57 operasi.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 241
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Kelemahan paling fatal dari mode operasi Electronic Codebook (ECB) pada enkripsi berkas yang menjadikannya tidak aman untuk data lebih dari satu blok adalah ...",
    "options": {
      "a": "ECB berjalan sangat lambat dibandingkan mode operasi lainnya.",
      "b": "ECB bersifat deterministik di mana blok plaintext yang identik akan selalu menghasilkan blok ciphertext yang identik, sehingga membocorkan pola struktur data asli.",
      "c": "ECB memerlukan kunci yang berbeda untuk setiap blok data.",
      "d": "ECB hanya dapat digunakan untuk mendekripsi data tetapi tidak dapat mengenkripsi.",
      "e": "Ciphertext yang dihasilkan ECB memiliki ukuran 10 kali lebih besar dari plaintext."
    },
    "correct_letter": "b",
    "correct_answer": "ECB bersifat deterministik di mana blok plaintext yang identik akan selalu menghasilkan blok ciphertext yang identik, sehingga membocorkan pola struktur data asli.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 242
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Pada mode operasi Cipher Block Chaining (CBC), apa peran utama dari Initialization Vector (IV) yang di-XOR dengan blok plaintext pertama?",
    "options": {
      "a": "Memastikan bahwa dua plaintext identik yang dienkripsi dengan kunci yang sama menghasilkan ciphertext yang sepenuhnya berbeda dan tidak dapat diprediksi.",
      "b": "Menyimpan nilai hash dari seluruh file untuk verifikasi tanda tangan digital.",
      "c": "Mengompresi blok pertama agar muat dalam register CPU 32-bit.",
      "d": "Menggantikan kebutuhan kunci simetris rahasia.",
      "e": "Menghapus padding PKCS#7 secara otomatis saat dekripsi."
    },
    "correct_letter": "a",
    "correct_answer": "Memastikan bahwa dua plaintext identik yang dienkripsi dengan kunci yang sama menghasilkan ciphertext yang sepenuhnya berbeda dan tidak dapat diprediksi.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 243
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Serangan Padding Oracle Attack pada implementasi enkripsi mode CBC memanfaatkan kerentanan di mana ...",
    "options": {
      "a": "Server membocorkan informasi melalui pesan error yang membedakan kegagalan padding PKCS#7 yang tidak valid dengan kegagalan dekripsi lainnya, sehingga penyerang dapat mendekripsi ciphertext blok demi blok.",
      "b": "Penyerang memecahkan kunci AES-256 menggunakan serangan brute-force dalam hitungan menit.",
      "c": "Server web tidak memperbarui sertifikat SSL yang sudah kadaluarsa.",
      "d": "Pengguna menggunakan IV bernilai nol untuk seluruh komunikasi.",
      "e": "Sistem operasi menonaktifkan fitur firewall pada port database."
    },
    "correct_letter": "a",
    "correct_answer": "Server membocorkan informasi melalui pesan error yang membedakan kegagalan padding PKCS#7 yang tidak valid dengan kegagalan dekripsi lainnya, sehingga penyerang dapat mendekripsi ciphertext blok demi blok.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 244
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Mode operasi Counter (CTR) mengubah block cipher menjadi stream cipher dengan mengenkripsi kombinasi nonce dan counter. Aturan keamanan MUTLAK yang tidak boleh dilanggar pada mode CTR adalah ...",
    "options": {
      "a": "Kunci dan nonce tidak boleh digunakan kembali untuk mengenkripsi dua pesan yang berbeda (keberulangan keystream membocorkan plaintext melalui operasi XOR).",
      "b": "Ukuran plaintext harus selalu kelipatan tepat 128 bit.",
      "c": "Proses enkripsi tidak boleh dijalankan secara paralel pada multi-core CPU.",
      "d": "Counter harus selalu bernilai bilangan prima negatif.",
      "e": "Kunci harus diganti setiap kali satu byte data selesai diproses."
    },
    "correct_letter": "a",
    "correct_answer": "Kunci dan nonce tidak boleh digunakan kembali untuk mengenkripsi dua pesan yang berbeda (keberulangan keystream membocorkan plaintext melalui operasi XOR).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 245
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Mengapa mode Galois/Counter Mode (GCM) menjadi standar mode enkripsi simetris paling direkomendasikan pada protokol modern seperti TLS 1.3?",
    "options": {
      "a": "GCM menyediakan Authenticated Encryption with Associated Data (AEAD) yang menjamin kerahasiaan (confidentiality) sekaligus keaslian dan integritas data (authenticity/integrity) dengan performa tinggi.",
      "b": "GCM tidak memerlukan kunci rahasia sama sekali dalam operasinya.",
      "c": "GCM kebal terhadap serangan komputer kuantum selamanya.",
      "d": "GCM menggantikan kebutuhan algoritma asimetris RSA pada pertukaran kunci.",
      "e": "GCM secara otomatis menghapus malware dari file yang dienkripsi."
    },
    "correct_letter": "a",
    "correct_answer": "GCM menyediakan Authenticated Encryption with Associated Data (AEAD) yang menjamin kerahasiaan (confidentiality) sekaligus keaslian dan integritas data (authenticity/integrity) dengan performa tinggi.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 246
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Properti 'Collision Resistance' pada fungsi cryptographic hash menjamin bahwa ...",
    "options": {
      "a": "Secara komputasi sangat sulit untuk menemukan dua pesan berbeda sembarang m1 dan m2 sehingga H(m1) = H(m2).",
      "b": "Sangat mudah untuk merekonstruksi pesan asli m jika diberikan nilai hash H(m).",
      "c": "Nilai hash selalu bertambah panjang jika ukuran file bertambah besar.",
      "d": "Fungsi hash dapat didekripsi menggunakan private key pemilik data.",
      "e": "Dua file berbeda akan selalu menghasilkan nilai hash yang sama pada tanggal ganjil."
    },
    "correct_letter": "a",
    "correct_answer": "Secara komputasi sangat sulit untuk menemukan dua pesan berbeda sembarang m1 dan m2 sehingga H(m1) = H(m2).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 247
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Berdasarkan fenomena Birthday Paradox (Birthday Attack), untuk menemukan tabrakan (collision) pada fungsi hash dengan panjang output n bit, kompleksitas rata-rata operasi yang dibutuhkan penyerang adalah sekitar ...",
    "options": {
      "a": "2^n operasi",
      "b": "2^(n/2) operasi",
      "c": "n^2 operasi",
      "d": "2^(n/4) operasi",
      "e": "n/2 operasi"
    },
    "correct_letter": "b",
    "correct_answer": "2^(n/2) operasi",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 248
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Mengapa konstruksi naif MAC berbasis hash H(k || m) pada algoritma keluarga Merkle-Damgård (seperti MD5 dan SHA-256) rentan terhadap serangan Length Extension Attack?",
    "options": {
      "a": "Karena output hash H(k || m) mewakili internal state akhir fungsi hash, penyerang dapat melanjutkan komputasi hash untuk pesan tambahan m' tanpa perlu mengetahui nilai secret key k.",
      "b": "Karena kunci rahasia k otomatis tertulis di dalam file log sistem operasi.",
      "c": "Karena ukuran output SHA-256 terlalu pendek untuk standar keamanan modern.",
      "d": "Karena algoritma MD5 menggunakan kunci asimetris publik.",
      "e": "Karena penyerang dapat membalikkan fungsi hash satu arah menggunakan tabel pembagian matematika."
    },
    "correct_letter": "a",
    "correct_answer": "Karena output hash H(k || m) mewakili internal state akhir fungsi hash, penyerang dapat melanjutkan komputasi hash untuk pesan tambahan m' tanpa perlu mengetahui nilai secret key k.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 249
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Konstruksi Hash-based Message Authentication Code (HMAC) dirumuskan sebagai H((K XOR opad) || H((K XOR ipad) || m)). Tujuan penggunaan dua putaran hash bersarang dengan bantalan opad dan ipad ini adalah ...",
    "options": {
      "a": "Mencegah serangan Length Extension Attack dan membuktikan keaslian serta integritas pesan menggunakan kunci rahasia bersama.",
      "b": "Membuat fungsi hash dapat berjalan tanpa membutuhkan memori RAM.",
      "c": "Mengompresi pesan m agar ukuran filenya menjadi separuh ukuran asli.",
      "d": "Mengubah algoritma simetris menjadi algoritma tanda tangan digital publik.",
      "e": "Menghilangkan kebutuhan inisialisasi kunci pada pihak penerima."
    },
    "correct_letter": "a",
    "correct_answer": "Mencegah serangan Length Extension Attack dan membuktikan keaslian serta integritas pesan menggunakan kunci rahasia bersama.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 250
  },
  {
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Keamanan algoritma kriptografi asimetris RSA secara fundamental didasarkan pada kesulitan komputasi matematika dalam menyelesaikan masalah ...",
    "options": {
      "a": "Faktorisasi bilangan bulat besar yang merupakan hasil kali dua bilangan prima acak besar (Integer Factorization Problem).",
      "b": "Penyelesaian persamaan diferensial linier orde tiga.",
      "c": "Pencarian akar kuadrat bilangan negatif pada domain riil.",
      "d": "Pengurutan array bilangan acak berukuran gigabyte.",
      "e": "Perhitungan logaritma natural pada CPU grafis."
    },
    "correct_letter": "a",
    "correct_answer": "Faktorisasi bilangan bulat besar yang merupakan hasil kali dua bilangan prima acak besar (Integer Factorization Problem).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 251
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Pada algoritma RSA, mengapa skema padding probabilistik seperti Optimal Asymmetric Encryption Padding (OAEP) wajib digunakan alih-alih Textbook RSA?",
    "options": {
      "a": "Textbook RSA bersifat deterministik dan memiliki sifat homomorfik perkalian yang memungkinkan penyerang memanipulasi ciphertext tanpa mengetahui plaintext asli (malleability).",
      "b": "OAEP memperkecil ukuran ciphertext menjadi 16 byte.",
      "c": "Textbook RSA hanya dapat digunakan pada prosesor 8-bit.",
      "d": "OAEP menghapus kebutuhan kunci privat dalam proses dekripsi.",
      "e": "Textbook RSA tidak mendukung enkripsi karakter teks alfabet."
    },
    "correct_letter": "a",
    "correct_answer": "Textbook RSA bersifat deterministik dan memiliki sifat homomorfik perkalian yang memungkinkan penyerang memanipulasi ciphertext tanpa mengetahui plaintext asli (malleability).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 252
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Protokol pertukaran kunci Diffie-Hellman (DH) memungkinkan dua pihak membangun kunci rahasia bersama melalui saluran komunikasi publik yang tidak aman berdasarkan kesulitan komputasi ...",
    "options": {
      "a": "Discrete Logarithm Problem (Masalah Logaritma Diskrit pada grup siklik berhingga).",
      "b": "Invers matriks 2x2 modular.",
      "c": "Penjumlahan deret aritmatika Gauss.",
      "d": "Pencarian nilai determinan matriks bujur sangkar.",
      "e": "Kompresi data lossy format JPEG."
    },
    "correct_letter": "a",
    "correct_answer": "Discrete Logarithm Problem (Masalah Logaritma Diskrit pada grup siklik berhingga).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 253
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Kelemahan paling mendasar dari protokol Diffie-Hellman standar (unauthenticated DH) jika tidak dikombinasikan dengan mekanisme autentikasi adalah kerentanannya terhadap serangan ...",
    "options": {
      "a": "Man-in-the-Middle (MitM) Attack, di mana penyerang secara aktif mencegat dan menegosiasikan kunci terpisah dengan masing-masing pihak tanpa terdeteksi.",
      "b": "Buffer Overflow pada compiler C",
      "c": "SQL Injection pada server basis data",
      "d": "Cross-Site Scripting (XSS)",
      "e": "Directory Traversal pada web server"
    },
    "correct_letter": "a",
    "correct_answer": "Man-in-the-Middle (MitM) Attack, di mana penyerang secara aktif mencegat dan menegosiasikan kunci terpisah dengan masing-masing pihak tanpa terdeteksi.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 254
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Sifat 'Perfect Forward Secrecy' (PFS) pada protokol keamanan TLS menjamin bahwa ...",
    "options": {
      "a": "Jika private key jangka panjang server terkompromi/bocor di masa depan, penyerang tetap tidak dapat mendekripsi rekaman traffic sesi komunikasi masa lalu yang menggunakan kunci sesi ephemeral (seperti ECDHE).",
      "b": "Data pengguna akan dienkripsi ulang setiap 24 jam secara otomatis di harddisk server.",
      "c": "Website tidak akan pernah mengalami downtime meskipun server terbakar.",
      "d": "Pengguna tidak perlu menggunakan password saat login ke aplikasi perbankan.",
      "e": "Koneksi internet klien akan selalu memiliki kecepatan bandwidth maksimum tanpa batas."
    },
    "correct_letter": "a",
    "correct_answer": "Jika private key jangka panjang server terkompromi/bocor di masa depan, penyerang tetap tidak dapat mendekripsi rekaman traffic sesi komunikasi masa lalu yang menggunakan kunci sesi ephemeral (seperti ECDHE).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 255
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Keunggulan utama Elliptic Curve Cryptography (ECC) dibandingkan RSA adalah ...",
    "options": {
      "a": "ECC menawarkan tingkat kekuatan keamanan kriptografi yang setara dengan RSA namun dengan ukuran kunci yang jauh lebih pendek (misalnya kunci ECC 256-bit setara dengan RSA 3072-bit), sehingga menghemat bandwidth dan daya komputasi.",
      "b": "ECC tidak memerlukan operasi matematika modular sama sekali.",
      "c": "ECC dapat didekripsi oleh siapa saja tanpa membutuhkan kunci privat.",
      "d": "Kunci ECC dapat disimpan dalam format plaintext di repositori publik GitHub tanpa risiko.",
      "e": "ECC merupakan algoritma enkripsi simetris tercepat di dunia."
    },
    "correct_letter": "a",
    "correct_answer": "ECC menawarkan tingkat kekuatan keamanan kriptografi yang setara dengan RSA namun dengan ukuran kunci yang jauh lebih pendek (misalnya kunci ECC 256-bit setara dengan RSA 3072-bit), sehingga menghemat bandwidth dan daya komputasi.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 256
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Pada mekanisme pembuatan Tanda Tangan Digital (Digital Signature), operasi kriptografi yang dilakukan oleh pengirim pesan adalah ...",
    "options": {
      "a": "Mendekripsi seluruh file dokumen menggunakan public key penerima.",
      "b": "Menghitung nilai cryptographic hash (digest) dari pesan, lalu mengenkripsi nilai digest tersebut menggunakan private key milik pengirim.",
      "c": "Mengenkripsi pesan menggunakan kunci simetris rahasia milik penerima pesan.",
      "d": "Mengirimkan password akun pengirim ke server verifikasi pihak ketiga.",
      "e": "Menandatangani dokumen secara fisik di atas kertas lalu memindainya menjadi file PDF."
    },
    "correct_letter": "b",
    "correct_answer": "Menghitung nilai cryptographic hash (digest) dari pesan, lalu mengenkripsi nilai digest tersebut menggunakan private key milik pengirim.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 257
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Bagaimana pihak penerima memverifikasi keabsahan tanda tangan digital pada sebuah dokumen elektronik?",
    "options": {
      "a": "Mendekripsi tanda tangan digital menggunakan public key pengirim untuk memperoleh digest asli, lalu membandingkannya dengan digest yang dihitung sendiri dari dokumen yang diterima.",
      "b": "Membuka file dokumen menggunakan program pengolah kata Microsoft Word.",
      "c": "Menelepon pengirim untuk menanyakan apakah dokumen tersebut benar dikirimkan.",
      "d": "Memeriksa apakah ukuran file dokumen merupakan bilangan bulat genap.",
      "e": "Mengirimkan dokumen ke kantor pos terdekat untuk distempel manual."
    },
    "correct_letter": "a",
    "correct_answer": "Mendekripsi tanda tangan digital menggunakan public key pengirim untuk memperoleh digest asli, lalu membandingkannya dengan digest yang dihitung sendiri dari dokumen yang diterima.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 258
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Tiga layanan keamanan informasi yang diwujudkan secara simultan oleh tanda tangan digital adalah ...",
    "options": {
      "a": "Otentikasi Pengirim (Authenticity), Integritas Pesan (Integrity), dan Anti-Penyangkalan (Non-Repudiation).",
      "b": "Kerahasiaan Mutlak (Confidentiality), Kompresi Data, dan Kecepatan Transmisi.",
      "c": "Ketersediaan Jaringan (Availability), Alokasi Bandwidth, dan Load Balancing.",
      "d": "Pencegahan Virus, Pemulihan Bencana, dan Redundansi Penyimpanan.",
      "e": "Enkripsi Hardware, Proteksi BIOS, dan Pembersihan Disk."
    },
    "correct_letter": "a",
    "correct_answer": "Otentikasi Pengirim (Authenticity), Integritas Pesan (Integrity), dan Anti-Penyangkalan (Non-Repudiation).",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 259
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Dalam infrastruktur Public Key Infrastructure (PKI), fungsi utama dari Certificate Authority (CA) adalah ...",
    "options": {
      "a": "Bertindak sebagai pihak ketiga tepercaya (trusted third party) yang memverifikasi identitas pemilik kunci dan menerbitkan sertifikat digital X.509 bertanda tangan digital yang mengikat identitas dengan public key pemilik.",
      "b": "Menyimpan seluruh private key pengguna di server publik agar tidak hilang.",
      "c": "Memungut pajak internet tahunan atas kepemilikan nama domain website.",
      "d": "Menerjemahkan nama domain URL menjadi alamat IP numerik (DNS).",
      "e": "Memperbaiki kerusakan fisik kabel fiber optik jaringan internet."
    },
    "correct_letter": "a",
    "correct_answer": "Bertindak sebagai pihak ketiga tepercaya (trusted third party) yang memverifikasi identitas pemilik kunci dan menerbitkan sertifikat digital X.509 bertanda tangan digital yang mengikat identitas dengan public key pemilik.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 260
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Mekanisme Online Certificate Status Protocol (OCSP) Stapling dirancang untuk meningkatkan efisiensi dan privasi pengecekan status pencabutan sertifikat SSL/TLS dengan cara ...",
    "options": {
      "a": "Server web secara berkala meminta bukti validitas sertifikat bertanda tangan waktu dari CA (OCSP response) dan menyertakannya langsung kepada klien selama proses TLS handshake.",
      "b": "Mengharuskan klien mengunduh file daftar CRL berukuran ratusan megabyte setiap kali membuka website.",
      "c": "Menghapus kebutuhan sertifikat SSL sehingga browser tidak pernah menampilkan error koneksi.",
      "d": "Menyimpan seluruh histori browsing pengguna di server CA pusat.",
      "e": "Mengizinkan server menggunakan sertifikat yang sudah kadaluarsa hingga 5 tahun."
    },
    "correct_letter": "a",
    "correct_answer": "Server web secara berkala meminta bukti validitas sertifikat bertanda tangan waktu dari CA (OCSP response) dan menyertakannya langsung kepada klien selama proses TLS handshake.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 261
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Jika suatu organisasi memiliki 100 karyawan yang saling ingin berkomunikasi secara rahasia sepasang-demi-sepasang menggunakan kriptografi simetris murni, jumlah pasangan kunci rahasia berbeda yang harus didistribusikan dan dikelola adalah ...",
    "options": {
      "a": "N(N-1)/2 = 100 x 99 / 2 = 4.950 kunci rahasia",
      "b": "100 kunci",
      "c": "200 kunci",
      "d": "1 kunci master bersama",
      "e": "10.000 kunci"
    },
    "correct_letter": "a",
    "correct_answer": "N(N-1)/2 = 100 x 99 / 2 = 4.950 kunci rahasia",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 262
  },
  {
    "week": "Week 6",
    "type": "Post Test",
    "question": "Bagaimana sistem Hybrid Cryptography (seperti pada protokol HTTPS/TLS) menggabungkan keunggulan kriptografi asimetris dan simetris secara harmonis?",
    "options": {
      "a": "Kriptografi asimetris (RSA/ECDHE) digunakan pada fase awal handshake untuk mengotentikasi server dan mempertukarkan kunci sesi (session key) secara aman, kemudian seluruh data komunikasi bervolume besar dienkripsi menggunakan kriptografi simetris (AES-GCM) yang jauh lebih cepat dan efisien.",
      "b": "Kriptografi simetris digunakan untuk menandatangani dokumen, sedangkan kriptografi asimetris untuk mengenkripsi harddisk.",
      "c": "Data teks dienkripsi dengan kriptografi simetris, sedangkan gambar dan video dienkripsi dengan asimetris.",
      "d": "Kriptografi asimetris dijalankan hanya saat komputer dalam mode hemat daya (sleep).",
      "e": "Kedua algoritma dijalankan bergantian setiap 10 detik secara berulang."
    },
    "correct_letter": "a",
    "correct_answer": "Kriptografi asimetris (RSA/ECDHE) digunakan pada fase awal handshake untuk mengotentikasi server dan mempertukarkan kunci sesi (session key) secara aman, kemudian seluruh data komunikasi bervolume besar dienkripsi menggunakan kriptografi simetris (AES-GCM) yang jauh lebih cepat dan efisien.",
    "source": "Bank Soal Tambahan",
    "mark": "1.00 out of 1.00",
    "id": 263
  }
];
