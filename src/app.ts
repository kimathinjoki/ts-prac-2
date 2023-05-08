// const anchor = document.querySelector('a')!;


// // if(anchor){
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)

// const form = document.querySelector('form')!;


// interface  

interface  IsPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number ): number;
}

const me: IsPerson = {
    name: 'zhangsan',
    age: 18,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount)
        return amount
    }
}




import {Invoice} from './classes/invoice.js'

import { Payment } from './classes/payment.js';

import { HasFormatter } from './interfaces/HasFormatter.js';

import { ListTemplate } from './classes/ListTemplates.js';


let docOne: HasFormatter;
let docTwo: HasFormatter

docOne = new Invoice("yoshi", "web work", 345);
docTwo = new Payment("mario", "plumbing work", 673)


let docs: HasFormatter[] = [] ;

docs.push(docOne)
docs.push(docTwo)

console.log(docs)


const invOne = new Invoice("mario", "work on the website", 250)
const invTwo = new Invoice("Kima", "work on the spiro", 4560)

console.log(invOne, invTwo)

let invoices: Invoice[] = []; 

invoices.push(invOne)
invoices.push(invTwo)

// invOne.client = "Blue"  can't be changed because its read only
invTwo.amount = 7892

invoices.forEach((inv)=>{
    console.log(inv.client, inv.amount, inv.format())
})

console.log(invoices)


const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;
 const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
 const details = document.querySelector('#details') as HTMLInputElement;
 const amount = document.querySelector('#amount') as HTMLInputElement;




//    list template instance

const ul =document.querySelector('ul')!;
const list =  new ListTemplate(ul)

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault()

    let doc: HasFormatter;

    if(type.value === "invoice"){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber )
    } else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber )
    }


    console.log(
        type.value, 
        toFrom.value,
        details.value,
        amount.valueAsNumber
    
    )


    list.render(doc, type.value, "end" )


})


//  generic


const addUid = <T extends object >(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid}
}


let docO = addUid({name: "yosgu", age: 56})

console.log(docO)


// with interface


interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T
}


const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'personA',
    data: {name: 'oedfv'}
}

console.log(docThree)


const docFour: Resource <string[]> ={
    uid: 2,
    resourceName: 'shopping list',
    data: ['bread', 'milk', 'butter', 'juice']
}


console.log(docFour)



//  in a tupple, you can't change the type once the position is locked/defined unlike in an array

let tup: [string, number, boolean] =  ['ryu',45,true]

//  in an array you can change between different types

