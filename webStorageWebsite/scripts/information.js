"use strict";
const name = localStorage.getItem('name');
const role = localStorage.getItem('role');
const welcomeMessage = document.getElementById('welcomeMessage');

if (role === 'instructor') {
    welcomeMessage.innerHTML = `Welcome Instructor ${name}`;
    document.getElementById('button3').style.display = 'none';
} else if (role === 'student') {
    welcomeMessage.innerHTML = `Welcome Student ${name}`;
}

// Adding dummy functionality to the buttons
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById("button2");

btn1.onclick = function () {
    alert('Button 1 clicked');
}

btn2.onclick = function () {
    alert('Button 2 clicked');
}


