import React from "react";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";

const Admin = (props) => {
  let getCategoryName = (id) => {
    return props.categories.filter((category) => category.id === id);
  };
  console.log(getCategoryName(1));
  console.log(props);
  return (
    <>
      <div className="menu d-flex flex-column m-auto mt-2 align-items-center ">
        <h1 className="text-center mt-4 mb-2">Admin Dashboard 🙂🙂</h1>

        <div className="d-flex justify-center gap-5  admin-container-header">
          <div className="d-flex align-items-end justify-center ms-5 mt-4">
            <button
              className="btn btn-warning rounded-0"
              //   onClick={() => props.insertItem()}
            >
              <Link
                to="/createproduct"
                className="link-dark text-decoration-none"
              >
                insert new product 🥳
              </Link>
            </button>
            <button
              className="btn btn-danger rounded-0"
              onClick={() => props.Reset()}
            >
              Delete All😱
            </button>
          </div>
        </div>
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
                  <th className="text-center">Id</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">price </th>
                  <th className="text-center">Description</th>
                  <th className="text-center">category id </th>
                  <th className="text-center">category name</th>
                  <th className="text-center">Edit</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {props.renderedItems.map((elem) => {
                  return (
                    <tr className="menu-item" key={elem.id}>
                      <td className="menu-item-id ">{elem.id}</td>
                      <td className="menu-item-name ">{elem.name}</td>
                      <td className="menu-item-price text-center">
                        {elem.price}
                      </td>
                      <td className="menu-item-desc">{elem.desc}</td>
                      <td className="ment-item-category">{elem.category}</td>
                      {props.categories
                        .filter(
                          (category) =>
                            parseInt(category.id) === parseInt(elem.category)
                        )
                        .map((elem) => {
                          return (
                            <td className="ment-item-category text-light">
                              {elem.name}
                            </td>
                          );
                        })}

                      <td className="menu-item-edit">
                        <button
                          className="btn btn-warning"
                          onClick={() => props.editItem(elem.id)}
                        >
                          <Link
                            to="/editproduct/:id"
                            className="link-dark text-decoration-none"
                          >
                            Edit 🤔
                          </Link>
                        </button>
                      </td>
                      <td className="menu-item-del">
                        <button
                          className="btn btn-danger"
                          onClick={() => props.deleteItem(elem.id)}
                        >
                          Delete 🤫
                        </button>
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

export default Admin;
