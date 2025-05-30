import { NextResponse } from 'next/server';
import {
  // textMessage,
  // buttonTemplate,
  genericTemplate,
} from '@/MessageData/MessageData';

const VERIFY_TOKEN = '12345';
const PAGE_ACCESS_TOKEN =
  'IGAAMZA2WBW9HVBZAE50M0tTVkwtZAmprZADRJVTBwSGY4QV9wSHFMRDdZAeC1ndVRnbmVYYXd1ajc2eHdsbnhMcjhxOXdnTlBhbFVSZAGhtUnJPYlBtVGRwbk1zbm9mcGc4SkQ5WXdPZADlWYW1mYUM3dk52bnVfYjFJWnZAEdjJtTEVPUQZDZD';

// Handle GET requests
export async function GET(req: Request) {
  try {
    console.log('GET: Someone is pinging me!');
    const { searchParams } = new URL(req.url);

    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    if (mode && token && mode === 'subscribe' && VERIFY_TOKEN === token) {
      return new NextResponse(challenge, { status: 200 });
    } else {
      return new NextResponse(null, { status: 403 });
    }
  } catch (error) {
    console.error({ error });
    return new NextResponse(null, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messagingEvent = body.entry?.[0]?.messaging?.[0];
    const senderId = messagingEvent?.sender?.id;
    const messageText = messagingEvent?.message?.text;

    if (senderId && messageText) {
      const response = await fetch(
        `https://graph.instagram.com/v21.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            recipient: { id: senderId },
            message: genericTemplate,
          }),
        }
      );

      const data = await response.json();
      console.log('Send response:', data);
    }

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('POST error:', JSON.stringify(error, null, 4));
    return new NextResponse(null, { status: 500 });
  }
}
