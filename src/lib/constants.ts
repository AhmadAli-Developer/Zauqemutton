export const BUSINESS = {
  name: "Zauq-e-Mutton",
  tagline: "Fresh Meat",
  fullName: "Zauq-e-Mutton — Fresh Meat",
  phone: "03224145022",
  phoneFormatted: "0322-4145022",
  phoneIntl: "+923224145022",
  whatsapp: "https://wa.me/923224145022",
  telLink: "tel:03224145022",
  location: "Nurian Bazaar Inside Akbari Gate Lahore",
  mapSearch: "Zauq-e-Mutton Fresh Meat Nurian Bazaar Inside Akbari Gate Lahore",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Zauq-e-Mutton+Fresh+Meat+Nurian+Bazaar+Inside+Akbari+Gate+Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Zauq-e-Mutton+Fresh+Meat+Nurian+Bazaar+Inside+Akbari+Gate+Lahore",
  hours: {
    time: "8:00 AM - 3:00 PM",
    offDays: "Shop remains CLOSED on Tuesday & Wednesday",
    note: "Note: Shop remains CLOSED on Tuesday & Wednesday",
  },
  social: {
    instagram: "https://www.instagram.com/zauq_e_mutton?stkn=b3NteGJoZGp6YTZ0",
    facebook: "https://www.facebook.com/share/194wWDeVWM/",
  },
} as const;

export const GOAT_CUTS = [
  { id: "mix-meat", name: "Mix Meat (مکس گوشت)" },
  { id: "raan", name: "Raan — Leg (ران)" },
  { id: "dast", name: "Dast — Shoulder (دست)" },
  { id: "chaanp", name: "Chaanp — Chops & Ribs (چانپ)" },
  { id: "gardan", name: "Gardan — Neck (گردن)" },
  { id: "qeema", name: "Qeema — Mince (قیمہ)" },
  { id: "siri-payee", name: "Siri Payee (سری پائے)" },
  { id: "payee", name: "Payee — Trotters (پائے)" },
  { id: "siri", name: "Siri — Goat Head (سری)" },
  { id: "kaleeji", name: "Kaleeji — Liver (کلیجی)" },
  { id: "maghaz", name: "Maghaz — Brain (مغز)" },
  { id: "aujri", name: "Aujri — Tripes (اوجھڑی)" },
  { id: "phipra", name: "Phipra — Lungs (پھیپھڑا)" },
] as const;

export const MINCE_SIZES = [
  { id: "barik", name: "Barik (Fine) — باریک قیمہ" },
  { id: "normal", name: "Normal (Medium) — درمیانہ قیمہ" },
  { id: "mota", name: "Mota (Coarse) — موٹا قیمہ" },
] as const;

export type MenuCategory = "all" | "fresh-cuts" | "specialties";

export interface MenuItem {
  id: string;
  name: string;
  urduName: string;
  category: MenuCategory;
  description: string;
  badge?: string;
  emoji: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "ghosht",
    name: "Ghosht — Premium Mutton",
    urduName: "گوشت",
    category: "fresh-cuts",
    description:
      "Hand-selected premium mutton cuts from young, grass-fed goats. Tender, flavorful, and perfect for karahi, nihari, or BBQ.",
    badge: "Best Seller",
    emoji: "🥩",
  },
  {
    id: "qeema",
    name: "Qeema — Fine Ground Mince",
    urduName: "قیمہ",
    category: "fresh-cuts",
    description:
      "Freshly ground fine mince from premium mutton. Ideal for keema karahi, samosas, parathas, and pulao.",
    badge: "Popular",
    emoji: "🍖",
  },
  {
    id: "payee",
    name: "Payee — Cleaned Trotters",
    urduName: "پائے",
    category: "specialties",
    description:
      "Expertly cleaned and prepared goat trotters, perfect for the legendary Lahori Payee breakfast or siri payee.",
    emoji: "🦶",
  },
  {
    id: "siri",
    name: "Siri — Goat Head",
    urduName: "سری",
    category: "specialties",
    description:
      "Whole cleaned goat head, a traditional delicacy. Prepared fresh to order for authentic siri payee.",
    emoji: "🐐",
  },
  {
    id: "aujri",
    name: "Aujri — Cleaned Tripes",
    urduName: "اوجھڑی",
    category: "specialties",
    description:
      "Thoroughly cleaned and washed tripes, ready to cook. A rich, flavorful specialty for ojhri lovers.",
    emoji: "🫕",
  },
  {
    id: "kaleeji",
    name: "Kaleeji — Fresh Liver",
    urduName: "کلیجی",
    category: "specialties",
    description:
      "Fresh goat liver, perfect for tawa kaleeji or fried liver masala. Packed with iron and flavor.",
    badge: "Nutritious",
    emoji: "❤️",
  },
  {
    id: "maghaz",
    name: "Maghaz — Goat Brain",
    urduName: "مغز",
    category: "specialties",
    description:
      "Fresh goat brain (maghaz), cleaned with utmost precision. Renowned for authentic fried maghaz masala and Lahori delicacies.",
    badge: "Specialty",
    emoji: "🧠",
  },
  {
    id: "phipra",
    name: "Phipra — Lungs",
    urduName: "پھیپھڑا",
    category: "specialties",
    description:
      "Cleaned goat lungs, a traditional organ meat specialty. Light in flavor and perfect in mixed curries.",
    emoji: "🫁",
  },
];

