
function addItemToCart(item) {
    if ((dict[item])) {
        dict[item] += parseInt(document.getElementById(item + "Qty").value);
    }
    else {
        dict[item] = parseInt(document.getElementById(item + "Qty").value);
    }

}


function buyNow(item) {
    if ((dict[item])) {
        dict[item]++;
    }
    else {
        dict[item] = 1;
    }

    // passing the items in the cart to the session storage
    sessionStorage.setItem("theCart", JSON.stringify(dict));

    // redirecting to the checkout page
    window.location.href = "../checkout/checkout.html";
}


function promptMessage() {
    var message = "Your Cart\n\n";
    for (var key in dict) {
        message += `${itemNames[key]} x ${dict[key]} = LKR ${dict[key] * eval(key)}\n`;
    }

    message += "\nClick OK to checkout now!\nClick CANCEL to checkout later!";
    var messageBox = confirm(message);

    if (messageBox == true) {
        // passing the items in the cart to the session storage
        sessionStorage.setItem("theCart", JSON.stringify(dict));

        // redirecting to the checkout page
        window.location.href = "../checkout/checkout.html";
    }
}



function viewCart() {

    if (Object.keys(dict).length > 0) {
        promptMessage()
    }
    else {
        alert("Your cart is empty!\nPlease add some items to your cart before you checkout.")
    }

}


// declaring constant variables
const item1 = 1999.99;
const item2 = 1499.99;
const item3 = 1299.99;
const item4 = 699.99;
const item5 = 699.99;
const item6 = 499.99;

const itemNames = {
    "item1": "RED Taylor's Version Album",
    "item2": "Fearless Taylor's Version Album",
    "item3": "Evermore Album",
    "item4": "Folklore Album",
    "item5": "Lover Album",
    "item6": "Reputation Album"
};

// selecting add-to-cart buttons
var item1_CartBtn = document.getElementById("item1");
var item2_CartBtn = document.getElementById("item2");
var item3_CartBtn = document.getElementById("item3");
var item4_CartBtn = document.getElementById("item4");
var item5_CartBtn = document.getElementById("item5");
var item6_CartBtn = document.getElementById("item6");

var viewCartBtn = document.getElementById("viewCart");

// selecting buy-now buttons
var item1_BuyNowBtn = document.getElementById("item1BuyNow");
var item2_BuyNowBtn = document.getElementById("item2BuyNow");
var item3_BuyNowBtn = document.getElementById("item3BuyNow");
var item4_BuyNowBtn = document.getElementById("item4BuyNow");
var item5_BuyNowBtn = document.getElementById("item5BuyNow");
var item6_BuyNowBtn = document.getElementById("item6BuyNow");

// diplaying prices in the DOM
item1_BuyNowBtn.firstChild.textContent = "LKR " + item1;
item2_BuyNowBtn.firstChild.textContent = "LKR " + item2;
item3_BuyNowBtn.firstChild.textContent = "LKR " + item3;
item4_BuyNowBtn.firstChild.textContent = "LKR " + item4;
item5_BuyNowBtn.firstChild.textContent = "LKR " + item5;
item6_BuyNowBtn.firstChild.textContent = "LKR " + item6;

var dict = {};

// adding items to cart and prompting a message
item1_CartBtn.onclick = function () { addItemToCart("item1"), promptMessage() };
item2_CartBtn.onclick = function () { addItemToCart("item2"), promptMessage() };
item3_CartBtn.onclick = function () { addItemToCart("item3"), promptMessage() };
item4_CartBtn.onclick = function () { addItemToCart("item4"), promptMessage() };
item5_CartBtn.onclick = function () { addItemToCart("item5"), promptMessage() };
item6_CartBtn.onclick = function () { addItemToCart("item6"), promptMessage() };

viewCartBtn.onclick = function () { viewCart() };

// buy now functionality
item1_BuyNowBtn.onclick = function () { buyNow('item1') };
item2_BuyNowBtn.onclick = function () { buyNow('item2') };
item3_BuyNowBtn.onclick = function () { buyNow('item3') };
item4_BuyNowBtn.onclick = function () { buyNow('item4') };
item5_BuyNowBtn.onclick = function () { buyNow('item5') };
item6_BuyNowBtn.onclick = function () { buyNow('item6') };