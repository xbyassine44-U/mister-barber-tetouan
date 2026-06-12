export const siteData = {
  name: "Mister Barber",
  tagline: "Premium Hair Styling & Grooming",
  description:
    "Au cœur de Tétouan, Mister Barber réinvente l'art du grooming masculin. Un sanctuaire dédié à l'élégance où chaque coupe est une œuvre d'art.",
  location: {
    address: "5 Av. Ben Aboud, Tétouan 93000",
    landmark: "À côté de Crémier Maimoun",
    city: "Tétouan",
    region: "Tanger-Tétouan-Al Hoceïma",
    country: "Maroc",
    coordinates: {
      lat: 35.5697,
      lng: -5.368,
    },
    googleMapsUrl: "https://maps.google.com/?q=5+Av.+Ben+Aboud,+T%C3%A9touan+93000",
  },
  contact: {
    phone: "+212 675-667999",
    phoneRaw: "+212675667999",
    email: "info@misterbarber.com",
    instagram: "misterbarber_44",
    instagramUrl: "https://www.instagram.com/misterbarber_44/",
  },
  hours: [
    { day: "Lun - Ven", hours: "09:00 - 23:00" },
    { day: "Samedi", hours: "08:00 - 23:00" },
    { day: "Dimanche", hours: "10:00 - 23:00" },
  ],
  services: [
    {
      id: 1,
      name: "Coupe Homme",
      description: "Coupe précise aux ciseaux ou tondeuse, lavage et coiffage inclus.",
      price: "40 DH",
      duration: "30 min",
      icon: "✂️",
    },
    {
      id: 2,
      name: "Taille de Barbe",
      description: "Taille et sculpture de barbe à la tondeuse et au rasoir de précision.",
      price: "20 DH",
      duration: "20 min",
      icon: "🪒",
    },
    {
      id: 3,
      name: "Barbe Spéciale",
      description: "Taille de barbe premium avec serviette chaude et huile essentielle.",
      price: "30 DH",
      duration: "30 min",
      icon: "✨",
    },
    {
      id: 4,
      name: "Coiffure",
      description: "Coiffage professionnel avec produits premium.",
      price: "15 DH",
      duration: "15 min",
      icon: "💈",
    },
    {
      id: 5,
      name: "Lavage",
      description: "Lavage revitalisant avec shampooing professionnel.",
      price: "10 DH",
      duration: "10 min",
      icon: "🧴",
    },
    {
      id: 6,
      name: "Coupe Enfant",
      description: "Coupe pour enfants (-12 ans) dans une ambiance décontractée.",
      price: "30 DH",
      duration: "25 min",
      icon: "👦",
    },
    {
      id: 7,
      name: "Traitement Kératine",
      description: "Lissage brésilien à la kératine pour cheveux soyeux et sans frisottis.",
      price: "200-300 DH",
      duration: "90 min",
      icon: "🌟",
    },
    {
      id: 8,
      name: "Traitement Protéines",
      description: "Soin profond aux protéines pour cheveux abîmés ou colorés.",
      price: "300-400 DH",
      duration: "90 min",
      icon: "💎",
    },
    {
      id: 9,
      name: "Soin Visage",
      description: "Nettoyage profond du visage avec vapeur et masque purifiant.",
      price: "120 DH",
      duration: "45 min",
      icon: "🌿",
    },
    {
      id: 10,
      name: "Vapeur Faciale",
      description: "Soin vapeur pour ouvrir les pores et purifier l'épiderme.",
      price: "50 DH",
      duration: "20 min",
      icon: "♨️",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Yassine C.",
      rating: 5,
      text: "Yassir the goat. Service impeccable, coupe parfaite. Je recommande à 100%.",
      date: "2026-03-10",
    },
    {
      id: 2,
      name: "Ibrahim B.",
      rating: 5,
      text: "Amazing service and great staff, Brahim is very talented and I totally recommend him.",
      date: "2026-02-21",
    },
    {
      id: 3,
      name: "Adnan E.",
      rating: 5,
      text: "You know you had a great experience when you don't feel the time passing! I absolutely recommend!",
      date: "2026-01-15",
    },
    {
      id: 4,
      name: "Maher B.",
      rating: 5,
      text: "Très professionnel, très bon coiffeur. Ambiance luxueuse et accueil chaleureux.",
      date: "2025-12-20",
    },
    {
      id: 5,
      name: "Khalid E.",
      rating: 5,
      text: "حلاقة احترافية معاملة ممتازة فريق متكامل. Professional haircut, excellent treatment, complete team.",
      date: "2025-11-05",
    },
    {
      id: 6,
      name: "Ouiam C.",
      rating: 5,
      text: "Je viens régulièrement pour mes enfants et je suis toujours très satisfaite. Le coiffeur est patient et talentueux.",
      date: "2025-10-28",
    },
  ],
  stats: {
    rating: 5.0,
    totalReviews: 1499,
    yearsEstablished: 5,
  },
};

export const whatsappUrl = (message?: string): string => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || siteData.contact.phoneRaw;
  const msg =
    message ||
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20un%20rendez-vous";
  return `https://wa.me/${phone}?text=${msg}`;
};

export const bookingMessages = {
  haircut: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20coupe%20homme",
  beard: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20taille%20de%20barbe",
  special: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20un%20soin%20complet",
  kids: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20mon%20enfant",
  general: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20un%20rendez-vous",
};
