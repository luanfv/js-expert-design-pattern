import { jest } from '@jest/globals';
import Payment from '../src/events/payment';
import Marketing from '../src/observers/marketing';
import Shipment from '../src/observers/shipment';

import PaymentSubject from '../src/subjects/paymentSubject';

describe('Test Suite for Observer Pattern', () => {
    beforeAll(() => {
        jest.spyOn(console, console.log.name).mockImplementation(() => {});
    });

    test('#PaymentSubject notify observers', () => {
        const subject = new PaymentSubject();
        const observer = {
            update: jest.fn(),
        };

        const data = 'hello world';
        const expected = data;

        subject.subscribe(observer);
        subject.notify(data);

        expect(observer.update).toBeCalledWith(expected);
    });

    test('#PaymentSubject should not notify unsubscribe observers', () => {
        const subject = new PaymentSubject();
        const observer = {
            update: jest.fn(),
        };

        const data = 'hello world';

        subject.subscribe(observer);
        subject.unsubscribe(observer);
        subject.notify(data);

        expect(observer.update).not.toHaveBeenCalled();
    });

    test('#PaymentSubject should notify subject after a credit card transaction', () => {
        const subject = new PaymentSubject();
        const payment = new Payment(subject);

        const paymentSubjectNotify = jest.spyOn(
            payment.paymentSubject,
            payment.paymentSubject.notify.name,
        );

        const data = { userName: 'luan', id: Date.now() };
        payment.creditCard(data);

        expect(paymentSubjectNotify).toBeCalledWith(data);
    });

    test('#All should notify subscribers after a credit card payment', () => {
        const subject = new PaymentSubject();
        const shipment = new Shipment();
        const marketing = new Marketing();

        const shipmentSpy = jest.spyOn(shipment, shipment.update.name);
        const marketingSpy = jest.spyOn(marketing, marketing.update.name);

        subject.subscribe(shipment);
        subject.subscribe(marketing);

        const payment = new Payment(subject);
        const data = { userName: 'luan', id: Date.now() };
        payment.creditCard(data);

        expect(shipmentSpy).toBeCalledWith(data);
        expect(marketingSpy).toBeCalledWith(data);
    });
});
