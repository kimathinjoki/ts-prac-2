
import { HasFormatter } from "../interfaces/HasFormatter"



export class Payment implements HasFormatter{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // when we use public or private or readonly we dont need to have the above we can use them in the constructor

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}


    format(){
        return `${this.recipient} for ${this.details} is owed $${this.amount} `
    }
}