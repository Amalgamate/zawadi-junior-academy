/**
 * CENTRAL SCHOOL CONFIGURATION
 * Edit this file to update contact details and school information site-wide.
 * Any value containing "[INSERT" is treated as NOT configured: contact buttons
 * stay disabled and the placeholder is shown in a visible warning style.
 */
export const school = {
  name: "Zawadi Junior Academy",
  shortName: "Zawadi",
  motto: "Rise & Shine",
  learningRange: "Play Group to Grade 9",
  town: "Isiolo",
  county: "Isiolo County",
  country: "Kenya",

  address: "Behind St. Paul Kiwanjani Sec School, Isiolo Kenya",
  phone: "+254 713 229 185",
  // International format, digits only, e.g. 2547XXXXXXXX
  whatsapp: "254713229185",
  email: "info@zawadijunioracademy.ac.ke",
  website: "www.zawadijunioracademy.ac.ke",
  admissionsEmail: "admissions@zawadijunioracademy.ac.ke",
  transportContact: "+254 713 229 185",
  hours: "Monday – Friday: 7:00 AM – 5:00 PM",

  // Paste a Google Maps share link and an embed URL once the location is verified.
  mapsUrl: "https://maps.google.com/?q=Kiwanjani,Isiolo,Kenya",
  mapsEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=37.5700%2C0.3300%2C37.6000%2C0.3600&layer=mapnik&marker=0.3404%2C37.5826",

  // Leave "" to hide an icon link. Use full https:// URLs.
  social: {
    facebook: "https://web.facebook.com/zawadijunioracademy",
    instagram: "https://www.instagram.com/zawadijunioracademy",
    youtube: "",
    tiktok: "https://www.tiktok.com/@zawadijunioracademy",
  },
};

export const isSet = (v: string): boolean => v.trim() !== "" && !v.includes("[INSERT");

export const telHref = (): string | null =>
  isSet(school.phone) ? `tel:${school.phone.replace(/[^+\d]/g, "")}` : null;

export const waHref = (text?: string): string | null =>
  isSet(school.whatsapp)
    ? `https://wa.me/${school.whatsapp.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`
    : null;

export const mailHref = (address: string = school.email): string | null =>
  isSet(address) ? `mailto:${address.trim()}` : null;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "School Life", to: "/school-life" },
  { label: "Transport", to: "/transport" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

/** Grade options used by the enquiry forms. Confirm the real structure with the school. */
export const gradeOptions = [
  "Play Group",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Not sure yet",
];
