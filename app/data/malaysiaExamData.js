import { Image } from "react-native";

export default malaysiaExamData = [
  {
    question: "Di manakah anda akan menemui tanda-tanda lalu lintas ini?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/family.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    image1: (
      <Image
        source={require("../assets/images/roadSigns/stop.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: ["Bandar", "Sekolah", "Hospital"],
    correct_option: "Sekolah",
  },
  {
    question: "Pilih maksud yang betul bagi tanda lalu lintas ini",
    image: (
      <Image
        source={require("../assets/images/roadSigns/stop.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Berhenti selepas garisan putih",
      "Berhenti sebelum garisan putih",
      "Berhenti untuk kanak-kanak melintas",
    ],
    correct_option: "Berhenti sebelum garisan putih",
  },
  {
    question: "Apakah maksud papan tanda jalan ini",
    image: (
      <Image
        source={require("../assets/images/prohibitory-signs/noslow.png")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Hanya jenis kenderaan ini dibenarkan ",
      "Dilarang meletak kenderaan untuk jenis kenderaan ini",
      "Hanya kenderaan jenis ini tidak dibenarkan",
    ],
    correct_option: "Hanya jenis kenderaan ini tidak dibenarkan",
  },
  {
    question: "Apakah maksud papan tanda jalan ini?",
    image: (
      <Image
        source={require("../assets/images/prohibitory-signs/straighorright.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Belok kanan sahaja",
      "Boleh berjalan lurus atau belok kanan sahaja",
      "Boleh meneruskan lurus atau belok kiri sahaja",
    ],
    correct_option: "Boleh teruskan lurus atau belok kanan sahaja",
  },
  {
    question: "Pilih pernyataan yang betul bagi tanda ini",
    image: (
      <Image
        source={require("../assets/images/examimages/noU.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: ["Belok U dibenarkan", "Tiada belok kanan", "Tiada belok U"],
    correct_option: "Tiada belok U",
  },
  {
    question: "Semasa memandu menuruni bukit, anda mesti:",

    options: [
      "Angkat brek tangan anda",
      "Gunakan gear tinggi",
      "Gunakan gear rendah",
    ],
    correct_option: "Gunakan gear rendah",
  },
  {
    question:
      "Standard kesihatan yang diperlukan bagi pemohon untuk lesen memandu:",

    options: [
      "Sihat fizikal dan boleh mendengar dari jarak 23 meter",
      "Sihat fizikal dan boleh mendengar dari jarak 20 meter & tidak buta warna",
      "Sihat fizikal dan mampu melihat sehingga jarak 23 meter & tidak buta warna",
    ],
    correct_option:
      "Sihat fizikal dan mampu melihat sehingga jarak 23 meter & tidak buta warna",
  },
  {
    question: "Di manakah pemandu akan menemui tanda-tanda lalu lintas ini?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/10up.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    image1: (
      <Image
        source={require("../assets/images/roadSigns/rocksfall.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    image2: (
      <Image
        source={require("../assets/images/examimages/noOvertake.webp")}
        style={{ width: 80, height: 110 }}
      />
    ),
    options: ["Kawasan bandar", "Kawasan berbukit", "Tepi Laut"],
    correct_option: "Kawasan berbukit",
  },
  {
    question: "Mengapa sistem KEJARA diperkenalkan?",

    options: [
      "Untuk bertindak terhadap pemegang PDL",
      "Untuk bertindak terhadap pesalah trafik",
      "Untuk bertindak terhadap pemegang CDL",
    ],
    correct_option: "Untuk bertindak terhadap pesalah trafik",
  },
  {
    question:
      "Apa yang perlu dilakukan oleh pemandu apabila melihat papan tanda jalan ini?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/roadbendsright.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: [
      "Perlahankan kenderaan, tukar gear tinggi dan bersedia untuk berhenti",
      "Perlahankan kenderaan, tukar gear rendah dan jangan memotong",
      "Perlahankan kenderaan, tukar gear rendah dan bersedia untuk berhenti",
    ],
    correct_option:
      "Perlahankan kenderaan, tukar gear rendah dan jangan memotong",
  },
  {
    question: "Apakah kaedah pemanduan yang betul di lebuh raya 3 lorong?",

    options: [
      "Lorong kiri untuk berhenti, lorong tengah untuk pelayaran, lorong kanan untuk memandu laju",
      "Lorong kiri untuk laju, lorong tengah untuk memotong, lorong kanan untuk perlahan",
      "Lorong kiri untuk perlahan, lorong tengah untuk laju, lorong kanan untuk memotong",
    ],
    correct_option:
      "Lorong kiri untuk perlahan, lorong tengah untuk laju, lorong kanan untuk memotong",
  },
  {
    question:
      "Kawasan manakah anda akan melihat papan tanda lalu lintas ini semasa memandu?",
    image: (
      <Image
        source={require("../assets/images/examimages/3.5.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: ["Perumahan", "Pembinaan", "Terowong"],
    correct_option: "Terowong",
  },
  {
    question: "Pilih pernyataan yang betul",
    image: (
      <Image
        source={require("../assets/images/examimages/chooseabc.png")}
        style={{ width: 160, height: 120 }}
      />
    ),

    options: [
      "Kenderaan B memberi laluan kepada kenderaan C",
      "Kenderaan A memberi laluan kepada kenderaan B",
      "Kenderaan B memberi laluan kepada kenderaan A",
    ],
    correct_option: "Kenderaan B memberi laluan kepada kenderaan A",
  },
  {
    question: "Pilih pernyataan yang betul",
    image: (
      <Image
        source={require("../assets/images/examimages/ab.png")}
        style={{ width: 160, height: 120 }}
      />
    ),

    options: [
      "Kenderaan B perlu memberi hak laluan kepada kenderaan A",
      "Kenderaan A perlu memberi hak laluan kepada kenderaan B",
      "Kenderaan A perlu memecut apabila melihat kenderaan B",
    ],
    correct_option: "Kenderaan A perlu memberi hak laluan kepada kenderaan B",
  },
  {
    question:
      "Pemandu A memandu perlahan di lorong Y. Pernyataan yang manakah betul:",
    image: (
      <Image
        source={require("../assets/images/examimages/driverslow.png")}
        style={{ width: 120, height: 120 }}
      />
    ),

    options: [
      "Pemandu A harus bertukar ke lorong X",
      "Pemandu A berada di lorong yang betul",
      "Pemandu A telah melebihi had laju yang ditetapkan",
    ],
    correct_option: "Pemandu A perlu bertukar ke lorong X",
  },
  {
    question: "Apakah faktor yang menyumbang kepada kemalangan?",

    options: ["Keadaan kenderaan", "Warna kenderaan", "Jenis kenderaan"],
    correct_option: "Keadaan kenderaan",
  },
  {
    question:
      "Untuk memastikan perjalanan yang selamat, apakah yang perlu kita lakukan sebelum berangkat?",

    options: [
      "Pinjam kereta kawan awak",
      "Pastikan kenderaan dalam keadaan baik",
      "Pastikan semua urusan berkaitan dibuat pada siang hari",
    ],
    correct_option: "Pastikan kenderaan dalam keadaan baik",
  },
  {
    question:
      "Pemandu yang mempunyai amalan pemanduan yang baik akan melakukan perkara berikut:",

    options: [
      "Memintas dengan tergesa-gesa tanpa menunjukkan",
      "Rancang perjalanan sebelum berangkat",
      "Pandu laju kerana kelewatan berlepas",
    ],
    correct_option: "Rancang perjalanan sebelum berangkat",
  },
  {
    question: "Perlanggaran paling teruk ialah:",

    options: [
      "Berlanggar dengan kenderaan dari sisi",
      "Perlanggaran dengan kenderaan dari belakang",
      "Berlanggar dengan sebuah kenderaan dari hadapan",
    ],
    correct_option: "Berlanggar dengan sebuah kenderaan dari hadapan",
  },
  {
    question:
      "Apakah perkara yang TIDAK boleh anda lakukan apabila kenderaan anda dipintas oleh orang lain?",

    options: [
      "Pandu di lorong kiri",
      "Percepatkan kenderaan anda",
      "Biarkan kenderaan lain memotong",
    ],
    correct_option: "Percepatkan kenderaan anda",
  },
  //
  {
    question: "Apakah yang perlu Pemandu A lakukan sebelum membelok?",
    image: (
      <Image
        source={require("../assets/images/examimages/drivera.png")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: [
      "Beri isyarat untuk belok kanan, beri laluan kepada kenderaan yang datang dari arah bertentangan dan belok",
      "Beri laluan kepada kenderaan yang keluar dari simpang",
      "Berpusing sambil tidak mengendahkan kenderaan dari arah bertentangan",
    ],
    correct_option:
      "Beri isyarat untuk membelok ke kanan, memberi laluan kepada kenderaan yang datang dari arah bertentangan dan membelok",
  },
  {
    question: "Pilih jawapan yang betul:",
    image: (
      <Image
        source={require("../assets/images/examimages/lane.png")}
        style={{ width: 100, height: 100 }}
      />
    ),
    options: [
      "Kenderaan C harus memberi laluan kepada kenderaan B",
      "Kenderaan B harus memberi laluan kepada kenderaan C",
      "Kenderaan B harus memberi laluan kepada kenderaan A",
    ],
    correct_option: "Kenderaan B hendaklah memberi laluan kepada kenderaan A",
  },
  {
    question:
      "Apakah yang perlu anda lakukan apabila anda melihat sekumpulan kanak-kanak bermain di tepi jalan semasa anda memandu?",

    options: [
      "Perlahankan kenderaan anda, bersedia untuk brek dan berhenti jika perlu Kurangkan kelajuan",
      "Singgah di tepi jalan dan perhatikan kanak-kanak di tepi jalan",
      "Pecut dan hon dengan kuat untuk didengari oleh kanak-kanak",
    ],
    correct_option:
      "Perlahankan kenderaan anda, bersedia untuk brek dan berhenti jika perlu Kurangkan kelajuan",
  },
  {
    question:
      "Apakah kandungan alkohol yang dibenarkan dalam air kencing, nafas dan darah?",

    options: ["0.00 mg alkohol", "1.00 mg alkohol", "2.00 mg alkohol"],
    correct_option: "0.00 mg alkohol",
  },
  {
    question:
      "Pernyataan yang manakah menunjukkan langkah-langkah yang perlu diambil sebelum memandu?",

    options: [
      "Tukar minyak enjin dan palam pencucuh",
      "Laraskan tempat duduk dan cermin, dan pakai tali pinggang keledar anda",
      "Basuh kereta setiap minggu",
    ],
    correct_option:
      "Laraskan tempat duduk dan cermin, dan pakai tali pinggang keledar anda",
  },
  {
    question:
      "Salah satu faktor yang menyebabkan berlakunya kemalangan jalan raya ialah:",

    options: [
      "Keadaan cuaca yang baik",
      "Kesilapan pemandu",
      "Keadaan jalan yang baik",
    ],
    correct_option: "Kesilapan pemandu",
  },
  {
    question: "Apabila memotong kenderaan, seseorang itu mesti:",

    options: [
      "Pastikan kenderaan di hadapan bergerak laju sebelum memotong",
      "Ikut peraturan 12 saat dan beri isyarat sekurang-kurangnya 3 saat sebelum",
      "Belok ke kanan dengan cepat dan pecut",
    ],
    correct_option:
      "Ikuti peraturan 12 saat dan isyarat selama sekurang-kurangnya 3 saat sebelum itu",
  },
  {
    question: "Apakah maksud yang betul bagi papan tanda jalan ini?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/junctionleft.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: [
      "Persimpangan kiri",
      "Persimpangan tiga arah di hadapan",
      "Jalan bercabang",
    ],
    correct_option: "Persimpangan kiri",
  },
  {
    question:
      "Apakah yang perlu dilakukan oleh pemandu jika brek kenderaan gagal berfungsi?",

    options: [
      "Tarik brek tangan segera",
      "Pam pedal brek anda dengan kuat dan pantas",
      "Bunyikan hon dan hidupkan pancaran tinggi",
    ],
    correct_option: "Pam pedal brek anda dengan kuat dan pantas",
  },
  {
    question: "Apakah maksud yang betul bagi papan tanda jalan ini?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/railwayborder.webp")}
        style={{ width: 80, height: 110 }}
      />
    ),

    options: [
      "Persimpangan tingkat dengan pintu pagar",
      "Lintasan pejalan kaki",
      "Persimpangan aras dengan pagar automatik",
    ],
    correct_option: "Lintasan aras dengan pagar automatik",
  },
  {
    question:
      "Apakah tindakan yang diperlukan sekiranya pemandu melihat papan tanda ini di jalan raya?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/uncontrolled.webp")}
        style={{ width: 100, height: 100 }}
      />
    ),

    options: [
      "Mempercepatkan",
      "Berpusing tanpa memberi isyarat",
      "Pandu di lorong yang betul",
    ],
    correct_option: "Pandu di lorong yang betul",
  },
  {
    question:
      "Dalam pemanduan defensif, langkah berikut boleh membantu mengelakkan kemalangan:",

    options: [
      "Pandu pada kelajuan tinggi dan bersedia untuk brek pada bila-bila masa",
      "Ekor kenderaan di hadapan dan memotong pada bila-bila masa",
      "Kenal pasti, analisa halangan, buat keputusan dan ambil tindakan",
    ],
    correct_option:
      "Kenal pasti, analisa halangan, buat keputusan dan ambil tindakan",
  },
  {
    question: "Pilih maksud yang betul bagi tanda lalu lintas ini?",
    image: (
      <Image
        source={require("../assets/images/roadSigns/stopandgiveway.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: ["Bonggol di hadapan", "Jalan berliku", "Berhenti di hadapan"],
    correct_option: "Berhenti di hadapan",
  },

  {
    question: "Apakah maksud tanda lalu lintas ini?",
    image: (
      <Image
        source={require("../assets/images/examimages/60.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),

    options: [
      "Berhati-hati, polis trafik di hadapan",
      "Jalan berliku",
      "Patuhi had laju yang ditetapkan",
    ],
    correct_option: "Patuhi had laju yang ditetapkan",
  },
  {
    question: "Cermin pandangan belakang membantu pemandu melihat:",

    options: [
      "Penumpang di tempat duduk belakang",
      "Pemandangan melalui tingkap belakang",
      "Perhiasan di dalam kereta",
    ],
    correct_option: "Pemandangan melalui tingkap belakang",
  },
  {
    question: "Di jalan yang tidak rata, anda harus:",

    options: [
      "Pandu lebih laju",
      "Gunakan brek tangan",
      "Kurangkan kelajuan anda",
    ],
    correct_option: "Kurangkan kelajuan anda",
  },
  {
    question: "Pemanduan defensif bermaksud:",

    options: [
      "Memantau tingkah laku pengguna jalan raya yang lain",
      "Mengawal penggunaan bahan api dan kos penyelenggaraan kenderaan",
      "Memandu untuk mengelak kemalangan",
    ],
    correct_option: "Memandu untuk mengelakkan kemalangan",
  },

  {
    question: "Apakah maksud tanda lalu lintas ini?",
    image: (
      <Image
        source={require("../assets/images/examimages/obstruct.png")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: ["Halangan di hadapan", "Tanda berhenti di hadapan", "Perlahan"],
    correct_option: "Halangan di hadapan",
  },
  {
    question:
      "Kemalangan semasa mengundur kenderaan boleh dielakkan jika pemandu",

    options: [
      "Menilai keadaan sebenar sebelum masuk ke dalam kenderaan, melihat cermin pandang belakang dan cermin sisi sebelum berundur",
      "Berundur tanpa menoleh kepala untuk menilai keadaan lalu lintas",
      "Berundur dengan pantas tanpa menilai keadaan jalan yang sebenar",
    ],
    correct_option:
      "Menilai keadaan sebenar sebelum masuk ke dalam kenderaan, melihat cermin pandang belakang dan cermin sisi sebelum berundur",
  },
  {
    question: "Apakah peraturan jarak apabila mengikut di belakang kenderaan?",

    options: [
      "Peraturan 12 saat",
      "Peraturan 2 saat dan 4 saat",
      "Peraturan 6 saat dan 12 saat",
    ],
    correct_option: "Peraturan 2 saat dan 4 saat",
  },

  {
    question: "Apakah maksud tanda lalu lintas ini?",
    image: (
      <Image
        source={require("../assets/images/examimages/noright.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Tiada belok kiri",
      "Tiada belok kanan",
      "Tiada tempat letak kereta",
    ],
    correct_option: "Tiada belok kiri",
  },

  {
    question: "CDL boleh diperbaharui untuk tempoh maksimum?",

    options: ["5 tahun", "8 tahun", "2 tahun"],
    correct_option: "5 tahun",
  },
  {
    question: "Apakah yang perlu anda lakukan untuk mengatasi titik buta?",

    options: [
      "Hidupkan pancaran tinggi sebelum memandu",
      "Pusing kepala anda sedikit ke kiri dan kanan sebelum menukar lorong",
      "Tukar lorong tanpa melihat ke kiri dan kanan",
    ],
    correct_option:
      "Pusing kepala anda sedikit ke kiri dan kanan sebelum menukar lorong",
  },
  {
    question:
      "Semasa anda menghampiri persimpangan jalan dengan lampu isyarat dan dikawal oleh polis trafik, anda harus",

    options: [
      "Ikut isyarat dan arahan pegawai polis",
      "Ikut lampu isyarat seperti biasa",
      "Teruskan mengikut keutamaan jalan raya",
    ],
    correct_option: "Ikut isyarat dan arahan pegawai polis",
  },

  {
    question:
      "Apabila lampu isyarat di hadapan anda bertukar daripada merah kepada hijau, anda hendaklah:",

    options: [
      "Bunyikan hon sebelum anda meneruskan",
      "Teruskan tanpa berhati-hati",
      "Teruskan jika tiada halangan",
    ],
    correct_option: "Teruskan jika tiada halangan",
  },
  //
  {
    question: "Pilih maksud yang betul untuk tanda lalu lintas ini",
    image: (
      <Image
        source={require("../assets/images/roadSigns/twowaytraffic.webp")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: ["Jalan sehala", "Trafik dua hala", "dua laluan"],
    correct_option: "Trafik dua hala",
  },
  {
    question: "Apakah syarat umur untuk memohon lesen memandu kelas D?",

    options: ["16 tahun", "17 tahun", "18 tahun"],
    correct_option: "17 tahun",
  },
  {
    question: "Lorong x tutup. Pilih jawapan yang betul",
    image: (
      <Image
        source={require("../assets/images/examimages/lanex.png")}
        style={{ width: 80, height: 80 }}
      />
    ),
    options: [
      "Kenderaan di lorong X hendaklah bercantum ke lorong Y secara berselang-seli",
      "Kenderaan di lorong X perlu lari ke belakang",
      "Kenderaan di lorong Y tidak perlu memberi laluan kepada kenderaan di lorong X",
    ],
    correct_option:
      "Kenderaan di lorong X hendaklah bercantum ke lorong Y secara berselang-seli",
  },
  {
    question: "Pilih kesalahan di bawah Akta Pengangkutan Jalan, 1987:",

    options: [
      "Tidak memaparkan cukai jalan kenderaan",
      "Tidak berhenti apabila dihalang oleh pemandu lain",
      "Menghidupkan lampu depan pada waktu siang",
    ],
    correct_option: "Tidak memaparkan cukai jalan kenderaan",
  },
  {
    question:
      "Pernyataan yang manakah menunjukkan langkah-langkah yang diambil sebelum memandu?",

    options: [
      "Tukar minyak enjin dan palam pencucuh",
      "Laraskan tempat duduk dan cermin, dan pakai tali pinggang keledar anda",
      "Basuh kereta sebelum pergi",
    ],
    correct_option:
      "Laraskan tempat duduk dan cermin, dan pakai tali pinggang keledar anda",
  },
];
