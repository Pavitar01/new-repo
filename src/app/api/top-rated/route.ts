// app/api/top-rated/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1');
  const limit = 20;
  const offset = (page - 1) * limit;

  try {
    const res = await fetch(
      `https://api.watchmode.com/v1/list-titles/?type=movie&sort_by=popularity_desc&limit=${limit}&offset=${offset}&apiKey=${process.env.WATCHMODE_API_KEY}`
    );

    const data = await res.json();

    // Only return minimal data
    const titles = data.titles.map((title: any) => ({
      id: title.id,
      title: title.title,
      year: title.year,
      type: title.type,
    }));

    return NextResponse.json({ page, titles });
  } catch (error) {
    console.error('Top-rated fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch top-rated' }, { status: 500 });
  }
}
