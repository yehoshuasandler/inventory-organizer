let fridge = require("./fridge");
const Item = require("./Item");
const Store = require("./store");

const orderQuntity = 10;
let order = [];
let orderIndex = 0;


for(i = 0; i < orderQuntity; i++){
    let item = new Item;
    order.push(item);
}


let storage = fridge.storageUnits;
for(i = 0; i < order.length; i++){
    let o = order[i];
    let openUnits = Store.canFit(
        {
            w: o.getColumCount(), 
            h: o.getRowCount()
        }, 
        Store.findOpenUnits(fridge.storageUnits), 
        fridge.storageUnits);

        

     if(openUnits != false){
        Store.store(openUnits, order[i], storage)
     }   
}
console.log(storage);

