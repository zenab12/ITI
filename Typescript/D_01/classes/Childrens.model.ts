import { Account } from "./Parent.model.js";
import * as interfaces from "../interfaces/IAccount.interface";
export class Saving_Account extends Account implements interfaces.IAccount {
  constructor(
    public Acc_no: number = 0,
    public Balance: number = 0,
    public Min_Balnce: number = 0,
    public Date_of_opening: Date = new Date()
  ) {
    super(Acc_no, Balance);
  }
  addCustomer() {
    this.Acc_no = this.Acc_no;
    return this.Acc_no;
  }
  removeCustomer(Acc_no: number) {
    Acc_no = 0;
    this.Acc_no = Acc_no;
  }
}

export class Current_Account extends Account implements interfaces.IAccount {
  constructor(
    public Acc_no: number = 0,
    public Balance: number = 0,
    public interset_rate: number = 0,
    public Date_of_opening: Date = new Date()
  ) {
    super(Acc_no, Balance);
  }
  addCustomer() {
    this.Acc_no = this.Acc_no;
    return this.Acc_no;
  }
  removeCustomer(Acc_no: number) {
    Acc_no = 0;
    this.Acc_no = Acc_no;
  }
}
