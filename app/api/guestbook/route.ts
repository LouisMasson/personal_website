
import { NextResponse } from 'next/server';
import { addGuestBookEntry, getGuestBookEntries } from '@/lib/notion';

export async function GET() {
  try {
    const entries = await getGuestBookEntries();
    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();
    const entry = await addGuestBookEntry(name, message);
    return NextResponse.json(entry);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add entry' }, { status: 500 });
  }
}
