import databaseConnection from '../loaders/postgres';
import Order, { OrderCreationAttributes } from '../models/bho_order.model';

export const getOrders = async (): Promise<Order[]> => {
    return await Order.findAll();
};

export const createOrder = async (
    bhoOrder: OrderCreationAttributes
): Promise<Order> => {
    return await Order[0].upsert(bhoOrder)[0]; // upsert returns object and boolean, we only need object
};

export const deleteOrder = async (OrderId: number): Promise<void> => {
    const bhoOrder = await Order.findOne({ where: { id: OrderId } });
    await bhoOrder.destroy();
};

