class login_system {
  validateAccount(id, password, accountNumber) {
    let available_ids = [1, 2, 3, 4, 5, 6];
    let available_passwords = ["a", "b", "c", "d", "e", "f"];
    let available_accountNumbers = [1001, 1002, 1003, 1004, 1005, 1006];
    let is_valid = false;
    for (let i = 0; i < available_ids.length; i++) {
      if (
        id == available_ids[i] &&
        password == available_passwords[i] &&
        accountNumber == available_accountNumbers[i]
      ) {
        is_valid = true;
        break;
      }
    }
    return is_valid;
  }
}

class CIB_sys extends login_system {
  constructor(id, password, accountNumber) {
    super();
    console.log("CIB Login System : checking credintial ....");
    if (this.validateAccount(id, password, accountNumber)) {
      console.log("CIB Login System : valid credintial ....");
      console.log("CIB Login System : valid Account info");
      this.state = true;
      this.amount = 0;
    } else {
      console.log("CIB Login System : invalid credintial ....");
      console.log("CIB Login System : invalid Account info");
    }
  }
  checkBalance() {
    if (this.state) {
      this.amount = 1000;
      console.log("Balance is 1000");
    } else {
      console.log("Invalid account");
    }
  }
}

class CIB_sys2 {
  constructor(amount) {
    this.amount = amount;
  }
  transferBalance(amount) {
    amount ? (amount = amount) : (amount = this.amount);
    if (amount > 1000) {
      console.log("CIB_sys 2 transfering " + amount + " to central Bank ...");
    } else {
      console.log("amount isn't allowed");
    }
    return amount;
  }

  done() {
    console.log("CIB_SYS 2 : Done");
  }
}

class Central_bank extends CIB_sys2 {
  constructor(accountNumber) {
    super();
    console.log(
      "the central bank : checking credintial bank_id" +
        accountNumber +
        "on Abozabi Bank"
    );
    let available_accountNumbers = [1001, 1002, 1003, 1004, 1005, 1006];

    if (available_accountNumbers.includes(accountNumber)) {
      console.log("the central bank : valid credintial ....");
      this.state = true;
      this.amount = 0;
    } else {
      console.log("the central bank : invalid credintial ....");
      console.log("the central bank : invalid Account info");
    }
  }
  transferingBalance(amount) {
    if (this.state) {
      console.log(
        "the central bank : transfering " +
          this.transferBalance(amount) +
          " to Abozabi Bank ..."
      );
      console.log("done");
    } else {
      console.log("amount isn't allowed");
    }
  }
}

////............
class transferFacade {
  constructor(id, password, accountNumber, amount, transferedBankId) {
    // composition
    this.cib1 = new CIB_sys(id, password, accountNumber);
    this.centeral = new Central_bank(transferedBankId);
    this.cib2 = new CIB_sys2(amount);
  }
  transferMoney(amount) {
    this.cib1;
    this.cib2.transferBalance(amount);
    this.centeral.transferingBalance(amount);
    this.cib2.done();
  }
}

function withFacade() {
  // client
  let transferSystem = new transferFacade(1, "a", 1001, 3000, 1006);
  transferSystem.transferMoney(3000);
}
