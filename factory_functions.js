//Using constructors and function prototypes
const Sport = function Player(playername, networth) {
    this.playername = playername;
    this.networth = networth;
}

Sport.prototype.sayHello = function () {
    console.log(`${this.playername} says Hello!`);
}

const blasio = new Sport("Blaise", "5million bob");

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
