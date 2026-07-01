// Contoh data sertifikat.
// Ganti/isi sesuai sertifikat kamu. Field "image" opsional:
// - taruh file di src/assets/image lalu import, ATAU
// - pakai URL, ATAU
// - biarkan kosong (card otomatis pakai placeholder ikon).
//
// "category" dipakai untuk filter, harus salah satu dari kategori
// yang ada di CertificatesPage (All dikecualikan).

const certificates = [
  {
    title: 'IT Support Professional',
    issuer: 'Huabao Indonesia',
    date: 'Feb 2026',
    category: 'IT Support',
    image: '',
    credentialUrl: '#',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Dicoding Indonesia',
    date: 'Nov 2025',
    category: 'Full Stack',
    image: '',
    credentialUrl: '#',
  },
  {
    title: 'React Front-End Development',
    issuer: 'Coursera',
    date: 'Aug 2025',
    category: 'Frontend',
    image: '',
    credentialUrl: '#',
  },
  {
    title: 'Backend with Node.js & Express',
    issuer: 'Udemy',
    date: 'Jul 2025',
    category: 'Backend',
    image: '',
    credentialUrl: '#',
  },
  {
    title: 'Database & SQL Fundamentals',
    issuer: 'freeCodeCamp',
    date: 'Mar 2025',
    category: 'Backend',
    image: '',
    credentialUrl: '#',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Jan 2025',
    category: 'Frontend',
    image: '',
    credentialUrl: '#',
  },
];

export default certificates;