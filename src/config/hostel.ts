import {
  BedDouble,
  BookOpen,
  Building2,
  Camera,
  Car,
  Cctv,
  CircleHelp,
  DoorOpen,
  Dumbbell,
  Home,
  LampDesk,
  MapPin,
  MessageCircle,
  PlugZap,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Utensils,
  WashingMachine,
  Wifi,
} from "lucide-react";

export type RoomType = {
  name: string;
  description: string;
  occupancy: string;
  details: string[];
  price: string;
  featured?: boolean;
};

export type Facility = {
  name: string;
  description: string;
  icon: typeof BedDouble;
  confirmation: string;
};

export type FoodDay = {
  day: string;
  meals: {
    lunch: string;
    dinner: string;
  };
};

export const hostelConfig = {
  brand: {
    name: "Sclar Nest Boys Hostel Official",
    shortName: "Sclar Nest",
    subName: "Boys Hostel Official",
    tagline: "Comfort. Safety. Community.",
    positioning:
      "Premium boys hostel accommodation designed for comfort, safety and a focused student lifestyle.",
  },
  contact: {
    phone: "+91 81201 10466",
    whatsappNumber: import.meta.env['VITE_SCLAR_WHATSAPP_NUMBER'] ?? "918120110466",
    whatsappDisplay: "+91 81201 10466",
    email: "Add email address",
    address: "Kota Rd, Kota, Raipur, Chhattisgarh 492010",
    mapsUrl: "https://maps.app.goo.gl/8scvcMf8Bchqjst28",
    owner: "Nikhil Dang",
    enquiryMessage:
      "Hello Sclar Nest Boys Hostel Official, I would like to enquire about hostel accommodation.",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Facilities", href: "#facilities" },
    { label: "Food", href: "#food" },
    { label: "Rules", href: "#rules" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],
  trustCards: [
    {
      title: "Comfortable Living",
      description: "Comfortable 2, 3 and 4 sharing rooms for students.",
      icon: Home,
    },
    {
      title: "24/7 Security",
      description: "CCTV and security are available, and the hostel is open 24×7.",
      icon: ShieldCheck,
    },
    {
      title: "High-Speed Wi-Fi",
      description: "Wi-Fi is available for residents.",
      icon: Wifi,
    },
    {
      title: "Student Focused",
      description: "Spaces planned for study, rest and daily convenience.",
      icon: BookOpen,
    },
  ],
  highlights: [
    "Comfortable accommodation",
    "Safe surroundings",
    "Study-friendly environment",
    "Essential amenities",
    "Student-friendly atmosphere",
    "Convenient location",
  ],
  roomTypes: [
    {
      name: "Double Sharing",
      description: "Comfortable shared accommodation with a balanced environment.",
      occupancy: "2 students",
      details: ["Beds", "Storage", "Study area", "Fan/AC: confirm", "Bathroom: confirm"],
      price: "Add price",
      featured: true,
    },
    {
      name: "Triple Sharing",
      description: "Budget-friendly accommodation for students.",
      occupancy: "3 students",
      details: ["Beds", "Storage", "Study area", "Fan/AC: confirm", "Bathroom: confirm"],
      price: "Add price",
    },
    {
      name: "Four Sharing",
      description: "Economical shared accommodation for students.",
      occupancy: "4 students",
      details: ["Beds", "Storage", "Study area", "Fan/AC: confirm", "Bathroom: confirm"],
      price: "Add price",
    },
  ] satisfies RoomType[],
  roomHotspots: [
    { label: "Bed", detail: "Sleeping setup details can be added here." },
    { label: "Study Table", detail: "Desk and chair information can be confirmed here." },
    { label: "Wardrobe", detail: "Storage dimensions can be added here." },
    { label: "Lighting", detail: "Lighting details can be updated here." },
    { label: "Window", detail: "Ventilation and window details can be confirmed here." },
    { label: "Storage", detail: "Additional storage notes can be added here." },
  ],
  facilities: [
    {
      name: "Comfortable Beds",
      description: "Comfortable beds are available in every sharing room.",
      icon: BedDouble,
      confirmation: "Available",
    },
    {
      name: "Study Area",
      description: "Study table and quiet-zone details can be added.",
      icon: LampDesk,
      confirmation: "Confirm availability",
    },
    {
      name: "High-Speed Wi-Fi",
      description: "Wi-Fi is available for residents.",
      icon: Wifi,
      confirmation: "Available",
    },
    {
      name: "Security",
      description: "CCTV and security are available at the hostel.",
      icon: ShieldCheck,
      confirmation: "Available",
    },
    {
      name: "Food/Dining",
      description: "Food is available for residents.",
      icon: Utensils,
      confirmation: "Available",
    },
    {
      name: "Clean Bathrooms",
      description: "Shared or attached bathroom details can be added.",
      icon: ShowerHead,
      confirmation: "Confirm availability",
    },
    {
      name: "Laundry",
      description: "Laundry schedule and charges can be added.",
      icon: WashingMachine,
      confirmation: "Confirm availability",
    },
    {
      name: "Power Backup",
      description: "Backup coverage details can be confirmed.",
      icon: PlugZap,
      confirmation: "Confirm availability",
    },
    {
      name: "Parking",
      description: "Two-wheeler or car parking details can be added.",
      icon: Car,
      confirmation: "Confirm availability",
    },
    {
      name: "Housekeeping",
      description: "Cleaning schedule can be updated here.",
      icon: Sparkles,
      confirmation: "Confirm availability",
    },
    {
      name: "CCTV",
      description: "Surveillance coverage can be described after confirmation.",
      icon: Cctv,
      confirmation: "Confirm availability",
    },
    {
      name: "Common Area",
      description: "Common-space details can be added here.",
      icon: Dumbbell,
      confirmation: "Confirm availability",
    },
  ] satisfies Facility[],
  foodMenu: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
    (day) => ({
      day,
      meals: {
        lunch: "Lunch Menu",
        dinner: "Dinner Menu",
      },
    }),
  ) satisfies FoodDay[],
  safety: [
    { title: "CCTV surveillance", description: "Add confirmed coverage areas and monitoring details." },
    { title: "Secure entrance", description: "Add entry process and access details." },
    { title: "Visitor management", description: "Add visitor policy and timings." },
    { title: "Responsible management", description: "Add manager contact process after confirmation." },
    { title: "Emergency support", description: "Add verified emergency contact process." },
    { title: "Safe student environment", description: "Add hostel conduct and safety practices." },
  ],
  study: [
    "Quiet study environment",
    "Study tables",
    "High-speed internet",
    "Convenient location",
    "Comfortable sleeping environment",
    "Student-friendly surroundings",
  ],
  galleryCategories: ["Rooms", "Building", "Facilities", "Food", "Common Area", "Surroundings"],
  location: {
    address: "Kota Rd, Kota, Raipur, Chhattisgarh 492010",
    nearbyColleges: "Near NIT Raipur",
    nearbyCoaching: "Add nearby coaching institutes",
    nearbyMarkets: "Ramnagar market",
    hospitals: "Near Suyash Hospital",
    transportation: "Add transportation options",
    landmarks: "NIT Raipur and Suyash Hospital",
    mapUrl: "https://maps.app.goo.gl/8scvcMf8Bchqjst28",
    items: [
      { label: "Address", value: "Kota Rd, Kota, Raipur, Chhattisgarh 492010", icon: MapPin },
      { label: "Nearby college", value: "NIT Raipur", icon: Building2 },
      { label: "Market", value: "Ramnagar market", icon: DoorOpen },
      { label: "Hospital", value: "Suyash Hospital", icon: ShieldCheck },
    ],
  },
  rules: [
    "Maintain cleanliness",
    "Respect quiet hours",
    "Follow visitor guidelines",
    "Take care of hostel property",
    "Follow check-in/check-out timings",
    "Respect fellow residents",
  ],
  parents: [
    "Safe accommodation",
    "Clear communication",
    "Clean environment",
    "Student-focused facilities",
    "Transparent hostel information",
  ],
  testimonials: [
    { name: "Resident Name", context: "Course / College", quote: "Testimonial" },
    { name: "Resident Name", context: "Course / College", quote: "Testimonial" },
    { name: "Resident Name", context: "Course / College", quote: "Testimonial" },
  ],
  faqs: [
    { question: "What room types are available?", answer: "2 sharing, 3 sharing and 4 sharing rooms are available." },
    { question: "What is included in the hostel fee?", answer: "Add inclusions such as food, utilities, laundry or other services." },
    { question: "Is food available?", answer: "Yes, food is available for residents." },
    { question: "Is Wi-Fi available?", answer: "Yes, Wi-Fi is available for residents." },
    { question: "What are the hostel timings?", answer: "The hostel is open 24×7." },
    { question: "Is there CCTV/security?", answer: "Yes, CCTV and security are available at the hostel." },
    { question: "What documents are required?", answer: "Add ID, student proof, guardian details and other required documents." },
    { question: "What is the admission process?", answer: "Add enquiry, visit, booking and admission steps." },
    { question: "Is there a refundable security deposit?", answer: "Add deposit amount and refund policy details." },
    { question: "What are the hostel rules?", answer: "Add the latest rules and resident guidelines." },
    { question: "How can parents contact management?", answer: "Parents can contact the hostel owner, Nikhil Dang, on +91 81201 10466 by call or WhatsApp." },
  ],
  socialLinks: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
};

export const getWhatsAppUrl = () => {
  const encodedMessage = encodeURIComponent(hostelConfig.contact.enquiryMessage);
  const number = hostelConfig.contact.whatsappNumber.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${encodedMessage}` : `https://wa.me/?text=${encodedMessage}`;
};

export const seo = {
  title: "Sclar Nest Boys Hostel Official | Premium Boys Hostel",
  description:
    "Discover Sclar Nest Boys Hostel Official — comfortable, secure and student-friendly accommodation with modern facilities. Explore rooms, facilities and hostel information.",
  canonical: "https://id-preview--c97e9af9-1ebc-40d6-9662-8d81f8f155a0.lovable.app/",
};
