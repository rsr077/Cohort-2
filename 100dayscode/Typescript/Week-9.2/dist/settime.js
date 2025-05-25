"use strict";
function delay(name) {
    setTimeout(name, 2000);
}
delay(function () {
    console.log("hi there");
});
