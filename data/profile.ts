// Edit this file to customize your portfolio content.
// You generally should not need to touch anything in /components or /app
// unless you want to change the design or layout.

export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  org: string;
  start: string;
  end: string; // use "Present" for current roles
  summary: string;
  highlights?: string[];
  certificateImageUrl?: string;
  certificateLabel?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  start: string;
  end: string;
  notes?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  details?: string[];
}

export interface Profile {
  name: string;
  photo: string;
  realPhoto: string;
  role: string;
  apprenticeId: string;
  shortBio: string;
  longBio: string;
  forgeCohort: string;
  resumeUrl: string;
  skills: string[];
  contact: ContactInfo;
  projects: Project[];
  experience: Experience[];
  achievements: Achievement[];
  education: EducationItem[];
  certifications: Certification[];
}

const profile: Profile = {
  name: "Varsha Pattanshetti",
  photo: "/avatar.png",
  realPhoto: "/hero-photo.jpeg",
  role: "Full-Stack Software Developer",
  apprenticeId: "NCET-2027",
  shortBio:
    "Building modern web experiences with clean code, smart solutions, and a problem-solving mindset.",
  longBio:
    "I am a Full-Stack Web Developer skilled in building scalable, responsive web applications using modern technologies like React, Node.js, and MongoDB. I also have a keen interest in Artificial Intelligence and Machine Learning, applying data structures and algorithms to solve complex problems efficiently.",
  forgeCohort: "2027",
  resumeUrl: "/resume.pdf",
  skills: [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "C++",
    "Java",
    "Machine Learning",
    "HTML/CSS",
    "SQL",
    "GitHub",
  ],
  contact: {
    email: "varshapattanshetti03@gmail.com",
    phone: "9980669488",
    linkedin: "https://linkedin.com/in/varshapattanshetti",
    github: "https://github.com/varshapattanshetti",
  },
  projects: [
    {
      slug: "airbnb-clone",
      title: "Airbnb Clone",
      description:
        "Developed a full-stack property listing web app using Node.js, Express.js, MongoDB, and EJS architecture. Implemented RESTful CRUD operations with image handling.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      githubUrl: "https://github.com/varshapattanshetti",
      featured: true,
    },
    {
      slug: "fitness-clone",
      title: "Fitness Clone",
      description:
        "Built a fitness tracking app with user workouts, exercise logging, and progress summaries using modern web technologies.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
      githubUrl: "https://github.com/varshapattanshetti",
    },
    {
      slug: "krishi-vaani",
      title: "Krishi Vaani",
      description:
        "Acoustic Pest Detection & Early Warning System (Ongoing). Developing a smart agriculture solution that detects hidden crop pests using MEMS microphones, ESP32-S3, and LoRa communication. The system provides real-time farmer notifications while supporting sustainable farming through early pest detection.",
      tech: ["ESP32-S3", "LoRa", "MEMS Microphone", "IoT", "Solar Power"],
    },
  ],
  experience: [
    {
      role: "Web Developer Intern",
      org: "Nagarjuna Tech Solutions Pvt. Ltd.",
      start: "Jan 2025",
      end: "Apr 2025",
      summary:
        "Developed responsive web pages using HTML, CSS, JavaScript, and Bootstrap. Built and updated dynamic web applications.",
      highlights: [
        "Implemented UI components and improved user experience",
        "Fixed bugs and optimized website performance",
        "Ensured cross-browser compatibility across different web browsers",
      ],
      certificateImageUrl: "/WhatsApp Image 2026-07-14 at 5.00.23 PM (1).jpeg",
      certificateLabel: "Open internship certificate",
    },
  ],
  achievements: [
    {
      title: "🥇 1st Place - Ideathon",
      description:
        "Secured 1st place by presenting an innovative agriculture-based solution that demonstrated creativity, technical knowledge, and problem-solving skills.",
    },
    {
      title: "🏅 4th Place - Hackathon",
      description:
        "Achieved 4th place in the Hackathon conducted at PES College by collaborating with a team to develop a technology-driven solution within a limited time.",
    },
    {
      title: "🩰 Classical Bharatanatyam Dancer",
      description:
        "Completed the Junior Examination with distinction, demonstrating dedication, discipline, expressive performance, and a strong foundation in classical Bharatanatyam.",
    },
    {
      title: "🎻 Violin Player",
      description:
        "Completed the Junior Examination in Violin, showcasing technical proficiency, musical discipline, and a strong foundation in classical instrumental performance.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Information Science and Engineering | CGPA: 8.9",
      school: "Nagarjuna College of Engineering and Technology (NCET), Bengaluru, India",
      start: "2023",
      end: "2027",
    },
    {
      degree: "Pre-University (PCMB) | 81%",
      school: "Sanmarg PU College, Gadag",
      start: "2021",
      end: "2023",
    },
  ],
  certifications: [
    {
      name: "SPARC Workshop on Side Channel Attacks & Blockchain Technology",
      issuer: "IIT Tiruchirappalli",
      date: "Dec 2024",
      credentialUrl: "/Varsha-Pattanshetti-iit.pdf",
      imageUrl: "/Varsha-Pattanshetti-iit.pdf",
    },
    {
      name: "Participant – Metadome Emerging Tech Hackathon",
      issuer: "Metadome",
      date: "Dec 2024",
      credentialUrl: "/varsha-metadome.pdf",
      imageUrl: "/varsha-metadome.pdf",
    },
    {
      name: "Java Full Stack Development Internship",
      issuer: "Siva Complete Solutions Pvt. Ltd.",
      date: "Mar 17, 2025 – Jul 17, 2025",
      credentialUrl: "/varsha-siva.pdf",
      imageUrl: "/varsha-siva.pdf",
    },
    {
      name: "Participant – amBITion24 Hackathon (Open Innovation Domain)",
      issuer: "Bangalore Institute of Technology – Dept. of CSE",
      date: "Jul 2024",
      credentialUrl: "/ambition24-cert.jpg",
      imageUrl: "/ambition24-cert.jpg",
    },
    {
      name: "Participant – KAGADA 2025 Participation Certificate",
      issuer: "KAGADA 2025",
      date: "2025",
      credentialUrl: "/Varsha-KAGADA-2025.pdf",
      imageUrl: "/Varsha-KAGADA-2025.pdf",
    },

    {
      name: "HEALATHON – 10-Hour State-Level Healthcare Hackathon",
      issuer: "cHEAL, PES University",
      date: "Mar 2026",
      credentialUrl: "/healathon-cert.jpg",
      imageUrl: "/healathon-cert.jpg",
    },
    {
      name: "Vibe Xathon 1.0 – 24-Hour State-Level Hackathon",
      issuer: "Nagarjuna College of Engineering and Technology",
      date: "Mar 2026",
      credentialUrl: "/vibexathon-cert.pdf",
      imageUrl: "/vibexathon-cert.pdf",
    },
    {
      name: "Ideathon 2026 Participant",
      issuer: "Gopalan College of Engineering and Management",
      date: "Mar 2026",
      credentialUrl: "/varsha-gopalan.pdf",
      imageUrl: "/varsha-gopalan.pdf",
    },
    {
      name: "Ignite Bootcamp – Idea to Plan",
      issuer: "Wadhwani Foundation",
      date: "Apr 2026",
      credentialUrl: "/varsha-wadhwani.pdf",
      imageUrl: "/varsha-wadhwani.pdf",
    },
  ],
};

export default profile;
