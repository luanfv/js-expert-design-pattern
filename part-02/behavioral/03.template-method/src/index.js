import OrderBusiness from './business/orderBusiness.js';
import Order from './entities/order.js';

const order = new Order({
    customerId: '123',
    amount: 200.000,
    products: [{ description: 'shampoo' }],
});

const orderBusiness = new OrderBusiness();
const result = orderBusiness.create(order);

console.log('orderCreated', result);
