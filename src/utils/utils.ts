import { siteData } from "@/data/siteData";

export function formatWhatsAppUrl(serviceId?: number): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || siteData.contact.phoneRaw;
  const baseMessage = "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20un%20rendez-vous";

  if (!serviceId) return `https://wa.me/${phone}?text=${baseMessage}`;

  const serviceMessages: Record<number, string> = {
    1: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20coupe%20homme",
    2: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20taille%20de%20barbe",
    3: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20un%20soin%20barbe%20sp%C3%A9cial",
    6: "Bonjour%20Mister%20Barber%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20mon%20enfant",
  };

  const msg = serviceMessages[serviceId] || baseMessage;
  return `https://wa.me/${phone}?text=${msg}`;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
