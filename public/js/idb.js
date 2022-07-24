const {response} = require("express");

let db;

const request = indexdDB.open('budgetTracker', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStor('new_transaction', {autoIncrement: true})
}

request.onsuccess = function(event) {
    db = event.target.result
    if (navigator.online) {
        uploadTransaction()
    }
}

request.onerror = function (event) {
    console.log(console.error())
}