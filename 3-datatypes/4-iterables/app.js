// Symbol.iterator

let loop = {
    start: 1,
    end: 20
}; // even number : 2,4,6,8,...,20

loop[Symbol.iterator] = function () {
    return {
        currentValue: this.start,
        lastValue: this.end,
        next() {
            if (this.currentValue <= this.lastValue) {
                return {
                    done: false,
                    value: this.currentValue++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
}

for (let item of loop) {
    console.log(item);
}

// We can combine this implementation
let range = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
        return {
            currentValue: this.from,
            lastValue: this.to,
            next() {
                if (this.currentValue <= this.lastValue) {
                    return {
                        done: false, value: this.currentValue++,
                    }
                } else {
                    return {done: true}
                }
            }
        }
    }
}