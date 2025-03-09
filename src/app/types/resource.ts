type BaseResource = {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  category: string;
};

type Testimonial = {
  text: string;
  author: string;
  role: string;
};

type ActiveResource = BaseResource & {
  gumroadUrl: string;
  stats: {
    downloads: number;
    rating: number;
    reviews: number;
  };
  testimonials: Testimonial[];
};

type ComingSoonResource = BaseResource & {
  stats: {
    preRegistered: number;
    expectedRelease: string;
  };
};

export type Resource = ActiveResource | ComingSoonResource;

export function isActiveResource(resource: Resource): resource is ActiveResource {
  return 'downloads' in resource.stats;
} 