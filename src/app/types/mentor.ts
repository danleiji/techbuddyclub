export type Review = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export type Mentor = {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  expertise: string[];
  availability: {
    duration: string;
    price: number;
  };
  calendlyUrl?: string;
  stats: {
    totalBookings: number;
    averageRating: number;
    reviewCount: number;
  };
  featuredReviews: Review[];
}; 