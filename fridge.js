let fridge = {
    h: 51,
    w: 23,
    area: function(){ return this.h * this.w; },
    rowSize: 4,
    coloumSize: 5,
    getRowCount: function(){ return Math.floor(this.h/this.rowSize)},
    getColumCount: function(){ return Math.floor(this.w/this.coloumSize)},
    getUnitCount: function(){ return this.getRowCount() * this.getColumCount()}
}


let storageUnitsArray = () =>{
    //create array that will represent the rows of storage in the fridge
    let rows = new Array(fridge.getRowCount());
    
    //fill each row with an array that will equal the amount of colums
    for(i = 0; i < rows.length; i++){
        rows[i] = new Array(fridge.getColumCount());
    }

    return rows;
}

/*This adds the newly create 4D array to the fridge object
    this creates the gride system we will need for 
    automating our item arangement
*/
fridge.storageUnits = storageUnitsArray();


module.exports = fridge;