import {
  BedDouble,
  BookOpen,
  Building2,
  Camera,
  Car,
  Cctv,
  CircleHelp,
  Clock3,
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
    phone: "Add phone number",
    whatsappNumber: import.meta.env['VITE_SCLAR_WHATSAPP_NUMBER'] ?? "",
    whatsappDisplay: "Add WhatsApp number",
    email: "Add email address",
    address: "Kota Rd, Kota, Raipur, Chhattisgarh 492010",
    workingHours: "Add working hours",
    mapsUrl: "https://maps.app.goo.gl/8scvcMf8Bchqjst28",
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
      description: "Modern rooms designed around student routines.",
      icon: Home,
    },
    {
      title: "24/7 Security",
      description: "Safety information is structured for parents and students.",
      icon: ShieldCheck,
    },
    {
      title: "High-Speed Wi-Fi",
      description: "Connectivity details can be confirmed and updated here.",
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
      description: "Bed setup details can be edited after confirmation.",
      icon: BedDouble,
      confirmation: "Confirm availability",
    },
    {
      name: "Study Area",
      description: "Study table and quiet-zone details can be added.",
      icon: LampDesk,
      confirmation: "Confirm availability",
    },
    {
      name: "High-Speed Wi-Fi",
      description: "Plan speed and access policy can be added.",
      icon: Wifi,
      confirmation: "Confirm availability",
    },
    {
      name: "Security",
      description: "Entrance and management process can be described.",
      icon: ShieldCheck,
      confirmation: "Confirm availability",
    },
    {
      name: "Food/Dining",
      description: "Meal plan and dining timings can be added.",
      icon: Utensils,
      confirmation: "Confirm availability",
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
    mapUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjA7unI-v-WAxUAAAAAHQAAAAAQBg..i&fvr=1&pvq=Cg0vZy8xMWgxaG52ZDQxIh0KF3NjYWxhciBuZXN0IGJveXMgaG9zdGVsEAIYAw&lqi=ChdzY2FsYXIgbmVzdCBib3lzIGhvc3RlbEiB4bT6ha-AgAhaLRAAEAEQAhADGAEYAyIXc2NhbGFyIG5lc3QgYm95cyBob3N0ZWwqBggDEAIQA5IBC2JveXNfaG9zdGVs&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3a28dd686877a371:0xb07d1e3e32346254",
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
    { question: "What room types are available?", answer: "Add the available room types and occupancy details." },
    { question: "What is included in the hostel fee?", answer: "Add inclusions such as food, utilities, laundry or other services." },
    { question: "Is food available?", answer: "Add food availability, meal timings and menu details." },
    { question: "Is Wi-Fi available?", answer: "Add Wi-Fi speed, access and usage policy details." },
    { question: "What are the hostel timings?", answer: "Add entry, exit and quiet-hour timings." },
    { question: "Is there CCTV/security?", answer: "Add confirmed security and CCTV details." },
    { question: "What documents are required?", answer: "Add ID, student proof, guardian details and other required documents." },
    { question: "What is the admission process?", answer: "Add enquiry, visit, booking and admission steps." },
    { question: "Is there a refundable security deposit?", answer: "Add deposit amount and refund policy details." },
    { question: "What are the hostel rules?", answer: "Add the latest rules and resident guidelines." },
    { question: "How can parents contact management?", answer: "Add official parent communication channels." },
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