export const MENU_CATEGORIES = [
  { id: "all" as MenuCategory, label: "All Items", count: MENU_ITEMS.length },
  {
    id: "fresh-cuts" as MenuCategory,
    label: "Fresh Cuts",
    count: MENU_ITEMS.filter((i) => i.category === "fresh-cuts").length,
  },
  {
    id: "specialties" as MenuCategory,
    label: "Specialties / Organs",
    count: MENU_ITEMS.filter((i) => i.category === "specialties").length,
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  urduTitle: string;
  description: string;
  icon: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "qurbani",
    title: "Year-Round Goat Qurbani & Slaughter",
    urduTitle: "سال بھر قربانی و ذبیحہ",
    description:
      "Goat slaughtering and Qurbani services are available year-round across all 12 months, as well as during Eid-ul-Adha. We handle healthy live goat selection, 100% Halal hygienic slaughter, custom cutting, and safe packing for Self Pickup or Ride.",
    icon: "CalendarCheck",
    features: [
      "Available year-round (outside Eid & all 12 months)",
      "Healthy, active live goat selection",
      "Hygienic Halal slaughter & custom cuts",
      "Self Pickup or send a Ride Rider",
    ],
  },
  {
    id: "sadqah",
    title: "Sadqah Goat Services",
    urduTitle: "صدقہ بکرا",
    description:
      "Fulfill your Sadqah with ease and complete confidence. We perform proper Halal slaughter of healthy goats and distribute fresh meat to deserving families on your behalf.",
    icon: "HeartHandshake",
    features: [
      "Healthy Sadqah goats & custom weight",
      "Distribution to verified deserving families",
      "100% Halal certified & hygienic process",
      "Full transparency & confirmation",
    ],
  },
  {
    id: "aqiqa",
    title: "Aqiqa Goat Arrangements",
    urduTitle: "عقیقہ بکرا",
    description:
      "Complete Aqiqa arrangements for your newborn boy or girl. From selecting premier goats to precise Halal slaughter, professional cutting, and packaging ready for pickup.",
    icon: "Baby",
    features: [
      "1 or 2 goat arrangements for newborns",
      "Hygienic meat cutting & separate packing",
      "Distribution coordination in Lahore",
      "Self Pickup or Ride Rider service",
    ],
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order Now" },
  { href: "/qurbani-sadqah", label: "Qurbani & Sadqah" },
  { href: "/contact", label: "Contact" },
] as const;

export const FEATURES = [
  {
    icon: "Shield",
    title: "100% Halal",
    description: "Certified Halal slaughter following Islamic guidelines",
  },
  {
    icon: "Leaf",
    title: "Farm Fresh",
    description: "Sourced daily from trusted local farms in Punjab",
  },
  {
    icon: "Truck",
    title: "Self Pickup / Ride",
    description: "Pick up yourself or send a ride rider directly to shop",
  },
  {
    icon: "Award",
    title: "Premium Quality",
    description: "Hand-selected cuts with no compromise on quality",
  },
] as const;
