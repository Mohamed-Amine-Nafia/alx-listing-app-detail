// UI Props
export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Data Interfaces
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  description: string;
  reviews: Review[]; // Linked to the Review interface above
}
