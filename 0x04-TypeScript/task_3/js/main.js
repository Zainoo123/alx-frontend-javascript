"use strict";
/// <reference path="./crud.d.ts" />
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var CRUD = require("./crud");
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = CRUD.insertRow(row);
var UpdatedRow = __assign({ age: 23 }, row);
CRUD.updateRow(newRowID, UpdatedRow);
CRUD.deleteRow(newRowID);
