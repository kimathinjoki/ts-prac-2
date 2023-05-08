"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // when we use public or private or readonly we dont need to have the above we can use them in the constructor
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} for ${this.details} is owed $${this.amount} `;
    }
}
exports.Payment = Payment;
