import EducationClient from "./EducationClient";

export const metadata = {
  title: "Academic Journey & Education | Tahmid Kabir - Computer Science Engineering SUST",
  description: "Educational excellence: B.Sc Computer Science & Engineering at SUST (CGPA 3.95/4.00), HSC at Notre Dame College Dhaka (GPA 5.00/5.00), strong foundation in algorithms, data structures, DBMS, and web technologies.",
  keywords: [
    // Core Identity & Academic Profile
    "Tahmid Kabir education",
    "Computer Science Engineering student",
    "SUST Computer Science",
    "Academic excellence",
    "High achieving student",
    "Outstanding academic record",
    
    // Current University Education
    "Shahjalal University Science Technology",
    "SUST CSE department",
    "Computer Science Engineering SUST",
    "B.Sc Computer Science Engineering",
    "Bachelor Computer Science",
    "CGPA 3.95",
    "High CGPA student",
    "Computer Science degree Bangladesh",
    "Engineering student Bangladesh",
    "SUST university student",
    
    // Academic Subjects & Specializations
    "Data Structures Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Computer Networking",
    "Operating Systems",
    "Web Technologies",
    "Problem Solving",
    "Software Engineering",
    "Computer Science fundamentals",
    "Programming fundamentals",
    
    // Previous Education - Notre Dame College
    "Notre Dame College Dhaka",
    "HSC Notre Dame",
    "Higher Secondary Certificate",
    "GPA 5.00 Notre Dame",
    "Perfect GPA HSC",
    "Science background student",
    "Mathematics Physics Chemistry",
    "Notre Dame College student",
    "Dhaka college education",
    
    // Previous Education - School Level
    "Mohammadpur Government High School",
    "SSC education Bangladesh",
    "Secondary School Certificate",
    "Strong academic foundation",
    "Mathematics General Science",
    "English Bangla education",
    
    // Academic Excellence & Achievements
    "Academic excellence Bangladesh",
    "High achieving CSE student",
    "Perfect GPA student",
    "Outstanding academic performance",
    "Consistent high grades",
    "Academic merit",
    "Educational achievements",
    "Scholarly excellence",
    
    // Skills & Learning Areas
    "Critical thinking skills",
    "Analytical skills development",
    "Problem solving abilities",
    "Research methodologies",
    "Practical applications",
    "Cutting-edge technologies",
    "Advanced computer science",
    "Technical education",
    
    // Education System & Location
    "Bangladesh education system",
    "Dhaka education",
    "Sylhet education",
    "University education Bangladesh",
    "Computer Science education BD",
    "Engineering education Bangladesh",
    "Higher education Bangladesh",
    
    // Academic Timeline & Progress
    "February 2020 June 2025",
    "2017-2019 HSC",
    "2013-2017 SSC",
    "Academic journey timeline",
    "Educational progression",
    "Continuous learning",
    
    // Career Preparation
    "Computer Science career preparation",
    "Software engineering preparation",
    "Industry-ready skills",
    "Technical foundation",
    "Professional development",
    "Career-oriented education",
    
    // Institution Recognition
    "Top university Bangladesh",
    "Prestigious college Dhaka",
    "Quality education institutions",
    "Renowned educational background",
    "Established institutions",
    
    // Future & Aspirations
    "Software engineer education",
    "Computer Science graduate",
    "Technology education",
    "Innovation in education",
    "Modern curriculum",
    "Industry-aligned education",
  ],
  authors: [{ name: "Tahmid Kabir" }],
  creator: "Tahmid Kabir",
  publisher: "Tahmid Kabir",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Academic Journey & Education | Tahmid Kabir - Computer Science Engineering SUST",
    description: "Exceptional academic record: B.Sc Computer Science & Engineering at SUST (CGPA 3.95/4.00), HSC at Notre Dame College Dhaka (Perfect GPA 5.00/5.00). Strong foundation in algorithms, data structures, DBMS, and modern technologies.",
    url: "https://tahmid-kabir-portfolio.vercel.app/education",
    siteName: "Tahmid Kabir Portfolio",
    images: [
      {
        url: "/Tahmid.jpg",
        width: 1207,
        height: 929,
        alt: "Tahmid Kabir - Computer Science Engineering Student SUST with Outstanding Academic Record",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Journey & Education | Tahmid Kabir",
    description: "B.Sc Computer Science & Engineering at SUST (CGPA 3.95/4.00), HSC Notre Dame College (GPA 5.00/5.00). Excellence in algorithms, data structures, and web technologies.",
    creator: "@tahmidkabir",
    images: ["/Tahmid.jpg"],
  },
  alternates: {
    canonical: "https://tahmid-kabir-portfolio.vercel.app/education",
  },
};

export default function EducationPage() {
  return <EducationClient />;
}
