import React, { useState, useRef, useEffect } from "react";

export default function Paypal() {
  const paypal = useRef();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [amount]);

  const handleAmountChange = (event) => {
    const value = event.target.value;
    // Check if the entered value is a valid number
    if (value.trim() === "") {
      setAmount("");
      setError("Please enter an amount");
    } else if (!/^\d+$/.test(value)) {
      setAmount("");
      setError("Please enter a valid integer amount");
    } else {
      setAmount(value);
      setError("");
    }
  };

  return (
    <div>
      <div className="container appointment-item appointment-item-two row">
        <div className="appointment-form">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <i className="icofont-pay"></i>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Amount in $"
                  value={amount}
                  onChange={handleAmountChange}
                />
                {error && <small className="text-danger">{error}</small>}
              </div>
            </div>
          </div>
        </div>
        {amount && <div className="col-12" ref={paypal}></div>}
      </div>
    </div>
  );
}
