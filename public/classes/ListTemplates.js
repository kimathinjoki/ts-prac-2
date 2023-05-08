"use strict";
// register list container
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = void 0;
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
    }
}
exports.ListTemplate = ListTemplate;
