import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./style.css";

const Payment = () => {
  const { cartItems, completePayment } = useCart();
  const navigate = useNavigate();

  // Calculate subtotal, tax, total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handlePayment = () => {
    completePayment();
    alert("Payment Successful!");
    navigate("/orders"); // Go to order history
  };

  return (
    <div className="payment-container">
      <h2>💳 Payment</h2>

      {cartItems.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <div className="payment-details">
          {cartItems.map((item) => (
            <div key={item.id} className="payment-item">
              <h4>{item.name}</h4>
              <p>
                ₹{Number(item.price || 0).toLocaleString("en-IN")} ×{" "}
                {item.quantity || 1} = ₹
                {(
                  (item.price || 0) * (item.quantity || 1)
                ).toLocaleString("en-IN")}
              </p>
            </div>
          ))}

          <div className="payment-summary">
            <p>Subtotal: ₹{subtotal.toLocaleString("en-IN")}</p>
            <p>Tax (10%): ₹{tax.toLocaleString("en-IN")}</p>
            <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>
          </div>

          <button className="pay-now-btn" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
