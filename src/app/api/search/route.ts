// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.watchmode.com/v1/search/?search_field=name&search_value=${encodeURIComponent(query)}&apiKey=${process.env.WATCHMODE_API_KEY}`);

    if (!res.ok) {
      const error = await res.text();
      console.error('Watchmode error:', error);
      return NextResponse.json({ error: 'Failed to fetch from Watchmode' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ results: data.title_results });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
