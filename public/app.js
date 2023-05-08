"use strict";
// const anchor = document.querySelector('a')!;
Object.defineProperty(exports, "__esModule", { value: true });
const me = {
    name: 'zhangsan',
    age: 18,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const invoice_js_1 = require("./classes/invoice.js");
const payment_js_1 = require("./classes/payment.js");
const ListTemplates_js_1 = require("./classes/ListTemplates.js");
let docOne;
let docTwo;
docOne = new invoice_js_1.Invoice("yoshi", "web work", 345);
docTwo = new payment_js_1.Payment("mario", "plumbing work", 673);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new invoice_js_1.Invoice("mario", "work on the website", 250);
const invTwo = new invoice_js_1.Invoice("Kima", "work on the spiro", 4560);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = "Blue"  can't be changed because its read only
invTwo.amount = 7892;
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoices);
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//    list template instance
const ul = document.querySelector('ul');
const list = new ListTemplates_js_1.ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new invoice_js_1.Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_js_1.Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, "end");
});
//  generic
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docO = addUid({ name: "yosgu", age: 56 });
console.log(docO);
const docThree = {
    uid: 1,
    resourceName: 'personA',
    data: { name: 'oedfv' }
};
console.log(docThree);
const docFour = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['bread', 'milk', 'butter', 'juice']
};
console.log(docFour);
//  in a tupple, you can't change the type once the position is locked/defined unlike in an array
let tup = ['ryu', 45, true];
//  in an array you can change between different types
