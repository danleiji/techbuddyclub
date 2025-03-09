This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, set up your environment variables:

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in the values in `.env.local` with your actual API keys and configuration.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

This project requires several environment variables to function properly. Here's how to obtain them:

### Hashnode API
- `HASHNODE_ACCESS_TOKEN`: Generate from your Hashnode account settings
- `NEXT_PUBLIC_HASHNODE_PUBLICATION_ID`: Your Hashnode publication ID

### MailerLite
- `MAILERLITE_API_KEY`: Get from your MailerLite dashboard
- `MAILERLITE_GROUP_ID`: The ID of your subscriber group in MailerLite

### Google Analytics
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics measurement ID (starts with G-)

### Stripe
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook signing secret

### SEO Verification
- `NEXT_PUBLIC_GOOGLE_VERIFICATION`: Google Search Console verification code
- `NEXT_PUBLIC_YANDEX_VERIFICATION`: Yandex Webmaster verification code

### Resource URLs
- `NEXT_PUBLIC_TECH_GUIDE_URL`: URL to your tech interview guide
- `NEXT_PUBLIC_SYSTEM_DESIGN_URL`: URL to your system design templates
- `NEXT_PUBLIC_RESUME_TEMPLATES_URL`: URL to your resume templates
- `NEXT_PUBLIC_WEBINARS_BASE_URL`: Base URL for your webinars

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# techbuddy
