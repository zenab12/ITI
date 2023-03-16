import React from "react";

const CreateProduct = (props) => {
  return (
    <div>
      <h1 className="mt-5">Create Product 🤠</h1>

      <form className="create-product mt-5">
        <div className="form-control">
          <label> product Name : </label>
          <input
            type="text"
            name="product-name"
            placeholder="ex: Feter Meshaltat"
          />
        </div>
        <div className="form-control">
          <label> product price : </label>
          <input type="text" name="product-price" placeholder="ex: 100" />
        </div>
        <div className="form-control">
          <label> product description : </label>
          <input
            type="text"
            name="product-desc"
            placeholder="ex: it is awesome feter"
          />
        </div>
        <div className="form-control">
          <label> product category name : </label>
          <select>
            {props.categories.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>{" "}
        </div>
        <button className="btn btn-warning w-75 text-dark  rounded-0 m-auto">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
