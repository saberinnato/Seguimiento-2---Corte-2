class BankQueue {
    constructor() {
        this.queue = [];
        this.turnCounter = 0;
    }

    takeTurn() {
        this.turnCounter++;
        this.queue.push(this.turnCounter);
        console.log(`Turno ${this.turnCounter} tomado`);
    }

    callNext() {
        if (this.queue.length > 0) {
            const nextTurn = this.queue.shift();
            console.log(`Llamando al turno ${nextTurn}`);
        } else {
            console.log('No hay turnos en espera');
        }
    }

    showQueue() {
        console.log('Turnos en espera: ', this.queue);
    }
}

// Uso:
const bank = new BankQueue();
bank.takeTurn();
bank.takeTurn();
bank.callNext();
bank.showQueue();
