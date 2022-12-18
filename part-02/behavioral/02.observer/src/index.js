import Marketing from './observers/marketing.js';
import Shipment from './observers/shipment.js';
import Payment from './events/payment.js';
import PaymentSubject from './subjects/paymentSubject.js';

// cria a lista de observers
const subject = new PaymentSubject();

// adiciona o marketing na lista
const marketing = new Marketing();
subject.subscribe(marketing);

// adiciona o shipment na lista
const shipment = new Shipment();
subject.subscribe(shipment);

// cria um pagamento que possui a lista de observers
const payment = new Payment(subject);
// dentro do evento de 'creditCard' ele consome a função de 'notify' nos observers
payment.creditCard({ userName: 'luan', id: Date.now() });

// remove o marketing da lista de observers
subject.unsubscribe(marketing);

payment.creditCard({ userName: 'mariazinha', id: Date.now() });
