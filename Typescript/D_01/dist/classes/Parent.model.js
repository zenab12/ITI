export class Account {
    Acc_no;
    Balance;
    constructor(Acc_no = 0, Balance = 0) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount(amount = 0) {
        this.Balance += amount;
    }
    creditAmount(amount = 0) {
        if (amount < this.Balance)
            this.Balance -= amount;
        return this.Balance;
    }
    getBalance() {
        return this.Balance;
    }
}
