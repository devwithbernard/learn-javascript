// Exercise 1
'use strict'
const calculator = {
    read: function (a, b) {
        this.a = a;
        this.b = b;
    },
    sum: function () {
        return this.a + this.b;
    },
    multiply: function () {
        return this.a * this.b;
    }
}

// Test
calculator.read(5, 4);
console.log(calculator.sum());
console.log(calculator.multiply());


// Exercise 2
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
}

console.log(ladder.up().up().down().showStep().up().up().up().down());