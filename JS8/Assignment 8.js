"use strict";

var k = ["Buccaneers", "Falcons", "Saints", "Panthers"];
console.log(k[1]);

for (var i = 0; i < 10; i++) {
    console.log(i);
};

for (var i = 0; i < k.length; i++) {
    console.log(k[i]);

};

for (var i = 0; i < k.length; i++) {
    if (k[i].substring(0, 1) === "P") {
        console.log(k[i]);
    };
};


var car = {
    doors: 4,
    honk: "honk"
}
console.log(car);