export interface IAccount {
  Date_of_opening: Date;
  addCustomer(): number;
  removeCustomer(acc: number): void;
}
