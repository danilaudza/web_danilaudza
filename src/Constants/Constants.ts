import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    logo,
    earth,
    hotel,
    threejs,
    innoacademy,
    ugm,
    bca,
    dokumenter,
    github,
    youtube,
    instagram
  } from "../Assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Designer",
      icon: mobile,
    },
    {
      title: "Photographer",
      icon: backend,
    },
    {
      title: "Videographer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Videographer",
      company_name: "Myself",
      icon: logo,
      iconBg: "#383E56",
      date: "Mei 2018 - Sekarang(?)",
      points: [
        "Membuat video perpisahan SMA untuk ditampilkan dalam acara pentas seni tutup tahun.",
        "Berkolaborasi dengan tim dengan latar belakang dan kemampuan yang berbeda untuk meningkatkan kualitas produk.",
        "Menjuarai beberapa lomba videografi dengan tingkatan umum.",
        "Berpartisipasi dalam workshop Film dokumenter.",
        "Dapat menjadi pilot dari drone DJI maupun Freestyle"
      ],
    },
    {
      title: "Creative",
      company_name: "Innovative Academy",
      icon: innoacademy,
      iconBg: "#EA9274",
      date: "September 2021 - Februari 2022",
      points: [
        "Menyediakan sarana untuk Workshop inkubasi startup-startup di lingkungan UGM.",
        "Mengatur design dan video dari sosial media Innovative Academy.",
        "Menerapkan konsep animasi 2D yang responsif pada produk Innovative Academy untuk bisa menggait pembaca.",
      ],
    },
    {
      title: "Videografer & Online Editor",
      company_name: "DPH",
      icon: ugm,
      iconBg: "#383E56",
      date: "Maret 2022 - Juni 2022",
      points: [
        "Mengaplikasikan alur professional untuk mengerjakan suatu video.",
        "Menjadi online editor yang bertugas untuk melakukan finishing touch seperti memberi color grading dan efek-efek yang dibutuhkan.",
        "Membuat video untuk UKM sebagai sarana promosi dan pengenalan para UKM terkait.",
      ],
    },
    {
      title: "IT Specialist",
      company_name: "BCA",
      icon: bca,
      iconBg: "#E6DEDD",
      date: "Oktober 2022 - Sekarang",
      points: [
        "Fly with BCA!",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dokumenter",
      description:
        "Video dokumenter Museum Jenderal Besar H.M. Soeharto yang berisi tentang peninggalan peninggalan Jenderal Besar Soeharto yang diresmikan pada tahun 2013.",
      tags: [
        {
          name: "video",
          color: "blue-text-gradient",
        },
        {
          name: "dokumenter",
          color: "green-text-gradient",
        },
        {
          name: "davinci",
          color: "pink-text-gradient",
        },
      ],
      image: dokumenter,
      source_code_link: "https://youtu.be/oEkO3AiS13I",
      icon : youtube,
    },
    {
      name: "3D Earth",
      description:
        "Video Loop 3D yang dibuat menggunakan Blender dengan mengaplikasikan plugin plugin tertentu dan direndenr menggunakan cycles.",
      tags: [
        {
          name: "video",
          color: "blue-text-gradient",
        },
        {
          name: "3D",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: earth,
      source_code_link: "https://www.instagram.com/reel/CbXttfmpVc_/?utm_source=ig_web_copy_link",
      icon : instagram,
    },
    {
      name: "InTheSky Hotel",
      description:
        "Demo pembuatan frontend website hotel InTheSky untuk kebutuhan tugas kuliah menggunakan vanilla html dengan tailwindcss",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hotel,
      source_code_link: "https://github.com/danilaudza/InTheSky-Hotel",
      icon : github,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };