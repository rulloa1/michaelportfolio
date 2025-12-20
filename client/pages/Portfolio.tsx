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
      ${BASE_URL}/hospitality-pool/hospitality-pool-1.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-2.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-3.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-4.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-5.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-6.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-7.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-8.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-9.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-10.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-11.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-12.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-13.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-14.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-15.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-16.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-17.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-18.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-19.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-20.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-21.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-22.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-23.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-24.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-25.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-26.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-27.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-28.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-29.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-30.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-31.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-32.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-33.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-34.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-35.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-36.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-37.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-38.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-39.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-40.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-41.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-42.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-43.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-44.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-45.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-46.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-47.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-48.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-49.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-50.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-51.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-52.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-53.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-54.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-55.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-56.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-57.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-58.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-59.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-60.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-61.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-62.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-63.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-64.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-65.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-66.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-67.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-68.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-69.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-70.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-71.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-72.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-73.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-74.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-75.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-76.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-77.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-78.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-79.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-80.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-81.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-82.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-83.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-84.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-85.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-86.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-87.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-88.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-89.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-90.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-91.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-92.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-93.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-94.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-95.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-96.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-97.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-98.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-99.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-100.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-101.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-102.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-103.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-104.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-105.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-106.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-107.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-108.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-109.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-110.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-111.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-112.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-113.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-114.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-115.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-116.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-117.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-118.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-119.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-120.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-121.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-122.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-123.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-124.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-125.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-126.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-127.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-128.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-129.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-130.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-131.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-132.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-133.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-134.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-135.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-136.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-137.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-138.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-139.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-140.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-141.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-142.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-143.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-144.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-145.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-146.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-147.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-148.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-149.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-150.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-151.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-152.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-153.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-154.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-155.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-156.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-157.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-158.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-159.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-160.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-161.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-162.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-163.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-164.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-165.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-166.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-167.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-168.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-169.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-170.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-171.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-172.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-173.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-174.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-175.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-176.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-177.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-178.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-179.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-180.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-181.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-182.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-183.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-184.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-185.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-186.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-187.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-188.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-189.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-190.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-191.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-192.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-193.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-194.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-195.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-196.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-197.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-198.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-199.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-200.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-201.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-202.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-203.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-204.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-205.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-206.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-207.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-208.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-209.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-210.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-211.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-212.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-213.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-214.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-215.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-216.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-217.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-218.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-219.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-220.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-221.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-222.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-223.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-224.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-225.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-226.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-227.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-228.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-229.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-230.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-231.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-232.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-233.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-234.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-235.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-236.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-237.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-238.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-239.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-240.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-241.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-242.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-243.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-244.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-245.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-246.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-247.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-248.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-249.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-250.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-251.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-252.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-253.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-254.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-255.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-256.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-257.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-258.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-259.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-260.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-261.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-262.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-263.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-264.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-265.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-266.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-267.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-268.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-269.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-270.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-271.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-272.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-273.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-274.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-275.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-276.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-277.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-278.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-279.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-280.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-281.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-282.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-283.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-284.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-285.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-286.webp,       ${BASE_URL}/hospitality-pool/hospitality-pool-287.webp,
  {
    id: 6,
    title: "South Coast Complete Remodel",
    description:
      "3,800 sq ft residence with panoramic ocean views, white oak flooring, gourmet kitchen, and spa bathrooms.",
    image: `${BASE_URL}/southcoast-remodel-design-build/southcoast-cover.webp`,
    category: "Design/Build",
    gallery: [
      ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-1.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-2.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-3.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-4.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-5.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-6.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-7.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-8.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-9.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-10.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-11.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-12.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-13.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-14.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-15.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-16.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-17.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-18.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-19.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-20.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-21.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-22.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-23.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-24.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-25.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-26.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-27.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-28.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-29.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-30.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-31.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-32.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-33.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-34.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-35.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-36.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-37.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-38.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-39.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-40.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-41.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-42.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-43.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-44.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-45.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-46.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-47.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-48.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-49.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-50.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-51.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-52.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-53.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-54.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-55.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-56.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-57.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-58.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-59.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-60.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-61.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-62.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-63.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-64.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-65.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-66.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-67.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-68.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-69.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-70.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-71.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-72.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-73.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-74.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-75.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-76.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-77.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-78.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-79.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-80.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-81.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-82.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-83.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-84.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-85.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-86.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-87.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-88.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-89.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-90.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-91.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-92.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-93.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-94.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-95.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-96.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-97.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-98.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-99.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-100.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-101.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-102.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-103.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-104.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-105.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-106.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-107.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-108.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-109.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-110.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-111.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-112.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-113.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-114.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-115.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-116.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-117.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-118.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-119.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-120.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-121.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-122.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-123.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-124.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-125.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-126.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-127.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-128.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-129.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-130.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-131.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-132.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-133.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-134.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-135.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-136.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-137.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-138.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-139.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-140.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-141.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-142.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-143.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-144.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-145.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-146.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-147.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-148.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-149.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-150.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-151.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-152.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-153.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-154.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-155.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-156.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-157.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-158.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-159.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-160.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-161.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-162.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-163.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-164.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-165.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-166.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-167.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-168.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-169.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-170.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-171.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-172.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-173.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-174.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-175.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-176.webp,       ${BASE_URL}/southcoast-remodel-design-build/southcoast-remodel-design-build-177.webp,
  {
    id: 7,
    title: "Carmel Valley Custom Residence",
    description:
      "4,800 sq ft custom residence with exposed steel beams, floor-to-ceiling glass, and native habitat restoration.",
    image: `${BASE_URL}/carmel-valley-design-build/carmel-valley-new-cover.webp`,
    category: "Design/Build",
    gallery: [
      ${BASE_URL}/carmel-valley-design-build/carmel-valley-design-build-1.webp,       ${BASE_URL}/carmel-valley-design-build/carmel-valley-design-build-2.webp,       ${BASE_URL}/carmel-valley-design-build/carmel-valley-design-build-3.webp,
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
      ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-1.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-2.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-3.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-4.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-5.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-6.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-7.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-8.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-9.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-10.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-11.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-12.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-13.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-14.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-15.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-16.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-17.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-18.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-19.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-20.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-21.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-22.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-23.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-24.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-25.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-26.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-27.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-28.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-29.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-30.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-31.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-32.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-33.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-34.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-35.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-36.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-37.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-38.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-39.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-40.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-41.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-42.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-43.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-44.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-45.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-46.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-47.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-48.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-49.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-50.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-51.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-52.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-53.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-54.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-55.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-56.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-57.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-58.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-59.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-60.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-61.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-62.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-63.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-64.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-65.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-66.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-67.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-68.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-69.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-70.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-71.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-72.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-73.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-74.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-75.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-76.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-77.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-78.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-79.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-80.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-81.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-82.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-83.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-84.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-85.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-86.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-87.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-88.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-89.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-90.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-91.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-92.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-93.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-94.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-95.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-96.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-97.webp,       ${BASE_URL}/bigsur-mountain-remodel/bigsur-mountain-remodel-98.webp,
  {
    id: 10,
    title: "Carmel Knolls Transformation",
    description:
      "2,200 sq ft complete renovation with new roofline, 18 energy-efficient windows, 1,400 sq ft composite decking.",
    image: `${BASE_URL}/carmel-house-remdl-23/carmel-knolls-cover.webp`,
    category: "Civil",
    gallery: [
      ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-1.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-2.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-3.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-4.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-5.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-6.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-7.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-8.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-9.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-10.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-11.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-12.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-13.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-14.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-15.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-16.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-17.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-18.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-19.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-20.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-21.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-22.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-23.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-24.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-25.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-26.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-27.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-28.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-29.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-30.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-31.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-32.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-33.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-34.webp,       ${BASE_URL}/carmel-house-remdl-23/carmel-house-remdl-23-35.webp,
  {
    id: 11,
    title: "Laguna Grande Spanish Revival",
    description:
      "12,000 sq ft commercial complex featuring clay roof tiles, ironwork, arched colonnades, balancing tradition with modern function.",
    image: `${BASE_URL}/laguna-grande-design-build/laguna-grande-cover.webp`,
    category: "Commercial",
    gallery: [
      ${BASE_URL}/laguna-grande-design-build/laguna-grande-design-build-1.webp,       ${BASE_URL}/laguna-grande-design-build/laguna-grande-design-build-2.webp,       ${BASE_URL}/laguna-grande-design-build/laguna-grande-design-build-3.webp,       ${BASE_URL}/laguna-grande-design-build/laguna-grande-design-build-4.webp,
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
      ${BASE_URL}/carmel-house-2/carmel-house-2-1.webp,       ${BASE_URL}/carmel-house-2/carmel-house-2-2.webp,       ${BASE_URL}/carmel-house-2/carmel-house-2-3.webp,       ${BASE_URL}/carmel-house-2/carmel-house-2-4.webp,       ${BASE_URL}/carmel-house-2/carmel-house-2-5.webp,       ${BASE_URL}/carmel-house-2/carmel-house-2-6.webp,       ${BASE_URL}/carmel-house-2/carmel-house-2-7.webp,
  {
    id: 15,
    title: "Pacific Grove Design/Build",
    description:
      "Complete home transformation featuring before/after renovations, modern interior upgrades, and architectural enhancements.",
    image: `${BASE_URL}/pacific-grove-design-build/pg-cover.webp`,
    category: "Design/Build",
    gallery: [
      ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-1.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-2.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-3.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-4.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-5.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-6.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-7.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-8.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-9.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-10.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-11.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-12.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-13.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-14.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-15.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-16.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-17.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-18.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-19.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-20.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-21.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-22.webp,       ${BASE_URL}/pacific-grove-design-build/pacific-grove-design-build-23.webp,
  {
    id: 16,
    title: "Coastal Hillside Restoration Phase II",
    description:
      "Advanced coastal preservation project with specialized drainage, retaining structures, and vegetation management systems.",
    image: `${BASE_URL}/coastal-hillside-restoration-2/coastal-restoration-cover.webp`,
    category: "Civil",
    gallery: [
      ${BASE_URL}/coastal-hillside-restoration-2/coastal-hillside-restoration-2-1.webp,       ${BASE_URL}/coastal-hillside-restoration-2/coastal-hillside-restoration-2-2.webp,
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
