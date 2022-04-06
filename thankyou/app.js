// accessing session storage
var sessionString = sessionStorage.getItem("billingDetails");
const billingDetails = JSON.parse(sessionString);

var sessionString = sessionStorage.getItem("theCart");
const theCart = JSON.parse(sessionString);


// product prices
const item1 = 1999.99;
const item2 = 1499.99;
const item3 = 1299.99;
const item4 = 699.99;
const item5 = 699.99;
const item6 = 499.99;


var itemNames = {
    "item1": "RED Taylor's Version Album",
    "item2": "Fearless Taylor's Version Album",
    "item3": "Evermore Album",
    "item4": "Folklore Album",
    "item5": "Lover Album",
    "item6": "Reputation Album"
};


// accessing html DOM elements
var fullname = document.querySelector(".name");
var email = document.querySelector(".email");
var address = document.querySelector(".address");


// assigning personal details to variables 
const NAME = `${billingDetails["fname"]}  ${billingDetails["lname"]}`;
const EMAIL = billingDetails["email"];
const ADDRESS = `${billingDetails["address1"]}, ${billingDetails["state"]}, ${billingDetails["zip"]}, ${billingDetails["country"]}.`;


// displaying personal details on html document
fullname.textContent = `NAME : ${NAME}`;
email.textContent = `EMAIL : ${EMAIL}`;
address.textContent = `ADDRESS : ${ADDRESS}`;


addProductsToTheBill();

function addProductsToTheBill() {
    let totalPrice = 0;
    let bill = document.getElementById("bill");
    for (key in theCart) {
        // creating HTML nodes
        let divElement = document.createElement("DIV");
        let horizontalLine = document.createElement("HR");
        let para_itemName = document.createElement("P");
        let para_itemQty = document.createElement("P");
        let para_itemPrice = document.createElement("P");

        // creating text nodes
        itemNameText = document.createTextNode(`ALBUM : ${itemNames[key]}`);
        itemQtyText = document.createTextNode(`QTY : ${theCart[key]}`);
        itemPriceText = document.createTextNode(`PRICE : LKR ${eval(key)} X ${theCart[key]}`);

        // calculating total bill
        totalPrice += theCart[key] * eval(key);

        // appending nodes to the parent nodes
        para_itemName.appendChild(itemNameText);
        para_itemQty.appendChild(itemQtyText);
        para_itemPrice.appendChild(itemPriceText);


        divElement.appendChild(para_itemName);
        divElement.appendChild(para_itemQty);
        divElement.appendChild(para_itemPrice);
        divElement.appendChild(horizontalLine);

        bill.appendChild(divElement);
    }

    // displaying total bill
    let para_total = document.createElement("P");
    totalText = document.createTextNode(`TOTAL : LKR ${totalPrice.toFixed(2)}`);

    para_total.appendChild(totalText);
    bill.appendChild(para_total);
}