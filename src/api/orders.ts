import { Express, Request } from 'express';
import {
    createOrder,
    deleteOrder,
    getOrders,
} from '../services/ordersService';
import Order, { OrderCreationAttributes } from '../models/bho_order.model';
import { CreateOrderRequest } from '@uark-acm/bho-data-models/lib';

const configureOrderEndpoints = (app: Express) => {
    app.get(
        '/orders', 
        async (req: Request<object, Order[], CreateOrderRequest>, res) => {
            try {
                const orders = await getOrders();
                res.send([orders]);
            } catch (error: any){
                res.send(error)
            }
        }
    
        /*  
    pickupDateTime: Date;
    checkoutAssociate: string;
    clientName: string;
    clientEmail: string;
    clothingItemId: number;
    isNewUser: boolean;
    clientClassificaion: ClientClassification;
    clientCollege: ClientCollege;
    isInternational: boolean;

    id: number;
    user_name: string;
    user_email: string;
    user_is_international: string;
    user_reason?: string;
    event_date?: Date;
    order_placed: Date;
    requested_pickup: Date;
    order_status: string;
    */
   
    );

    app.post(
        '/orders', 
        async (req: Request<object, Order, CreateOrderRequest>, res) => {
            try {
                const {pickupDateTime, checkoutAssociate, clientName, clientEmail, clothingItemId, isNewUser, clientClassification, clientCollege, isInternational } =
                    req.body;
                const attributes: OrderCreationAttributes = {
                    order_pickupDateTime: pickupDateTime,
                    order_checkoutAssociate: checkoutAssociate,
                    order_clientName: clientName,
                    order_clientEmail: clientEmail,
                    order_clothingItemId: clothingItemId,
                    order_isNewUser: isNewUser,
                    order_clientClassificaion: clientClassification,
                    order_clientCollege: clientCollege,
                    order_isInternational: isInternational,
                };
                const newOrder = await createOrder(attributes);
                res.send(newOrder);
            } catch (error: any) {
                res.send(error);
            }
        }            
    );

    app.delete(
        '/orders',
        async (req: Request<object, string, Order>, res) => {
            try {
                const { id } = req.body;
                await deleteOrder(id);
                res.send('Order deleted successfully.');
            } catch (error: any) {
                res.send(error);
            }
        }
    );

    app.get('/', (req, res) => {
        res.send('test endpoint');
    });
};


export default configureOrderEndpoints;
