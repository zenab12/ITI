import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Menu&Cart/Cart";
import Menu from "./Menu";

export default function Header(props) {
  console.log(props.items);
  let ctr = props.items.filter((item) => item.incart)?.length;
  return (
    <header className="bg-dark d-flex justify-content-between p-2">
      <h3 className="text-light pt-1">Restaurant</h3>
      <ul className="d-flex pt-2 bg-dark justify-content-center gap-5 list-unstyled me-5 ">
        <li>
          <Link className="link-light text-decoration-none " to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link-light text-decoration-none" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="link-light text-decoration-none" to={"/cart"}>
            Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              style={{ width: 25 }}
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span
              className="bg-light text-center d-inline-block text-dark rounded-circle "
              style={{
                width: 20,
                height: 20,
                position: "relative",
                left: -10,
                top: -10,
              }}
            >
              {ctr}
            </span>
          </Link>
        </li>
        <li>
          <Link className="link-light text-decoration-none f" to={"/menu"}>
            Menu
          </Link>
        </li>
        <li>
          <Link className="link-light text-decoration-none f" to={"/admin"}>
            Admin
          </Link>
        </li>
      </ul>
    </header>
  );
}
