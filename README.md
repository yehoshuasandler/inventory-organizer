#Inventory Organizer

##Purpose

This program is designed for the purpose of organizing and optimising storage space 
for Starbucks store frozen inventory to help minizige overage of ordering that leads
to fod being stored in inapropriate places and leads to great quanitities of waste.

This is not a tool to be used on its own put is a tool to be used in conjunction with 
a connected system of other tools to aid the inventory and ordering issues faced by managers
and supervisors in Starbucks Stores.

##Design
Fridges for Frozen follow the same layout. Some models may vary but all are designed to store 
boxes or frozen goods in a 2D manner becasue all boxes are the same depth as the fidges. 

The storage space availible is broken up into a 2D array of rows and columns. Where the 
first array is an array of "rows" while the array nested inside of it is tha array of "columns"

So an index is specified as "arr[row][column]"

Currently the modules are brokemn into the fridge and item objects and the Store module that consists
of helper functions to perform the tasks of calculating ans storing items into 
the array indexs properly. Index.js is just the script that runs the program and currently
generates a random order of objects.

##Next
More helper functions created for the Store module such as query functions and sorting functions to 
catagorize the inventory before storing it.

Have a a Node.js + Express.js api access this to serve up the data to a frontend in which orders will be 
submitted along with current inventory to check to make sure there is enough storage space.