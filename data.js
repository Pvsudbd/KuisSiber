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
    "id": 139,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Pada sistem biometrik, jika administrator mengubah threshold verifikasi (t) ke nilai yang lebih tinggi untuk memperketat keamanan, dampak statistik yang pasti terjadi pada False Acceptance Rate (FAR) dan False Rejection Rate (FRR) adalah ...",
    "options": {
      "a": "FAR dan FRR keduanya menurun secara simultan mendekati nilai Equal Error Rate.",
      "b": "FAR mengalami penurunan signifikan, namun FRR mengalami peningkatan secara komprehensif.",
      "c": "FRR mengalami penurunan signifikan, namun FAR mengalami peningkatan sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "d": "FAR dan FRR keduanya meningkat karena sensitivitas sensor biometrik dinaikkan.",
      "e": "Nilai FAR dan FRR tidak berubah karena nilai EER bersifat konstan pada perangkat."
    },
    "correct_letter": "b",
    "correct_answer": "FAR mengalami penurunan signifikan, namun FRR mengalami peningkatan secara komprehensif."
  },
  {
    "id": 140,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Dalam protokol Time-based One-Time Password (TOTP - RFC 6238), apa parameter inti yang membedakannya secara fundamental dari HMAC-based One-Time Password (HOTP - RFC 4226)?",
    "options": {
      "a": "TOTP mengenkripsi shared secret dengan kunci privat asimetris, sedangkan HOTP mengandalkan fungsi hash MD5 tanpa shared secret sama sekali.",
      "b": "TOTP menghitung kode menggunakan Unix epoch time dibagi time-step window sebagai moving factor, sedangkan HOTP memakai counter inkremental secara terperinci.",
      "c": "HOTP menghasilkan token dinamis yang kedaluwarsa tiap 30 detik, sedangkan token TOTP valid permanen hingga counter server diperbarui pengguna.",
      "d": "HOTP mewajibkan komunikasi online real-time dua arah dengan server, sedangkan TOTP berjalan sepenuhnya asinkron tanpa sinkronisasi waktu.",
      "e": "TOTP menggunakan algoritma simetris AES-CBC, sedangkan HOTP menggunakan fungsi derivasi kunci PBKDF2 dengan salt acak 128 bit."
    },
    "correct_letter": "b",
    "correct_answer": "TOTP menghitung kode menggunakan Unix epoch time dibagi time-step window sebagai moving factor, sedangkan HOTP memakai counter inkremental secara terperinci."
  },
  {
    "id": 141,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Sebuah sistem pengawasan militer mengadopsi model kontrol akses Mandatory Access Control (MAC) berbasis Bell-LaPadula. Manakah skenario transfer informasi yang DILARANG oleh aturan '* -property' (Star Property) pada model ini?",
    "options": {
      "a": "Subjek dengan izin Top Secret membaca dokumen yang berlabel status Secret yang diverifikasi melalui ticket granting service terpusat.",
      "b": "Subjek dengan izin Confidential menulis log data ke berkas berlabel Top Secret yang diverifikasi melalui ticket granting service terpusat.",
      "c": "Subjek dengan izin Secret membaca berkas internal yang berlabel status Secret.",
      "d": "Subjek dengan izin Unclassified membaca dokumen berlabel status Unclassified sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "e": "Subjek dengan izin Secret menulis data ke dokumen berlabel status Unclassified."
    },
    "correct_letter": "e",
    "correct_answer": "Subjek dengan izin Secret menulis data ke dokumen berlabel status Unclassified."
  },
  {
    "id": 142,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Berbeda dengan Bell-LaPadula yang memprioritaskan kerahasiaan (confidentiality), model integritas Biba menerapkan aturan 'Simple Integrity Axiom'. Aturan ini menetapkan bahwa ...",
    "options": {
      "a": "Subjek tidak diizinkan membaca objek yang memiliki tingkat integritas lebih rendah (no read-down) secara terperinci.",
      "b": "Subjek tidak diizinkan menulis ke objek yang memiliki tingkat integritas lebih tinggi (no write-up).",
      "c": "Subjek tidak diizinkan membaca objek yang memiliki label klasifikasi lebih tinggi (no read-up).",
      "d": "Subjek tidak diizinkan menulis ke objek yang memiliki label klasifikasi lebih rendah (no write-down).",
      "e": "Subjek memiliki hak penuh memodifikasi data apa pun selama terdaftar dalam grup akses owner."
    },
    "correct_letter": "a",
    "correct_answer": "Subjek tidak diizinkan membaca objek yang memiliki tingkat integritas lebih rendah (no read-down) secara terperinci."
  },
  {
    "id": 143,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Perhatikan skenario berikut: Dokter diperbolehkan membaca rekam medis pasien hanya jika berada di jaringan rumah sakit, saat jam dinas, dan status darurat aktif. Model kontrol akses yang paling tepat mengimplementasikan kebijakan tersebut adalah ...",
    "options": {
      "a": "Discretionary Access Control (DAC) berbasis ACL statis yang dikelola oleh pasien yang diverifikasi melalui ticket granting service terpusat.",
      "b": "Role-Based Access Control (RBAC) murni berbasis hierarki peran tanpa evaluasi konteks lingkungan.",
      "c": "Mandatory Access Control (MAC) berbasis label tingkat keamanan militer multi-level.",
      "d": "Identity-Based Access Control (IBAC) berbasis daftar pemetaan identitas tunggal pengguna.",
      "e": "Attribute-Based Access Control (ABAC) yang mengevaluasi subjek, objek, aksi, dan atribut lingkungan."
    },
    "correct_letter": "e",
    "correct_answer": "Attribute-Based Access Control (ABAC) yang mengevaluasi subjek, objek, aksi, dan atribut lingkungan."
  },
  {
    "id": 144,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Pada autentikasi Kerberos v5, entitas manakah yang bertanggung jawab menerbitkan Ticket-Granting Ticket (TGT) setelah pengguna berhasil memverifikasi kredensial awalnya?",
    "options": {
      "a": "Ticket Granting Service (TGS) setelah memeriksa authenticator yang dienkripsi session key.",
      "b": "Security Account Manager (SAM) lokal pada workstation client sebelum request dikirim berdasarkan kebijakan kontrol akses formal yang terdaftar.",
      "c": "Target Application Server setelah menerima Service Ticket yang sah dari client pada infrastruktur autentikasi enterprise berskala besar.",
      "d": "Key Distribution Center (KDC) proxy server melalui inspeksi sertifikat TLS publik client.",
      "e": "Authentication Service (AS) yang memverifikasi kredensial awal terhadap database KDC."
    },
    "correct_letter": "e",
    "correct_answer": "Authentication Service (AS) yang memverifikasi kredensial awal terhadap database KDC."
  },
  {
    "id": 145,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Dalam arsitektur Linux Pluggable Authentication Modules (PAM), jika suatu modul autentikasi dikonfigurasi dengan control flag 'required' dan menghasilkan evaluasi gagal (failure), perilaku PAM selanjutnya adalah ...",
    "options": {
      "a": "Tetap melanjutkan eksekusi modul PAM berikutnya di stack, namun hasil autentikasi akhir tetap pasti gagal secara terperinci.",
      "b": "Segera menghentikan proses evaluasi seluruh stack PAM dan langsung mengembalikan status gagal ke aplikasi.",
      "c": "Mengabaikan kegagalan modul tersebut jika terdapat modul bertipe 'optional' yang sukses di bawahnya.",
      "d": "Mengulang proses evaluasi modul tersebut sebanyak 3 kali sebelum memutuskan status akses pengguna.",
      "e": "Meminta pengguna memasukkan kembali password cadangan melalui jalur fallback modul 'sufficient'."
    },
    "correct_letter": "a",
    "correct_answer": "Tetap melanjutkan eksekusi modul PAM berikutnya di stack, namun hasil autentikasi akhir tetap pasti gagal secara terperinci."
  },
  {
    "id": 146,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Jika pada stack Linux PAM suatu modul bertipe 'sufficient' berhasil dievaluasi (success) dan belum ada modul 'required' sebelumnya yang gagal, apa yang terjadi?",
    "options": {
      "a": "PAM mengabaikan keberhasilan tersebut hingga semua modul bertipe optional memberikan respon sukses.",
      "b": "PAM mewajibkan modul berikutnya diuji ulang menggunakan algoritma enkripsi password yang berbeda.",
      "c": "PAM membatalkan sesi login karena modul sufficient memerlukan konfirmasi dari modul requisite yang diverifikasi melalui ticket granting service terpusat.",
      "d": "PAM langsung mengembalikan status sukses ke aplikasi tanpa mengeksekusi modul-modul di bawahnya secara komprehensif.",
      "e": "PAM beralih ke mode otentikasi interaktif untuk meminta kredensial faktor kedua (MFA)."
    },
    "correct_letter": "d",
    "correct_answer": "PAM langsung mengembalikan status sukses ke aplikasi tanpa mengeksekusi modul-modul di bawahnya secara komprehensif."
  },
  {
    "id": 147,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Pada protokol FIDO2 / WebAuthn, mengapa mekanisme autentikasi menggunakan security key perangkat keras (hardware token) kebal terhadap serangan Phishing dan Adversary-in-the-Middle (AiTM)?",
    "options": {
      "a": "Kunci publik disimpan pada token fisik dan didekripsi menggunakan biometric PIN pengguna.",
      "b": "Data kredensial pengguna di-hash berulang kali menggunakan PBKDF2 dengan salt rahasia dari browser.",
      "c": "Server autentikasi menyimpan master secret simetris yang disinkronisasi setiap 60 detik via satelit.",
      "d": "Browser mengirimkan rekaman sidik jari mentah ke server autentikasi melalui tunnel TLS terenkripsi.",
      "e": "Private key tidak pernah keluar dari authenticator, dan challenge ditandatangani bersama origin domain (Relying Party ID)."
    },
    "correct_letter": "e",
    "correct_answer": "Private key tidak pernah keluar dari authenticator, dan challenge ditandatangani bersama origin domain (Relying Party ID)."
  },
  {
    "id": 148,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Manakah di antara pasangan faktor berikut yang memenuhi kualifikasi True Two-Factor Authentication (2FA) menurut klasifikasi standar NIST SP 800-63B?",
    "options": {
      "a": "Password statis 12 karakter dan PIN numerik 6 digit pada layar login perbankan sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "b": "Jawaban pertanyaan keamanan masa kecil dan kata sandi email pemulihan akun.",
      "c": "Password akun sistem dan token OTP dari authenticator app pada smartphone pengguna.",
      "d": "Pemindaian sidik jari optik dan pengenalan wajah 3D pada sensor smartphone.",
      "e": "Kartu magnetik akses pintu kantor dan lencana RFID badge yang dikalungkan."
    },
    "correct_letter": "c",
    "correct_answer": "Password akun sistem dan token OTP dari authenticator app pada smartphone pengguna."
  },
  {
    "id": 149,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Pada sistem file Linux konvensional berbasis Discretionary Access Control (DAC), jika direktori memiliki izin octal 1777 (sticky bit aktif), dampak langsung terhadap hak pengguna non-root adalah ...",
    "options": {
      "a": "Hanya user pembuat direktori yang berhak menulis file baru, sedangkan user lain hanya bisa mengeksekusi berdasarkan kebijakan kontrol akses formal yang terdaftar.",
      "b": "Semua pengguna dapat membaca dan memodifikasi file, namun file hanya dapat dihapus oleh pemilik file atau root.",
      "c": "File di dalam direktori dieksekusi dengan hak akses pemilik direktori (setuid privilege) guna mencegah serangan replay token otentikasi jaringan.",
      "d": "File dienkripsi secara transparan menggunakan kunci grup pemilik direktori (setgid privilege) sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "e": "Pengguna biasa dilarang melihat daftar nama file di dalam direktori tanpa izin dari administrator pada infrastruktur autentikasi enterprise berskala besar."
    },
    "correct_letter": "b",
    "correct_answer": "Semua pengguna dapat membaca dan memodifikasi file, namun file hanya dapat dihapus oleh pemilik file atau root."
  },
  {
    "id": 150,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Dalam penyerangan Active Directory, teknik peretasan 'Pass-the-Hash' (PtH) memungkinkan penyerang mengotentikasi dirinya ke server target tanpa mengetahui password teks asli karena ...",
    "options": {
      "a": "Protokol autentikasi NTLM memvalidasi response otentikasi yang dihitung langsung dari NTLM hash password secara komprehensif.",
      "b": "NTLM hash dapat di-crack menjadi cleartext password secara deterministik dalam waktu kurang dari satu detik.",
      "c": "Server domain controller menyimpan private key RSA pengguna dalam bentuk plaintext di memori LSASS yang diverifikasi melalui ticket granting service terpusat.",
      "d": "Penyerang menyusupkan Ticket-Granting Ticket (TGT) palsu yang dibuat tanpa menggunakan session key KDC.",
      "e": "Protokol Kerberos secara otomatis menurunkan tingkat proteksi ke LM hash jika terjadi kegagalan transmisi."
    },
    "correct_letter": "a",
    "correct_answer": "Protokol autentikasi NTLM memvalidasi response otentikasi yang dihitung langsung dari NTLM hash password secara komprehensif."
  },
  {
    "id": 151,
    "week": "Week 2",
    "type": "Pre Test",
    "question": "Model kontrol akses Role-Based Access Control (RBAC) sering menerapkan aturan Separation of Duties (SoD). Apa tujuan fundamental dari implementasi Static SoD (SSOD)?",
    "options": {
      "a": "Mencegah pengguna mengaktifkan dua peran yang saling bertentangan secara bersamaan dalam satu sesi aktif sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "b": "Membatasi hak akses pengguna berdasarkan alamat IP dan jadwal jam operasional kerja kantor sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "c": "Mengharuskan otorisasi supervisor secara real-time setiap kali seorang user mengeksekusi transaksi finansial berdasarkan kebijakan kontrol akses formal yang terdaftar.",
      "d": "Mencegah pengguna yang sama ditugaskan ke dua peran yang saling berkonflik kepentingan sejak tahap alokasi hak.",
      "e": "Menghapus peran pengguna secara otomatis setelah masa kerja kontrak pegawai berakhir pada database sesuai dengan pedoman standar NIST SP 800-63 Digital Identity."
    },
    "correct_letter": "d",
    "correct_answer": "Mencegah pengguna yang sama ditugaskan ke dua peran yang saling berkonflik kepentingan sejak tahap alokasi hak."
  },
  {
    "id": 152,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Serangan 'Golden Ticket' pada domain Microsoft Active Directory melibatkan pemalsuan Ticket-Granting Ticket (TGT) Kerberos secara penuh. Kunci kriptografi krusial apa yang wajib diperoleh penyerang agar dapat menciptakan tiket tersebut?",
    "options": {
      "a": "Hash NTLM dari akun admin lokal pada workstation target yang diekstrak dari registry SAM.",
      "b": "Kunci privat sertifikat SSL/TLS domain controller yang tersimpan di Active Directory Certificate Services.",
      "c": "Password hash dari akun Domain Admin saat ini yang tersimpan di memori LSASS server aplikasi.",
      "d": "Hash NTLM atau kunci AES dari akun layanan khusus 'krbtgt' pada domain controller.",
      "e": "Master session key publik yang dibagikan oleh Time Stamping Authority eksternal."
    },
    "correct_letter": "d",
    "correct_answer": "Hash NTLM atau kunci AES dari akun layanan khusus 'krbtgt' pada domain controller."
  },
  {
    "id": 153,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Apa perbedaan fungsional utama antara serangan Golden Ticket dan Silver Ticket dalam domain lingkungan Kerberos?",
    "options": {
      "a": "Golden Ticket hanya memberi hak user biasa, sedangkan Silver Ticket memberikan hak domain controller forest-wide pada infrastruktur autentikasi enterprise berskala besar.",
      "b": "Golden Ticket memalsukan TGT menggunakan kunci krbtgt, sedangkan Silver Ticket memalsukan TGS menggunakan hash akun layanan spesifik.",
      "c": "Silver Ticket berkomunikasi langsung dengan KDC, sedangkan Golden Ticket tidak memerlukan komunikasi dengan KDC sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "d": "Silver Ticket menggunakan enkripsi kurva eliptik ECC, sedangkan Golden Ticket mengandalkan cipher simetris DES usang.",
      "e": "Golden Ticket dibuat menggunakan akun Administrator lokal, sedangkan Silver Ticket dibuat via akun guest domain."
    },
    "correct_letter": "b",
    "correct_answer": "Golden Ticket memalsukan TGT menggunakan kunci krbtgt, sedangkan Silver Ticket memalsukan TGS menggunakan hash akun layanan spesifik."
  },
  {
    "id": 154,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Dalam federasi identitas berbasis OpenID Connect (OIDC) dan OAuth 2.0, token manakah yang secara spesifik dirancang untuk membuktikan otentisitas identitas pengguna ke Client Application?",
    "options": {
      "a": "ID Token dalam format JSON Web Token (JWT) yang ditandatangani secara kriptografis oleh Identity Provider.",
      "b": "Refresh Token berumur panjang yang disimpan pada secure storage browser untuk rotasi sesi yang diverifikasi melalui ticket granting service terpusat.",
      "c": "Access Token berbentuk opaque string yang dikirim ke Resource Server pada header Authorization sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "d": "Authorization Code acak sekali pakai yang ditukarkan melalui front-channel browser redirection guna mencegah serangan replay token otentikasi jaringan.",
      "e": "SAML Artifact ticket yang dipetakan ke dalam database session back-channel Identity Provider."
    },
    "correct_letter": "a",
    "correct_answer": "ID Token dalam format JSON Web Token (JWT) yang ditandatangani secara kriptografis oleh Identity Provider."
  },
  {
    "id": 155,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Mengapa ekstensi PKCE (Proof Key for Code Exchange - RFC 7636) diwajibkan pada alur Authorization Code OAuth 2.0 untuk aplikasi mobile atau Single-Page Application (SPA)?",
    "options": {
      "a": "Untuk memverifikasi keaslian sidik jari biometrik perangkat sebelum kode otorisasi dikirimkan server.",
      "b": "Untuk mengenkripsi seluruh muatan Access Token menggunakan cipher simetris AES-GCM 256-bit di sisi browser.",
      "c": "Untuk menggantikan fungsi sertifikat SSL/TLS pada komunikasi jaringan antara client dan Authorization Server.",
      "d": "Untuk mencegah intersepsi Authorization Code oleh aplikasi berbahaya lokal yang mendaftarkan custom URI scheme yang sama.",
      "e": "Untuk menonaktifkan mekanisme CORS (Cross-Origin Resource Sharing) pada browser modern pengguna."
    },
    "correct_letter": "d",
    "correct_answer": "Untuk mencegah intersepsi Authorization Code oleh aplikasi berbahaya lokal yang mendaftarkan custom URI scheme yang sama."
  },
  {
    "id": 156,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Pada kurva Receiver Operating Characteristic (ROC) sistem biometrik, titik potong di mana nilai False Acceptance Rate (FAR) persis sama dengan False Rejection Rate (FRR) disebut ...",
    "options": {
      "a": "Area Under Curve (AUC) optimum pada infrastruktur autentikasi enterprise berskala besar.",
      "b": "Equal Error Rate (EER) atau Crossover Error Rate (CER).",
      "c": "True Positive Saturation Point (TPSP) sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "d": "Biometric Calibration Boundary (BCB).",
      "e": "Zero False Rejection Threshold (ZFRT)."
    },
    "correct_letter": "b",
    "correct_answer": "Equal Error Rate (EER) atau Crossover Error Rate (CER)."
  },
  {
    "id": 157,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Dua sistem biometrik diuji di laboratorium: Sistem X memiliki EER sebesar 0.05%, sedangkan Sistem Y memiliki EER sebesar 2.1%. Kesimpulan performa akurasi yang paling valid adalah ...",
    "options": {
      "a": "Sistem Y memiliki akurasi keseluruhan yang jauh lebih tinggi daripada Sistem X guna mencegah serangan replay token otentikasi jaringan.",
      "b": "Kedua sistem memiliki akurasi identik karena nilai EER tidak berkorelasi dengan akurasi pengenalan.",
      "c": "Sistem X membutuhkan waktu komputasi pencocokan template yang 40 kali lebih lambat dibanding Sistem Y.",
      "d": "Sistem Y lebih cocok diterapkan di fasilitas militer berkategori keamanan tinggi dibanding Sistem X.",
      "e": "Sistem X memiliki tingkat akurasi dan kinerja pembeda biometrik yang lebih unggul dibandingkan Sistem Y."
    },
    "correct_letter": "e",
    "correct_answer": "Sistem X memiliki tingkat akurasi dan kinerja pembeda biometrik yang lebih unggul dibandingkan Sistem Y."
  },
  {
    "id": 158,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Dalam model kontrol akses berbasis Brewer-Nash (sering disebut Chinese Wall Model), aturan keamanan diformulasikan secara khusus dengan tujuan utama untuk ...",
    "options": {
      "a": "Mencegah timbulnya konflik kepentingan (conflict of interest) pada konsultan yang menangani perusahaan pesaing.",
      "b": "Mencegah kebocoran data rahasia pertahanan negara ke domain sipil berkategori unclassified berdasarkan kebijakan kontrol akses formal yang terdaftar.",
      "c": "Menjaga integritas data transaksi perbankan agar tidak dimodifikasi oleh entitas luar tanpa otorisasi pada infrastruktur autentikasi enterprise berskala besar.",
      "d": "Menyediakan mekanisme delegasi wewenang administratif root secara transparan kepada user biasa guna mencegah serangan replay token otentikasi jaringan.",
      "e": "Mengisolasi malware worm agar tidak menyebar antar-subnet jaringan lokal yang berbeda VLAN yang diverifikasi melalui ticket granting service terpusat."
    },
    "correct_letter": "a",
    "correct_answer": "Mencegah timbulnya konflik kepentingan (conflict of interest) pada konsultan yang menangani perusahaan pesaing."
  },
  {
    "id": 159,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Pada sistem Linux dengan kontrol akses Discretionary Access Control (DAC), jika suatu executable binary memiliki bit 'Setuid' (SUID) aktif (izin octal 4755) dan dimiliki oleh root, maka saat dieksekusi oleh user 'alice' ...",
    "options": {
      "a": "File binary tersebut disalin ke direktori /root/ sebelum proses eksekusi dimulai kernel.",
      "b": "Program menolak eksekusi kecuali password akun root dimasukkan alice di command line.",
      "c": "Program berjalan dengan Effective User ID (EUID) milik root, bukan EUID milik alice secara komprehensif.",
      "d": "Program berjalan dengan Real User ID root namun hak akses dibatasi sandbox SELinux.",
      "e": "Sistem operasi mencatat peringatan pelanggaran hak akses ke file audit log /var/log/secure."
    },
    "correct_letter": "c",
    "correct_answer": "Program berjalan dengan Effective User ID (EUID) milik root, bukan EUID milik alice secara komprehensif."
  },
  {
    "id": 160,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Serangan 'Kerberoasting' pada Active Directory menargetkan komponen tiket layanan Kerberos (TGS). Mengapa penyerang dapat melakukan cracking password secara offline tanpa memicu lockout akun?",
    "options": {
      "a": "Penyerang menyadap private key domain controller melalui kelemahan pada protokol pertukaran kunci Diffie-Hellman.",
      "b": "Server KDC mengirimkan salinan plaintext password akun layanan di dalam field PAC tiket layanan berdasarkan kebijakan kontrol akses formal yang terdaftar.",
      "c": "Tiket TGS dienkripsi menggunakan NTLM hash akun layanan (SPN), sehingga penyerang dapat mengekstrak dan men-crack tiket di mesin lokalnya.",
      "d": "KDC tidak mencatat request tiket TGS pada Event Viewer keamanan Active Directory.",
      "e": "Akun layanan Active Directory tidak dilindungi fungsi hash melainkan pengacakan XOR sederhana."
    },
    "correct_letter": "c",
    "correct_answer": "Tiket TGS dienkripsi menggunakan NTLM hash akun layanan (SPN), sehingga penyerang dapat mengekstrak dan men-crack tiket di mesin lokalnya."
  },
  {
    "id": 161,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Dalam federasi identitas SAML 2.0 (Security Assertion Markup Language), apa fungsi dari elemen '<SubjectConfirmationData>' pada assertion XML?",
    "options": {
      "a": "Menyimpan salinan password terenkripsi pengguna untuk verifikasi login ganda di Service Provider.",
      "b": "Menyediakan private key Identity Provider untuk mendekripsi payload sesi database pengguna sesuai dengan pedoman standar NIST SP 800-63 Digital Identity.",
      "c": "Membatasi validitas assertion berdasarkan rentang waktu, alamat IP, dan URL penerima yang sah.",
      "d": "Menentukan daftar hak akses tabel SQL yang boleh dikueri oleh Service Provider guna mencegah serangan replay token otentikasi jaringan.",
      "e": "Mengonversi token SAML menjadi format JSON Web Token (JWT) secara otomatis."
    },
    "correct_letter": "c",
    "correct_answer": "Membatasi validitas assertion berdasarkan rentang waktu, alamat IP, dan URL penerima yang sah."
  },
  {
    "id": 162,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Pada model kontrol akses Clark-Wilson, integritas data transaksi bisnis dijamin melalui pemisahan data menjadi Constrained Data Items (CDI) dan Unconstrained Data Items (UDI). Mekanisme apa yang wajib digunakan untuk memanipulasi CDI?",
    "options": {
      "a": "Perintah sistem operasi langsung melalui shell root tanpa proses validasi perantara pada infrastruktur autentikasi enterprise berskala besar.",
      "b": "Fungsi enkripsi asimetris RSA 4096-bit yang dijalankan di level kernel driver.",
      "c": "Transformation Procedures (TP) yang tersertifikasi dan Integrity Verification Procedures (IVP).",
      "d": "Akses kontrol ACL berbasis daftar nama pengguna (UID) di sistem berkas lokal.",
      "e": "Protokol transmisi data UDP tanpa handshake untuk menghindari overhead latensi."
    },
    "correct_letter": "c",
    "correct_answer": "Transformation Procedures (TP) yang tersertifikasi dan Integrity Verification Procedures (IVP)."
  },
  {
    "id": 163,
    "week": "Week 2",
    "type": "Post Test",
    "question": "Dalam arsitektur XACML untuk kontrol akses Attribute-Based Access Control (ABAC), entitas arsitektur yang bertugas mengevaluasi kebijakan akses dan membuat keputusan otorisasi (Permit / Deny) adalah ...",
    "options": {
      "a": "Policy Enforcement Point (PEP) yang mencegat permintaan akses dari subjek guna mencegah serangan replay token otentikasi jaringan.",
      "b": "Policy Information Point (PIP) yang mengambil atribut subjek dan objek dari database eksternal.",
      "c": "Policy Administration Point (PAP) yang mengelola siklus pembuatan berkas kebijakan berdasarkan kebijakan kontrol akses formal yang terdaftar.",
      "d": "Policy Decision Point (PDP) yang menerima atribut dan mengevaluasi aturan kebijakan.",
      "e": "Policy Retrieval Authority (PRA) yang menyinkronkan token autentikasi client guna mencegah serangan replay token otentikasi jaringan."
    },
    "correct_letter": "d",
    "correct_answer": "Policy Decision Point (PDP) yang menerima atribut dan mengevaluasi aturan kebijakan."
  },
  {
    "id": 164,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Berdasarkan pedoman urutan volatilitas bukti digital (RFC 3227 - Order of Volatility), manakah urutan akuisisi bukti yang paling tepat dari yang paling volatil ke yang paling stabil?",
    "options": {
      "a": "Registers & cache CPU, Physical memory (RAM), Routing table & kernel statistics, Disk storage, Optical media.",
      "b": "Routing table & ARP cache, Registers & cache CPU, Physical memory (RAM), Non-volatile storage, Remote logging.",
      "c": "Physical memory (RAM), Registers & cache CPU, Network state & process table, Storage disk, Remote logging data.",
      "d": "Registers & cache CPU, Routing table & ARP cache, Physical memory (RAM), Temporary file systems, Optical media secara terperinci.",
      "e": "Temporary file systems, Physical memory (RAM), Registers & cache CPU, Routing table & ARP cache, Backup tapes."
    },
    "correct_letter": "d",
    "correct_answer": "Registers & cache CPU, Routing table & ARP cache, Physical memory (RAM), Temporary file systems, Optical media secara terperinci."
  },
  {
    "id": 165,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Mengapa penggunaan hardware write-blocker merupakan standar wajib saat melakukan forensik bit-stream image terhadap media penyimpanan barang bukti digital?",
    "options": {
      "a": "Mencegah sistem operasi forensik menulis metadata mount, update timestamp berkas, atau cache ke media bukti.",
      "b": "Mempercepat transfer data transfer bus SATA hingga dua kali lipat dibanding pembacaan port USB standar berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.",
      "c": "Mendekripsi partisi BitLocker atau LUKS pada disk target secara otomatis sebelum proses hashing dimulai.",
      "d": "Menghapus cluster bad sector pada hard disk sehingga proses bit-by-bit imaging tidak mengalami freezing.",
      "e": "Mengompresi raw disk image ke format E01 secara real-time guna menghemat ruang penyimpanan host forensik."
    },
    "correct_letter": "a",
    "correct_answer": "Mencegah sistem operasi forensik menulis metadata mount, update timestamp berkas, atau cache ke media bukti."
  },
  {
    "id": 166,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Dalam konteks hukum siber Indonesia (UU ITE), tindakan seorang penyerang yang menembus firewall dan sistem autentikasi server perbankan secara ilegal diatur dalam ...",
    "options": {
      "a": "Pasal 27 ayat (3) terkait penghinaan dan pencemaran nama baik melalui media transmisi elektronik umum dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "b": "Pasal 31 ayat (2) terkait intersepsi atau penyadapan transmisi informasi elektronik pada jaringan privat sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.",
      "c": "Pasal 30 ayat (3) terkait akses ilegal dengan melanggar, menerobos, melampaui, atau menjebol sistem pengamanan.",
      "d": "Pasal 32 ayat (1) terkait pengubahan, perusakan, atau pemindahan dokumen elektronik milik pihak berwenang dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "e": "Pasal 33 terkait gangguan terhadap sistem elektronik yang berakibat sistem tidak bekerja sebagaimana mestinya guna memastikan integritas rantai keabsahan bukti chain of custody."
    },
    "correct_letter": "c",
    "correct_answer": "Pasal 30 ayat (3) terkait akses ilegal dengan melanggar, menerobos, melampaui, atau menjebol sistem pengamanan."
  },
  {
    "id": 167,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Aksi pemasangan software packet sniffer di switch internal untuk menyadap kredensial login dan pesan confidential tanpa izin secara spesifik melanggar UU ITE ...",
    "options": {
      "a": "Pasal 30 ayat (1) mengenai pengaksesan komputer pihak lain tanpa hak secara umum tanpa menjebol proteksi berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.",
      "b": "Pasal 35 mengenai manipulasi atau penciptaan dokumen elektronik seolah-olah merupakan data yang otentik.",
      "c": "Pasal 32 ayat (2) mengenai pemindahan dokumen elektronik rahasia ke sistem elektronik yang tidak berhak.",
      "d": "Pasal 34 ayat (1) mengenai pemanfaatan sandi lewat (password) atau kode akses untuk keuntungan finansial.",
      "e": "Pasal 31 ayat (1) mengenai intersepsi atau penyadapan informasi/dokumen elektronik dalam sistem tertutup secara komprehensif."
    },
    "correct_letter": "e",
    "correct_answer": "Pasal 31 ayat (1) mengenai intersepsi atau penyadapan informasi/dokumen elektronik dalam sistem tertutup secara komprehensif."
  },
  {
    "id": 168,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Seorang insinyur perangkat lunak dengan sengaja mengubah nilai saldo di basis data aplikasi keuangan tanpa otorisasi. Dalam UU ITE, delik pidana ini diatur pada ...",
    "options": {
      "a": "Pasal 30 ayat (2) terkait perolehan informasi elektronik dari komputer pihak lain dengan tujuan menguntungkan diri.",
      "b": "Pasal 31 ayat (1) terkait intersepsi paket transmisi data keuangan antar server basis data dan server aplikasi.",
      "c": "Pasal 28 ayat (1) terkait penyebaran informasi palsu dan menyesatkan yang mengakibatkan kerugian konsumen e-commerce.",
      "d": "Pasal 33 terkait tindakan mengganggu integritas perangkat keras server hingga menimbulkan kegagalan daya guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "e": "Pasal 32 ayat (1) terkait pengubahan, penambahan, pengurangan, transmisi, atau perusakan dokumen elektronik secara komprehensif."
    },
    "correct_letter": "e",
    "correct_answer": "Pasal 32 ayat (1) terkait pengubahan, penambahan, pengurangan, transmisi, atau perusakan dokumen elektronik secara komprehensif."
  },
  {
    "id": 169,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Penyerangan Distributed Denial of Service (DDoS) yang membanjiri bandwidth server instansi publik hingga layanan mati total dijerat dengan ketentuan UU ITE ...",
    "options": {
      "a": "Pasal 33 tentang perbuatan apa pun yang berakibat terganggunya sistem elektronik menjadi tidak bekerja sebagaimana mestinya.",
      "b": "Pasal 31 ayat (2) tentang intersepsi komunikasi data yang tidak diperuntukkan bagi umum dalam lalu lintas internet sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.",
      "c": "Pasal 32 ayat (3) tentang pemindahan dokumen elektronik yang mengakibatkan terbukanya data rahasia institusi sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.",
      "d": "Pasal 30 ayat (3) tentang penerobosan perimeter sistem keamanan jaringan komputer milik lembaga publik berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.",
      "e": "Pasal 35 tentang pemalsuan tanda tangan elektronik pejabat berwenang dalam sistem dokumen administrasi negara."
    },
    "correct_letter": "a",
    "correct_answer": "Pasal 33 tentang perbuatan apa pun yang berakibat terganggunya sistem elektronik menjadi tidak bekerja sebagaimana mestinya."
  },
  {
    "id": 170,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Dalam Budapest Convention on Cybercrime (ETS No. 185), pasal berapakah yang secara spesifik mewajibkan penandatangan mengkriminalisasi tindakan 'Data Interference'?",
    "options": {
      "a": "Article 2 (Illegal access to computer systems without right) guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "b": "Article 3 (Illegal interception of non-public transmissions) sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.",
      "c": "Article 4 (Data interference involving damaging or altering data).",
      "d": "Article 5 (System interference hindering functioning of systems).",
      "e": "Article 6 (Misuse of devices designed for committing offenses)."
    },
    "correct_letter": "c",
    "correct_answer": "Article 4 (Data interference involving damaging or altering data)."
  },
  {
    "id": 171,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Berdasarkan UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), manakah di antara opsi berikut yang seluruhnya termasuk dalam kategori 'Data Pribadi Spesifik'?",
    "options": {
      "a": "Nama lengkap, jenis kelamin, alamat rumah tinggal, dan nomor telepon seluler pribadi.",
      "b": "Data kesehatan, informasi biometrik, data genetika, dan catatan kejahatan seseorang secara komprehensif.",
      "c": "Kewarganegaraan, agama, status perkawinan terdaftar, dan riwayat pekerjaan formal sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.",
      "d": "Alamat IP publik, preferensi peramban web, riwayat browsing internet, dan cookie web.",
      "e": "Nomor induk kependudukan (NIK), tempat tanggal lahir, nama ibu kandung, dan golongan darah."
    },
    "correct_letter": "b",
    "correct_answer": "Data kesehatan, informasi biometrik, data genetika, dan catatan kejahatan seseorang secara komprehensif."
  },
  {
    "id": 172,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Dalam Chain of Custody forensik digital, tindakan yang wajib dicatat secara mendetail saat serah terima barang bukti flashdisk mencakup ...",
    "options": {
      "a": "Pernyataan pengakuan bersalah yang ditandatangani oleh tersangka di hadapan saksi ahli forensik digital.",
      "b": "Daftar seluruh password akun pengguna yang tersimpan di dalam perangkat beserta nomor PIN perbankan pemilik.",
      "c": "Estimasi nilai rupiah perangkat di pasaran perangkat keras bekas saat barang bukti tersebut disita penyidik.",
      "d": "Konfigurasi detail register prosesor dan suhu operasional perangkat sebelum dimasukkan ke dalam kantong antistatis.",
      "e": "Nilai hash cryptographic (MD5/SHA-256), nomor seri perangkat, identitas pemeriksa, dan tanggal waktu perpindahan fisik."
    },
    "correct_letter": "e",
    "correct_answer": "Nilai hash cryptographic (MD5/SHA-256), nomor seri perangkat, identitas pemeriksa, dan tanggal waktu perpindahan fisik."
  },
  {
    "id": 173,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Ketika menangani insiden komputer menyala yang menjalankan enkripsi disk BitLocker aktif dan malware RAM-resident, mengapa 'Live Acquisition' lebih diprioritaskan daripada langsung mencabut kabel daya?",
    "options": {
      "a": "Pencabutan daya langsung dapat merusak struktur fisik sirkuit motherboard dan power supply server target.",
      "b": "Kunci enkripsi memori (FVEK) dan artefak malware dalam RAM akan lenyap seketika daya listrik terputus secara komprehensif.",
      "c": "Sistem operasi modern akan memformat ulang media penyimpanan jika komputer dimatikan secara mendadak berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.",
      "d": "Live acquisition menghasilkan ukuran berkas citra bukti digital yang jauh lebih kecil daripada cold acquisition.",
      "e": "Sertifikat digital forensik hanya sah secara hukum jika diambil ketika sistem operasi dalam status running."
    },
    "correct_letter": "b",
    "correct_answer": "Kunci enkripsi memori (FVEK) dan artefak malware dalam RAM akan lenyap seketika daya listrik terputus secara komprehensif."
  },
  {
    "id": 174,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Teknik anti-forensik 'Timestomping' sering digunakan pelaku kejahatan siber untuk mengelabui analis timeline forensik. Pada sistem berkas NTFS, teknik ini bekerja dengan cara ...",
    "options": {
      "a": "Memanipulasi timestamp berkas pada atribut $STANDARD_INFORMATION tanpa menyelaraskan atribut $FILE_NAME secara komprehensif.",
      "b": "Mengubah frekuensi kristal clock pada CMOS hardware BIOS agar waktu sistem berjalan mundur secara konstan.",
      "c": "Menghapus berkas log Event Viewer Application dan Security secara berkala menggunakan skrip batch terjadwal.",
      "d": "Mengenkripsi seluruh sektor metadata Master File Table ($MFT) dengan algoritma asimetris RSA 2048-bit dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "e": "Menyematkan payload malware ke dalam slack space cluster disk yang tidak terpetakan oleh sistem operasi."
    },
    "correct_letter": "a",
    "correct_answer": "Memanipulasi timestamp berkas pada atribut $STANDARD_INFORMATION tanpa menyelaraskan atribut $FILE_NAME secara komprehensif."
  },
  {
    "id": 175,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Dalam analisis dump memori RAM menggunakan Volatility Framework, mengapa plugin 'psscan' mampu menemukan proses malware tersembunyi yang gagal dideteksi oleh plugin 'pslist'?",
    "options": {
      "a": "psscan membaca berkas prefetch di hard disk, sedangkan pslist hanya memeriksa cache CPU prosesor host dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "b": "pslist hanya dapat berjalan pada sistem operasi Linux, sedangkan psscan didesain eksklusif untuk kernel Windows.",
      "c": "psscan melakukan scanning pola pool tag memori, sedangkan pslist hanya menelusuri linked-list EPROCESS aktif.",
      "d": "pslist memerlukan privilege root untuk membaca memori, sedangkan psscan dapat berjalan di unprivileged mode.",
      "e": "psscan menggunakan algoritma deobfuskasi XOR dinamis untuk membongkar injeksi shellcode pada stack memori."
    },
    "correct_letter": "c",
    "correct_answer": "psscan melakukan scanning pola pool tag memori, sedangkan pslist hanya menelusuri linked-list EPROCESS aktif."
  },
  {
    "id": 176,
    "week": "Week 3",
    "type": "Pre Test",
    "question": "Artefak Windows Registry manakah yang paling krusial dianalisis penyidik untuk merekonstruksi riwayat mounting perangkat USB flashdisk eksternal pada komputer tersangka?",
    "options": {
      "a": "SYSTEM\\CurrentControlSet\\Enum\\USBSTOR dan berkas setupapi.dev.log.",
      "b": "SAM\\Domains\\Account\\Users dan berkas Ntds.dit direktori domain controller.",
      "c": "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce startup keys dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "d": "SECURITY\\Policy\\Secrets dan berkas master key Credential Manager berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.",
      "e": "SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Exclusions keys guna memastikan integritas rantai keabsahan bukti chain of custody."
    },
    "correct_letter": "a",
    "correct_answer": "SYSTEM\\CurrentControlSet\\Enum\\USBSTOR dan berkas setupapi.dev.log."
  },
  {
    "id": 177,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Pada sistem operasi Windows, analisis terhadap artefak Prefetch (.pf) memberikan nilai bukti digital yang sangat kuat karena mampu membuktikan ...",
    "options": {
      "a": "Daftar alamat URL website perbankan yang diakses pengguna melalui browser mode incognito dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "b": "Isi plaintext percakapan instan yang terjadi sebelum prosesor mengalami crash blue screen.",
      "c": "Kunci simetris AES yang digunakan ransomware untuk mengenkripsi volume partisi sekunder.",
      "d": "Eksekusi suatu executable, waktu eksekusi terakhir, run count, serta DLL yang dimuat ke memori.",
      "e": "Daftar kata sandi Wi-Fi SSID publik yang pernah terhubung ke adapter nirkabel laptop target."
    },
    "correct_letter": "d",
    "correct_answer": "Eksekusi suatu executable, waktu eksekusi terakhir, run count, serta DLL yang dimuat ke memori."
  },
  {
    "id": 178,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Metode pemulihan berkas 'File Carving' dalam investigasi disk forensik bekerja berdasarkan prinsip apa ketika tabel sistem berkas (seperti FAT/MFT) telah rusak atau terhapus?",
    "options": {
      "a": "Melakukan rekonstruksi struktur pohon direktori berdasarkan sisa cache metadata pada RAM prosesor berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.",
      "b": "Mendekompilasi file sistem operasi menggunakan teknik reverse engineering machine code berbasis AI.",
      "c": "Mengirimkan kueri recovery data ke server bayangan Volume Shadow Copy Service melalui jaringan dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "d": "Mengidentifikasi magic bytes signature (header dan footer spesifik format berkas) pada raw unallocated cluster.",
      "e": "Menghitung nilai parity cluster RAID menggunakan algoritma Reed-Solomon untuk membangkitkan berkas."
    },
    "correct_letter": "d",
    "correct_answer": "Mengidentifikasi magic bytes signature (header dan footer spesifik format berkas) pada raw unallocated cluster."
  },
  {
    "id": 179,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Dalam steganografi gambar digital, metode Least Significant Bit (LSB) embedding menyembunyikan payload rahasia dengan cara mengubah ...",
    "options": {
      "a": "Bit paling rendah dari nilai byte warna piksel sehingga perubahan visual tidak kasat mata bagi mata manusia.",
      "b": "Metadata Exif kamera seperti focal length, aperture, dan koordinat GPS penangkapan foto guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "c": "Algoritma kompresi Huffman dari lossless format PNG menjadi lossy compression format JPEG secara dinamis guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "d": "Resolusi lebar dan tinggi gambar di header IHDR tanpa mengubah payload matriks piksel sebenarnya dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "e": "Tabel kuantisasi Discrete Cosine Transform (DCT) pada kanal chrominance secara acak merata yang dicatat dalam berkas berita acara pemeriksaan forensik."
    },
    "correct_letter": "a",
    "correct_answer": "Bit paling rendah dari nilai byte warna piksel sehingga perubahan visual tidak kasat mata bagi mata manusia."
  },
  {
    "id": 180,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Pada sistem berkas NTFS, berkas teks berukuran sangat kecil (< 700 byte) sering kali dikategorikan sebagai 'Resident File'. Karakteristik unik berkas resident ini adalah ...",
    "options": {
      "a": "Datanya selalu dikompresi menggunakan algoritma LZX dan hanya bisa dibaca oleh pengguna berhak istimewa root.",
      "b": "Datanya disimpan langsung di dalam record Master File Table ($MFT) itu sendiri tanpa alokasi cluster eksternal.",
      "c": "Datanya tidak akan pernah terhapus meskipun sistem berkas diformat ulang menggunakan perintah quick format.",
      "d": "Datanya disimpan secara eksklusif di dalam NVRAM motherboard dan tidak tertulis di media piringan disk.",
      "e": "Datanya secara otomatis diduplikasi ke sektor bad block untuk mencegah kehilangan data akibat kegagalan baca."
    },
    "correct_letter": "b",
    "correct_answer": "Datanya disimpan langsung di dalam record Master File Table ($MFT) itu sendiri tanpa alokasi cluster eksternal."
  },
  {
    "id": 181,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Dalam forensik perangkat bergerak (mobile forensics), perbedaan mendasar antara 'Logical Extraction' dan 'Physical Extraction' adalah ...",
    "options": {
      "a": "Logical mengekstrak salinan bit-by-bit flash memory mentah, sedangkan Physical hanya mengambil file via backup API guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "b": "Logical mampu memulihkan seluruh berkas yang terhapus dari unallocated space, sedangkan Physical tidak bisa memulihkannya.",
      "c": "Logical memerlukan solder chip-off pada papan PCB ponsel, sedangkan Physical cukup menggunakan kabel data USB biasa guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "d": "Logical hanya mengambil data struktur logis melalui API OS, sedangkan Physical mengambil bit-by-bit raw flash memory secara komprehensif.",
      "e": "Logical hanya dapat diterapkan pada sistem operasi iOS, sedangkan Physical hanya dapat dieksekusi pada ponsel Android."
    },
    "correct_letter": "d",
    "correct_answer": "Logical hanya mengambil data struktur logis melalui API OS, sedangkan Physical mengambil bit-by-bit raw flash memory secara komprehensif."
  },
  {
    "id": 182,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Seorang individu memproduksi, memperjualbelikan, dan mendistribusikan software keylogger serta tool exploit kit untuk membobol sistem pihak lain. Pasal UU ITE yang mengatur larangan ini adalah ...",
    "options": {
      "a": "Pasal 30 ayat (1) mengenai tindakan mengakses komputer tanpa izin demi memperoleh hiburan semata yang dicatat dalam berkas berita acara pemeriksaan forensik.",
      "b": "Pasal 32 ayat (2) mengenai pengiriman data elektronik rahasia ke server luar negeri tanpa sertifikasi keamanan yang dicatat dalam berkas berita acara pemeriksaan forensik.",
      "c": "Pasal 34 ayat (1) mengenai pembuatan, penjualan, pengimporan, atau pendistribusian perangkat keras/lunak untuk tindak pidana siber.",
      "d": "Pasal 36 mengenai perbuatan melawan hukum yang tidak mengakibatkan kerugian materiil bagi korban secara riil guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "e": "Pasal 37 mengenai kewajiban penyelenggara sistem elektronik mendaftarkan sertifikat elektronik ke kementerian yang dicatat dalam berkas berita acara pemeriksaan forensik."
    },
    "correct_letter": "c",
    "correct_answer": "Pasal 34 ayat (1) mengenai pembuatan, penjualan, pengimporan, atau pendistribusian perangkat keras/lunak untuk tindak pidana siber."
  },
  {
    "id": 183,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Berdasarkan UU PDP (Undang-Undang Pelindungan Data Pribadi No. 27 Tahun 2022), hak subjek data pribadi untuk menuntut penghapusan data pribadinya dikenal sebagai ...",
    "options": {
      "a": "Hak atas Portabilitas Data Pribadi antar pengendali data secara otomatis yang dicatat dalam berkas berita acara pemeriksaan forensik.",
      "b": "Hak Menunda Pembayaran Ganti Rugi Pelanggaran Keamanan Sistem Informasi.",
      "c": "Hak Mengajukan Keberatan atas Keputusan Otomatisasi Profiling Konsumen.",
      "d": "Hak Mengakses dan Memperoleh Salinan Data Tanpa Biaya Administrasi Tambahan.",
      "e": "Hak Mengakhiri Pemrosesan dan Hak Penghapusan (Right to Erasure / to be Forgotten)."
    },
    "correct_letter": "e",
    "correct_answer": "Hak Mengakhiri Pemrosesan dan Hak Penghapusan (Right to Erasure / to be Forgotten)."
  },
  {
    "id": 184,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Dalam network forensics, mengapa berkas PCAP (Full Packet Capture) memberikan visibilitas yang jauh lebih tinggi dibanding rekaman NetFlow / IPFIX?",
    "options": {
      "a": "NetFlow mengenkripsi data lalu lintas menggunakan private key router, sedangkan PCAP menyimpan data dalam plaintext sesuai dengan prosedur standar ISO/IEC 27037 bukti digital.",
      "b": "PCAP menyimpan seluruh payload aplikasi dan header layer 2-7, sedangkan NetFlow hanya mencatat metadata flow 5-tuple.",
      "c": "PCAP memerlukan bandwidth jaringan yang jauh lebih kecil dan ruang disk minimal dibanding rekaman NetFlow dalam kerangka pembuktian tindak pidana siber menurut undang-undang.",
      "d": "NetFlow hanya mampu mencatat paket protokol TCP, sedangkan PCAP secara eksklusif hanya memantau lalu lintas UDP guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "e": "PCAP langsung menyaring serangan malware di switch core tanpa memerlukan analisis lanjut di workstation forensik berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem."
    },
    "correct_letter": "b",
    "correct_answer": "PCAP menyimpan seluruh payload aplikasi dan header layer 2-7, sedangkan NetFlow hanya mencatat metadata flow 5-tuple."
  },
  {
    "id": 185,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Mengapa pemulihan berkas terhapus menggunakan carver pada media Solid State Drive (SSD) modern jauh lebih sulit dibanding pada Hard Disk Drive (HDD) mekanis?",
    "options": {
      "a": "SSD memiliki piringan magnetik yang berputar pada kecepatan ekstrem sehingga sisa magnetisme terdistorsi yang dicatat dalam berkas berita acara pemeriksaan forensik.",
      "b": "Kontroler SSD menolak seluruh perintah pembacaan raw bit-stream yang dikirimkan oleh software forensic imaging.",
      "c": "Sistem operasi selalu menerapkan enkripsi AES-512 level chip hardware pada setiap sektor NAND flash SSD yang dicatat dalam berkas berita acara pemeriksaan forensik.",
      "d": "SSD tidak menggunakan cluster sistem berkas dan hanya mengandalkan alamat memori virtual acak dinamis guna memastikan integritas rantai keabsahan bukti chain of custody.",
      "e": "Perintah TRIM dan garbage collection pada SSD secara proaktif membersihkan blok memori flash yang ditandai terhapus."
    },
    "correct_letter": "e",
    "correct_answer": "Perintah TRIM dan garbage collection pada SSD secara proaktif membersihkan blok memori flash yang ditandai terhapus."
  },
  {
    "id": 186,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Dalam investigasi memori (memory forensics), indikator kuat adanya teknik Process Hollowing atau DLL Injection oleh malware tingkat lanjut ditandai dengan alokasi memori berkategori ...",
    "options": {
      "a": "Halaman memori berstatus PAGE_READONLY yang dipetakan langsung dari berkas sistem Windows asli (ntdll.dll).",
      "b": "Halaman memori privat (MEM_PRIVATE) yang memiliki izin eksekusi dan penulisan sekaligus (PAGE_EXECUTE_READWRITE).",
      "c": "Halaman memori bersama (MEM_SHARED) dengan izin akses eksklusif PAGE_NOACCESS untuk proses thread kernel.",
      "d": "Halaman memori stack proses yang dialokasikan di area memory-mapped I/O perangkat keras grafis terpasang.",
      "e": "Halaman memori berkas swapfile.sys yang telah ditandai sebagai uncommitted space oleh sistem virtual memory."
    },
    "correct_letter": "b",
    "correct_answer": "Halaman memori privat (MEM_PRIVATE) yang memiliki izin eksekusi dan penulisan sekaligus (PAGE_EXECUTE_READWRITE)."
  },
  {
    "id": 187,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Agar bukti digital dapat diterima (admissible) di persidangan menurut hukum acara pidana dan UU ITE Pasal 5 dan 6, syarat formil dan materiil yang paling mendasar adalah ...",
    "options": {
      "a": "Bukti harus berupa perangkat keras fisik asli bergaransi distributor resmi dan belum pernah dibuka bautnya berdasarkan pedoman urutan volatilitas RFC 3227 forensik sistem.",
      "b": "Telah didekripsi secara penuh tanpa menyisakan enkripsi apa pun dan disetujui langsung oleh tersangka perkara.",
      "c": "Diperoleh secara sah menurut hukum, terjaga integritas dan keasliannya (chain of custody), serta dapat dipertanggungjawabkan.",
      "d": "Telah diuji coba di tiga laboratorium forensik universitas swasta berbeda dalam kurun waktu satu minggu kalender.",
      "e": "Memiliki ukuran file minimal 1 Terabyte dan disimpan di dalam media penyimpanan cloud bersertifikat internasional."
    },
    "correct_letter": "c",
    "correct_answer": "Diperoleh secara sah menurut hukum, terjaga integritas dan keasliannya (chain of custody), serta dapat dipertanggungjawabkan."
  },
  {
    "id": 188,
    "week": "Week 3",
    "type": "Post Test",
    "question": "Berdasarkan standar Computer Security Incident Handling Guide (NIST SP 800-61 Rev. 2), urutan 4 fase utama siklus penanganan insiden keamanan siber adalah ...",
    "options": {
      "a": "Risk Assessment, Security Auditing, Penetration Testing, Legal Prosecution Report.",
      "b": "Triage, Evidence Hashing, Malware Reverse Engineering, System Reinstallation.",
      "c": "Identification, Authentication, Authorization, Accounting, Continuous Monitoring.",
      "d": "Preparation, Detection & Analysis, Containment, Eradication & Recovery, Post-Incident Activity.",
      "e": "Policy Definition, Architecture Design, Tool Deployment, Annual Compliance Review."
    },
    "correct_letter": "d",
    "correct_answer": "Preparation, Detection & Analysis, Containment, Eradication & Recovery, Post-Incident Activity."
  },
  {
    "id": 189,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Pada arsitektur x86-64, bagaimana mekanisme mendasar sebuah serangan Stack-based Buffer Overflow klasik berhasil membajak alur eksekusi (control flow) program?",
    "options": {
      "a": "Menimpa frame pointer (RBP) dan saved return address pada call stack sehingga instruksi RET melompat ke alamat yang dikontrol penyerang.",
      "b": "Mengubah nilai register penunjuk instruksi (RIP) secara langsung melalui instruksi MOV unprivileged pada ring 3 sistem operasi sehingga memicu eksekusi instruksi pada privilege level kernel.",
      "c": "Mengganti tabel Global Descriptor Table (GDT) di kernel space sehingga seluruh hak akses proses dialihkan ke mode superuser yang dievaluasi compiler selama fase kompilasi dan optimasi.",
      "d": "Memodifikasi pointer Global Offset Table (GOT) tanpa menyentuh batasan alokasi array lokal yang tersimpan di stack memori fungsi sesuai prinsip secure software development lifecycle enterprise.",
      "e": "Menginstruksikan CPU untuk mengeksekusi trap interrupt 0x80 dengan muatan payload shellcode di dalam register akumulator RAX."
    },
    "correct_letter": "a",
    "correct_answer": "Menimpa frame pointer (RBP) dan saved return address pada call stack sehingga instruksi RET melompat ke alamat yang dikontrol penyerang."
  },
  {
    "id": 190,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Mekanisme mitigasi Stack Canary (Stack Cookie) melindungi program dari buffer overflow dengan menempatkan nilai integer acak di memori. Di manakah posisi persis canary tersebut diletakkan?",
    "options": {
      "a": "Di antara segmen instruksi .text dan segmen konstanta data read-only .rodata pada struktur berkas biner ELF sehingga memicu eksekusi instruksi pada privilege level kernel.",
      "b": "Tepat di antara buffer array lokal dan saved base pointer / return address pada stack frame fungsi yang aktif secara komprehensif.",
      "c": "Di dalam tabel Thread Local Storage (TLS) untuk mengamankan komunikasi antar-thread dari race condition paralel.",
      "d": "Pada alamat terendah dari heap memory sebelum pointer chunk metadata pertama dialokasikan oleh runtime allocator.",
      "e": "Di puncak stack tepat sebelum parameter fungsi pertama disorongkan (pushed) oleh pemanggil fungsi (caller)."
    },
    "correct_letter": "b",
    "correct_answer": "Tepat di antara buffer array lokal dan saved base pointer / return address pada stack frame fungsi yang aktif secara komprehensif."
  },
  {
    "id": 191,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Address Space Layout Randomization (ASLR) secara acak mengacak posisi stack, heap, dan pustaka bersama. Mengapa vulnerability 'Information Disclosure' (seperti format string leak) sering kali menjadi prasyarat untuk membobol ASLR?",
    "options": {
      "a": "Information disclosure mengubah hak akses memori dari read-only menjadi read-write-execute secara dinamis pada arsitektur biner 64-bit yang diproteksi compiler flags.",
      "b": "Bocoran alamat pointer memori aktual memungkinkan penyerang menghitung base address pustaka (misal libc) via offset tetap.",
      "c": "Bocoran data memicu proses crash berulang sehingga kernel Linux secara otomatis menonaktifkan proteksi ASLR sistem untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "d": "Alamat memori yang bocor dapat dimanfaatkan untuk menulis shellcode langsung ke dalam register prosesor host sehingga memicu eksekusi instruksi pada privilege level kernel.",
      "e": "Information disclosure secara otomatis mereset nilai stack canary menjadi deretan byte null (0x0000000000000000) yang dievaluasi compiler selama fase kompilasi dan optimasi."
    },
    "correct_letter": "b",
    "correct_answer": "Bocoran alamat pointer memori aktual memungkinkan penyerang menghitung base address pustaka (misal libc) via offset tetap."
  },
  {
    "id": 192,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Ketika Data Execution Prevention (DEP / NX bit) aktif, halaman memori stack dan heap ditandai sebagai non-executable. Teknik eksploitasi apa yang dirancang khusus untuk memotong proteksi ini tanpa perlu mengeksekusi shellcode di stack?",
    "options": {
      "a": "Heap Spraying dengan membanjiri memori menggunakan ribuan objek string NOP sled berukuran raksasa untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "b": "Timing Attack pada algoritma kriptografi kunci publik untuk memulihkan eksponen privat enkripsi RSA.",
      "c": "Blind SQL Injection dengan memanfaatkan delay query waktu (time-based) untuk menebak hash kata sandi root yang dievaluasi compiler selama fase kompilasi dan optimasi.",
      "d": "Cross-Site Scripting berbasis DOM dengan menyuntikkan payload JavaScript ke atribut innerHTML halaman web.",
      "e": "Return-Oriented Programming (ROP) dengan merangkai potongan kode executable biner yang berakhiran instruksi RET (gadgets)."
    },
    "correct_letter": "e",
    "correct_answer": "Return-Oriented Programming (ROP) dengan merangkai potongan kode executable biner yang berakhiran instruksi RET (gadgets)."
  },
  {
    "id": 193,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Dalam eksploitasi celah format string pada fungsi `printf(user_input)` bahasa C, penentu format (format specifier) manakah yang dapat dimanfaatkan penyerang untuk MENULIS nilai ke alamat memori tertentu?",
    "options": {
      "a": "Specifier %x yang mencetak representasi heksadesimal dari nilai yang tersimpan di stack memori saat ini.",
      "b": "Specifier %p yang menampilkan alamat virtual pointer register stack sebagai string heksadesimal standar.",
      "c": "Specifier %s yang membaca deretan string biner secara rekursif hingga menemukan karakter null byte pembatas.",
      "d": "Specifier %n yang menuliskan jumlah karakter yang telah diformat sejauh ini ke alamat pointer yang ditunjuk secara terperinci.",
      "e": "Specifier %d yang mengonversi bilangan integer bertanda ke format desimal untuk verifikasi tipe data variabel."
    },
    "correct_letter": "d",
    "correct_answer": "Specifier %n yang menuliskan jumlah karakter yang telah diformat sejauh ini ke alamat pointer yang ditunjuk secara terperinci."
  },
  {
    "id": 194,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Bagaimana kerentanan 'Integer Overflow' dapat bertransisi menjadi Heap Buffer Overflow pada potongan kode: `size_t total = count * sizeof(Item); Item *buf = malloc(total); memcpy(buf, src, count * sizeof(Item));`?",
    "options": {
      "a": "Fungsi malloc mengembalikan pointer NULL yang langsung dieksekusi oleh instruksi memcpy sebagai instruksi jump CPU untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "b": "Perkalian variabel count meluap melampaui batas tipe data sehingga malloc mengalokasikan buffer kecil, namun memcpy menulis data besar.",
      "c": "Ukuran sizeof(Item) berubah secara dinamis pada saat runtime sehingga pointer buf berpindah ke stack memori internal.",
      "d": "Tipe data size_t dipaksa menjadi signed integer negatif sehingga memicu alokasi memori berukuran tak hingga (infinite heap).",
      "e": "Instruksi memcpy menolak menyalin data bertipe struktural biner jika buffer dialokasikan menggunakan alokator malloc standar."
    },
    "correct_letter": "b",
    "correct_answer": "Perkalian variabel count meluap melampaui batas tipe data sehingga malloc mengalokasikan buffer kecil, namun memcpy menulis data besar."
  },
  {
    "id": 195,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Kerentanan Use-After-Free (UAF) terjadi akibat pengelolaan memori dinamis yang keliru. Dampak keamanan paling berbahaya yang dapat ditimbulkan oleh UAF ketika penyerang dapat mengontrol isi chunk yang telah dibebaskan adalah ...",
    "options": {
      "a": "Penurunan performa throughput jaringan akibat fragmentasi paket data TCP pada soket komunikasi server.",
      "b": "Perubahan status koneksi database dari mode transaksional ACID menjadi mode autocommit tanpa peringatan sistem.",
      "c": "Pembajakan pointer fungsi atau virtual method table (vtable) objek yang menyebabkan Arbitrary Code Execution secara terperinci.",
      "d": "Penghapusan seluruh indeks tabel basis data akibat kesalahan penulisan pointer pada struktur berkas b-tree.",
      "e": "Kegagalan sinkronisasi waktu NTP antara server aplikasi dan server domain controller di infrastruktur lokal."
    },
    "correct_letter": "c",
    "correct_answer": "Pembajakan pointer fungsi atau virtual method table (vtable) objek yang menyebabkan Arbitrary Code Execution secara terperinci."
  },
  {
    "id": 196,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Apa dampak utama dari kerentanan 'Double Free' pada alokator memori heap modern (seperti glibc ptmalloc) jika mitigasi integritas bin rusak atau berhasil dilewati penyerang?",
    "options": {
      "a": "Prosesor secara permanen mengunci bus memori hardware sehingga sistem operasi mengalami kernel panic untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "b": "Sertifikat SSL/TLS server web dihapus dari direktori konfigurasi web server secara permanen tanpa jejak log.",
      "c": "Alamat IP publik server web langsung diubah menjadi alamat loopback 127.0.0.1 oleh driver antarmuka jaringan.",
      "d": "Sistem operasi mematikan seluruh firewall iptables dan membuka port layanan administrasi SSH tanpa autentikasi.",
      "e": "Penyerang dapat merusak linked-list alokator heap (seperti tcache/fastbin) untuk menghasilkan alokasi chunk di alamat memori sembarang."
    },
    "correct_letter": "e",
    "correct_answer": "Penyerang dapat merusak linked-list alokator heap (seperti tcache/fastbin) untuk menghasilkan alokasi chunk di alamat memori sembarang."
  },
  {
    "id": 197,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Kerentanan 'Off-by-One' (Single Byte Overflow) tampak sepele karena hanya meluapkan tepat satu byte ke memori adjacent. Namun, mengapa cacat ini dapat menyebabkan pembajakan kontrol alur program pada stack frame?",
    "options": {
      "a": "Satu byte tersebut dapat menimpa least significant byte dari saved frame pointer (EBP/RBP), membelokkan stack frame pemanggil saat epilog leave/ret.",
      "b": "Kernel Linux secara otomatis mengeksekusi shell root setiap kali mendeteksi anomali penulisan satu byte di memori virtual.",
      "c": "Satu byte tersebut menghapus seluruh proteksi enkripsi hardware TPM pada motherboard secara seketika.",
      "d": "Single byte overflow memicu prosesor beralih dari mode 64-bit long mode ke mode 16-bit real mode tanpa validasi.",
      "e": "Penulisan satu byte ke stack frame secara otomatis menonaktifkan seluruh aturan firewall jaringan tingkat kernel."
    },
    "correct_letter": "a",
    "correct_answer": "Satu byte tersebut dapat menimpa least significant byte dari saved frame pointer (EBP/RBP), membelokkan stack frame pemanggil saat epilog leave/ret."
  },
  {
    "id": 198,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Dalam pemodelan ancaman STRIDE, kategori ancaman 'Repudiation' berkaitan langsung dengan pelanggaran terhadap prinsip keamanan informasi apa, dan bagaimana mitigasi standarnya?",
    "options": {
      "a": "Ketiadaan sangkalan (Non-repudiation); dimitigasi dengan digital signature dan secure audit logging yang tamper-proof secara terperinci.",
      "b": "Kerahasiaan data (Confidentiality); dimitigasi dengan penerapan algoritma enkripsi simetris AES-256 GCM.",
      "c": "Ketersediaan layanan (Availability); dimitigasi dengan implementasi load balancer dan arsitektur redundansi multi-zona.",
      "d": "Otorisasi pengguna (Authorization); dimitigasi dengan pembatasan hak akses berbasis Role-Based Access Control.",
      "e": "Otentikasi identitas (Authenticity); dimitigasi dengan pengaktifan Multi-Factor Authentication berbasis token FIDO2."
    },
    "correct_letter": "a",
    "correct_answer": "Ketiadaan sangkalan (Non-repudiation); dimitigasi dengan digital signature dan secure audit logging yang tamper-proof secara terperinci."
  },
  {
    "id": 199,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Model penilaian risiko kerentanan DREAD mengevaluasi tingkat keparahan risiko berdasarkan 5 parameter. Parameter 'Discoverability' dalam DREAD mengukur ...",
    "options": {
      "a": "Berapa besar kerugian finansial yang diderita organisasi apabila kerentanan berhasil dieksploitasi musuh.",
      "b": "Tingkat keahlian teknis dan perkakas khusus yang dibutuhkan untuk membuat senjata exploit fungsional.",
      "c": "Seberapa konsisten exploit dapat dijalankan berulang kali untuk menghasilkan efek serangan yang sama persis.",
      "d": "Berapa persentase total pengguna sistem yang terkena dampak langsung dari eksploitasi celah keamanan.",
      "e": "Seberapa mudah seorang penyerang dapat menemukan keberadaan kerentanan tersebut dalam sistem secara komprehensif."
    },
    "correct_letter": "e",
    "correct_answer": "Seberapa mudah seorang penyerang dapat menemukan keberadaan kerentanan tersebut dalam sistem secara komprehensif."
  },
  {
    "id": 200,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Mengapa mitigasi compiler `-fstack-protector-strong` dianggap lebih optimal dan komprehensif dibanding `-fstack-protector` biasa pada GCC/Clang?",
    "options": {
      "a": "Menolak melakukan kompilasi terhadap kode sumber yang memanggil pustaka standar libc yang tidak tersertifikasi ISO sehingga memicu eksekusi instruksi pada privilege level kernel.",
      "b": "Mendekripsi seluruh biner executable saat runtime menggunakan kunci sesi dinamis yang disimpan di register CPU yang dievaluasi compiler selama fase kompilasi dan optimasi.",
      "c": "Memasang stack canary pada semua fungsi yang memiliki buffer array bertipe apa pun, referensi lokal, atau alokasi alloca().",
      "d": "Mengalokasikan seluruh variabel lokal di memori video GPU untuk menghindari serangan buffer overflow pada RAM utama sehingga memicu eksekusi instruksi pada privilege level kernel.",
      "e": "Menghapus instruksi RET dari assembly dan menggantinya dengan panggilan interrupt kernel langsung di setiap akhir fungsi."
    },
    "correct_letter": "c",
    "correct_answer": "Memasang stack canary pada semua fungsi yang memiliki buffer array bertipe apa pun, referensi lokal, atau alokasi alloca()."
  },
  {
    "id": 201,
    "week": "Week 4",
    "type": "Pre Test",
    "question": "Kompilasi biner dengan flag `-Wl,-z,relro,-z,now` (Full RELRO) memberikan proteksi memori yang sangat tangguh terhadap teknik GOT Overwrite dengan cara ...",
    "options": {
      "a": "Mengacak alamat memori basis dari seluruh pustaka bersama setiap kali fungsi pustaka baru dipanggil oleh program.",
      "b": "Mengenkripsi setiap entri pada Global Offset Table menggunakan algoritma ChaCha20 dengan nonce sekali pakai.",
      "c": "Memisahkan tabel pointer fungsi ke dalam segmen memori privat yang hanya dapat diakses melalui instruksi hypervisor.",
      "d": "Menyelesaikan seluruh symbol resolusi dinamis saat startup program dan menandai tabel GOT sebagai read-only secara komprehensif.",
      "e": "Menghapus simbol fungsi pustaka sepenuhnya dari berkas biner dan mengonversinya menjadi fungsi inline statis."
    },
    "correct_letter": "d",
    "correct_answer": "Menyelesaikan seluruh symbol resolusi dinamis saat startup program dan menandai tabel GOT sebagai read-only secara komprehensif."
  },
  {
    "id": 202,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Dalam metodologi pengujian keamanan perangkat lunak, kelemahan mendasar dari Static Application Security Testing (SAST) dibanding DAST adalah ...",
    "options": {
      "a": "SAST memerlukan aplikasi berjalan penuh di environment staging dan tidak dapat memeriksa berkas kode sumber.",
      "b": "Waktu eksekusi SAST memakan waktu berminggu-minggu karena memerlukan serangan penetrasi dinamis ke port jaringan aktif.",
      "c": "SAST hanya mampu mendeteksi kerentanan konfigurasi server web dan sama sekali buta terhadap bug logika pemrograman.",
      "d": "Tingkat false positive yang cenderung tinggi karena analyzer menganalisis aliran kode tanpa memahami konteks runtime sistem aktual.",
      "e": "SAST hanya kompatibel dengan arsitektur cloud serverless dan tidak dapat memindai aplikasi monolitik on-premise."
    },
    "correct_letter": "d",
    "correct_answer": "Tingkat false positive yang cenderung tinggi karena analyzer menganalisis aliran kode tanpa memahami konteks runtime sistem aktual."
  },
  {
    "id": 203,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Kerentanan Time-of-Check to Time-of-Use (TOCTOU) adalah varian cacat race condition. Manakah skenario implementasi yang rentan terhadap eksploitasi symlink race berbasis TOCTOU?",
    "options": {
      "a": "Aplikasi memverifikasi checksum SHA-256 berkas biner pembaruan sebelum memuat pustaka ke memori prosesor yang terlindungi ASLR pada arsitektur biner 64-bit yang diproteksi compiler flags.",
      "b": "Aplikasi menggunakan fungsi atomic `open(\"/tmp/lock\", O_CREAT | O_EXCL | O_WRONLY, 0600)` untuk membuat berkas sementara tanpa jeda waktu untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "c": "Aplikasi mengenkripsi berkas konfigurasi dengan algoritma simetris AES-256-CBC sebelum menyimpannya ke direktori root pengguna sistem pada arsitektur biner 64-bit yang diproteksi compiler flags.",
      "d": "Aplikasi memeriksa izin berkas via `access(\"/tmp/lock\", W_OK)`, lalu ada jeda sebelum memanggil `open(\"/tmp/lock\", O_WRONLY)`. Penyerang mengganti berkas dengan symlink ke /etc/shadow di antara kedua operasi.",
      "e": "Aplikasi mengisolasi proses pembuatan file di dalam container Docker yang tidak memiliki akses root ke filesystem host induk."
    },
    "correct_letter": "d",
    "correct_answer": "Aplikasi memeriksa izin berkas via `access(\"/tmp/lock\", W_OK)`, lalu ada jeda sebelum memanggil `open(\"/tmp/lock\", O_WRONLY)`. Penyerang mengganti berkas dengan symlink ke /etc/shadow di antara kedua operasi."
  },
  {
    "id": 204,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Pada arsitektur 64-bit ARMv8.3-A ke atas, fitur Pointer Authentication Code (PAC) mencegah eksploitasi ROP/JOP dengan mekanisme apa?",
    "options": {
      "a": "Mengenkripsi seluruh RAM komputer menggunakan kunci perangkat keras AES-128 saat perangkat dalam mode siaga (sleep) yang dievaluasi compiler selama fase kompilasi dan optimasi.",
      "b": "Mematikan eksekusi seluruh instruksi cabang kondisional (conditional branch) yang memiliki latensi clock siklus tinggi pada arsitektur biner 64-bit yang diproteksi compiler flags.",
      "c": "Menyisipkan tanda tangan kriptografi (cryptographic MAC) ke dalam bit-bit alamat pointer yang tidak terpakai dan memvalidasinya sebelum pointer digunakan.",
      "d": "Menolak alokasi memori berukuran lebih dari 4 Gigabyte per proses untuk mencegah terjadinya teknik heap spraying untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "e": "Mengganti register penunjuk stack RSP dengan pointer berbasis hardware register yang tidak dapat dibaca oleh kernel OS."
    },
    "correct_letter": "c",
    "correct_answer": "Menyisipkan tanda tangan kriptografi (cryptographic MAC) ke dalam bit-bit alamat pointer yang tidak terpakai dan memvalidasinya sebelum pointer digunakan."
  },
  {
    "id": 205,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Mekanisme Control Flow Integrity (CFI) pada compiler modern seperti Clang/LLVM membatasi serangan pembajakan kendali eksekusi dengan cara ...",
    "options": {
      "a": "Memaksa setiap fungsi mengembalikan nilai integer 0 untuk memastikan tidak ada kode kesalahan runtime yang bocor.",
      "b": "Menjalankan setiap fungsi di dalam thread terpisah dengan ruang alamat memori virtual terisolasi tanpa izin berbagi yang dievaluasi compiler selama fase kompilasi dan optimasi.",
      "c": "Menonaktifkan pengoptimalan kompilasi loop unrolling agar alur instruksi mesin mudah dipindai oleh antivirus host sesuai prinsip secure software development lifecycle enterprise.",
      "d": "Menyandikan setiap opcode instruksi x86 assembly ke format bytecode Java sebelum dieksekusi oleh unit prosesor pada arsitektur biner 64-bit yang diproteksi compiler flags.",
      "e": "Memastikan target pemanggilan fungsi tak langsung (indirect call/jump) hanya boleh melompat ke daftar fungsi sah yang telah ditentukan saat kompilasi."
    },
    "correct_letter": "e",
    "correct_answer": "Memastikan target pemanggilan fungsi tak langsung (indirect call/jump) hanya boleh melompat ke daftar fungsi sah yang telah ditentukan saat kompilasi."
  },
  {
    "id": 206,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Dalam pengujian perangkat lunak berbasis Fuzzing, mengapa 'Coverage-guided Fuzzing' (seperti AFL atau libFuzzer) jauh lebih efektif dibanding fuzzer acak (blackbox random dumb fuzzing)?",
    "options": {
      "a": "Menggunakan instrumentasi biner untuk melacak branch coverage kode baru yang terjamah oleh mutasi input dan memprioritaskannya di corpus uji.",
      "b": "Fuzzer ini membaca dokumentasi manual perangkat lunak menggunakan natural language processing untuk merumuskan kasus uji sehingga memicu eksekusi instruksi pada privilege level kernel.",
      "c": "Menjalankan proses dekompilasi otomatis ke bahasa C++ tingkat tinggi untuk memperbaiki bug secara langsung di repositori Git untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "d": "Secara otomatis membongkar enkripsi HTTPS pada lalu lintas jaringan tanpa membutuhkan sertifikat root CA lokal untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "e": "Hanya menguji fungsi-fungsi yang menggunakan kata kunci public pada antarmuka pemrograman aplikasi (API) pada arsitektur biner 64-bit yang diproteksi compiler flags."
    },
    "correct_letter": "a",
    "correct_answer": "Menggunakan instrumentasi biner untuk melacak branch coverage kode baru yang terjamah oleh mutasi input dan memprioritaskannya di corpus uji."
  },
  {
    "id": 207,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Mengapa bahasa pemrograman modern seperti Rust mampu menjamin keamanan memori (memory safety) tanpa memerlukan Garbage Collector (GC) runtime seperti Java/Go?",
    "options": {
      "a": "Rust melarang penggunaan alokasi memori dinamis di heap dan hanya mengizinkan variabel statis di stack frame untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "b": "Setiap pointer dalam kode Rust dienkripsi menggunakan algoritma RSA 1024-bit sebelum disimpan di register prosesor untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "c": "Kompiler Rust secara otomatis menyuntikkan mesin virtual JVM mini ke dalam setiap berkas biner executable yang dihasilkan pada arsitektur biner 64-bit yang diproteksi compiler flags.",
      "d": "Menerapkan sistem kepemilikan (ownership), peminjaman (borrowing), dan masa hidup (lifetimes) yang divalidasi ketat saat kompilasi oleh borrow checker.",
      "e": "Rust mengeksekusi semua operasi aritmatika di dalam lingkungan sandbox WebAssembly sebelum menyentuh perangkat keras sesuai prinsip secure software development lifecycle enterprise."
    },
    "correct_letter": "d",
    "correct_answer": "Menerapkan sistem kepemilikan (ownership), peminjaman (borrowing), dan masa hidup (lifetimes) yang divalidasi ketat saat kompilasi oleh borrow checker."
  },
  {
    "id": 208,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Dari perspektif arsitektur Unix, mengapa pemanggilan perintah eksternal menggunakan `execve()` jauh lebih aman dari Command Injection dibanding pemanggilan fungsi `system()`?",
    "options": {
      "a": "execve() mengenkripsi seluruh argumen baris perintah menggunakan protokol TLS sebelum mengirimkannya ke kernel Linux sehingga memicu eksekusi instruksi pada privilege level kernel.",
      "b": "system() hanya dapat berjalan pada hak akses pengguna biasa, sedangkan execve() selalu mewajibkan hak akses administrator root untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "c": "execve() meneruskan argumen langsung sebagai array terpisah ke kernel tanpa melalui perantara shell (/bin/sh) yang menafsirkan metakarakter.",
      "d": "execve() secara otomatis menolak eksekusi jika input pengguna mengandung spasi atau karakter tanda baca apa pun sesuai prinsip secure software development lifecycle enterprise.",
      "e": "system() memuat biner ke memori virtual tanpa membersihkan cache instruksi prosesor terlebih dahulu yang dievaluasi compiler selama fase kompilasi dan optimasi."
    },
    "correct_letter": "c",
    "correct_answer": "execve() meneruskan argumen langsung sebagai array terpisah ke kernel tanpa melalui perantara shell (/bin/sh) yang menafsirkan metakarakter."
  },
  {
    "id": 209,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Kerentanan Insecure Deserialization pada aplikasi Java (seperti eksploitasi Apache Commons Collections) dapat berujung pada Remote Code Execution (RCE) karena ...",
    "options": {
      "a": "Fungsi deserialisasi membuka port remote debugging 5005 pada antarmuka jaringan publik tanpa autentikasi kata sandi untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "b": "Proses deserialisasi objek membangkitkan metode magic (seperti `readObject()`) yang mengeksekusi rantai kelas berbahaya (gadget chain) di classpath.",
      "c": "Data yang diserialisasi selalu dikonversi menjadi skrip shell Bash mentah yang langsung dieksekusi di terminal server hosting pada arsitektur biner 64-bit yang diproteksi compiler flags.",
      "d": "Objek Java yang diserialisasi secara otomatis menimpa berkas konfigurasi web server Tomcat di direktori sistem.",
      "e": "Algoritma serialisasi Java mematikan proteksi sandbox Security Manager sistem operasi secara permanen saat parsing stream."
    },
    "correct_letter": "b",
    "correct_answer": "Proses deserialisasi objek membangkitkan metode magic (seperti `readObject()`) yang mengeksekusi rantai kelas berbahaya (gadget chain) di classpath."
  },
  {
    "id": 210,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Apa keunggulan keamanan utama dari mengompilasi program dengan opsi Position Independent Executable (`-fPIE -pie`) pada sistem operasi berbasis Linux?",
    "options": {
      "a": "Memungkinkan segmen kode biner utama (.text) dimuat pada alamat virtual acak oleh ASLR, bukan pada alamat tetap secara komprehensif.",
      "b": "Mencegah program memuat pustaka pihak ketiga yang tidak memiliki tanda tangan digital resmi dari pengembang distro.",
      "c": "Memaksa sistem operasi mengeksekusi program di dalam ruang isolasi kernel chroot secara transparan.",
      "d": "Menonaktifkan fasilitas debugging gdb dan ptrace sehingga aplikasi tidak dapat dianalisis secara reverse engineering.",
      "e": "Menghapus seluruh simbol string dan nama variabel dari berkas biner berekstensi ELF secara permanen."
    },
    "correct_letter": "a",
    "correct_answer": "Memungkinkan segmen kode biner utama (.text) dimuat pada alamat virtual acak oleh ASLR, bukan pada alamat tetap secara komprehensif."
  },
  {
    "id": 211,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Cacat keamanan 'Uninitialized Memory Disclosure' (seperti yang mendasari kerentanan Heartbleed) terjadi ketika program ...",
    "options": {
      "a": "Mengizinkan penyerang mengeksekusi instruksi perakitan mesin langsung pada register status prosesor kontroler host yang dievaluasi compiler selama fase kompilasi dan optimasi.",
      "b": "Menulis data melampaui batas akhir partisi disk fisik tempat sistem berkas swap memory dialokasikan yang dievaluasi compiler selama fase kompilasi dan optimasi.",
      "c": "Mengalokasikan ruang memori berukuran nol byte yang menyebabkan kegagalan segmentasi memori pada pustaka glibc untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "d": "Memanggil pointer fungsi sebelum tabel metode virtual selesai diinisialisasi oleh konstruktor objek pemrograman sesuai prinsip secure software development lifecycle enterprise.",
      "e": "Mengembalikan buffer memori yang belum dibersihkan (zeroed) ke pengguna, sehingga data sensitif dari operasi sebelumnya terbaca."
    },
    "correct_letter": "e",
    "correct_answer": "Mengembalikan buffer memori yang belum dibersihkan (zeroed) ke pengguna, sehingga data sensitif dari operasi sebelumnya terbaca."
  },
  {
    "id": 212,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Dalam paradigma DevSecOps dan Secure Software Development Lifecycle (SSDLC), aktivitas 'Software Bill of Materials' (SBOM) dan Software Composition Analysis (SCA) bertujuan untuk ...",
    "options": {
      "a": "Memverifikasi apakah sintaksis penulisan kode sumber telah mematuhi pedoman indentasi dan penamaan variabel resmi sesuai prinsip secure software development lifecycle enterprise.",
      "b": "Mengukur kecepatan respons antarmuka pengguna terhadap beban kueri basis data pada kondisi lalu lintas puncak server untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "c": "Menginventarisasi seluruh pustaka open-source pihak ketiga (dependensi) serta mendeteksi kerentanan yang tercatat di database CVE.",
      "d": "Memastikan bahwa seluruh pengembang perangkat lunak memiliki sertifikat keahlian keamanan siber tingkat internasional.",
      "e": "Menggantikan peran pengujian penetrasi manual (pentest) secara penuh menggunakan algoritma kecerdasan buatan terapan."
    },
    "correct_letter": "c",
    "correct_answer": "Menginventarisasi seluruh pustaka open-source pihak ketiga (dependensi) serta mendeteksi kerentanan yang tercatat di database CVE."
  },
  {
    "id": 213,
    "week": "Week 4",
    "type": "Post Test",
    "question": "Kerentanan 'Type Confusion' pada mesin peramban web modern (seperti V8 pada Chrome atau SpiderMonkey pada Firefox) sering dimanfaatkan oleh exploit karena ...",
    "options": {
      "a": "Membuat peramban salah mengidentifikasi protokol komunikasi dari HTTPS menjadi HTTP biasa pada port 80 jaringan untuk mencegah bypass terhadap mitigasi proteksi ASLR sistem.",
      "b": "Menyebabkan compiler Just-In-Time (JIT) mengoptimalkan kode dengan asumsi objek bertipe X, padahal objek sebenarnya bertipe Y, menghasilkan memory out-of-bounds.",
      "c": "Menghapus cookie sesi otentikasi pengguna secara acak sehingga pengguna dipaksa melakukan login ulang berkali-kali yang dievaluasi compiler selama fase kompilasi dan optimasi.",
      "d": "Mengubah font teks halaman web dari format TrueType menjadi format bitmap raster yang merusak tampilan dokumen CSS.",
      "e": "Mencegah peramban memuat elemen skrip JavaScript eksternal yang dihosting di jaringan Content Delivery Network."
    },
    "correct_letter": "b",
    "correct_answer": "Menyebabkan compiler Just-In-Time (JIT) mengoptimalkan kode dengan asumsi objek bertipe X, padahal objek sebenarnya bertipe Y, menghasilkan memory out-of-bounds."
  },
  {
    "id": 214,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Dalam pengujian penetrasi web, ketika aplikasi tidak menampilkan data hasil kueri maupun pesan error basis data, teknik SQL Injection apa yang paling efektif untuk mengekstrak data karakter per karakter?",
    "options": {
      "a": "Union-based SQL Injection dengan mencocokkan jumlah kolom menggunakan klausa ORDER BY secara berurutan yang dievaluasi secara asinkron pada runtime sisi klien.",
      "b": "Error-based SQL Injection dengan memicu kegagalan konversi tipe data numerik menggunakan fungsi CAST() atau CONVERT().",
      "c": "Time-based Blind SQL Injection dengan menyuntikkan fungsi penundaan waktu seperti pg_sleep() atau WAITFOR DELAY secara komprehensif.",
      "d": "Second-order SQL Injection dengan menyimpan payload di tabel profil pengguna dan menunggu sesi administrator aktif.",
      "e": "Out-of-band SQL Injection dengan memaksa basis data mengirimkan kueri DNS lookup ke server eksternal milik penyerang."
    },
    "correct_letter": "c",
    "correct_answer": "Time-based Blind SQL Injection dengan menyuntikkan fungsi penundaan waktu seperti pg_sleep() atau WAITFOR DELAY secara komprehensif."
  },
  {
    "id": 215,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Mengapa penggunaan Parameterized Queries (Prepared Statements) mampu mengeliminasi celah SQL Injection secara tuntas pada level arsitektur basis data?",
    "options": {
      "a": "Driver basis data mengompresi teks kueri menggunakan algoritma gzip sehingga metakarakter SQL tidak terbaca mesin yang dievaluasi secara asinkron pada runtime sisi klien.",
      "b": "Prepared statements menolak kueri yang dieksekusi lebih dari satu kali dalam kurun waktu 100 milidetik oleh client yang sama.",
      "c": "Sistem basis data secara otomatis mengonversi seluruh input teks pengguna menjadi tipe data integer acak sebelum eksekusi sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.",
      "d": "Koneksi basis data dipaksa berjalan melalui terowongan VPN terenkripsi IPsec dengan autentikasi sertifikat digital X.509.",
      "e": "Struktur logika kueri dikompilasi terlebih dahulu ke Abstract Syntax Tree, dan data input hanya diperlakukan sebagai nilai parameter murni."
    },
    "correct_letter": "e",
    "correct_answer": "Struktur logika kueri dikompilasi terlebih dahulu ke Abstract Syntax Tree, dan data input hanya diperlakukan sebagai nilai parameter murni."
  },
  {
    "id": 216,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Manakah skenario alur serangan di bawah ini yang merepresentasikan kerentanan 'Second-Order SQL Injection'?",
    "options": {
      "a": "Payload SQL berbahaya disimpan dengan aman di database saat registrasi, namun dieksekusi tanpa sanitasi oleh proses background terpisah.",
      "b": "Penyerang menyuntikkan payload SQL melalui header HTTP Referer yang langsung menghasilkan error pada halaman login seketika.",
      "c": "Penyerang membobol dua server web yang berbeda secara simultan menggunakan satu skrip exploit otomatis berbasis Python.",
      "d": "Eksekusi injeksi SQL yang memerlukan dua parameter HTTP POST berbeda yang dikirimkan secara paralel dalam satu koneksi TCP.",
      "e": "Penyerang menyuntikkan perintah SQL yang menginstruksikan database server untuk menginfeksi server sekunder dalam cluster replica."
    },
    "correct_letter": "a",
    "correct_answer": "Payload SQL berbahaya disimpan dengan aman di database saat registrasi, namun dieksekusi tanpa sanitasi oleh proses background terpisah."
  },
  {
    "id": 217,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Apa perbedaan esensial dari DOM-based Cross-Site Scripting (DOM XSS) jika dibandingkan dengan Stored XSS maupun Reflected XSS?",
    "options": {
      "a": "Payload DOM XSS hanya dapat dieksekusi apabila browser target membuka halaman web menggunakan koneksi HTTP unencrypted berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "b": "Payload dieksekusi sepenuhnya di sisi peramban klien saat membaca source yang tidak aman dan menuliskannya ke sink tanpa keterlibatan server.",
      "c": "DOM XSS selalu menghasilkan berkas cookie sesi yang memiliki atribut HttpOnly dan Secure secara otomatis di penyimpanan browser yang dievaluasi secara asinkron pada runtime sisi klien.",
      "d": "Payload DOM XSS disimpan secara permanen di database PostgreSQL server dan dikirimkan ulang ke setiap pengunjung halaman pada endpoint RESTful API yang memproses pertukaran data.",
      "e": "DOM XSS hanya menyerang server backend yang dibangun menggunakan arsitektur microservices berbasis Node.js Express guna memitigasi risiko pembajakan sesi otentikasi pengguna."
    },
    "correct_letter": "b",
    "correct_answer": "Payload dieksekusi sepenuhnya di sisi peramban klien saat membaca source yang tidak aman dan menuliskannya ke sink tanpa keterlibatan server."
  },
  {
    "id": 218,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Dalam konfigurasi Content Security Policy (CSP), mengapa keberadaan arahan 'unsafe-inline' pada header `script-src` sangat berbahaya bagi pertahanan XSS?",
    "options": {
      "a": "Memaksa peramban untuk mengizinkan transfer berkas biner executable melalui koneksi WebSocket tanpa enkripsi TLS yang dievaluasi secara asinkron pada runtime sisi klien.",
      "b": "Mengizinkan peramban mengeksekusi tag <script> inline dan event handler atribut (seperti onerror/onload) yang disuntikkan penyerang.",
      "c": "Menonaktifkan seluruh sistem proteksi memori Address Space Layout Randomization pada sistem operasi komputer pengguna berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "d": "Membuka seluruh port firewall internal pada server web sehingga dapat diakses secara publik melalui jaringan internet.",
      "e": "Menghapus tanda tangan digital pada sertifikat HTTPS server web sehingga peramban menampilkan peringatan keamanan merah."
    },
    "correct_letter": "b",
    "correct_answer": "Mengizinkan peramban mengeksekusi tag <script> inline dan event handler atribut (seperti onerror/onload) yang disuntikkan penyerang."
  },
  {
    "id": 219,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Pemasangan atribut 'HttpOnly' pada header `Set-Cookie` sesi pengguna secara khusus dirancang untuk menangkal serangan ...",
    "options": {
      "a": "SQL Injection yang mencoba mengekstrak data kredensial login melalui pesan kesalahan sintaksis basis data berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "b": "Distributed Denial of Service (DDoS) yang membanjiri antrean permintaan server aplikasi dengan paket TCP SYN flood.",
      "c": "Man-in-the-Middle (MitM) yang menyadap lalu lintas komunikasi data pada jaringan nirkabel publik tanpa kata sandi.",
      "d": "Pencurian cookie sesi melalui skrip jahat JavaScript sisi klien (XSS) yang membaca properti document.cookie.",
      "e": "Server-Side Request Forgery (SSRF) yang memanipulasi permintaan HTTP internal ke metadata instance cloud AWS."
    },
    "correct_letter": "d",
    "correct_answer": "Pencurian cookie sesi melalui skrip jahat JavaScript sisi klien (XSS) yang membaca properti document.cookie."
  },
  {
    "id": 220,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Pada penanganan Cross-Site Request Forgery (CSRF), bagaimana perilaku pengiriman cookie pada peramban jika atribut cookie disetel ke `SameSite=Lax`?",
    "options": {
      "a": "Cookie dikirimkan pada semua permintaan lintas domain tanpa terkecuali, termasuk AJAX POST dan iframe tersemat guna memitigasi risiko pembajakan sesi otentikasi pengguna.",
      "b": "Cookie ditahan pada permintaan sub-request lintas domain (seperti gambar/POST), namun tetap disertakan pada navigasi top-level GET yang aman.",
      "c": "Cookie tidak akan pernah dikirimkan pada permintaan apa pun yang berasal dari tautan di luar domain utama aplikasi pada endpoint RESTful API yang memproses pertukaran data.",
      "d": "Cookie hanya dikirimkan jika alamat IP klien terdaftar di dalam whitelist firewall Content Delivery Network server sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.",
      "e": "Cookie dihapus secara permanen dari penyimpanan peramban seketika tab halaman web ditutup oleh pengguna sistem."
    },
    "correct_letter": "b",
    "correct_answer": "Cookie ditahan pada permintaan sub-request lintas domain (seperti gambar/POST), namun tetap disertakan pada navigasi top-level GET yang aman."
  },
  {
    "id": 221,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Mengapa implementasi Anti-CSRF Token berbasis 'Synchronizer Token Pattern' efektif mematahkan serangan pemalsuan permintaan antar-situs?",
    "options": {
      "a": "Token dienkripsi menggunakan kunci privat peramban klien sehingga server dapat memverifikasi identitas perangkat keras pengguna pada endpoint RESTful API yang memproses pertukaran data.",
      "b": "Server menolak permintaan jika alamat MAC antarmuka jaringan penyerang tidak sesuai dengan alamat MAC pengguna terdaftar.",
      "c": "Token secara otomatis memutus koneksi internet penyerang jika terdeteksi pengiriman permintaan dari domain yang berbeda.",
      "d": "Penyerang dari situs eksternal terhalang oleh Same-Origin Policy untuk membaca token rahasia unik sesi yang disisipkan dalam form/header.",
      "e": "Setiap formulir HTML secara otomatis mewajibkan pengguna memasukkan kode CAPTCHA audio sebelum permintaan dikirimkan."
    },
    "correct_letter": "d",
    "correct_answer": "Penyerang dari situs eksternal terhalang oleh Same-Origin Policy untuk membaca token rahasia unik sesi yang disisipkan dalam form/header."
  },
  {
    "id": 222,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Pada arsitektur cloud AWS, payload SSRF (Server-Side Request Forgery) yang menyasar alamat `http://169.254.169.254/latest/meta-data/iam/security-credentials/` bertujuan untuk ...",
    "options": {
      "a": "Mematikan instans virtual EC2 secara paksa sehingga memicu kondisi Denial of Service pada kluster produksi berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "b": "Mengubah aturan konfigurasi Virtual Private Cloud (VPC) agar seluruh port firewall terbuka ke publik secara bebas berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "c": "Mencuri kredensial token keamanan sementara IAM role yang melekat pada instance guna membajak infrastruktur cloud.",
      "d": "Mendekripsi seluruh snapshot volume Amazon EBS yang terpasang pada instans server basis data terisolasi berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "e": "Mengirimkan email spam massal menggunakan layanan Amazon Simple Email Service melalui akun administrator."
    },
    "correct_letter": "c",
    "correct_answer": "Mencuri kredensial token keamanan sementara IAM role yang melekat pada instance guna membajak infrastruktur cloud."
  },
  {
    "id": 223,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Teknik 'DNS Rebinding' digunakan penyerang untuk melewati proteksi validasi IP internal pada kerentanan SSRF dengan cara ...",
    "options": {
      "a": "Mengirimkan jutaan permintaan kueri DNS berukuran besar untuk membanjiri kapasitas bandwidth DNS resolver lokal target sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.",
      "b": "Menyediakan server DNS khusus yang mengembalikan IP publik saat validasi awal, lalu mengembalikan IP privat 127.0.0.1 saat permintaan fetch data.",
      "c": "Memalsukan tanda tangan kriptografi DNSSEC pada rekaman zona domain publik menggunakan kunci privat curian pada endpoint RESTful API yang memproses pertukaran data.",
      "d": "Mengubah alamat MAC gateway lokal pada tabel ARP cache router perantara menggunakan serangan ARP poisoning.",
      "e": "Mengonfigurasi rekaman DNS TXT agar berisi skrip JavaScript berbahaya yang dieksekusi di peramban pengguna web."
    },
    "correct_letter": "b",
    "correct_answer": "Menyediakan server DNS khusus yang mengembalikan IP publik saat validasi awal, lalu mengembalikan IP privat 127.0.0.1 saat permintaan fetch data."
  },
  {
    "id": 224,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Konfigurasi Cross-Origin Resource Sharing (CORS) yang sangat rentan terjadi ketika server merespons permintaan lintas domain dengan header ...",
    "options": {
      "a": "Access-Control-Allow-Origin yang merefleksikan nilai Origin penyerang secara dinamis disertai Access-Control-Allow-Credentials: true.",
      "b": "Access-Control-Allow-Origin: null dan Access-Control-Allow-Methods: GET secara ketat tanpa cookie.",
      "c": "Access-Control-Allow-Origin: * pada endpoint publik yang hanya menyajikan data katalog produk tanpa autentikasi.",
      "d": "Access-Control-Max-Age: 86400 yang menginstruksikan peramban untuk menyimpan cache respons preflight selama 24 jam.",
      "e": "Access-Control-Allow-Headers: Content-Type, Authorization pada permintaan API yang telah terverifikasi token JWT."
    },
    "correct_letter": "a",
    "correct_answer": "Access-Control-Allow-Origin yang merefleksikan nilai Origin penyerang secara dinamis disertai Access-Control-Allow-Credentials: true."
  },
  {
    "id": 225,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Celah keamanan Insecure Direct Object References (IDOR / BOLA) pada endpoint REST API `GET /api/v1/invoices/1042` terjadi terutama disebabkan oleh ...",
    "options": {
      "a": "Penggunaan protokol HTTP versi 1.1 yang belum mendukung multiplexing stream seperti pada protokol HTTP/2 sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.",
      "b": "Penyimpanan kunci privat enkripsi data transaksi pada sistem berkas yang memiliki izin akses berkas 0644.",
      "c": "Ukuran payload respons JSON yang melebihi batas buffer transfer maksimum yang diizinkan oleh reverse proxy server.",
      "d": "Ketidakmampuan database engine memproses kueri SELECT yang menggunakan klausa WHERE berbasis primary key integer.",
      "e": "Kegagalan backend memverifikasi kepemilikan objek (apakah invoice 1042 benar milik pengguna yang sedang terautentikasi)."
    },
    "correct_letter": "e",
    "correct_answer": "Kegagalan backend memverifikasi kepemilikan objek (apakah invoice 1042 benar milik pengguna yang sedang terautentikasi)."
  },
  {
    "id": 226,
    "week": "Week 5",
    "type": "Pre Test",
    "question": "Eksploitasi Server-Side Template Injection (SSTI) pada mesin template Python (seperti Jinja2) sering kali mampu dieskalasi hingga Remote Code Execution (RCE) melalui teknik ...",
    "options": {
      "a": "Penyuntikan berkas binary shellcode x86 mentah ke dalam tag penutup template web tanpa encoding base64 yang dievaluasi secara asinkron pada runtime sisi klien.",
      "b": "Pengiriman payload berukuran sangat besar yang memicu kondisi buffer overflow pada parser sintaksis template engine yang dievaluasi secara asinkron pada runtime sisi klien.",
      "c": "Penelusuran hirarki kelas bawaan objek via atribut `__class__.__mro__` untuk menemukan modul `subprocess.Popen` atau `os`.",
      "d": "Pemanipulasian alamat IP resolver DNS pada konfigurasi jaringan server melalui injeksi variabel template string sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.",
      "e": "Penggantian berkas sertifikat HTTPS server secara otomatis menggunakan fungsi bawaan template rendering engine sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi."
    },
    "correct_letter": "c",
    "correct_answer": "Penelusuran hirarki kelas bawaan objek via atribut `__class__.__mro__` untuk menemukan modul `subprocess.Popen` atau `os`."
  },
  {
    "id": 227,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Kerentanan XML External Entity (XXE) Injection pada parser XML yang tidak terkonfigurasi dengan aman memungkinkan penyerang membaca berkas sensitif server melalui definisi entitas ...",
    "options": {
      "a": "<!ENTITY xxe SYSTEM \"file:///etc/passwd\"> yang merujuk pada URI sistem berkas lokal melalui Document Type Definition (DTD).",
      "b": "<!ELEMENT note (to,from,heading,body)> yang mendefinisikan struktur skema dokumen berkas XML internal berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "c": "<?xml version=\"1.0\" encoding=\"UTF-8\"?> yang menentukan set karakter dan format serialisasi payload data yang dievaluasi secara asinkron pada runtime sisi klien.",
      "d": "<!ATTLIST payment status CDATA #REQUIRED> yang mewajibkan atribut status pada setiap elemen transaksi keuangan pada endpoint RESTful API yang memproses pertukaran data.",
      "e": "<![CDATA[SELECT * FROM users WHERE role='admin']]> yang membungkus teks kueri agar tidak diparsing oleh parser XML."
    },
    "correct_letter": "a",
    "correct_answer": "<!ENTITY xxe SYSTEM \"file:///etc/passwd\"> yang merujuk pada URI sistem berkas lokal melalui Document Type Definition (DTD)."
  },
  {
    "id": 228,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Pada implementasi token JSON Web Token (JWT), serangan 'Algorithm Confusion' (RS256 ke HS256) terjadi ketika penyerang ...",
    "options": {
      "a": "Mengubah header token menjadi HS256 dan menandatanganinya menggunakan kunci publik RSA server yang diperlakukan sebagai HMAC shared secret.",
      "b": "Mengganti payload JSON token dengan kode skrip bash yang langsung dieksekusi saat proses deserialisasi header.",
      "c": "Menghapus tanda tangan kriptografi token dan mengatur field klausa expiration time menjadi nilai tak terhingga.",
      "d": "Memanfaatkan tabrakan hash pada fungsi MD5 untuk menghasilkan token duplikat yang memiliki nilai hash identik.",
      "e": "Mengirimkan token dengan ukuran string lebih dari 65536 byte untuk memicu kegagalan alokasi memori stack backend."
    },
    "correct_letter": "a",
    "correct_answer": "Mengubah header token menjadi HS256 dan menandatanganinya menggunakan kunci publik RSA server yang diperlakukan sebagai HMAC shared secret."
  },
  {
    "id": 229,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Berdasarkan standar OWASP Application Security Verification Standard (ASVS 4.0), tingkatan 'Level 2' diverifikasi secara khusus untuk kategori aplikasi ...",
    "options": {
      "a": "Aplikasi publik sederhana yang hanya memuat konten informasi statis tanpa adanya fungsi transaksi atau autentikasi data.",
      "b": "Aplikasi open-source komunitas nirlaba yang tidak memerlukan audit keamanan kode sumber secara independen.",
      "c": "Infrastruktur militer dan sistem kendali kritis (critical infrastructure) yang kegagalannya dapat mengancam keselamatan jiwa.",
      "d": "Aplikasi bisnis umum (business-to-business) yang memproses transaksi bernilai penting, data pribadi, atau alur kerja bisnis korporat.",
      "e": "Prototipe perangkat lunak internal yang masih dalam fase perancangan ide dan belum terhubung ke jaringan internet."
    },
    "correct_letter": "d",
    "correct_answer": "Aplikasi bisnis umum (business-to-business) yang memproses transaksi bernilai penting, data pribadi, atau alur kerja bisnis korporat."
  },
  {
    "id": 230,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Ancaman 'Subdomain Takeover' terjadi ketika sebuah organisasi memiliki konfigurasi DNS yang mengandung ...",
    "options": {
      "a": "Rekaman DNS A yang mengarah ke beberapa alamat IP publik internal dalam konfigurasi round-robin load balancing.",
      "b": "Rekaman NS cadangan yang dihosting di penyedia layanan registrasi domain yang sama dengan domain utama institusi.",
      "c": "Rekaman MX yang menunjuk ke server penyedia email korporat dengan sertifikat TLS yang kedaluwarsa satu hari.",
      "d": "Rekaman TXT SPF yang memiliki entri konfigurasi mekanisme pengecekan softfail (~all) alih-alih hardfail (-all).",
      "e": "Rekaman CNAME yang mengarah ke layanan cloud pihak ketiga yang layanannya telah dinonaktifkan (dangling DNS pointer)."
    },
    "correct_letter": "e",
    "correct_answer": "Rekaman CNAME yang mengarah ke layanan cloud pihak ketiga yang layanannya telah dinonaktifkan (dangling DNS pointer)."
  },
  {
    "id": 231,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Pada arsitektur GraphQL API, mengapa serangan DoS berbasis kueri bersarang (Recursive / Deeply Nested Query) sangat berbahaya bagi performa backend server?",
    "options": {
      "a": "Kueri rekursif secara otomatis menghapus seluruh indeks relasi tabel foreign key pada basis data relasional server guna memitigasi risiko pembajakan sesi otentikasi pengguna.",
      "b": "Kueri bersarang menyebabkan compiler bahasa server memuat ulang seluruh dependensi npm package ke memori virtual.",
      "c": "GraphQL parser akan mematikan koneksi soket jaringan TLS setiap kali membaca kueri yang memiliki kedalaman lebih dari dua tingkat pada endpoint RESTful API yang memproses pertukaran data.",
      "d": "Relasi sirkular antar tipe data (misal author->posts->author) dapat dieksploitasi untuk memicu beban pemrosesan dan kueri database eksponensial.",
      "e": "Format kueri GraphQL mengubah izin sistem berkas server aplikasi menjadi mode baca-tulis publik untuk seluruh proses."
    },
    "correct_letter": "d",
    "correct_answer": "Relasi sirkular antar tipe data (misal author->posts->author) dapat dieksploitasi untuk memicu beban pemrosesan dan kueri database eksponensial."
  },
  {
    "id": 232,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Kerentanan HTTP Request Smuggling (HRS) varian 'CL.TE' terjadi karena desinkronisasi penafsiran batas permintaan HTTP antara front-end proxy dan back-end server, di mana ...",
    "options": {
      "a": "Front-end memblokir seluruh header Content-Type, sedangkan back-end mewajibkan header Content-Type bertipe multipart/form-data.",
      "b": "Front-end memproses header Transfer-Encoding, sedangkan back-end server memproses header Content-Length.",
      "c": "Front-end memproses header Content-Length, sedangkan back-end server memproses header Transfer-Encoding: chunked secara komprehensif.",
      "d": "Front-end menolak koneksi HTTP/1.1, sedangkan back-end server hanya mendukung koneksi HTTP/0.9 versi lawas.",
      "e": "Front-end mengenkripsi isi payload HTTP, sedangkan back-end server mengharapkan payload dikirim dalam teks biasa."
    },
    "correct_letter": "c",
    "correct_answer": "Front-end memproses header Content-Length, sedangkan back-end server memproses header Transfer-Encoding: chunked secara komprehensif."
  },
  {
    "id": 233,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Cross-Site WebSocket Hijacking (CSWSH) dapat terjadi pada aplikasi yang mengandalkan komunikasi dua arah WebSocket jika server aplikasi ...",
    "options": {
      "a": "Tidak membatasi laju pengiriman frame data WebSocket per detik menggunakan algoritma token bucket yang dievaluasi secara asinkron pada runtime sisi klien.",
      "b": "Mengizinkan pengiriman frame data biner di samping frame data berbasis teks berformat serialisasi JSON berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "c": "Menggunakan port transmisi default 80 alih-alih port terenkripsi TLS 443 pada koneksi internet publik yang dievaluasi secara asinkron pada runtime sisi klien.",
      "d": "Hanya mengandalkan cookie sesi bawaan peramban tanpa memvalidasi header Origin atau token anti-CSRF saat proses handshake HTTP upgrade.",
      "e": "Tidak mengimplementasikan mekanisme deteksi heartbeat (ping/pong frame) secara berkala pada koneksi aktif."
    },
    "correct_letter": "d",
    "correct_answer": "Hanya mengandalkan cookie sesi bawaan peramban tanpa memvalidasi header Origin atau token anti-CSRF saat proses handshake HTTP upgrade."
  },
  {
    "id": 234,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Ketika aplikasi web melakukan filter sederhana dengan menghapus string `../` dari input nama berkas, penyerang dapat melewati filter Path Traversal ini menggunakan teknik ...",
    "options": {
      "a": "Mengirimkan input yang terdiri dari karakter spasi dan baris baru (CRLF) pada parameter kueri URL aplikasi yang dievaluasi secara asinkron pada runtime sisi klien.",
      "b": "Menyisipkan urutan bertingkat seperti `....//` atau melakukan URL double-encoding seperti `%252e%252e%252f` secara komprehensif.",
      "c": "Mengompresi berkas target ke dalam format arsip tar.gz sebelum mengirimkan permintaan unduh berkas ke server.",
      "d": "Menambahkan ekstensi berkas palsu seperti `.jpg` pada akhir permintaan HTTP POST yang dikirimkan klien.",
      "e": "Mengubah metode permintaan HTTP dari GET menjadi OPTIONS untuk meminta daftar opsi metode yang diizinkan."
    },
    "correct_letter": "b",
    "correct_answer": "Menyisipkan urutan bertingkat seperti `....//` atau melakukan URL double-encoding seperti `%252e%252e%252f` secara komprehensif."
  },
  {
    "id": 235,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Kerentanan Mass Assignment (Over-Posting) pada framework web modern (seperti Ruby on Rails, ASP.NET, atau Spring) terjadi ketika ...",
    "options": {
      "a": "Aplikasi mengizinkan pengiriman ribuan permintaan pendaftaran akun pengguna dalam rentang waktu satu detik yang dievaluasi secara asinkron pada runtime sisi klien.",
      "b": "Database administrator memberikan hak akses DBA kepada pengguna biasa pada skema tabel data transaksional sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.",
      "c": "Server web mengalami kehabisan memori akibat proses parsing berkas unggahan berukuran lebih dari 100 Megabyte guna memitigasi risiko pembajakan sesi otentikasi pengguna.",
      "d": "Pengembang lupa memasang sertifikat enkripsi SSL pada antarmuka manajemen basis data relasional server produksi sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.",
      "e": "Framework secara otomatis memetakan seluruh parameter HTTP request ke properti model database tanpa daftar putih atribut yang diizinkan."
    },
    "correct_letter": "e",
    "correct_answer": "Framework secara otomatis memetakan seluruh parameter HTTP request ke properti model database tanpa daftar putih atribut yang diizinkan."
  },
  {
    "id": 236,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Dalam arsitektur API Gateway modern, algoritma 'Token Bucket' diterapkan untuk mitigasi serangan brute-force dan DoS dengan cara kerja ...",
    "options": {
      "a": "Menyimpan seluruh payload permintaan ke dalam antrean disk lokal hingga ruang penyimpanan server habis total guna memitigasi risiko pembajakan sesi otentikasi pengguna.",
      "b": "Mengirimkan email peringatan ke administrator setiap kali ada permintaan HTTP yang mengembalikan status kode 404.",
      "c": "Memblokir secara permanen seluruh alamat IP yang melakukan permintaan lebih dari satu kali dalam satu hari kerja.",
      "d": "Mewajibkan klien melakukan proses kalkulasi Proof-of-Work berbasis penambangan kripto sebelum permintaan diproses.",
      "e": "Mengisi token ke wadah dengan laju konstan; setiap permintaan memakan token, dan permintaan ditolak/dibatasi jika wadah kosong."
    },
    "correct_letter": "e",
    "correct_answer": "Mengisi token ke wadah dengan laju konstan; setiap permintaan memakan token, dan permintaan ditolak/dibatasi jika wadah kosong."
  },
  {
    "id": 237,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Mengapa kerentanan Open Redirect (URL Redirection) pada alur otentikasi OAuth 2.0 dapat berakibat fatal bagi keamanan akun pengguna?",
    "options": {
      "a": "Mengubah algoritma enkripsi password database dari Argon2id menjadi fungsi hash MD5 tanpa salt secara otomatis berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "b": "Mengakibatkan server otentikasi menghapus seluruh tabel basis data pengguna akibat kegagalan resolusi URL redirect berdasarkan spesifikasi dokumen standar World Wide Web Consortium.",
      "c": "Penyerang dapat memanipulasi parameter redirect_uri yang tidak divalidasi ketat untuk mencuri authorization code atau token akses korban.",
      "d": "Memicu kebocoran kunci privat TLS server otentikasi ke peramban pengguna melalui pesan error redirection pada endpoint RESTful API yang memproses pertukaran data.",
      "e": "Menonaktifkan proteksi firewall Web Application Firewall (WAF) pada seluruh endpoint API penyedia identitas."
    },
    "correct_letter": "c",
    "correct_answer": "Penyerang dapat memanipulasi parameter redirect_uri yang tidak divalidasi ketat untuk mencuri authorization code atau token akses korban."
  },
  {
    "id": 238,
    "week": "Week 5",
    "type": "Post Test",
    "question": "Header `Strict-Transport-Security` (HSTS) dengan arahan `max-age=31536000; includeSubDomains; preload` secara proaktif melindungi pengguna dari ...",
    "options": {
      "a": "Serangan SSL Stripping yang menurunkan koneksi aman HTTPS menjadi HTTP biasa saat inisiasi koneksi pertama kali.",
      "b": "Serangan SQL Injection berbasis kueri bertingkat pada halaman formulir pencarian data transaksi guna memitigasi risiko pembajakan sesi otentikasi pengguna.",
      "c": "Serangan brute-force pada formulir otentikasi pengguna melalui jaringan botnet terdistribusi global yang dievaluasi secara asinkron pada runtime sisi klien.",
      "d": "Serangan eksfiltrasi data melalui rekaman kueri DNS terowongan (DNS Tunneling data exfiltration) sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi.",
      "e": "Serangan perusakan integritas data pada cache memori sistem Redis yang tidak dilindungi kata sandi sesuai rekomendasi keamanan OWASP ASVS tingkat korporasi."
    },
    "correct_letter": "a",
    "correct_answer": "Serangan SSL Stripping yang menurunkan koneksi aman HTTPS menjadi HTTP biasa saat inisiasi koneksi pertama kali."
  },
  {
    "id": 239,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Dalam protokol komunikasi aman modern (seperti TLS 1.3 dan PGP), mengapa arsitektur Hybrid Cryptosystem selalu dipilih daripada hanya mengandalkan kriptografi kunci publik murni?",
    "options": {
      "a": "Kriptografi asimetris tidak dapat memproses data bertipe teks biner dan hanya kompatibel dengan deretan karakter ASCII murni yang diverifikasi menggunakan kode autentikasi pesan kriptografis.",
      "b": "Kriptografi asimetris memiliki komputasi matematika yang sangat lambat, sehingga hanya digunakan untuk pertukaran kunci simetris cepat.",
      "c": "Kriptografi simetris tidak memerlukan kunci rahasia apa pun sehingga data dapat didekripsi secara langsung oleh siapa saja berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "d": "Algoritma asimetris telah dilarang penggunaannya oleh standar keamanan NIST karena rentan terhadap serangan brute-force sederhana sesuai dengan rekomendasi panjang kunci NIST SP 800-57.",
      "e": "Kriptografi simetris menghasilkan ukuran ciphertext yang membengkak hingga sepuluh kali lipat dibanding ukuran plaintext aslinya."
    },
    "correct_letter": "b",
    "correct_answer": "Kriptografi asimetris memiliki komputasi matematika yang sangat lambat, sehingga hanya digunakan untuk pertukaran kunci simetris cepat."
  },
  {
    "id": 240,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Mengapa mode operasi Electronic Codebook (ECB) dianggap sangat tidak aman untuk mengenkripsi data gambar atau dokumen yang memiliki pola berulang?",
    "options": {
      "a": "Blok plaintext yang identik akan selalu menghasilkan blok ciphertext yang identik, sehingga pola data asli tetap terpancar jelas.",
      "b": "ECB membatasi panjang pesan maksimum hanya sampai 128 byte dan secara otomatis menolak pesan berukuran besar pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "c": "ECB mewajibkan pertukaran kunci privat melalui jaringan internet tanpa adanya enkripsi saluran sama sekali berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "d": "ECB menggunakan fungsi hash satu arah yang tidak memungkinkan proses dekripsi kembali ke plaintext asli.",
      "e": "ECB menyisipkan alamat IP pengguna ke dalam header setiap blok ciphertext yang dihasilkan saat enkripsi."
    },
    "correct_letter": "a",
    "correct_answer": "Blok plaintext yang identik akan selalu menghasilkan blok ciphertext yang identik, sehingga pola data asli tetap terpancar jelas."
  },
  {
    "id": 241,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Pada mode operasi Cipher Block Chaining (CBC), apa dampak matematis pada plaintext berikutnya jika seorang penyerang membalikkan 1 bit pada blok ciphertext $C_i$ saat transmisi data?",
    "options": {
      "a": "Blok plaintext $P_i$ rusak total menjadi data acak, dan bit yang bersesuaian pada blok plaintext $P_{i+1}$ ikut terbalik persis.",
      "b": "Seluruh blok ciphertext setelahnya secara instan berubah menjadi deretan nilai null byte (0x00) secara serentak.",
      "c": "Kunci enkripsi AES server seketika bocor ke penyerang melalui perbedaan waktu pemrosesan bit transmisi.",
      "d": "Dekripsi blok $P_i$ dan seluruh blok setelahnya tetap berhasil sempurna tanpa adanya distorsi satu bit pun.",
      "e": "Sistem operasi penerima data langsung mengalami kernel panic akibat pelanggaran batasan memori buffer."
    },
    "correct_letter": "a",
    "correct_answer": "Blok plaintext $P_i$ rusak total menjadi data acak, dan bit yang bersesuaian pada blok plaintext $P_{i+1}$ ikut terbalik persis."
  },
  {
    "id": 242,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Kerentanan Padding Oracle Attack (seperti serangan POODLE pada mode CBC dengan PKCS#7 padding) memungkinkan penyerang memulihkan seluruh plaintext tanpa mengetahui kunci enkripsi karena ...",
    "options": {
      "a": "Server membocorkan kunci privat master melalui respon kode status HTTP 500 saat validasi sertifikat SSL gagal berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "b": "Penyerang dapat memaksa prosesor server beralih ke mode komputasi 8-bit yang mudah dibobol secara exhaustive search.",
      "c": "Algoritma CBC secara otomatis menyisipkan kata sandi login pengguna ke dalam byte padding terakhir dari pesan pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "d": "Panjang blok enkripsi CBC selalu berkurang setengahnya setiap kali terjadi kegagalan transmisi paket data TCP.",
      "e": "Server membedakan respons antara kesalahan format padding PKCS#7 dan kesalahan integritas payload, menjadi oracle validasi byte."
    },
    "correct_letter": "e",
    "correct_answer": "Server membedakan respons antara kesalahan format padding PKCS#7 dan kesalahan integritas payload, menjadi oracle validasi byte."
  },
  {
    "id": 243,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Dalam mode operasi Counter (CTR) maupun Galois/Counter Mode (GCM), mengapa penggunaan ulang Initialization Vector (IV / Nonce) dengan kunci yang sama berakibat fatal bagi kerahasiaan?",
    "options": {
      "a": "Keystream yang dihasilkan identik, sehingga operasi XOR dua ciphertext ($C_1 \\oplus C_2$) membuka XOR kedua plaintext ($P_1 \\oplus P_2$).",
      "b": "Penggunaan ulang IV menyebabkan server web langsung mematikan protokol TLS dan beralih ke transmisi telnet pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "c": "Alamat memori heap kernel server akan terhapus secara otomatis oleh pengendali hardware disk penyimpanan.",
      "d": "Sertifikat digital root CA peramban klien langsung masuk ke dalam daftar pencabutan sertifikat global.",
      "e": "Kunci AES secara otomatis direset kembali ke nilai default pabrik (seluruh byte bernilai 0x00)."
    },
    "correct_letter": "a",
    "correct_answer": "Keystream yang dihasilkan identik, sehingga operasi XOR dua ciphertext ($C_1 \\oplus C_2$) membuka XOR kedua plaintext ($P_1 \\oplus P_2$)."
  },
  {
    "id": 244,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Skema Authenticated Encryption with Associated Data (AEAD), seperti AES-GCM atau ChaCha20-Poly1305, memberikan keunggulan keamanan mutlak dibanding skema enkripsi konvensional karena ...",
    "options": {
      "a": "AEAD menjamin kecepatan transmisi hingga seratus gigabit per detik tanpa memerlukan perangkat keras tambahan sesuai dengan rekomendasi panjang kunci NIST SP 800-57.",
      "b": "Mampu mengenkripsi data secara permanen sehingga data tersebut tidak dapat didekripsi oleh siapa pun di masa depan.",
      "c": "Menghilangkan kebutuhan akan pertukaran kunci rahasia antara pihak pengirim dan penerima data informasi.",
      "d": "Menyediakan jaminan kerahasiaan sekaligus integritas dan autentikasi data (melalui auth tag) secara simultan dalam satu primitif.",
      "e": "Mengizinkan penggunaan kunci enkripsi yang memiliki panjang fleksibel mulai dari 1 bit hingga tak terhingga."
    },
    "correct_letter": "d",
    "correct_answer": "Menyediakan jaminan kerahasiaan sekaligus integritas dan autentikasi data (melalui auth tag) secara simultan dalam satu primitif."
  },
  {
    "id": 245,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Dalam struktur algoritma Advanced Encryption Standard (AES), tahapan transformasi manakah yang bertanggung jawab menghadirkan sifat non-linearitas (confusion) yang kuat terhadap kriptoanalisis?",
    "options": {
      "a": "Transformasi ShiftRows yang menggeser byte pada tiap baris matriks state secara siklik ke arah kiri yang diverifikasi menggunakan kode autentikasi pesan kriptografis.",
      "b": "Transformasi MixColumns yang mengalikan tiap kolom state dengan polinomial matriks konstan yang dapat dibalik sesuai dengan rekomendasi panjang kunci NIST SP 800-57.",
      "c": "Transformasi SubBytes yang mengganti setiap byte state menggunakan kotak substitusi (S-Box) berbasis invers Galois Field GF(2^8).",
      "d": "Transformasi AddRoundKey yang melakukan operasi bitwise XOR antara matriks state dengan subkunci ronde saat ini.",
      "e": "Transformasi KeyExpansion yang menggandakan panjang kunci master menggunakan deret bilangan Fibonacci."
    },
    "correct_letter": "c",
    "correct_answer": "Transformasi SubBytes yang mengganti setiap byte state menggunakan kotak substitusi (S-Box) berbasis invers Galois Field GF(2^8)."
  },
  {
    "id": 246,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Mengapa skema 2DES (Double DES dengan dua kunci independen 56-bit) tidak memberikan keamanan $2^{112}$ bit, melainkan hanya setara $2^{57}$ operasi?",
    "options": {
      "a": "Adanya kelemahan pada generator bilangan acak semu sistem operasi yang menghasilkan kunci kembar.",
      "b": "Kunci kedua selalu dapat diturunkan dari kunci pertama melalui fungsi permutasi terbalik (IP-1).",
      "c": "Panjang blok DES yang berukuran 64-bit memicu tabrakan ciphertext secara instan akibat Sweet32 attack.",
      "d": "Tabel permutasi ekspansi (E-box) pada putaran Feistel DES dapat diselesaikan menggunakan eliminasi Gauss.",
      "e": "Rentan terhadap serangan Meet-in-the-Middle yang mencocokkan hasil enkripsi maju dan dekripsi mundur di tabel memori tengah."
    },
    "correct_letter": "e",
    "correct_answer": "Rentan terhadap serangan Meet-in-the-Middle yang mencocokkan hasil enkripsi maju dan dekripsi mundur di tabel memori tengah."
  },
  {
    "id": 247,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Pada algoritma kriptografi kunci publik RSA, jika dipilih dua bilangan prima $p=61$ dan $q=53$, nilai dari fungsi totien Euler $\\phi(n)$ yang digunakan untuk menghitung pasangan kunci privat adalah ...",
    "options": {
      "a": "Nilai 3233 yang merupakan hasil perkalian skalar langsung antara bilangan prima $p$ dan bilangan prima $q$ berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "b": "Nilai 65537 yang merupakan nilai konstanta eksponen publik Fermat keempat paling umum digunakan di dunia.",
      "c": "Nilai 114 yang merupakan hasil penjumlahan langsung dari parameter $p$ dan parameter prima $q$ yang diverifikasi menggunakan kode autentikasi pesan kriptografis.",
      "d": "Nilai 1560 yang didapatkan dari pembagian nilai modulus sistem dengan bilangan bulat terkecil dua pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "e": "Nilai 3120 yang dihitung dari rumus matematis totien Euler $\\phi(n) = (p - 1) \\times (q - 1) = 60 \\times 52$."
    },
    "correct_letter": "e",
    "correct_answer": "Nilai 3120 yang dihitung dari rumus matematis totien Euler $\\phi(n) = (p - 1) \\times (q - 1) = 60 \\times 52$."
  },
  {
    "id": 248,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Mengapa penggunaan enkripsi RSA tanpa padding ('Textbook RSA' di mana $C = M^e \\pmod n$) sangat berbahaya dan dilarang dalam sistem keamanan nyata?",
    "options": {
      "a": "Textbook RSA hanya dapat dijalankan pada prosesor komputer bertipe arsitektur kuantum superkonduktor yang diverifikasi menggunakan kode autentikasi pesan kriptografis.",
      "b": "Ukuran kunci publik RSA secara otomatis bocor ke jaringan publik setiap kali proses enkripsi pesan berlangsung sesuai dengan rekomendasi panjang kunci NIST SP 800-57.",
      "c": "Memiliki sifat multiplikatif homogen (malleable), sehingga penyerang dapat memanipulasi ciphertext untuk mengubah isi plaintext secara terprediksi.",
      "d": "Fungsi modular eksponensiasi textbook RSA selalu menghasilkan nilai ciphertext negatif pada bilangan ganjil yang diverifikasi menggunakan kode autentikasi pesan kriptografis.",
      "e": "Mewajibkan pihak penerima membagikan kunci privat dekripsinya kepada publik sebelum pesan dapat dibaca guna menjamin properti kerahasiaan dan integritas pesan data."
    },
    "correct_letter": "c",
    "correct_answer": "Memiliki sifat multiplikatif homogen (malleable), sehingga penyerang dapat memanipulasi ciphertext untuk mengubah isi plaintext secara terprediksi."
  },
  {
    "id": 249,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Dalam protokol pertukaran kunci Diffie-Hellman Ephemeral (DHE / ECDHE), properti 'Perfect Forward Secrecy' (PFS) berhasil dicapai karena ...",
    "options": {
      "a": "Data dienkripsi menggunakan tiga lapisan algoritma simetris yang berbeda secara paralel di saluran jaringan berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "b": "Kunci sesi diturunkan dari pasangan kunci sementara yang dibuang setelah sesi berakhir, sehingga pembobolan kunci privat server di masa depan tidak bisa mendekripsi rekaman lalu lintas masa lalu.",
      "c": "Server dan klien tidak pernah melakukan pertukaran parameter angka apa pun melalui jaringan internet publik guna menjamin properti kerahasiaan dan integritas pesan data.",
      "d": "Sertifikat digital X.509 diperbarui secara otomatis setiap lima detik melalui koneksi satelit GPS terisolasi pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "e": "Kunci sesi disimpan secara permanen di dalam modul keamanan perangkat keras TPM motherboard pengguna yang diverifikasi menggunakan kode autentikasi pesan kriptografis."
    },
    "correct_letter": "b",
    "correct_answer": "Kunci sesi diturunkan dari pasangan kunci sementara yang dibuang setelah sesi berakhir, sehingga pembobolan kunci privat server di masa depan tidak bisa mendekripsi rekaman lalu lintas masa lalu."
  },
  {
    "id": 250,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Properti 'Collision Resistance' pada fungsi hash kriptografis menyatakan bahwa secara komputasi tidak layak (computationally infeasible) untuk ...",
    "options": {
      "a": "Menemukan nilai input $m$ apa pun yang menghasilkan nilai hash keluaran $H(m)$ bernilai genap pada indeks bit awal berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "b": "Mengompresi pesan berukuran 512 bit menjadi nilai hash keluaran yang berukuran tepat 256 bit secara efisien.",
      "c": "Mendekripsi nilai hash kembali menjadi pesan aslinya tanpa menggunakan kunci privat asimetris penerima data berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "d": "Menghitung nilai hash suatu berkas yang memiliki ukuran fisik lebih besar daripada 4 Gigabyte pada sistem FAT32 sesuai dengan rekomendasi panjang kunci NIST SP 800-57.",
      "e": "Menemukan dua pesan berbeda sembarang $m_1$ dan $m_2$ ($m_1 \\neq m_2$) sehingga menghasilkan nilai hash yang identik $H(m_1) = H(m_2)$."
    },
    "correct_letter": "e",
    "correct_answer": "Menemukan dua pesan berbeda sembarang $m_1$ dan $m_2$ ($m_1 \\neq m_2$) sehingga menghasilkan nilai hash yang identik $H(m_1) = H(m_2)$."
  },
  {
    "id": 251,
    "week": "Week 6",
    "type": "Pre Test",
    "question": "Mengapa konstruksi otentikasi pesan sederhana seperti `Hash(Secret || Message)` sangat rentan terhadap serangan 'Length Extension Attack' pada fungsi hash berbasis Merkle-Damgård (seperti SHA-256)?",
    "options": {
      "a": "Struktur Merkle-Damgård membocorkan kunci rahasia secara otomatis di setiap akhir putaran pemrosesan blok pesan berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "b": "Fungsi kompresi Merkle-Damgård menolak memproses padding bit jika pesan dikirimkan melalui protokol HTTP sesuai dengan rekomendasi panjang kunci NIST SP 800-57.",
      "c": "Algoritma SHA-256 memotong panjang pesan secara otomatis menjadi 128 bit jika pesan diawali dengan kata rahasia pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "d": "Keluaran hash merepresentasikan state internal akhir kompresi, memungkinkan penyerang menambahkan data baru dan melanjutkan komputasi hash tanpa tahu Secret.",
      "e": "Penyerang dapat membalikkan fungsi kompresi menggunakan tabel pelangi (rainbow table) publik dalam hitungan detik."
    },
    "correct_letter": "d",
    "correct_answer": "Keluaran hash merepresentasikan state internal akhir kompresi, memungkinkan penyerang menambahkan data baru dan melanjutkan komputasi hash tanpa tahu Secret."
  },
  {
    "id": 252,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Mengapa fungsi hashing cepat seperti SHA-256 atau MD5 sangat dilarang digunakan untuk penyimpanan kata sandi (password storage), dan harus digantikan oleh Argon2id atau bcrypt?",
    "options": {
      "a": "SHA-256 menghasilkan nilai hash yang memiliki panjang karakter berbeda-beda pada setiap sistem operasi pengguna berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "b": "Algoritma Argon2id tidak membutuhkan salt unik dan dapat memulihkan kata sandi asli jika pengguna lupa login sesuai dengan rekomendasi panjang kunci NIST SP 800-57.",
      "c": "Fungsi cepat memungkinkan penyerang menguji miliaran tebakan per detik menggunakan GPU/ASIC; fungsi KDF menerapkan parameter work factor (waktu dan memori besar) untuk memperlambat cracking.",
      "d": "SHA-256 hanya dapat berjalan pada prosesor 32-bit dan tidak mendukung komputasi pada arsitektur modern 64-bit.",
      "e": "Sistem operasi Linux secara otomatis menolak menyimpan nilai hash SHA-256 pada berkas konfigurasi /etc/shadow."
    },
    "correct_letter": "c",
    "correct_answer": "Fungsi cepat memungkinkan penyerang menguji miliaran tebakan per detik menggunakan GPU/ASIC; fungsi KDF menerapkan parameter work factor (waktu dan memori besar) untuk memperlambat cracking."
  },
  {
    "id": 253,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Apa perbedaan fundamental antara tanda tangan digital (Digital Signature berbasis RSA/ECDSA) dan kode otentikasi pesan (HMAC) dalam konteks hukum dan jaminan keamanan?",
    "options": {
      "a": "HMAC memerlukan sepasang kunci publik dan privat, sedangkan Digital Signature hanya memakai kunci simetris tunggal yang diverifikasi menggunakan kode autentikasi pesan kriptografis.",
      "b": "Digital Signature tidak memerlukan fungsi hash apa pun dan langsung mengomputasi data teks biner plaintext.",
      "c": "HMAC menjamin kerahasiaan isi pesan (enkripsi), sedangkan Digital Signature hanya mengompresi ukuran pesan fisik.",
      "d": "Digital Signature memberikan jaminan Non-Repudiation karena dibuat dengan private key unik, sedangkan HMAC memakai shared secret yang diketahui kedua pihak sehingga bukti dapat disangkal.",
      "e": "HMAC telah dinyatakan usang oleh standar internasional dan tidak boleh diimplementasikan pada protokol TLS."
    },
    "correct_letter": "d",
    "correct_answer": "Digital Signature memberikan jaminan Non-Repudiation karena dibuat dengan private key unik, sedangkan HMAC memakai shared secret yang diketahui kedua pihak sehingga bukti dapat disangkal."
  },
  {
    "id": 254,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Dalam arsitektur Public Key Infrastructure (PKI), mekanisme 'OCSP Stapling' diperkenalkan untuk mengatasi kelemahan privasi dan performa pada pemeriksaan status sertifikat X.509 konvensional dengan cara ...",
    "options": {
      "a": "Mewajibkan klien mengunduh seluruh daftar berkas CRL berukuran puluhan megabyte setiap kali membuka peramban pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "b": "Memaksa peramban mengabaikan tanggal kedaluwarsa sertifikat jika nama domain server cocok dengan header HTTP berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "c": "Menghapus seluruh otoritas Root CA komersial dan menggantinya dengan sertifikat self-signed lokal institusi berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "d": "Server web secara berkala meminta respons status OCSP bertanda tangan CA lalu menyematkannya (staple) langsung ke klien saat TLS handshake, menghemat kueri klien ke CA.",
      "e": "Mengenkripsi sertifikat digital klien menggunakan algoritma kuantum sebelum diteruskan ke server aplikasi."
    },
    "correct_letter": "d",
    "correct_answer": "Server web secara berkala meminta respons status OCSP bertanda tangan CA lalu menyematkannya (staple) langsung ke klien saat TLS handshake, menghemat kueri klien ke CA."
  },
  {
    "id": 255,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Mengapa Elliptic Curve Cryptography (ECC, seperti kurva secp256r1 atau Curve25519) lebih unggul diaplikasikan pada perangkat mobile dan IoT dibanding RSA konvensional?",
    "options": {
      "a": "ECC tidak membutuhkan pemrosesan aritmatika modular sama sekali pada unit arithmetic logic unit (ALU) prosesor.",
      "b": "Kunci privat kurva eliptik dapat dibagikan secara bebas kepada publik tanpa mengurangi kerahasiaan pesan.",
      "c": "Algoritma kurva eliptik sepenuhnya kebal terhadap segala jenis serangan algoritma Shor pada komputer kuantum.",
      "d": "ECC memungkinkan proses dekripsi dilakukan tanpa memerlukan kunci privat oleh penerima data terdaftar.",
      "e": "Memberikan tingkat kekuatan keamanan setara RSA 3072-bit hanya dengan panjang kunci 256-bit, memangkas komputasi, konsumsi daya baterai, dan ukuran bandwidth."
    },
    "correct_letter": "e",
    "correct_answer": "Memberikan tingkat kekuatan keamanan setara RSA 3072-bit hanya dengan panjang kunci 256-bit, memangkas komputasi, konsumsi daya baterai, dan ukuran bandwidth."
  },
  {
    "id": 256,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Pembaruan arsitektur keamanan pada standar TLS 1.3 (RFC 8446) dibandingkan TLS 1.2 secara radikal meningkatkan keamanan dengan langkah tegas berupa ...",
    "options": {
      "a": "Menghapus protokol transmisi TCP dan menggantikannya secara eksklusif dengan protokol User Datagram Protocol (UDP) berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "b": "Menghapus pertukaran kunci RSA statis dan seluruh cipher non-AEAD (seperti CBC mode), mewajibkan cipher AEAD dan pertukaran ephemeral DH (PFS).",
      "c": "Mewajibkan penggunaan panjang kunci simetris minimal 4096 bit pada seluruh cipher suite yang terdaftar aktif berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "d": "Menonaktifkan enkripsi pada fase transmisi data aplikasi untuk memprioritaskan latensi nol (0-RTT performance) guna menjamin properti kerahasiaan dan integritas pesan data.",
      "e": "Mengizinkan penggunaan fungsi hash MD5 untuk verifikasi integritas pesan handshake pada jaringan berkecepatan tinggi berdasarkan prinsip matematika komputasi kurva eliptik modern."
    },
    "correct_letter": "b",
    "correct_answer": "Menghapus pertukaran kunci RSA statis dan seluruh cipher non-AEAD (seperti CBC mode), mewajibkan cipher AEAD dan pertukaran ephemeral DH (PFS)."
  },
  {
    "id": 257,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Mengapa algoritma pertukaran kunci Diffie-Hellman murni (tanpa tanda tangan digital atau sertifikat) sangat rentan terhadap serangan Man-in-the-Middle (MitM)?",
    "options": {
      "a": "Diffie-Hellman hanya dapat dijalankan pada perangkat keras yang memiliki modul pemrosesan grafis dedicated.",
      "b": "Protokol dasar DH tidak menyediakan mekanisme autentikasi entitas, sehingga penyerang di tengah dapat melakukan dua negosiasi kunci terpisah secara transparan.",
      "c": "Nilai bilangan prima modulus yang dipilih selalu dibatasi bernilai kurang dari angka seratus oleh spesifikasi RFC.",
      "d": "Diffie-Hellman mewajibkan pengiriman nilai kunci privat master dalam bentuk teks biasa (plaintext) di jaringan.",
      "e": "Penyerang dapat dengan mudah menebak nilai pangkat rahasia menggunakan operasi logaritma biasa kalkulator saku."
    },
    "correct_letter": "b",
    "correct_answer": "Protokol dasar DH tidak menyediakan mekanisme autentikasi entitas, sehingga penyerang di tengah dapat melakukan dua negosiasi kunci terpisah secara transparan."
  },
  {
    "id": 258,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Dalam konteks Post-Quantum Cryptography (PQC), mengapa algoritma kriptografi asimetris seperti RSA dan ECC terancam punah jika komputer kuantum skala besar terwujud?",
    "options": {
      "a": "Algoritma Grover dapat memecahkan faktorisasi prima RSA dalam kompleksitas waktu konstan $O(1)$ siklus kuantum pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "b": "Algoritma kuantum Shor mampu menyelesaikan masalah faktorisasi prima (RSA) dan logaritma diskret kurva eliptik (ECC) dalam waktu polinomial.",
      "c": "Komputer kuantum secara instan membalikkan arah aliran daya listrik pada kabel serat optik bawah laut global pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "d": "Sistem operasi kuantum menolak mengeksekusi fungsi matematika yang melibatkan operasi pembagian bilangan bulat.",
      "e": "Enkripsi kunci publik menghasilkan interferensi gelombang elektromagnetik yang menghancurkan status superposisi qubit."
    },
    "correct_letter": "b",
    "correct_answer": "Algoritma kuantum Shor mampu menyelesaikan masalah faktorisasi prima (RSA) dan logaritma diskret kurva eliptik (ECC) dalam waktu polinomial."
  },
  {
    "id": 259,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Untuk mencegah serangan Side-Channel berbasis analisis waktu (Timing Attack) saat membandingkan hash atau MAC autentikasi pada kode program, praktik terbaik yang wajib diterapkan adalah ...",
    "options": {
      "a": "Menggunakan operator pembanding standar `==` yang langsung mengembalikan nilai false saat karakter pertama tidak cocok pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "b": "Menambahkan jeda waktu acak (random sleep) antara 1 hingga 10 detik sebelum memanggil fungsi perbandingan bawaan bahasa.",
      "c": "Menggunakan fungsi perbandingan dengan waktu konstan (constant-time comparison) yang selalu memeriksa seluruh byte tanpa keluar lebih awal.",
      "d": "Mengalokasikan kedua string variabel pembanding pada memori video GPU sebelum melakukan perbandingan karakter.",
      "e": "Mengonversi kedua nilai hash menjadi bilangan floating-point ganda sebelum melakukan operasi pengurangan skalar."
    },
    "correct_letter": "c",
    "correct_answer": "Menggunakan fungsi perbandingan dengan waktu konstan (constant-time comparison) yang selalu memeriksa seluruh byte tanpa keluar lebih awal."
  },
  {
    "id": 260,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Mengapa penggunaan fungsi pembangkit bilangan acak bawaan seperti `rand()` atau `Math.random()` sangat berbahaya jika digunakan untuk menghasilkan token sesi atau kunci kriptografi?",
    "options": {
      "a": "Fungsi-fungsi tersebut menghasilkan keluaran bilangan bertipe string yang tidak dapat dienkripsi oleh pustaka OpenSSL.",
      "b": "Standar keamanan W3C melarang penggunaan bilangan desimal acak dalam pembuatan cookie peramban internet klien.",
      "c": "Penggunaan fungsi tersebut memicu pemakaian CPU hingga 100 persen dan menyebabkan server web mengalami crash permanen.",
      "d": "Fungsi PRNG non-kriptografis memiliki entropi rendah dan algoritma deterministik (seperti Linear Congruential Generator) yang mudah ditebak state berikutnya.",
      "e": "Fungsi Math.random() selalu mengirimkan nilai seed acak ke server peramban eksternal melalui koneksi telemetry."
    },
    "correct_letter": "d",
    "correct_answer": "Fungsi PRNG non-kriptografis memiliki entropi rendah dan algoritma deterministik (seperti Linear Congruential Generator) yang mudah ditebak state berikutnya."
  },
  {
    "id": 261,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Berdasarkan prinsip Birthday Paradox, berapa perkiraan jumlah percobaan hash acak yang dibutuhkan seorang penyerang untuk menemukan tabrakan (collision) pada fungsi hash dengan panjang digest $n$ bit?",
    "options": {
      "a": "Hanya dibutuhkan sekitar $2^{n/2}$ operasi percobaan hash, mereduksi ruang pencarian eksponensial menjadi setengah pangkatnya.",
      "b": "Dibutuhkan sekitar $2^n$ operasi hash penuh untuk menemukan tabrakan secara deterministik pada ruang pencarian guna menjamin properti kerahasiaan dan integritas pesan data.",
      "c": "Dibutuhkan sekitar $n^2$ operasi perhitungan matematis sederhana pada register unit floating point CPU host.",
      "d": "Hanya membutuhkan $n \\times 2$ operasi hash berkat pengoptimalan memori paralel arsitektur grafis GPU modern.",
      "e": "Dibutuhkan tepat $\\log_2(n)$ siklus detak instruksi perakitan mesin mikroprosesor pada arsitektur x86."
    },
    "correct_letter": "a",
    "correct_answer": "Hanya dibutuhkan sekitar $2^{n/2}$ operasi percobaan hash, mereduksi ruang pencarian eksponensial menjadi setengah pangkatnya."
  },
  {
    "id": 262,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Prinsip dasar protokol kriptografi Zero-Knowledge Proof (ZKP, seperti zk-SNARKs) memungkinkan sebuah pihak pembukti (prover) untuk meyakinkan pihak pemverifikasi (verifier) bahwa ...",
    "options": {
      "a": "Pihak pembukti telah berhasil meretas basis data pihak pemverifikasi tanpa meninggalkan berkas jejak audit di log sistem yang diverifikasi menggunakan kode autentikasi pesan kriptografis.",
      "b": "Seluruh data transaksi perbankan pengguna disiarkan ke seluruh node jaringan blockchain secara publik tanpa enkripsi guna menjamin properti kerahasiaan dan integritas pesan data.",
      "c": "Sebuah pernyataan matematis adalah benar tanpa membocorkan informasi atau rahasia apa pun selain kebenaran pernyataan tersebut.",
      "d": "Kunci privat enkripsi data telah dimusnahkan secara fisik dari media penyimpanan cold storage menggunakan demagnetizer pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "e": "Sistem operasi server telah diperbarui dengan patch keamanan kernel terbaru dari vendor perangkat lunak resmi berdasarkan prinsip matematika komputasi kurva eliptik modern."
    },
    "correct_letter": "c",
    "correct_answer": "Sebuah pernyataan matematis adalah benar tanpa membocorkan informasi atau rahasia apa pun selain kebenaran pernyataan tersebut."
  },
  {
    "id": 263,
    "week": "Week 6",
    "type": "Post Test",
    "question": "Pada sistem berkas terenkripsi tingkat partisi (Full Disk Encryption seperti LUKS atau BitLocker), peran Master Key (Volume Encryption Key) yang dibungkus oleh User Key (Key Encryption Key) bertujuan untuk ...",
    "options": {
      "a": "Memungkinkan pengguna mengganti password otentikasi tanpa harus melakukan enkripsi ulang seluruh volume disk yang memakan waktu berjam-jam.",
      "b": "Menghindari proses penulisan data ke dalam sektor piringan disk fisik sehingga memperpanjang usia pakai memori NAND berdasarkan prinsip matematika komputasi kurva eliptik modern.",
      "c": "Menyediakan pintu belakang (backdoor) darurat bagi penegak hukum untuk memulihkan data tanpa persetujuan pemilik sah pada saluran komunikasi aman berbasis spesifikasi TLS 1.3.",
      "d": "Meningkatkan kecepatan putaran spindle motor hard disk mekanis hingga mencapai kecepatan lima belas ribu RPM yang diverifikasi menggunakan kode autentikasi pesan kriptografis.",
      "e": "Membagi setiap berkas dokumen pengguna menjadi pecahan data terenkripsi yang disebar ke beberapa server cloud publik berdasarkan prinsip matematika komputasi kurva eliptik modern."
    },
    "correct_letter": "a",
    "correct_answer": "Memungkinkan pengguna mengganti password otentikasi tanpa harus melakukan enkripsi ulang seluruh volume disk yang memakan waktu berjam-jam."
  }
];
