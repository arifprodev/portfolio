import { getDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const db = await getDb();
    const body = await request.json();

    const result = await db.collection('contacts').insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ 
      success: true, 
      insertedId: result.insertedId 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}