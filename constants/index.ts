import type { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "https://example.com/image1.jpg",
    discount: "",
    description:
      "Experience luxury living at Villa Ocean Breeze with stunning ocean views, a private pool, and all modern amenities.",
    reviews: [
      {
        name: "Aisha",
        rating: 5,
        comment: "Incredible location and service.",
        avatar: "/avatars/aisha.png",
      },
      {
        name: "Tom",
        rating: 4,
        comment: "Very peaceful and relaxing.",
        avatar: "/avatars/tom.png",
      },
    ],
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "https://example.com/image2.jpg",
    discount: "30",
    description:
      "Cozy up in the Mountain Escape Chalet featuring breathtaking views, a warm fireplace, and convenient self check-in.",
    reviews: [
      {
        name: "Liam",
        rating: 5,
        comment: "Loved waking up to mountain views!",
        avatar: "/avatars/liam.png",
      },
      {
        name: "Sophia",
        rating: 4,
        comment: "Great chalet but kitchen could be better.",
        avatar: "/avatars/sophia.png",
      },
    ],
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "https://example.com/image3.jpg",
    discount: "",
    description:
      "Relax in this Cozy Desert Retreat with stunning desert views, pet-friendly policies, and easy self check-in.",
    reviews: [
      {
        name: "Jake",
        rating: 5,
        comment: "Perfect getaway spot, peaceful and cozy!",
        avatar: "/avatars/jake.png",
      },
    ],
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "https://example.com/image4.jpg",
    discount: "15",
    description:
      "Enjoy spectacular city views from this luxurious City Lights Penthouse with high-speed WiFi and 24-hour check-in.",
    reviews: [
      {
        name: "Emily",
        rating: 5,
        comment: "The city view at night was breathtaking!",
        avatar: "/avatars/emily.png",
      },
      {
        name: "Mark",
        rating: 4,
        comment: "Very comfortable, but noisy at times.",
        avatar: "/avatars/mark.png",
      },
    ],
  },
  // add reviews similarly for other properties...
];
