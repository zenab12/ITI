const User = require("../../index");

// TEST with jasmine
describe("test User class", () => {
  let user;
  let product_1;
  let product_2;
  let product_3;

  beforeEach(() => {
    user = new User("zien", "123456");
    product_1 = { name: "Juice", price: 50 };
    product_2 = { name: "shwarma", price: 100 };
    product_3 = { name: "potato", price: 120 };
  });
  describe("test addToCart method", () => {
    it("check the product cart is empty", () => {
      expect(user.cart.length).toEqual(0);
    });

    it("check the product name is string", () => {
      user.addToCart(product_3);
      expect(typeof user.cart[0]["name"]).toEqual("string");
    });

    it("check the product price is number", () => {
      user.addToCart(product_3);
      expect(typeof user.cart[0]["price"]).toEqual("number");
    });

    it("should push the product in the cart", () => {
      user.addToCart(product_1);
      user.addToCart(product_2);
      expect(user.cart).toEqual([
        { name: "Juice", price: 50 },
        { name: "shwarma", price: 100 },
      ]);
    });
  });

  describe("test calculateTotalCartPrice method", () => {
    it("test the total product price is equal 150", () => {
      user.addToCart(product_1);
      user.addToCart(product_2);
      expect(user.calculateTotalCartPrice()).toEqual(150);
    });
  });

  describe("test checkout method ", () => {
    let fakeObj;
    let fakeFunction;
    beforeEach(() => {
      fakeObj = jasmine.createSpyObj([
        "goToVerifyPage",
        "returnBack",
        "isVerify",
      ]);
      fakeFunction = jasmine.createSpy("deliveyOrder");
      fakeObj.isVerify.and.callFake(function () {
        return true;
      });
    });
    it("checkout should call goToVerifyPage, returnBack,isVerify from productModel", () => {
      user.checkout(fakeObj, fakeFunction);
      expect(fakeObj.goToVerifyPage).toHaveBeenCalled();
      expect(fakeObj.returnBack).toHaveBeenCalled();
    });

    it("checkout should call deliveryOrder", () => {
      user.checkout(fakeObj, fakeFunction);
      expect(fakeFunction).toHaveBeenCalled();
      expect(fakeFunction).toHaveBeenCalledTimes(1);
    });
  });
});
