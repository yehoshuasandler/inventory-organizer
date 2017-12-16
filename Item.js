const uuidV4 = require("uuid/v4");
const fridge = require("./fridge");

/*
    For the moment we are completely randomizing the item creation.
    This code will eventually be brought to a front end client and
    be used to process data coming from a API
*/

const size = {
    xSmall :{ w:5, h:4},
    small: { w:5, h:5},
    wide: { w:10, h:4},
    big: { w: 10, h: 8}
}

const categories = {
    warming: "warming",
    bagels: "bagels",
    loafs: "loafs",
    crossants: "crossants"
}

const lifespan = {
    one: 1,
    two: 2,
    seven: 7
}


const randomProperty =  obj => {
    let keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};


module.exports = function(data){
    return {
        id: uuidV4(),
        category: randomProperty(categories),
        lifespan: randomProperty(lifespan),
        size: randomProperty(size),
        getColumCount : function(){return Math.ceil(this.size.w / fridge.coloumSize)},
        getRowCount: function(){return Math.ceil(this.size.h / fridge.rowSize)},
        getArea: function(){ return this.size.h * this.size.h; },
        getUnitCount: function(){
            return this.getRowCount() * this.getColumCount();
        }
    }
}