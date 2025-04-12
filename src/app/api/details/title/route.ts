import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const titleId = req.nextUrl.searchParams.get('titleId');

  if (!titleId) {
    return NextResponse.json({ error: 'Missing titleId' }, { status: 400 });
  }

  const res = await fetch(`https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=${process.env.WATCHMODE_API_KEY}`);
  const data = await res.json();

  return NextResponse.json({ sources: data });
}
