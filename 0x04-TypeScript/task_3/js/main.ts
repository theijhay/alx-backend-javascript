// main.ts

// Include the type declarations from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import necessary types and functions from other files
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Define an object with RowElement type
const obj: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };

// Call insertRow function with obj
CRUD.insertRow(obj);
// Insert row {firstName: "Guillaume", lastName: "Salva"}

// Define an updatedRow object with age field set to 23
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

// Call updateRow function with newRowID and updatedRow
CRUD.updateRow(125, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// Call deleteRow function to delete row with id 125
CRUD.deleteRow(125);
// Delete row id 125
