import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    console.log('--------------- OAuth redirect URIs --------------');

    const body = await req.json();
    console.log('OAuth redirect URIs', JSON.stringify(body, null, 4));

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('POST error:', JSON.stringify(error, null, 4));
    return new NextResponse(null, { status: 500 });
  }
}
