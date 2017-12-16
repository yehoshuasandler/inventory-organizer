const uuidV4 = require("uuid/v4");
const Fridge = require("./fridge");

const maxRows = Fridge.getRowCount();
const maxColums = Fridge.getColumCount();

let inBounds = (index, storageArray) => {
    if(index.r <= maxRows && index.c <= maxColums)
        return true;
    else
        return false;
}

module.exports = {

    canFit : function(size, initIndex, storageArray){

        //If the initial index is out of bounds get out of there
        if(!inBounds(initIndex, storageArray))
            return false;


        //This is where we will push the values to of array indexes to store items
        let unitIndexes = [];

        /*
            Check if the initial Index is open findOpenunits() 
            takes care of delivering an empty unit but this is 
            to provide an extra layer of security. This will be 
            taken out soon to clean code up.
        */
        if(storageArray[initIndex.r][initIndex.c] == undefined){

            /*
                This strts out loop to check if uniits around our
                initIndex are also open. We iterate this by using 
                the size values provided. The first loop checks
                the columns
            */
            for(wIndex = 0; wIndex < size.w; wIndex++){
                if(storageArray[initIndex.r][initIndex.c + wIndex] == undefined){

                    //This loop checks the rows in the columns
                    for(hIndex = 0; hIndex < size.h; hIndex++){
                        
                        //If the index is not undefined that is becasue it is full
                        if(storageArray[initIndex.r + hIndex][initIndex.c] != undefined){
                                return false
                        }

                        /*
                            If we get here the unit was free so we push
                            the 2D index to our local vairable unitIndexes
                        */
                        unitIndexes.push({r: initIndex.r + hIndex, c: initIndex.c + wIndex});
                    }
                }
                else {
                    return false;
                }
            }
            
            /*
                If all units were free, the item can fit and returns the 
                array of indexes
            */
            return unitIndexes;
        }
        else{
            return false;
        }
    },

    findOpenUnits: function(storageArray){
        //the rows array is the first level of arrays that holds the columns array
        let rows = storageArray;
        /*
            We will keep the index of which row we are currently on this way
            we can use this value when we return the index reference of this
            2D array
        */
        let rowIndex = 0;

        //We begin our frist loop through the rows
        for(r = 0; r < rows.length; r++){
            //the colums array is the array nested inside the rows array
            let columns = rows[r];
            //Like the rowIndex we will store the index number as reference
            let columnIndex = 0;

            //No w we start our nested loop through the column array
            for(c = 0; c < columns.length; c++){
                //if our index is value is empty we can return our 2D index
                if(!columns[c]){
                    return {r: rowIndex, c: columnIndex}
                }
                else columnIndex++;
            }

            rowIndex++;
        }

        return false;

    },

    /*
        In store() we pass in the units found open in findOpenUnits()
        as well as the actual item object and the array of stored objects
        then we iterate through the open units - found in units - and assign
        the unit it unique id and the id that references the actual item object
    */
    store: function(units, item, storageArray){
        for(i = 0; i < units.length; i++){
            storageArray[units[i].r][units[i].c] = {
                id: uuidV4(),
                item_id: item.id//,
               // w: item.getColumCount(), 
               // h: item.getRowCount()
            }
        }
        return storageArray;
    }
}