import {
  lazyLoadChoice,
  SurveyViewer,
} from '@/components/survey/survey-viewer';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { DataCustomer } from './maintenance/data/customer';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Form Survey',
    href: dashboard().url,
  },
];

export default function Dashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Survey Perumdam" />
      <FormSurvey
        value={{
          title: 'Survey Perumdam',
          description:
            'Supported by PT. Pembangunan Perumahan  Tirta Riau (PPTR)',
          logoFit: 'cover',
          pages: [
            {
              name: 'page1',
              elements: [
                {
                  type: 'radiogroup',
                  name: 'Target',
                  title: 'Pilih Target Survey',
                  description: 'Tentukan dengan benar target yg di survey',
                  isRequired: true,
                  choices: ['Non Pelanggan', 'Pelanggan'],
                },
              ],
              title: 'Target Survey ',
            },
            {
              name: 'page2',
              elements: [
                {
                  type: 'text',
                  name: 'Nama Pelanggan',
                  title: 'Nama Lengkap / Alias',
                  description: 'Masukkan nama lengkap',
                  isRequired: true,
                },
                {
                  type: 'text',
                  name: 'Kontak',
                  title: 'Kontak Telpon / Nomor Handphone',
                  description:
                    'Pastikan dimulai dengan +62\nCth: +62 811 7607 775',
                  isRequired: true,
                  inputType: 'tel',
                },
                {
                  type: 'radiogroup',
                  name: 'Kecamatan',
                  title: 'Kecamatan',
                  isRequired: true,
                  choices: ['Bukit Raya', 'Marpoyan Damai'],
                  showOtherItem: true,
                  otherPlaceholder: 'Tuliskan kecamatan nya ...',
                  otherText: 'Lainnya',
                },
                {
                  type: 'radiogroup',
                  name: 'Kelurahan',
                  isRequired: true,
                  choices: [
                    'Tangkerang Selatan',
                    'Tangkerang Barat',
                    'Tangkerang Tengah',
                  ],
                  showOtherItem: true,
                  otherPlaceholder: 'Tuliskan kelurahan nya ...',
                  otherText: 'Lainnya',
                },
                {
                  type: 'text',
                  name: 'Perumahan',
                  title: 'Perumahan',
                },
                {
                  type: 'comment',
                  name: 'Alamat',
                  title: 'Alamat',
                  description: 'Cth: Jln. Rawa Insani No. 1',
                  isRequired: true,
                },
                {
                  type: 'text',
                  name: 'Koordinat Lokasi',
                  title: 'Titik Koordinat Lokasi',
                  description:
                    'Salin titik koordinat lokasi pelanggan dari Google Maps',
                },
              ],
              visibleIf: "{Target} = 'Non Pelanggan'",
              title: 'Data Non Pelanggan',
            },
            {
              name: 'page7',
              elements: [
                {
                  type: 'dropdown',
                  name: 'npa',
                  visibleIf: "{Target} = 'Pelanggan'",
                  title: 'Pilih Pelanggan',
                  isRequired: true,
                },
                {
                  type: 'expression',
                  name: 'question5',
                  visibleIf: '{npa} empty',
                  title: 'Silahkan pilih pelanggan terlebih dahulu',
                },
                {
                  type: 'expression',
                  name: 'qqqqq',
                  visibleIf: '{npa} notempty',
                  title: 'Nomor Pelanggan Aktif (NPA)',
                  description: '{p_npa}',
                },
                {
                  type: 'text',
                  name: 'p_name',
                  visibleIf: '{npa} notempty',
                  title: 'Nama Pelanggan',
                },
                {
                  type: 'text',
                  name: 'p_telp',
                  visibleIf: '{npa} notempty',
                  title: 'Kontak Telpon / Nomor Handphone',
                  inputType: 'tel',
                },
                {
                  type: 'expression',
                  name: 'question6',
                  visibleIf: '{npa} notempty',
                  title: 'Area Wilayah',
                  description: '{p_kecamatan} - {p_kelurahan}\n{p_perumahan}',
                },
                {
                  type: 'text',
                  name: 'p_maps',
                  visibleIf: '{npa} notempty',
                  title: 'Titik Koordinat Lokasi',
                },
                {
                  type: 'html',
                  name: 'question7',
                  visibleIf: '{p_maps} notempty ',
                  html: '<a href="{p_maps}" target="_blank" >\n📍 Buka di Google Maps\n</a>\n<div style="height:6px"></div>\n<iframe\n  width="100%"\n  height="300"\n  style="border:0; border-radius:8px"\n  loading="lazy"\n  referrerpolicy="no-referrer-when-downgrade"\n  src="{p_maps}&z=15&output=embed">\n</iframe>',
                },
                {
                  type: 'comment',
                  name: 'p_alamat',
                  visibleIf: '{npa} notempty',
                  title: 'Alamat',
                },
              ],
              visibleIf: "{Target} = 'Pelanggan'",
              title: 'Data Pelanggan',
            },
            {
              name: 'page4',
              elements: [
                {
                  type: 'radiogroup',
                  name: 'Tersambung Ke Instalasi Rumah ?',
                  title: 'Tersambung Ke Instalasi Rumah ?',
                  isRequired: true,
                  choices: [
                    'Tersambung Instalasi',
                    'Belum Tersambung Instalasi',
                  ],
                },
                {
                  type: 'text',
                  name: 'Nama Responden',
                  visibleIf: "{Target} = 'Pelanggan'",
                  title: 'Nama Responden',
                  isRequired: true,
                },
                {
                  type: 'radiogroup',
                  name: 'Status Responden',
                  title: 'Status Responden',
                  isRequired: true,
                  choices: [
                    'Suami',
                    'Istri',
                    'Anak',
                    'Saudara',
                    'Orang Tua',
                    'ART',
                  ],
                },
                {
                  type: 'radiogroup',
                  name: 'Status Properti',
                  title: 'Status Properti',
                  isRequired: true,
                  choices: [
                    'Milik Sendiri / Keluarga ',
                    'Milik Perusahaan / Instansi',
                    'Sewa / Kontrak',
                  ],
                },
                {
                  type: 'dropdown',
                  name: 'Jumlah Anggota Keluarga Di Rumah',
                  title: ' Jumlah Anggota Keluarga Di Rumah',
                  isRequired: true,
                  choices: [
                    {
                      value: '1',
                      text: '1 Orang',
                    },
                    {
                      value: '2',
                      text: '2 Orang',
                    },
                    {
                      value: '3',
                      text: '3 Orang',
                    },
                    {
                      value: '4',
                      text: '4 Orang',
                    },
                    {
                      value: '5',
                      text: '5 Orang',
                    },
                    {
                      value: '6',
                      text: '6 Orang',
                    },
                    {
                      value: '7',
                      text: '7 Orang',
                    },
                    {
                      value: '8',
                      text: '8 Orang',
                    },
                  ],
                  noneText: '9 Orang atau lebih',
                  placeholder: 'Pilih...',
                },
                {
                  type: 'dropdown',
                  name: 'Pekerjaan Suami',
                  title: 'Pekerjaan Suami',
                  choices: [
                    'Aparatur Negara & Pemerintahan',
                    'Pegawai Negeri Sipil (PNS)',
                    'Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)',
                    'Anggota TNI',
                    'Anggota POLRI',
                    'Perangkat Desa',
                    'Pegawai BUMN',
                    'Pegawai BUMD',
                    'Karyawan Swasta',
                    'Karyawan Kontrak',
                    'Karyawan Honorer',
                    'Pegawai Tetap',
                    'Pegawai Harian Lepas',
                    'Manajer',
                    'Supervisor',
                    'Staf Administrasi',
                    'Dokter',
                    'Perawat',
                    'Bidan',
                    'Apoteker',
                    'Guru',
                    'Dosen',
                    'Pengacara / Advokat',
                    'Notaris',
                    'Akuntan',
                    'Konsultan',
                    'Arsitek',
                    'Insinyur / Engineer',
                    'Programmer / Pengembang Perangkat Lunak',
                    'Analis Data',
                    'Wirausaha / Pengusaha',
                    'Pedagang',
                    'Pedagang Keliling',
                    'Pedagang Pasar',
                    'Pemilik Toko',
                    'Pemilik Warung',
                    'Pemilik Usaha Online',
                    'Petani',
                    'Buruh Tani',
                    'Pekebun',
                    'Peternak',
                    'Nelayan',
                    'Buruh Nelayan',
                    'Buruh',
                    'Buruh Bangunan',
                    'Tukang',
                    'Tukang Kayu',
                    'Tukang Las',
                    'Tukang Listrik',
                    'Teknisi',
                    'Mekanik',
                    'Sopir',
                    'Sopir Pribadi',
                    'Sopir Truk',
                    'Sopir Bus',
                    'Sopir Online (Ojol)',
                    'Kurir',
                    'Satpam',
                    'Petugas Kebersihan',
                    'Office Boy',
                    'Pramuniaga',
                    'Pelayan Toko',
                    'Pelayan Restoran',
                    'Barista',
                    'Seniman',
                    'Musisi',
                    'Fotografer',
                    'Videografer',
                    'Desainer Grafis',
                    'Content Creator',
                    'Jurnalis',
                    'Tokoh Agama',
                    'Ustaz',
                    'Pendeta',
                    'Pastor',
                    'Penyuluh Agama',
                    'Pekerja Sosial',
                    'Instruktur',
                    'Pelatih',
                    'Tutor',
                    'Tidak Bekerja',
                    'Sedang Mencari Pekerjaan',
                    'Pensiunan',
                    'Penyandang Disabilitas',
                    'Sakit Permanen',
                    'Pekerja Lepas / Freelance',
                    'Tenaga Ahli',
                    'Konsultan Proyek',
                    'Relawan',
                  ],
                  showOtherItem: true,
                  otherPlaceholder: 'Sebutkan…',
                  noneText: 'Lainnya',
                  otherText: 'Lainnya ',
                  placeholder: 'Pilih...',
                },
                {
                  type: 'dropdown',
                  name: 'Pekerjaan Istri',
                  title: 'Pekerjaan Istri',
                  choices: [
                    'Aparatur Negara & Pemerintahan',
                    'Pegawai Negeri Sipil (PNS)',
                    'Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)',
                    'Anggota TNI',
                    'Anggota POLRI',
                    'Perangkat Desa',
                    'Pegawai BUMN',
                    'Pegawai BUMD',
                    'Karyawan Swasta',
                    'Karyawan Kontrak',
                    'Karyawan Honorer',
                    'Pegawai Tetap',
                    'Pegawai Harian Lepas',
                    'Manajer',
                    'Supervisor',
                    'Staf Administrasi',
                    'Dokter',
                    'Perawat',
                    'Bidan',
                    'Apoteker',
                    'Guru',
                    'Dosen',
                    'Pengacara / Advokat',
                    'Notaris',
                    'Akuntan',
                    'Konsultan',
                    'Arsitek',
                    'Insinyur / Engineer',
                    'Programmer / Pengembang Perangkat Lunak',
                    'Analis Data',
                    'Wirausaha / Pengusaha',
                    'Pedagang',
                    'Pedagang Keliling',
                    'Pedagang Pasar',
                    'Pemilik Toko',
                    'Pemilik Warung',
                    'Pemilik Usaha Online',
                    'Petani',
                    'Buruh Tani',
                    'Pekebun',
                    'Peternak',
                    'Nelayan',
                    'Buruh Nelayan',
                    'Buruh',
                    'Buruh Bangunan',
                    'Tukang',
                    'Tukang Kayu',
                    'Tukang Las',
                    'Tukang Listrik',
                    'Teknisi',
                    'Mekanik',
                    'Sopir',
                    'Sopir Pribadi',
                    'Sopir Truk',
                    'Sopir Bus',
                    'Sopir Online (Ojol)',
                    'Kurir',
                    'Satpam',
                    'Petugas Kebersihan',
                    'Office Boy',
                    'Pramuniaga',
                    'Pelayan Toko',
                    'Pelayan Restoran',
                    'Barista',
                    'Seniman',
                    'Musisi',
                    'Fotografer',
                    'Videografer',
                    'Desainer Grafis',
                    'Content Creator',
                    'Jurnalis',
                    'Tokoh Agama',
                    'Ustaz',
                    'Pendeta',
                    'Pastor',
                    'Penyuluh Agama',
                    'Pekerja Sosial',
                    'Instruktur',
                    'Pelatih',
                    'Tutor',
                    'Tidak Bekerja',
                    'Sedang Mencari Pekerjaan',
                    'Pensiunan',
                    'Penyandang Disabilitas',
                    'Sakit Permanen',
                    'Pekerja Lepas / Freelance',
                    'Tenaga Ahli',
                    'Konsultan Proyek',
                    'Relawan',
                  ],
                  showOtherItem: true,
                  otherPlaceholder: 'Sebutkan…',
                  noneText: 'Lainnya',
                  otherText: 'Lainnya ',
                  placeholder: 'Pilih...',
                },
                {
                  type: 'text',
                  name: 'Jumlah Mobil',
                  title: 'Berapa Jumlah Mobil ?',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'text',
                  name: 'Jumlah Sepeda Motor',
                  title: 'Berapa Jumlah Sepeda Motor ?',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'text',
                  name: 'Jumlah Kamar Tidur',
                  title: 'Berapa Jumlah Kamar Tidur ?',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'text',
                  name: 'Jumlah Kamar Mandi',
                  title: 'Berapa Jumlah Kamar Mandi ?',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'boolean',
                  name: 'Memiliki ART',
                  title: 'Apakah Memilih Asisten Rumah Tangga (ART) ?',
                  isRequired: true,
                  labelTrue: 'Ya',
                  labelFalse: 'Tidak',
                },
                {
                  type: 'boolean',
                  name: 'Memakai Tandon / Tangki Air',
                  title: 'Apakah Memakai Tandon / Tangki Air / Toren Air ?',
                  isRequired: true,
                  labelTrue: 'Ya',
                  labelFalse: 'Tidak',
                },
              ],
              title: 'Detail Informasi ',
            },
            {
              name: 'page5',
              elements: [
                {
                  type: 'expression',
                  name: 'question4',
                  title: 'Apakah air galon di gunakan untuk kebutuhan berikut:',
                },
                {
                  type: 'expression',
                  name: 'panel1',
                  maxWidth: '',
                  title: '1. Kebutuhan Memasak',
                },
                {
                  type: 'text',
                  name: 'Kebutuhan Memasak Seminggu (Bermerek)',
                  indent: 1,
                  title: 'Air Galon (Bermerek)',
                  description: 'Penggunaan dalam seminggu',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'text',
                  name: 'Kebutuhan Memasak Seminggu (Isi Ulang)',
                  indent: 1,
                  title: 'Air Galon (Isi Ulang)',
                  description: 'Penggunaan dalam seminggu',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'expression',
                  name: 'panel3',
                  title: '2. Kebutuhan Minum',
                },
                {
                  type: 'text',
                  name: 'Kebutuhan Minum Seminggu (Bermerek)',
                  indent: 1,
                  title: 'Air Galon (Bermerek)',
                  description: 'Penggunaan dalam seminggu',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'text',
                  name: 'Kebutuhan Minum Seminggu (Isi Ulang)',
                  indent: 1,
                  title: 'Air Galon (Isi Ulang)',
                  description: 'Penggunaan dalam seminggu',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'expression',
                  name: 'panel4',
                  title: '3. Kebutuhan Lainnya',
                },
                {
                  type: 'text',
                  name: 'Kebutuhan Lainnya Seminggu (Bermerek)',
                  indent: 1,
                  title: 'Air Galon (Bermerek)',
                  description: 'Penggunaan dalam seminggu',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'text',
                  name: 'Kebutuhan Lainnya Seminggu (Isi Ulang)',
                  indent: 1,
                  title: 'Air Galon (Isi Ulang)',
                  description: 'Penggunaan dalam seminggu',
                  inputType: 'number',
                  min: 0,
                },
                {
                  type: 'boolean',
                  name: 'Apakah Anda mengetahui bahwa sebagian besar air galon isi ulang menggunakan air tanah sebagai sumber air baku?',
                  title:
                    'Apakah Anda mengetahui bahwa sebagian besar air galon isi ulang menggunakan air tanah sebagai sumber air baku?',
                  isRequired: true,
                  labelTrue: 'Ya',
                  labelFalse: 'Tidak',
                },
                {
                  type: 'radiogroup',
                  name: 'Menurut Anda, seberapa aman kualitas air tanah untuk dikonsumsi jangka panjang oleh keluarga?',
                  title:
                    'Menurut Anda, seberapa aman kualitas air tanah untuk dikonsumsi jangka panjang oleh keluarga?',
                  isRequired: true,
                  choices: [
                    'Sangat Tidak Aman ',
                    'Tidak Aman ',
                    'Aman ',
                    'Sangat Aman',
                  ],
                },
                {
                  type: 'boolean',
                  name: 'Apakah anda mengetahui dampak negatif penggunaan air tanah ?',
                  title:
                    'Apakah anda mengetahui dampak negatif penggunaan air tanah ?',
                  isRequired: true,
                  labelTrue: 'Sudah',
                  labelFalse: 'Belum',
                },
                {
                  type: 'expression',
                  name: 'panel5',
                  visibleIf:
                    '{Apakah anda mengetahui dampak negatif penggunaan air tanah ?} = false',
                  title:
                    'Karena BELUM mengetahui dampak negatif penggunaan air tanah\n\nSilahkan dijelaskan dampak nya ya 🤗\n\n',
                },
                {
                  type: 'radiogroup',
                  name: 'Apakah boleh disampaikan kisaran total pendapatan rumah tangga per bulan ?',
                  title:
                    'Apakah boleh disampaikan kisaran total pendapatan rumah tangga per bulan ?',
                  isRequired: true,
                  choices: [
                    '< Rp3 juta',
                    'Rp3 – 6 juta',
                    'Rp6 – 10 juta',
                    '> Rp10 juta',
                  ],
                  showNoneItem: true,
                  noneText: 'Tidak Ingin Menjawab',
                },
                {
                  type: 'radiogroup',
                  name: 'Apakah tagihan air PDAM sebanding dengan manfaat yang diperoleh dibandingkan penggunaan air tanah ?',
                  title:
                    'Apakah tagihan air PDAM di kisaran Rp {harga_min} – Rp {harga_max} per bulan sebanding dengan manfaat yang diperoleh dibandingkan penggunaan air tanah ?',
                  isRequired: true,
                  choices: ['Ya', 'Tidak', 'Tergantung kualitas'],
                  noneText: 'Tidak Ingin Menjawab',
                },
                {
                  type: 'radiogroup',
                  name: 'Bagaimana pendapat Anda tentang tarif air PDAM saat ini jika dibandingkan dengan pengeluaran air galon, listrik pompa, dan risiko penggunaan air tanah ?',
                  title:
                    'Bagaimana pendapat Anda tentang tarif air PDAM saat ini jika dibandingkan dengan pengeluaran air galon, listrik pompa, dan risiko penggunaan air tanah ?',
                  isRequired: true,
                  choices: [
                    'Lebih hemat',
                    'Kurang lebih sama',
                    'Lebih mahal',
                    'Belum pernah membandingkan',
                  ],
                  noneText: 'Tidak Ingin Menjawab',
                },
                {
                  type: 'checkbox',
                  name: 'Apakah ada kekhawatiran Anda berlangganan PDAM ?',
                  title: 'Apakah ada kekhawatiran Anda berlangganan PDAM ?',
                  choices: [
                    'Kualitas air',
                    'Kontinuitas aliran',
                    'Penanganan keluhan',
                  ],
                  showOtherItem: true,
                  otherPlaceholder: 'Sebutkan…',
                  noneText: 'Tidak Ingin Menjawab',
                  otherText: 'Lainnya',
                },
                {
                  type: 'radiogroup',
                  name: 'Apakah anda sependapat pola pemakaian air pdam yang keliru menyebabkan tagihan yang tinggi ?',
                  isRequired: true,
                  choices: ['Ya'],
                  showOtherItem: true,
                  otherPlaceholder: 'Sebutkan…',
                  otherText: 'Tidak',
                },
                {
                  type: 'checkbox',
                  name: 'Apa yang di gunakan di kamar mandi ?',
                  title: '1. Apa yang di gunakan di kamar mandi ?',
                  choices: ['Bak mandi', 'Shower'],
                },
                {
                  type: 'checkbox',
                  name: 'Apa model mesin cuci yang di gunakan ?',
                  title: '2. Apa model mesin cuci yang di gunakan ?',
                  choices: ['2 Tabung', 'Top Loading', 'Front Loading'],
                  showNoneItem: true,
                  noneText: 'Tidak Memakai',
                },
                {
                  type: 'checkbox',
                  name: 'Apakah anda berencana menggunakan air pdam untuk ?',
                  title:
                    '3. Apakah anda berencana menggunakan air pdam untuk ?',
                  choices: ['Cuci kendaraan', 'Menyiram tanaman'],
                  showOtherItem: true,
                  otherPlaceholder: 'Sebutkan…',
                  otherText: 'Lainnya',
                },
                {
                  type: 'comment',
                  name: 'Apa yang Anda harapkan agar air PDAM bisa menjadi sumber air utama keluarga?',
                  title:
                    'Apa yang Anda harapkan agar air PDAM bisa menjadi sumber air utama keluarga?',
                  placeholder: 'Tuliskan harapan nya (Jika ada)',
                },
              ],
              title: 'Pertanyaan Tentang Air',
            },
            {
              name: 'page6',
              elements: [
                {
                  type: 'radiogroup',
                  name: 'berminat berlangganan PDAM',
                  title: 'Apakah anda berminat berlangganan PDAM ?',
                  isRequired: true,
                  choices: ['Berminat', 'Ragu-ragu', 'Tidak'],
                },
                {
                  type: 'comment',
                  name: 'berminat berlangganan PDAM (Alasan Ragu)',
                  visibleIf: "{berminat berlangganan PDAM} = 'Ragu-ragu'",
                  title: 'Alasan Ragu-ragu berlangganan PDAM ?',
                  isRequired: true,
                  placeholder: 'Tuliskan alasan keraguan tersebut',
                },
                {
                  type: 'text',
                  name: 'berminat berlangganan PDAM (Follow-up kembali)',
                  visibleIf: "{berminat berlangganan PDAM} = 'Ragu-ragu'",
                  title: 'Kapan bisa di follow up soal keraguan ini ?',
                  inputType: 'date',
                  placeholder: 'Tuliskan alasan keraguan tersebut',
                },
                {
                  type: 'expression',
                  name: 'question2',
                  visibleIf: "{berminat berlangganan PDAM} = 'Tidak'",
                  title: 'Coba ulangi edukasi kembali jika memungkinkan',
                },
                {
                  type: 'comment',
                  name: 'berminat berlangganan PDAM (Alasan Tidak Berminat)',
                  visibleIf: "{berminat berlangganan PDAM} = 'Tidak'",
                  title: 'Alasan Tidak Berminat berlangganan PDAM ?',
                  isRequired: true,
                  placeholder: 'Tuliskan alasan tidak berminat tersebut',
                },
              ],
              visibleIf: "{Target} = 'Non Pelanggan'",
              title: 'Final Survey',
            },
            {
              name: 'page8',
              elements: [
                {
                  type: 'radiogroup',
                  name: 'Program 3 Bulan Gratis Air',
                  visibleIf: "{Target} = 'Pelanggan'",
                  title:
                    'Treatment Program 3 Bulan Gratis Air (maks. pemakaian 15 m³) bila pemakaian di atas 15 m3, menjadi tanggungan pelanggan. bagi yang belum, akan di bantu menyambungkan ke instalasi rumah, pelanggan hanya menyediakan materialnya saja --- Bila ada program seperti ini ? Apakah berminat mengikutinya',
                  isRequired: true,
                  choices: ['Berminat', 'Ragu-ragu', 'Tidak'],
                },
                {
                  type: 'comment',
                  name: 'Program 3 Bulan Gratis Air (Alasan Ragu)',
                  visibleIf: "{Program 3 Bulan Gratis Air} = 'Ragu-ragu'",
                  title: 'Alasan Ragu-ragu mengikuti Program ini ?',
                  isRequired: true,
                  placeholder: 'Tuliskan alasan keraguan tersebut',
                },
                {
                  type: 'text',
                  name: 'Program 3 Bulan Gratis Air (Follow-up kembali)',
                  visibleIf: "{Program 3 Bulan Gratis Air} = 'Ragu-ragu'",
                  title: 'Kapan bisa di follow up soal keraguan ini ?',
                  inputType: 'date',
                  placeholder: 'Tuliskan alasan keraguan tersebut',
                },
                {
                  type: 'expression',
                  name: 'question12',
                  visibleIf: "{Program 3 Bulan Gratis Air} = 'Tidak'",
                  title: 'Coba ulangi edukasi kembali jika memungkinkan',
                },
                {
                  type: 'comment',
                  name: 'Program 3 Bulan Gratis Air (Alasan Tidak Berminat)',
                  visibleIf: "{Program 3 Bulan Gratis Air} = 'Tidak'",
                  title: 'Alasan Tidak Berminat mengikuti Program ini ?',
                  isRequired: true,
                  placeholder: 'Tuliskan alasan tidak berminat tersebut',
                },
              ],
              visibleIf: "{Target} = 'Pelanggan'",
              title: 'Final Survey',
            },
            {
              name: 'page3',
              elements: [
                {
                  type: 'file',
                  name: 'Foto Properti',
                  title: 'Foto Properti',
                  isRequired: true,
                  allowMultiple: true,
                  acceptedCategories: ['image'],
                  maxFiles: 3,
                  sourceType: 'camera',
                  fileOrPhotoPlaceholder:
                    'Pilih button dibawah untuk mengambil foto',
                  photoPlaceholder: 'Pilih button dibawah untuk mengambil foto',
                  filePlaceholder: 'Pilih button dibawah untuk mengambil foto',
                },
                {
                  type: 'file',
                  name: 'Foto Bersama Pelanggan',
                  title: 'Foto Bersama orang yg di survey',
                  allowMultiple: true,
                  acceptedCategories: ['image'],
                  maxFiles: 3,
                  sourceType: 'camera',
                  fileOrPhotoPlaceholder:
                    'Pilih button dibawah untuk mengambil foto',
                  photoPlaceholder: 'Pilih button dibawah untuk mengambil foto',
                  filePlaceholder: 'Pilih button dibawah untuk mengambil foto',
                },
              ],
              title: 'Foto dan Dokumentasi',
            },
          ],
          calculatedValues: [
            {
              name: 'var1',
            },
          ],
          progressBarShowPageTitles: true,
          showPreviewBeforeComplete: true,
        }}
      />
      {/* <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div> */}
    </AppLayout>
  );
}

