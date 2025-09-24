import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = "http://localhost:9090/back1";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  // Helper to safely read quantity
  const qtyOf = (item) => (typeof item.quantity === "number" ? item.quantity : 1);

  // Increment / Decrement handlers
  const handleInc = (item) => updateQuantity(item.id, qtyOf(item) + 1);
  const handleDec = (item) => updateQuantity(item.id, Math.max(qtyOf(item) - 1, 1));

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, it) => acc + (it.price || 0) * qtyOf(it),
    0
  );
  const tax = subtotal * 0.1; // Example: 10% tax
  const total = subtotal + tax;

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={`${BASE_URL}/api/products/images/${item.imagePath}`}
                  alt={item.name}
                />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{Number(item.price || 0).toLocaleString("en-IN")}</p>

                  {/* Quantity controls */}
                  <div className="cart-quantity">
                    <button onClick={() => handleDec(item)}>-</button>
                    <span>{qtyOf(item)}</span>
                    <button onClick={() => handleInc(item)}>+</button>
                  </div>

                  <p className="cart-subtotal">
                    Subtotal: ₹{(Number(item.price || 0) * qtyOf(item)).toLocaleString("en-IN")}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: ₹{subtotal.toLocaleString("en-IN")}</p>
            <p>Tax (10%): ₹{tax.toLocaleString("en-IN")}</p>
            <h4>Total: ₹{total.toLocaleString("en-IN")}</h4>

            <div className="cart-actions">
              <button onClick={() => navigate("/products")}>
                Continue Shopping
              </button>
              <button onClick={clearCart} className="clear-btn">
                Clear Cart
              </button>
              <button onClick={() => navigate("/payment")} className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
