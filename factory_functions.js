//Using constructors and function prototypes
const Sport = function Player(playername, networth) {
    this.playername = playername;
    this.networth = networth;
}

Sport.prototype.sayHello = function () {
    console.log(`${this.playername} says Hello!`);
}

const blasio = new Sport("Blasio", "5million bob");

blasio.sayHello();

//Using factory functions
const Sports = (playernames, netvalue) => {
    const sayHi = () => {
        console.log(`${playernames} says Hi!`)
    }
    return { playernames, netvalue, sayHi }
}

const blaise = Sports("Blaise", "50million");

blaise.sayHi();

//Private Variable and functions using closure
const PublicTransport = (buses, matatus) => {
    const license = () => {
        console.log(`The licenses for ${buses} are many.`);
    }
    const colors = () => {
        console.log(`The colors for ${matatus} are many.`);
    }
    return { buses, matatus, license, colors };
}

const schoolBoys = PublicTransport("Kenya Bus", "Umoina Sacco");

schoolBoys.license();
schoolBoys.colors();

//Module function pattern
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add,
        sub,
        mul,
        div,
    };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476