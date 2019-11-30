var bookList = [{ name: "The Deep Learning Book", imgNo: "9", author: "Ian Goodfellow, Aaron Courville, Yoshua Bengio", edition: "1st ed.", publisher: "MITPress, 2015", description: "A complete guide on deep learning.", topic: "Computer Science" }, { name: "Introduction to Algorithms", imgNo: "1", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein", edition: "3rd ed.", publisher: "MITPress, 2009", description: "A complete guide on algorithms.", topic: "Computer Science" }]

var loginStatus = false;
var accountFlag = false;

function Search() {
    var searchedQuery = document.getElementById("searchedQuery");
    var flag = false;
    for (let i = 0; i < bookList.length; i++) {
        if (searchedQuery.value === bookList[i].name) {
            var heading = document.getElementById("heading");
            heading.innerHTML = bookList[i].name;
            var slideshow = document.getElementById("slideshow");
            var replaceHTML = `<img src="./Images/${bookList[i].imgNo}.jpg" alt="Book 1" width="20% style="margin-right: 40%; display: inline-block;">`;
            var replaceData = `<div class="slide-text">Authors: ${bookList[i].author} <br> Edition: ${bookList[i].edition} <br> Publisher: ${bookList[i].publisher} <br> Description: ${bookList[i].description} <br> Topic: ${bookList[i].topic} <br> <span class="slide-text" id="availability">Availability: A </span><br><button onclick="issueBook()">Issue Book</button></div>`;
            slideshow.innerHTML = replaceHTML + replaceData;
            flag = true;
        }
    }
    if (flag === false) {
        var heading = document.getElementById("heading");
        heading.innerHTML = "No Results Found!";
        var slideshow = document.getElementById("slideshow");
        slideshow.innerHTML = "";
    }
}

function issueBook() {
    alert("The book has been reserved! Please collect within 12 hours!");
    var availability = document.getElementById("availability");
    availability.innerHTML = "Availability: B"
}

function Login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value === "subhashissuara" && password.value === "12345678") {
        loginStatus = true;
        accountFlag = false;
        var nav_login = document.getElementById("nav_login");
        var nav_register = document.getElementById("nav_register");
        var nav_home = document.getElementById("nav_home");
        nav_home.innerHTML = "";
        nav_login.innerHTML = "Subhashis Suara";
        nav_register.innerHTML = '<a href="./index.html" onclick="Logout()">Logout</span>';
        var hide = document.getElementById("hide");
        hide.innerHTML = "";
        var modal = document.getElementsByClassName("modal_heading")[0];
        modal.innerHTML = "Logged In!";
    }
    else {
        var hide = document.getElementById("hide");
        hide.innerHTML = "";
        var modal = document.getElementsByClassName("modal_heading")[0];
        modal.innerHTML = 'Invalid Credentials! <br> <a  href="index.html" style="display: block; margin-top: 30px; color: red;">Try Again</a>';
        accountFlag = true;
    }
}

function Register() {
    loginStatus = true;
    accountFlag = false;
    var nav_login = document.getElementById("nav_login");
    var nav_register = document.getElementById("nav_register");
    var nav_home = document.getElementById("nav_home");
    nav_home.innerHTML = "";
    nav_login.innerHTML = "Subhashis Suara";
    nav_register.innerHTML = '<a href="./index.html" onclick="Logout()">Logout</span>';
    var hide_register = document.getElementById("hide_register");
    hide_register.innerHTML = "";
    var modal_register = document.getElementsByClassName("modal_heading_register")[0];
    modal_register.innerHTML = "Registered & Logged In!";
}

function Logout() {
    loginStatus = false;
    accountFlag = true;
}
