import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1');
  const limit = 20;
  const offset = (page - 1) * limit;

  try {
    const res = await fetch(
      `https://api.watchmode.com/v1/releases/?limit=${limit}&offset=${offset}&apiKey=${process.env.WATCHMODE_API_KEY}`
    );

    const data = await res.json();

    // Only return minimal data
    const updatedReleases = data.releases.map((release: Releases) => ({
      ...release,
      poster_url: release.poster_url?.replace('_w185', '_w780'), // or '_w780 /_w185'
    }));

    return NextResponse.json({ page, releases:updatedReleases });
  } catch (error) {
    console.error('Top-rated fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch releases' }, { status: 500 });
  }
}
