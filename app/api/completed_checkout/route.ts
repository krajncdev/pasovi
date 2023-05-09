import { connectToDatabase } from '@/lib/mongoConnection';

import { IBasketProduct, IOrder } from '@/config/types';

export async function POST(req: Request) {
  const { orderID, buyerName, buyerEmail, purchasedItems, date } =
    (await req.json()) as {
      orderID: any;
      buyerName: string;
      buyerEmail: string;
      purchasedItems: IBasketProduct[];
      date: Date;
    };
  const { db } = await connectToDatabase();
  const productsCollection = db.collection('products');
  const ordersCollection = db.collection('orders');

  purchasedItems.map(async (item) => {
    const productsCollectionFilter = { name: item.name };
    const colorPath = `colors.${item.color}.quantity`;
    const updateProductsDoc = {
      $set: { [colorPath]: item.quantity && item.maxQuantity - item.quantity },
    };
    await productsCollection.updateOne(
      productsCollectionFilter,
      updateProductsDoc
    );
  });

  const order: IOrder = {
    orderID,
    buyerName,
    buyerEmail,
    date,
    products: purchasedItems.map((item) => {
      return {
        name: item.name,
        color: item.color,
        quantity: Number(item.quantity) || 1,
      };
    }),
  };

  const ordersResult = await ordersCollection.insertOne(order);
}
