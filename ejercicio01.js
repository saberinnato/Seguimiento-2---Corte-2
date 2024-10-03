class ATM {
    constructor() {
        this.customers = {
            '123456789': { pin: '1234', accounts: { 'Ahorros': 1000000, 'Corriente': 500000 } }
        };
        this.bankApproval = true;
    }

    authenticate(id, pin) {
        if (this.customers[id] && this.customers[id].pin === pin) {
            return true;
        }
        return false;
    }

    withdraw(id, account, amount) {
        if (this.bankApproval && amount % 50000 === 0 && this.customers[id].accounts[account] >= amount) {
            this.customers[id].accounts[account] -= amount;
            console.log(`Retiro exitoso, puede tomar $${amount}`);
        } else {
            console.log('Error en el retiro');
        }
    }

    deposit(id, account, amount, type) {
        this.customers[id].accounts[account] += amount;
        console.log(`${type} de $${amount} depositado en ${account}`);
    }

    transfer(id, fromAccount, toAccount, amount) {
        if (this.customers[id].accounts[fromAccount] >= amount) {
            this.customers[id].accounts[fromAccount] -= amount;
            this.customers[id].accounts[toAccount] += amount;
            console.log(`Transferencia exitosa de $${amount} de ${fromAccount} a ${toAccount}`);
        } else {
            console.log('Fondos insuficientes');
        }
    }

    checkBalance(id, account) {
        console.log(`Saldo de ${account}: $${this.customers[id].accounts[account]}`);
    }
}

// Uso:
const atm = new ATM();
atm.authenticate('123456789', '1234');
atm.checkBalance('123456789', 'Ahorros');
atm.withdraw('123456789', 'Ahorros', 100000);
atm.deposit('123456789', 'Ahorros', 200000, 'Efectivo');
atm.transfer('123456789', 'Ahorros', 'Corriente', 50000);
