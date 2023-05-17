import { connectToDatabase } from '@/lib/mongoConnection';
import { NextResponse } from 'next/server';

import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  const { db } = await connectToDatabase();
  const { email, password, name } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    email,
    password: hashedPassword,
    name,
    role: 'user',
  };

  const collection = db.collection('users');

  const exists = await collection.findOne({ email: email });

  if (exists === null) {
    const result = await collection.insertOne(user);
    return NextResponse.json({
      message: 'Uspešna registracija!',
      type: 'success',
    });
  }

  return NextResponse.json({ message: 'E-naslov že obstaja.', type: 'error' });
}
