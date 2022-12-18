export default class Payment {
    constructor(paymentSubject) {
        this.paymentSubject = paymentSubject;
    }

    creditCard(paymentData) {
        console.log(`\na payment current from ${paymentData.userName}`);

        this.paymentSubject.notify(paymentData);
    }
}