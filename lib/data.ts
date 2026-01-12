export interface Property {
  id: string;
  name: string;
  slug: string;
  address: string;
  description: string;
  price: number;
  amenities: string[];
  coverImage: string;
  images: string[];
  mapUrl: string;
}

export const properties: Property[] = [
  {
    id: "res-at-kew",
    name: "Res@Kew",
    slug: "res-at-kew",
    address: "Kew Street, Brixton",
    description: "Located just 500m from UJ APK Gate 4, Res@Kew offers premium student living with a focus on community and security. Features single and en-suite rooms designed for academic success.",
    price: 4500,
    amenities: [
      "Single Rooms",
      "En-suite Bathrooms",
      "Self-contained Units",
      "Fast Free WiFi",
      "Laundry Facilities",
      "24/7 Security",
      "On-property caretaker",
    ],
    coverImage: "/assets/Res@Kew images/8.jpeg", // Using image 8 as requested for tile
    images: Array.from({ length: 12 }, (_, i) => `/assets/Res@Kew images/${i + 1}.jpeg`), // Assuming 1-12.jpeg exists
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.4578857421875!2d27.995!3d-26.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEwJzU4LjgiUyAyN8KwNTknNDIuMCJF!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza", // Placeholder embed
  },
  {
    id: "the-diep",
    name: "The Diep",
    slug: "the-diep",
    address: "Fulham Street, Brixton",
    description: "The Diep offers a modern, stylish environment for students who value privacy and comfort. Located within walking distance to UJ, it provides the perfect balance of study and relaxation.",
    price: 4500,
    amenities: [
      "Single Rooms",
      "En-suite Bathrooms",
      "Study Desks",
      "Free Uncapped WiFi",
      "Laundry Machines",
      "Swimming Pool",
      "Secure Parking",
      "24/7 Security"
    ],
    coverImage: "/assets/The Diep images/4.jpeg", // Using image 4 as requested for tile
    images: Array.from({ length: 6 }, (_, i) => `/assets/The Diep images/${i + 1}.jpeg`), // Assuming 1-6.jpeg exists
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.4578857421875!2d27.995!3d-26.183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEwJzU4LjgiUyAyN8KwNTknNDIuMCJF!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza", // Placeholder embed
  }
];

export const CONTACT_NUMBER = "27816345818"; // WhatsApp format
export const HERO_IMAGE = "/assets/Res@Kew images/5.jpeg";
