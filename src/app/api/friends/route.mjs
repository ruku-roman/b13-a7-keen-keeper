import { NextResponse } from 'next/server';
import friendsData from '@/data/friends.json';

export async function GET() {
  return NextResponse.json(friendsData);
}