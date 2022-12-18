export default class PaymentSubject {
    #observers = new Set();

    notify(data) {
        this.#observers.forEach((observe) => observe.update(data));
    }

    subscribe(observable) {
        this.#observers.add(observable);
    }

    unsubscribe(observable) {
        this.#observers.delete(observable);   
    }
}