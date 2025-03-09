type EventNames =
  | 'view_mentor_profile'
  | 'book_mentor'
  | 'download_resource'
  | 'newsletter_signup'
  | 'webinar_register'
  | 'payment_initiated'
  | 'payment_completed';

interface EventParams {
  mentorId?: string;
  mentorName?: string;
  resourceId?: string;
  resourceName?: string;
  webinarId?: string;
  webinarName?: string;
  amount?: number;
  currency?: string;
  category?: string;
  source?: string;
}

export const trackEvent = (eventName: EventNames, params: EventParams = {}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Add common parameters
  const enhancedParams = {
    ...params,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
    page_title: document.title,
  };

  window.gtag('event', eventName, enhancedParams);
};

// Specific tracking functions
export const trackMentorView = (mentorId: string, mentorName: string) => {
  trackEvent('view_mentor_profile', { mentorId, mentorName });
};

export const trackBooking = (mentorId: string, mentorName: string) => {
  trackEvent('book_mentor', { mentorId, mentorName });
};

export const trackResourceDownload = (resourceId: string, resourceName: string) => {
  trackEvent('download_resource', { resourceId, resourceName });
};

export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', { source });
};

export const trackWebinarRegistration = (webinarId: string, webinarName: string) => {
  trackEvent('webinar_register', { webinarId, webinarName });
};

export const trackPayment = (
  status: 'initiated' | 'completed',
  amount: number,
  currency: string = 'USD'
) => {
  trackEvent(status === 'initiated' ? 'payment_initiated' : 'payment_completed', {
    amount,
    currency,
  });
}; 