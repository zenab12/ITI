export class Account {
  constructor(public Acc_no: number = 0, public Balance: number = 0) {}

  debitAmount(amount: number = 0): void {
    this.Balance += amount;
  }
  creditAmount(amount: number = 0): number {
    if (amount < this.Balance) this.Balance -= amount;
    return this.Balance;
  }
  getBalance(): number {
    return this.Balance;
  }
}
