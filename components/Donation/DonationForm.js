import React, { useState, useRef, useEffect } from "react";

export default function Paypal() {
  const paypal = useRef();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [previousAmount, setPreviousAmount] = useState("");
  const [showPaypalButton, setShowPaypalButton] = useState(false);
  const [renderPaypalButton, setRenderPaypalButton] = useState(false);

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
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

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (amount > 0 && !error) {
      // Disable the button and set the previous amount
      setIsButtonDisabled(true);
      setPreviousAmount(amount);
      setShowPaypalButton(true);
      setRenderPaypalButton(true);
    }
  };

  useEffect(() => {
    // Enable the button and clear the previous amount when the input value changes
    setIsButtonDisabled(false);
    setPreviousAmount("");
    setShowPaypalButton(false);
    setRenderPaypalButton(false);
  }, [amount]);

  useEffect(() => {
    if (renderPaypalButton) {
      // Call the PayPal functionality here when the amount is entered and there are no errors
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
    }
  }, [renderPaypalButton]);

  return (
    <div>
      <div className="container appointment-item appointment-item-two row">
        <div className="appointment-form">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-group">
                <i className="icofont-pay"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Amount in $"
                  value={amount}
                  onChange={handleAmountChange}
                />
                {error && <small className="text-danger">{error}</small>}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="common-btn">
                <button
                  onClick={handleButtonClick}
                  style={{
                    backgroundColor: "#0046c0",
                    color: "white",
                  }}
                  disabled={isButtonDisabled && amount === previousAmount}
                >
                  {"Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {showPaypalButton && <div className="col-12" ref={paypal}></div>}
      </div>
    </div>
  );
}
