export interface Project {
  id: number;
  title: string;
  type: string;
  location: string;
  authority: string;
  bua: string;
  description: string;
  details: string[];
  image: string;
  analysis?: string;
  foundation?: string;
  software?: string[];
  technicalImages?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Autumn House",
    type: "Mixed-use",
    location: "Al Jaddaf Waterfront",
    authority: "DDA",
    bua: "N/A",
    description: "Autumn House is a well-planned mixed-use development located in the prime area of Al Jaddaf Waterfront. Designed to provide both residential comfort and commercial convenience, the project offers a seamless integration of modern architecture, efficient layouts, and lifestyle-focused design. Autumn House combines elegant design with functional living, contributing to the evolving urban landscape of Al Jaddaf. The inclusion of retail outlets enhances community interaction and adds commercial value to the development.",
    details: [
      "Residential Units: 33 Studio, 2 One-Bedroom, 45 Two-Bedroom (Total 80)",
      "3 Retail Outlets (Ground Floor)",
      "108 Dedicated Parking Spaces",
      "Typology: Mixed-use (Commercial + Residential)"
    ],
    image: "/Images/Arham-Dubai-Cam06-c-copy2.webp",
    software: ["Etabs", "Safe", "Rcm", "Prokon"],
    technicalImages: ["/Images/Screenshot 2026-03-24 232542.png"]
  },
  {
    id: 2,
    title: "Mosque for 200 people",
    type: "Religious",
    location: "Al Rams",
    authority: "Rak Authority",
    bua: "2280 m2",
    description: "Structural design of a community mosque for 200 people, including complex minaret and dome structural modeling. The project involves comprehensive structural analysis to ensure stability and safety of the mosque and its minaret.",
    details: [
      "Minar & Dome Etabs model",
      "Structural Design of Main Prayer Hall",
      "Seismic Analysis for Slender Structures",
      "Mosque + Minar"
    ],
    image: "/Images/Screenshot 2026-03-24 232556.png",
    software: ["Etabs"],
    technicalImages: ["/Images/Screenshot 2026-03-24 232556.png"]
  },
  {
    id: 3,
    title: "L & S Residency",
    type: "Residential",
    location: "Wadi Al Safa 2, Liwan",
    authority: "Dubai Municipality",
    bua: "N/A",
    description: "At Ramesh & Associate, every project is an opportunity to blend creativity, functionality, and cultural context into meaningful spaces. We’re excited to share that construction has begun on the G+4+R L&S Residential Building in Wadi Al Safa 2, Liwan — a project close to our hearts. This building isn’t just another structure; it represents our commitment to creating comfortable, sustainable, and elegant living environments. Our design focuses on maximizing natural light, efficient space planning, and integrating modern amenities, all while respecting the unique character of the Liwan community.",
    details: [
      "Architectural Design & Structural Planning",
      "MEP Coordination",
      "Project Supervision",
      "Working alongside Shaharco (Contractor)"
    ],
    image: "/Images/LS-C-jpg-1024x577.webp",
    software: ["Safe", "Revit", "Etabs"],
    technicalImages: [
      "/Images/Screenshot 2026-03-24 232610.png",
      "/Images/Screenshot 2026-03-24 232624.png"
    ]
  },
  {
    id: 4,
    title: "Emaar Command Center",
    type: "Commercial Office",
    location: "Downtown Dubai",
    authority: "Emaar",
    bua: "N/A",
    description: "Ramesh & Associates is honored to serve as the Design & Supervision Consultant for the Emaar Command Center, located near the Burj Khalifa in Downtown Dubai. In collaboration with Emaar and City Expert Contractors, we’re delivering a cutting-edge facility that sets new standards in smart city innovation, operational excellence, and safety. Every detail, from design to materials, is crafted with precision and care to support Dubai’s vision for a smarter future.",
    details: [
      "Design & Supervision Consultant",
      "Smart City Innovation",
      "Operational Excellence & Safety",
      "Located near Burj Khalifa"
    ],
    image: "/Images/Emmar.webp.bv_resized_desktop.webp.bv.webp",
    technicalImages: ["/Images/Screenshot 2026-03-24 232700.png"]
  },
  {
    id: 5,
    title: "Mansion Arete - M10",
    type: "Villa",
    location: "District One",
    authority: "Meydan",
    bua: "18,750 SQM",
    description: "The Mansion Arete - M10 is an exquisite residential project situated in District One. Designed as a modern architectural gem, the villa merges sleek contemporary design with timeless elegance. Every aspect has been carefully crafted from open-plan living areas that invite abundant natural light to meticulously landscaped outdoor spaces that seamlessly integrate with the surroundings. Featuring premium materials, high-end finishes, and advanced engineering systems, the villa ensures both comfort and durability. More than just a residence, the M10 Villa stands as a symbol of architectural innovation and refined living in District One.",
    details: [
      "DAT Scope: Urban Redevelopment",
      "Open-plan living areas",
      "Meticulously landscaped outdoor spaces",
      "Premium materials & high-end finishes",
      "Sustainable design elements"
    ],
    image: "/Images/Front.jpg"
  },
  {
    id: 6,
    title: "UAS Luxury Residence",
    type: "Luxury Villa",
    location: "Umm Al Sheif",
    authority: "Dubai Municipality",
    bua: "3005.92 m2",
    description: "B + G + 1 + R + Swimming Pool. Structural design emphasizing open spaces and structural efficiency.",
    details: [
      "Structural Design & Technical supervision",
      "Open-plan Structural Framing",
      "High-end Residential Engineering"
    ],
    image: "/Images/Screenshot 2026-03-24 232720.png"
  },
  {
    id: 7,
    title: "RPM Pearl Jumeira Villa",
    type: "Luxury Villa",
    location: "Pearl Jumeira",
    authority: "DDA",
    bua: "3700 m2",
    description: "B+G + 1 + R + Swimming Pool + Services. Advanced structural modeling for a prestigious coastal location.",
    details: [
      "Structural Design & Technical supervision",
      "Etabs Structural Modeling",
      "Coastal Environment Structural Considerations"
    ],
    image: "/Images/Screenshot 2026-03-24 232729.png",
    software: ["Etabs"]
  }
];
