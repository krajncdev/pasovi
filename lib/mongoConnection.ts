import { MongoClient } from 'mongodb';

interface ICachedClient {
  client: MongoClient;
  db: any;
}

let cachedClient: ICachedClient | null = null;

export async function connectToDatabase(): Promise<ICachedClient> {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI || ''
    );

    const db = client.db();

    cachedClient = {
      client,
      db,
    };

    console.log('Sucessfully connected to database');

    return cachedClient;
  } catch (error) {
    console.error(error);
    throw new Error('Could not connect to database');
  }
}
