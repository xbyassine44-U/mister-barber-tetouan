# Mister Barber — Tétouan

Site web premium pour barber shop de luxe à Tétouan, Maroc.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- Framer Motion
- TypeScript
- WhatsApp Business API

## Installation

```bash
npm install
npm run dev
```

## Assets requis

Placez ces fichiers dans `/public/`:

- `videos/hero-bg.mp4` — Vidéo cinématique de fond (boucle, silencieuse, 10-15s, 1920×1080)
- `images/hero-poster.jpg` — Poster de remplacement pour la vidéo

### Sources de placeholders vidéo

- https://coverr.co — Vidéos barber gratuites
- https://mixkit.co — Footages barbier libres de droits
- https://pexels.com/search/videos/barbershop/

### Sources de placeholders photo

- https://unsplash.com/s/photos/barbershop
- https://pexels.com/search/barbershop/

## Configuration

Copiez `.env.local` et modifiez les valeurs :

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+212675667999
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_clé_ici
```

## Déploiement

```bash
npm run build
```

Déployez le dossier `.next/` sur Vercel, Netlify ou votre serveur.

## Structure

```
src/
├── app/
│   ├── globals.css   # Thème Dark Academia, glassmorphism
│   ├── layout.tsx    # Layout racine
│   └── page.tsx      # Page principale
├── components/
│   ├── Navbar.tsx     # Navigation fixe avec glassmorphism
│   ├── Hero.tsx       # Vidéo plein écran + CTA
│   ├── Services.tsx   # Cartes interactives prix
│   ├── MapSection.tsx  # Google Maps + infos
│   ├── Testimonials.tsx # Avis clients
│   ├── Booking.tsx    # Réservation WhatsApp
│   └── Footer.tsx
├── data/
│   └── siteData.ts   # Données métier (tarifs, avis, coordonnées)
└── utils/
    └── utils.ts      # Utilitaires WhatsApp
```
