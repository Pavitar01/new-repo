import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const titleId = req.nextUrl.searchParams.get('titleId');

  if (!titleId) {
    return NextResponse.json({ error: 'Missing titleId' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.watchmode.com/v1/title/${titleId}/sources/?apiKey=${process.env.WATCHMODE_API_KEY}`);

    if (!res.ok) {
      const error = await res.text();
      console.error('Streaming sources fetch failed:', error);
      return NextResponse.json({ error: 'Failed to fetch sources' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
