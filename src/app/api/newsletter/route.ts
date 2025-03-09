import { NextResponse } from 'next/server';
import axios from 'axios';

const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    try {
      // Add subscriber to MailerLite
      const response = await axios.post(
        `${MAILERLITE_API_URL}/subscribers`,
        {
          email,
          groups: [process.env.MAILERLITE_GROUP_ID], // Optional: if you want to add to a specific group
          status: 'active'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
          }
        }
      );

      if (response.status === 201) {
        return NextResponse.json(
          { message: 'Success! You are now subscribed to the newsletter.' },
          { status: 200 }
        );
      }

      throw new Error('Failed to subscribe');
    } catch (error: any) {
      // Check if the error is because the email is already subscribed
      if (error.response?.status === 409) {
        return NextResponse.json(
          { message: 'You are already subscribed to the newsletter!' },
          { status: 200 }
        );
      }

      // Handle rate limiting
      if (error.response?.status === 429) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }

      throw error;
    }
  } catch (error: any) {
    console.error('Newsletter API error:', error.response?.data || error);
    return NextResponse.json(
      { error: 'There was an error subscribing to the newsletter.' },
      { status: 500 }
    );
  }
} 
