class DataClass {
  private timeZone: string;

  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }

  getTime() {
    var d = new Date();
    return d.getTime();
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
console.log(response );
