"use strict";
const userFormSubmittion = document.getElementById('userForm');

userFormSubmittion.onsubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    localStorage.setItem('name', name);
    localStorage.setItem('role', role);
    location.href = "information.html";
}


