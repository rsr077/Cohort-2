function delay(name: ()=> void) {
    setTimeout(name, 2000)
}

delay(function () {
    console.log("hi there")
})