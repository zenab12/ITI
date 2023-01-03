import { Account } from "./Parent.model.js";
export class Saving_Account extends Account {
    Acc_no;
    Balance;
    Min_Balnce;
    Date_of_opening;
    constructor(Acc_no = 0, Balance = 0, Min_Balnce = 0, Date_of_opening = new Date()) {
        super(Acc_no, Balance);
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Min_Balnce = Min_Balnce;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() {
        this.Acc_no = this.Acc_no;
        return this.Acc_no;
    }
    removeCustomer(Acc_no) {
        Acc_no = 0;
        this.Acc_no = Acc_no;
    }
}
export class Current_Account extends Account {
    Acc_no;
    Balance;
    interset_rate;
    Date_of_opening;
    constructor(Acc_no = 0, Balance = 0, interset_rate = 0, Date_of_opening = new Date()) {
        super(Acc_no, Balance);
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.interset_rate = interset_rate;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() {
        this.Acc_no = this.Acc_no;
        return this.Acc_no;
    }
    removeCustomer(Acc_no) {
        Acc_no = 0;
        this.Acc_no = Acc_no;
    }
}
