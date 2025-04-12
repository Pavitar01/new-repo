// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.watchmode.com/v1/autocomplete-search?apiKey=${process.env.WATCHMODE_API_KEY}&search_value=${encodeURIComponent(query)}&search_type=1`);

    if (!res.ok) {
      const error = await res.text();
      console.error('Watchmode error:', error);
      return NextResponse.json({ error: 'Failed to fetch from Watchmode' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ results: data.results });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
