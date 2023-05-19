import { connectToDatabase } from '@/lib/mongoConnection';
import AdminContainer from './AdminContainer';

const AdminPage = async () => {
  const data = await getData();

  return (
    <main>
      <AdminContainer data={data} />
    </main>
  );
};

const getData = async () => {
  const { db } = await connectToDatabase();
  const productsCollection = db.collection('products');
  const usersCollection = db.collection('users');
  const ordersCollection = db.collection('orders');

  const productsCursor = await productsCollection.find();
  const usersCursor = await usersCollection.find();
  const ordersCursor = await ordersCollection.find();

  const products = await productsCursor.toArray();
  const users = await usersCursor.toArray();
  const orders = await ordersCursor.toArray();

  return {
    products,
    users,
    orders,
  };
};

export default AdminPage;
