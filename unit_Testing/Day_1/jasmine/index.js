class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.cart = [];
  }
  /* 
    // product is like :
    {
        name:sting,
        price:number
    }
     */
  addToCart(product) {
    this.cart.push(product);
  }
  calculateTotalCartPrice() {
    return this.cart.reduce((accPrice, prd) => accPrice + prd.price, 0);
  }

  /* 
    // deliveyOrder method should called
    // paymentModel methods should called
    // should retrun true
     */
  checkout(paymentModel, deliveyOrder) {
    paymentModel.goToVerifyPage();
    paymentModel.returnBack();
    if (paymentModel.isVerify()) {
      deliveyOrder(); //begin delivery operation
      return true;
    } else return false;
  }
}

module.exports = User;
