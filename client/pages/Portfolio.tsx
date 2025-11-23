import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  gallery: string[];
}

const BASE_URL = "/projects";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "S. Florida High Rise Luxe Condo",
    description:
      "4,200 sq ft beachfront condo renovation featuring ocean views, Italian marble, smart home integration, and professional kitchen.",
    image: `${BASE_URL}/miami-beach-condo/miami-beach-cover.webp`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/miami-beach-condo/miami-beach-1.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-10.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-11.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-12.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-13.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-14.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-15.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-16.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-17.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-18.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-19.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-2.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-20.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-21.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-22.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-23.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-24.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-25.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-26.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-27.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-28.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-29.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-3.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-30.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-31.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-32.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-33.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-34.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-35.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-36.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-37.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-38.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-39.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-4.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-40.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-41.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-42.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-43.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-44.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-45.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-46.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-47.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-5.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-6.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-7.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-8.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-9.webp`,
      `${BASE_URL}/miami-beach-condo/miami-beach-cover.webp`
    ],
  },
  {
    id: 2,
    title: "High Alpine Mountain Ranch",
    description:
      "8,500 sq ft luxury ranch with exposed timber, custom stone, vaulted ceilings, and mountain panoramas.",
    image: `${BASE_URL}/high-alpine-ranch/alpine-ranch-cover.webp`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-1.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-10.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-11.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-12.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-2.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-3.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-4.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-5.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-6.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-7.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-8.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-9.webp`,
      `${BASE_URL}/high-alpine-ranch/alpine-ranch-cover.webp`
    ],
  },
  {
    id: 3,
    title: "Syracuse House Craftsman Estate",
    description:
      "6,200 sq ft craftsman-style estate with 400 tons of decorative stone, native plantings, and two-acre landscaping.",
    image: `${BASE_URL}/syracuse-house/syracuse-1.webp`,
    category: "Design/Build",
    gallery: [
      `${BASE_URL}/syracuse-house/syracuse-1.webp`,
      `${BASE_URL}/syracuse-house/syracuse-10.webp`,
      `${BASE_URL}/syracuse-house/syracuse-11.webp`,
      `${BASE_URL}/syracuse-house/syracuse-12.webp`,
      `${BASE_URL}/syracuse-house/syracuse-13.webp`,
      `${BASE_URL}/syracuse-house/syracuse-14.webp`,
      `${BASE_URL}/syracuse-house/syracuse-15.webp`,
      `${BASE_URL}/syracuse-house/syracuse-16.webp`,
      `${BASE_URL}/syracuse-house/syracuse-17.webp`,
      `${BASE_URL}/syracuse-house/syracuse-18.webp`,
      `${BASE_URL}/syracuse-house/syracuse-19.webp`,
      `${BASE_URL}/syracuse-house/syracuse-2.webp`,
      `${BASE_URL}/syracuse-house/syracuse-20.webp`,
      `${BASE_URL}/syracuse-house/syracuse-21.webp`,
      `${BASE_URL}/syracuse-house/syracuse-22.webp`,
      `${BASE_URL}/syracuse-house/syracuse-23.webp`,
      `${BASE_URL}/syracuse-house/syracuse-24.webp`,
      `${BASE_URL}/syracuse-house/syracuse-25.webp`,
      `${BASE_URL}/syracuse-house/syracuse-26.webp`,
      `${BASE_URL}/syracuse-house/syracuse-27.webp`,
      `${BASE_URL}/syracuse-house/syracuse-28.webp`,
      `${BASE_URL}/syracuse-house/syracuse-29.webp`,
      `${BASE_URL}/syracuse-house/syracuse-3.webp`,
      `${BASE_URL}/syracuse-house/syracuse-30.webp`,
      `${BASE_URL}/syracuse-house/syracuse-31.webp`,
      `${BASE_URL}/syracuse-house/syracuse-32.webp`,
      `${BASE_URL}/syracuse-house/syracuse-33.webp`,
      `${BASE_URL}/syracuse-house/syracuse-34.webp`,
      `${BASE_URL}/syracuse-house/syracuse-35.webp`,
      `${BASE_URL}/syracuse-house/syracuse-36.webp`,
      `${BASE_URL}/syracuse-house/syracuse-37.webp`,
      `${BASE_URL}/syracuse-house/syracuse-38.webp`,
      `${BASE_URL}/syracuse-house/syracuse-39.webp`,
      `${BASE_URL}/syracuse-house/syracuse-4.webp`,
      `${BASE_URL}/syracuse-house/syracuse-40.webp`,
      `${BASE_URL}/syracuse-house/syracuse-41.webp`,
      `${BASE_URL}/syracuse-house/syracuse-42.webp`,
      `${BASE_URL}/syracuse-house/syracuse-43.webp`,
      `${BASE_URL}/syracuse-house/syracuse-44.webp`,
      `${BASE_URL}/syracuse-house/syracuse-45.webp`,
      `${BASE_URL}/syracuse-house/syracuse-46.webp`,
      `${BASE_URL}/syracuse-house/syracuse-5.webp`,
      `${BASE_URL}/syracuse-house/syracuse-6.webp`,
      `${BASE_URL}/syracuse-house/syracuse-7.webp`,
      `${BASE_URL}/syracuse-house/syracuse-8.webp`,
      `${BASE_URL}/syracuse-house/syracuse-9.webp`
    ],
  },
  {
    id: 4,
    title: "Mountain Mid-Rise Luxe Condo",
    description:
      "2,800 sq ft condo featuring spa bathrooms, Calacatta marble, walnut accents, and heated floors.",
    image: `${BASE_URL}/montana-condo/montana-cover.webp`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/montana-condo/montana-1.webp`,
      `${BASE_URL}/montana-condo/montana-10.webp`,
      `${BASE_URL}/montana-condo/montana-11.webp`,
      `${BASE_URL}/montana-condo/montana-2.webp`,
      `${BASE_URL}/montana-condo/montana-3.webp`,
      `${BASE_URL}/montana-condo/montana-4.webp`,
      `${BASE_URL}/montana-condo/montana-5.webp`,
      `${BASE_URL}/montana-condo/montana-6.webp`,
      `${BASE_URL}/montana-condo/montana-7.webp`,
      `${BASE_URL}/montana-condo/montana-8.webp`,
      `${BASE_URL}/montana-condo/montana-9.webp`,
      `${BASE_URL}/montana-condo/montana-cover.webp`
    ],
  },
  {
    id: 5,
    title: "Ultra Luxe Private Club Resort Pool",
    description:
      "3-acre amenity featuring 4,500 sq ft pool, swim-up bar, pool houses, fire pits, and outdoor kitchen.",
    image: `${BASE_URL}/hospitality-pool/pool-design-cover.webp`,
    category: "Hospitality",
    gallery: [
      `${BASE_URL}/hospitality-pool/hospitality-pool-1.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-1.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-10.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-11.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-12.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-13.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-14.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-15.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-16.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-17.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-18.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-19.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-2.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-20.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-21.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-22.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-23.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-24.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-25.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-26.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-27.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-28.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-29.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-3.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-30.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-31.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-32.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-33.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-34.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-35.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-36.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-37.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-4.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-5.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-6.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-7.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-8.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-9.webp`,
      `${BASE_URL}/hospitality-pool/pool-design-cover.webp`
    ],
  },
  {
    id: 6,
    title: "South Coast Complete Remodel",
    description:
      "3,800 sq ft residence with panoramic ocean views, white oak flooring, gourmet kitchen, and spa bathrooms.",
    image: `${BASE_URL}/southcoast-remodel-design-build/southcoast-cover.webp`,
    category: "Design/Build",
    gallery: [
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-10.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-11.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-12.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-13.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-14.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-15.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-16.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-17.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-18.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-19.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-2.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-20.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-21.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-22.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-23.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-24.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-25.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-26.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-27.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-28.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-29.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-3.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-30.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-31.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-32.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-33.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-34.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-35.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-36.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-37.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-38.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-39.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-4.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-40.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-41.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-42.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-43.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-44.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-45.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-46.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-47.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-48.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-49.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-5.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-50.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-51.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-52.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-53.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-6.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-7.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-8.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-9.webp`,
      `${BASE_URL}/southcoast-remodel-design-build/southcoast-cover.webp`
    ],
  },
  {
    id: 7,
    title: "Carmel Valley Custom Residence",
    description:
      "4,800 sq ft custom residence with exposed steel beams, floor-to-ceiling glass, and native habitat restoration.",
    image: `${BASE_URL}/carmel-valley-design-build/carmel-valley-new-cover.webp`,
    category: "Design/Build",
    gallery: [
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-1.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-2.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-3.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-4.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-cover.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-new-1.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-new-2.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-new-3.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-new-4.webp`,
      `${BASE_URL}/carmel-valley-design-build/carmel-valley-new-cover.webp`
    ],
  },
  {
    id: 8,
    title: "North Florida Renovation/Addition",
    description:
      "3,600 sq ft home with 1,200 sq ft addition including new roof, impact windows, and updated systems.",
    image: `${BASE_URL}/north-florida-renovation/north-florida-cover.webp`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/north-florida-renovation/nfl-001-cover.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-002.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-003.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-004.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-005.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-006.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-007.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-008.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-009.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-010.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-011.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-012.webp`,
      `${BASE_URL}/north-florida-renovation/nfl-013.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-1.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-10.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-11.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-12.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-2.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-3.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-4.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-5.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-6.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-7.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-8.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-9.webp`,
      `${BASE_URL}/north-florida-renovation/north-florida-cover.webp`
    ],
  },
  {
    id: 9,
    title: "Coastal Mountain Residence",
    description:
      "1.2-acre mountain site with 3,000 cubic yards earth movement, 320 linear feet retaining walls, 900 sq ft garage.",
    image: `${BASE_URL}/bigsur-mountain-remodel/bigsur-cover.webp`,
    category: "Civil",
    gallery: [
      `${BASE_URL}/bigsur-mountain-remodel/bigsur-5.webp`,
      `${BASE_URL}/bigsur-mountain-remodel/bigsur-6.webp`,
      `${BASE_URL}/bigsur-mountain-remodel/bigsur-7.webp`,
      `${BASE_URL}/bigsur-mountain-remodel/bigsur-8.webp`,
      `${BASE_URL}/bigsur-mountain-remodel/bigsur-9.webp`,
      `${BASE_URL}/bigsur-mountain-remodel/bigsur-cover.webp`
    ],
  },
  {
    id: 10,
    title: "Carmel Knolls Transformation",
    description:
      "2,200 sq ft complete renovation with new roofline, 18 energy-efficient windows, 1,400 sq ft composite decking.",
    image: `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-cover.webp`,
    category: "Civil",
    gallery: [
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-1.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-10.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-11.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-12.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-13.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-14.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-15.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-16.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-17.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-18.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-19.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-2.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-20.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-21.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-22.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-23.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-24.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-25.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-3.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-4.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-5.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-6.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-7.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-8.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-9.webp`,
      `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-cover.webp`
    ],
  },
  {
    id: 11,
    title: "Laguna Grande Spanish Revival",
    description:
      "12,000 sq ft commercial complex featuring clay roof tiles, ironwork, arched colonnades, balancing tradition with modern function.",
    image: `${BASE_URL}/laguna-grande-design-build/laguna-grande-cover.webp`,
    category: "Commercial",
    gallery: [
      `${BASE_URL}/laguna-grande-design-build/laguna-1.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-2.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-3.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-4.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-5.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-6.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-cover.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-grande-1.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-grande-2.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-grande-3.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-grande-4.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-grande-5.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-grande-6.webp`,
      `${BASE_URL}/laguna-grande-design-build/laguna-grande-cover.webp`
    ],
  },
  {
    id: 12,
    title: "Coastal Hillside Environmental Restoration",
    description:
      "Comprehensive hillside stabilization and native habitat restoration project featuring erosion control, drainage systems, and indigenous plantings.",
    image: `${BASE_URL}/hillside-cleanup/hillside-cleanup-cover.webp`,
    category: "Civil",
    gallery: [
      `${BASE_URL}/hillside-cleanup/cleanup-1.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-10.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-11.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-12.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-13.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-14.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-15.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-2.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-3.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-4.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-5.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-6.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-7.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-8.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-9.webp`,
      `${BASE_URL}/hillside-cleanup/cleanup-cover.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-1.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-2.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-3.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-4.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-5.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-6.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-7.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-1.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-10.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-11.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-12.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-13.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-14.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-15.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-2.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-3.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-4.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-5.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-6.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-7.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-8.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-9.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cleanup-cover.webp`,
      `${BASE_URL}/hillside-cleanup/hillside-cover.webp`
    ],
  },
  {
    id: 13,
    title: "Luxury Golf Community Development",
    description:
      "Master-planned residential development featuring custom estates, championship golf links, and resort-style amenities.",
    image: `${BASE_URL}/development/development-cover.webp`,
    category: "Commercial",
    gallery: [
      `${BASE_URL}/development/development-1.webp`,
      `${BASE_URL}/development/development-10.webp`,
      `${BASE_URL}/development/development-11.webp`,
      `${BASE_URL}/development/development-12.webp`,
      `${BASE_URL}/development/development-13.webp`,
      `${BASE_URL}/development/development-2.webp`,
      `${BASE_URL}/development/development-3.webp`,
      `${BASE_URL}/development/development-4.webp`,
      `${BASE_URL}/development/development-5.webp`,
      `${BASE_URL}/development/development-6.webp`,
      `${BASE_URL}/development/development-7.webp`,
      `${BASE_URL}/development/development-8.webp`,
      `${BASE_URL}/development/development-9.webp`,
      `${BASE_URL}/development/development-cover.webp`,
      `${BASE_URL}/development/links-1.webp`,
      `${BASE_URL}/development/links-2.webp`,
      `${BASE_URL}/development/links-3.webp`,
      `${BASE_URL}/development/links-4.webp`,
      `${BASE_URL}/development/links-5.webp`,
      `${BASE_URL}/development/links-6.webp`,
      `${BASE_URL}/development/links-7.webp`,
      `${BASE_URL}/development/links-8.webp`,
      `${BASE_URL}/development/links-cover.webp`,
      `${BASE_URL}/development/links-estate-2.webp`,
      `${BASE_URL}/development/links-estate-3.webp`,
      `${BASE_URL}/development/links-estate.webp`,
      `${BASE_URL}/development/site-map.webp`
    ],
  },
  {
    id: 14,
    title: "Carmel Highlands Estate",
    description:
      "5,400 sq ft luxury residence with panoramic ocean views, custom millwork, and extensive outdoor living spaces.",
    image: `${BASE_URL}/carmel-house-2/carmel-3-cover-new.webp`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/carmel-house-2/carmel-1-cover.webp`,
      `${BASE_URL}/carmel-house-2/carmel-2-1.webp`,
      `${BASE_URL}/carmel-house-2/carmel-2-2.webp`,
      `${BASE_URL}/carmel-house-2/carmel-2-3.webp`,
      `${BASE_URL}/carmel-house-2/carmel-2-4.webp`,
      `${BASE_URL}/carmel-house-2/carmel-2-5.webp`,
      `${BASE_URL}/carmel-house-2/carmel-2-cover.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-1.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-10.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-11.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-12.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-13.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-14.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-15.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-16.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-17.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-18.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-19.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-2.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-20.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-21.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-22.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-23.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-24.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-25.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-3.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-4.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-5.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-6.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-7.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-8.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-9.webp`,
      `${BASE_URL}/carmel-house-2/carmel-3-cover-new.webp`
    ],
  },
  {
    id: 15,
    title: "Pacific Grove Design/Build",
    description:
      "Complete home transformation featuring before/after renovations, modern interior upgrades, and architectural enhancements.",
    image: `${BASE_URL}/pacific-grove-design-build/pg-cover.webp`,
    category: "Design/Build",
    gallery: [
      `${BASE_URL}/pacific-grove-design-build/pg-1-before.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-1.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-10-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-10.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-12-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-13-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-2-before.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-2.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-3-before.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-3.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-4-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-4.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-5-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-5.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-6-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-6.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-7-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-7.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-8-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-8.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-9-after.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-9.webp`,
      `${BASE_URL}/pacific-grove-design-build/pg-cover.webp`
    ],
  },
  {
    id: 16,
    title: "Coastal Hillside Restoration Phase II",
    description:
      "Advanced coastal preservation project with specialized drainage, retaining structures, and vegetation management systems.",
    image: `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-cover.webp`,
    category: "Civil",
    gallery: [
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-1.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-10.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-11.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-12.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-13.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-14.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-15.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-2.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-3.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-4.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-5.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-6.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-7.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-8.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-9.webp`,
      `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-cover.webp`
    ],
  },
  {
    id: 17,
    title: "Civil Engineering Portfolio",
    description:
      "Collection of civil engineering projects including site development, grading, drainage systems, and infrastructure improvements.",
    image: `${BASE_URL}/civil-engineering/civil-cover.webp`,
    category: "Civil",
    gallery: [
      `${BASE_URL}/civil-engineering/civil-1.webp`,
      `${BASE_URL}/civil-engineering/civil-10.webp`,
      `${BASE_URL}/civil-engineering/civil-11.webp`,
      `${BASE_URL}/civil-engineering/civil-12.webp`,
      `${BASE_URL}/civil-engineering/civil-13.webp`,
      `${BASE_URL}/civil-engineering/civil-14.webp`,
      `${BASE_URL}/civil-engineering/civil-15.webp`,
      `${BASE_URL}/civil-engineering/civil-16.webp`,
      `${BASE_URL}/civil-engineering/civil-17.webp`,
      `${BASE_URL}/civil-engineering/civil-18.webp`,
      `${BASE_URL}/civil-engineering/civil-19.webp`,
      `${BASE_URL}/civil-engineering/civil-2.webp`,
      `${BASE_URL}/civil-engineering/civil-20.webp`,
      `${BASE_URL}/civil-engineering/civil-21.webp`,
      `${BASE_URL}/civil-engineering/civil-3.webp`,
      `${BASE_URL}/civil-engineering/civil-4.webp`,
      `${BASE_URL}/civil-engineering/civil-5.webp`,
      `${BASE_URL}/civil-engineering/civil-6.webp`,
      `${BASE_URL}/civil-engineering/civil-7.webp`,
      `${BASE_URL}/civil-engineering/civil-8.webp`,
      `${BASE_URL}/civil-engineering/civil-9.webp`,
      `${BASE_URL}/civil-engineering/civil-cover.webp`
    ],
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
      setShowGallery(false);
      setCurrentImageIndex(0);
    }, 300);
  };

  const openGallery = () => {
    setShowGallery(true);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 via-charcoal-100 to-charcoal-200">
      {/* Header */}
      <div className="bg-charcoal-900 text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase">
              FEATURED WORKS
            </span>
            <div className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Portfolio Collection
          </h1>
          <p className="text-charcoal-300 text-base md:text-lg max-w-2xl font-light">
            Explore our curated selection of premium construction and design
            projects, each representing our commitment to excellence and
            innovation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer h-96"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-full rounded-lg overflow-hidden shadow-lg bg-charcoal-800">
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 font-display">
                      {project.title}
                    </h3>
                    <p className="text-charcoal-200 text-sm line-clamp-2 font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundColor: isClosing
              ? "rgba(0, 0, 0, 0)"
              : "rgba(0, 0, 0, 0.9)",
          }}
          onClick={handleClose}
        >
          {/* Modal Container */}
          <div
            className={`relative max-w-4xl w-full transform transition-all duration-300 ${
              isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 z-20 p-2 text-white hover:text-gold-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container / Gallery View */}
            {showGallery ? (
              <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6 bg-charcoal-900">
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto object-cover"
                />

                {/* Gallery Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center hover:bg-gold-500 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center hover:bg-gold-500 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-charcoal-900/80 text-white text-sm">
                  {currentImageIndex + 1} / {selectedProject.gallery.length}
                </div>

                {/* Back to Details Button */}
                <button
                  onClick={() => setShowGallery(false)}
                  className="absolute top-4 left-4 px-4 py-2 rounded-sm bg-gold-500/90 backdrop-blur-sm text-charcoal-900 text-xs font-semibold tracking-widest uppercase hover:bg-gold-600 transition-colors"
                >
                  ← Back
                </button>
              </div>
            ) : (
              <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6 bg-charcoal-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />

                {/* Top-right accent */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-sm bg-gold-500/90 backdrop-blur-sm">
                  <span className="text-charcoal-900 text-xs font-semibold tracking-widest uppercase">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
            )}

            {/* Details */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-3 font-display">
                {selectedProject.title}
              </h2>

              <div className="w-12 h-1 bg-gold-500 mb-6" />

              <p className="text-charcoal-700 text-lg leading-relaxed mb-8 font-light">
                {selectedProject.description}
              </p>

              {/* Project Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-charcoal-200">
                <div>
                  <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mb-2">
                    Category
                  </p>
                  <p className="text-charcoal-900 font-medium">
                    {selectedProject.category}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mb-2">
                    Status
                  </p>
                  <p className="text-charcoal-900 font-medium">Completed</p>
                </div>
                <div>
                  <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mb-2">
                    Year
                  </p>
                  <p className="text-charcoal-900 font-medium">2024</p>
                </div>
                <div>
                  <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mb-2">
                    Quality
                  </p>
                  <p className="text-charcoal-900 font-medium">Premium</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <button
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 text-charcoal-900 font-semibold tracking-widest text-sm border-2 border-charcoal-900 hover:bg-charcoal-100 transition-colors duration-300 rounded-sm uppercase"
                >
                  Close
                </button>
                <button
                  onClick={openGallery}
                  className="flex-1 px-6 py-3 text-white font-semibold tracking-widest text-sm bg-gold-500 hover:bg-gold-600 transition-colors duration-300 rounded-sm uppercase flex items-center justify-center gap-2"
                >
                  <Images className="w-4 h-4" />
                  View Gallery ({selectedProject.gallery.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Back Button */}
      <a
        href="/"
        className="fixed bottom-6 left-6 px-4 py-3 text-charcoal-900 font-semibold tracking-widest text-xs bg-gold-500 hover:bg-gold-600 transition-colors duration-300 rounded-sm shadow-lg uppercase z-10"
      >
        ← Back
      </a>
    </div>
  );
}
