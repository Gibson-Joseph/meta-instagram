import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.log('--------------- Deauthorize callback URL --------------');

    const body = await req.json();
    console.log('Deauthorize callback URL', JSON.stringify(body, null, 4));

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('POST error:', JSON.stringify(error, null, 4));
    return new NextResponse(null, { status: 500 });
  }
}
