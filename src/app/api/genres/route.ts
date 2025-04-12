import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`https://api.watchmode.com/v1/genres/?apiKey=${process.env.WATCHMODE_API_KEY}`);

    if (!res.ok) {
      const error = await res.text();
      console.error('Watchmode genre fetch failed:', error);
      return NextResponse.json({ error: 'Failed to fetch genres' }, { status: res.status });
    }

    const data = await res.json();
    console.log("hello",data)
    return NextResponse.json(data);
  } catch (error) {
    console.error('Server error while fetching genres:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
