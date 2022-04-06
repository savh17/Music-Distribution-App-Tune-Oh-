function displayCart() {
    var total = 0;
    for (key in theCart) {
        // creating HTML nodes
        var table = document.getElementById("theCart")
        var tableRow = document.createElement("TR");
        var tableData_item = document.createElement("TD");
        var tableData_price = document.createElement("TD");
        var para_itemName = document.createElement("P");
        var para_itemQty = document.createElement("P");

        // creating text nodes
        var textNode_itemName = document.createTextNode(itemNames[key]);
        var textNode_Qty = document.createTextNode(`Qty ${theCart[key]}`);
        var textNode_totalPrice = document.createTextNode(`LKR ${(Math.round(theCart[key] * eval(key) * 100) / 100)}`);

        // calculating the total bill
        total += Math.round(theCart[key] * eval(key) * 100) / 100;

        // adding classes to the HTML nodes just created
        para_itemName.classList.add("item-name");
        para_itemQty.classList.add("item-qty");
        tableData_price.classList.add("price");

        // appending children to the parent elements
        para_itemName.appendChild(textNode_itemName);
        para_itemQty.appendChild(textNode_Qty);
        tableData_price.appendChild(textNode_totalPrice);

        tableData_item.appendChild(para_itemName);
        tableData_item.appendChild(para_itemQty);

        tableRow.appendChild(tableData_item);
        tableRow.appendChild(tableData_price);

        table.appendChild(tableRow);
    }

    // displaying total bill in the last row of the table
    var tableRow = document.createElement("TR");
    var tableData_item = document.createElement("TD");
    var tableData_price = document.createElement("TD");
    var para_itemName = document.createElement("P");

    var textNode_itemName = document.createTextNode("TOTAL");
    var textNode_totalPrice = document.createTextNode(`LKR ${total}`);

    para_itemName.appendChild(textNode_itemName);

    tableData_item.appendChild(para_itemName);
    tableData_price.appendChild(textNode_totalPrice);

    tableRow.appendChild(tableData_item);
    tableRow.appendChild(tableData_price);

    tableRow.classList.add("total");

    table.appendChild(tableRow);

}


function validateForm() {
    // retriving values from the input feilds
    var fnameValue = fname.value.trim();
    var lnameValue = lname.value.trim();
    var emailValue = email.value.trim();
    var address1Value = address1.value.trim();
    var stateValue = state.value;
    var countryValue = country.value;
    var zipValue = zip.value;

    var readyToSubmit = true;

    // validation of input feilds
    if (fnameValue == "") {
        displayWarning(fname, "First name can't be empty");
        readyToSubmit = false;
    }
    else {
        displayTick(fname);
    }


    if (lnameValue == "") {
        displayWarning(lname, "Last name can't be empty");
        readyToSubmit = false;
    }
    else {
        displayTick(lname);
    }


    if (emailValue == "") {
        displayWarning(email, "Email can't be empty");
        readyToSubmit = false;
    }
    else {
        email.parentElement.classList.remove("error");
    }


    if (address1Value == "") {
        displayWarning(address1, "Address can't be empty");
        readyToSubmit = false;
    }
    else {
        displayTick(address1);
    }

    if (stateValue == "0") {
        displayWarning(state, "Choose your state");
        readyToSubmit = false;
    }
    else {
        displayTick(state);
    }

    if (countryValue == "0") {
        displayWarning(country, "Choose your country");
        readyToSubmit = false;
    }
    else {
        displayTick(country);
    }

    if (zipValue == "") {
        displayWarning(zip, "ZIP can't be empty");
        readyToSubmit = false;
    }
    else if (zipValue.length < 4) {
        displayWarning(zip, "Invalid ZIP");
        readyToSubmit = false;
    }
    else {
        displayTick(zip);
    }

    // preparing data for pass into the session storage
    if (readyToSubmit) {
        var userData = {
            "fname": fnameValue,
            "lname": lnameValue,
            "email": emailValue,
            "address1": address1Value,
            "state": stateValue,
            "zip": zipValue,
            "country": countryValue,
        };

        // passing data into the session storage
        sessionStorage.setItem("billingDetails", JSON.stringify(userData));

        // redirecting to the thank you page
        window.location.href = "../thankyou/thankyou.html";
    }
}


function validateText(inputField, message) {
    var value = inputField.value.trim();
    if (value == "") {
        displayWarning(inputField, message);
    }
    else {
        displayTick(inputField);
    }
}


function validateDropDownMenu(inputField, message) {
    var value = inputField.value.trim();
    if (value == "0") {
        displayWarning(inputField, message);
    }
    else {
        displayTick(inputField);
    }
}




function validateZIP() {
    var value = zip.value.trim();
    if (value == "") {
        displayWarning(zip, "ZIP can't be empty");
    }
    else if (value.length < 4) {
        displayWarning(zip, "Invalid ZIP");
    }
    else {
        displayTick(zip);
    }
}


function validateEmail() {
    var value = email.value.trim();
    if (value == "") {
        displayWarning(email, "Email can't be empty");
    }
    else {
        email.parentElement.classList.remove("error");
    }
}


function displayTick(errorField) {
    errorField.parentElement.classList.remove("error");
    errorField.parentElement.classList.add("success");
}


function displayWarning(errorField, errorMessage) {
    const formController = errorField.parentElement
    formController.classList.remove("success");
    formController.classList.add("error");
    formController.querySelector("small").innerText = errorMessage
}


// accessing the session storage
var sessionString = sessionStorage.getItem("theCart");
var theCart = JSON.parse(sessionString);

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

// selecting DOM elements
const form = document.getElementById("form")

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const state = document.getElementById("state");
const country = document.getElementById("country");
const zip = document.getElementById("zip");


// var tableRow = document.createElement("TR");
// var tableData_item = document.createElement("TD");

displayCart()

fname.addEventListener("input", function () { validateText(fname, "First name can't be empty"); });
lname.addEventListener("input", function () { validateText(lname, "Last name can't be empty"); });
email.addEventListener("input", function () { validateEmail(email, "Email name can't be empty"); });
address1.addEventListener("input", function () { validateText(address1, "Address can't be empty"); });
state.addEventListener("input", function () { validateDropDownMenu(state, "Choose your state"); });
country.addEventListener("input", function () { validateDropDownMenu(country, "Choose your country"); });
zip.addEventListener("input", function () { validateZIP(); });

form.addEventListener("submit", e => {
    e.preventDefault();
    validateForm();
});