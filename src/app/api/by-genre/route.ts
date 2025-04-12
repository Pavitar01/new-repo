import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const genreId = req.nextUrl.searchParams.get('genreId');

  if (!genreId) {
    return NextResponse.json({ error: 'Genre ID is required' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.watchmode.com/v1/list-titles/?genres=${genreId}&apiKey=${process.env.WATCHMODE_API_KEY}`);

    if (!res.ok) {
      const error = await res.text();
      console.error('Failed to fetch movies by genre:', error);
      return NextResponse.json({ error: 'Failed to fetch movies by genre' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ titles: data.titles });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
