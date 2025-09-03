// _data/courseData.js

export const courseData = [
  {
    id: "javascript",
    title: "JavaScript Mastery Course",
    subtitle: "Master JavaScript from basics to advanced concepts",
    lessons: 18,
    completed: 0,
    duration: "40h",
    progress: 0,
    sections: [
      {
        title: "JavaScript Fundamentals",
        label: "Basic",
        lessons: [
          {
            id: 'introduction-to-javascript',
            title: "Introduction to JavaScript",
            duration: "15 min",
            desc: "What is JavaScript and why should you learn it? Understanding the role of JavaScript in web development.",
            content: "Selamat datang di kelas JavaScript. Pelajaran ini akan memperkenalkan Anda pada dasar-dasar JavaScript, peranannya dalam pengembangan web, dan mengapa bahasa ini begitu penting. Kita akan membahas sejarah singkatnya, perannya di sisi client-side (browser) dan server-side (Node.js).",
            videoUrl: "https://www.youtube.com/embed/W6NZfCO5ucI",
          },
          {
            id: 'variables-and-data-types',
            title: "Variables and Data Types",
            duration: "20 min",
            desc: "Learn about different data types in JavaScript: strings, numbers, booleans, and more.",
            content: "Pada pelajaran ini, Anda akan mempelajari tentang variabel, wadah untuk menyimpan data. Kita akan membahas cara mendeklarasikan variabel dengan 'var', 'let', dan 'const', serta perbedaan mendasar di antara ketiganya. Selanjutnya, kita akan mendalami berbagai tipe data primitif seperti string, number, boolean, null, dan undefined.",
            videoUrl: "https://www.youtube.com/embed/s9SH-04z4f4",
          },
          {
            id: 'working-with-variables-exercise',
            title: "Working with Variables - Exercise",
            duration: "10 min",
            desc: "Practice declaring and using variables in JavaScript with hands-on exercises.",
            content: "Ini adalah latihan untuk menguji pemahaman Anda tentang variabel. Buatlah sebuah variabel `name` dengan nilai string 'John Doe' dan tampilkan di konsol.",
            videoUrl: null,
            exercise: {
              objective: "Buat variabel `name` dan berikan nilai string 'John Doe'. Lalu cetak variabel tersebut ke konsol.",
              initialCode: "let name;\nconsole.log(name);",
              solutionCode: "let name = 'John Doe';\nconsole.log(name);",
            },
          },
        ],
      },
      {
        title: "Control Structures",
        label: "Intermediate",
        lessons: [
          {
            id: 'understanding-the-dom',
            title: "Understanding the DOM",
            duration: "18 min",
            desc: "Learn what the DOM is and how to select and modify elements.",
            content: "DOM (Document Object Model) adalah representasi terstruktur dari dokumen HTML dalam bentuk pohon. Ini memungkinkan JavaScript untuk mengakses dan memanipulasi konten, struktur, dan gaya halaman web.",
            videoUrl: "https://www.youtube.com/embed/M23gO4G19Cg",
          },
        ],
      },
    ],
    nextUp: {
      title: "React Fundamentals",
      status: "Coming Soon",
    },
  },
  {
    id: "html",
    title: "HTML Fundamentals Course",
    subtitle: "Build the foundation of web pages with a structured approach",
    lessons: 10,
    completed: 0,
    duration: "10h",
    progress: 0,
    sections: [
      {
        title: "HTML Basics",
        label: "Basic",
        lessons: [
          {
            id: 'introduction-to-html',
            title: "Introduction to HTML",
            duration: "10 min",
            desc: "Learn the basics of HTML, the language of the web.",
            content: "HTML (HyperText Markup Language) adalah bahasa standar untuk membuat halaman web dan aplikasi web. Pelajaran ini akan membahas tag, elemen, dan struktur dasar dokumen HTML.",
            videoUrl: "https://www.youtube.com/embed/pQN-oB4P8jI",
          },
          {
            id: 'html-tags-and-elements',
            title: "Common HTML Tags and Elements",
            duration: "15 min",
            desc: "Explore the most used HTML tags for text, links, and images.",
            content: "Pelajaran ini akan memperkenalkan tag HTML yang paling umum, seperti `<h1>`, `<p>`, `<a>`, `<img>`, dan `<ul>`. Kita akan belajar bagaimana menggunakan tag-tag ini untuk menyusun konten di halaman web.",
            videoUrl: "https://www.youtube.com/embed/6iJ4B-481z8",
          },
        ],
      },
    ],
    nextUp: null,
  },
];