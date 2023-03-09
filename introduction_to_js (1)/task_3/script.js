let size = "XL";
let height ="168 sm";
console.log("size=", size, "height=", height);
const display = document.querySelector (".size").innerText = ("size "+size);
const displayEl = document.querySelector (".height").innerText = ("height "+height);

size = height;
console.log ("size=", size, "height=", height);
const displayAfter = document.querySelector (".size__after").innerText = ("size "+size);
const displayElAfter = document.querySelector (".height__after").innerText = ("height "+height);