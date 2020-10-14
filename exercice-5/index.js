'use strict';

window.onload = generateForm;

/**
*
*/
function generateForm() {
    console.log("coucou")
    var form = document.createElement("form");
    var list = document.createElement("ul");

    var fields = {
        name: document.createElement("input"),
        nickname: document.createElement("input"),
        email: document.createElement("input"),
        password: document.createElement("input"),
        submit: document.createElement("input")
    }

    fields.name.type = "text";
    fields.name.placeholder = "Name";
    fields.name.pattern = "^[a-zA-Z]+$";
    fields.name.title = "Only letters";
    fields.name.name = "name";
    fields.nickname.type = "text";
    fields.nickname.name = "nickname";
    fields.nickname.placeholder = "Nickname";
    fields.nickname.pattern = "^[a-zA-Z]+$";
    fields.nickname.title = "Only letters";
    fields.email.type = "email";
    fields.email.name = "email";
    fields.email.placeholder = "jonh@gmail.com";
    fields.password.type = "password";
    fields.password.name = "password";
    //     fields.password.pattern = "";
    fields.password.title = "min 8 numbers, 1 number, one letter and one special char. "
    fields.password.placeholder = "Password";
    fields.submit.type = "submit";
    fields.submit.value = "Send";

    Object.keys(fields).map(function (field) {
        if (field != "submit") {
            fields[field].required = true;
        }
        var li = document.createElement("li");
        li.appendChild(fields[field]);
        list.appendChild(li);
    });
    list.style.listStyleType = "none";
    form.append(list);
    form.onsubmit = function (event) {
        event.preventDefault();
        submitForm();
    }

    document.querySelector("body").appendChild(form);

}


function submitForm() {
    document.querySelectorAll("input:not([type='submit'])").forEach(function (element) {
        element.value = "";
    });
    alert("thank you");
}
