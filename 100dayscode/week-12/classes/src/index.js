"use strict";
class DataClass {
    constructor(timeZone) {
        this.timeZone = timeZone;
    }
    getTime() {
        var d = new Date();
        return d.getTime().toString();
    }
    getMonth() {
        var d = new Date();
        return d.getMonth();
    }
    getTimezone() {
        return this.timeZone;
    }
}
const dataObject = new DataClass("IND");
const response = dataObject.getTime();
console.log(response);
