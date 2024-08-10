import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromBasket,
  updateProductAmountInBasket,
} from "../../redux/BasketAction";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function BasketOffcanvas({ show, handleClose }) {
  const basketProducts = useSelector(
    (state) => state.productState.basketProducts
  );
  const dispatch = useDispatch();
  const handleDeleteButton = (id) => {
    dispatch(removeProductFromBasket(id));
  };
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    let total = basketProducts.reduce((total, product) => {
      console.log(
        `Product ID: ${product.id}, Price: ${product.basketPrice}, Amount: ${product.basketAmount}`
      );
      return total + product.basketPrice * product.basketAmount;
    }, 0);
    setBasketTotal(total);
  }, [basketProducts]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      !e.target.from_name.value ||
      !e.target.from_email.value ||
      !e.target.phone.value
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    const productInfo = basketProducts
      .map(
        (product) =>
          `${product.name} (Quantity: ${
            inputValues[product.id]
          }, Total Price: ${(inputValues[product.id] * product.basketPrice)
            .toFixed(2)
            .replace(/\.00$/, "")}Dt)`
      )
      .join("\n");

    const productImages = basketProducts
      .map((product) => `${product.image}`)
      .join("<br />");

    const templateParams = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      phone: e.target.phone.value,
      products: productInfo,
      images: productImages,
      total: basketTotal.toFixed(2),
    };

    try {
      toast.info("Sending...");
      await emailjs.send(
        "service_k12kbtl",
        "template_iifdt1p",
        templateParams,
        "tZzgHjc8ii-Bv7g-p"
      );

      toast.success("Email sent successfully!");
      e.target.reset();
    } catch (error) {
      toast.error("Error sending email.");
    }
  };

  const handleInputChange = (id, newValue) => {
    setInputValues({
      ...inputValues,
      [id]: newValue,
    });
  };
  const handleInputSubmit = (id) => {
    dispatch(updateProductAmountInBasket(id, inputValues[id]));
  };

  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    let total = basketProducts.reduce((total, product) => {
      return total + product.basketPrice * (inputValues[product.id] || 1);
    }, 0);
    setBasketTotal(total);
  }, [basketProducts, inputValues]);

  useEffect(() => {
    setInputValues((prevValues) =>
      basketProducts.reduce((values, product) => {
        return { ...values, [product.id]: prevValues[product.id] || 1 };
      }, {})
    );
  }, [basketProducts]);
  return (
    <>
      <div
        className={show ? "black-backdrop" : "black-backdrop d-none"}
        onClick={handleClose}
      ></div>
      <div className={`basket-offcanvas ${show ? "active" : ""}`}>
        <div className="header">
          <span>Products</span>
          <button className="close-button" onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="body">
          <form onSubmit={sendEmail} className="basket-form">
            <input
              type="text"
              name="from_name"
              className="form-control"
              placeholder="Name"
            />
            <input
              type="email"
              name="from_email"
              className="form-control"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
            />
            <button className="submit-button" type="submit">
              Send
            </button>
          </form>
          <div className="basket-product-table">
            <div className="basket-result">
              <span className="label">Total:</span>
              <span className="total-price">{basketTotal.toFixed(2)} Dt</span>
            </div>
            {basketProducts.length === 0 && (
              <span className="empty-text">It`s empty here</span>
            )}
            <div
              className="products-wrapper"
              style={{
                maxHeight: "300px",
                overflowY: "auto",
                justifyContent: "flex-start",
              }}
            >
              {basketProducts.length > 0
                ? basketProducts.map((product) => (
                    <div className="product" key={product.id}>
                      <div className="left">
                        <div className="image">
                          <img src={product.image} alt="product" />
                        </div>
                        <div className="info">
                          <span className="name">{product.name}</span>
                          <span className="category">{product.category}</span>
                          <div className="d-flex">
                            <span className="price">
                              {product.basketPrice.toFixed(2)} Dt
                            </span>
                            <span className="mx-2">/</span>
                            <div
                              className="quantity-control"
                              style={{ display: "flex" }}
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  handleInputChange(
                                    product.id,
                                    Math.max(
                                      1,
                                      (inputValues[product.id] || 1) - 1
                                    )
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                type="text"
                                min="1"
                                value={inputValues[product.id] || ""}
                                onChange={(e) =>
                                  handleInputChange(
                                    product.id,
                                    Math.max(1, parseInt(e.target.value))
                                  )
                                }
                                onBlur={() => handleInputSubmit(product.id)}
                                style={{
                                  width: "50px",
                                  textAlign: "center",
                                  background: "transparent",
                                  border: "none",
                                }}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  handleInputChange(
                                    product.id,
                                    (inputValues[product.id] || 1) + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="product-delete-button"
                        onClick={() => handleDeleteButton(product.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasketOffcanvas;
