
import { HasFormatter } from "../interfaces/HasFormatter"



export class Invoice implements HasFormatter{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // when we use public or private or readonly we dont need to have the above we can use them in the constructor

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}


    format(){
        return `${this.client} ${this.details} owes $${this.amount} `
    }
}