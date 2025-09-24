import React from "react";
import { useCart } from "../context/CartContext";
import "./style.css";

const PaymentHistory = () => {
  const { paymentHistory } = useCart();

  return (
    <div className="history-container">
      <h2>💰 Payment History</h2>
      {paymentHistory.length === 0 ? (
        <p>No past payments</p>
      ) : (
        <div className="history-list">
          {paymentHistory.map((transaction) => {
            const subtotal = transaction.items.reduce(
              (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
              0
            );
            const tax = subtotal * 0.1;
            const total = subtotal + tax;

            return (
              <div key={transaction.id} className="transaction-card">
                <p className="transaction-date">
                  <strong>Transaction Date:</strong> {transaction.date}
                </p>
                <div className="transaction-items">
                  {transaction.items.map((item) => (
                    <div key={item.id} className="transaction-item">
                      <span>{item.name}</span>
                      <span>
                        ₹{Number(item.price || 0).toLocaleString("en-IN")} ×{" "}
                        {item.quantity || 1} = ₹
                        {(
                          (item.price || 0) * (item.quantity || 1)
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="transaction-summary">
                  <p>Subtotal: ₹{subtotal.toLocaleString("en-IN")}</p>
                  <p>Tax (10%): ₹{tax.toLocaleString("en-IN")}</p>
                  <h4>Total: ₹{total.toLocaleString("en-IN")}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
