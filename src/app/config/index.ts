interface Config {
  api: {
    mailerlite: {
      baseUrl: string;
      apiKey: string;
      groupId: string;
    };
    stripe: {
      publicKey: string;
      secretKey: string;
      webhookSecret: string;
    };
    calendly: {
      baseUrl: string;
    };
    gumroad: {
      baseUrl: string;
    };
    eventbrite: {
      baseUrl: string;
    };
  };
  urls: {
    resources: {
      techInterviewGuide: string;
      systemDesignTemplates: string;
      resumeTemplates: string;
    };
    webinars: {
      baseUrl: string;
    };
  };
  seo: {
    googleVerification: string;
    yandexVerification: string;
  };
}

const development: Config = {
  api: {
    mailerlite: {
      baseUrl: 'https://connect.mailerlite.com/api',
      apiKey: process.env.MAILERLITE_API_KEY || '',
      groupId: process.env.MAILERLITE_GROUP_ID || '',
    },
    stripe: {
      publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
      secretKey: process.env.STRIPE_SECRET_KEY || '',
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
    },
    calendly: {
      baseUrl: 'https://calendly.com/api/v1',
    },
    gumroad: {
      baseUrl: 'https://api.gumroad.com/v2',
    },
    eventbrite: {
      baseUrl: 'https://www.eventbriteapi.com/v3',
    },
  },
  urls: {
    resources: {
      techInterviewGuide: process.env.NEXT_PUBLIC_TECH_GUIDE_URL || '#',
      systemDesignTemplates: process.env.NEXT_PUBLIC_SYSTEM_DESIGN_URL || '#',
      resumeTemplates: process.env.NEXT_PUBLIC_RESUME_TEMPLATES_URL || '#',
    },
    webinars: {
      baseUrl: process.env.NEXT_PUBLIC_WEBINARS_BASE_URL || '#',
    },
  },
  seo: {
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yandexVerification: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
  },
};

const production: Config = {
  ...development,
  // Override any development-specific values here
};

const config = process.env.NODE_ENV === 'production' ? production : development;

export default config; 