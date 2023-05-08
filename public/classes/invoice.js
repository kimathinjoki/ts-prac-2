"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // when we use public or private or readonly we dont need to have the above we can use them in the constructor
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} ${this.details} owes $${this.amount} `;
    }
}
exports.Invoice = Invoice;
