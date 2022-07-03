var rightRedBulb = document.querySelector("#bulbRedJS")

var animateJS = rightRedBulb.animate([{
    boxShadow: "0px 0px 15px rgb(226, 29, 29)", opacity: .7, offset: 0

},{
    transform: "scale(1) translate(-2px, 0)",
        boxShadow: "2px 2px 15px rgb(221, 62, 62), -2px -2px 15px rgb(221, 62, 62)", opacity: 1, offset: 0.5

},{
    boxShadow: "0 0 15px rgb(226, 29, 29)", opacity: .7, offset: 1

}],{
    duration: 3000,
        easing: "ease",
        iterations: "Infinity",
        fill: "both"
});




var rightYellowBulb = document.querySelector("#bulbYellowJS")

var animateJS = rightYellowBulb.animate([{
    boxShadow: "0px 0px 15px rgb(226, 212, 14)", opacity: .7, offset: 0

},{
    transform: "scale(1) translate(2px, 0)",
        boxShadow: "2px 2px 15px rgb(231, 225, 143), -2px -2px 15px rgb(231, 225, 143)", opacity: 1, offset: 0.5

},{
    boxShadow: "0 0 15px rgb(226, 212, 14)", opacity: .7, offset: 1

}],{
    duration: 3000,
        easing: "ease",
        iterations: "Infinity",
        fill: "both"
});


var rightBlueBulb = document.querySelector("#bulbBlueJS")

var animateJS = rightBlueBulb.animate([{
    boxShadow: "0px 0px 15px rgb(22, 88, 141)", opacity: .7, offset: 0

},{
    transform: "scale(1) translate(2px, 0)",
        boxShadow: "2px 2px 15px rgb(118, 161, 197), -2px -2px 15px rgb(118, 161, 197)", opacity: 1, offset: 0.5

},{
    boxShadow: "0 0 15px rgbrgb(22, 88, 141)", opacity: .7, offset: 1

}],{
    duration: 3000,
        easing: "ease",
        iterations: "Infinity",
        fill: "both"
});