const FormSurvey = ({ value }: any) => {
  return (
    <SurveyViewer
      json={value}
      lazyload={[
        lazyLoadChoice('npa', (keyword: string) => {
          return DataCustomer.filter((v) =>
            `${v.npa} ${v.name} ${v.kelurahan} ${v.perumahan}`
              .toLowerCase()
              .includes(keyword),
          )
            .slice(0, 100)
            .map((v) => ({
              value: String(v.npa),
              text: `${v.npa} - ${v.name} → (${v.kelurahan} - ${v.perumahan})`,
            }));
        }),
      ]}
      onChange={(sender, options) => {
        if (options.name === 'npa') {
          const selected = DataCustomer.find(
            (u) => String(u.npa) === options.value,
          );

          if (selected) {
            sender.setValue('p_npa', selected.npa);
            sender.setValue('p_telp', selected.telp);
            sender.setValue('p_name', selected.name);
            sender.setValue('p_kecamatan', selected.kecamatan);
            sender.setValue('p_kelurahan', selected.kelurahan);
            sender.setValue('p_alamat', selected.alamat);
            sender.setValue('p_perumahan', selected.perumahan);
            sender.setValue('p_lat', selected.lat);
            sender.setValue('p_long', selected.long);
            sender.setValue(
              'p_maps',
              `https://www.google.com/maps?q=${selected.lat},${selected.long}`,
            );
          }
        }

        //   console.log([options.name, options.value, options]);

        if (options.name == 'Jumlah Anggota Keluarga Di Rumah') {
          [
            {
              people: [2, 3, 4],
              min: 100_000,
              max: 200_000,
            },
            {
              people: [4, 5, 6],
              min: 200_000,
              max: 350_000,
            },
            {
              people: [7, 8],
              min: 350_000,
              max: 500_000,
            },
          ].map((v) => {
            if (v.people.includes(Number(options.value))) {
              sender.setValue('harga_min', v.min.toLocaleString());
              sender.setValue('harga_max', v.max.toLocaleString());
            }
          });
        }
      }}
    />
  );
};
