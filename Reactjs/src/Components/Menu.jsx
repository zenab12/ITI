import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import CartWithMenu from "./Menu&Cart/Cart";

const Menu = (props) => {
  return (
    <>
      <div className="menu  d-flex flex-column m-auto mt-5 align-items-center ">
        <h1 className="text-center m-3">Menu</h1>
        {props.items.length === 0 && (
          <div className="spinner-border text-dark" role="status"></div>
        )}
        {props.items.length !== 0 && (
          <div className="menu-items w-[800px] d-flex gap-5 ">
            <div
              className="btn-group-vertical align-self-start w-4 rounded-0"
              role="group"
              aria-label="Vertical button group"
              style={{ width: 120 }}
            >
              {props.categories.map((item) => {
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`btn btn-${
                      item.id === props.currentCategory ? "warning" : "dark"
                    }`}
                    onClick={() => props.handleCategory(item.id)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">price</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Add To Cart</th>
                </tr>
              </thead>
              <tbody>
                {props.renderedItems.map((elem) => {
                  return (
                    <tr className="menu-item" key={elem.id}>
                      <td className="menu-item-name ">{elem.name}</td>
                      <td className="menu-item-price text-center">
                        {elem.price}
                      </td>
                      <td className="menu-item-desc">{elem.desc}</td>
                      <td className="menu-item-add d-flex jus/tify-content-center">
                        <CartWithMenu
                          id={elem.id}
                          cartState={elem.incart}
                          setCartState={props.addToCart}
                          handlecountofaddedtocart={() =>
                            props.handlecountofaddedtocart()
                          }
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
