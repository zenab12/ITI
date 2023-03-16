import React from "react";
import Table from "react-bootstrap/Table";
const MainCart = (props) => {
  let newCart = props.items.filter((item) => {
    return item.incart;
  });

  return (
    <div className="main-cart">
      {newCart.length === 0 && <h1 className="text-center">Cart is Empty</h1>}

      <div className="cart-items">
        <Table striped bordered hover variant="dark">
          <thead>
            {newCart.length === 0 && (
              <tr className="d-none">
                <th className="text-center">Name</th>
                <th className="text-center">price</th>
                <th className="text-center">Description</th>
              </tr>
            )}
            {newCart.length !== 0 && (
              <tr className="">
                <th className="text-center">Name</th>
                <th className="text-center">price</th>
                <th className="text-center">Description</th>
              </tr>
            )}
          </thead>
          <tbody>
            {newCart.map((item) => {
              return (
                <tr className="menu-item" key={item.id}>
                  <td className="menu-item-name ">{item.name}</td>
                  <td className="menu-item-price text-center">{item.price}</td>
                  <td className="menu-item-desc">{item.desc}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MainCart;
