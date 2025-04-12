import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`https://api.watchmode.com/v1/list-titles/?type=movie&sort_by=popularity_desc&apiKey=${process.env.WATCHMODE_API_KEY}`);

    if (!res.ok) {
      const error = await res.text();
      console.error('Failed to fetch trending movies:', error);
      return NextResponse.json({ error: 'Failed to fetch trending movies' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ titles: data.titles });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
